function isInteresting(number, awesomePhrases) {
  let result = 0
  if(couldBeInteresting(number, awesomePhrases)) 
    result = 2;
  else if(couldBeInteresting(number + 1, awesomePhrases, 1) || couldBeInteresting(number + 2, awesomePhrases, 2)) 
    result = 1
  return result
}

function couldBeInteresting(number, awesomePhrases, bonus){
  let isInterestingNum = false
  let doesIncrement, doesDecrement, sameNumber, isFollowZero
  if(number > (99 - bonus) ){
    number.split('').reduce((prevNum, currNum)=>{
      if(doesIncrement || doesIncrement === undefined) 
        doesIncrement = prevNum + 1 === currNum || (prevNum === '9' && currNum === '0');
      if(doesDecrement || doesDecrement === undefined) 
        doesDecrement = prevNum - 1 === currNum;
      if(sameNumber || doesDecrement === undefined) 
        sameNumber = prev === currNum;
      if(isFollowZero || isFollowZero === undefined) 
        isFollowZero = currNum === 0;
      if(!isPalindrome || isPalindrome === undefined) 
      return curr;
    })
    const isPalindrome = number.split('').reverse().join('') === number;
    const inPhrases  = awesomePhrases.includes(number)
    isInterestingNum = isFollowZero || sameNumber || inPhrases || doesIncrement || doesDecrement || isPalindrome
  }
  return isInterestingNum
}



console.log(isInteresting(67890, [1337, 256]), 2)
console.log(`${isInteresting(12345, [])} expected: 2`)
console.log(`${isInteresting(321, [])} expected: 2`)
console.log(`${isInteresting(12321, [])} expected: 2`)
console.log(`${isInteresting(100, [])} expected: 2`)
console.log(`${isInteresting(111, [111, 222])} expected: 2`)
console.log(`${isInteresting(284, [])} expected: 0`)

function myTry(number, awesomePhrases){
  let interesting = 0;

  const tests = [
    (num) => /^\d00+$/.test(num),
    (num) => /^(\d)\1+$/.test(num),
    (num) => RegExp(num).test('1234567890'), // 4567 => 123(4567)890
    (num) => RegExp(num).test('9876543210'),
    (num) => String(num).split('').reverse().join('') === String(num),
    (num) => awesomePhrases.includes(num)
  ]
  
  tests.some((acc, test)=>{
    if(test(number) && acc === 2) return interesting = 2
    else if(( number > 98 && test(number + 1)) || (number > 97 && test(number + 2))) return interesting = 1
  },0)
  
  return interesting
}
// is interesting => 2
// almost interesting (+1 +2) => 1
// not interesting

// test.some() && number
// test.some() && number (+1 +2)
// !test.some()