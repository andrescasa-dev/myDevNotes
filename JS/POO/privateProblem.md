# Private problem
it happens when some property is mutated to a invalid value. So ¿what is the way which guarantees that a property is going to be mutated correctly? using set functions.

```js
class Product {
  constructor(name, price, discountable) {
    this.name = name;
    this.price = price;
    this.discountable = discountable;
  }

  getClearancePrice() {
    return this.price * 0.5;
  }
}

const product1 = new Product("Coffee Maker", 99.95, false);
//for some reason the price it's being set to a void object.
product1.price = {};

//leter proce property it's being used.
product1.getClearancePrice(); //Price is null, so here there is a bug.
```

# In JS
JS doesn't have private properties, so we need to use a **bridge property**.

```js
class Product {
  constructor(name, price, discountable) {
    this.name = name;
    this._price = price;
    this.discountable = discountable;
  }

  get price() {
    return this._price * 0.5;
  }
  set price(price) {
      if(typeof price === "number")
        return this._price = price
      else
        return this._price;
  }
}

const product1 = new Product("Coffee Maker", 99.95, false);
product1.price = {}; //it's not goin to be anything
console.log(product1.price);  //same price
```

## bridge property
we don't want to touch this property so for communicate that we must use the "_varName" prefix.
  * a property can't has the same name as the property itself

## get and set
In JS they are reserve words, the goal is try to work with them like a property

Despite some characteristics, they work like normal functions:

  * the argument of set must be passed using " = ", like a declaration
  * get can be used like a property.

# what does private solves?

## prevent potentially anywhere
it something wrong happens using a public variable, the bug could be anywhere. When it happens with a private property, the bug could only be in the same class.

## prevent errors
by using set we can catch errors an sanitize inputs just before modifying a variable.

## limit dependencies
using private methods we can just don't worry about that they are not going to be used outside (dependencies) and if we modify it, that change don't will broke something outside.

## conclusion: prevent complexity and bugs.
"So, as to when you should make things private: I'd say make everything private by default, and then expose only those parts that absolutely have to be public. The more you can make private, less bugs and dependencies you will have to worry about.."

# JS is unsafe
all the variables are public, so anyone can modify them whenever they want.




