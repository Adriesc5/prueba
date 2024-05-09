'use strict'
//Eventos del raton

window.addEventListener('load', function(){
    function cambiarColor(){
        console.log("Me has dado click");
        var bg = boton.style.background;
        if(bg == "green"){
            boton.style.background = "red";
        }else if(bg == "blue"){
            boton.style.background = "green";
        }else{
            boton.style.background = "blue";
        }
        boton.style.padding = "10px";
        boton.style.border = "1px solid #ccc";
        return true;
    }

    var boton = document.querySelector("#boton");
    boton.addEventListener('click', function(){
        cambiarColor();
    });

    //Mouse over
    boton.addEventListener('mouseover', function(){
        boton.style.background = "orange";
    });

    //Mouse out 
    boton.addEventListener('mouseout', function(){
        boton.style.background = "#ccc";
    });

    //Focus
    var input = document.querySelector("#campo_nombre");
    input.addEventListener('focus', function(){
        console.log("Estas dentro del input");
    });
    //Blur
    input.addEventListener('blur', function(){
        console.log("Estas fuera del input");
    });
    //Keydown
    input.addEventListener('keydown', function(event){
        console.log("Pulsando esta tecla", String.fromCharCode(event.keyCode));
    });
    //Keypress
    input.addEventListener('keypress', function(event){
        console.log("Tecla presionada", String.fromCharCode(event.keyCode));
    }); 

    //Keyup
    input.addEventListener('keyup', function(event){
        console.log("Tecla soltada", String.fromCharCode(event.keyCode));
    });
});