function validateHello(greetings) {
    //res =  //regex here/.test(greetings) 
    greetings = greetings.toLowerCase();
    if(greetings.includes("hello") || greetings.includes("ciao") || greetings.includes("salut") || greetings.includes("hallo") || greetings.includes("hola") || greetings.includes("ahoj") || greetings.includes("czesc")){
      return true;
    } else {
      return false
    }
    //return greetings
}
console.log(validateHello('ahoj')); // true
console.log(validateHello('meh')); // false
console.log(validateHello('AhofsDD ahoj')); // true