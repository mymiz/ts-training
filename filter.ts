const numbers1: number [] = [3, 8, 12, 15, 20, 23];

const result1 = numbers1.filter((number:number) =>{
    return number > 10
})

console.log(result1);



const numbers2: number [] = [4, 7, 10, 13, 16, 19, 22, 25];

const result2 = numbers2.filter((number:number) => {
    return number % 2 === 0
})

console.log(result2);



const numbers3: number [] = [3, 8, 11, 14, 17, 20, 23, 26];

const result3 = numbers3.filter((number:number) => {
    return number > 10 && number % 2 !== 0;
})

console.log(result3);



const numbers4: number [] = [3, 8, 12, 15, 18, 21, 24, 27];

const result4 = numbers4.filter((number:number) => {
    return number % 3 === 0 || number % 5 === 0;
})

console.log(result4);



const numbers: number [] = [2, 5, 8, 11, 14, 17, 20];

const filter = numbers.filter((number:number) => {
    return number > 10;
})

const map = filter.map((number:number) => {
    return number * 2;
})

console.log(map)