// 4 - Escreva um programa que pergunte a quantidade de km percorridos 
// por um carro alugado pelo usuário, assim como a quantidade de dias 
// pelos quais o carro foi alugado. Calcule o preço a pagar, sabendo que o 
// carro custa 60,00 reais por dia e 0,15 centavos por km rodado.

let kms = 4000
let kmValue = 0.15
let days = 12
let dayValue = 60

let finalPrice = (days * dayValue) + (kms * kmValue)

console.log(finalPrice)