const user = {
    name: "Dima",
    age: 20,
    city: "Tolyatti"
}

const keys = Object.keys(user) 
    console.log(keys);

const values = Object.values(user);
    console.log(values);

const hasentries = Object.entries(user);
    console.log(hasentries);

const hasname = Object.hasOwn(user, "name");
    console.log(hasname);

const hasemail = Object.hasOwn(user, "email");
    console.log(hasemail);



const entries = [
    ["name", "Dima"],
    ["age", 20],
    ["city", "Tolyatti"]
];

const resultentries = Object.fromEntries(entries);
    console.log(resultentries);



const user1 = {
    name: "Dima"
};

const extra = {
    age: 20,
    city: "Tolyatti"
};

const resultassign = Object.assign(user1, extra);
    console.log(resultassign);



const admin1 = Object.create(user1)
    console.log(admin1.name)
        console.log(Object.getPrototypeOf(admin1));



const user2 = {
    name: "Dima"
};

const admin = {
    role: "Admin",
    
}

Object.setPrototypeOf(admin,user2);
    console.log(Object.getPrototypeOf(admin));



const product = {
    name: "Laptop",
    price: 0
};

Object.defineProperty(product, "price", {
    value: 60000,
    writable: false
}
);

console.log(product.price)
console.log(Object.getOwnPropertyDescriptor(product, "price"));

const user3 = {
    name: "Dima",
    age: 20
};

console.log(Object.getOwnPropertyNames(user3));



const id = Symbol();
const role = Symbol();

const user4 = {
    name: "Dima",
    [id]:123,
    [role]: "admin"
};

console.log(Object.getOwnPropertySymbols(user4));



console.log(Object.is(10, 10));
console.log(Object.is(10, 20));
console.log(Object.is(NaN, NaN));
console.log(Object.is(0, -0));



const user5 = {
    name: "Dima",
    age: 20,
    city: "Tolyatti"
};

const result2 = Object.values(user5);
    console.log(result2);

const result3 = result2.includes("Dima");
    console.log(result3);



const user6 = {
    name: "Dima",
    age: 20,
    city: "Tolyatti"
};

const result4 = Object.entries(user6);
    console.log(result4)

const result5 = Object.fromEntries(result4);
    console.log(result5)

console.log(Object.is(user6, result5));




// ================================
// OBJECT METHODS — ПАМЯТКА
// ================================

// Object.keys(obj)
// → возвращает массив ключей объекта

// Object.values(obj)
// → возвращает массив значений объекта

// Object.entries(obj)
// → возвращает массив пар [ключ, значение]


// Object.assign(target, source)
// → копирует свойства из source в target
// → изменяет target


// Object.hasOwn(obj, key)
// → проверяет, есть ли у объекта собственное свойство с таким ключом
// → возвращает true / false


// Object.fromEntries(array)
// → превращает массив пар [ключ, значение] обратно в объект


// Object.create(obj)
// → создаёт новый объект с указанным объектом в качестве прототипа


// Object.getPrototypeOf(obj)
// → возвращает прототип объекта


// Object.setPrototypeOf(obj, prototype)
// → устанавливает/изменяет прототип объекта


// Object.defineProperty(obj, key, descriptor)
// → создаёт или изменяет свойство объекта
// → позволяет настроить value, writable, enumerable, configurable


// Object.getOwnPropertyDescriptor(obj, key)
// → возвращает дескриптор одного собственного свойства


// Object.getOwnPropertyDescriptors(obj)
// → возвращает дескрипторы всех собственных свойств


// Object.getOwnPropertyNames(obj)
// → возвращает массив всех собственных свойств с ключами-строками
// → включая неперечисляемые свойства


// Object.getOwnPropertySymbols(obj)
// → возвращает массив всех собственных Symbol-ключей


// Object.is(value1, value2)
// → сравнивает два значения
// → возвращает true / false
// → отличается от === в некоторых особых случаях


// Object.freeze(obj)
// → полностью замораживает объект
// → нельзя изменять, добавлять или удалять свойства


// Object.seal(obj)
// → запрещает добавлять и удалять свойства
// → существующие свойства можно изменять


// Object.preventExtensions(obj)
// → запрещает добавлять новые свойства
// → существующие свойства можно изменять и удалять


// Object.isFrozen(obj)
// → проверяет, заморожен ли объект
// → true / false


// Object.isSealed(obj)
// → проверяет, запечатан ли объект
// → true / false


// Object.isExtensible(obj)
// → проверяет, можно ли добавлять новые свойства
// → true / false


// Symbol()
// → создаёт уникальное значение Symbol
// → Symbol можно использовать как ключ объекта