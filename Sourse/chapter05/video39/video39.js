console.log("video 39");

const myClass = ["an", "hi"];
// console.log(myClass, myClass.length);

// for (let i = 0; i < myClass.length; i++) {
//   console.log("i = ", i, "and value = ", myClass[i]);
// }
// for (let i = 1; i <= myClass.length; i++) {
//   console.log("i = ", i, "and value = ", myClass[i-1]);
// }

//for-each()
myClass.forEach(function(value, index){
  console.log("value = ", value, "index = ", index)
})

myClass.forEach((value, index) => {
  console.log("value = ", value)
} )