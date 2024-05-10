'use strict'
//Local storage
// Comprobar disponibilidad del local storage
if(typeof(Storage) !== 'undefined'){
    console.log('Local storage disponible');
}
else{
    console.log('Local storage no disponible');
}

// Guardar datos     titulo es la key primer parametro y el valor es el segundo parametro
localStorage.setItem("titulo", "Curso de Symfony de Adrian Escobedo");
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

// Guardar objetos
var usuario = {
    nombre: "Frank",
    email: "adriesc57@gmail.com",
};
localStorage.setItem("usuario", JSON.stringify(usuario));

// Recuperar objeto
var userjs = JSON.parse(localStorage.getItem("usuario"));
console.log(userjs);
document.querySelector("#datos").append(" " + userjs.email);
localStorage.removeItem("usuario");