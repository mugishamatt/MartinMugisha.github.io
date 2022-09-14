

let arr=[1,5,16,3, 108]

const res=arr.forEach((elem)=>{
    if(elem%2==0){
        console.log(elem)
    }
})

/*const numbers = [1, 5, 18, 2, 77, 108];
➢ use filter, find, and findIndex to find ➢ all the even numbers
➢ the first even number
➢ the index of the first even number

   */
numbers = [1, 5, 18, 2, 77, 108];

let resul=numbers.filter((item)=>{
    if(item%2==0){
        return item;
    }

})
console.log(resul)

let resul1=numbers.find((item)=>{
    if(item%2==0&&numbers[0]){
        return item;
    }

})
console.log(resul1)

//

let string="hhsasbb jsidia iausia";
let newArrr=string.split(" ")
console.log(newArrr)