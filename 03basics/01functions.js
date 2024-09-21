function SumofTwoNo(num1, num2) {    // these are called parameters
    return (num1 + num2)             // if we dont return a value, it gives undefined. and nothing gets executed after return inside a function
}


console.log(SumofTwoNo(5, 15));   // these are arguements 

// or the function can be stored in a variable like -->  result = SumofTwoNos(5, 15) and then console.log(result)

function LoginMessage(username){
    return (`Hello, ${username} has just logged in!`)
}

console.log(LoginMessage("Swarn sir"));    // Hello, Swarn sir has just logged in!

//   console.log(LoginMessage())    --> this will print undefined OR we can give a default value in the function like function LoginMessage(username = "Swarn")