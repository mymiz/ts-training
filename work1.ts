function multiplay(a: number, b:number): number {
    return(a*b);
}

console.log(multiplay(6,7));

function checkNumber(a:number): string {
    if(a > 0){
        return "Положительное";
    }
    else if(a === 0){
        return "Ноль";
    }
    else {
        return "Отрицательное";
    }
}

console.log(checkNumber(1));
console.log(checkNumber(0));
console.log(checkNumber(-1));

function getAgeStatus(age:number): string {
    if(age < 13){
        return "Ребёнок";
    }
    else if(age >= 13 && age <= 17){
        return "Подросток";
    }
    else {
        return "Взрослый";
    }
}

console.log(getAgeStatus(11));
console.log(getAgeStatus(16));
console.log(getAgeStatus(19));

function canBuyGame (age:number, hasMoney: boolean): boolean{
    return(age >= 18 && hasMoney);
}

console.log(canBuyGame(19, true));
console.log(canBuyGame(18,false));
console.log(canBuyGame(13,true));

function isWeekend(day:string): boolean{
    return(day === "Saturday" || day === "Sunday");
}

console.log(isWeekend("Saturday"));
console.log(isWeekend("Sunday"));
console.log(isWeekend("Monday"));

function checkPassword(password:string): string{
    return password === "12345" ? "Доступ разрешен" : "Доступ запрещен"
}

console.log(checkPassword("12345"));
console.log(checkPassword("123134"));

const age: number = 20;
const hasTicket: boolean = true;

function canEnter(age:number, hasTicket:boolean):string{
    if(age >= 18 && hasTicket) {
        return "Вход разрешен"
    }
    else if(age <= 18 && hasTicket){
        return "Нет билета"
    }
    else{
        return "Вход запрещен"
    }
}

console.log(canEnter(18,false));
console.log(canEnter(18,true));
console.log(canEnter(16,true));

for(let i=2; i <= 10; i = i+2) {
        console.log(i);
}

for(let n=10; n >= 2; n = n-2){
        console.log(n);
}

for(let h = 1; h <=10; h++){
    if(h >= 5){
        console.log(h);
    }
}


for(let w = 1; w <= 20; w++){
    if(w % 2===0){
        console.log(w);
    }
}

for(let a = 1; a <= 20; a++){
    if(a % 2 !== 0 && a > 10){
        console.log(a);
    }
}

for(let q = 20; q >= 1; q--){
    if(q % 3 === 0){
        console.log(q);
    }
}

for(let e = 1; e <= 30; e++){
    if(e % 2 === 0 && e > 10 && e < 25){
        console.log(e)
    }
}

for(let a1= 1; a1 <= 15; a1++){
    if(a1 % 3 === 0){
        console.log(a1);
    }
}

for(let a2 = 20; a2 >= 5; a2--){
    if(a2 % 2 !== 0){
        console.log(a2)
    }
}

for(let a3 = 1; a3 <= 30; a3++){
    if(a3>10 && a3 % 3 === 0 && a3<25){
        console.log(a3);
    }
}