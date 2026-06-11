

const p1 = {
    name: "Shoes",
    price: 100,
    inStock: true
}
const p2 = {
    name: "Short",
    price: 200,
    inStock: true
}
const p3 = {
    name: "Gun", 
    price: 10000,
    inStock: true
}
const p4 = {
    name: "AK47",
    price: 20000,
    inStock: true
}
const p5 = {
    name: "HEHE",
    price: 1000,
    inStock: true
}
const listProduct = [p1,p2,p3,p4,p5]
console.log(listProduct)

//Q1
console.log("1. first name of p1: ", p1.name)

// //Q2
const newlist = [p1,{
    name: p2.name,
    price: 150,
    inStock: p2.inStock
}, p3,p4,p5]
console.log("2. Update p2's price = 150", newlist)

//Q3
const p6 = {name: "hehe", price: 200, inStock: true}
listProduct.push(p6)
console.log("3. add last product:", listProduct)

//Q4
listProduct.pop()
console.log("4. remove last product", listProduct)

// //Q5
console.log("=============")
listProduct.forEach((item, index) => {
    console.log("5. product name: ", item.name)
})
console.log("=============")

//Q6
const pricelist = listProduct.map((item, index) => {
    return item.price
})
console.log("6. price list:", pricelist )

//Q7
const inStockProduct = listProduct.filter((item, index) => {
    return item.inStock === true
})
console.log("7. instock list: ", inStockProduct)

//Q8
for(key in p1) {
    console.log("8. p1 element: ", key, p1[key])
}