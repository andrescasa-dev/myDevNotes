let counter = 0

function myRecursion(){
  const thisLvl = counter
  if(counter > 3) return 'done' // In the last level (or the top call in the call stack) it will return done
  counter++
  const deeper = myRecursion()
  return `lvl ${thisLvl}: ${deeper}`// In the rest of the levels it will return the actual lvl an the msg returned by the next deeper lvl call
}

const result = myRecursion();
console.log(result)

//lvl 0: lvl 1: lvl 2: lvl 3: done