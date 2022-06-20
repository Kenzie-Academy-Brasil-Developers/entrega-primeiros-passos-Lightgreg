const refrigerante_x = 4
const macarrao_x = 4
const ervilha_x = 3
const arroz_x = 3
const feijao_x = 2
const vinho_x = 3

let refrigerante = 11.99
let totalrefrigerante = (refrigerante * refrigerante_x)

let macarrao = 6.99
let totalmacarrao = (macarrao * macarrao_x)

let ervilha = 6.99
let totalervilha = (ervilha * ervilha_x)

let arroz = 22.99
let totalarroz = (arroz * arroz_x)

let feijao = 11.89
let totalfeijao = (feijao * feijao_x)

let vinho = 70.00
let totalvinho = (vinho * vinho_x)

let total =(totalrefrigerante+totalmacarrao+totalervilha+totalarroz+totalfeijao+totalvinho)
alert("esse é o total "+total)

let  somatotal= total * 100;
  if(somatotal % 2 === 0){
    eu = (total/2).toFixed(2)
    amigo =(total/2).toFixed(2)
    alert("valor que eu vou pagar = "+eu+" e o que voce vai pagar = "+amigo)
  }else{
    eu = ((total-totalvinho)/2).toFixed(2)
    amigo = ((total-totalvinho)/2+totalvinho).toFixed(2)  
    alert("valor que eu vou pagar = "+eu+" e o que voce vai pagar = "+amigo)
}

  // let produtos = (refrigerante||macarrao||ervilha||arroz||feijao||vinho)
 
  // let refrigerante = prompt("preço refrigerante")
  // let refrigerante = (refrigerante * refrigerante_x)
  
  // let macarrao = prompt("preço macarrao")
  // let macarrao = (macarrao * macarrao_x)
  
  // let ervilha = prompt("preço ervilha")
  // let ervilha = (ervilha * ervilha_x)
  
  // let arroz = prompt("preço arroz")
  // let arroz = (arroz * arroz_x)
  
  // let feijao = prompt("preço feijao")
  // let feijao = (feijao * feijao_x)
  
  // let vinho = prompt("preço vinho")
  // let vinho = (vinho * vinho_x)