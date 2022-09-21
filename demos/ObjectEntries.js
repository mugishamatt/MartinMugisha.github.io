// const obj1 = { foo: 'bar', baz: 42 };
// console.log(Object.entries(obj1)); // [ ['foo', 'bar'], ['baz', 42] ]

// // array like object
// const objs = { 0: 'a', 1: 'b', 2: 'c' };
// console.log(Object.entries(objs)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

// // array like object with random key ordering
// const anObj = { 100: 'a', 2: 'b', 7: 'c' };
// console.log(Object.entries(anObj)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

// // getFoo is property which isn't enumerable
// const myObj = Object.create({}, { getFoo: { value() { return this.foo; } } });
// myObj.foo = 'bar';
// console.log(Object.entries(myObj)); // [ ['foo', 'bar'] ]

// // non-object argument will be coerced to an object
// console.log(Object.entries('bigg')); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]

// // // returns an empty array for any primitive type except for strings (see the above example), since primitives have no own properties
// console.log(Object.entries(100)); // [ ]

// // // iterate through key-value gracefully
// const obj = { a: 5, b: 7, c: 9 };
// for (const [key, value] of Object.entries(obj)) {
//   console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
// }

// // // Or, using array extras
// Object.entries(obj).forEach(([key, value]) => {
//   console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
// });


const arr1234 = [1, 2, 3, 4, 5];
const [a, b, ...c] = arr1234;
console.log(a);  

console.log(b);

console.log(c); 