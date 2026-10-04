let a: number = 1;

while(a <= 20){
    if(a % 5 === 0){
        console.log(a)
    }
    a++;
}

let b: number = 20;

while(b >= 1){
    if( b % 2 ===0){
        console.log(b)
    }
    b--;
}

let c: number = 1;

while(c <= 30){
    if(c > 10 && c % 2 !==0 && c % 3 === 0){
        console.log(c);
    }
    c++;
}