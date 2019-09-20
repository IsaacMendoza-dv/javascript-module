
var word = "cariño";
var numbV = 0;
for(var index=0; index < word.length ;index++) {
    if ((word.charAt(index)=='a') || (word.charAt(index)=='e') || 
       (word.charAt(index)=='i') || (word.charAt(index)=='o') || 
       (word.charAt(index)=='u')){
        numbV++;
    }
    
  }
  console.log("La palabra " + word + "contiene " + numbV + " vocales")


