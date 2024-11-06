//Podemos trabalhar com estes módulos juntos e ter um reultado interessante;
//Com o "http" criamos nosso server e açteramos a repsosta baseado na URL acessada;
//Com "url" processamos o paramentros que vem pela query string, para açterar a lógica do http

const fs = require("fs")
const http = require('http') //importar o modulo
const port = 3000 //Definir a porta de saida

const server = http.createServer(( requisição , resposta)=>{

    fs.readFile('mensagem.html', (err, data) =>{
        resposta.writeHead(200, {'Contenty-Type': 'text/html'})
        resposta.write(data)
        return resposta.end()
    })



}) //criação do server com req e res e a renderização da resposta

//Inicialização do servidor com callback caso esteja tudo certo
server.listen(port, ()=>{
    console.log("Setrvidor rodando na porta "+ port)
})
