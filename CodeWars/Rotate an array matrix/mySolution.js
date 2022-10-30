function rotate(matrix, direction) {
  return matrix[0].map((_, i) => {
    if(direction === 'clockwise'){
      return matrix.map(row => row[i]).reverse()
    }
    if(direction === 'counter-clockwise'){
      return matrix.map(row => row[matrix[0].length - 1 -i])
    }
  })
}