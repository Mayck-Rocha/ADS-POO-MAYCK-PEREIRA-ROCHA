/*Escrever um programa que leia três valores inteiros e apresente o menor dos valores
lidos*/

const prompt = require('prompt-sync')()

function main(){
    const n1 = Number(prompt("Insira o primeiro número: "))

    const n2 = Number(prompt("Insira o segundo número: "))

    const n3 = Number(prompt("Insira o terceiro número: "))


    if(n1 > n2 && n1 > n3){
        console.log("O primeiro número é o maior")

    }else if(n2 > n1 && n2 > n3){
        console.log("O segundo número é o maior")

    }else{
        console.log("O terceiro número é o maior")
    }
}
main()

