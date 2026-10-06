const numbers1: number [] = [4, 7, 11, 14, 17, 20];

const result1 = numbers1.findIndex((number:number) => {
    return number > 10;
});

console.log(result1);



const numbers: number [] = [3, 8, 11, 14, 17, 20];

const result = numbers.findIndex((number: number) => {
    return number % 2 !== 0;
});

console.log(result);