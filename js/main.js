/*
var word = "cariño";
var numbV = 0;

for(var index=0; index < word.length ;index++) {
    if ((word.charAt(index)=='a') || (word.charAt(index)=='e') || 
       (word.charAt(index)=='i') || (word.charAt(index)=='o') || 
       (word.charAt(index)=='u')){
        numbV++;
    }
    
  }
if (numbV < 3){
  console.log("Tiene mas de tres vocales")
}else {
  console.log("No tiene más de tres palabras")
}



var numberTwo = 50;
var numberOne = 13;
var nodTotal = 0;
if (numberOne > numberTwo){
  for(let index = numberOne; index <= numberTwo; index++ ){
    if( index % 8 === 0 ){
      nodTotal++
    }  
    }
  } 
  console.log("El numero total de multiplos de ocho es " + nodTotal)

var salary = 450 * 30
var empleados=[['David',4],['Jose',2]]
var ausentD = empleados[1][1]
var empleado = empleados [1][0]
for(let index = 0; index < empleados.length; index++){
  if( empleados[index][1] > 0){
    var reSalary = empleados[index][1] * (0.02 * 450 );
  var empSalary = salary - reSalary;
  console.log("El empleado " + empleados[index] + "tiene un salario de " + empSalary)
  }
 // console.log("El empleado " + empleado + "tiene un salario de" + empSalary)

}
*/


function calc(function, number1, number2){

  function addition(number1,number2){
    return number1 + number2
 }
 
 function rest(number1,number2){
   return number1 - number2;
 }
 
 function div(number1, number2){
   return number1 / number2;
 }
 
 function times(number1,number2){
   return number1 * number2
 }
}


