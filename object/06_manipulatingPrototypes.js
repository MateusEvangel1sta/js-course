// new Object -> Object.prototype
const objA = {
  keyA: "A",
  // __proto__: Object.prototype
};

const objB = {
  keyB: "B",
};

// objB.__proto__: obj A
Object.setPrototypeOf(objB, objA);
console.log(objB.keyA);

const objC = new Object();
objC.keyC = "C";

Object.setPrototypeOf(objC, objB);
console.log(objC.keyA);

//

function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.discount = function (disc) {
  this.price -= this.price * (disc / 100);
};

Product.prototype.priceIncrease = function (perc) {
  this.price += this.price * (perc / 100);
};

const shirt = new Product("Camisa", 34.99);

console.log(shirt);

shirt.discount(40);
console.log(shirt);

const shoes = {
  name: "Sapato",
  price: 15,
};

Object.setPrototypeOf(shoes, Product.prototype);

shoes.priceIncrease(20);
console.log(shoes);

const pants = Object.create(Product.prototype, {
  size: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 42,
  },
});
console.log(pants);
