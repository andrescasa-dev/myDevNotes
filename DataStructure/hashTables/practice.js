function firstRecurring(arr){
  const set = new Set();
  return arr.find(number =>{
    const seen = set.has(number);
    set.add(number)
    return seen
  })
}
const hola = ()=>console.log('hola');
console.log(firstRecurring(["3s","2s","2s"]))