const numbers1: number [] = [5, 10, 15, 20];

const result1 = numbers1.forEach((number:number) => {
    console.log(number);
});



const numbers2: number[] = [2, 4, 6, 8];

numbers2.forEach((number:number) => {
    console.log(number * 3);
})



const numbers3: number [] = [3, 7, 10, 14, 18]; 
    numbers3.forEach((number:number) => {
        if(number % 2 === 0){
            console.log(number)
        }
    })



const numbers: number [] = [5, 10, 15, 20, 25];

    numbers.forEach((number:number) => {
        if(number > 10 && number % 5 === 0){
            console.log(number);
        }
    });