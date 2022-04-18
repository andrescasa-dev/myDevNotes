//The problem of shared state.
//it becomes apparently pure function in impure  function, because are actually mutable functions (modified the original property), for that reason in long term that kind of function are not predictable.


//==================================Bad==================================
const myObject = {
  value: 2
}

const addOne = () => myObject.value += 1 ;
const twoTimes = () => myObject.value *= 2;

// I know the value is 2, in order to obtain 3 I add one.
addOne();//3
// I know the value is 2, so in order to obtain 4 i multiply by 2.
twoTimes();//6, i don't excepted it, and it actually add one, there is a side effect
console.log(myObject.value);
//returns: 6

// I know the value is 2, so in order to obtain 4 i multiply by 2.
twoTimes();//4
// I know the value is 2, in order to obtain 3 I add one.
addOne();//5, i don't excepted it, and it actually add one, there is a side effect
console.log(myObject.value);
//returns: 5

//the problem is that its not a real control about the original value, someone can modify it and get a side effect in the code.
//¿How i can prevent side effects in this case? Using copies.

//==================================Good==================================

const myObject2 = {
  value: 2
}

const addOne_good = (originalObj) => Object.assign({}, {value: originalObj.value + 1});
const twoTimes_good = (originalObj) => Object.assign({}, {value: originalObj.value * 2});

// I know the value is 2, so in order to obtain 4 i multiply by 2.
addOne_good(myObject2);//4
// I know the value is 2, in order to obtain 3 I add one.
twoTimes_good(myObject2);//3
console.log(myObject2.value);
//returns: 2, the original value.

// I know the value is 2, i want 6
let = result = twoTimes_good(addOne_good(myObject2));
console.log(result.value);// 6
