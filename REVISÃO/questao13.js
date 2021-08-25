/*Escreva uma função que dados um inteiro n e um inteiro d, onde 0 < d ≤ 9, devolve
quantas vezes o dígito d aparece no número n. Por exemplo: se n = 7677 e d = 7, a
função deve retornar 3.*/

const prompt = require("prompt-sync")()

function main(){

    let n = prompt('Insira um número: ')
    let d = prompt('Insira um número (0 a 9): ')
    
    let acumulador = 0

    if(d >= 0 && d <= 9){

      for(x of n){

        if(x === d){

          acumulador ++
        }
      }
      console.log(`O número ${n} possui ${acumulador} número(s) ${d}`)
      }

}
main()