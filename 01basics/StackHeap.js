// Stack (primitive) and Heap (non-primitive) -- These are the two type of memories

// Primitive Data Types:-- Stored in Stack: In JavaScript, primitive data types (like number, string, boolean, null, undefined, and Symbol)
// are typically stored on the stack.
// Passed by value: When a primitive data type is passed to a function, a copy of its value is created. 
// This means that any changes made to the variable inside the function won't affect the original value.

let myName = "Swarn"
let anotherName = myName

anotherName = "Swarnjeet"
console.log(anotherName)



// Non-Primitive (Reference) Data Types:-- Stored in Heap: Objects and arrays in JavaScript are non-primitive data types and are stored in the heap.
// Passed by reference: When a reference to a non-primitive data type is passed to a function, a copy of the reference is created. 
// However, both the original reference and the copied reference point to the same object in the heap. 
// This means that any changes made to the object through either reference will affect the original object.

let userOne = {
    email : "Swarnjeet@gmail.com",
    upi: "ybl@123"
}

let userTwo = userOne
userTwo.email = "Swarn@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
