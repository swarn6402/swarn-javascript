/* Key Differences btn Map() and Filter():

Transformation vs. Filtering:

--> map() is used when you want to transform each element in an array and return a new array of the same length.
    map() returns a new array with the same number of elements as the original array

--> filter() is used when you want to filter out elements based on a condition and return a new array that may have fewer elements.
    filter() returns a new array with fewer or equal elements, depending on how many elements meet the condition. */


// Map() method for arrays:

const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let newNumbers = Numbers.map((num) => num * 2)
console.log(newNumbers)

// Chaining operation for .map() and .filter():

const Arr = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10]

let newArr = Arr
                   .map((element) => element * 10)
                   .map((element) => element + 1)    // the array passed to a new step in a chain is always the modified result of the previous step in the chain.
                   .filter((element) => element > 40)

console.log(newArr);      // --> prints [41, 51, 61, 71, 81, 91, 101]
