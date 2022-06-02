# What is it?
it's syntactic sugar, all classes are actually special functions that manipulate constructor functions and __Proto__ easily

* all the properties declare in constructor are properties of the instance
* all the declared methods are store in "__Proto__".

# When to use it?
It's the modern way to use constructor and prototype, so that's it, all the time.

# What are the difference between prototype and classes
|Proto| Class|
|-----|------|
|You can add new inherited methods whenever you wnat| you can't|
|You can edit inherited methods easily | you can't|

## Examples
1. you are using vector library, you can add new methods to the vector object.

