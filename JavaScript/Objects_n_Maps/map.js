function findOdd(numbers) {
  let odd;
  const mapNumbers = new Map();
  numbers.forEach(number =>{
    let count = !mapNumbers.has(number) ? 1 : mapNumbers.get(number) + 1;
    mapNumbers.set(number, count);
  });
  mapNumbers.forEach((value, key) => odd = ((value % 2) !== 0) ? key : undefined)
  return odd;
}

console.log(findOdd([1,1,1,2,2]));