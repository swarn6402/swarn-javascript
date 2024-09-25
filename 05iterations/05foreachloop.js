// array.forEach(element => {})  --->  for-each method of an array (and type of a loop) belongs to the array and executes each element with the given function definiton.

const Coding = ["Javascript", "Python", "C++", "Rust"]

Coding.forEach(function (element) {     // this function doesn't have a name because it is a callback function
    console.log("Languages are:", element);}
);


// with arrow function:

const Pet_Animals = ["Dog", "Cat", "Cow", "Horse"]
Pet_Animals.forEach((animal) => {
    console.log("Animals are:", animal);
}); 


function printme(animal) {
    console.log(animal);   
}

Pet_Animals.forEach(printme)  // printme is a callback function because it is passed to another function (forEach) and executed later within that function.


// Array of objects: This is used in database scenario while website development.

const myCode = [
    {
        language : "Javascript",
        langFile : ".js"
    },

    {
        language : "Python",
        langFile : ".py"
    },

    {
        language : "Java",
        langFile : ".java"
    }
]

 myCode.forEach((eachObject) => {
    console.log(eachObject.langFile)      // .js    .py   .java
 })

 