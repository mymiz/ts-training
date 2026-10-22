function showMessage(): void {
    console.log("Привет, Dima")
};

function stopProgram(): never {
    throw new Error("текст ошибки")
}

enum UserRole {
    Admin = "admin",
    User = "user",
    Guest = "guest"
};

const role = UserRole.Admin
    console.log(role)


function getRoleMessage(role: UserRole): string {
    switch (role) {
        case UserRole.Admin:
            return "Полный доступ";
    
        case UserRole.User:
            return "Обычный доступ";

        case UserRole.Guest:
            return "Гостевой доступ"
    }
}

console.log(getRoleMessage(UserRole.Guest));
console.log(getRoleMessage(UserRole.Admin));
console.log(getRoleMessage(UserRole.User));



enum OrderStatus{
    Pending = "pending",
    Paid = "paid",
    Cancelled = "cancelled"
}

function getOrderMessage(status:OrderStatus): string {
    switch(status){
        case OrderStatus.Pending:
            return "Заказ ожидает оплаты"
        
        case OrderStatus.Paid:
            return "Заказ оплачен"
    
        case OrderStatus.Cancelled:
            return "Заказ отменен"
    }
}

console.log(getOrderMessage(OrderStatus.Pending));
console.log(getOrderMessage(OrderStatus.Paid));
console.log(getOrderMessage(OrderStatus.Cancelled));