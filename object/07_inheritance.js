function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.priceIncrease = function (value) {
  this.price += value;
};

Product.prototype.discount = function (value) {
  this.price -= value;
};

function TShirt(name, price, color) {
  Product.call(this, name, price);
  this.color = color;
}

TShirt.prototype = Object.create(Product.prototype);
TShirt.prototype.constructor = TShirt;

TShirt.prototype.priceIncrease = function (perc) {
  this.price += this.price * (perc / 100);
};

const tshirt = new TShirt("Regata", 7.5, "Preta");
tshirt.priceIncrease(10);

console.log(tshirt);

function Mug(name, price, material, stock) {
  Product.call(name, price);
  this.material = material;

  Object.defineProperty(this, "stock", {
    enumerable: true,
    configurable: false,
    get: function () {
      return stock;
    },
    set: function (value) {
      if (typeof value !== "number") return;
      stock = value;
    },
  });
}

Mug.prototype = Object.create(Product.prototype);
Mug.prototype.constructor = Mug;

const mug = new Mug("Caneca", 19, "porcelana", 10);

console.log(mug);
console.log(tshirt);
