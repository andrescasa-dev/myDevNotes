function solution(individualIntegers) {
  return individualIntegers
    .reduce(splitIntoRanges, [])
    .map(convertToRange)
    .join(",");
}

function splitIntoRanges(ranges, number) {
  if (!ranges.length) {
    ranges.push([number]);
    return ranges;
  }

  var lastRange = ranges[ranges.length - 1];
  var lastNumber = lastRange[lastRange.length - 1];

  number === lastNumber + 1 ? lastRange.push(number) : ranges.push([number]);
  return ranges;
}

function convertToRange(range) {
  return range.length < 3 ? range.join(",") : range[0] + "-" + range[range.length - 1];
}


function solution(list){
  for(var i = 0; i < list.length; i++){
     var j = i;
     while(list[j] - list[j+1] == -1) j++;
     if(j != i && j-i>1) list.splice(i, j-i+1, list[i] +'-'+list[j]);
 }
 return list.join();
}

function solution(list){
  return list
    .reduce((acc, n, i, arr) => {
      if(n !== arr[i - 1] + 1) {
        acc.push([n]);
      } else {
        acc[acc.length - 1].push(n);
      }
      return acc;
    }, [])
    .map(arr => arr.length > 2 ? `${arr[0]}-${arr[arr.length-1]}` : arr)
    .join(',');
}