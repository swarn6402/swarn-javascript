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


