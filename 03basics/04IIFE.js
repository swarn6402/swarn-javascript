/* Immediately Invoked Function Expression (IIFE): 
   Used to avoid the problem of pollution due to the declarations/variables of the global scope
   and also used to immediately execute the function. Usage: ()() */

(function chai(){                // this is a named IIFE and the next function is the unnamed IIFE
    console.log(`DB connected`)
}) () ;                          // Semi-colon is used to end the context and to declare another function/code

//the entire () function is treated as one function definition, and then () is execution call used to just execute it


( (TheName) => {console.log(`The name is ${TheName}, James ${TheName}`);
} ) ("Bond")       

// The name is Bond, James Bond. Here we give the parameter TheName and then it is called by giving the argument "Bond" just like in a normal function.

