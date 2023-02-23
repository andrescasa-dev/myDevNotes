# Binary Heap
[source: brilliant](https://brilliant.org/wiki/binary-heap/)
# features
- is a complete binary tree
  - All the elements has 2 nodes and the _**bottom-most**_ elements are positioned as left as possible
  - thus, always the tree will have a height of log(n)
- Max-heap property: the parents are equal or higher than its children.


# Numbering each node (finding the indices)
The heap is traversed from the left to the right in each level.

![](https://ds055uzetaobb.cloudfront.net/brioche/uploads/d8U8DAAqtX-heap1.png?width=1200)

for finding the number of each node the next formula should be follow:
the parent node is "n", its left child is "2n" and its right child is "2n + 1".

so the first element always is n = 1. if the formula is apply recursively until the bottom, then all the nodes will be enumerated.

# Inserting

## Using float up O(n*log(n))
for each element in the array is going to check if it is bigger than its parent, if so, swap (float up), if not then remain in its place.

![](https://d18l82el6cdm1i.cloudfront.net/uploads/9qjD7KZepR-isualgo-binary-heap-priority-queue20160424224526.gif)

> the parent always is floor(child-index/2)

lets say we have [5,3,1,7], the process would be:

1. 5: have no parent next
2. 3: it's not bigger than its parent (5) next
3. 1: it's not bigger than its parent (5) next
4. 7: its bigger than its parent (3), do swap, result: [5,7,1,3]
   1. 7: its bigger than its parent (5), do swap, result: [7,5,1,3]
5. no more elements

so we have a heap in O(n*log(n)) time complexity. (we try to traverse the tree in each element)

# building

## Using Max heapify O(n)

1. start with the most-bottom element.
2. check if there is a child bigger and swap, if there are two then swap with the biggest one. If not do nothing
3. continue the same process until the bottom
4. do this until the top is reached.

# extracting max
1. swap the most-bottom with the max
2. return the max
3. position the new max using heapif

![](https://d18l82el6cdm1i.cloudfront.net/uploads/58RYm8REJr-isualgo-binary-heap-priority-queue20160424225207.gif)

