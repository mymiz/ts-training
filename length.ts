const numbers1: number[] = [3, 7, 11, 15, 19, 23];

console.log(numbers1.length);

const names: string[] = ["Dima", "Alex", "Max", "Masha", "Nikita"];

console.log(names.length);
console.log(names[0]);
console.log(names[names.length - 1]);

const numbers: number[] = [4, 8, 12, 16, 20];

console.log(numbers.length);

for(const number of numbers){
    if(number > 10){
        console.log(number)
    }
}

