/*Escreva um programa que leia um vetor de 5 posições e apresente-o na tela */

const prompt = require("prompt-sync")()

function main(){

     vetor = []

    for(let i = 0; i < 5; i++){

      vetor[i] = prompt(`Insira os valores: `)
    }

    console.log(vetor)
}

main()