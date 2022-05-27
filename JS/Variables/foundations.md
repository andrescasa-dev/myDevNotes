# Difference between var and let
Const was not included because is too similar to let, it just has one difference, the value of a const can't change.

## Repeat declaration 
| var | let |
| --- | --- |
| yes | nop |


```js
var myVar = "Value"
let myValue = "Value" 
var myVar = "Another Value"
let myValue = "Another Value" //let can't be redeclared
```

## window's append
| var | let |
| --- | --- |
| yes | nop |

> Be careful its not window
its not like var is tied into the global scope, its just live in the global object.

```js
var myVar = "isAppended"
windows.myVar // return "isAppended"
let mylet2 = "itsNot" //
windows.myLet // return "undefined"

```

## hosting

| var | let |
| --- | --- |
| apply | not apply |

```js
console.log(`var:${showVar}`);
console.log(`let:${showLet}`);
let showLet = "let show me";
var showVar = "var show me"; //V8 raise to start the variable, it declared it with undefined at beginning.
//====output=====
// undefined
// Uncaught ReferenceError: showLet is not defined
```

## block scope
its an spacial scope for if, switch and cycles.
```js
function myFunction(){
  if(condition){//block scope
    var myVar = "myVar"
    let myLet = "myLet"
  }
  console.log(myVar); // print normally
  console.log(myLet); // only lives in block scope
}

```
