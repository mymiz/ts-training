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



function getValue<T>(value:T): T {
    return value;
};


const name = getValue("Dima");
    console.log(name);

const age = getValue(20);
    console.log(age);

const user = getValue({
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