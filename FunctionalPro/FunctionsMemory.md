
# Objects in the memory
Remember that function in JS are objects too. So, the object is stored in the memory stack with its respective pointer.

## Pointers
The pointer is a address to some object in the memory heap

In the image bellow the pointers are the gray arrows.

<p align = "center">
  <img width = "1600" height="" src ="https://i.postimg.cc/NFVVP4ZJ/heap-stack.png">
</p>

<p align = "center">
  <img width = "600" height="" src ="https://i.postimg.cc/5jWc2gpH/Screenshot-from-2022-04-11-10-39-56.png">
</p>

## Copy problem
``` js
car1 = car2;
```
> supposing that i've created the objects car1, car2 before
<p align = "center">
  <img width = "1600" height="" src ="https://i.postimg.cc/T1KGwQmG/Screenshot-from-2022-04-11-10-47-25.png">
</p>

thats no a copy of the object, i've only created another variable with the same pointer.

