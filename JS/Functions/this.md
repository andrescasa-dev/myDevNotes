# types of binding
![](https://i.postimg.cc/J0sdrQGq/Screenshot-from-2022-05-23-15-30-37.png)


# Default binding
it's applied to a non-binding function

```js
doSomething();//this: window
```
this would be **window**, remember that window is de default scope of eny block of code.

```js
window.doSomething(); 
```
```js
globalThis.doSomething();
```

# Implicit binding
thats the common use of **This**

```js
myObject.doSomething(); //this: myObject
```

# Explicit binding
it's when the dev binds the function with a this

```js
myObject.call(thisObject, "argument1", "argument2"); //set this: thisObject and execute the function using the arguments.
myObject.bind(thisObject); //this: myObject, not executed yet
```

# New binding
bind the "new object created" as the "this"

# Lexical binding
the **this** is establish depending on the scope in which it was declared.
