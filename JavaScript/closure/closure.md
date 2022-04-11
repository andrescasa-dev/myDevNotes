<style>
  img{
    width: 400px;
    height: 400px;
  }
</style>

## Closure
its a function which saves the lexical scope.
<p align="center">
  <img 
    src="https://i.postimg.cc/7ZZdVnw0/closure.png"
  >
</p>

```js
function init() {
  var name = 'Mozilla'; //=> 
  function displayName() { // displayName() is the inner function, a closure
    alert(name); // use variable declared in the parent function
  }
  displayName();
}
init();
``` 
