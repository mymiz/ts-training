const numbers1: number [] = [3, 7, 12, 15, 20, 25];

const result1 = numbers1.find((number:number) => {
    return number > 10;
})

console.log(result1);



const numbers2: number[] = [4, 8, 11, 14, 17, 20];

const result2 = numbers2.find((number:number) => {
    return number % 2 !== 0;
})

console.log(result2);



const numbers: number [] = [2, 5, 8, 13, 16, 21, 24];

const result = numbers.find((number:number) => {
    return number > 10 && number % 3 === 0
})

console.log(result)