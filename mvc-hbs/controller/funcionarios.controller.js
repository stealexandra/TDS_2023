const funcionariosRepository = require("../repository/funcionarios.repository");

module.exports = {
  buscaTodos: async (req, res) => {
    const data = await funcionariosRepository
      .buscaTodos()
      .then((result) => result)
      .catch((error) => {
        res.status(500).send(error);
      });
    res.render("funcionarios", { data });
  },
  buscaPorId: async (req, res) => {
    const { id } = req.params;

    let data = await funcionariosRepository.buscaPorId(id);
    data = data[0];
    res.render("cadastro_funcionarios", { data });
      
  },
  inserir: async (req, res) => {
    var funcionario = req.body;

    funcionario.STATUS = funcionario.STATUS == "on";
    funcionario.CPF = funcionario.CPF.replaceAll(".", "").replaceAll("-", "");

    if (funcionario.ID == "") {
      funcionario.ID = null;
   await funcionariosRepository.inserir(funcionario);
    } else {
      const { ID } = funcionario;
      await funcionariosRepository.atualizar(funcionario, ID);
    }

   res.redirect("funcionarios");


    funcionariosRepository
      .inserir(funcionario)
  },
  deletar: (req, res) => {
    const { id } = req.params;

    funcionariosRepository
      .deletar(id)
      .then(() => {
        res.send({ msg: "Funcionario deletado com sucesso!" });
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },
  atualizar: (req, res) => {
    const funcionario = req.body;
    const { id } = req.params;

    funcionariosRepository
      .atualizar(funcionario, id)
      .then(() => {
        res.send({
          msg: "Funcionario atualizado com sucesso!",
          funcionario,
        });
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },
  buscaTodosDepDoFunc: async (req, res) => {
    const data = await funcionariosRepository
      .buscaTodosDepDoFunc();
    res.render("dependentes", { data });
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

      res.render("cadastro_dependentes", { data });
  },
  inserirDependentes: async (req, res) => {
    let dependente = req.body;
    console.log(dependente);

    if(dependente.ID == ""){
      dependente.ID = null;
    }

    await funcionariosRepository.inserirDependentes(dependente);

      res.redirect("dependentes");
  },

  deletarDependentes: async (req, res) => {
    const { id } = req.params;
    console.log(dependente);

    await funcionariosRepository.deletarDependentes(dependente);

      res.redirect("dependentes");
  },

  //   funcionariosRepository
  //     .deletarDependentes(id)
  //     .then(() => {
  //       res.send({ msg: "Dependente deletado com sucesso!" });
  //     })
  //     .catch((error) => {
  //       res.status(500).send(error);
  //     });
  // },

  atualizarDependentes: (req, res) => {
    const dependentes = req.body;
    const { id } = req.params;

    funcionariosRepository
      .atualizarDependentes(dependentes, id)
      .then(() => {
        res.send({
          msg: "Dependente atualizado com sucesso!",
          dependentes,
        });
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },
};

function formataData(end_date) {
  var ed = new Date(end_date);
   var d = ed.getDay();
  var m = ed.getMonth() + 1;
  var y = ed.getFullYear();
  return "" + y + "-" + (m <= 9 ? "0" + m : m) + "-" + (d <= 9 ? "0" + d : d);
}