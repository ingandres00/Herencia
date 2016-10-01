/* jshint esversion: 6 */

var Animales = function (
  patas =4,
  alimentacion= true,
  pelaje = true,
  ojos = 2,
  nombre = null
){
return {
  patas : patas,
  alimentacion : alimentacion,
  pelaje : pelaje,
  ojos : ojos,
  comer: function (){ //function
    if(alimentacion === true){
      return "Carnívoro";
    } else {
      return "No Carnivoro";
    }
  },
};
console.log(argument);
return object;
};
var jirafa = new Animales ("4","false","true",2 ,"jirafa");
console.log(jirafa);
var araña = new Animales ("8","false","true",16,"araña");
console.log(araña);
var rata = new Animales ("4","true","true",2,"rata");
console.log(rata);
