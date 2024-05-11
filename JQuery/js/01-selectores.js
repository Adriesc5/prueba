$(document).ready(function(){
    ///selectores de ID
    $("#rojo").css("background","red")
               .css("color","white")
    $("#amarillo").css("background","yellow")
                  .css("color","blue")
    $("#verde").css("background","green")
                .css("color","white")
    //selectores de clase
    var mi_clase = $(".zebra")
    mi_clase.css("padding","5px dashed black");

    $(".sin_borde").click(function(){
        console.log("Click dado!!");
        $(this).addClass("zebra");
    });
    //selectores de etiqueta
    var parrafos = $("p").css("cursor","pointer");
    parrafos.click(function(){
        var that = $(this);
        if(!that.hasClass("grande")){
            that.addClass("grande");
        }else{
            that.removeClass("grande");
        }
    });

    //selectores de atributo
    $('[title="Google"]').css("background","#ccc");
    $('[title="Facebook"]').css("background","blue");
    //otros
    //$('p,a').addClass("margen-superior");
    var busqueda = $('#caja').find('.resaltado');
    //var busqueda = $('#caja .resaltado') //otra forma de hacerlo;
    console.log(busqueda);
    
}); 