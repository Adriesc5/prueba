var fecha = new Date();
var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDate();
var hora = fecha.getHours();
var textoHora= `El año es ${year}
El mes es ${mes}
El día es ${dia}
La hora es ${hora}`
console.log(fecha);
console.log(textoHora);

console.log(Math.round(Math.random()*10)) // Error;