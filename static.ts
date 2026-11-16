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



type Order = {
    id: number,
    customer: string,
    total: number,
    isPaid: boolean
};


const orders: Order[] = [
    {id:1, customer:"Anna", total:5000, isPaid:true},
    {id:2, customer:"Dima", total:1200, isPaid:true},
    {id:3, customer:"Ira", total:7000, isPaid:false},
    {id:4, customer:"Inna", total:2000, isPaid:true},
    {id:5, customer:"Denis", total:1000, isPaid:true}
];

function analyzeOrders(orders: Order[]): void {
    let paidCount: number = 0;
    let totalSum: number = 0;
    let mostExpensive: Order | undefined = undefined;

    for (const order of orders) {
        if (order.isPaid === false) {
            continue;
        }

        paidCount++;
        totalSum += order.total;

        if (mostExpensive === undefined) {
            mostExpensive = order;
        } else if (order.total > mostExpensive.total) {
            mostExpensive = order;
        }
    }

    console.log(paidCount);
    console.log(totalSum);
    console.log(mostExpensive);
}


(analyzeOrders(orders))

