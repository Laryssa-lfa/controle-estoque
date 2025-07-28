import app from "../firebase/app.js";
import { getFirestore } from "firebase-admin/firestore";

const db = getFirestore(app);
const collectionDB = db.collection("users");

async function findAll() {
  const documents = await collectionDB.get();
  return documents.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

async function findById(id) {
  const doc = await collectionDB.doc(id).get();
  if (doc.exists) {
    return { id: doc.id, ...doc.data() };
  } else {
    return null
  }
}

async function save(user) {
  await collectionDB.add(user);
}

async function update(id, user) {
  const docRef = collectionDB.doc(id);
  const doc = await docRef.get();
  if (doc.exists) {
    await docRef.update(user);
  }
  return doc.exists;
}

async function remove(id) {
  const docRef = collectionDB.doc(id);
  const doc = await docRef.get();
  if (doc.exists) {
    await docRef.delete();
  }
  return doc.exists;
}

export { findAll, findById, save, update, remove };
