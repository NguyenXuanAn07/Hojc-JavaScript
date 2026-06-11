

const sv1 = {username: "Xuan an", score: 10}
const sv2 = {username: "hehehe", score: 9}

const sinhvien = [sv1, sv2]
console.log(">>check sinh vien: ", sinhvien)

// sinhvien.forEach((item, index) => {
//     console.log("Item: ", item.username, "Index: ", index)
// })

const person = {
    email: "anhehe@gmail.com",
    age: 19,
    address: 'VN'
}
for (let key in person) {
    console.log(key, person[key])
}
for (let value of Object.values(person)) {
    console.log(value)
}
console.log("===========")
for (let [key, value] of Object.entries(person)) {
    console.log(key, value)
}