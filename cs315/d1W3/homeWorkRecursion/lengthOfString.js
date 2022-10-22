

function stringLength(str){

    if(str.length==0||str==""){
        return 0;
    }
   
  return 1+stringLength(str.substring(1))

    }
    console.log(stringLength("hello"))
