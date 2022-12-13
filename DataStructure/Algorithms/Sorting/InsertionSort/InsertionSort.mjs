export default function myInsertionSort(arr) {
  arr.forEach((_, i) => {
    let j = i
    while (j > 0 && arr[j] < arr[j - 1]) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
      j--
    }
  })
  return arr
}

