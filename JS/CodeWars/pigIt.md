# beautiful solution
```js
function pigIt(str) {
  return str.replace(/\w+/g, (w) => {
    return w.slice(1) + w[0] + 'ay';
  });
}
```
# word character
use "\w" special regex character, which search for all the "word characters"

> same as [a-zA-Z0-9_]

# my try with this solution

```js
function pigIt(str) {
  return str.replace(/\w+/g, word => `${word.slice(1)}${word[0]}ay`);
}

console.log(pigIt("vairas palabras"));
```

# mySolution

```js
function pigIt(str){
  return str.split(' ').map(word =>{
    let isValidWord = /^[a-zA-Z]+$/.exec(word)
    return isValidWord ? `${word.slice(1)}${word.charAt(0)}ay` : word;
  }).join(' ')
}
```

```js
function pigIt(str){
  return str.split(' ').map(word =>{
    let isValidWord = /^[a-zA-Z]+$/.exec(word)
    return isValidWord ? `${word.slice(1)}${word.charAt(0)}ay` : word;
  }).join(' ')
}
```

