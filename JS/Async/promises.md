# Promises

divided the wait state and the manipulation state

when we creating a promise we are declaring what is the proses of wait, Ej: wait 10minutes until the sandwich is done

instead, when we are using then method are declaring the way of precessing the result.

# asynchronous action and handlers

- wait process callback: constructor argument callback (asynchronous action)
- manipulation callback: resolve, reject (handler)

> this are not the callbacks real names. I created them for learning purposes

```js
const waitCallback = (resolve, reject) => {
  setTimeout(() => resolve("sandwich"), 1000);
};

const manipulationCallback = (food) => {
  console.log(food);
};

waitCallback(manipulationCallback(myFood));
```

so the waitCallback implements the manipulationCallback

```js
(manipulationCallback, reject) => {
  setTimeout(() => manipulationCallback("sandwich"), 1000);
};
```

so the Promise end up like this:

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("sandwich"), 1000);
});

promise
  .then((myFood) => {
    console.log(myFood);
  })
  .catch(() => {});
```

# finally method
Execute when the promise is bout resolve or rejected.
# catch method

```js
//creating the promise
reject(Error('some Error'));

//using the promise
.catch(error => console.error(error))
```

# transform previous callback to promise

```js
const promise = new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(resolve, reject); //getCurrentPosition function,
});

promise
  .then((position) => console.log(position))
  .catch((error) => console.error(error))
  .finally(() => console.log("done"));
```

# how it works internally:
![](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/promises.png)

async process are life process, in any time its stage can be change to "resolver", so internally JS always is watching the state of promise.

If the stage change always the "then" is executed first. 

