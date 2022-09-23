 "use strict"

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
    

    function Video(title){

        this.title=title;
        console.log(title)
    }
    const newVid=new Video('b') // this refer to new {}

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
    user.showTag()