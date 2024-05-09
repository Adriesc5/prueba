'use strict'
function cambiaColor(color){
    caja.style.background = color;
}
//Conseguir elementos con un ID Concreto
//var caja = document.getElementById("micaja");
// var caja = document.querySelector("#micaja");
// caja.innerHTML = "Texto en la caja desde js";
// caja.style.background ="red";
// caja.style.padding ="20px";
// caja.style.color ="blue";
// caja.className = "jola"
// //Elementos por su etiqueta
//console.log(caja);
var todosLosDivs =document.getElementsByTagName('div');
console.log(todosLosDivs);
var contenido = todosLosDivs[2].textContent;
var valor;
//todosLosDivs.forEach((valor, indice) => {
for(valor in todosLosDivs){
    console.log(valor)
    var parrafo = document.createElement('p');
    var texto = document.createTextNode(todosLosDivs[valor].textContent);
    parrafo.appendChild(texto);
    document.querySelector("#missecion").appendChild(parrafo);
};



