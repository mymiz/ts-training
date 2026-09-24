const numbers1: number [] = [15, 3, 20, 8, 1, 10]; 

numbers1.sort((a: number, b: number) => {
    return a - b;
});

console.log(numbers1);



    const numbers: number [] = [5, 3, 20, 8, 1, 10];

    numbers.sort((a: number, b: number) => {
        return b - a;
    })

    console.log(numbers);