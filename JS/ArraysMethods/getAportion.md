# mutable
modify the original array

## splice()
```js
let myArray = [0,1,2,3,4]
let newArray = myArray.slice(1,3) //[1,2,3.]
console.log(myArray) //[0,3,4]
```
it could be reading like "start deleting/replacing from 1, 3 times. "

# no mutable
return a new array and don't modify the original array

## slice()
```js
let myArray = [0,1,2,3,4]
let newArray = myArray.slice(1,3) //[1,2]
//let newArray = myArray.slice(1,(1+2)) //[1,2]
console.log(newArray) //[0,3,4]
```
it could be reading like "start slicing from 1 and stop in 3. "

>it doesn't take the "end value" it's just like a reference.