const breakfastMenuIdeas = ["Buckwheat Pancakes"];
const dinnerMenuIdeas = ["Glazed Salmon", "Meatloaf", "American Cheeseburger"];

const allMenuIdeas = [
    ...breakfastMenuIdeas, 
    "Harvest Salad", 
    "Southern Fried Chicken",
    ...dinnerMenuIdeas
];

const saladIndex = allMenuIdeas.findIndex(idea => idea === 'Harvest Salad');
const meatloafIndex = allMenuIdeas.findIndex(idea => idea === 'Meatloaf');

//without "meatloaf"
const model1 = [
  ...allMenuIdeas.slice(0, meatloafIndex), //[prev meatloaf]
  ...allMenuIdeas.slice(meatloafIndex + 1) //[next meatloaf]
]

// change "harvest salad for garden salad"
const model2 = [
  ...allMenuIdeas.slice(0, saladIndex),
  "Garden Salad",
  ...allMenuIdeas.slice(saladIndex + 1)
];

console.log(model1);
console.log(model2);
