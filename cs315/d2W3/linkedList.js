let el4 ={
    value: 4,
    next: null
};
let el3 ={
    value: 3,
    next: el4
};
let el2 ={
    value: 2,
    next: el3
};
let list ={
    value: 1,
    next: el2
};
function showList(list){
console.log(list.value)
if(list.next)
showList(list.next)
}
//showList(list)

console.log(JSON.stringify(list))
//Split
console.log("******************")
// let secondList = list.next.next;
// list.next.next=null;
// console.log(JSON.stringify(list),secondList);
//remove  2

// let third=list.next.next
// list.next=third;
// console.log(JSON.stringify(list));

//add element betwween 2 and 3

let newElement = {value:'2.5'};
el2.next=newElement
newElement.next=el3

// console.log(JSON.stringify(list));

//remove first
let secondElement = list.next;
list = secondElement;
console.log(JSON.stringify(list))
