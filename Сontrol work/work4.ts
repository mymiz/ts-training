const numbers1: number[] = [2, 4, 6, 8, 10, 12, 14];
    for(const number of numbers1){
        if (number > 10){
            break;
        }
        console.log(number)
    }

for(let a = 1; a <= 10; a++){
    if( a % 2 === 0){
        continue;   
    }
    console.log(a)
    
}

const numbers: number[] = [3, 7, 10, 13, 16, 19, 22, 25];
    for(const number of numbers){
        if( number === 19){
            break;
        }
        if( number % 2 === 0){
            continue;
        }
        console.log(number);
    }
