'use strict'
//Condicionales
//condicionales if
var edad1 = 30;
var edad2 = 12;
//Si pasa esto
//operadores relacionales >, <, >=, <=, ==, ===

if(edad1 > edad2){
    //Ejecuta esto
    console.log("Edad1 es mayor que edad2");
}else if(edad1 == edad2){
    console.log("Las edades son iguales");
}
else{
    console.log("La edad1 es inferior");
}
/*
operadores logicos  &&(and), ||(or), !(not)
*/
var year = 2028;
//negacion
if(year != 2016){
    console.log("El año no es 2016 realmente es: " + year);
}   
//and
if(year >= 2000 && year <= 2020){
    console.log("Estamos en la era actual");

}else{
    console.log("Estamos en la era postmoderna");
}   
//or
if(year == 2008 || (year >= 2018 && year == 2028)){
    console.log("El año acaba en 8");
}
else{
    console.log("Año no registrado");
}
//switch
var edad = 18;
var imprime = "";
switch(edad){
    case 18:
        imprime = "Acabas de cumplir la mayoria de edad";
    break;
    case 25:
        imprime = "Ya eres un adulto";
    break;
    case 40:
        imprime = "Crisis de los 40";
    break;
    case 75:
        imprime = "Eres un anciano";
    break;
    default:
        imprime = "Tu edad es neutra";
    break;
}