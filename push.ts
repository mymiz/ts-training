const numbers1: number[] = [5, 10, 15];

numbers1.push(20)

console.log(numbers1);



const names: string [] = ["Dima", "Alex"];

names.push("Max");

console.log(names.length);



const numbers: number [] = [2, 4, 6];

numbers.push(8,10);

console.log(numbers.length);

for(const number of numbers){
    if(number > 5){
        console.log(number)
    }
}