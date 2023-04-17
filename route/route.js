const express = require("express");
const empresaRoute = require("./empresa.routes");

const routes = new express.Router();

routes.get("/empresa", empresaRoute);

module.exports = routes;