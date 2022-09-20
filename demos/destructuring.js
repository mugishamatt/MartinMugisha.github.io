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

function sumAndMultiply(a,b){
    return [a+b,a*b]
}
const array=sumAndMultiply(6,3)
console.log(array)
//using destructuring

const [sum,multiply]=sumAndMultiply(6,3);

console.log(sum)
console.log(multiply)
//************************************************************** */

//2.object distructuring

const personOne={
    name:"sally",
    age:10,
    address:{
        city:"kigali",
        state:"rwanda"
    }
}

const personTwo={
    name:"john",
    age:43,
    address:{
        city:"dallas",
        state:"texas"
    },
    sport:"soccer",
    favFood:"rice",
    height:"tall",


}

// function forIn(){
// for(let elem in personOne){
//     console.log("elem",elem)
// }
// }
// forIn()


const{name,age,address,sport="foot",address:{city}, ...restElem}=personTwo;
console.log(name);
console.log(age);
console.log(address)
console.log(sport)
console.log(restElem)
console.log(city)

//combining two objects

const personThree={...personOne,...personTwo}

console.log(personThree)

//most used in function

function printUser({name,age,favFood="default"}){
    console.log(`name is: ${name},Age is: ${age},food is:${favFood}`)

}

printUser(personOne)