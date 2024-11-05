//Para retornar html precisamos implementar mais recursos; Podemos adicionar um status code no retorno, com a propiedade statusCode
//Mudar os headers para text/html;
//E retornar o HTML pelo método "end" do http

const http = require('http') //importar o modulo
const port = 3000 //Definir a porta de saida

const server = http.createServer(( requisição , resposta)=>{
    resposta.statusCode = 200   //Define o status da resposta, neste caso com sucesso
    resposta.setHeader('Contenty-Type', 'text/html') //Muda o tipo da resposta para texto/html
    resposta.end('<h1>Olá, este é meu primeiro server com HTML</h1>') //Retorna a tag como resposta
}) //criação do server com req e res e a renderização da resposta

//Inicialização do servidor com callback caso esteja tudo certo
server.listen(port, ()=>{
    console.log("Setrvidor rodando na porta "+ port)
})
