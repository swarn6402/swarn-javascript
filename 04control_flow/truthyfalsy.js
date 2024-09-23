/* Falsy vales are the values that return false when used in boolean context especially in conditionals and loops.
   Example pf falsy values: false, 0, -0, "", null, undefined, 0n(BigInt), NaN  */

const UserEmail = false

if(UserEmail) {
    console.log("Got user email");
}

else {
    console.log("Email not found");
   
}   //  Email not found

/* Truthy values retun true in boolean context. All values except the falsy ones are truthy values
   Some imp truthy values: "0", 'false', "", [], {}, function(){}    */

const myEmail = true

if(myEmail) {
    console.log("Got user email");
}

else {
    console.log("Email not found");
   
}   // Got user email