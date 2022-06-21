function validParentheses(parens){
  const openList = [];
  return Array.from(parens).reduce((isCorrect, paren, i, parens) => {
    const isLastElement = parens.length - 1 === i;
    if(isCorrect){  
      if(paren === '(') isCorrect = openList.push(paren) > 0;
      if(paren === ')') isCorrect = openList.pop() !== undefined
      if(isLastElement && openList.length > 0) isCorrect = false
    }
    return isCorrect
  },true) 
}
/**
 * I was correct about return a boolean, but it wasn't necessary the list. 
 */
/* -------------------------------- Mistakes -------------------------------- */
/**
 * Unnecessary data structure
 * Force use of reduce
 * don't know tha a string is a array-like
 */
/* ----------------------------- Best user solution. ----------------------------- */
function validParentheses2(parens){
  const openWithoutClose = 0;
  for (let i = 0; i < parens.length; i++) {
    const paren = array[i];
    if(paren === '(') openWithoutClose++;
    if(paren === ')') openWithoutClose--;
    if(openWithoutClose < 0) return false
  }
  return openWithoutClose === 0
}
console.log(validParentheses(''))