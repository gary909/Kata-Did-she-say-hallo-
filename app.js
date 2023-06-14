function validateHello(greetings) {
    //res =  //regex here/.test(greetings) 
    greetings = greetings.toLowerCase();
    /*if(greetings == "hello" || greetings == "ciao" || greetings == "salut" || greetings == "hallo" || greetings == "hola" || greetings == "ahoj" || greetings == "czesc"){
      return true;
    } else {
      return false
    }*/
    return greetings
}
console.log(validateHello('ahoj')); // true
console.log(validateHello('meh')); // false
console.log(validateHello('AhofsDD ahoj')); // true