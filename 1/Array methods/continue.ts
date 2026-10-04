//for(let a = 1; a <= 10; a++){
    //if(a === 5){
     //   continue
    //}
    //console.log(a);
//}

let a: number = 1;

while(a <= 10) {
    if (a % 2 === 0) {
        a++;
        continue;
    }
    console.log(a);
    a++;
}