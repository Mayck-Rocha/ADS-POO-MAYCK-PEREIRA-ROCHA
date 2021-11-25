
//   -█  QUESTÃO 01 █-

let numero: number[] = [1,2,3,4,5];

let soma_acumulador: number = 0

for (let i : number = 0; i < numero.length; i++) {

    soma_acumulador = soma_acumulador + numero[i]
}
console.log(`A soma dos número é ${soma_acumulador}`)

//_______________________________________________________________________________________________________________________


/*   -█  QUESTÃO 02 █-

É declarado um array do tipo número e dentro do for será exibido o tamanho da quantidade de elemesntos do array


__________________________________________________________________________________________________________________________
*/ 

//   -█  QUESTÃO 03 █-


let numeros : number[] = [1,10,20,30,40,50,60,70,80,90];

console.log(numeros.sort())

console.log(numeros.reverse())

//_________________________________________________________________________________________________________________________

//   -█  QUESTÃO 04 █-


let nome: string = 'Instituto Federal do Piauí';

console.log(nome.toUpperCase())

console.log(nome.charAt(9)) 

console.log(nome.indexOf('o', 9)) 

console.log(nome.split(" "))

//__________________________________________________________________________________________________________________________