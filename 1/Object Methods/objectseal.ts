const product = {
    name: "Laptop",
    price: 50000
}

Object.seal(product);

product.price = 60000;

console.log(product);