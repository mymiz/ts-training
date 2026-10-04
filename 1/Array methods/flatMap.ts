const numbers: number [] = [1, 2, 3, 4];

const result = numbers.flatMap((number: number) => {
    return [number, number * 10];
});

console.log(result);

