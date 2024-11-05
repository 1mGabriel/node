const fs = require('fs')
// Forma síncrona: o código espera ser totalmente excecutado para prosseguir:



// const { console } = require('inspector')
// console.log('inicio')

// fs.writeFileSync("arquivo.txt", "oi")
// console.log("fim")

// Forma assincrona: O código contnua progredindo e em um ponto futuro, obtém a resposta da execução assíncrona:

console.log("inicio")
fs.writeFile("arquvio2.txt", "oi", (err)=>{
    setTimeout(()=>{
        console.log("Arquivo criado")
    }, 1000)
})

console.log("fim")