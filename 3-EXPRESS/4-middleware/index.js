// Middlewares são códigos que podem ser executados no meio/entre (middle) de alguma ação e outra
// Por exemplo: Verificar se o usuário está logado, podemos ter um para esta verificação;
// O método que nos dá acesso a utilizar middlewares é o "use" no Express

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


app.get('/', (req, res) =>{  //Função para acessar a url e fazer o get ("url", ("requisição", "resposta"))

    res.sendFile(`${basePath}/index.html`) //retornando como resposta o arquivo no caminho passado "sendFile"

})


// Inicia o servidor:
app.listen(port, ()=>{
    console.log(`Executando sevidor na porta ${port}`)
})