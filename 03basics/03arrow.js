// THIS keyword in JS:

const user = {
    username : "Swarnjeet",
    location : "India",

    greeting : function(){
        console.log(`Hello ${this.username} from ${this.location} !`); 
        console.log(this);   // this keyword refers to the object that the method/function is attached to
    }
}

user.greeting()
user.username = "Alex"   // context is changed here. so we get a different result.
user.greeting()

console.log(this);    // gives {} empty object because there is no context. but its a different case in browser console for javascript.


// Arrow function in JS:

/*
const coffee = function() {
    let username = "Swarn"    
    console.log(this.username)   --> gives undefined because this is a global keyword and we attach it to a local variable username here.
    }

coffee()
*/

const addNos = (num1, num2) => {
    return (num1 + num2)
}
 
console.log(addNos(5, 25));


// Implicit return:    IMP for React

const addTwo = (no1, no2) => (no1 + no2)    // return is not written, instead just paranthesis () is used.
console.log(addTwo(5, 10));

// When we wrap the function in {} curly bracaes, then the "return" keyword is used. 
// When we use the parenthesis (), then the return keyword is not used.

/* const addTwo = (no1, no2) => ({username : Swarn})  --> Paranthesis is used to return an object as well, otherwiswe it will return undefined. */  
