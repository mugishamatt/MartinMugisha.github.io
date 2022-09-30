function makeCounter(){
    let count = 0;
    const  innerFunc = function(){
        count++;
        return count;
    };
    return innerFunc;
}

const counter1 = makeCounter();
const counter2 = makeCounter();
counter1();
counter2();
 console.log(counter1());
console.log(counter2());
console.log(counter2());
console.log(counter2());



// function makeCounter() {
//     let count = 0;
//     return function() {
//     return count++;
//     };
//     }
//     let counter = makeCounter();
//     counter();
//     console.log( counter() ); // 0
//     console.log( counter() ); // 1
//     console.log( counter() ); // 2