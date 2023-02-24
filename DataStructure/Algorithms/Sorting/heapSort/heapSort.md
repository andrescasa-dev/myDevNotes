# heapSort
Use the properties of heaps for ordering. since the first element in a heap is the largest, we can extract the first element an then "fix" the heap until there is no more elements to analyze.

It is not necessary create a new array, just reduce the size each time a largest element is in place (putting in at the end and then reducing the size).

so, the steps are:
1. build the heap
2. swap the first EM with the last one
3. reduce the heap size
4. fixing the heap using heapify from the "new" first EM.
5. repeat while the size bigger than 0.