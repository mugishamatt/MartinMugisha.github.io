
let fruits=["apple",'orange','plume'];
// alert(fruits[0]);
// alert(fruits[1]);
// alert(fruits[2]);
//replace
fruits[2]='pear';
//add
fruits[3]="lemon"

console.log(fruits);
console.log("the sise is: ",fruits.length);
//
let fruitss = [];
fruitss[123] = "Apple";
//alert( fruitss.length ); // 124

//

let newArray=[];

function findAverage(newArray){
   
    let sum=0;
    for(let i=1; i<6;i++){
        newArray[i]= i*10;
       sum=sum+newArray[i];  
}
let avg=sum/newArray.length;
return avg;
}
console.log(findAverage(newArray))

//
