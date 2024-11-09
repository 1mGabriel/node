//As estruturas de reptiçãono Handlebars são feitas pelo operador each;
//A sintaxe é {{#each}}...{{/each}}
//Em um array podemois chamar os itebns com {{this}}
//Então cada um dos itnes é acessado na view
//Como o andlebars pega um template mais limpo, devemos mandar apenas o necessario para o frontenb

const express = require("express")
const exphbs = require("express-handlebars") //Imortação do modulo handlebars

const app = express()

// Setup basico para o uso do handlebars
app.engine('handlebars', exphbs.engine()) //Chamada do modulo handlebars
app.set("view engine", "handlebars") //Definindo a view


app.get("/dashboard", (req,res)=>{
    

    const items = ["Item a", "Item b" , "Item c"]
    res.render("dashboard", {items}) //Importando o item para o handlebar

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