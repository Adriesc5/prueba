'use strict'
//Hacer un programa que nos pida dos numeros, y diga cual es menor, cual es mayor o si son iguales
//PLUS Si los numeros no son un numero o son menores o iguales a cero, nos lo vuelva a pedir
var numero1 = parseInt(prompt("Ingrese el primer número", 0));
var numero2 = parseInt(prompt("Ingrese el segundo número", 0));

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt("Ingrese el primer número", 0));
    numero2 = parseInt(prompt("Ingrese el segundo número", 0));
}
if (numero1 > numero2){
    alert("El número " + numero1 + " es mayor que " + numero2);
}else if(numero1 < numero2){
    alert("El número " + numero1 + " es menor que " + numero2);
}else{
    alert("Los números son iguales");
}