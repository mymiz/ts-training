interface Venicle{
    brand: string,
    speed: number,
    drive():string;
}

class Car implements Venicle{
    brand: string;
    speed: number;

    constructor(brand:string, speed: number){
        this.brand = brand;
        this.speed = speed;
    }

    drive():string{
        return `Машина едет со скоростью ${this.speed} км/ч`
    }
};

const car = new Car("BMW", 120);
console.log(car.drive());