/*Escreva um programa que apresente o mês por extenso, a partir de um número
digitado pelo usuário (entre 1 e 12).*/ 

const prompt = require('prompt-sync')()

function main(){
    const numero = Number(prompt("Insira um número referente ao mês (1 a 12): "))

    if(numero == 1){
        console.log("O número corresponde ao mês de Janeiro")
    }else if(numero == 2){
        console.log("O número corresponde ao mês de Fevereiro")
    }else if(numero == 3){
        console.log("O número corresponde ao mês de Março")
    }else if(numero == 4){
        console.log("O número corresponde ao mês de Abril")
    }else if(numero == 5){
        console.log("O número corresponde ao mês de Maio")
    }else if(numero == 6){
        console.log("O número corresponde ao mês de Junho")
    }else if(numero == 7){
        console.log("O número corresponde ao mês de Julho")
    }else if(numero == 8){
        console.log("O número corresponde ao mês de Agosto")
    }else if(numero == 9){
        console.log("O número corresponde ao mês de Setembro")
    }else if(numero == 10){
        console.log("O número corresponde ao mês de Outubro")
    }else if(numero == 11){
        console.log("O número corresponde ao mês de Novenbro")
    }else if(numero == 12){
        console.log("O número corresponde ao mês de Dezembro")
    }else{
        console.log("O número não corresponde a nenhum mês do calendário")
    }
}
main()