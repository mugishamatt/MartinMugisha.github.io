
function countDown(num){

let timerId=setInterval(timer, 1000); //1000 will  run it every 1 second
let count=num;
function timer()
{ 
    console.log(count)
  if (count<= 0)
  {
    
     clearInterval(timerId);
     //counter ended, do something here
 
  }else{

count=count-1

  }
//Do code for showing the number of seconds here
}
}
countDown(5)

