'use strict'
//Plantillas de texto
var nombre = prompt("Ingresa tu nombre");
var apellido = prompt("Ingresa tu apellido");
// var nombre_completo = "Mi nombre es "+ nombre+" Mi appelido es "+ apellido;
var texto = `
        <h1>Holta que tal</h1>
        <h3>Mi nombre es: ${nombre}</h3>
        <h3>Mi apellido es: ${apellido}</h3>
`;
document.write(texto)   