import myInsertionSort from "./InsertionSort/InsertionSort.mjs";
import myBubble from "./bubbleSort.mjs";
import mySelectionSort from "./selectionSort.mjs";
import myMergeSort from "./mergeSort/mergeSort.mjs";
const arrTest = Array.from({length: 100000}, () => Math.floor(Math.random() * 40));

function testSort(algoSort, arr){
  const start = Date.now()
  console.log(algoSort(arr))
  console.log(`time spent: ${Date.now() - start} \n` )
}

console.log('merge \n')
testSort(myMergeSort, [...arrTest])

console.log('insertion \n')
testSort(myInsertionSort, [...arrTest])

console.log('selection \n')
testSort(mySelectionSort, [...arrTest])

console.log('bubble \n')
testSort(myBubble, [...arrTest])

