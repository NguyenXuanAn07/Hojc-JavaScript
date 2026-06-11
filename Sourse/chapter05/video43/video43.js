

const person = {
    name1: "Xuan An",
    age: 19
}
console.log(person)
console.log("person's name: ", person.age)
console.log("person's name: ", person["name1"])

person.address = "HN"
person["language"] = "Vietnamese"
console.log("After person: ", person)

delete person.address
console.log(person)