'use strict'
var categorias = ['Accion','Terror','Comedia'];
var peliculas =['Amores perros','El club de la peleas','La fabrica de Charlie'];
var cine =[categorias,peliculas];
//console.log(cine[0][1])
// // console.log(cine[1][2])
// var elemento ="";
// do{
//     elemento = prompt("Introduce tu pelicula");
//     peliculas.push(elemento);
// }
// while(elemento != "ACABAR");
// peliculas.pop();
// console.log(peliculas);
var indice = peliculas.indexOf("El club de las peleas")
if(indice > -1){
    peliculas.splice(indice,1);//Aqui borra aparite del indice que indicamos y el segundo valor es el numero de valores que borraremos
}

var peliculasString = peliculas.join();//volvemos el array en un string separado por comas 
console.log(peliculasString)

var cadena ="texto1, texto2, texto3";
var cadena_array =cadena.split(", ");//Esto nos separa un string en un array delimitado por lo que escojamos
console.log(cadena_array)
//Ordenar arrays
peliculas.sort();//ordena las peliculas por orden alfabetico
console.log(peliculas)
peliculas.reverse();//le da vuelta al array

for(let pelicula in peliculas ){//recorre arrays de una manera senciila
    document.write(peliculas[pelicula]+"</br>")//para imprimirlo tenemos que acceder al array
}
//busquedas
var busqueda = peliculas.find(pelicula => pelicula =="Amores perros");
console.log(busqueda);