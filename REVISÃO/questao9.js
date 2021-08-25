/*Construir um programa que leia uma acumulador s, e dois caracteres a e b. Em seguida, o
programa deve substituir todas as ocorrências do caractere a na acumulador s pelo caractere
b.*/

const prompt = require("prompt-sync")()

function main(){
  let string = prompt('Insira uma palavra: ')

  let a = prompt('Insira o primeiro caratere charactere: ')

  let b = prompt('Insira o segundo charactere: ')

  let acumulador = ''

  for(contador of string){
    if(contador === a){
      contador = b
    }
    acumulador = acumulador + contador
  }
  console.log(`A nova string é: ${acumulador}`)   
}

main()