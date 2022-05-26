# reduce
it loop through the whole array.

```js
const menuItems = [
  { item: "Blue Cheese Salad", price: 8 },
  { item: "Spicy Chicken Rigatoni", price: 18 },
  { item: "Ponzu Glazed Salmon", price: 23 },
  { item: "Philly Cheese Steak", price: 13 },
  { item: "Baked Italian Chicken Sub", price: 12 },
  { item: "Pan Seared Ribeye", price: 31 }
];

let result = menuItems.reduce((accumulator, menuItem) => {
  return accumulator + menuItem.price;  
}, 0);
```
## if we pass initial value (the second argument)
in the first iteration the value of accumulator is initialValue and menuItem is array[0]
## if we don't pass initial value (the second argument)
in the first iteration the value of accumulator is array[0] and menuItem is array[1]

* the accumulator value is always the previous return

# It's power
The accumulator could eny data type that we want.

```js
const numbers = [1, 2, 3, 4, 5, 6];

const greaterNumbers = numbers.reduce((acc, num) => num > 3 ? acc.concat(num) : acc, []);
console.log(greaterNumbers);
//[4, 5, 6]

```
> notice that that its the same of filter.

Most of the array methods in JS could be made using reduce.

> knowing reduce it's knowing how to manipulate arrays.