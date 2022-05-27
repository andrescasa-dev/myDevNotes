// function findOdd(numbers) {
//   let numberQuantityPair;
//   let isOdd;

//   let mapIterator = numbers.reduce((mapNumbers,number)=>{
//     let count = !mapNumbers.has(number) ? 1 : mapNumbers.get(number) + 1;
//     mapNumbers.set(number, count);
//     return mapNumbers
//   }, new Map()).entries();

//   do{
//     numberQuantityPair = mapIterator.next().value
//     isOdd = numberQuantityPair[1] % 2 !== 0;
//   }
//   while(!mapIterator.done && !isOdd)

//   return numberQuantityPair[0];
// }

function findOdd(numbers){
  debugger
  let oddNumber;
  let quantity = {};
  numbers.forEach(number => quantity[number] = quantity[number] === undefined ? 1 : quantity[number] + 1);
  for (const number in quantity) {
    if(quantity[number] % 2 !== 0) oddNumber = number;
  }
  return oddNumber
}

console.log(findOdd([1,1,2,3,3]))