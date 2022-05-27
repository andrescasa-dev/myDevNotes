# Types of memory

## Call stack and memory heap
![](https://i.postimg.cc/5yQrmn0J/Screenshot-from-2022-05-20-11-53-04.png)

|Call stack| Memory heap
|-|-|
|storage primitive values| storage objects|
|reference to objects| 
|reference to functions (in JS are objects too)


# How memory is released in call stack
when a function is end using let or const (block scope declarations) the call stack is deleted.

> for that reason most of the time it's use let or const than use var. as well as create functions in order to make local (gc) variables.

# How memory is released in memory heap
use the **Garbage collector event** that use mark and sweep algorithm.

> before was used a counting reference algorithm. But it doesn't work for circular reference.
![](https://i.postimg.cc/zXwvNRTz/Screenshot-from-2022-05-20-12-11-00.png)

## mark and sweep
mark all the objects that can be reached from the root element (global this) and delete the rest of the objects

![](https://i.postimg.cc/prjND7Df/Screenshot-from-2022-05-20-12-14-23.png)

## warning
prevent working in the global scope, avoid memory leaks. That's because all the reference attached to the global this won't be deleted.