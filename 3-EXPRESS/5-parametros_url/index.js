// Podemos resgatar os parametros da URL por meeio do "req";
// Acessamos "req.params.<nome>"
// Onde nome deve ser o que está definido na URL do "express"
// Que fica dessa forma: "/users/:id"
// Neste caso estariamos buscando o usuario no banco de dados pelo ID

const express = require("express") //chamda do express*

const app = express() //Invocando o express*

const port = 3000 //porta do servidor - ambiente

const path =  require("path") //Importação do modulo "path"

const basePath = path.join(__dirname, 'templates') //Definindo o caminho base no caso, diretorio atual/templates

const checkAuth = function(req,res,next){ //Função que verificar o status de autenticação
    req.authStatus = true

    if(req.authStatus){
        console.log("esta logado")
        next() //Avançar para a proxima etapa do código*
    }else{
        console.log("não esta logado")
        next() //Avançar para a proxima etapa do código*
    }
}

app.use(checkAuth) //chamado do middleware


app.get('/users/:id', (req, res) =>{  //Função para acessar a url e fazer o get ("url", ("requisição", "resposta"))

   const id = req.params.id //Extraindo o parametro da URL 

    //Leitura da tabela user e resgatar o usuario do banco onde o ID é igual o ID da url
    
    console.log(`O id da url é: ${id}`)


    res.sendFile(`${basePath}/users.html`) //retornando como resposta o arquivo no caminho passado "sendFile"

})
app.get('/', (req, res) =>{  //Função para acessar a url e fazer o get ("url", ("requisição", "resposta"))

    res.sendFile(`${basePath}/index.html`) //retornando como resposta o arquivo no caminho passado "sendFile"

})


// Inicia o servidor:
app.listen(port, ()=>{
    console.log(`Executando sevidor na porta ${port}`)
})