const numbers: number[] = [3, 10, 15, 22, 27, 30];
    for(const number of numbers){
        if(number % 5 === 0){
            console.log(number);
        }
    }

const numbers1: number[] = [4, 9, 12, 17, 20, 25, 28];
    for(const number of numbers1){
        if(number > 10 && number % 2 !== 0){
            console.log(number);
        }
    }

const numbers2: number[] = [2, 6, 11, 15, 18, 21, 24, 29];
    for(const number of numbers2){
        if(number % 2 === 0 || number > 20){
            console.log(number)
        }
    }