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
*//*
//CONTAR EL NUMERO DE 1 DENTRO DE LOS ARRAY
  const matrixToEvaluate = [[0,0,1],[1,0,1],[0,9,1]]
  var totalnumbers = 0
    for (let indexOnematrix = 0 ; indexOnematrix < indexOnematrix.length; indexOnematrix++ ){
      for (let indexTwoMatrix = 0 ; indexTwoMatrix < matrixToEvaluate[indexOnematrix].length; indexTwoMatrix++)  
      {
          if(indexTwoMatrix === 1){
            totalnumbers++
          }
        }
    }
  console.log(totalnumbers)
//CONTAR EL NUMERO 1 DENTRO DEL ARRAY DE MAP
  const matrixToEvaluate = [[0,0,1],[1,0,1],[0,9,1]]
 total = 0
  var totalnumbers = matrixToEvaluate.map((number, array) => 
*/
  //DADO UN ARRAY DEVOLVER LOS ELEMENTOS QUE EMPIECEN CON a - A
 /* var  array =  ['Ay','amorcito','como','estas']

    
  }
  */
  /*
//hola amigos => amigos hola
var phrase = "Hola amigos"
function invertPhrase(phrase){return(phrase.split(' ').reverse().join(' '))}
invertPhrase(phrase)

const reversePhrase = phrase => phrase.split(' ').reverse().join(' ')

var phrase = "anita lava la tina"
function checkPalindrome(phrase){
  if(phrase === reverse(phrase){
    console.log("Es un palindromo")
  }
}

var phrase = "anita lava la tina";
*//*
var palindrome = phrase => {
    let reversedPhrase;
    let originalPhrase;
    originalPhrase = phrase.split(" ").join("");  
    reversedPhrase = originalPhrase.split("").reverse().join("");
     
    
    if (reversedPhrase === originalPhrase){
        return "Es palindromo";
    } else {
        return "No es palindromo";
    }
}
*/
//Dado un array indicar si la palabra tiene una longirud par o impar 
/*
var words = ["hola","buenos","días","señor"]

const pairWords = words.filter(word => word.length &2 === 0 )
var objKoders = [
  {
      firstName: "Isaac",
      lastName: "Mendoza",
      generation: 3
  },

  {
      firstName: "Jos",
      lastName: "Avalos",
      generation: 1
      
  },

  {
      firstName: "Alex",
      lastName: "Aguilar",
      generation: 4   
  }
];
objKoders.map(
  function(koder){
    let firstName = objKoders.firstName
    let lastName = objKoders.lastName
    return '${}'
  }

  )
/*
var carObj = {
  yearFabrication : 2014,
  'moto'r : 2.0,
  'kmTraveled' : 38,000,
  'color' : "white",
  'trasmisionType' : "manual",
  'doorsNumber' : 5,
  'fuelType' : 'gasoline',
  price : 750,000,
}
*//*
var studentsObj = [
  {
  'name' : 'Alex',
    'totalAverage' : 6.1,
    'historyAverage' : '9',
    'spanishAverage' : '6' 
  },
  {'name' : 'Isaac',
  'totalAverage' : 8.1,
  'historyAverage' : '9',
  'spanishAverage' : '5' },    

  {
    'name' : 'Jos',
    'totalAverage' : 7.5,
    'historyAverage' : '6',
    'spanishAverage' : '10' 
  }
]

studentsObj.forEach(
  function(student){
    for (studentIndex = 0; student < studentsObj.length, studentIndex ++)
    let studentIndex = studentsObj[0]
    let average = student['totalAverage']


  
  }
)
*//*
DADO UNA MATRIZ CONE
var matrixKoders = [
  ['Isaac', 'Mendoza',5,23,7],
  ['Mike', 'Aceves', 5, 27, 6],
  ['Arely', 'Santiago',5,25,6],
]

matrixKoders.forEach(function Koder(firstname, lastName,generation, average){
  this.firstname = firstname
  this.lastName = lastName
  this.generation = generation
  this.average = average
  console.log( firstname +'  '+lastName) 
})
*/
var style = [
  {
    height: '100px',
    width: '100px',
    backgroundColor: 'red'
  },
  {
    height: '100px',
    width: '100px',
    backgroundColor: 'blue'
  }, {
    height: '100px',
    width: '100px',
    backgroundColor: 'yellow'
  }, {
    height: '100px',
    width: '100px',
    backgroundColor: 'black'
  }
]

style.forEach(styleProperty => {

});

document.getElementsByTagName('div').style.backgroundColor
 


