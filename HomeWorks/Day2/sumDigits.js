
// "use strict"
/**
 * 
 * Take the number and build the remainder of ten and add that.
 *  Then take the integer part of the division of the number by 10.
 *  Proceed.
 */
function sumDigit(value){
let sum=0;
while (value!=0) {
    sum +=value % 10;
    value = Math.floor(value / 10);
}
console.log(sum)
}


function multDigit(value){

   let product=1;
    while (value) {
        let digit=value % 10;

        product =product*digit
        value = Math.floor(value / 10);
    }
    console.log(product)
    
    }
    sumDigit(1234)
    multDigit(1234)
    sumDigit(102)
    multDigit(102)
    sumDigit(8)
    multDigit(8)