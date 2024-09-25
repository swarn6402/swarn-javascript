// While loops. Here we assign the variable before unlike in for loops.


let index = 0

while (index < 10) {
    index = index + 2 
    console.log(index)
}    // 2 4 6 8 10

//While loop with an Array

let myArray = ["Iron Man", "Spiderman", "Captain America"]
let myIndex = 0

while (myIndex < myArray.length) {
    console.log("The superhero is", myArray[myIndex]);
    myIndex = myIndex + 1     // a terminating condition is needed otherwise it will be an  infinite loop
}   
// Iron Man    Spiderman     Captain America


//do-while loops:

let score = 1
do {
    console.log(`The value is ${score}`);
    score ++
} 
while (score <= 10);


// what if the condition returns false? Here the loop will execute atleast once, and that is why do-while loops are called exit-control loops. And for and while loops are called entry controlled loops because the conditions are checked first and the the code is executed.
let myScore = 11

do {
    console.log(`The score is ${myScore}`);
    score++
} 
while (myScore <= 10);     // prints -->   The score is 11