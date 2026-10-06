const numbers1: number [] = [10, 20, 30];

const copy = [...numbers1];

console.log(copy)



const first: number [] = [1,2,3];
const second: number [] = [4,5,6];

const result1 = [...first, ...second];

console.log(result1);



const numbers: number [] = [1,2,3];

const result = [0 ,...numbers];

console.log(result);