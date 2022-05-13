# Closures
A function that remember its lexical scope.
![](https://i.postimg.cc/c1Tt43cc/Screenshot-from-2022-05-12-11-13-34.png)

> See it as a small program in our program.

# why use closures

## Less global variables
because it allows to don't abuse of public variables, a public variable should be created only for the purpose of using it in anywhere. So when we need a higher-scope variable in certain functionalities we can use closures.

## less code than in POO
in POO in order to execute an action we need to create a method (and a property if the method use it). Also, create get and setter to access and modify the property.

well, in functional programming we can do that with less code:

```js
//see how it works like a modifier method and get method
function handleLikes(){
  let likes = 0;
  return () => ++likes;
}

const like = handleLikes();
like(); //1
like(); //2
let result = like(); //3
console.log(result + " likes"); // 3 likes
```

### in Java with POO
its more tedious.
```Java
class HandleLikes{
  int likes;
  public void CandleLikes(){
    likes = 0;
  }

  public void increaseLike(){
    likes ++;
  }

  public int getLikes(){
    return likes;
  };

  public void setLikes(int number){
    likes = number
  }
}
```

```Java
  HandleLikes handleLikes = new HandleLikes();  
  handleLikes.increaseLike(); //1
  handleLikes.increaseLike(); //2
  handleLikes.increaseLike(); //3
  int likes = handleLikes.getLikes();
  System.out.print(likes) //3
```

# closures in functional programming

```js
let e = 10;
const sum2 = (a) => (b) => (c) => (d) => a + b + c + d + e;

const add1_2_3_n = sum2(1)(2)(3);
console.log(add1_2_3_n(4));//20
console.log(add1_2_3_n(3));//19
console.log(add1_2_3_n(1));//17
```
note that as I passed 3 arguments, its like say resolve 3 closures, and left one `(d) => a + b + c + d + e;` this closure remember its local closure variables: c. As well as the outer function variables: b and a. D is an argument, a local scope variable.

> A function it's a machine that with the enough arguments return a value or execute an action.

in this case V8 says *"like you didn't pass me all the 4 arguments needed, i give you the deepest function(closure) so you can complete it."*

With that functionality we can do actions with difference parameter, ej: 
we need to build a hose, so we execute de blueprint.
1. in the first scenario we build the next houses:
* bricks, cement and blue paint.
* bricks, cement and red paint.
* bricks, cement and yellow paint.

```js
const buildHouse = houseBuilder('bricks')('cement');
let firstHouse = buildHouse('blue paint');
let secondHouse = buildHouse('red paint');
let ThirdHouse = buildHouse('yellow paint');
```
therefore, less cpu resources is needed for complete the same task.

```js

const houseBuilder = (areaBase, areaWall, areaRoof) => (emBase) => (emWall) => (emRoof) =>{
  constructBase(emBase);
  constructWall(emWall);
  constructRoof(emRoof);
}

const andresBluePrint = houseBuilder(500,600,400);

const houseOne = andresBluePrint('wood')('cement')('wood');
const houseSecond = andresBluePrint('cement')('cement')('wood');

const andresBluePrintLeftRoof = andresBluePrint('wood')('cement') //fixing wood and cement.
const houseThird = andresBluePrintLeftRoof('plastic');
const houseFourth = andresBluePrintLeftRoof('glass');
```
on this way, I can have multiple blueprints that follows the same steps, and multiple houses with a particular blueprint with different materials, and also a can fixed some materials.
