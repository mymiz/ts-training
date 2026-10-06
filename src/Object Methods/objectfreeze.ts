const user = {
    name: "Dima",
    age: 18
}

Object.freeze(user);

user.age = 20

console.log(user);

console.log(Object.isFrozen(user));
console.log(Object.isSealed(user));