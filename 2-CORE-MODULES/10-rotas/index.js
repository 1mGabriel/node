//Podemos vrair e esvcrever em arquivos tramém, utlizando o método "writeFile"
//Esta escrita pode estar associada a um conjunto de operações
//Como o envio de informções de um usuário, por exemplo;



const fs = require("fs")
const http = require('http') //importar o modulo
const port = 3000 //Definir a porta de saida
const url = require("url")

const server = http.createServer(( requisição , resposta)=>{

    const q = url.parse(requisição.url, true)
    const fileName = q.pathname.substring(1)

    if(fileName.includes('html')){
        if(fs.existsSync(fileName)){
            fs.readFile(fileName, (err, data) =>{
                resposta.writeHead(200, {'Contenty-Type': 'text/html'})
                resposta.write(data)
                return resposta.end()
            })
        } else{
            fs.readFile('404.html', (err, data) =>{
                resposta.writeHead(404, {'Contenty-Type': 'text/html'})
                resposta.write(data)
                return resposta.end()
            })
        }
    } 




}) //criação do server com req e res e a renderização da resposta

//Inicialização do servidor com callback caso esteja tudo certo
server.listen(port, ()=>{
    console.log("Setrvidor rodando na porta "+ port)
})
