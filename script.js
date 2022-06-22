let refrigerante_x = prompt("quantidade de refrigerantes")
let macarrao_x = prompt("quantidade de macarrao")
let ervilha_x = prompt("quantidade de ervilha")
let arroz_x = prompt("quantidade de arroz")
let feijao_x = prompt("quantidade de feijao")
let vinho_x = prompt("quantidade de vinho")

const refrigerante = prompt("valor do refrigerante")
const totalrefrigerante = (refrigerante * refrigerante_x)
alert (totalrefrigerante)

const macarrao = prompt("valor do macarrao")
const totalmacarrao = (macarrao * macarrao_x)
alert(totalmacarrao)

const ervilha = prompt("valor do  ervilha")
const totalervilha = (ervilha * ervilha_x)
alert(totalervilha)

const arroz = prompt("valor do arroz")
const totalarroz = (arroz * arroz_x)
alert(totalarroz)

const feijao = prompt("valor do feijao")
const totalfeijao = (feijao * feijao_x)
alert(totalfeijao)

const vinho = prompt("valor do vinho")
const totalvinho = parseFloat(vinho * vinho_x)
alert(totalvinho)

let total =(totalrefrigerante+totalmacarrao+totalervilha+totalarroz+totalfeijao+totalvinho)

alert(total)
///////////////////////////////////////////////////////////
console.log (`o valor total é ${total}`)
/////////////////////////////////////////////////////////// 
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