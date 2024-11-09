// Passando dados por meio do método render;
// Enviamos um objeto com chaves e valores;
// E isso nos possibilita cessar estes dados no template;
// Vamos utilizar a sintaxe de {{dado}}

const express = require("express")
const exphbs = require("express-handlebars") //Imortação do modulo handlebars

const app = express()

// Setup basico para o uso do handlebars
app.engine('handlebars', exphbs.engine()) //Chamada do modulo handlebars
app.set("view engine", "handlebars") //Definindo a view


app.get("/",( req ,res)=>{

const user = {
    name: "Gabriel",
    surname: "Pereira"
}

const age = 23

res.render("home", {user: user, age}) //Renderiza o arquivo "home.handlebars" acessando a rota "/"

})

app.listen(3000, ()=>{
    console.log("app funfando")
})