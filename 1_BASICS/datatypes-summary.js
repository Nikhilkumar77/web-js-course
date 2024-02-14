//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let obj = {
    name: "nikhil",
    age: 24,
}

const myFunction = function () {
    console.log("Hello world");
}

console.log(typeof anotherId);
// **********************************************************************

// stack (primitive)   heap(non primitive)

let userone = {
    email: "nikhil@google.com",
    upi: "user@ybl"
}
console.log(userone.email);

let userTwo = userone
userTwo.email = "nikhilkumar@gmail.com"

console.log(userone.email);
console.log(userTwo.email);