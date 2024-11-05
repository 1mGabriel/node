//Podemos criar um sevidor http com este módulo, ou seja, receber requisições e enviar codigo html como respossta por exemplo
//Utilizar alguns mnetodos como createServer, para ciração de servidor
//E também o listen, para determinar a porta:

const http = require('http') //importar o modulo
const port = 3000 //Definir a porta de saida

const server = http.createServer(( requisição , resposta)=>{
 resposta.write('OI HTTP')
 resposta.end()
}) //criação do server com req e res e a renderização da resposta

//Inicialização do servidor com callback caso esteja tudo certo
server.listen(port, ()=>{
    console.log("Setrvidor rodando na porta "+ port)
})

//CTRL + C : para o servidor!