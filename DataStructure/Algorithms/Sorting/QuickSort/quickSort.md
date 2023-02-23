1. use the first unordered element (pivot element)
2. traverse all the list searching for smaller or equals ones
   1. at this point there are two sides: left(smaller ones), right(bigger, ones)
3. place the selected one at the end of the left side (it is the biggest one), and execute the first step until the left side is organized
4. at this point there is ordered side (left) and unordered (right)

by organizing all the left side found, the list will be totally ordered
# Quick sort
its a divide and conquer solution

# divide 
divide according to a pivot, to the left: ready to order side; to the right: unordered side.
**until**: there is just one element, or the list is order.

# conquer
combine the left side, the pivot and the right side

> My implementation is the variation that always pick the first element as the pivot