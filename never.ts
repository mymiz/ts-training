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