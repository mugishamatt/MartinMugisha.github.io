

function contain(arr,str){
    if(arr.length==1)
    return arr[0]==str;

    let s=arr.shift();
    if(s==str){
        return true;
    }
    else 
    return contain(arr,str)

}
let arr=["mat","rich","popo"]
console.log(contain(arr,"at"))