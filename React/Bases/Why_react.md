# Why React

## it's composable
we can create components using functions.
Components let us divide the HTML and build up a more organize app.

## it's declarative
*what to do* don't worry about how to do it. Its faster and the low-level implementation (imperative code) can be improve over the time. 

> it's simpler => i can build apps faster.

```js
const state = {
  counter: 0
}
const myCounter = state.counter;
console.log(myCounter) //will be 0
//set counter
const state.counter = 1;
 console.log(myCounter) //will be 0
```
```js
const [counter, setCounter] = useState(0)
console.log(counter) // will be 90
setCounter(1)
console.log(counter) // will be 1
```
