// FOR Loops:

for (let i = 0; i <= 10; i++) {
    const Mynumber = i
    if (i == 5){
        console.log("The number is 5 right now");
    }
    console.log(Mynumber);
}    

//1 2 3 4 The number is 5 right now 6 7 8 9 10 --- > All printed in new lines. to print without newLine, we use process.stdout.write(Mynumber + " ")

// Write a for loop to print the multiplication tables from 1 to 10
// nested loops
for (let i = 1; i <= 10; i++) {
    console.log("Outer loop is:", i)

    for (let j = 1; j <= 10; j ++) {
        console.log(`${i} * ${j} = ${i*j}`)
    }   
}

// for loop for an array

let myArray = ["Batman", "Superman", "Flash"]

for (i = 0; i < myArray.length; i ++) {
    const element = myArray[i]
    console.log(element);   
}   // prints Batman Superman Flash


//break:   the condition is skipped and the loop also stops iterating

for (let i = 1; i <= 20; i++) {
    if (i == 5) {               // Exit the loop when i is 5
        console.log("The number is 5. Break now!")
        break
    }
   console.log("The value of i is: ", i);
}   // The value of i is:  1   The value of i is:  2   The value of i is:  3   The value of i is:  4    The number is 5. Break now!


//continue:     // the condition is skipped but the loop continues.
for (let i = 1; i <= 20; i++) {
    if (i == 5) {    //Skip the iteration when i is 5

        console.log("The number is 5. But continue.")
        continue
    }
   console.log("The value of i is: ", i);
}  