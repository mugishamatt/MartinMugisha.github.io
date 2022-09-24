 //"use strict"

function foo() {
     console.log(this); 
    } 


    const bob = {
    log: function() {
     console.log(this);
    } };
 //console.log(this); // this is window in browser ({} in node**)
   //  foo(); //foo() is called by window object (global in node) 
    // bob.log();//log() is called by the object, bob
    

    // function Video(title){

    //     this.title=title;
    //     console.log(title)
    // }
    // const newVid=new Video('b') // this refer to new {}

    //console.log(newVid)


    const user={
        title:'ab',
        tag:['a','b','c'],
        showTag(){
            this.tag.forEach(function(tag){
                console.log(this.title,tag)
            },this)
        }

    }

    // using bind



let user1 = { 
    firstName: "John"
};
function func(phrase) {
console.log(phrase + ', ' + this.firstName); 
}

//
const bindUser=func.bind(user1);

bindUser("hello")


   // user.showTag()


/*
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList() {
    this.students.forEach(function(student) {
    // Error: Cannot read property 'title' of undefined
    console.log(this.title + ': ' + student)
    });
    }
   };
*/




   // fix using bind.


// let group1 = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
//     showList() {
//     this.students.forEach(function(student) {
//     // Error: Cannot read property 'title' of undefined
//     console.log(this.title + ': ' + student)
//     }.bind(this));
//     }
//    };
//    group1.showList();

//    //
//    let group2 = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
//     showList() {
//         function grouping(student){
//             console.log(this.title + ': ' + student)
//         }
//     this.students.forEach((student) =>{
//         grouping.bind(group2,student)()
//     }
//         );
//     }
//    };
//    group2.showList();



function playVideo(a,b){
    console.log(this)
}
playVideo.call({name:"matt"},1,2)

playVideo.apply({name:"mett"},[1,2])
const vid =playVideo.bind({name:"rob"},1,3);
vid()
//playVideo.bind({name:"rob"},1,3)())
playVideo()


//
// const bar= foo.bind(car);/// put in arrow function
// const bar1=()=>car.foo();