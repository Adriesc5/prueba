'use strict'
//bom -browser object moodel
function getBom(){
    console.log(screen.Height);
    console.log(screen.Width);
    console.log(window.location);
}
function redirect(url){
    window.location.href = url;}
function abrirVentana(url){
    window.open(url,"","width=400,height=300");
}
getBom();