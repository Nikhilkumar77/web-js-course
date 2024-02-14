const num = 100
console.log(num);
const number = new Number(100.28)
console.log(number);
console.log(number.toString());
console.log(number.toString().length);
console.log(number.toFixed(2));
console.log(number.toPrecision(4));

//********************************************************************* */

// to generate random number between range min amd max 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);