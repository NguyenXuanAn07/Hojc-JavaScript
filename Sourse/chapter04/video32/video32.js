console.log("video 32")

const sum = (a,b,c) => {
    console.log("hehehehehe")
    if (typeof a !== 'number'){
        console.log("run again")
        return;
    }
    console.log("run after")
    return a + b + c
}
console.log(sum('he',2,'he'))