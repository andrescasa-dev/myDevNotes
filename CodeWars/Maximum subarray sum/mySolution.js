var maxSequence = function(arr){
  const sums = [];
  for (let lengthSubArr = arr.length; lengthSubArr > 0; lengthSubArr--) {
    for (let i = arr.length - lengthSubArr; i >= 0; i--) {
      const subArr = arr.slice(i, i + lengthSubArr);
      const sum = subArr.reduce((a,b)=> a + b);
      if(sum > 0) sums.push(sum);
    }
  }
  return sums.sort((a,b)=> a - b).pop() || 0;
}
