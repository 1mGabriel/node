// Para enviar os dados vamos precisar criar um FORM e mandar os dados via POST para alguma URL
// No express precisamos colocar alguns middlewares como o express.json para ler dados do body
// E também uma roda que vai receber esstes dados, utilizando o método post do express:

const express = require("express"); //chamda do express*

const app = express(); //Invocando o express*

const port = 3000; //porta do servidor - ambiente

const path = require("path"); //Importação do modulo "path"

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

// Acesso á rota de formulario

app.get("/users/add", (req, res) => {
  res.sendFile(`${basePath}/userForm.html`);
});

app.get("/users/:id", (req, res) => {
  //Função para acessar a url e fazer o get ("url", ("requisição", "resposta"))

  const id = req.params.id; //Extraindo o parametro da URL

  //Leitura da tabela user e resgatar o usuario do banco onde o ID é igual o ID da url

  console.log(`O id da url é: ${id}`);

  res.sendFile(`${basePath}/users.html`); //retornando como resposta o arquivo no caminho passado "sendFile"
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


app.get("/", (req, res) => {
  //Função para acessar a url e fazer o get ("url", ("requisição", "resposta"))

  res.sendFile(`${basePath}/index.html`); //retornando como resposta o arquivo no caminho passado "sendFile"
});

// Pagina de ERRO: EXECUTADO QUANDO TUDO Q ESTIVER ACIMA NÃO FOR ACEITO
app.use(function(req,res, next){

  res.status(404).sendFile(`${basePath}/404.html`)
})

// Inicia o servidor:
app.listen(port, () => {
  console.log(`Executando sevidor na porta ${port}`);
});

