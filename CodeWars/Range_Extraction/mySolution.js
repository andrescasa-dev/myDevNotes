export default function solution(list){
  list.push(null);
  let isAdj = false
  let isRange = false
  let start = undefined;
  let prev = undefined;
  return list.reduce((string, pointer)=>{
    if(prev === undefined){
      prev = string
      string = []
    }
    isAdj =  (Math.abs(prev - pointer) === 1) && pointer !== null
    isRange = Math.abs(start - prev) !== 1 && start !== undefined;
    
    if(isAdj){
      if(start === undefined) start = prev 
    }
    else{
      if(!isRange && start){
        string.push(start, prev)
        start = undefined;
      }
      else{
        if(start){
          string.push(`${start}-${prev}`)
          start = undefined;
        }
        else{
          string.push(prev)
        }
      }
    }
    prev = pointer;
    return string
  }).join(',')
}

console.log(solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));