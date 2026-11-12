class User{
    public name: string;
    private age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    get getAge(): number{
        return this.age
    }

    set setAge(value: number){
        if(value >= 18){
            this.age = value
        }
    }
};


const user = new User("Dima", 20);

console.log(user.getAge)

user.setAge = 25;
console.log(user.getAge)

user.setAge = 15;
console.log(user.getAge)



class Product{
    public name: string;
    private _price: number;

    constructor(name: string, _price: number){
        this.name = name;
        this._price = _price
    }

    get price():number{
        return this._price
    }

    set price(value: number){
        if(value > 0){
            this._price = value
        }
    }
};

const product = new Product("iPhone", 90000);

console.log(product.price); 

product.price = 80000;
console.log(product.price); 

product.price = -500;
console.log(product.price); 