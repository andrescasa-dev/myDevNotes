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

# Catch errors

## try catch
when a promises is rejected using the await key word, it will lunch a catchable error. So we need to use Try catch in order to properly manage the error

> just like synchronous code

```js
async function someFunction(){
  try{
    await myPromisesRejected(); //rejected
  }
  catch(e){
    console.error(e); //rejected
  }
}
```

like it handle asynchronous code like synchronous, the same block of try catch can be used for both

```js
async function someFunction(){
  try{
    null.isTrue = true; //TypeError: Cannot set property 'someProperty' of null
    await myPromisesRejected();
  }
  catch(e){
    console.error(e); //TypeError: Cannot set property 'someProperty' of null
  }
}
```

## like a promise
all async functions are actually promises, so we can catch the error like so.

```js
async function someFunction(){
  await myPromisesRejected(); //rejected
}

someFunction()
  .catch(err => console.err(err)) //rejected
```