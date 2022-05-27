
//all return boolean values
const users = [
  {name: "andres", isLogged: false},
  {name: "camilo", isLogged: false},
  {name: "alex", isLogged: false},
];

const temperatures = [71,73,48,58];

//============ includes ============//
//includes only works for primitive data in an array.
const contain71 = temperatures.includes(71); //true

//============ some ============//
const atLeatOneAndres = users.some(user => user.name === "andres"); //true
//============ every ============//
const areAllAndres = users.every(user => user.name === "andres");//false
