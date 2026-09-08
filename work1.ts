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