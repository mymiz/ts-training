abstract class Payment {
    public amount: number;

    constructor(amount:number){
        this.amount = amount
    };

    abstract process():string;
};

class CardPayment extends Payment{
    process():string{
        return `Оплата картой: ${this.amount}`
    }
};

const cardpayment = new CardPayment(12000);

console.log(cardpayment.process())