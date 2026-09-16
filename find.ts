const numbers1: number1 [] = [3, 7, 12, 15, 20, 25];

const result1 = numbers1.find((number:number) => {
    return number > 10;
})

console.log(result1);



const numbers: number[] = [4, 8, 11, 14, 17, 20];

const result = numbers.find((number:number) => {
    return number % 2 !== 0;
})

console.log(result);