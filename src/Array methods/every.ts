const numbers1: number [] = [4, 8, 12, 16, 20];

const result1 = numbers1.every((number:number) => {
    return number % 2 === 0;
})

console.log(result1);



const numbers2: number [] = [5, 10, 15, 20, 25];

const result2 = numbers2.every((number:number) => {
    return number > 3;
})

console.log(result2);



const numbers: number [] = [3, 6, 9, 12, 15, 18]; 

const result = numbers.every((number:number) => {
    return number % 3 === 0 && number > 2;
})

console.log(result);