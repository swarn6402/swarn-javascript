const Marvel_Heroes = ["Captain America", "Iron Man", "Thor"]

const DC_Heroes = ["Superman", "Flash", "Batman"]

// Marvel_Heroes.push(DC_Heroes)  // takes the entire array as one element and adds it at the end of the array as an element.
// console.log(Marvel_Heroes);    // ['Captain America', 'Iron Man', 'Thor', [ 'Superman', 'Flash', 'Batman']]


// const Heroverse = Marvel_Heroes.concat(DC_Heroes) --> returns a new array so we declare a new array.
// console.log(Heroverse); --> ['Captain America', 'Iron Man', 'Thor', 'Superman', 'Flash', 'Batman']

// Spread operator:
const all_heroes = [...Marvel_Heroes, ...DC_Heroes] //concatenates and we can add more arrays to it. used more in codes.
console.log(all_heroes);

// Flat operator
const another_array = [1, 2, 3, 4, [5, 6], 7, [6, 7, [4, 5]]]
const useArray = another_array.flat(Infinity) //makes the complex array into one array
console.log(useArray);

// some more operators

console.log(Array.isArray("Tiwary"));  // checks if the input is array and returns true/false
console.log(Array.from("Swarn"));  // converts the given string into an array of strings
console.log(Array.from({name : "Swarn"})); // important for interviews. it returns empty object but there are operations that can be done here.

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]

// returns an array of the different elements together.


