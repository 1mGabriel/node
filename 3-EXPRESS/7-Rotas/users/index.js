const express = require("express")
const router = express.Router()
const path = require("path"); //Importação do modulo "path"
const basePath = path.join(__dirname, "templates"); //Definindo o caminho base no caso, diretorio atual/templates

// Acesso á rota de formulario

router.get("/add", (req, res) => {
    res.sendFile(`${basePath}/userForm.html`);
  });
  
  router.get("/:id", (req, res) => {
    //Função para acessar a url e fazer o get ("url", ("requisição", "resposta"))
  
    const id = req.params.id; //Extraindo o parametro da URL
  
    //Leitura da tabela user e resgatar o usuario do banco onde o ID é igual o ID da url
  
    console.log(`O id da url é: ${id}`);
  
    res.sendFile(`${basePath}/users.html`); //retornando como resposta o arquivo no caminho passado "sendFile"
  });
  
  // Metodo post
  router.post("/save", (req, res) => {
    //Quando houver o post na rota:
  
    // Extrair o valor das respostas :  *IMPORTANTE: O ATRIBUTO DEVE SER IGUAL AO "NAME" DO INPUT, PARA TER O ACESSO
    const name = req.body.name;
    const age = req.body.age;
  
    console.log(`Nome do Usuario:${name}`);
    console.log(`Idade do Usuario:${age}`);
  });

  module.express = router
  
  