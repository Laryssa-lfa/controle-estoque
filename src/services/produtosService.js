import app from "../firebase/app.js";
import { getFirestore } from "firebase-admin/firestore";

const db = getFirestore(app);

async function findAll() {
  const documents = await db.collection("produtos").get();
  const produtos = [];

  documents.forEach(doc => {
    produtos.push({ id: doc.id, ...doc.data() });
  });

  return produtos
}

async function findById(id) {
  const doc = await db.collection("produtos").doc(id).get();
  if (doc.exists) {
    return { id: doc.id, ...doc.data() };
  } else {
    return null;
  }
}

async function save(produto) {
  await db.collection("produtos").add(produto);
}

async function update(id, produto) {
  const docRef = db.collection("produtos").doc(id);
  const doc = await docRef.get();

  if (doc.exists) {
    await docRef.update(produto);
    return true
  } else {
    return false;
  }
}

async function remove(id) {
  const docRef = db.collection("produtos").doc(id);
  const doc = await docRef.get();

  if (doc.exists) {
    await docRef.delete();
    return true;
  } else {
    return false;
  }
}

export { findAll, findById, save, update, remove };
