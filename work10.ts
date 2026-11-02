class Product{
    readonly id: number;
    public name: string;
    private price: number;

    constructor(id:number, name: string, price: number){
        this.id = id;
        this.name = name;
        this.price = price;
    };

    getPrice():number{
        return this.price
    }
};

const Iphone = new Product(1,"Iphone",90000);
const Samsung = new Product(2,"Samsung",60000);

console.log(Iphone.name, Iphone.getPrice());
console.log(Samsung.name, Samsung.getPrice());



class Animal{
    public name: string;
    protected age: number;
    readonly id: number;

    constructor(name: string, age: number, id: number){
        this.name = name;
        this.age = age;
        this.id = id;
    }
};


class Dog extends Animal{
    public breed: string

    constructor(name:string, age: number, id: number, breed: string){
        super(name,age,id)
        this.breed = breed;
    }

    getInfo():string{
        return `Имя: ${this.name}, возраст: ${this.age} порода: ${this.breed}`
    }
};

const dog = new Dog("Bobik", 14, 1, "pudel");

console.log(dog.getInfo())



interface Payment{
    amount: number;
    currency: string;
    process():string;
}

class CardPayment implements Payment{
    amount: number;
    currency: string;

    constructor(amount: number, currency: string){
        this.amount = amount;
        this.currency = currency;
    }

    process():string{
        return `Оплата ${this.amount} ${this.currency} выполнена`
    }
};

const payment = new CardPayment(1500, "RUB");
console.log(payment.process());



class Employee{
    readonly id: number;
    public name: string;
    protected salary: number;

    constructor(id: number, name: string, salary: number){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    getSalary():number{
        return this.salary
    }
};


interface Worker{
    position: string;
    work():string
};


class Developer extends Employee implements Worker{
    public position: string;

    constructor(id: number, name: string, salary: number, position:string){
        super(id,name,salary)
        this.position = position;
    }

    work(): string{
        return `Имя: ${this.name}, должность: ${this.position}`
    }
};

const developer = new Developer(1, "Dima", 500000, "Backend developer");

console.log(developer.work(), developer.getSalary());



interface AccountInfo{
    getInfo():string;
}


class Account{
    readonly id: number;
    public owner: string;
    protected balance: number;
    private password: string;

    constructor(id: number, owner: string, balance: number, password: string){
        this.id = id;
        this.owner = owner;
        this.balance = balance;
        this.password = password;
    }
};


class PremiumAccount extends Account implements AccountInfo{
    public cashback: number;

    constructor(id: number, owner: string, balance: number, password: string, cashback: number){
        super(id,owner,balance,password)
        this.cashback = cashback
    }

    getInfo():string{
        return `id: ${this.id}, owner: ${this.owner}, balance: ${this.balance}, cashback: ${this.cashback}`
    }
};

const account = new PremiumAccount(
    1,
    "Dima",
    100000,
    "qwerty",
    5
);

console.log(account.getInfo());