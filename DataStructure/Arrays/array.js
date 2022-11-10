class Array {
  constructor(len = 0, name){
    this.length =  len;
    this.data = {}

  }
  _(i){
    return (em)=> this.push(i, em);
  }
  push(i, em){
    this.data[i] = em;
  }
  get(i){
    return this.data[i]
  }
}

const myArr = new Array();
myArr._(3) = 

myArr[3] = "a"
console.log(myArr.get(3))

//================//
// Reverse a String 
//================//

function reverseString(str){
  return reverse(str)
}

function reverse(arr){ 
  const newArr = []
  if(!arr || !arr.length) throw new Error("no se pudo")
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]) ;
  }
  return newArr;
}

try {
  console.log(reverseString("asdf"))  
} catch (error) {
  console.error(error.message)
}


//================//
// Merge a array
//================//

// first attempt

function merge(arr1, arr2){ 
  let p1 = 0
  let p2 = 0
  const newArr = []
  while( arr1[p1]!== undefined || arr2[p2] !== undefined){
    if(arr1[p1] === arr2[p2]){
      newArr.push(arr1[p1++])
      newArr.push(arr2[p2++])
    }
    else{
      let valueToSave;
      const someEmpty = arr1[p1] === undefined || arr2[p2] === undefined
      if(someEmpty){
        valueToSave = arr1[p1] !== undefined ? arr1[p1++] : arr2[p2++];
      }
      else{
        valueToSave = arr1[p1] < arr2[p2] ? arr1[p1++] : arr2[p2++]
      }
      newArr.push(valueToSave); 
    }
  }
  return newArr;
}


//second attempt

function merge(arr1, arr2){ 
  let i = 0 , j = 0;  
  const newArr = []
  const shouldSave = (em1, em2) => em1 !== undefined && em1 <= em2

  while( arr1[i]!== undefined || arr2[j] !== undefined){
    const em1 = arr1[i], em2 = arr2[j];
    shouldSave(em1, em2) && newArr.push(arr1[i++])
    shouldSave(em2, em1) && newArr.push(arr2[j++])
  }
  return newArr;
}

console.log(merge([0,4,5,7,8,9],[4,5,6]))

