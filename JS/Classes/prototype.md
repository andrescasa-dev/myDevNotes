# What is it?

it's a property in which all the "share" information is save. So if we want to share methods between all our object instance we must use the prototype property.

![](https://i.postimg.cc/vZNjnDXS/Screenshot-from-2022-06-02-10-08-31.png)

an example in console:
![](https://i.postimg.cc/rmK5rFng/Screenshot-from-2022-06-02-10-11-48.png)

> JS search into the properties of the instance then, search into the properties of the prototype. We can access easily to prototype properties `myInstance.protoProperti`


# Prototype chain

my object has a prototype, this has a prototype of objet (because all this is the parent of all objects) so

```js
MyObject.__proto__.__proyo__ = Objec.__proto
```
this allow us tu access to "father methods". Its the way inheritance exist.
# When to use it?
when a want to share properties and methods between all my instances.

> be careful, modify shared properties affects all the instances