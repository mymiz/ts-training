const numbers1: number [] = [1,2,3,4,5];

const result1 = numbers1.map((number: number) => {
    return number * 2;
});

console.log(result1);



const numbers2: number [] = [5, 10, 15, 20];

const result2 = numbers2.map((number:number) => {
    return number - 3;
})

console.log(result2);



const numbers: number [] = [1, 2, 3, 4, 5];

const result = numbers.map((number:number) => {
    return number * 10;
})

console.log(result);