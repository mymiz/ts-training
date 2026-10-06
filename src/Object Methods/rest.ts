function numbers1(...numbers: number[]) {
    console.log(numbers)
}

numbers1(10, 20, 30, 40);



function show(first1:number, ...rest1: number[]) {
    console.log(first1);
    console.log(rest1);
}

show(10, 20, 30, 40)



const numbers: number [] = [5, 10, 15, 20, 25];

const [first, second, ...rest1] = numbers;

console.log(first);
console.log(second);
console.log(rest1);



const product1 = {
    name1: "Laptop",
    price1: 50000,
    category1: "Electronics",
    brand1: "Lenovo"
}

const {name1, ...rest} = product1;

console.log(name1);
console.log(rest);



const user1 = {
    name: "Dima",
    age: 18
};

const updatedUser1 = {
    ...user1,
    city: "Tolyatti"
}

console.log(updatedUser1);



const product = {
    name: "Laptop",
    price: 50000,
    category: "Electronics"
}

const updateproduct = {
    ...product,
    price: 60000
}

console.log(updateproduct);



const user = {
    name: "Dima",
    address: {
        city: "Tolyatti"
    }
}

const copy = {
    ...user,
    address: {
        ...user.address
    }
}

console.log(copy);