const minimist = require ('minimist')

const args = minimist(process.argv.slice(2))
console.log(args)

const name = args['nome']
console.log(name)