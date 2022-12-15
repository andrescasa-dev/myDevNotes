const myArr = [4, 3, 2, 1]

function InsertionSort(arr) {
  arr.forEach((_, i) => {
    let j = i
    while (j > 0 && arr[j] < arr[j - 1]) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
      j--
    }
  })
  return arr
}

// ============================
//        FIRST ATTEMPT
//         INCORRECT
//          O(n^2)
// ============================

function mergeSortFirstTry(arr) {
  // const hight = Math.ceil(Math.log2(arr))
  if (arr.length === 1) {
    return arr
  }
  const middle = Math.ceil(arr.length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)
  return InsertionSort([...mergeSortFirstTry(left), ...mergeSortFirstTry(right)])
}


// ============================
//        SECOND ATTEMPT
//          CORRECT
//        O(n log(n))
// ============================

function myMergeSort(arr) {
  if (arr.length === 1) {
    return arr
  }
  const middle = Math.ceil(arr.length / 2)
  const left = myMergeSort(arr.slice(0, middle))
  const right = myMergeSort(arr.slice(middle))
  return merge(left, right)
}
/**
 * 
 * @param {Array} left a sorted array
 * @param {Array} right a sorted array
 * @returns a sorted array that is the merge between two arrays
 * since the args are sorted arrays i know that the 
 * first element is the lowest, for the determine the 
 * lowest between the two arrays i need to compare the first element
 */
function merge(left, right) {
  let i = 0, j = 0, result = []
  while (i < left.length || j < right.length) {
    const lowest = left[i] < right[j] ? left[i++] : right[j++]
    result.push(lowest)
  }
  return result.concat(left.slice(i), right.slice(j))
}

console.log(merge([3, 4], [5, 6]))

//variation of function merge
function mergeVariation(left, right) {
  let result = []
  while (left.length && right.length) {
    const toAdd = left[0] < right[0] ? left.shift() : right.shift()
    result.push(toAdd)
  }

  return result.concat(left, right)
}


export default myMergeSort