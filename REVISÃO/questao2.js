/*Escreva um programa para converter de dólar para real e exibir para o usuário a
resposta final.*/

const prompt = require('prompt-sync')()

function main(){

const Dolar = Number(prompt('Valor em Dolar:'))

const valor_dolar = Number(prompt("Quanto está o dólar hoje? (R$) "))

const real = Dolar * valor_dolar

console.log('$',Dolar, 'Dolares, equivalem a R$:', real,'Reais')
}
main()