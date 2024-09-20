const myArr = [1, 2, 3, 4, 5]  // Arrays are objects. Arrays are resizable, can store multiple elements of different types and indexing starts from 0. 

const Arr = new Array("Hello", "this", "is", "Swarn", 100) // Another way of declaring an Array

// **Arrays make shallow copies, and not deep copies. This means changing a value from the copy, also changes the original array.

// const newArr = myArr
// newArr[2] = 1000

// console.log(myArr)  // [ 1, 2, 1000, 4, 5 ]
// console.log(newArr) // [ 1, 2, 1000, 4, 5 ]

// ARRAY METHODS:

const freshArray = [10, 20, 30, 40 , 50]
freshArray.push(99) // adds the given number at the end of the array
console.log(freshArray); // [ 10, 20, 30, 40, 50, 99 ]

// freshArray.pop()   --> removes the last element of the array
// freshArray.unshift(5) // [5, 10, 20, 30, 40 , 50]  --> adds elements at the start of the array. and it retruns the length if you print it.
// freshArray.shift()  --> removes the first element of the array. this returns the removed element upon printing.
console.log(freshArray.includes(9))  // returns true/false after checking if the given element exists in the array
console.log(freshArray.indexOf(20)) // returns the index of element. and returns -1 if the element is not there

const diffArr = myArr.join()
console.log(diffArr);  // .join() concatenates all array elements and returns a String. the datatype of diffArr is a String. 

// slice, splice   IMPORTANT AND INTERVIEW RELATED.

const exampleArray = myArr.slice(1, 3)  // DOES NOT MODIFY the existing array
console.log(exampleArray); 
console.log("A", myArr); // A [ 1, 2, 3, 4, 5 ] -->  We see that the original array remains unchanged

const exampleArray2 = myArr.splice(1, 3)  // MODIFIES the existing array and removes the elements
console.log(exampleArray2);  //[ 2, 3, 4 ]
console.log("B", myArr) // B [ 1, 5 ] --> We see that the original array is changes and elements 1 to 3 are removed.

