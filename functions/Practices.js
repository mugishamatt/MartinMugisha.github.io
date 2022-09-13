
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

// const numbers={
//     one:1,
//     two:22,
//     three:333,
//     four:4444,
// }
// const  properties = ["one", "two", "three", "four"];

// for(let key of numbers){
//     console.log(numbers[key])// print values
//     console.log(key)
// }

// let pt1 = {x:1 , y:2};
// let pt2 = {x:1 , y:2}; // two independent objects 
// alert( pt1 == pt2); // ??
// alert(pt1 === pt2) // ??

// const a = 5;
// const b = 5;
// alert(a === b);

// const a = {name: "John", age: 10};
// const b = {name: "John", age: 10};
// console.log(a === b);

// const a = {name: "John", age: 10};
// const b = a;
// console.log(a === b);

// true
// const a = {name: "John", age: 10};
// const b = a;
// b.name = "alex";
// b.age = 65;
// console.log(a === b);

// let baz = "" + 33 + 10;
// console.log(baz === 43);


// 



//  function getProperties(obj){
// let newArray=[];
// for(let grades in obj){
// newArray.push(obj[grades]
// )
// }
// return newArray;
// }
// const gradeReport = { s101: 3, s102: 2, s103: 3 };
// console.log(getProperties(gradeReport ))

//functions

const manager = {
    name: "John",
    age: 27,
    job: "Software Engineer",
    sayHi: sayHowdy
  };
  const intern= {
    name: "Ben",
    age: 21,
    job: "Software Engineer Intern",
    sayHi: sayHowdy
  };
  
  /**
   * @returns {undefined} 
   */
  function sayHowdy() {
     //IMPLEMENT THIS
     const output ="hi my name is "+ this.name;
     console.log(output);
  }
  
  // add sayHi function to both objects
//    manager.sayHi = sayHowdy;
//    intern.sayHi = sayHowdy;

  
  manager.sayHi(); // Hello, my name is John. I am 27.  My job is Software Engineer.'
  intern.sayHi(); // Hello, my name is Ben.  I am 21.  My job is Software Engineer Intern.'

