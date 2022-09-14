// let foo=42;
// foo = 42; // foo is now a number = 'bar'; // foo is now a string
// foo= true; // foo is now a boolean

//parseInt convert string to numbers(whole numbers)
let text = "42px"
let integer = parseInt(text, 10); // returns 42

function circumference(r) {
     if (isNaN(parseFloat(r))) {
    return 0; }
    return parseFloat(r) * 2.0 * Math.PI; }
    console.log(circumference('4.567abcdefgh')); // expected output: 28.695307297889173
    console.log(circumference('abcdefgh')); // expected output: 0


    //
let num = 12.34;
console.log( num.toFixed(1) ); // "12.3"
let num1 = 12.36;
console.log( num1.toFixed(1) ); // "12.4"

console.log("*****************")
const foo = 45;
const bar = "" + foo;
const bar2 = "" + 108;
const bar3 = foo.toString();
const bar4 = 108..toString(); //need both periods after number const bar5 = foo + "";
console.log(typeof foo === "number"); //true console.log(typeof bar === "string"); //true
console.log(typeof bar2 === "string"); //true console.log(typeof bar3 === "string"); //true console.log(typeof bar4 === "string"); //true console.log(typeof bar5 === "string"); //true
console.log(typeof bar2 === "string"); //true 
console.log(typeof bar3 === "string"); //true
 console.log(typeof bar4 === "string"); //true 
 console.log(typeof bar5 === "string"); //true