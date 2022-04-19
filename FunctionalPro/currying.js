//it's the practice of only use one argument of each nested function:

//============Without currying============//

function sumFunction(x, y, z){
  return x + y + z;
}

function validate(x, y, z){
  //do something with y 
  sumFunction(x, y, z);
}

function sanitize(x, y, z){
  //do something with x 
  validate(x, y, z);

}
console.log(sanitize(1,2,3)) //6

//============With currying============//
let sanitize__currying = (x) =>{
  //do something with x
  return (y) => {
    //do something with y 
    return (z) =>{
      x + y + z
    }
  }
}

console.log(sum3Numbers__currying(1)(2)(3)) //6

