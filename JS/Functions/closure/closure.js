//create a program that show the likes of a user using closures
function handleLikes(){
  let likes = 0;
  return () => ++likes;
}

const like = handleLikes();
like();
like();
let result = like();
console.log(result);


///other example

// function countdown(number, steps) {
//   let startNumber = number;
//   return () => startNumber -= steps
// }

function countdown (startNumber) {
  return (steps) => startNumber -= steps
}

const countingDown = countdown(20);
console.log(countingDown(3));
console.log(countingDown(2));
console.log(countingDown(1));


//other use

let e = 10;
const sum2 = (a) => (b) => (c) => (d) => a + b + c + d + e;

const add1_2_3_n = sum2(1)(2)(3);
console.log(add1_2_3_n(4));//20
console.log(add1_2_3_n(3));//19
console.log(add1_2_3_n(1));//17


// function sum(a){
//   return (b) => (c) => (d) => a + b + c + d + e;
// }

// function sum(a){
//   return function(b){
//     return function(c){
//       // outer functions scope
//       return function(d){
//         // local scope
//         return a + b + c + d + e;
//       }
//     }
//   }
// }



