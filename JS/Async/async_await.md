# async functions are promises
if we declare that certain async function return some value it could be used exactly like a promise


```js
async function getUser(){
  //some code
  return 'my value';
}

getuser().then( value => console.log(value)) // print: my value.
```

# use await to resolve Promises
You only are only be able to use await in async functions.

## example

```js
async function getPost() { // define a async function
   const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');  // await return the value of the .then( value => more code)
   const data = await response.json(); // resolve the promise and store the value again.
   console.log(data);
}

getPost();
```