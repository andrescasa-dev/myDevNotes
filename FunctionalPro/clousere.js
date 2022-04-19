//closure way
function buildSum(initial){
  return numberToAdd => numberToAdd + initial; 
}

//composed way
buildSum = (initial) => numberToAdd => numberToAdd + initial;

//old way
function buildSum(initial, toAdd){
  return initial + toAdd
}

// let addFive = buildSum(3)(4);
addFive = buildSum(3,4);
console.log(addFive); //3 + 4 = 7


//======================================================Exercise======================================================//
//todas las posibles sumas de dos numeros, donde uno de ellos sea el 3
//3 + 1 
//3 + 2 ...

//========1========//
function buildSum(initial){
  return numberToAdd => numberToAdd + initial; 
}
let results = [];
let sum3 = buildSum(3); // sum3 = (toaAdd) => toaAdd + 3:

for (let i = 0; i < 10; i++) {
  results[i] = sum3(i+1);
}
console.log(results)

//========2========//
buildSum = (initial) => numberToAdd => numberToAdd + initial;

let results = [];
for (let i = 0; i < 10; i++) {
  results[i] = buildSum(3)(i+1);

//========3========//
function buildSum(initial, toAdd){
  return initial + toAdd
}
let results = [];
for (let i = 0; i < 10; i++) {
  results[i] = buildSum(3, (i+1));
}

/////////////////////
function buildingFakeClosure(){
	return function(){
		console.log('Am I a closure?')
	}
}

let buildingFakeClosure = () => () => console.log('Am I a closure?');
