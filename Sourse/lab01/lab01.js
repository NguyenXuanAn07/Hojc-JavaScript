console.log("lab 01");

const fullname = "Xuan An";
const birthyear = 2007;
const isStudent = false;

const today = new Date();
const currentYear = today.getFullYear();

console.log(currentYear, typeof currentYear);
const calculatedAge = currentYear - birthyear;
console.log(`
    Name: ${fullname}
    Age: ${calculatedAge}
    Student: ${isStudent}
    `);
