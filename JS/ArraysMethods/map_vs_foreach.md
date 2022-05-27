# map
its a method created for "modified" (making a copy) some array. So use it when you want to modify the original array. 

> Be careful, use a copy of the element list in the callback for prevent mutability.
```js
const temperatures = [
  { degrees: 69, isRecordTemp: false, isHigh: true },
  { degrees: 82, isRecordTemp: true },
  { degrees: 73, isRecordTemp: false },
  { degrees: 64, isRecordTemp: false }
];

const newTemps = temperatures.map(temperature => {
  //=====prevent  mutability=====///
   let copyTemperature = {...temperature}; //=====prevent  mutability=====///
   //=====prevent  mutability=====///
   copyTemperature.isRecordTemp = true;
   copyTemperature.isHigh = true;
   return copyTemperature;
});
console.log(newTemps);
console.log(temperatures)
```
## when not use it
when you are not using the returned array. in that case use forEach.

# forEach
its only use when you want to loop through the entire array. 
> You can't stop foreach, if you want so use another tool.