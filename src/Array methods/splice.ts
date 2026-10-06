const numbers1: number [] = [10, 20, 30, 40, 50];

numbers1.splice(2,1);

console.log(numbers1);




const numbers2: number [] = [10, 20, 40, 50];

numbers2.splice(2, 0, 30)

console.log(numbers2)



const numbers: number [] = [10, 20, 30, 40, 50];

numbers.splice(2,1,35);

console.log(numbers)