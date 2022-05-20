# Destructuring
[hacks Mozilla](https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/)
In general it's another way to get array elements as well as object properties.

# Destructuring arrays

## get according the position
```js
let myArray = [{id: "1"},{id: "2"},{id: "3"},{id: "4"},{id: "5"},]
//obtain the first three elements.
let [em1, em2, em3] = myArray;
```

## get the rest

```js
let myArray = [{id: "1"},{id: "2"},{id: "3"},{id: "4"},{id: "5"},]
//obtain the first two elements and the rest
let [em1, em2, ...rest] = myArray;
```

# Destructuring Objects
it could be possible using just variables or key-variable (in this case variable stored the value) syntax.

```js
//i want only the value of a property
let myObject = { foo: "lorem", bar: "ipsum" };
let {foo: myVarFoo, bar: myVarBar};
```
### same variable name same property name
when the name of the variable (storing the value) it's the same that the key, I can use just the key.

```js
//i want only the value of a property
let myObject = { foo: "lorem", bar: "ipsum" };
let {foo, bar};
```

```js
var complicatedObj = {
  arrayProp: [
    "Zapp",
    { second: "Brannigan" }
  ]
};

//I want "Zapp" and "Brannigan"

let {arrayProp: [zaap, {second}]} = complicatedObj
console.log(zaap, second);
```

# Default in destructuring
just "assign" a value for the variable, if the destructuring yields undefined it'll take the assignment
```js
let myArray = [];
let [ myElement = "something went wrong" ] = myArray
```

# In Practice

1. it's used, when a function required a object to get its properties
```js
function removeBreakpoint({ url, line, column }) {
  // ...
}
```
2. add a default values to options of a config object in the definition of a function}
```js
   jQuery.ajax = function (url, {
  async = true,
  beforeSend = noop,
  cache = true,
  complete = noop,
  crossDomain = false,
  global = true,
  // ... more config
  }) {
    // ... do stuff
  };
```
3. for the iteration process of a map
```js
for (var [key] of map) {
  // ...
}
```

```js
for (var [,value] of map) {
  // ...
}

```

# spread object operator
it was added recently in 2020

```js

const user = {
  username: "ReedBarger",
  email: "reed@gmail.com",
  password: "mypassword"  
};

cons newUser = { ...user, verified: false};
```
same as the spread operator of arrays.