// 3 - Crie um algoritmo que leia o valor de um jantar, 
// calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.

let valorJantar = 200
let percentualGorjeta = (10/100)
let valorGorjeta = valorJantar * percentualGorjeta
let valorJantarComGorjeta = valorJantar + valorGorjeta

console.log(`O valor da gorjeta é ${valorGorjeta} reais e o total a pagar é ${valorJantarComGorjeta} reais.`)