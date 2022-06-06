/* -------------------------------- Remember -------------------------------- */
/* * Think first: what is problem? and then, how can i solve it?
/* * Select the proper data structure (or if it doesn't need ir)
/* -------------------------------- Remember -------------------------------- */

function pigIt(str){
  return str.split(' ').map(word =>{
    let isValidWord = /^[a-zA-Z]+$/.exec(word)
    return isValidWord ? `${word.slice(1)}${word.charAt(0)}ay` : word;
  }).join(' ')
}

console.log(pigIt('Pig latin is cool'));
