function getPINs(observed){
  const table = {
    '1': [ '1', '2', '4' ],
    '2': [ '1', '2', '3', '5' ],
    '3': [ '2', '3', '6' ],
    '4': [ '1', '4', '5', '7' ],
    '5': [ '2', '4', '5', '6', '8' ],
    '6': [ '3', '5', '6', '9' ],
    '7': [ '4', '7', '8' ],
    '8': [ '5', '7', '8', '9', '0' ],
    '9': [ '6', '8', '9' ],
    '0': [ '0', '8' ]
  }
  const adjArr = observed.split('').map(number => table[number]);
  const variations = [];

  function getVariation (accumulator, level){
    const possibleSet = level < adjArr.length ? adjArr[level] : [];
    if(possibleSet.length > 0){
      possibleSet.forEach( possible => {
        getVariation(accumulator + possible, level + 1);
      })
    }
    else{
      variations.push(accumulator);
    }
  }
  getVariation('',0);
  return variations;
}