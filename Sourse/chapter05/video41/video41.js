


const students = [12,23,34,2,3,1,23,23]
let newStu = students.map((element, index) => {
    return element * 2
})
console.log(newStu)

let ageGreatthan18 = students.filter((element, index) => {
    return element > 18
})
console.log(ageGreatthan18)