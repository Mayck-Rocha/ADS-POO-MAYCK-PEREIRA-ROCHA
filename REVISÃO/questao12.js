/*Faça uma função que recebe por parâmetro uma medida de tempo expressa em
segundos e retorna, também por parâmetro, esse tempo em horas, minutos e
segundos no formato: “hh:mm:ss”. */

const prompt = require("prompt-sync")()

function main(){

  let segundos = prompt('Insira o tempo em segundos(s): ')

  tempo(segundos)

}

function tempo(segundos){

  let resto_hr = segundos % 3600

  let hr = segundos / 3600
  
  let resto_min = resto_hr % 60
  
  let min = resto_hr / 60
  
  let seg = resto_min
  
  console.log(`${Math.trunc(hr)} hr: ${Math.trunc(min)} min: ${Math.trunc(seg)} seg:`)

}

main()