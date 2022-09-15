"use strict"

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { groupById, unique, filterRangeInPlace, filterRange, Calculator }; //add all of your function names here that you need for the node mocha tests


function filterRange(arr, a, b) {
 return arr.filter(item=>item>=0&&item<=b)
    
  }
 
  function filterRangeInPlace(arr, a, b) {
    for (let i = 0 ; i<arr.length; i++) {
      if(!(arr[i] >= a && arr[i] <= b)){
        arr.splice(i, 1);
      }
      
    }

  }
 

 /**
 * @returns {object} - object with calculate and addMethod methods
 */
function Calculator() {
  this["*"] = (a, b) => +a * +b,
    this["+"] = (a, b) => +a + +b,
    this["/"] = (a, b) => +a / +b,
    this["**"] = (a, b) => (+a) ** (+b),
    this["-"] = (a, b) => +a - +b,
    this.calculate = function (str) {
      let numArr = str.split(" ");
      for (let prop in this) {
        if (numArr[1] === prop) {
          return this[prop](numArr[0], numArr[2]);
        };
      };
    },
    this.addMethod = function (name, func) {
      for (let prop in this) {
        if (name === prop) {
          func = this[prop]();
        };
      };
    }
}

  function unique(arr) {
    let uniArr= [];
    for (let elem of arr) {
      if (!uniArr.includes(elem)) {
        uniArr.push(elem);
      }
    }
    return uniArr
    ;

  }

/**
 * 
 * @param {array} array - input array 
 * @returns {object} - with all of the elements of the input array grouped togethed
 */
 function groupById(array) {
  return array.reduce(function (preVal, item) {
    preVal[item.id] = item;
    return preVal;
  }, {})
}