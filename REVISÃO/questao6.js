/*Escreva um programa que leia uma sequência de números inteiros terminada por –1 e
imprima na tela a soma e a média aritmética destes números. Obs: o valor –1 é
somente um terminador e não deve ser considerado nos cálculos.*/

const prompt = require('prompt-sync')()

function main(){

s_num = 0

acumulador_num = 0

acumulador = 0

ordem = 1


while(s_num !== -1){

    s_num = Number(prompt(`Insira o ${ordem}º número: `))

    acumulador_num = acumulador_num + s_num

    acumulador ++

    ordem ++
}
const soma = acumulador_num +1
const correcao = acumulador - 1

const media = soma / correcao


console.log(`_________________________`)
console.log(`Somatório dos números ${soma }`)
console.log(`_________________________`)
console.log(`Média aritimética ${media}`)
console.log(`_________________________`)

}
main()
