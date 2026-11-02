type User = {
    name: string, 
    age: number,
    email?: string
}

function getUserInfo(user: User): string {
    if("email" in user ) {
        return `Имя: ${user.name}, Возраст: ${user.age}, Почта: ${user.email}`
    }
    else{
        return `Имя: ${user.name}, Возраст: ${user.age}`
    }
}

const user1: User = {
    name: "Alex",
    age: 25,
    email: "alex@mail.com"
};

const user2: User = {
    name: "Max",
    age: 30
};

console.log(getUserInfo(user1))
console.log(getUserInfo(user2))



function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key]
};

const user = {
    name: "Alex",
    age: 25,
    isAdmin: true
};

getProperty(user, "name");    
getProperty(user, "age");     
getProperty(user, "isAdmin"); 



type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
};

type ProductPreview = Pick <Product, "name" | "price">;

const productPreview: ProductPreview = {
    name: "Iphone",
    price: 95000
};



enum Status {
    Success = "success",
    Error = "error"
}

function getStatusMessage(status:Status): string {
    switch(status){
        case Status.Success:
            return "Операцация выполнена"
    
        case Status.Error:
            return "Произошла ошибка"

        default: {const impossible: never = status;
return impossible};
    }
}