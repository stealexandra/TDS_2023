const funcionariosRepository = require("../repository/funcionarios.repository");

module.exports = {
  buscaTodos: (req, res) => {
    funcionariosRepository
      .buscaTodos()
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },
  buscaPorId: (req, res) => {
    const { id } = req.params;

    //Se não houver id ele aparece erro
    if (!id) {
        res.status(404).send({ msg: "Parâmetro ID obrigatório" })
    }

    funcionariosRepository
    .buscaPorId(id)
    .then((data) => {
        res.send(data);
    })
    .catch((error) => {
        res.status(500).send(error);
        });
},
inserir:(req, res) =>{
  const funcionario = req.body;

    if (funcionario.length > 1){
      res.send({
        msg: "Número de registros informado é maior que o permitido!"
      });
    }

  funcionariosRepository
  .inserir(funcionario)
  .then((data) => {
    res.send({
      msg: "Funcionario inserido com sucesso!",
      funcionario,
    });
  })

  .catch((error) => {
    res.status(500).send(error);
    });  
},

  deletar: (req, res) =>{
    const { id } = req.params;

    funcionariosRepository
    .deletar(id)
    .then((data) => {
      res.send({ msg: "Funcionario deletado com sucesso!"});
    })

    .catch((error) => {
      res.status(500).send(error);
      });
  },

    atualizar: (re, res) => {
      const funcionario = req.body;
      const { id } = req.params;

      funcionariosRepository
      .atualizar(funcionario)
      .then(() => {
        res.send({msg: "Funcionario atualizado com sucesso", 
      funcionario
    });
      })
      .catch((error) => {
        res.status(500).send(error);
        });
    },
    buscaTodosDepDoFunc: (req, res) => {
      funcionariosRepository
      .buscaTodosDepDoFunc()
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        res.status(500).send(error);
        });
    },
    buscaDepDoFunc: (req, res) => {
      const { id } = req.params;
      funcionariosRepository
      .buscaDepDoFunc(id)
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        res.status(500).send(error);
        });
      
    },


};