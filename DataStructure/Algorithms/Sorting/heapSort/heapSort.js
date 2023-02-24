function heapSort(arr) {
  console.log(arr)
  buildHeap(arr)
  console.log(arr)
  for (let heapSize = arr.length - 1; heapSize > 0; heapSize--) {
    swap(arr, 0, heapSize)
    maxHeapifyBook(arr, 0, heapSize)
  }
  return arr
}

function buildHeap(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    maxHeapifyBook(arr, i, arr.length)
  }
}

function maxHeapifyBook(arr, parentI, heapSize) {
  const leftI = parentI * 2 + 1
  const rightI = parentI * 2 + 2
  let biggestI = parentI
  if (leftI < heapSize && arr[leftI] > arr[biggestI]) {
    biggestI = leftI
  }
  if (rightI < heapSize && arr[rightI] > arr[biggestI]) {
    biggestI = rightI
  }
  if (biggestI != parentI) {
    swap(arr, parentI, biggestI)
    maxHeapifyBook(arr, biggestI, heapSize)
  }
}

function swap(arr, A, B) {
  [arr[A], arr[B]] = [arr[B], arr[A]]
}

console.log(heapSort([1, 2, 3, 4]))