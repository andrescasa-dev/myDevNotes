
// 5 => !5 => 5 * 4 * 3  * 2 * 1 =(output)=> 120
// 5 is equal to 5 ? no lets 
function getFactorial(num){
  if(num === 1) return 1
  return num * getFactorial(num - 1)
}

console.log(getFactorial(4))

function getFactorialIterations(num){
  let result = num
  while(num > 1){
    result *= --num
  }
  return result
}
console.log(getFactorialIterations(-1))
