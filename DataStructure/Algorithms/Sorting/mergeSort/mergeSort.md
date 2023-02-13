# Merge Sort

# how it works
its a divide-and-conquer solution.

## divide
split the array into two pieces until the base case is reached: only one element in the array

## conquer
merge each array and return a sorted one, each sorted left array is going to be merged with the right one, until the list is totally sorted

### merge algorithm
- **input**: two sorted arrays
- **output**: one sorted array, the combination of the inputs
  
The first elements of each array are compared and the smallest one is saved, it is also removed from its array. This until an entire array (either one) has been traversed, then the elements that are left over are added to the end of the resulting array.
