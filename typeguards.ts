function checkvalue(value: string | number){
    if(typeof value === "string") {
        console.log(value.toUpperCase()) 
    }
    else {
        console.log(value * 2)
    }
}

checkvalue("typescript")
checkvalue(10);