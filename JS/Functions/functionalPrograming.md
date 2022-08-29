# immutability
function only works with local variables and arguments making copies (avoiding mutations)
But what about the cost of making big copies, well there is a solution tha provide a solution in which we can avoid mutation and doing a copy efficiently

## persistent data structures
you don't copy all the structure, you just copy some reference and other reference still the same

![](https://i.postimg.cc/K8Bf2wjr/Screenshot-from-2022-06-14-11-43-56.png)
[video](https://youtu.be/0if71HOyVjY?t=1360)
> in real life there is no only 3 segregation each time its 32

## in JavaSCript
there is a library which let work with persistent data structure its call **immutable.js**

# Closure atoms

# Closure agents / actors