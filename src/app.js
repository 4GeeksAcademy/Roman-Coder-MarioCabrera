import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
const RomanCoder = (num) => {
let resultado = ""
const valoresRomanos = [
  
  [1000, 'M'],
  [1000, 'M'],
  [1000, 'M'],
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I']
];
for (const [valor,simbolo] of valoresRomanos) {
  while (num >= valor ) {
    num -= valor;
    resultado += simbolo;
  }
}
  document.getElementById("romanNum").innerText = resultado
}
document.querySelector(".btn").addEventListener("click",()=>{
  let MyNum = prompt("Selecciona un número entre 1 y 3999");
  if (isNaN(MyNum) || MyNum < 1 || MyNum > 3999) {
  alert("Por favor ingresa un número válido entre 1 y 3999.");
  return;
}
  RomanCoder(parseInt(MyNum))
  document.getElementById("myNum").innerText = MyNum;
})