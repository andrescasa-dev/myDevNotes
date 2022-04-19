//A function that execute functions right to left with an initial value (optional).
//all the first function is executed and with its return the next one is executed.

const compose = (...functions) => data => 
  functions.reduceRight(
    (result, func) => func(result), data
  )

let callback1 = (add) => "hola " + add;
let callback2 = (add) => "Eyyy. " + add;

//callback1("¿Cómo estás?") => "hola ¿Cómo estás?"
//callback2("hola ¿Cómo estás?") => "Eyyy. hola ¿Cómo estás?"


console.log(compose(callback2, callback1)("¿Cómo estás?") ) 