const numbers1: number [] = [10, 20, 30];

numbers1.push(40);

numbers1.pop();

console.log(numbers1.length);



const numbers2: number [] = [3, 6, 9, 12, 15, 18];

const filter = numbers2.filter((number:number) => {
    return number > 8;
});

const result2 = filter.map((number:number) => {
    return number * 2;
});

console.log(result2);



const numbers3: number [] = [4, 7, 10, 13, 16, 19, 22];

const result3 = numbers3.find((number:number) => {
    return number > 10 && number % 2 !== 0;
});

console.log(result3)



const numbers: number [] = [2, 5, 8, 11, 14, 17, 20];

const result = numbers.reduce((sum:number, number:number) => {
    if(number % 2 === 0){
        return sum + number;
    }
        return sum;
}, 0);
console.log(result);