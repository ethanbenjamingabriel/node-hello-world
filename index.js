// commonJS: how to properly share modules from one file to another 
const addFn = require('./add');

console.log("Hello World!");

const sum = addFn(2, 3);
const sum2 = addFn(3, 4);
console.log(sum);
console.log(sum2);