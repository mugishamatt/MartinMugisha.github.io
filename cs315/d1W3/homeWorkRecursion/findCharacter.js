function findOccurenceInString(myString,letter){
    if (myString.length == 0)
        return false;
    let str = myString.charAt(0);
    myString =myString.substring(1);
    //    if(str==letter)
    //    return true
       str==letter?true:false
    
    // let count =  str == letter ?1:0
    return findOccurenceInString(myString,letter);
}

console.log(findOccurenceInString("hello",'v'))