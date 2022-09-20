// 

//array Destructuring

let alphabet=['A','b','c','d','e'];
let numbers=[1,2,3,5,7];

let[a,,c,...rest]=alphabet;

console.log(a),
console.log(c);
console.log(...rest) 

// 
const newArr=[...alphabet,...numbers]
//same as concat

const newArray1=[...alphabet.concat(numbers)]

console.log(newArr)
console.log(newArray1)
//

