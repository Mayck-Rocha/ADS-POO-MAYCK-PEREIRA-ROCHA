/*Escreva um programa que leia um texto pelo teclado e remova todas as suas vogais.
Exiba a string resultante */

const prompt = require("prompt-sync")()

function main(){

  let string = prompt('Insira um texto: ')

  let acumulador = ''

  for(x of string){

    if(x != "a" && x != "e" && x != "i" && x != "o" && x != "u"){

      acumulador = acumulador + x
      
    }
  }
  console.log(`A nova string é: ${acumulador}`)   
}

main()