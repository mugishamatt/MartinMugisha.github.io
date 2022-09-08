
"use Strict"

function computeSalesCommission(isSalary,salesAmount){
 
    if(isSalary===true){
        
        if(salesAmount<300){
          let  commision =0;
       
            return(commision)
        }
        else if(salesAmount>=300&&salesAmount<500){
           commision =(salesAmount*0.01);
    
       return("commision: "+commision)
        }else {
            commision =(((salesAmount-500)*0.02)+500*0.01);
           
            return("commision: "+commision)
        
        }
    
    }else{
        if(salesAmount<300){
            commision=0;
            return commision;
        }
        else if(salesAmount>=300&&salesAmount<500){
            commision =salesAmount*0.02;
         
            return("commision: "+commision);
        }
         else {
            commision =(((salesAmount-500)*0.03)+500*0.02);
          
            return("commision: "+commision)
        }
    
    
    }
    
}

console.log("expect 0: ", computeSalesCommission(true, 200));
console.log("expect 0: ", computeSalesCommission(false, 200));
console.log("expect 3: ", computeSalesCommission(true, 300)); 
console.log("expect 6: ", computeSalesCommission(false, 300));
console.log("expect 65: ", computeSalesCommission(true, 3500));
console.log("expect 100: ", computeSalesCommission(false, 3500));



