const con = require("../mysql-connection.js");

module.exports = {
  buscaTodos: () => {
    return con.select().from("funcionarios");
  },
  buscaPorId: (id) => {
    return con.select().from("funcionarios").where("id", "=", id);
  
  },

  inserir:() => {
    return con.insert(funcionario).into("funcionarios");
  },

  deletar: (id) => {
    return con("funcionarios").where({id: id }).del();
  },

  atualizar: (funcionario, id) => {
    return con("funcionarios").update(funcionario).where({ id: id});
  },
  buscaTodosDepDoFunc:() => {
    return con("funcionarios").innerJoin(
    "dependentes", 
    "funcionarios.id", 
    "dependentes.funcionario_id"
    );
  },
  buscaDepDoFunc: (id) => {
    return con.select("FUN.ID",
            "FUN.NOME AS NOME_FUNCIONARIO",
            "DEP.NOME AS NOME_DEPENDENTE",
            "DEP.TELEFONE AS TELEFONE_DEPENDENTE"
        ).from("funcionarios as FUN")
        .innerJoin("Dependentes as DEP", "FUN.ID", "DEP.FUNCIONARIO_ID")
        .where("FUN.ID", id)

  },

};
