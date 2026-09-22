const numbers1: number [] = [5, 10, 15, 20];

const result1 = numbers1.reduce ((sum:number, number:number) => {
    return sum + number;
}, 0 );

console.log(result1);



const numbers2: number [] = [2, 4, 6, 8];

const result2 = numbers2.reduce((sum: number, number: number) => {
    return sum + number;
}, 0 );

console.log(result2);



const numbers3: number [] = [2, 3, 4];

const result3 = numbers3.reduce((sum: number, number: number) => {
    return sum * number;
}, 1);

console.log(result3);



const numbers: number [] = [2, 5, 8, 11, 14, 17];

const result = numbers.reduce((sum: number, number: number) => {
    if(number % 2 === 0){
        return sum + number;
    }

    return sum;
}, 0);

console.log(result);