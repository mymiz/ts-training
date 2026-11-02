class BankAccount1 {
    public owner: string;
    private balance: number;

    constructor(owner: string ,balance:number){
        this.owner = owner,
        this.balance = balance
    }

    showBalance():number{
        return this.balance
    }
}

const user1 = new BankAccount1("Alex", 1000);

console.log(user1)

console.log(user1.showBalance);



class Person {
    public name: string;
    protected age: number;

    constructor (name:string, age: number){
        this.name = name;
        this.age = age;
    }
};


class Student extends Person{
    getAge(): number{
        return this.age
    }
};

const student = new Student("Alex", 20);

console.log(student.name);
console.log(student.getAge());



class Product {
    readonly id: number;
    public name: string; 
    public price: number;

    constructor(id:number, name:string, price:number){
        this.id = id,
        this.name = name,
        this.price = price
    }
}

const product = new Product(101,"iphone",95000)

console.log(product);