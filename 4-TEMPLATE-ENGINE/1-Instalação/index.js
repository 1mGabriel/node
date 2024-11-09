const express = require("express")
const exphbs = require("express-handlebars") //Imortação do modulo handlebars

const app = express()

// Setup basico para o uso do handlebars
app.engine('handlebars', exphbs.engine()) //Chamada do modulo handlebars
app.set("view engine", "handlebars") //Definindo a view


app.get("/",( req ,res)=>{
res.render("home", {layout:false}) //Renderiza o arquivo "home.handlebars" acessando a rota "/"

})

app.listen(3000, ()=>{
    console.log("app funfando")
})