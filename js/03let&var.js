'use strict'

var numero = 40;
if(true){
    var numero = 50;
    console.log(numero); // 50
}

function example() {
    if (true) {
      var x = 10;
      let y = 20;
      console.log(x); // Output: 10
      console.log(y); // Output: 20
    }
    console.log(x); // Output: 10
    console.log(y); // Error: y is not defined
  }
  
  example();
  