// for-in loops:  for...in loops are particularly designed for objects and return the keys of the object

const myObj = {
    JS : "Javascript",
    Py : "Python",
    Cpp : "C++",
    Rb : "Ruby on Rails"
}

for (const key in myObj) {
        console.log(`${key} is the shortcut for ${myObj[key]}`);    
    }


// for-in loops for Array:   Avoid for...in on arrays because it may return unexpected properties

const Programming = ["Javascript", "Python", "C++", "Ruby on Rails"]

for (const proglang in Programming) {
        console.log(`${Programming[proglang]}`);
    }
