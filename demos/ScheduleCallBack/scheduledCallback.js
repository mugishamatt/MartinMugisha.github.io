


// setTimeout(()=>console.log("hello there"),3000);
// console.log("wait...");

// with arguments

// setTimeout((arg1,arg2)=>console.log(`the ingredients are ${arg1} and ${arg2}`),3000,"olives","spinach");
// console.log("wait...");

// cancel the timer

// const ingredients=["olive","spinach"];

// const timed=setTimeout((ing1,ing2)=>console.log(`the ingredients are ${ing1} and ${ing2}`),3000,...ingredients);

// if(ingredients. includes("spinach")){
//     console.log("deleted")//test
//     clearTimeout(timed)
// }else{
//     console.log("not find")//test
// }
// //book exo
// function sayHi(phrase, who) {
//     console.log( phrase + ', ' + who );
//   }
  
//   setTimeout(sayHi(), 1000, "Hello", "John"); // Hello, John


//
// repeat with the interval of 2 seconds
let timerId = setInterval(() => console.log('tick'), 2000);
// after 5 seconds stop
setTimeout(() => { 
clearInterval(timerId); console.log('stop'); }, 5000);
