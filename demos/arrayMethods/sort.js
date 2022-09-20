"use strict";
/* eslint-disable */

/* change comparator function to sort in descending order, then 
change it to sort in lexicographic descending order
*/


function descending(a, b) {
     a = "" + a;
     b = "" + b;
    if (a > b) return -1;
    if (a == b) return 0;
    if (a < b) return 1;
  }
  let arr = [ 1, 15, 2 ];
  arr.sort(descending);
  console.log("expect [2, 15, 1] :", arr); 

  //sort using comparator function

  let arr1 = [ 1, 15, 2 ];
  const sortedArr=arr1.sort((a,b)=>{
    return a-b
  });
  console.log("comparator func: ",sortedArr)

//sort using comparator function for element of objec

let person=[
  {name:"matt",age:34},
  {name:"cocolongib",age:34},
  {name:"ronaldingno",age:34},
  {name:"pepeingo",age:34}
]

function comparator(a,b){
  return a.cha-b.name.length;
}

console.log(person.sort(comparator))