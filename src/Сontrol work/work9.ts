class BankAccount{
    public owner: string;
    private balance:number;
    readonly accountId: number;

    constructor(owner:string, balance:number, accountId:number){
        this.owner = owner;
        this.balance = balance;
        this.accountId = accountId;
    }

    getBalance():number{
        return this.balance
    }
};

const user = new BankAccount("Alex", 5000, 101);

console.log(user.owner);
console.log(user.getBalance());
console.log(user.accountId);



class Person {
    public name: string;
    protected age: number;
    readonly id: number

    constructor(name:string, age:number, id:number){
        this.name = name;
        this.age = age;
        this.id = id;
    }
}

class Employee extends Person {
    public position: string;

    constructor(name:string, age:number, id:number, position: string){
        super(name,age,id);
        this.position = position;
    }

    getInfo():string{
        return `Имя: ${this.name}, возраст: ${this.age}, должность: ${this.position}`;
    }
}

const user1 = new Employee("Alex",20,1,"backend developer")

console.log(user1.getInfo())



class User{
    readonly id: number;
    public name: string;
    protected role: string;
    private password: string;

    constructor(id:number, name:string, role:string, password:string){
        this.id = id;
        this.name = name;
        this.role = role;
        this.password = password;
    }
};

class Admin extends User{
    public permissions:string;

    constructor(id:number, name:string, role:string, password:string, permissions:string){
        super(id,name,role,password)
        this.permissions = permissions;
    }
    getAdminInfo():string{
        return `Имя: ${this.name}, роль: ${this.role}, права администратора: ${this.permissions}`
    }
};

const user2 = new Admin(1,"Dima","admin","qwerty","access");

console.log(user2.getAdminInfo())