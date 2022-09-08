
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
return sum;
}


function multDigit(value){

   let product=1;
    while (value!=0) {
        let digit=value % 10;

        product =product*digit
        value = Math.floor(value / 10);
    }
    
    return product;
    
    }
   console.log(sumDigit(1234))
    console.log(multDigit(1234))
    sumDigit(102)
    multDigit(102)
    sumDigit(8)
    multDigit(8)