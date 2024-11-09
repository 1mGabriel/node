//Podemos criar layouts para reaproveitar código entre páginas; Vamos cruar uma pasta chamada layouts em views;
//E nela criamos o template que sera repetido;
//Colocamos uma tag especial {{{body}}}
//Para que neste localk o "corpo" do site seja inserido;
//Em todas as nossas views agora o layout é repetido

const express = require("express")
const exphbs = require("express-handlebars") //Imortação do modulo handlebars

const app = express()

// Setup basico para o uso do handlebars
app.engine('handlebars', exphbs.engine()) //Chamada do modulo handlebars
app.set("view engine", "handlebars") //Definindo a view


app.get("/",( req ,res)=>{
res.render("home") //Renderiza o arquivo "home.handlebars" acessando a rota "/"

})

app.listen(3000, ()=>{
    console.log("app funfando")
})