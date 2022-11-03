# useState
useState is a hook, in other words, a function that let use state and life cycle methods without creating a class component.

# bridge to a variable state
we can access to some variable in the local state of component just using useState
```js
const [counter, setCounter] = useState(0)
```
- counter has the value of state.counter (actually inside React doesn't know that it has the name of "counter")
- state.counter was initialized with "0"
- setCounter its a function that let us update status.counter with some value

## using setCounter
I understand react state setter like:
```js
const setCounter = (value) => {
  //react stuff
  state.counter = value
  //react stuff
}
```
so we use it like

```js
const newValue = counter + 1
setCounter(newValue);
// or just
setCounter(counter + 1)
```

> keep in mind we can play with the previous state (that is counter) and use setCounter to set a new state.

# Alive `counter` variable
How is possible to keep alive the counter variable with the state.counter ?
it doesn't, it seem like so because when React re-render the component call again the whole function, there isn't like a render method that only is called.

so for each re-render is called 
```js
const [counter, setCounter] = useState(0)
```
and `counter` is updated.
