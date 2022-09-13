
// let student1={
//     studentid:'s101',
//     quizAnswers:[1,1,2,4],
        
// };
// let student2={
//     studentid:'s102',
//     quizAnswers:[2,1,2,2],
        
// }
// let student3={
//     studentid:'s103',
//     quizAnswers:[3,1,3,4],
// }

// const quiz=[student1,student2,student3]
// let newArr=[];
// for (let sts of quiz){
//     newArr.push(sts)
// }
// function collectAnswers(questionNum) {

// // object literal
/*
let user = {
    name: "John",
    age: 30,
    isAdmin: true
    };
    for (let key in user) {
    // keys
    console.log( key ); // name, age, isAdmin
    // values for the keys
    console.log( user[key] ); // John, 30, true
    }
*/

// let a="hello";
// let b=a;

// console.log(a==b)
//

const numbers={
    one:1,
    two:22,
    three:333,
    four:4444,
}
const  properties = ["one", "two", "three", "four"];

for(let key of numbers){
    console.log(numbers[key])// print values
    console.log(key)
}