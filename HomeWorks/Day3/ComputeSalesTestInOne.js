"use Strict"




function computeSalesCommission(isSalary,salesAmount){
 
    if(isSalary===true){
        
        if(salesAmount<300){
           let commision =0;
       
            return(commision)
        }
        else if(salesAmount>=300&&salesAmount<500){
            let  commision =(salesAmount*0.01);
    
       return("commision: ",commision)
        }else {
            let commision =(((salesAmount-500)*0.02)+500*0.01);
           
            return("commision: ",commision)
        
        }
    
    }else{
        if(salesAmount<300){
            let commision=0;
            return commision;
        }
        else if(salesAmount>=300&&salesAmount<500){
            let  commision =salesAmount*0.02;
         
            return("commision: ",commision);
        }
         else {
            let commision =(((salesAmount-500)*0.03)+500*0.02);
          
            return("commision: ",commision)
        }
    
    
    }
    
}
//test
const assert = require("assert");

describe("test of ComputSalesCommission", function(){ 
    it("tests salaried and 200 sales", function(){
    assert.strictEqual(computeSalesCommission(true, 200), 0);
   });
    it("tests not salaried and 200 sales", function(){ 
        assert.strictEqual(computeSalesCommission(false, 200), 0);
    });
    it("tests salaried and 300 sales", function(){
    assert.strictEqual(computeSalesCommission(true, 300), 3);
 });
it("tests not salaried and 300 sales", function(){ 
    assert.strictEqual(computeSalesCommission(false, 300), 6);
});
it("tests salaried and 3500 sales", function(){
assert.strictEqual(computeSalesCommission(true, 3500), 65); 
});
it("tests not salaried and 3500 sales", function(){ 
    assert.strictEqual(computeSalesCommission(false, 3500), 100);
}); 
});