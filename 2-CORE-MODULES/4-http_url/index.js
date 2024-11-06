//Podemos trabalhar com estes módulos juntos e ter um reultado interessante;
//Com o "http" criamos nosso server e açteramos a repsosta baseado na URL acessada;
//Com "url" processamos o paramentros que vem pela query string, para açterar a lógica do http


const http = require('http') //importar o modulo
const port = 3000 //Definir a porta de saida

const server = http.createServer(( requisição , resposta)=>{

    const urlInfo = require('url').parse(requisição.url, true)
    const name = urlInfo.query.name

    resposta.statusCode = 200   //Define o status da resposta, neste caso com sucesso
    resposta.setHeader('Contenty-Type', 'text/html') //Muda o tipo da resposta para texto/html

    if(!name){
        resposta.end('<h1>Preencha seu nome:</h1> <form method="GET"><input type="text" name="name" / ><input type="submit" value="Enviar"/> </form>') //Retorna a tag como resposta
    }else{
        resposta.end(`<h1>Seja bem vindo ${name}</h1>`) //Retorna a tag como resposta
    }


}) //criação do server com req e res e a renderização da resposta

//Inicialização do servidor com callback caso esteja tudo certo
server.listen(port, ()=>{
    console.log("Setrvidor rodando na porta "+ port)
})
