function checkvalue(value: string | number){
    if(typeof value === "string") {
        console.log(value.toUpperCase()) 
    }
    else {
        console.log(value * 2)
    }
}

checkvalue("typescript")
checkvalue(10);



class Product {
    name:string;
    price: number;

    constructor(name:string, price: number){
        this.name = name;
        this.price = price;
    }
}

const product = new Product("Laptop", 50000);
    console.log(product);
const product1 = new Product("Phone", 20000);
    console.log(product1);



function checkData(value: string| Date){
    if(value instanceof Date){
        console.log(value.getFullYear())
    }
    else{
        console.log(value.toUpperCase())
    }
};

checkData("typescript");
checkData(new Date("2025-06-15"));



type User1 = {
    name: string;
    age: number;
};

type Product1 = {
    name: string;
    price: number;
};

function checkObject(value: User1 | Product1){
    if("age" in value){
        console.log(value.name, value.age)
    }
    else{
        console.log(value.name, value.price)
    }
}

checkObject({ name: "Dima", age: 20 });
checkObject({ name: "Laptop", price: 50000 });

//typeof	Проверяет тип значения, например string или number
//instanceof	Проверяет принадлежность объекта к классу
//in	Проверяет наличие свойства у объекта



type Product2 = {
    name: string;
    price: number;
};

function isProduct(value: unknown ): value is Product2 {
    return(typeof value === "object" &&
        value !== null &&
        "name" in value &&
        "price" in value 
)
    }

const data: unknown = {
    name: "Laptop",
    price: 50000
};

if(isProduct(data)) {
    console.log(data.name);
    console.log(data.price)
}



type User = {
    name: string;
    age: number;
};

function isUser(value: unknown): value is User {
    return(typeof value === "object" &&
        value !== null &&
        "name" in value &&
        "age" in value &&
        typeof value.name === "string" &&
        typeof value.age === "number"
    )
};

const data1: unknown = {
    name: "Dima",
    age: 20
};

if(isUser(data1)){
    console.log(data1.name);
    console.log(data1.age)
}



type PaymentStatus = "pending" | "paid";

function getPaymentMessage(role:PaymentStatus): string{
    switch(role) {
        case "pending":
            return "ожидает оплаты";
    
        case "paid": 
            return "оплачено"

        default: {
    const impossible: never = role;
    return impossible;
}
    }
}



function PrintValue(value: string | number):void{
    if(typeof value === "number"){
        console.log(value * 2)
    }
    else {
        console.log(value.toUpperCase())
    }
};

PrintValue(12);
PrintValue("Привет");



type Dog = {
    name: string, 
    bark: boolean
};

type Cat = {
    name: string,
    meow: boolean
};

function makeSound(animal: Dog|Cat): void {
    if("bark" in animal){
        console.log("Собака лает")
    }
    else{
        console.log("Кошка мяукает")
    }
};

const dog: Dog = {
    name: "Markiz",
    bark: true
};

const cat: Cat = {
    name: "Pusha",
    meow: true
};

makeSound(dog)
makeSound(cat)