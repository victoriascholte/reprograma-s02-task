// 1 - Solicite o preço de uma mercadoria e o percentual de desconto 20%. 
// Exiba no console o valor do desconto e o preço a pagar.

let valorMercadoria = 3000
let percentualDesconto = (25/100)
let desconto = valorMercadoria * percentualDesconto
let valorComDesconto = (valorMercadoria - desconto)

console.log(`Você ganhou ${desconto} reais de desconto e o preço a pagar é ${valorComDesconto} reais.`)