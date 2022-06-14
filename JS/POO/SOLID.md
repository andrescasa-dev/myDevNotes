# SOLID principles

# Single responsibility
One responsibility per class

# Open closed
Open to grow, close to modify.

# Liskov substitution
every child could be used like using its father.
Toda clase hija se debe poder usar como si se estuviera usando la clase padre.
example: 

we have a class "RealDuck" for real duck that can fly, cuack and swim. now we want to implement "rubber duck" it can cuack, swim, but not fly.

in this scenario we can't use inheritance because its not an actual inheritance, if we do so, we need to return an error in the fly method (or let it empty, which smell bad). It's better use interface.
# Interface segregation

![](https://i.postimg.cc/655Nfc3Q/Screenshot-from-2022-06-13-18-59-50.png)
its better create a specialization class when its needed, instead of keeping all in one class.

# Dependency inversion