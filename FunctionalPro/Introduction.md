# Imperative vs Declarative
follow its presented the same solution in different paradigms 
## Imperative
Tells to the computer **how to do it**
<p align = "center">
  <img width = "600" height="" src ="https://i.postimg.cc/zfQpSBW5/Imperatve.png">
</p>

## Declarative
Tells to the computer **what to do** and delegates the "how to do it" to another program.
<p align = "center">
  <img width = "600" height="" src ="https://i.postimg.cc/qvj1qQvN/Declarative.png">
</p>

## What is a pure function?
it's a function that always return the same value for the same parameter

* Same parameter => always same answer.
* Predictable
* The parameter never change its value.


``` js
function double (x){
  return x * 2
} // 2 => always 4
```

## What is a impure function?
it's a function that give different returns for the same parameter

* same parameter => different answer each time.
* nonpredictable

``` js
function getTime (){
  return new Date().toLocaleTimeString();
} // return the current time. The return it's always deference 
```


``` js
function random (){
  return Math.random();
} // return the current time. The return it's always deference 
```