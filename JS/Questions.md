# why the Object.assign method can support unlimited arguments?
```js
Object.assign(onjTarget, objSource, objSource, objSource, objSource);
```
That's because exist an object "arguments" that has all the arguments passed through the function.

```js
function func1(a, b, c) {
  console.log(arguments[0]);
  // expected output: 1
}
```
it could be transform into an array, so it could be manipulated easily.

```js
function func1(a, b, c) {
  return Array.from(arguments);
}
func1(1,2,3)//[1,2,3]
```
> Read: [functions mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)

