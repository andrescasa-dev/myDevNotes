//teacher solution
//is O(2^n)
function fibonacciRecursion(n){
  if(n < 2) {
    return n
  }
  const result = fibonacciRecursion(n-1) + fibonacciRecursion(n-2)
  return result
}
console.log(fibonacciRecursion(18))

//my solution
//is O(n)
function sum (curr=8, prev=5, i){
  i--
  if(i <= 1) {
    console.log("operation " + i)
    return curr + prev}
  console.log("operation " + i)
  return sum (curr + prev, curr, i)
}
console.log(sum(1,0,4))


//is O(n)
function fibonacciIteration(n){
  let act = 1
  let prev = 0
  let result = 0
  while(n > 0){
    result = act + prev
    prev = act
    act = result
    n--
  } 
  return result
}
// console.log(fibonacciIteration(6))