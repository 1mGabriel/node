const express = require("express") //chamda do express*

const app = express() //Invocando o express*

const port = 3000 //porta do servidor - ambiente

app.get('/', (req, res) =>{  //Função para acessar a url e fazer o get ("url", ("requisição", "resposta"))

    res.send('Olá mundo')

})


// Inicia o servidor:
app.listen(port, ()=>{
    console.log(`Executando sevidor na porta ${port}`)
})