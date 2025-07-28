import "dotenv/config";
import express from "express";
import cors from "cors";
import produtosRouter from "./routers/produtosRouter.js";
import usersRouter from "./routers/usersRouters.js";

const server = express();
server.use(cors({ origin: "*" }));
server.use(express.json());

const port = process.env.PORT || 8080;

server.use(produtosRouter);
server.use(usersRouter);

server.listen(port, () => {
  console.log(`Servidor executando na porta ${port}`);
  console.log(`Acesse em: http://localhost:${port}`);
});
