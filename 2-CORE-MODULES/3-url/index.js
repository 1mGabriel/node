//O modulo url serve para decompor uma URL que passamos para o metodo "parse";
//Podemos resgatar: "host", "path", "search", "query" e etc;
//A partir dessas informações podemos alterar a logica do nosso código:

const url = require("url")//Importação do metodo

const address = 'https://www.meusite.com.br/catalog?produtos=cadeira'// define o endereço, no caso a url

const parseUrl = new url.URL(address) //converte a url para o metodo URL(passando o endereço)

console.log(parseUrl.host) //dominio da url
console.log(parseUrl.pathname) //pagina atual da url
console.log(parseUrl.search) //pesquisa da url
console.log(parseUrl.searchParams) //parametros de pesquisa
console.log(parseUrl.searchParams.get('produtos')) //pesquisa feita