const names1: string [] = ["Dima", "Alex", "Max", "Masha"];

console.log(names1.includes("Max"));
console.log(names1.includes("Nikita"));



const names2: string[] = ["Dima", "Alex", "Max", "Masha"];

function hasName(name: string):boolean {
    return names2.includes(name)
}

console.log(hasName("Max"));
console.log(hasName("Nikita"));



const names3: string [] = ["Dima", "Alex", "Max", "Masha"];

console.log(names3.indexOf("Max"));
console.log(names3.indexOf("Dima"));
console.log(names3.indexOf("Nikita"));




const names: string [] = ["Dima", "Alex", "Max", "Masha"];

function findName(name: string): string {
    if(names.indexOf(name) !== -1){
        return "Имя найдено";
    }
    else{
        return "Имя не найдено";
    }
}

console.log(findName("Max"));
console.log(findName("Nikita"));