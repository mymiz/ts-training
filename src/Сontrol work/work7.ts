type User = {
    name: string;
    age?: number;
    city?: string;
};

type NewUser = Partial<User>;

type fulluser = Required<User>;

const user1: NewUser = {
    name: "Dima"
};
    console.log(user1);

const user2: fulluser = {
    name: "Alex",
    age: 20,
    city: "Moscow"
};
    console.log(user2);



type Product = {
    name: string;
    price: number;
    inStock: boolean;
    description: string;
};

type ProductInfo = Pick<Product,"name" | "price">;

type ProductWithoutDescription = Omit<Product, "description">;

const productinfo: ProductInfo = {
    name: "BMW",
    price: 20000,
};
    console.log(productinfo)

const productWithoutDescription: ProductWithoutDescription = {
    name: "Mersedes",
    price: 40000,
    inStock: true
};
    console.log(productWithoutDescription)



type Prices = "laptop" | "phone" | "tablet";

type ProductPrices = Record<Prices, number>

const prices: ProductPrices = {
    laptop: 12,
    phone: 1213,
    tablet: 2312
};
    console.log(prices);



type User1 = {
    name: string;
    age: number;
};

type ReadonlyUser1 = Readonly<User1>;

const username: ReadonlyUser1 = {
    name: "Dima",
    age:20
};
    console.log(username);



function getProductPrice() {
    return 1500;
}

type PriceType = ReturnType<typeof getProductPrice>;

const price: PriceType = 2000;
    console.log(price);