const product = {
  name: "Camiseta",
  price: 20,
};

// Copying object
const otherProduct = Object.assign({}, product, {
  other: "É possível adicionar outros atributos!",
});

console.log(product, otherProduct);

// Freezing object
Object.freeze(otherProduct);

otherProduct.name = "Outro nome";
console.log(otherProduct);

// Recovering only the keys of the object
console.log(Object.keys(otherProduct));
