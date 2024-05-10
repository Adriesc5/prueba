'use strict'
//Local storage
var formulario = document.querySelector("#formPeliculas");
formulario.addEventListener('submit', function(){
    var titulo = document.querySelector("#addpeliculas").value;
    if(titulo.length >= 1){
        localStorage.setItem(titulo, titulo);
    }
});

var ul = document.querySelector("#peliculas-list");
for(var i in localStorage){
    console.log(localStorage[i]);
    if(typeof localStorage[i] == 'string'){
        var li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
    }
}

var formularioB = document.querySelector("#formBorrarPeliculas");
formularioB.addEventListener('submit', function(){
    var titulo = document.querySelector("#borrarPeliculas").value;
    if(titulo.length >= 1){
        localStorage.removeItem(titulo);
    }
});