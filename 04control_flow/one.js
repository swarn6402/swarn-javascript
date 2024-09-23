// IF and ElSE conditionals:      
// Some conditional operators:  <, >, >=, <=, ==, !=, ===, !==, && (and), || (or)

const temperature = 41

if(temperature == 41) {
    console.log("temperature is 41 and hot");
}

else {console.log("temperature is above 41 and unbearable");
}

// --> temperature is 41 and hot


const balance = 500
/* if (balance == 500) console.log("test1"), console.log("test2"); */  // This is implicit scoping. its a bad practise and shoulb be avoided.

// Basic IF-ElSE

if (balance < 500) {
    console.log("balance is less than 500");
}

else if (balance == 500) {
    console.log("Balance is equal to 500");
}

else {
    console.log("Balance is more than 500");
}                                               // prints --> Balance is equal to 500

// Real-life example:

const UserLoggedin = true
const DebitCard = true
const GoogleLogin = false
const EmailLogin = true

if (UserLoggedin && DebitCard) {           // Checks for multiple (more than 2 as well) conditions and executes only if both are true
    console.log("Log in successful!");
}
else if (GoogleLogin || EmailLogin) {      // Checks for multiple conditions and executes if either one is true
    console.log("User credentials valid")
}

// this will come handy and will be used in React while creating websites.