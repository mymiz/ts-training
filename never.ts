function showMessage(): void {
    console.log("Привет, Dima")
};

function stopProgram(): never {
    throw new Error("текст ошибки")
}

showMessage