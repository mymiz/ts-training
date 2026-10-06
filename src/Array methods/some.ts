const numbers1: number [] = [4, 8, 11, 14, 17, 20];

const result1 = numbers1.some((number:number) => {
    return number > 18
})

console.log(result1);



const numbers2: number[] = [3, 7, 12, 15, 18, 21];

const result2 = numbers2.some((number:number) => {
    return number % 2 !== 0;
});

console.log(result2);



const numbers: number [] = [2, 4, 7, 10, 14, 18];

const result = numbers.some((number:number) => {
    return number % 2 === 0 && number > 15;
})

console.log(result)