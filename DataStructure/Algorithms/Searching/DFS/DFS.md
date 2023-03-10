# Deep First Search (DFS)
traverse the tree "top to bottom, left to right"

                  1
        2                 5
  3           4      6         7

in this case there are 3 ways to traverse a tree using DFS. The key is thinking about **subtrees** and **root** like the two possible places to go.

# In-order traversal
follows the next steps:
1. traverse the left subtree (using in-order DFS)
2. visit the root
3. traverse the right subtree (using in-order DFS)
  
# Pre-order traversal
follows the next steps:
1. visit the root
2. traverse the left subtree (using in-order DFS)
3. traverse the right subtree (using in-order DFS)

# Post-order traversal
follows the next steps:
1. traverse the left subtree (using in-order DFS)
2. traverse the right subtree (using in-order DFS)
3. visit the root
