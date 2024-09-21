// Singleton objects are created with a constructor -->  const user = new Object() //// Object.create uses an existing object to create a prototype

// Object Literals:
const mySymbol = Symbol("key1")

const JsUser = {
    name : "Swarn",
    fullname : "Swarnjeet Nath Tiwary",
    [mySymbol] : "myKey1",
    age : 22,
    location : "patna",
    email : "swarn@gmail.com",
    isLoggedin : false,
    lastLoggedin : ["Monday", "Thursday"]
}

// console.log(JsUser.email);  --> prints the email, but this isn't the best way to access objects
console.log(JsUser["email"]);   // better way to access objects. Also, "email" key while declaring objects is treated a string only.
console.log(JsUser[mySymbol]);  // IMP for interviews --> the way to declare and then access a symbol in an oobject. 

JsUser.email = "swarnjeet@google.com"  // how to change a value in an Object
Object.freeze(JsUser) // freezes the object and no changes from here on can be performed on JsUser


JsUser.greeting = function(){          // using dot notation to add the greeting method to the JsUser object. This means that now JsUser has a property called greeting, and the value of this property is a function.
    console.log("Hello JS User!");
    }

JsUser.greeting()   // calling the function and we DO NOT USE console.log(JSUser.greeting()) because it will print and then also return undefined. Also the function itself is already printing the greeting, so we just need to call it instead of printing it again.


JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}!`)     // this: Refers to the object (JsUser) that owns the method.
}
JsUser.greetingTwo()

