# Stack over flow
this error happens when there is no more space available in the call stack (in JS case the call stack of V8 engine)

# Recursive case
is the portion of the function that again call itself

# Base Case / Terminal case
is the portion fo the function where it stop call itself, it's the end.

# Build a good recursive function
1. identify the base case
2. identify the recursive case
3. if is need use return in both cases to preserve the base case return 

# When to user recursion
some problems to maintaining state  
## Pros
- some cases easy to accomplish DRY
- some cases easy to read

## Odds
- can need a lot of memory (because of expensive usage of call stack)

## recursion smells
probably it's good idea to implement recursion when:
- traversal trees
- divide and conquer problems

# tail call optimization
its a optimization for the languages that allow us to use recursion without expensive call stack usage, [reed more](https://2ality.com/2015/06/tail-call-optimization.html)