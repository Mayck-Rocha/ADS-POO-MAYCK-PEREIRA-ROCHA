/* -█  QUESTÃO 01 █-

 Se a variável não foi iniciada previamente, logo não será encontrada.

 _________________________________________________________________________________________________________________________
*/

// -█  QUESTÃO 02 █-

class Hotel {

  quantReservas : number

  constructor(quant : number){
    this.quantReservas = quant
    }

  addreserva() : void {
    this.quantReservas++
    }
}
let hotel : Hotel = new Hotel(2)
console.log(hotel.quantReservas)

//_________________________________________________________________________________________________________________________

/* -█  QUESTÃO 03 █-

 O construtor aceita um número como parâmentro então deveria colocar o número como argumento. 
  
let r : Radio = new Radio(10)
_________________________________________________________________________________________________________________________
*/

/* -█  QUESTÃO 04 █-

    a) 90, pois c1 e c2 apontam para o mesmo objeto, logo, qualquer alteração em c1 ou c2 irá modificar amboa
    b) O objeto é perdido

______________________________________________________________________________________________________________________
*/

/* -█  QUESTÃO 05 █- */

class Jogador{

    forca : number 
    nivel : number 
    p_atuais : number 

    constructor(force: number, level: number, pt: number ){
        this.forca = force
        this.nivel = level 
        this.p_atuais = pt
    }

    Ataque() : number{
        return this.p_atuais += this.forca * this.nivel
    }

    atacar(p_atuais : number): number {
        return this.p_atuais = this.p_atuais - p_atuais + this.Ataque()
    }

}

//______________________________________________________________________________________________________________________

/* -█  QUESTÃO 06 █- 
 
NC
______________________________________________________________________________________________________________________
*/

/* -█  QUESTÃO 07 █- 

NC
______________________________________________________________________________________________________________________
*/

