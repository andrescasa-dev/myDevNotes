let originalCar = {
  km: 1000,
  model: 2010,
  owner: {
    name: "Andrés",
    age: 19
  }
}

//======================================================================================================================================================================//
//First way to copy
// Only for copy ar the first lvl

let copyCar = Object.assign({}, originalCar);

copyCar.model = 1999;
copyCar.owner.name = "Robin";
console.log(originalCar);
console.log(copyCar);

//return:

{
  km: 1000
  model: 2010
  owner: {name: 'Robin', age: 19}
}
    
{
  km: 1000
  model: 1999
  owner: {name: 'Robin', age: 19}
}


//Note that there wasn't change, because the assign() method create a new space in memory for the copy of the element.
// -The age its the same, so it wasn't copy


//======================================================================================================================================================================//
//second way
//for completely copy (including sub-objects).
let objectString = JSON.stringify(originalCar); // '{"km":1000,"model":2010,"owner":{"name":"Andrés","age":19}}'
let copyCar = JSON.parse(objectString)

copyCar.model = 1999;
copyCar.owner.name = "Robin";
console.log(originalCar);
console.log(copyCar);

//return:

{
  km: 1000,
  model: 2010,
  owner: {name: 'Andrés', age: 19}
}

{
  km: 1000,
  model: 1999,
  owner: {name: 'Robin', age: 19}
}

//In this case including the sub-object was copied.
