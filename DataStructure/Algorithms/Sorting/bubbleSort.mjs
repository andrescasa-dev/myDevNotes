// //main idea: bubble up the biggest unsorted element.
// // an element is bubble until the algo finds some bigger value
// // then if the algo finds the biggest (not sorted) it will end up at the end of the not sorted elements

// const input = [1,1,1,1,1,5,1,1,1,1,1]

// // ============================
// //      My Solution
// //          
// // ============================

// //arr of numbers
// console.group()
// let iterations = []
// function doBubbleSort(passArr) {
//   const arr = [...passArr]
//   if (arr.length < 2) return arr
//   let firstSortedIndex = null
//   let actI = 0
//   let nextI = 1

//   while (firstSortedIndex !== 0) {
//     console.count("my Solution");
//     //if got to the end or next is sorted then reset and set the new sorted index
//     if (nextI > arr.length - 1 || nextI === firstSortedIndex) {
//       firstSortedIndex = actI;
//       [actI, nextI] = [0, 1]
//     }
//     else {
//       if (arr[actI] > arr[nextI]) {
//         //do Swap
//         [arr[actI], arr[nextI]] = [arr[nextI], arr[actI]]
//       }
//       //move
//       actI++
//       nextI++
//     }
//   }
//   return arr
// }
// console.groupEnd()
// console.log(doBubbleSort(input))
// console.group()


// // ============================
// //      TEACHER SOLUTION
// //     ORIGINAL BUBBLE SORT
// //          O(n^2)
// // ============================
// function doBubbleSortTeacher(passArr){
//   const arr = [...passArr]
//   arr.forEach((_, i) => {
//     arr.forEach((_, j) => {
//       console.count("correct");
//       if(arr[j] > arr[j+1]){
//         [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
//       }
//     })
//   })
//   return arr
// }
// console.groupEnd()
// console.log('\n')
// console.log(doBubbleSortTeacher(input))
// console.log('\n')
// console.log(`elements ${input.length}`)

// // ============================
// //      BEST SOLUTION
// //    OPTIMIZE BUBBLE SORT
// //          O(n)
// // ============================

// console.group()
// function doBubbleVisualAlgo(passArr){
//   arr = [...passArr]
//   let wasSwapped = false
//   do {
//     wasSwapped = false
//     let lastUnsorted = arr.length - 1
//     for (let i = 0; i < lastUnsorted ; i++) {
//       console.count("visual")
//       if(arr[i] > arr[i+1]){
//         [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
//         wasSwapped = true
//       }
//     }
//     lastUnsorted--
//   } while (wasSwapped);
//   return arr
// }
// console.groupEnd()

// //if !wasSwapped then all the elements all already sorted
// console.log('\n')
// console.log(input)
// console.log(doBubbleVisualAlgo(input))
// console.log('\n')
// console.log(`elements ${input.length}`)

//remember
function myBubble(arr){
  arr.forEach((_,i)=>{
    arr.forEach((_,j)=>{
      if(arr[j] > arr[j+1]){
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
      }
    })
  })
  return arr
}

export default myBubble