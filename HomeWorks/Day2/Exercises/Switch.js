


// switch (browser) {
//     case 'Edge':
//       alert( "You've got the Edge!" );
//       break;
  
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//       alert( 'Okay we support these browsers too' );
//       break;
  
//     default:
//       alert( 'We hope that this page looks ok!' );
//   }
function sayHi(name) {

  console.log("Hi " , name);

  return "Bye " + name;

}

const sayHiReturn = console.log(sayHi() );
console.log(sayHiReturn);