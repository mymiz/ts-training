type User = {
    name: string;
    age: number;
    city: string;
    isOnline: boolean;
};

const user1:User = {
    name: "Dima",
    age: 30,
    city: "Moscow",
    isOnline: true
}

const user2:User = {
    name:"Alex",
    age: 25, 
    city: "Moscow",
    isOnline: false
}

type Product = {
    name: string;
    price: number;
    description?: string;
    inStock: boolean;
}

const product1: Product = {
    name: "Dima",
    price: 123,
    description: "This is a product",
    inStock: true
}

const product2: Product = {
    name: "Masha",
    price: 122,
    inStock:false
}

type Product1 = {
    name: string;
    price:number;
    id: string | number;
}

const product3: Product1 = {
    name: "Dima",
    price: 123,
    id: 123
}

const product4: Product1 = {
    name: "Katya",
    price: 222,
    id: "2112"
}

type User1 = {
    name: string;
    id: string | number;
    age: number;
}

const user3: User1 = {
    name: "Dima",
    id: 1212,
    age: 21
}

const user4: User1 ={
    name: "Alex",
    id: "1211",
    age: 12
}

const user5: User1 = {
    name: "Nikita",
    id: 22,
    age: 55
}

function multiply(a: number, b: number): number {
    return a * b;
}

const result = multiply(5,10);
console.log(result);

