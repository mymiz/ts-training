class BankAccount {
    readonly id: number;
    public owner: string;
    private _balance: number;
    static count: number = 0;

    constructor(id:number, owner:string, _balance:number){
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
        BankAccount.count++;
    }


    get balance(): number{
        return this._balance
    }

    set balance(value:number){
        if(value >= 0){
            this._balance = value
        }
    }

    static getCount():number{
        return BankAccount.count;
    }
};


const account1 = new BankAccount(1, "Dima", 10000);
const account2 = new BankAccount(2, "Alex", 5000);

console.log(account1.balance);

account1.balance = 15000;
console.log(account1.balance);

account1.balance = -1000;
console.log(account1.balance);

console.log(BankAccount.getCount());



interface Worker {
    work():string
}

abstract class Employee {
    public name: string;
    protected salary: number;

    constructor(name:string, salary:number){
        this.name = name;
        this.salary = salary
    }

    abstract getInfo():string
};

class Developer extends Employee implements Worker {
    public language: string;
    
    constructor(name:string, salary:number, language:string){
    super(name,salary)
    this.language = language
}

    getInfo():string{
        return `Name: ${this.name}, Salary: ${this.salary},Language:${this.language}`
    }

    work():string{
        if(this.language === "TypeScript"){
            return "Разрабатывает на TypeScript"
        }
        else{
            return `Разрабатывает на ${this.language}`
        }
    }
};

const developer = new Developer("Dima", 150000, "TypeScript");

console.log(developer.getInfo());
console.log(developer.work());



class Engine{
    private horsepower: number;

    constructor(horsepower:number){
        this.horsepower = horsepower;
    };

    getHorsePower():number{
        return this.horsepower
    };

    start():string{
        return "Engine launched"
    }
};

class Car{
    public brand: string;
    private engine: Engine;

    constructor(brand:string, engine:Engine){
        this.brand = brand;
        this.engine = engine;
    }

    startCar():string{
        return this.engine.start();
    }

    getInfo():string{
        return `Brand: ${this.brand}, Horsepower: ${this.engine.getHorsePower()}`
    }
};


const engine = new Engine(250);
const car = new Car("BMW", engine);

console.log(car.startCar());
console.log(car.getInfo());



class Formatter {
    format(value:number):string;
    format(value:boolean):string;

    format(value: number|boolean):string{
        if(typeof value === "number"){
            return `Число: ${value}`
        }
        else if(value === true){
        return "Да"}
    
        else{
            return "Нет"
        }
    }
}
const formatter = new Formatter();

console.log(formatter.format(100));
console.log(formatter.format(true));
console.log(formatter.format(false));



abstract class Payment{
    protected _amount: number;
    static count: number = 0;

    constructor(_amount:number){
        this._amount = _amount;
        Payment.count++;
    };
    get amount():number{
        return this._amount
    }
    set amount(value:number){
        if(value > 0){
            this._amount = value;
        }
    }

    abstract process():string
    
    static getCount(): number{
        return Payment.count
    }
};


class CardPayment extends Payment{
    cardNumber:string;

    constructor(_amount:number, cardNumber:string){
    super(_amount)
    this.cardNumber = cardNumber
    }

    process():string{
        return `Сумма платежа ${this._amount}`
    }
    getDetails(value: number): string;
    getDetails(value: string): string; 

    getDetails(value:number|string): string{
        if(typeof value === "number"){
            return `Сумма: ${value}`
        }
        else{
            return `Номер карты: ${value}`
        }
    }
};

const payment = new CardPayment(1500, "1234");

console.log(payment.process());
console.log(payment.amount);
console.log(payment.getDetails(1500));
console.log(payment.getDetails("1234"));
console.log(Payment.getCount());