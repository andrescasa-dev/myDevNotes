const example = [6,28,28,32,12,20,4,35,3,13,16]

function myQuickSort(arr){
  if(arr.length <= 1){
    return arr
  }
  const pivot = arr[0]
  let lastSmallI = 0
  for (let i = 1; i < arr.length; i++) {
    const act = arr[i];
    if(act < pivot){
      lastSmallI++;
      [arr[lastSmallI], arr[i]] = [arr[i], arr[lastSmallI]]//swapping smaller ones
    }
  }
  [arr[0], arr[lastSmallI]] = [arr[lastSmallI], arr[0]]//place the pivot at the end
  const left = myQuickSort(arr.slice(0, lastSmallI))
  const right = myQuickSort(arr.slice(lastSmallI + 1))
  return [...left, arr[lastSmallI], ...right]
}

console.log(myQuickSort(example))
//the first placement of small-than-pivot-elements is done