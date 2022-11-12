# Hash tables
also known as "literal objects" (JS), dictionaries(Py), maps (Java), Ruby(hashes).

# differences with arrays
|Array|hashTable|
|-----|--------|
|only declare the value| declare the key and the value|

# how does it works?
under the hood, the hash table use a hash function to convert the key into a direction (or hash) for the value allocation.

`key,value => hashFunction(key) => data[direction] = [key, value]`

like the hash function doesn't retrieve a direction considering the previous just the key characteristics (in some cases the length of the data as well) there is no kind of sort. the data is disperse.

> hash maps are like "my order disorder" y know where to find the things but them aren't actually in order.


# what is bucket? 

A bucket is the chunk of data that a table save, it is composed like this: [key, value, next(optional)]

# next
When exist a collision (two keys with the same direction (hash)) in some cases, the elements that collide are store in same  bucket (in the same direction), when it is needed, it can be obtained using the key normally and then searching in the bucket.

![](https://i.postimg.cc/ZnrxnS6w/Screenshot-from-2022-11-11-15-01-21.png)

# What does a hash function? 
transform the kays into indexes or directions

# what is a collision
when two or more keys has the same hash (same direction)

# methods and complexity ---(complete please)---
- insertion O(1)
- search O(1)
- push O(1)
- delete O(1)
- get keys method O(n) (or worst)

## the problem with get keys
the data is not order so if we want to traverse it we have to all the space delegated.

# solutions to collisions?
one easy solution is implemented a linked list of the buckets

[key,value, next(--)]----> [key,value, next(--)] ----> [key,value, next(--)]

# literals vs Maps vs Sets ---(complete please)---

### Literals objects
  -  aren't optimized for continues mutation. just work for store state
  -  un-order
  -  key and value
  -  only strings for keys
  -  any data type for values

### Maps
  - optimized for continues mutation (changes)
  - are ordered
  - key and value
  - any data type for keys
  - any data type for values

### Set
use for having a some kind of tracking where a can as, is that in my key? and don't worry about the value.
  - only keys
  - any data type for keys