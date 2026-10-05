const prototype1 = {
    name: "Dima",
};

const user1 = Object.create(prototype1);

console.log(user1.name);



const prototype = {
    name: "Dima"
};

const users = Object.create(prototype)

console.log(Object.getPrototypeOf(users) === prototype);


const first = {
    name: "Dima"
};

const second = {
    name: "Alex"
};

const user = Object.create(first);

Object.setPrototypeOf(user, second);

console.log(user.name);