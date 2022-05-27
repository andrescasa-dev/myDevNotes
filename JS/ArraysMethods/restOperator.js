const finalMenuItems = [
  "American Cheeseburger",
  "Southern Fried Chicken",
  "Glazed Salmon"
];

const [winner, ...losers] = finalMenuItems; //set variable, ...theRest (in an array with that name)

console.log({ winner, losers });