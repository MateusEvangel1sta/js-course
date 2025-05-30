function Product(name, price, stock) {
  Object.defineProperties(this, {
    name: {
      enumerable: true,
      value: name,
      writable: false,
      configurable: false,
    },

    price: {
      enumerable: true,
      value: price,
      writable: true,
      configurable: false,
    },
  });

  Object.defineProperty(this, "stock", {
    enumerable: false, // Show the key?
    value: stock, // value
    writable: true, // Can you change?
    configurable: false, // Can you configure?
  });
}

const p1 = new Product("Camiseta", 20, 3);
p1.stock = 500;
console.log(p1);

console.log(Object.keys(p1));
