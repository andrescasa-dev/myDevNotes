# BFS (Breadth first search)
traverse the tree "left to right, top to bottom"

                  1
        2                 3
  4           5      6         7


we use a queue in order to preserve the "direction" of this algorithm, the step are

1. setup the queue and the result array (if is needed)
   1. the first element in the queue is going to be the root element
2. looping to the queue and asking if it has children
   1. if so then add them to the queue
   2. stop looping until there is no more element in the queue