const express = require("express");
//const bodyParser = require("body-parser");

const app = express();

app.use(express.json());

app.get("/irra", (request, response)=>{
    response.send({
        data: "irra"});
});

app.post("/login", (request, response)=>{
    const usuario = request.body.usuario;
    const senha = request.body.senha;

    response.send({
        message: "Autenticação realizada com sucesso!",
        data:{
            usuario,
            senha,
        },
    });
});

app.listen(8080, (error) =>{
    if(error){
        console.log(error);
    } else{
        console.log("Servidor tá on piazadaaaa, porta 8080");
    }
});

