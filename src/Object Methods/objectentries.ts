const product = {
    name: "Laptop",
    price: 50000,
    category: "Electronics"
}

for(const result of Object.entries(product)){
    console.log(result);
}