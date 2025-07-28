import express from "express";
import { findAll, findById, remove, save, update } from "../services/produtosService.js";

const produtosRouter = express.Router();

produtosRouter.get("/produtos", async (req, res) => {
  try {
    const produtos = await findAll();
    return res.status(200).json(produtos);
  } catch (error) {
    return res.status(500).json({ msg: "Erro Interno no Servidor." });
  }
});

produtosRouter.get("/produtos/:id", async (req, res) => {
  try {
    const produto = await findById(req.params.id);
    if (produto) {
      return res.status(200).json(produto);
    } else {
      return res.status(404).json({ msg: "Produto não Encontrado." });
    }
  } catch (error) {
    return res.status(500).json({ msg: "Erro Interno no Servidor." });
  }
});

produtosRouter.post("/produtos", async (req, res) => {
  try {
    await save(req.body);
    return res.status(201).json({ msg: "Produto Cadastrado." });
  } catch (error) {
    return res.status(500).json({ msg: "Erro Interno no Servidor." });
  }
});

produtosRouter.put("/produtos/:id", async (req, res) => {
  try {
    const flag = await update(req.params.id, eq.body);
    if (flag) {
      return res.status(200).json({ msg: "Produto Alterado." });
    } else {
      return res.status(404).json({ msg: "Produto não Encontrado." });
    }
  } catch (error) {
    return res.status(500).json({ msg: "Erro Interno no Servidor." });
  }
});

produtosRouter.delete("/produtos/:id", async (req, res) => {
  try {
    const flag = await remove(req.params.id);
    if (flag) {
      return res.status(200).json({ msg: "Produto Excluído." });
    } else {
      return res.status(404).json({ msg: "Produto não Encontrado." });
    }
  } catch (error) {
    return res.status(500).json({ msg: "Erro Interno no Servidor." });
  }
});

export default produtosRouter;
