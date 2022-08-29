# Call
execute and bind a this to some function, the arguments must be provided one by one
```js
someFunction.call(myThis, firstArg, secondArg)
```

# Apply
execute and bind a this to some function, the arguments must be provided by an array

```js
someFunction.apply(myThis, [firstArg, secondArg])
```

we can use to avoid the use of for loop in a built in method:

```js
const numbers = [1,2,3,4,5,6]
const maxNumber = Math.max.apply(null, numbers)
console.log(maxNumber)
```
> Can be better just use split operator

```js
const numbers = [1,2,3,4,5,6]
const maxNumber = Math.max(...numbers)
console.log(maxNumber)
```

# Bind
bind forever a this. It can be change. with this built in method its not necessary always code .call(this, args) just execute the method because we already set a this for the function.

```js
const myThis = {
  number: 1
}

const mySecondThis = {
  number: 2
}

function printNumber(){
  console.log(this.number);
}

let boundPrintNumber = printNumber.bind(myThis);
boundPrintNumber = printNumber.bind(mySecondThis);

boundPrintNumber();
```