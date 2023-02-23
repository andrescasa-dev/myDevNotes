import myInsertionSort from "./InsertionSort/InsertionSort.mjs";
import myBubble from "./bubbleSort.mjs";
import mySelectionSort from "./selectionSort.mjs";
import myMergeSort from "./mergeSort/mergeSort.mjs";
import myQuickSort from "./QuickSort/quickSort.mjs";

const arrTest = Array.from({ length: 100000 }, () => Math.floor(Math.random() * 40));

function testSort(algoSort, arr) {
  const start = Date.now()
  console.log(algoSort(arr))
  console.log(`time spent: ${Date.now() - start}ms \n`)
}

// console.log('Quick Sort \n')
// testSort(myQuickSort, [...arrTest])

// console.log('merge \n')
// testSort(myMergeSort, [...arrTest])

// console.log('insertion \n')
// testSort(myInsertionSort, [...arrTest])

// console.log('selection \n')
// testSort(mySelectionSort, [...arrTest])

// console.log('bubble \n')
// testSort(myBubble, [...arrTest])



//Insertion

// function myInsertion(arr) {
//   arr.forEach((curr, i) => {
//     let j = i - 1
//     while (j >= 0 && arr[j] > curr) {
//       [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//       j--;
//     }
//   })
//   return arr
// }

// console.log(myInsertion([3, 2, 1]))


// function myMerge(arr) {
//   if (arr.length <= 1) {
//     return arr
//   }
//   const middleI = Math.ceil(arr.length / 2)
//   const left = myMerge(arr.slice(0, middleI))
//   const right = myMerge(arr.slice(middleI))
//   return merge(left, right)
// }

// function merge(left, right) {
//   const orderArr = []
//   while (left.length > 0 && right.length > 0) {
//     const toAdd = left[0] < right[0] ? left.shift() : right.shift()
//     orderArr.push(toAdd)
//   }
//   return [...orderArr, ...left, ...right]
// }

// console.log(myMerge([3, 2, 1]))

// function myQuick(arr) {
//   if (arr.length <= 1) {
//     return arr
//   }
//   const pivot = arr[0];
//   let lastLowerI = 0
//   arr.forEach((curr, i, thisArr) => {
//     if (curr < pivot) {
//       lastLowerI++;
//       [thisArr[lastLowerI], thisArr[i]] = [thisArr[i], thisArr[lastLowerI]]
//     }
//   })
//   // const temp = arr[lastLowerI];
//   // arr[lastLowerI] = arr[0]
//   // arr[0] = temp
//   // [arr[0], arr[lastLowerI]] = [arr[lastLowerI], arr[0]]

//   const left = myQuick(arr.slice(0, lastLowerI))
//   const right = myQuick(arr.slice(lastLowerI + 1))
//   return [...left, pivot, ...right]
// }

// console.log(myQuick([3, 2, 1]))


  // function myQuick(arr) {
  //   if (arr.length <= 1) {
  //     return arr
  //   }
  //   const pivot = arr[0];
  //   let lastLowerI = 0
  //   for (let i = 0; i < arr.length; i++) {
  //     const curr = arr[i];
  //     if(curr < pivot){
  //       lastLowerI++;
  //       [arr[i], arr[lastLowerI]] = [arr[lastLowerI], arr[i]]
  //     }
  //   }
  //   [arr[0], arr[lastLowerI]] = [arr[lastLowerI], arr[0]]
  //   const left = myQuick(arr.slice(0,lastLowerI))
  //   const right = myQuick(arr.slice(lastLowerI+1))
  //   return [...left, pivot, ...right]
  // }

  // console.log(myQuick([3, 2, 1]))