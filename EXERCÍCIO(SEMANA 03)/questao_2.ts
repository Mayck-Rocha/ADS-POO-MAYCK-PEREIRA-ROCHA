function soma(x: number, y: any): number {
    return x + y
}

console.log(soma(1,2))
//3

console.log(soma(1,"12"))
//12

console.log(soma(1,1))
//Erro: não foi fornecido um argumento para y.
