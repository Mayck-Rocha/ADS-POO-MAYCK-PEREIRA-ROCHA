/*Escreva um programa que leia e mostre um vetor de 20 elementos inteiros. A seguir,
conte quantos valores pares existem
no vetor.*/

const prompt = require("prompt-sync")()

function main(){
    let vetor = []

    let numerospar = 0

    for(let i = 0; i < 20; i++){
        
      vetor[i] = prompt(`Insira os números: `)
    }
      
      for(let i = 0; i < 20; i++){

        if(vetor[i] % 2 == 0){

            numerospar ++
        }

    }
    console.log(`A quantidade de numeros pares é: ${numerospar}`)
}

main()