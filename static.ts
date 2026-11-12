class Employee{
    public name: string;
    private salary: number;
    static count: number = 0;

    constructor(name: string, salary: number){
        this.name = name;
        this.salary = salary;
        Employee.count++;
    }

    getSalary():number{
        return this.salary;
    }

    static getCount():number{
        return Employee.count
    }
};

const employee1 = new Employee("Dima", 100000);
const employee2 = new Employee("Alex", 80000);
const employee3 = new Employee("Max", 120000);

console.log(employee1.getSalary());
console.log(employee2.getSalary());
console.log(Employee.getCount());



class BankAccount{
    private balance: number;

    constructor(balance:number){
        this.balance = balance
    }

    getBalance():number{
        return this.balance
    }
};

class User{
    public name: string;
    private account: BankAccount;

    constructor(name:string, account: BankAccount){
        this.name = name;
        this.account = account;
    }

    showBalance():string{
        return `Баланс пользователя ${this.name}: ${this.account.getBalance()}`
    }
};

const account = new BankAccount(10000);

const user = new User("Dima", account);

console.log(user.showBalance());



class Converter{
    convert(value:number):string;
    convert(value:string):number;

    convert(value: number|string): number|string {
        if(typeof value === "number"){
            return String(value)
        }
        else{
            return Number(value)
        }
    }
};

const converter = new Converter();

console.log(converter.convert(100));
console.log(converter.convert("250"));