'use strict'
var numero1 =parseInt(prompt("Ingresa el primer numero",0))
var numero2 =parseInt(prompt("Ingresa el segundo numero",0))
console.log("Entre los numeros: " + numero1 +" y "+ numero2+ " estan los numeros:");
numero1 =numero1 + 1;
for(numero1; numero1<=numero2; numero1++){
    console.log(numero1);
}