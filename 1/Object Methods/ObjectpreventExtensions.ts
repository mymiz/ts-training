const product = {
    name: "Laptop",
    price: 50000
};

Object.preventExtensions(product);

console.log(Object.isExtensible(product));