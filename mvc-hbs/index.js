const express = require("express");
const hbs = require("hbs");
const routes = require("./routes/index.js");

const app = express();

app.use(express.json());

hbs.registerPartials(`${__dirname}/views`);
app.set("view engine", "hbs");
app.set("view options", {
  layout: "layouts/default",
});

app.use(routes);

app.listen(8080, (error) => {
  if (error) {
    console.log(error);
  }
  console.log("O servidor esta rodando na porta 8080! 👍");
});