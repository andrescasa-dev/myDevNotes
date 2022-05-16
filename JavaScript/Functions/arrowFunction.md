# Arrow Function
This kind of functions has two principal use.

## faster and easier to read.
arrow function cleans up our code letting write the same as using anonymous functions.

### using normal functions
```js
const username = 'john';

function capitalizeName(name) {
  return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;  
}
```

### Using arrow function
```js
const username = 'john';
const capitalizeName = name => `${name.charAt(0).toUpperCase()}${name.slice(1)}`
```
* faster to write.
* understandable, must be guarantee by the dev.


## defines ist "this object" where it was defined (written)
These kind of functions apply something call lexical binding in order to establish This object. JavaScript (V8 engine) consider it more important that bind, call and apply (functions to reassign This object) so that methods doesn't work with arrow functions.

```js
var obj = {
    num: 100
}

// Setting "num" on window to show how it gets picked up.
window.num = 2020; // yikes!

// Arrow Function, this = windows, because it's being defined in the global scope
var add = (a, b, c) => this.num + a + b + c; 


console.log(add.call(obj, 1, 2, 3)) // result 2026

const arr = [1, 2, 3]
console.log(add.apply(obj, arr)) // result 2026

const bound = add.bind(obj)
console.log(bound(1, 2, 3)) // result 2026

```

# Warning!
don't use it for object methods.

```js

var obj = { // does not create a new scope
  i: 10,
  b: () => console.log(this.i, this), //since the current scope is "global" that will be the value of this for arrow function
  c: function() {
    console.log(this.i, this);
  }
}

obj.b(); // prints undefined, Window {...} (or the global object)
obj.c(); // prints 10, Object {...}

```

```js
const myObject = {
  sayHi() {
    console.log('hi')  
  },
  thisArrow: () => console.log(this),
  thisFunction(){console.log(this)}
}

myObject.thisArrow() // return window
myObject.thisFunction() // return myObject

```
it was created for callbacks and clean up our code. Remember the use of callbacks create hight order functions.

```js
const nameUpperCase = name => `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
const greetUser = (name, callback) =>{
  callback(nameUpperCase(name)); //greet the way you want using the name in uppercase (only the first letter).
}

greetUser('andrés', name => console.log(`Hola!! ${name} ¿Cómo estás?`));
```

