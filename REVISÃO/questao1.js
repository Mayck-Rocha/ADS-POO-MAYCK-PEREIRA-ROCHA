/*Escreva um programa que possua uma variável com um número inteiro e mostre seu
antecessor e sucessor*/

const prompt = require("prompt-sync")()

function main(){
    const numero = Number(prompt("Insira um número inteiro: "))

    const antecessor = numero - 1

    const sucessor = numero + 1


    console.log(`__________________`)
    console.log(`Número: ${numero}`)
    console.log(`__________________`)
    console.log(`Sucessor: ${sucessor}`)
    console.log(`__________________`)
    console.log(`Antecessor: ${antecessor}`)
    console.log(`__________________`)


}
main()

