export default function myInsertionSort(arr) {
  arr.forEach((_, i) => {
    let j = i
    while (j > 0 && arr[j] < arr[j - 1]) {
      //swap while j > 0, until arriving the the first order element.
      //swap when the element is smaller than the left one
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
      j--
    }
  })
  return arr
}

