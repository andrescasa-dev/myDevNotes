# maps
its an object (POO) that has an array of pairs [key, value], it used when we want to rapidly find some value using an object or eny primitive value.

> i want the value of "s" => i get the value instantly.

inside it use hash function. "s" => content hash => index => array[index];

this kind of object resolve the problem of using key value pairs in a more structure way than objects (JSON).

## differences
| maps | objects |
| ---- | ----- |
|keys of eny data type| keys are always strings|
|access to the size (length of pairs)| there is no access to size|
|we can use objects as keys| only strings|
|add pairs dynamically| add pairs using array like notation|
|iterable| not iterable|

# weak maps
* it just can be used one by one methods.
  * get
  * set
  * delete
  * has

let me set nullish the reference to the keys. for that reason the keys must be objects.

```js
const key1 = { name: 'andrés'};
const key2 = { name: 'camilo'};
const myWeakMap = WeakMap();

myWeakMap.set(key1, 'key for andres');
myWeakMap.set(key2, 'key for camilo');

//let the Garbage collector delete the object: key1
const key1 = null; 
//so, there in no more [key1, value] pair.

```


