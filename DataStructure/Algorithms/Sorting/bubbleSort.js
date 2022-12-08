//arr of numbers
function doBubbleSort(arr){
  if(arr.length < 2) return arr
  let firstSortedIndex = null
  let actI = 0 
  let nextI = 1
  while (firstSortedIndex !== 0){
    if(nextI > arr.length-1 || nextI === firstSortedIndex){
      firstSortedIndex = actI;
      [actI, nextI] = [0,1]
    }
    else{
      if(arr[actI] > arr[nextI]){
        //do Swap
        [arr[actI], arr[nextI]] = [arr[nextI],arr[actI]]
      }
      //move
      actI++
      nextI++
    }
  } 
  return arr
}

console.log(doBubbleSort([4,2,7,1]))