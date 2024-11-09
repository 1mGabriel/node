const express = require("express")
const exphbs = require("express-handlebars")
const mysql = require("mysql")

const app = express()

// Setup basico para o uso do handlebars
app.engine('handlebars', exphbs.engine()) //Chamada do modulo handlebars
app.set("view engine", "handlebars") //Definindo a view

app.use(express.static("public"))

app.get("/", (req,res)=>{
    res.render("home")
})

// Criando a conexão com banco de dados
const conn = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password:'',
    database: 'nodemysql2'
})


// Executando a conexão!
conn.connect((err)=>{
    if(err){
        console.log(err)
    }
    console.log("Conectou ao MYSQL")
})