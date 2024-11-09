//Utilizar uma estrutura condicional nos permite mais flexibilidade no layout;
//Podemos utiliza o if no "Handlebars"
//A sintaxe é {{#If aglumacoisa}}...{{/if}}
//Só imprime o que está entre as condicionais, se o resultado dela for verdadeiro;


const express = require("express")
const exphbs = require("express-handlebars") //Imortação do modulo handlebars

const app = express()

// Setup basico para o uso do handlebars
app.engine('handlebars', exphbs.engine()) //Chamada do modulo handlebars
app.set("view engine", "handlebars") //Definindo a view


app.get("/dashboard", (req,res)=>{
    res.render("dashboard")
})

app.get("/",( req ,res)=>{

const user = {
    name: "Gabriel",
    surname: "Pereira"
}

const auth = false

res.render("home", {user: user,auth}) //Renderiza o arquivo "home.handlebars" acessando a rota "/"

})

app.listen(3000, ()=>{
    console.log("app funfando")
})