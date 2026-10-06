const name: string = "Max";

console.log(Array.from(name));



const numbers1: number [] = [10, 20, 30];

console.log(Array.from(numbers1));



const text: string = "Hello";

const array1 = Array.from(text);

console.log(array1);



const numbers2: number [] = [2, 4, 6, 8];

const array = Array.from(numbers2, (number: number) => {
    return number * 2;
});

console.log(array);



const result1 = Array.from({ length: 6});

console.log(result1);



const result2 = Array.from({length: 5}, (_value, index) => {
    return index;
});

console.log(result2); 



const result = Array.from({length: 5}, (_value, index) => {
    return index+1;
});

console.log(result)