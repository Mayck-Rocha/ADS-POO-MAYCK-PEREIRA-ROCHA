/*Escreva uma função que dados 2 valores reais p e x calcule e retorne quanto vale p
por cento de x */

const prompt = require("prompt-sync")()

function main(){
    
    let p = prompt('Insira um valor para p : ')

    let x = prompt('Insira um valor para x : ')

    porcentagem(p,x)

  console.log(`${p}% de ${x} é ${porcentagem(p,x)}`)

}
function porcentagem(p,x){

     const por_cento = ((p / 100) * x)
    return por_cento
}

main()