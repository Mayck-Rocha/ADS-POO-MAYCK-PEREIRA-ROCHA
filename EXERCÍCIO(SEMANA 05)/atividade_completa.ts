/* -█  QUESTÃO 01 █-

 Classes são modelos que servem de origem para os objetos e os objetos são classes em execução numa situação específica.
     Classe Carro
 Modelo: Texto
 Ano: Data
 Placa: Letras e números
    Objeto Carro
     Classe Carro
 Modelo: Onix
 Ano: 2018
 Placa: THE0506
 ________________________________________________________________________________________________________________________
*/

/* -█ QUESTÃO 02 █-

 Atributos são as características e propriedades dos objetos que definem o estado dos objetos, já os métodos são os comportamentos de um objeto ou ações que um objeto pode realizar.
  Atributos:
  Carro: cor, tamanho, tração, motor;
  Métados:
  Carro: Deslocar, transportar, guinchar
  _______________________________________________________________________________________________________________________
*/

/* -█ QUESTÃO 03 █-
  ____________________________________________________________________________
  |     Atributo           |         Importante         | Não importante     |
  |Peso                    |Teste físico                |Teste psicológico   |
  |Tipo de CNH             |Seleção p/ vaga de motorista| Exame de sangue    |
  |Tipo Sanguíneo          |Doar sangue                 | Praticar esporte   |
  |Habilidade destra       |Praticar Handebol           | Pilotar motocicleta|
  |Percentual de gordura   |Fluxo nas artérias          | Ler Livros         | 
  |Saldo em conta          |Comprar um Imóvel           | Exame de vista     |
  |Etinia                  |Cotas                       | Jogar Futebol      |
  |__________________________________________________________________________|

 _______________________________________________________________________________________________________________________
  */


/* -█ QUESTÃO 04 █-

 a) Não.
 b) Sim. Estruturas de controle.

_______________________________________________________________________________________________________________________
*/

/* -█ QUESTÃO 05 █-

 Boletim, Salas, Semestres, Professores, Emetas de diciplinas.

_______________________________________________________________________________________________________________________
*/

/* -█ QUESTÃO 06 █-

  Personagem: 
Nome; sexo; porte físico; especialidade
Andar; correr; pular; atirar; jogar granadas;

  Tropas inimigas:
  Nome; sexo; porte físico; especialidade
  Andar; correr; pular; atirar; jogar granadas;

  Equipamento tático
  Armas de fogo; armas brancas; granadas;
  Mirar; atirar; retardar; matar;
  
  Cenário:
  Terrestre; Aéreo; aquático
  Andar; Voar; Nadar

  _______________________________________________________________________________________________________________________
*/

//-█ QUESTÃO 07 █-

class TestaRetangulo {
    l1: number = 0;
    l2: number = 0;

    calculaArea(): number {
    return this.l1 * this.l2
    }

    calculaPerimetro(): number{
        return (this.l1 * 2) + (this.l2 * 2)
    }
  }
  
  let retangulo: TestaRetangulo
  retangulo = new TestaRetangulo()
  retangulo.l1 = 3
  retangulo.l2 = 6
  
  console.log("O perímetro é;  " + retangulo.calculaPerimetro()) //18

  //_______________________________________________________________________________________________________________________

//-█ QUESTÃO 08 █- 

class Circulo {
  raio: number = 0;
    
    calculaArea(): number {
        return 3.14 * this.raio ^ 2
    }
    calculaPerimetro(): number {
        return 2 * 3.14 * this.raio
    }
  }
  
  let circulo: Circulo
  circulo = new Circulo()
  circulo.raio = 5
  
  console.log("Área: " + circulo.calculaArea())  // 78,5
  console.log("Perímetro: " + circulo.calculaPerimetro()) // 31,4

  //_______________________________________________________________________________________________________________________


//-█ QUESTÃO 08 █-

class SituacaoFinanceira{
    valorCreditos : number = 0
    valorDepidos : number = 0
  
    saldo(): number{
        return this.valorCreditos - this.valorDepidos
    }
  }
  let situacao: SituacaoFinanceira
  situacao = new SituacaoFinanceira()
  situacao.valorCreditos = 350
  situacao.valorDepidos = 100
  
  console.log("Saldo: " + situacao.saldo())  //250