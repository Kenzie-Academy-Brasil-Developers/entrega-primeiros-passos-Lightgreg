const refrigerante_x = 3
const macarrao_x = 4
const ervilha_x = 3
const arroz_x = 3
const feijao_x = 2
const vinho_x = 3

let valor_refrigerante = prompt("preço refrigerante")
let refrigerante = (valor_refrigerante * refrigerante_x)

let valor_macarrao = prompt("preço macarrao")
let macarrao = (valor_macarrao * macarrao_x)

let valor_ervilha = prompt("preço ervilha")
let ervilha = (valor_ervilha * ervilha_x)

let valor_arroz = prompt("preço arroz")
let arroz = (valor_arroz * arroz_x)

let valor_feijao = prompt("preço feijao")
let feijao = (valor_feijao * feijao_x)

let valor_vinho = prompt("preço vinho")
let vinho = (valor_vinho * vinho_x)

let total = parseInt(refrigerante+macarrao+ervilha+arroz+feijao+vinho)
let total2 = parseInt(refrigerante+macarrao+ervilha+arroz+feijao)
let metade = parseInt(total/2)


if(total%2 == 0){
    eu = metade.toFixed(2)
    amigo = metade.toFixed(2)
    alert("valor que eu vou pagar = "+eu+" e o que voce vai pagar = "+amigo)
  }else{
    eu = (total2).toFixed(2)
    amigo = (total2+vinho).toFixed(2)  
    alert("valor que eu vou pagar = "+eu+" e o que voce vai pagar = "+amigo)
}

  // let produtos = (refrigerante||macarrao||ervilha||arroz||feijao||vinho)
 
