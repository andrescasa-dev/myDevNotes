# Object

# From variables to properties 
we just put the variable instead of an [key: "value] pair,
* key: name variable
* value: content variable
  
``` js
const blue = "#00f";
const green = "#0f1";

const myColors = {
  blue,
  green,
  black: "#000"
}
```

# Methods 
there is a short cut for methods.
> Arrow functions must be avoided for methods.
```js
const myColors = {
  seyHi(){
    console.log('hi')
  }
}
myColors.seyHi // return: "hi"
```

# Dynamic properties

```js

primaryName = 'Light'
primaryColor = '#fff'; // change between dark mode and light mode.

const myColors = {
  blue: '#00f',
  green: '#0f1',
  black: "#000",
  [primaryName]: primaryColor
}

const getColor = key => myColors[key];
const setColor = (key, value) => myColors[key] = value;

const myColors2 = new myColors;
setColor('grey','#666')


console.log(getColor('blue'));
console.log(myColors);
console.log(myColors2);

```