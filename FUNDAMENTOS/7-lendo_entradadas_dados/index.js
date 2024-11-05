// Modulo Readlie : core module
// Modulo question

// Cria uma interface para a inserção de dados
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

// Cria o input para a questão, com a arrow function com base na resposta:
readline.question("Qual a sua linguagem preferida?", (language)=>{
    console.log(`A minhga linguagem preferida é: ${language}`)
    readline.close
})