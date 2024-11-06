const fs = require("fs")

fs.rename("novoArquivo.txt", "novo123Arquivo.txt", function(err){
    if(err){
        console.log(err)
        return
    }
    else{
        console.log("arquivo renomeado")
    }
})