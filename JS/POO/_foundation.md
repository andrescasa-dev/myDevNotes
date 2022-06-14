# POO
it's a paradigm, a way to resolve problem. let the developer think and plan based on real things and the relations between objects.

## Encapsulation
modify properties through methods, properties almost always are private, in order to prevent unexpected behavior. **prevent bugs**

## Abstraction
the user (developer user) doesn't know how some object work inside, it doesn't matter. Actually the user should not have access or knowledge in order to prevent modifications and so guarantee the **flexibility**.

## Inheritance
let share code between father and children classes **less code**

## polymorphism

[practical example](https://www.youtube.com/watch?v=bblFTvuk4pY&ab_channel=Absolute)

is just inherit a method an change its behavior in each child. set it in the father guarantee its existence when we don't know what type of class is

let execute a method despite the class of the object:

```js
class AnimalTerreste{
  constructor(){

  }
  move(){

  }
}

class AnimalBipedo{
  constructor(){
    super();
  }
  move(){
    //usando dos patas
  }
}

class AnimalCuadrupedo{
  constructor(){
    super();
  }
  move(){
    //usando cuatro patas <= es distinto
  }
}
```

in some other part of the code we wan to move a AnimalTerreste but we dont know if is a AnimalBipedo or AnimalCuadrupedo.

```js
function move(coords, animal){
  animal.move();
}
```
it doesn't make sence without data types so let use type script:

```TypeScript
function move(coords: number, animal: AnimalTerreste ){
  animal.move();//as the function exist in animal it could be used, then the method will execute depending if is a bipedo or a cuadrupedo.
}
```
it opens the possibility to move either bipedos or cuadrupedos.