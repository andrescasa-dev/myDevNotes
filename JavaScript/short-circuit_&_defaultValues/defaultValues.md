# creating default values in functions.

## with || assignment
is only useful when we want stablish a default using falsy, careful because the 0 is a falsy value.

```js
const convertTemperature = (celsius, decimals) =>{
        decimals ||= 1; 
        return Number((celsius * (9/5) + 32).toFixed(decimals))
    };
console.log(convertTemperature(21, 2));   //print result with 2 decimals.
console.log(convertTemperature(21, 1));   //print result with 1 decimals.
console.log(convertTemperature(21, 0));   //=[ERROR]= 0 is falsy so decimals variable is 1, should remain as 0.
console.log(convertTemperature(21, NaN)); //print default correctly.
console.log(convertTemperature(21));      //print default correctly.

```

## with nullish assignment
Useful when the default value depends on whether the variable is undefined or null
```js
const convertTemperature = (celsius, decimals) =>{
        decimals ??= 1; 
        return Number((celsius * (9/5) + 32).toFixed(decimals))
    };

console.log(convertTemperature(21, 2));   //print result with 2 decimals.
console.log(convertTemperature(21, 1));   //print result with 1 decimals.
console.log(convertTemperature(21, 0));   //print result with 0 decimals.
console.log(convertTemperature(21, NaN)); //ERROR: print result with 0 decimals. (the default of toFixed), should print 1 decimals
console.log(convertTemperature(21, null));//print default correctly.
console.log(convertTemperature(21));      //print default correctly.

```

## with default parameters
Useful when the default value is undefined, it only use that case. 

```js
const convertTemperature = (celsius, decimals = 1) =>{
        return Number((celsius * (9/5) + 32).toFixed(decimals))
    };
console.log(convertTemperature(21, 0));


console.log(convertTemperature(21, 2));   //print result with 2 decimals.
console.log(convertTemperature(21, 1));   //print result with 1 decimals.
console.log(convertTemperature(21, 0));   //print result with 0 decimals.
console.log(convertTemperature(21, NaN)); //ERROR: print result with 0 decimals. (the default of toFixed), should print 1 decimals
console.log(convertTemperature(21, null));//ERROR: print result with 0 decimals. (the default of toFixed), should print 1 decimals
console.log(convertTemperature(21));      //print default correctly.

```