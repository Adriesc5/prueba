'use strict'
//tabla de multiplicar de un numero introducido por pantalla
var number =parseInt(prompt("Ingresa un numero",1));


for(var i =0 ;i <= 10; i++ ){
    let multiplicacion = number * i; 
    document.write("\nEl resultado de " + number + " * " + i + " = " + multiplicacion +"<br>");
}