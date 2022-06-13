# Extends 

it is used to set the inheritance between father class and children classes.

```js
class Product {
  constructor(name, price, discountable) {
    this.name = name;
    this.price = price;
    this.discountable = discountable;  
  }  
  
  isDiscountable() {
    return this.discountable;  
  }
}

class SaleProduct extends Product {
  constructor(name, price, discountable, percentOff){
    super(name, price, discountable);
    this.percentOff = percentOff;
  }
  
  getSalePrice(){
    if(super.isDiscountable()){
      return this.price - (this.price * (this.percentOff / 100));
    }
    else
      return `this product isn't in sale`;
  }
}

const saleProduct1 = new SaleProduct("Coffee Maker", 99, false, 20);
console.log(saleProduct1.getSalePrice())
console.log(saleProduct1.isDiscountable())
```
![](https://i.imgur.com/2cwV2M7.png)

## Things to be aware of
* access to father methods using `super.method()` in the child declaration
* It creates inherited own properties using the father constructor
* The inherited methods are store in the prototype.prototype so it's easy to use 

# Where to use it?
when a want to share behaviors between similar classes.