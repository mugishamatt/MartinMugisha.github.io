"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/ 
module.exports = {double, times100, myMap }; //add all of your function names here that you need for the node mocha tests

/**
 *@returns {number} double the input
 */
 function double(n){
    return n*2;
}
console.log(double(6));



/**
 * @returns {number} 100 times the input
 */
 function times100(num){
    return num*100;
}
console.log(times100(6));

/**
 * 
 * @param {*Array} arr 
 * @param {Function} func that retun 
 * @returns 
 */
 function myMap(arr,func){
    let newArr=[];

    for(let element of arr)
  newArr.push(func(element))
  return newArr
}
let arr=[1,3,2,4,6]

console.log(myMap(arr,double))
console.log(myMap(arr,times100))
