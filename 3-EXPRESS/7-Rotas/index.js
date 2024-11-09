

const express = require("express"); //chamda do express*

const app = express(); //Invocando o express*

const port = 3000; //porta do servidor - ambiente

const path = require("path"); //Importação do modulo "path"

const users = require("./users/index")

// Ler o body da requisição:
app.use(  //Aceita a leitura do objeto JSON da requisição 
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
//
//
const basePath = path.join(__dirname, "templates"); //Definindo o caminho base no caso, diretorio atual/templates



const checkAuth = function (req, res, next) {
  //Função que verificar o status de autenticação
  req.authStatus = true;

  if (req.authStatus) {
    console.log("esta logado");
    next(); //Avançar para a proxima etapa do código*
  } else {
    console.log("não esta logado");
    next(); //Avançar para a proxima etapa do código*
  }
};

app.use(checkAuth); //chamado do middleware


app.use('/users', users)

app.get("/", (req, res) => {
  //Função para acessar a url e fazer o get ("url", ("requisição", "resposta"))

  res.sendFile(`${basePath}/index.html`); //retornando como resposta o arquivo no caminho passado "sendFile"
});

// Inicia o servidor:
app.listen(port, () => {
  console.log(`Executando sevidor na porta ${port}`);
});

// Metodo post
app.post("/users/save", (req, res) => {
  //Quando houver o post na rota:

  // Extrair o valor das respostas :  *IMPORTANTE: O ATRIBUTO DEVE SER IGUAL AO "NAME" DO INPUT, PARA TER O ACESSO
  const name = req.body.name;
  const age = req.body.age;

  console.log(`Nome do Usuario:${name}`);
  console.log(`Idade do Usuario:${age}`);
});
