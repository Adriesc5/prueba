'use strict'
/*
Que nos diga si un numero es par o impar
*/

var number =parseInt(prompt("Ingresa un numero",1));

while(isNaN(number)){
    var numero =parseInt(prompt("Ingresa un numero",1));
}
if(number % 2 ==0 ){    
    alert("Es un numero par")

}
else{
    alert("Es un numero impar")
}