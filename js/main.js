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

*/
//1.- Dado un array de numeros, entregar el producto total
//Ej -> [1,2,3,4,5]
//El resultado seria 1 * 2 * 3 * 4 * 5  
/*
var numbersMult = [1,2,3,4]
function multNumb (){
  var = multResult= numbersMult[0] * numbersMult[1] * numbersMult [2] * numbersMult [3]
 console.log("El resultado seria " + multResult)
} 
multNumb()

*/
/*  
var converAmounts = [13.02, 4]
function conversion (){
  for (indexAmounts= converAmounts[0]; indexAmounts < converAmounts.length; 
    indexAmounts++){
      converResults = indexAmounts * 0.051
      console.log("El cambio de moneda es de  : "+converResults+ "  USD" ) 
  }
}  
conversion ()
*/
/*EJERCICIO 3
var firstName = ['Jesus','Juan'];
var lastName = ['Navarro Osorio','Lopez Hernandez'];
var indexFName = firstName[0]
var indexLName = lastName[0]
function unionName (indexFName, indexLName){
  console.log(firstName[indexFName]+' '+lastName[indexLName]) 
}
unionName (1,0)
*/
// EJERCICIO DE CAPITALIZACION 
/*
const capitalize = (phrase) => {
  let phraseArray = phrase.split(' ')
  for (let index = 0; index < phraseArray.length; index++) {
    let firstWord = phraseArray[index][0].toUpperCase()
    let lastWord = phraseArray[index].slice(1).toLowerCase()
    phraseArray[index] = `${firstWord}${lastWord}`
  }
  return phraseArray.join(' ')
}
capitalize('Hola peRros')
*/
/*
const matrixToEvaluate = [[0,0,1],[1,0,1],[0,9,1]]
var totalnumbers = 0
  for (let indexOnematrix = 0 ; indexOnematrix < indexOnematrix.length; indexOnematrix++ ){
    let indexOnematrix = matrixToEvaluate[0]
    for (let indexTwoMatrix = 0 ; indexTwoMatrix < indexOnematrix.length; indexTwoMatrix++)
      {
        index
        if(indexTwoMatrix === 1){
          totalnumbers++
        }
      }
  }

  var words = ["hola","buenos","dias","señor"]
  const pairWords = words.filter(word => word.length %2 === 0 )
  pairWords()
*/
  var koders = [
    {
      firstName: 'Isaac',
      lastName : 'Mendoza'
    },
    {
      firstName: 'Jos',
      lastName: 'Avalos'
    },
    {
      firstName: 'Alex',
      lastName: 'Aguilar'
    }
]   
var newArray = koders.forEach(koder => {
  for(indexArray=0; indexArray >  )
})