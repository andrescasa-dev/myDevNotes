function rotate(matrix, direction) {
  return direction == 'clockwise' ? 
    matrix[0].map( (_, k) => matrix.map(a => a[k]).reverse() ) : 
    matrix[0].map( (_, k) => matrix.map(a => a[k]) ).reverse()
}

//https://www.codewars.com/kata/525a566985a9a47bc8000670/solutions/javascript