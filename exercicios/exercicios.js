/*let numero = prompt("exercicio 01")
alert("esse é seu numero "+numero)*/

/*let num1 = parseInt ( prompt('exercicio1'))
let num2 = parseInt ( prompt('exercicio2'))
let num3 = parseInt ( prompt('exercicio3'))
let resul = (num1+num2+num3)
alert("esse é o resultado "+resul)*/

/*let med01 = parseInt (prompt("1° semestre"))
let med02 = parseInt (prompt("2° semestre"))
let media = (med01+med02)/2
alert(media)*/

/*let num1 = parseInt (prompt("primeiro"))
let num2 = parseInt (prompt("segundo"))
alert((num1+num2)%2)*/

/*let num0 = parseInt(prompt("numero"))
alert(num0*num0)*/

var btn = document.querySelector('button');
var txt = document.querySelector('p');

btn.addEventListener('click', updateBtn);

function updateBtn() {
   if (btn.textContent === 'Iniciar máquina') {
       btn.textContent = 'Parar máquina';
       txt.textContent = 'A máquina iniciou!';
   } else {
       btn.textContent = 'Iniciar máquina';
       txt.textContent = 'A máquina está parada.';
   }
}
