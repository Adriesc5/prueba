$(document).ready(function(){
    //mouse over y mouse out
    var caja = $("#caja");
    /*
    caja.mouseover(function(){
        $(this).css("background", "black").css("color", "white");
    });
    caja.mouseout(function(){
        $(this).css("background", "blue");
    });
    */
    function cambiaNegro(){
        $(this).css("background", "black").css("color", "white");
    }
    function cambiaAzul(){
        $(this).css("background", "blue");
    }

    //hover
    caja.hover(cambiaNegro, cambiaAzul);

    //click, doble click
    caja.click(function(){
        $(this).css("background", "green")
               .css("color", "black");
    });
    
    //focus y blur
    var nombre = $("#nombre");
    var datos = $("#datos");
    
    nombre.focus(function(){
        $(this).css("border", "2px dashed green !important");
    });
    
    nombre.blur(function(){
        $(this).css("border", "1px solid #ccc !important");
        $(this).val($(this).val().toUpperCase());
        datos.text($(this).val()).show();
    });

    //mousedown y mouseup
    datos.mousedown(function(){
        $(this).css("border-color", "red");
    });
    datos.mouseup(function(){
        $(this).css("border-color", "green");
    });

    //mousemove
    $(document).mousemove(function(){
        $('body').css("cursor","none");
        var sigueme = $("#sigueme");
        sigueme.css("left", event.clientX)
                        .css("top", event.clientY);

    });
    


});