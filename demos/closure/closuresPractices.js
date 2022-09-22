// function sayHiBye(firstName, lastName) {

//     // helper nested function to use below

//     let midle="pepigno"
//      function getFullName() {
//       return firstName + " " + lastName +" "+ midle;
//     }
  
//     alert( "Hello, " + getFullName() );
//     alert( "Bye, " + getFullName() );
  
//   }

//   const names=sayHiBye("matt","pele")

// nested function

  // function makeCounter() {
  //   let count = 0;
  
  //   return function() {
  //     return count++;
  //   };
  // }
  
  // let counter = makeCounter();
  
  // alert( counter() ); // 0
  // alert( counter() ); // 1
  // alert( counter() ); // 2


  function makeCounter() { 

    let count = 0;   
  
    return function(num) {

      if(count>1)
  
      return "Warning:  increment was by value greater than 1: "+ count};
  
  }
  const myCount = makeCounter();
  console.log(myCount(20))
  console.log(myCount(20))
  console.log(myCount(20))

  