const user = {
    name: "Dima",
    address: {
        city: "Tolyatti"
    }
}

const copy = structuredClone(user)

copy.address.city = "Moscow";

console.log(user.address.city);
console.log(copy.address.city);