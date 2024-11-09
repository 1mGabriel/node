// Para enviar HTML como resposta utilizamos o metodos "sendFile"
// Isso faz com que o arquivo seja renderizado no navegador
// Precisamos acessar o arquivo por meio do diretorio bae, isso requer o modulo "path"


const express = require("express") //chamda do express*

const app = express() //Invocando o express*

const port = 3000 //porta do servidor - ambiente

const path =  require("path") //Importação do modulo "path"

const basePath = path.join(__dirname, 'templates') //Definindo o caminho base no caso, diretorio atual/templates

app.get('/', (req, res) =>{  //Função para acessar a url e fazer o get ("url", ("requisição", "resposta"))

    res.sendFile(`${basePath}/index.html`) //retornando como resposta o arquivo no caminho passado "sendFile"

})


// Inicia o servidor:
app.listen(port, ()=>{
    console.log(`Executando sevidor na porta ${port}`)
})