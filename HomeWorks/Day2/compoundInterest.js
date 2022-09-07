"use script"
//defining table
/**
 * input:  initialAmount,annualInterest and numberOfYears
 *  output: the balance of a savings account that 
 * compounds interest monthly
 * steps:-i found the months in given years
 *       -the monthly rate
 *       -for loop to calculate to find he balance of a savings account that 
 *        compounds interest monthly
 * 
 */


function compoundInterest(initialAmount,annualInterest,numberOfYears){
    let monthsInYears = numberOfYears*12;
    let monthlyRate = annualInterest/1200; 
    let balance = initialAmount;
    for(let i = 1; i <= monthsInYears; i++){
        let monthlyAmount = monthlyRate*balance;
        balance += monthlyAmount;

    }
    return balance;
}
console.log("expect 110.47", compoundInterest(100, 10, 1).toFixed(2));
console.log("expect 16470.09", compoundInterest(10000, 5, 10).toFixed(2));