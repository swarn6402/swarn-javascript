const myName = "swarn "
const repoCount = 10

// console.log(name +  repoCount + " github");   --> this is a way to concatenate strings but we got one better
console.log(`Hello, my name is ${myName} and my repo count is ${repoCount}`)


// looking at some methods for Strings:

const gameName = new String("Swarn-nt-starboy")

//console.log(gameName.__proto__) // for looking at all the methods and prototypes (visible in console)
//console.log(gameName.toUpperCase()) // original string remains unchanges bec its primitive and call by value
console.log(gameName.charAt(2)) // gives the character at index: 2
console.log(gameName.indexOf("n")) // gives the index of character n

const newString = gameName.substring(0, 4) // gives the sliced string and includes 0 but not 4
// console.log(newString);

const anotherString = gameName.slice(-5, 8)
console.log(anotherString);

const theName = "     Swarnjeet     "
console.log(theName.trim()) // trims the extra spaces from start and end. useful in taking some input on website

const myURL = "https://swarn.com/tiwary%2002nath"
console.log(myURL.replace('%', 'yoyo')); // replaces the selected value with the given new value

console.log(myURL.includes('swarn')) // returns true because swarn is there in the string 
console.log(myURL.includes('babu')) // returns false because babu is not there in the string

console.log(gameName.split('-')) // splits on the basis of given separator 