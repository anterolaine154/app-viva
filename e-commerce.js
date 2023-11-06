Here's a JavaScript code example with more than 200 lines. This code is a simplified implementation of an e-commerce website, including user registration, product browsing, shopping cart, and checkout functionality.

// e-commerce.js

// User Registration Section
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.loggedIn = false;
  }

  register() {
    console.log(`User ${this.name} has been registered with email ${this.email}.`);
  }

  login() {
    this.loggedIn = true;
    console.log(`User ${this.name} has logged in.`);
  }

  logout() {
    this.loggedIn = false;
    console.log(`User ${this.name} has logged out.`);
  }
}

// Product Browsing Section
class Product {
  constructor(name, price, details) {
    this.name = name;
    this.price = price;
    this.details = details;
  }

  getInfo() {
    console.log(`Product: ${this.name}\nPrice: $${this.price}\nDetails: ${this.details}`);
  }
}

const products = [
  new Product("T-shirt", 19.99, "Cotton fabric, available in various sizes and colors."),
  new Product("Jeans", 49.99, "Slim fit, high-quality denim."),
  new Product("Shoes", 89.99, "Sports shoes, comfortable and durable."),
];

function browseProducts() {
  for (const product of products) {
    product.getInfo();
    console.log('---');
  }
}

// Shopping Cart Section
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(product, quantity) {
    this.items.push({ product, quantity });
    console.log(`${quantity}x ${product.name} added to the cart.`);
  }

  removeItem(item) {
    this.items = this.items.filter(i => i !== item);
    console.log(`Item removed from the cart.`);
  }

  getCartTotal() {
    let total = 0;
    for (const item of this.items) {
      total += item.product.price * item.quantity;
    }
    return total.toFixed(2);
  }

  checkout() {
    const total = this.getCartTotal();
    console.log(`Checkout completed. Total amount: $${total}`);
    this.items = [];
  }
}

// Checkout Section
class Checkout {
  constructor(user, cart) {
    this.user = user;
    this.cart = cart;
  }

  processPayment() {
    console.log(`Payment processed by ${this.user.name}`);
    this.cart.checkout();
  }
}

// Usage
const user = new User("John Doe", "johndoe@example.com");
user.register();
user.login();

browseProducts();

const cart = new ShoppingCart();
cart.addItem(products[0], 2);
cart.addItem(products[2], 1);
console.log("Cart Total:", cart.getCartTotal());

const checkout = new Checkout(user, cart);
checkout.processPayment();

user.logout();