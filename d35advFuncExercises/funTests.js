"use strict";

const internal = require("stream");

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser.
*/
module.exports = { myMap, myFilter, myReduce }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {*} arr 
 * @param {*} func 
 * @returns 
 */
function myMap(arr, func) {

    let newArr=[];

    for(let elem of arr){
        newArr.push(func(elem))
    }
    return newArr;

}

//IMPLEMENTATION NEEDED


/**
 * 
 * @param {*} arr 
 * @param {*} func 
 * @returns 
 */
function myFilter(arr, func) {

let newArr=[];
for(let elem of arr){
   if (func(elem)){
    newArr.push(elem);
    
   }
}  
return newArr;
//IMPLEMENTATION NEEDED
}

/**
 * 
 * @param {*} arr 
 * @param {*} func 
 * @param {*} initialValue 
 * @returns 
 */
/**
 * 
 * @param {array} arr - input array
 * @param {function} func -input function
 * @param {num} initialValue - input number
 * @returns {undefined} - new value
 */
 function myReduce(arr, func, initialValue) {
    let currentValue = func(initialValue, arr[0]);
    for (let i = 1; i < arr.length; i++){
        currentValue = func(currentValue,arr[i]);
    }
    return currentValue;
}