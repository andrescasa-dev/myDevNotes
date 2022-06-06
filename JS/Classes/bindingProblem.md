# Binding problem

```js
const isAuth = true;
const user = {
  favorites: []
};

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  handleFavoriteProduct() {
    if (isAuth) {
      setTimeout(this.favoriteProduct, 1000);
    } else {
      console.log("You must be signed in to favorite products!");
    }
  }

  favoriteProduct() {
    user.favorites.push(this.name);
    console.log(`${this.name} favorited!`);
  }
}

const product1 = new Product('Coaster', 89.99)
product1.handleFavoriteProduct() 
```
After 1s returns: `favorited!`
"this.name" in favoriteProduct() method is missing, because it is being called into a higher order function, then there is not this binding (just default binding). ¿How can the This remain bound correctly? **Using explicit binding**

```js
handleFavoriteProduct() {
  if (isAuth) {
    setTimeout(this.favoriteProduct.bind(this), 1000);
  } else {
    console.log("You must be signed in to favorite products!");
  }
}
```
but with this approach we need to use ".bind(this)" each time.

A solution to that, is establish in the constructor that favoriteProduct always it's bound to this.

always function property: in the constructor set that property.

```js
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.favoriteProduct = this.favoriteProduct.bind(this)
  }

  handleFavoriteProduct() {
    if (isAuth) {
      setTimeout(this.favoriteProduct, 1000);
    } else {
      console.log("You must be signed in to favorite products!");
    }
  }
```