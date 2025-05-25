//array
// are not fixed size 
// can store any datatypes or even mixed datatypes 

const myArr1 = [2, 4, 6, 8, 9]
const myArr2 = [2, 4, 6, 8, "nikhil",'d']

const arr = new Array(1, 5, 78, 34)

// array methods 

myArr1.push(7)

console.log(myArr1);
myArr1.pop()
console.log(myArr1);

const newArr = myArr1.join(); // changes the array to string 
console.log(newArr);
console.log(typeof newArr);


// slice,splice

console.log(myArr1.slice(1, 3)); // [ 4, 6 ] slice make a copy of the array of given range does not change the original array
console.log(myArr1);// [ 2, 4, 6, 8, 9 ]
console.log(myArr1.splice(1, 3));//[ 4, 6, 8 ]  splice extract the array of given range and modify the array 
console.log(myArr1);//[ 4, 6, 8 ]
