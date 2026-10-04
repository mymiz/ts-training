const product1 = {
    name2: "Laptop",
    price1: 50000,
    category1: "Electronics"
}

const {name2, price1} = product1;

console.log(name2);
console.log(price1);



const user2 = {
    name2: "Dima",
    age: 18
}

const {name2: username} = user2;

console.log(username);



type Product = {
    name1: string,
    price: number,
    category?: string
}

const product: Product = {
    name1: "Laptop",
    price: 50000,
};

const {name1, price, category = "Electronics"} = product;

console.log(name1);
console.log(price);
console.log(category);



const user3 = {
    name4: "Dima",
    age: 18,
    city4: "Tolyatti"
};

const {name4, age = 20, city4} = user3;

console.log(name4);
console.log(age);
console.log(city4);



const user = {
    name: "Dima",
    age: 18,
    address: {
        city: "Tolyatti",
        country: "Russia"
    }
};

const {name, address: {city}} = user;

console.log(name);
console.log(city)

const numbers1: number []= [10, 20, 30];

const [first1, second1] = numbers1;

console.log(first1);
console.log(second1);



const numbers2: number[] = [10, 20, 30];

const [, , third1] = numbers2;

console.log(third1)



const numbers: number [] = [10, 20];

const [first, second, third = 30]  = numbers;

console.log(first);
console.log(second);
console.log(third);