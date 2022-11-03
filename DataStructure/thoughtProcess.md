# thought process
[google interview](https://www.youtube.com/watch?v=XKu_SEDAykw&ab_channel=LifeatGoogle)


### Exercise
```js
//1: [a,b,c,x] => base
//2: [m,n,x] => compare
//haveSeen = {m: true, n; true, x: true}
//return boolean
function isCommon(arr1, arr2){
  if(arr1.length === 0 && arr2.length === 0) return true
  const baseArr = arr1.length > arr2.length? arr1 : arr2
  const compareArr = baseArr === arr1 ? arr2 : arr1;
  const haveSeen = {};
  return baseArr.some( (baseEm, i) => {
    if(baseEm === compareArr[i] || haveSeen[baseEm]){
      return true;
    }
    haveSeen[compareArr[i]] = true;
  })
}

const result = isCommon([1],[])
console.log(result);
```