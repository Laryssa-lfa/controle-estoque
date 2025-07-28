import express from "express";
import { findAll, findById, remove, save, update } from "../services/usersService.js";

const usersRouter = express.Router();

function serverErrorMsg(res) {
  return res.status(500).json({ msg: "Erro Interno no Servidor." });
}

function userNotFound(res) {
  return res.status(404).json({ msg: "Usuário não Encontrado." });
}

usersRouter.get("/users", async (req, res) => {
  try {
    const users = await findAll();
    return res.status(200).json(users);
  } catch (error) {
    serverErrorMsg(res);
  }
});

usersRouter.get("/users/:id", async (req, res) => {
  try {
    const user = await findById(req.params.id);

    if (user) {
      return res.status(200).json(user);
    } else {
      userNotFound(res);
    }
  } catch (error) {
    serverErrorMsg(res);
  }
});

usersRouter.post("/users", async (req, res) => {
  try {
    await save(req.body);
    return res.status(201).json({ msg: "Usuário Cadastrado." });
  } catch (error) {
    serverErrorMsg(res);
  }
});

usersRouter.put("/users/:id", async (req, res) => {
  try {
    const flag = await update(req.params.id, req.body);

    if (flag) {
      return res.status(200).json({ msg: "Usuário Alterado." });
    } else {
      userNotFound(res);
    }
  } catch (error) {
    serverErrorMsg(res);
  }
});

usersRouter.delete("/users/:id", async (req, res) => {
  try {
    const flag = await remove(req.params.id);

    if (flag) {
      return res.status(200).json({ msg: "Usuário Excluído." });
    } else {
      userNotFound(res);
    }
  } catch (error) {
    serverErrorMsg(res);
  }
});

export default usersRouter;
