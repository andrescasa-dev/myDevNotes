# Stacks
LIFO data structure, last in first out.

![gif](https://miro.medium.com/max/1280/1*lb-0r80YYhcnoVcQ3HY-1g.gif)

# Context
"stack of work"

![papers](https://image.shutterstock.com/image-vector/small-stack-paper-on-white-260nw-1644846829.jpg)

# Why do they exist?
only for limiting the actions of a linked list. For reability purposes its better in some cases have the small possibility of action in a data structure. If we are implementing a linked list that do LIFO, well its dangerous having insert(index,value), pop() (but at the tail) and other methods.

In a LIFO structure we only need, push() and pop() both from the head (or topNode)