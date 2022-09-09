"use strict";
//You need the module.exports when testing in node.  Comment it out when you send your file to the browser
module.exports = {maxOfThree: maxOfThree, sum: sum, multiply: multiply,
    findLongestWord:findLongestWord,reverseArray:reverseArray ,reverseArrayInPlace:reverseArrayInPlace
  ,scoreExams:scoreExams,generateArray:generateArray}; //add all of your function names here that you need for the node mocha tests

/**
//  
 * @param {number} a is a number
 * @param {number} b is a number
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
function maxOfThree(a, b, c) {
  if (a > b&&a>c) {
    return a;
 
  } else if(b>c){
    return b;
  }else{
    return c;
  }
}
console.log(maxOfThree(10, 30, 20));
/**
 *
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function sum(arr) {
  let tot = 0;
  for (const number of arr) {
    tot += number;
  }
  return tot;
}
/**
 *
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function multiply(arr) {
    let tot = 1;
    for(let num of arr){
    tot*=num
    }
  return tot;
}

/**
 * 
 * @param {Array} array of words
 */

function findLongestWord(array) {
        let word = "";
        for (let i = 0; i < array.length; i++) {
          if (array[i].length>word.length) {
            word = array[i];
          }
        }
        return word.length;
}
    let arr=["this", "is", "a", "test", "longest"];

      console.log(findLongestWord(arr))
//

    /**
 * 
 * @param {array} arr - array of elements
 * @returns {array} - new array which is arr reversed
 */
function reverseArray(arr) {
    let newArray = [];
    for (let element of arr) {
        newArray.unshift(element);
    }
    return newArray;
}

 /**
 * 
 * @param {array} arr The array of numbers; 
 * @returns  {array} arr returns the reversed array;
 */
function reverseArrayInPlace( arr1 ){

  let newArray= arr1.splice(0);
  
  for (let i =  newArray.length-1; i >= 0; i--) {
    arr1.push (newArray[i]); 
  }

  return arr1;
}
//

/************************************************************** */
/**
 * 
 * @param {array} studentAnswers - multidimensional array of students' answers
 * @param {array} correctAnswers - array of correct answers
 * @returns {array} - array of correct answers for each student
 */
 function scoreExams(studentAnswers, correctAnswers) {
  let scoreArray = [];
  let studentScore = 0;

  for (let array of studentAnswers) {
      for (let i = 0; i < array.length; i++) {
          if (array[i] === correctAnswers[i]) {
              studentScore += 1;
          }
      }
      scoreArray.push(studentScore);
      studentScore = 0;
  }
  return scoreArray;
}
//
/**
 * 
 * @param {int} num1 - first number 
 * @param {int} num2 - second number 
 * @returns {array} - multidimensional array
 */
 function generateArray(num1, num2) {
  let newArray = [];
  let count = 1;
  for (let i = 1; i <= num1; i++) {
      newArray.push([]);
  }
  for (let j = 0; j < newArray.length; j++) {
      for (let k = 0; k < num2; k++) {
          newArray[j].push(count);
          count += 1;
      }
  }
  return newArray;
}