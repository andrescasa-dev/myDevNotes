# callback
its a function that is executed into a higher order function (in this case async function too), but the problem with this approach is that you have to put the rest sync code into the callback:

```js
//i want to get the location of the user (async function)
navigator.geolocation.getCurrentPosition(position => {
    // code that i want to be executed after getting the current position
    console.log('done') 
    getRestaurants(position, restaurants => { //petition to the API (async)
        console.log('done') 
      // code that i want to be executed after getting restaurants
      displayRestaurants();
      setTimeout(() => 
        // code that i want to be executed after time out
        lunchAds()
      , 5000);
    })
});
```

# Problems

## callback hell
it creates har reding code because of the using of too many nested blocks. 

## inversion of control
yo don't really know if there is a problem in the "higher functions" so its difficult to tracks bugs. Lets say that there is a problem in "getCurrentPOsition" an the rest of the function are never called, and suppose that the code is bigger, ¿How do you exactly know that the work flow stop in theCurrentPosition and not in somewhere else.