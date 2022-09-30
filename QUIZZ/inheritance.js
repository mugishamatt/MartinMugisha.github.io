


function makeCounter(){
    let count=0;

    return function (incrVal){
        if(incrVal===undefined){
            count=count+1;

        }else{
            count=count+incrVal;
        }
         if (incrVal>3){
           return "Warning: increment was by value greater than 3";
        }else {
                return count;
            }
        }
    }
