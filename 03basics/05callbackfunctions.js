// Step 1: Define the callback function
function sayThanks() {                 
    console.log("Thankyou for joining!");    
}

// Step 2: Define a function that takes a callback as a parameter
function Greeting(name, callback){
    console.log("Hello there!", name);
    callback()     // Step 3: Execute the callback function inside this function --> This runs the 'sayThanks' function
}

//Step 4: Pass the callback function when calling the main function
Greeting("Swarn", sayThanks)



//Another example:

function Square(n) {
    return n * n
}

function Cube(n){
        return n*n*n
}

function Sum(val1, val2, callback) {
    val1 = callback(val1)
    val2 = callback(val2)
    return val1 + val2
    
}

console.log(Sum(2, 3, Square))




//Another example:

function Sqr(n) {
    let result = n * n
    return result
}

function SumofSquares(val1, val2, callback){
    val1 = callback(val1)
    val2 = callback(val2)
    return val1 + val2
}

console.log(SumofSquares(5, 2, Sqr));
