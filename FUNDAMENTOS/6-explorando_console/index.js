//Mais de um valor

const x = 10
const y ="algum texto"
const z = [1,45]

console.log(x,y,z)

// contagem de impressões
console.count(`O valor de x é ${x}, contagem`)
console.count(`O valor de x é ${x}, contagem`)
console.count(`O valor de x é ${x}, contagem`)
console.count(`O valor de x é ${x}, contagem`)

// Variavel entre string

console.log('O nome é %s e %s', y,x) //s% == variavel

//Limpar o console

setTimeout(() => {
   console.clear() 
}, 2000);