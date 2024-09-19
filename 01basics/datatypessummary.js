//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // the two of them have different values



// Reference (Non primitive)

// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"]; // array
let obj = {
    name: "Swarnjeet",
    age: 22
}                                              // object

const myFunc = function(){
    console.log("Helo World");                // function
}

console.log(typeof heroes);   // the datatype of the reference dataypes is object. (for functions its func obj)
