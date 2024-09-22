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
