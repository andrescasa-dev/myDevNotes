# HashTables
it's a data structure that use a tag (key) to identify each value. It use a function call "hashFunction" in order to transform the key into a index

## hashFunction
### Locating an item.

key => index
1. sum all the ASCII values of the tag's chars.
2. sum % length of the HashTable = index.

> % it's so useful in this case because, remainder will be always between 0 (perfect division) divisor-1 (divisor = length), that is to say, between 0 and length -1, exactly the index in an array.

![](https://i.postimg.cc/Wz5Lr7hW/Screenshot-from-2022-05-16-09-43-35.png)

It just work previously knowing what is going to be the length
### finding an item

1. let index = hasFunction("key").
2. myArray[index].

## collisions
as the remainder could yields a repeat number with difference keys, some times a different keys points to the same index.

![](https://i.postimg.cc/3RV3WTbS/Screenshot-from-2022-05-16-10-16-51.png)