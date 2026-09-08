let name1: string = "Dima";
let age1: number = 30;
let isStudent: boolean = true;
let city: string = "Moscow";

function introduce(name: string, age: number, isStudent: boolean, city: string): string{
    return "Привет меня зовут " + name + ", мне " + age + " лет, я живу в " + city;
}

console.log(introduce(name1, age1, isStudent, city));

function sum(a: number, b: number): number{
    return a + b;
}

console.log(sum(123341, 1232123));

function subtruct(a: number, b: number): number{
    return a - b;
}

console.log(subtruct(121212, 12123));

function multiply(a: number, b: number): number {
    return a * b;
}

const result = multiply(5,10);
console.log(result);

const name:string = "Dima";
const age:number = 18;

function showinfo(name:string, age:number): string{
    return "Меня зовут " + name + ", мне " + age + " лет " 
}

console.log(showinfo(name, age));

function dividde(a: number, b: number): number{
    return a / b;
}

console.log(dividde(1131231, 123123));

function square(a: number): number{
    return a * a;
}

console.log(square(12));

function isAdult(age:number): boolean{
    return age >= 18;
}

console.log(isAdult(20));

function isEven(num:number): boolean{
    return num % 2 === 0;
}

console.log(isEven(1231));

function isPositive(num:number): boolean{
    return num >0
}

console.log(isPositive(1312));
console.log(isPositive(-1231));

function isNegative(num:number): boolean{
    return num < 0;
}

console.log(isNegative(123123));
console.log(isNegative(-1231));

function isGreater(a:number, b:number): boolean{
    return a>b;
}

console.log(isGreater(1231, 12));

function checkNumber(num:number): string{
    if(num > 0) {
        return "положительное";
    } else if(num === 0) {
        return "Ноль"
    }
    else{
        return "Отрицательное"
    }
}

console.log(checkNumber(10));
console.log(checkNumber(-10));
console.log(checkNumber(0));

function checkAge(age:number): string{
    if(age < 13){
        return "Ребенок";
    } else if(age < 18) {
        return "Подросток";
    }
    else {
        return "Взрослый"
    }
}

console.log(checkAge(15));

function checkPassword(password:string): string{
    if(password === "12345"){
        return "Пароль верный";
    }
    else{
        return "Пароль неверный"
    }
}
    console.log(checkPassword("12345"));
    console.log(checkPassword("hello"));


function isBetween(num:number): boolean{
    return (num >= 10 && num <= 20);
}

console.log(isBetween(12));

function canEnter(age:number, hasTicket:boolean): boolean{
    return(age >= 18 && hasTicket);
}

console.log(canEnter(13212, true)); 
console.log(canEnter(41, false));

function isWeekend(day:string): boolean{
    return(day === "Saturday" || day === "Sunday");
}

console.log(isWeekend("Sunday"));
console.log(isWeekend("Monday"));
console.log(isWeekend("Saturday"));

function isNotStudent(isStudent: boolean): boolean{
    return(!isStudent);
}

console.log(isNotStudent(true));

function canWatch(age:number, hasPermission: boolean): boolean{
    return(age >= 18 || age >= 16 && hasPermission)
}

console.log(canWatch(16, true));
console.log(canWatch(18, false));

    function checkAge1(age:number): string{
        return age >= 18 ? "Взрослый" : "Несовершеннолетний";
    }

    console.log(checkAge1(19));
    console.log(checkAge1(12));