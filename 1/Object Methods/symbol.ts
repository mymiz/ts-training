//Symbol()
//→ создаёт уникальное значение

//[objSymbol]
//→ использовать Symbol как ключ объекта

//Object.getOwnPropertySymbols()
//→ получить Symbol-ключи объекта


const id1 = Symbol();

const user1 = {
    name: "Dima",
    [id1]: 123
}

console.log(user1[id1])
console.log(Object.getOwnPropertySymbols(user1));



const id = Symbol();
const role = Symbol();

const user = {
    name: "Dima",
    [id]: 123,
    [role]: "admin"
}

console.log(Object.getOwnPropertySymbols(user)); 



console.log(Object.is(10,10));
console.log(Object.is(10, "10"));
console.log(Object.is("Dima", "Dima"));
console.log(Object.is(true, false));
console.log(Object.is(NaN, NaN));
console.log(Object.is(0, -0));