function getLast<T>(value: T[]): T | undefined {
    return value.at(-1);
};


const numbers = [10, 20, 30];

console.log(getLast(numbers));


const names = ["Dima", "Alex", "Max"];

console.log(getLast<string>(names));



function createPair<T,U>(first: T, second: U){
    return [first, second];
};


const result = createPair("Dima", 20);

console.log(result);



function getValue1<T>(value:T): T {
    return value;
};


const name = getValue1("Dima");
    console.log(name);

const age = getValue1(20);
    console.log(age);

const user = getValue1({
    name:"Dima",
    age:20
})
    console.log(user);



function getLength<T extends {length: number}> (value: T) {
    return value.length;
};

const name1 = getLength("Dima");
    console.log(name1);

const numbers1 = getLength([10, 20, 30]);
    console.log(numbers1);



function getProperty<T, K extends keyof T> (obj: T, key: K) {
    return obj[key];
};

const product = {
    name: "Laptop",
    price: 50000,
    inStock: true
};

const resultname = getProperty(product,"name");
    console.log(resultname);

const resultprice = getProperty(product, "price");
    console.log(resultprice);

const resultinStock = getProperty(product, "inStock");
    console.log(resultinStock);



const user1 = {
    name: "Dima",
    age: 20,
    city: "Tolyatti",
    isOnline: true
};

function getResult<T, K extends keyof T> (obj:T, key: K) {
    return obj[key];
};

const nameresult = getResult(user1, "name");
    console.log(nameresult);

const ageresult = getResult(user1, "age");
    console.log(ageresult);

const cityresult = getResult(user1, "city");
    console.log(cityresult);

const isonlineresult = getResult(user1, "isOnline");
    console.log(isonlineresult);



const car = {
    brand: "BMW",
    year: 2020,
    isElectric: false
};

type Car = typeof car;

const MyCar: Car = car;

console.log(MyCar)



const product1 = {
    name: "Laptop",
    price: 50000,
    inStock: true
};

type Productkey = keyof typeof product1;

const key: Productkey = "price";
    console.log(key)



type Product1 = {
    name: string;
    price: number;
    inStock: boolean;
};

type Productname = Product1["name"];
type Productprice = Product1["price"];
type ProductStock = Product1["inStock"];

const name2: Productname = "LapTop";
    console.log(name2);
const price2: Productprice = 50000;
    console.log(price2);
const inStock: ProductStock = true;
    console.log(inStock);



type User = {
    name: string;
    age: number;
    isOnline: boolean;
};

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
};

const user2 = {
    name: "Dima",
    age: 20,
    isOnline: true
};

const resultuser2 = getValue(user2, "name");
    console.log(resultuser2);

const resultage2 = getValue(user2, "age");
    console.log(resultage2);

const resultisonline = getValue (user2, "isOnline")
    console.log(resultisonline);



type Product = {
    name: string,
    price: number,
    inStock: boolean
};

const name3: Partial<Product> = {
    name: "Dima"
};
    console.log(name3);


    const price3: Partial<Product> = {
    price: 50000
};
    console.log(price3);


const namestock: Partial<Product> = {
    name: "Dima",
    inStock: true
};
    console.log(namestock);



type Settings = {
    id?: number,
    uid?: number
};

const compleatesettings: Required<Settings> = {
    id:1,
    uid:131
};
    console.log(compleatesettings);



type Product2 = {
    name: string;
    price: number;
    description: string;
    inStock: boolean;
};

type Productinfo = Pick<Product2, "name" | "price">;

const productinfo: Productinfo = {
    name: "BMW",
    price: 120000
};
    console.log(productinfo);



type Product3 = {
    name: string;
    price: number;
    description: string;
    inStock: boolean;
};

type ProductWithoutDescription = Omit<Product3, "description">;

const publicproduct: ProductWithoutDescription = {
    name: "Laptop",
    price: 12000,
    inStock: true
};
    console.log(publicproduct)