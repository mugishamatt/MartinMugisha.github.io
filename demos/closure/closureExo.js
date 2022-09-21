"use strict"


/*Write a function, makeCounter() that declares a local variable, count, and
another local variable, innerFunc, which is an inner function; innerFunc will
increment the count variable and return the incremented value. makeCounter
should return innerFunc.
Call it twice to make different counters, counter1 and counter2.
Do they keep independent counts?
*/

// function makeCounter(){
//     let count=0;
//     let innerFunc=function(){
//         count=count+1;
//         return count
//     }
//     return innerFunc
//     let count=count+1;
//     return count;

// }

//exo

//1 very simple closure


var val=4;

const add=function(){
    let inner=5;
    return val+inner;
}
console.log(add())//4+5
var val=5;
console.log(add())//5+5;


