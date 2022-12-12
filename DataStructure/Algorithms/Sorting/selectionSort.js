//Main idea: for each elements, select the smallest element at right (including it), the place it
// ============================
//        MY SOLUTION
//      TEACHER SOLUTION
//     ORIGINAL SELECTION SORT
//          O(n^2)
// ============================

let operations = 0

function mySelectionSort(arr){
  for (let smallestI = 0; smallestI < arr.length; smallestI++) {
    for (let i = smallestI; i < arr.length; i++) {
      operations++
      if(arr[i] < arr[smallestI]){
        [arr[i], arr[smallestI]] = [arr[smallestI], arr[i]]
      }
    }
  }
  return arr
}

console.log(mySelectionSort([1,2,3,4,5,6,7]), {operations})

//remember
function mySelectionSort2(arr){
  return arr.map((em, i)=>{
    let smallestI = i
    for (let j = i; j < arr.length; j++) {
      smallestI = arr[j] < arr[smallestI] ? j : smallestI
    }
    [arr[i],arr[smallestI]] = [arr[smallestI], arr[i]];
    return arr[i]
  })
}

console.log(mySelectionSort2([3,2,1,3,5,7,2,1]))