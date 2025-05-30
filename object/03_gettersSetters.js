function Product(name, price, stock) {
  this.name = name;
  this.price = price;

  Object.defineProperty(this, "stock", {
    enumerable: false, // Show the key?
    // value: stock, // value
    // writable: true, // Can you change?
    configurable: false, // Can you configure?
    get: function () {
      return stock;
    },
    set: function (value) {
      if (typeof value !== "number") {
        console.log("Bad Value");
        return;
      }

      stock = value;
    },
  });
}

const p1 = new Product("Camiseta", 20, 3);
p1.stock = 15;
console.log(p1.stock);
