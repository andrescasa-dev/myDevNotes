# Find one
Use **find**, need a callback which in there is the statement needed to search (it must be return true)
* returns the first match
> if it doesn't find eny return undefined
```js
const restaurants = [
  { name: 'Cap City Diner', milesAway: 2.2 },
  { name: 'Chop Shop', milesAway: 4.1 },
  { name: 'Northstar Cafe', milesAway: 0.9 },
  { name: 'City Tavern', milesAway: 0.5 },
  { name: 'Shake Shack', milesAway: 5.3 }
]

const result = restaurants.find(restaurant => 
  restaurant.name.toLowerCase().includes('north') && restaurant.milesAway < 2
)
console.log(result);
//{name: "Northstar Cafe", milesAway: 0.9}

```
## Find one or more
Use **filter**, need a callback which in there is the statement needed to search (it must be return true)
* returns the all matches.
> if it doesn't find eny return "[]"
```js
const restaurants = [
  { name: 'Cap City Diner', milesAway: 2.2 },
  { name: 'Chop Shop', milesAway: 4.1 },
  { name: 'Northstar Cafe', milesAway: 0.9 },
  { name: 'City Tavern', milesAway: 0.5 },
  { name: 'Shake Shack', milesAway: 5.3 }
]

const results = restaurants.filter(restaurant => 
  restaurant.name.startsWith('C') && restaurant.milesAway > 2
)
console.log(results);
//[{name: "Cap City Diner", milesAway: 2.2}, {name: "Chop Shop", milesAway: 4.1}]
```