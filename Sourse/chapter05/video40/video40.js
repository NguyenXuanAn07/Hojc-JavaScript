

const scores = [10,8,3,7,5]
scores.forEach((value, index) => {
    console.log("Score = ", value, "index = ", index)
})

const scorex2 = scores.map((v, i) => {
    return v * 2;
})
console.log(scorex2)


