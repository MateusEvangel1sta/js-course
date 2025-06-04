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

// The Object.getOwnPropertyDescriptor() static method returns an object
// describing the configuration of a specific property on a given object
console.log(Object.getOwnPropertyDescriptor(otherProduct, "name"));

Object.defineProperty(otherProduct, "name", {
  writable: false,
  configurable: false,
});

console.log(Object.getOwnPropertyDescriptor(otherProduct, "name"));
otherProduct.name = "Outra coisa";
console.log(Object.getOwnPropertyDescriptor(otherProduct, "name"));

// recovering only the values
console.log(Object.values(otherProduct));

// recovering key and value
console.log(Object.entries(otherProduct));
