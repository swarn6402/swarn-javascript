const score = 400
console.log(score);  // gives 400

const myScore = new Number(400) // it creates a Number object, that wraps the primitive number
console.log(myScore)   // returns [Number: 400]
// console.log(typeof (myScore)) will return Object

// *some methods
console.log(myScore.toString().length)  // converts the number to string and prints the length
console.log(myScore.toFixed(2))   // returns the result upto 2 decimal places

const otherNumber = 124.8986
console.log(otherNumber.toPrecision(4)) // returns the apt value including both before and afer decimal

const bigNumber = 1000000
console.log(bigNumber.toLocaleString())  // returns the value with comma acc to US standards. 1,000,000 here.
console.log(bigNumber.toLocaleString('en-IN'))  // returns wit commas acc to Indian standards. 10,00,000 here.

// ++++++++++++++++++MATHS+++++++++++++++++++++++++++++++++++++++++

// **This is a library in Javascript with some important applications**

console.log(Math)
console.log(Math.abs(-4))      // Gives the absolute value. The negative is converted to positive. Only.

console.log(Math.round(9.18))  // Gives the nearest round off number as a whole number
// math.ceil(7.7) and math.floor(7.2) return the highest(Ceiling), and lowest(Floor) values respectively.

console.log(Math.sqrt(100))    // returns the square root
console.log(Math.pow(5, 2))    // (x,y) means x raised to the power y and returns the value

// +++++++++++++++++IMPORTANT STUFF+++++++++++++++++++++++++++++++++

console.log(Math.random())  // returns a random decimal value between 0 to 1
console.log((Math.random()*10) +1) // doing this returns the value between 1 to 10. Excludes 0 point something.


const min = 10
const max = 20
console.log(Math.floor(Math.random()* (max - min + 1) + min))
// here, we use max-min for the range in which we want the value and +1 to avoid the zero value case.
// then, +min to ensure a minimum value and then Math.floor to give a round number