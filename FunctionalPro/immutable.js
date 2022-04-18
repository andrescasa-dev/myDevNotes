// A pure function have to be immutable.

const myList = [
  {
    name: 'apple',
    number: 12
  },
  {
    owner:{
      name: 'andres',
      age: 19
    },
    country: 'Colombia'
  }
]


// mutable function (wrong pure function)
const addToList_wrong = (list, item, quantity) => {
  //change directly the list, if some other function that requires the items of this list,  will be affected.
  list.push({
    item, quantity
  });
  return list;
}

// immutable function
const addToList_correct = (list, item, quantity) =>{
  //create a copy to prevent another function to being affected that use the given list.
  const newList = JSON.parse(JSON.stringify(list));
  newList.push({
    item, //the result would be "varName: varValue,"
    quantity
  });
  return newList
}

const result = addToList_correct(myList, 'Apple', 13);
console.log(result);

//result
// 0: {name: 'apple', number: 12}
// 1: {item: 'Apple', quantity: 13}
// length: 2