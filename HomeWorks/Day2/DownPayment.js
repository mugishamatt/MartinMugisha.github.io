
/**
 * input: the cost, interest
 * output: downpayment
 * process: make if else statements to return the downpayment for a given 
 * range of cost and interest
 *
 */

function calcDownpayment(cost){
 
    if(cost>=0&&cost<50000){
        const downPayment=cost*0.05;
        return downPayment;
    }else if(cost>=50000&&cost<100000){

        const downPayment=2500+((cost-50000)*0.1);
        return downPayment;


    }else if(cost>=100000&&cost<200000){

        const downPayment=7500+((cost-100000)*0.15);
        return downPayment;
    
    
    }else if(cost>=200000){

        const downPayment=20000+((cost-200000)*0.1);
        return downPayment;
    
    
    }

}
console.log("expect 2000: ", calcDownpayment(40000)); 
console.log("expect 2500: ", calcDownpayment(50000)); 
console.log("expect 7500: ", calcDownpayment(100000));
 console.log("expect 25000: ", calcDownpayment(250000));