'use strict'
//pedir 6 numeros por pantalla y meterlos en un array 
//mostrar el array completo
///ordenarlo y mostrarlo
//invertir su orden 
//mostrar cuantos elementos tiene el array
//buscarun valor, mostrar su indice
function mostrarArray(elementos, textoCustom= ""){
    //Mostrar en el cuerpo de la pagina
    document.write("Contenido del array "+textoCustom+"</br>")
    document.write("<ul>");
    elementos.forEach((elemento,index)=>{
        document.write(`<li>${elemento}</li>`)
    }); 
    document.write("</ul>");
}
//var numeros = new Array(6);
var numeros = [];
for(var i =0; i <=5; i++)
    {
        //numeros[i] = parseInt(prompt("Ingresa un numero",0));
        numeros.push(parseInt(prompt("Ingresa un numero",0)));
    }
//Mostrar el array por la consola
mostrarArray(numeros);


//Ordenar y mostrar
numeros.sort(function(a,b){return a-b});
mostrarArray(numeros,"Ordenado");

//Invertir y mostrar
numeros.reverse();
mostrarArray(numeros,"Invertido");
//mostrar cuantos elementos tiene el array
document.write('El numero de elementos del array es: '+numeros.length)

//busqueda de un valor
var busqueda = parseInt(prompt("Busca un numero",0));
var posicion = numeros.findIndex(numero => numero == busqueda);

if(posicion && posicion !=-1){
    document.write("<h1>Encontrado!</h1>")
    document.write("<h1>Pocision de la busqueda: "+posicion+"</h1>")
}else{
    document.write("<h1>No encontrado!</h1>")
}