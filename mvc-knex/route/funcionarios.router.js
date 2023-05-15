const express = require("express");
const funcionariosController = require("../controller/funcionarios.controller");
const funcionariosRepository = require("../repository/funcionarios.repository");

const routes = new express.Router();

routes.get("/", funcionariosController.buscaTodos);
routes.get("/:id([0-9]+)", funcionariosController.buscaPorId);
routes.post("/", funcionariosController.inserir);
routes.delete("/:id([0-9]+)", funcionariosRepository.deletar);
routes.put("/:id([0-9]+)", funcionariosController.atualizar);
routes.get("/dependentes", funcionariosController.buscaTodosDepDoFunc);
routes.get("/dependentes/:id([0-9]+)", funcionariosController.buscaDepDoFunc);

module.exports = routes;