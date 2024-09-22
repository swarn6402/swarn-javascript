// Block scope refers to the variables inside {} curly braces such as those in if, for, or while loops.



if (true) {
    let a =10
    const b = 20
    // var c =30
} 

// console.log(a);  --> not printed and shows error because the scope of let a = 10 is limited to the if else block. This is called block scope.  
// console.log(b);  --> same as above. the block scope case is applicable  
// console.log(c);  // this is printed and its the problem of var.


/* Variables outside a function or block are Gloabal variables and they come under global scope, and those inside a block come under block scope.   */
// Global variables can be used inside a block scope. But Block variables (except var and thats why it is avoided) cannot be used outside the block.


// Nested scopes and closures:

function one() {
    const username = "Swarn"
    
    function two(){
        website = "Github"
        //console.log(username);    // the inner function can access the global as well as outer scopes that it is a block of.
        }
        two()     // executing function two() inside the scope won't print it outsie. so we call function one outside the scope to get the thing executed.
    }
one()      // this will execute the inner functions as well.


/* Example pof closures in case of a for loop*/

if(true) {
    const username = "Swarnjeet"

    if (username === "Swarnjeet") {
        const website = " Youtube"
        //console.log(`${username} studies from ${website}`);
    }
    // console.log(website)   --> this will give an error because of scope issues
}

// console.log(username);   --> this will also give an error because of scope issues


//+++++++++++++++ INTERESTING CONCEPT ++++++++++++++++++

console.log(addOne(99));     // this can be called before initialization because its an independent function
function addOne(num){
    return num + 1
}


const addTwo = function(num){
    return num + 2
}
console.log(addTwo(48));   // this cannot be called before initialization because the function is stored inside a variable.


