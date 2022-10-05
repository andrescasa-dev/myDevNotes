function validSolution(board){
  const rowCounters = Array(9), colCounters = Array(9), gridCounters = Array(9)
  let gridIndex = 0;
  board.forEach((row, rowIndex) => {
    row.forEach((number, colIndex) =>{
      if(colIndex === 0 && rowIndex !== 0) gridIndex = rowIndex === 3 || rowIndex === 6 ? gridIndex + 1 : gridIndex - 2;
      if(colIndex === 3 || colIndex === 6) gridIndex ++
      rowCounters[rowIndex] = registerNumber(rowCounters[rowIndex], number)
      colCounters[colIndex] = registerNumber(colCounters[colIndex], number)
      gridCounters[gridIndex] = registerNumber(gridCounters[gridIndex], number)
    })
  })
  const isInvalid = [rowCounters, colCounters, gridCounters].some( 
  counters => counters.some(counter => Object.values(counter).some(count => count !== 1)))
  return !isInvalid
}

function registerNumber(counter = {}, number){
  counter[number] = counter[number] ? counter[number] + 1 : 1;
  return counter;
}

const result = validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]);

console.log(result)