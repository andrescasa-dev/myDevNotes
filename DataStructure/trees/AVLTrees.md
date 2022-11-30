# AVL Trees
The additional rule is: 

`gitall the subtrees has to have |h1-h2| <=1` 

where h1 is the height of the left side, and h2 is the height of the right side

# height
the longest path to the a leaf

`height node = max(childLeft, childRight) + 1`

But what happened wht there isn't child right/left ? well, the null children has a height of -1, in order that the above equation works.