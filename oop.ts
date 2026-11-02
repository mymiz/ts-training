class BankAccount {
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

const user = new BankAccount("Alex", 1000);

console.log(user)

console.log(user.showBalance);



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