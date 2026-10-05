//value          → значение
//writable       → можно ли изменить значение
//enumerable     → видно ли в Object.keys()
//configurable   → можно ли удалить/перенастроить//


const product1 = {
    name: "Laptop",
    price: 0
}

Object.defineProperty(product1, "price", {
    value: 50000,
    writable: false
});

console.log(product1.price);

console.log(Object.getOwnPropertyDescriptor(product1, "price"));



const user1 = {
    name: "Dima",
    age: 0
}

Object.defineProperty(user1, "age", {
    value: 18,
    enumerable: true
})

console.log(Object.keys(user1));



const user = {
    name: "Dima",
    age: 0
};

Object.defineProperty(user, "age",{
    value: 18,
    configurable: false
});

console.log(user.age)

console.log (Object.getOwnPropertyDescriptors(user));



const product = {
    name: "Laptop",
    price: 50000,
    secret: 0
};

Object.defineProperty(product, "secret", {
    value: 12345,
    enumerable: false
});

console.log(Object.keys(product));
console.log(Object.getOwnPropertyNames(product));