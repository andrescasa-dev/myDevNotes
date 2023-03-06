# Breadth first search
traverse the tree "left to right, top to bottom"

                  1
        2                 3
  4           5      6         7


# Deep first search
traverse the tree "top to bottom, left to right"

                  1
        2                 5
  3           4      6         7



## If you know a solution is not far from the root of the tree:
BFS

## If the tree is very deep and solutions are rare, 
BFS (DFS will take long time. )

## If the tree is very wide:
DFS (BFS will need too much memory)

## If solutions are frequent but located deep in the tree
DFS

## determining whether a path exists between two nodes
DFS

## Finding the shortest path
BFS