const express = require("express");
const routes = require("./route/route.js");

const app = express();

app.use(express.json());
app.use(routes);

app.get("/teste", (req, rep) => {
    console.log("teste");
    rep.send("Olá Mundo!");
});

app.listen(8080, (error) => {
    if (error) {
        console.error(error);
    } else {
        console.log("O servidor está em execução na porta 8080");
    }
});