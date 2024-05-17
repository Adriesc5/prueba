//interface
interface CamisetaBase {
    setColor(color);
    getColor();
}
//decorador
function estampar(logo: string){
    return function(target: Function){
        target.prototype.estampacion = function():void{
            console.log("Camiseta estampada con el logo de: " + logo);
        }
    
    }
}

function getNumero(numero:number = 12):string{
    return "El número es: " + numero;
}
console.log(getNumero());

//clases
@estampar("Gucci Gang")
class Camiseta implements CamisetaBase{
    // Propiedades
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;
    // Métodos
    constructor(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }

    public setColor(color) {
        this.color = color;
    }
    public getColor() {
        return this.color;
    }
}

// var camiseta = new Camiseta();
// camiseta.color = "Rojo";
// camiseta.modelo = "Manga larga";
// camiseta.marca = "Nike";
// camiseta.talla = "L";
// camiseta.precio = 10;
// console.log(camiseta);


//clase hija
class Sudadera extends Camiseta{
    public capucha: boolean;
    setCapucha(capucha:boolean){
        this.capucha = capucha;
    }
    getCapucha():boolean{
        return this.capucha;
    }
}
var camiseta = new Camiseta('rojo', 'manga larga', 'nike', 'L', 10);
camiseta.setColor("Rojo");

var playera = new Camiseta('azul', 'manga corta', 'adidas', 'M', 15);
playera.setColor("Azul");
var sudadera = new Sudadera('verde', 'manga larga', 'nike', 'L', 20);
sudadera.setCapucha(true);
sudadera.setColor("Rojo");
camiseta.estampacion();
console.log(camiseta, playera, sudadera);