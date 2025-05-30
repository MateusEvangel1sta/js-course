const product = {
  name: "Camiseta",
  price: 20,
};

// Copying object
const otherProduct = Object.assign({}, product, {
  other: "É possível adicionar outros atributos!",
});

console.log(product, otherProduct);
