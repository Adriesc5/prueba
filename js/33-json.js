'use strict'
var pelicula = {
    titulo: 'Spiderman',
    year: 2019,
    pais: 'Estados Unidos'
};

var peliculas = [
    {titulo: 'Batman', year: 2019, pais: 'Estados Unidos'},
    pelicula
];
var caja_peliculas = document.querySelector("#peliculas");
var index;
for(index in peliculas){
    var p = document.createElement("p");
    p.append(peliculas[index].titulo + " - " + peliculas[index].year);
    document.querySelector("#peliculas").append(p);
}