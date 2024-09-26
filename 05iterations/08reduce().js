//  .reduce() helps to "boil down" an array to a single value, which can be anything from a number to an object, depending on the logic you define in the callback function.

const myNums = [1, 2, 3, 4]

myTotal= myNums.reduce((accumulator, currentvalue) => (accumulator + currentvalue), 0)   // 0 is the initial value here.

console.log("The total is:", myTotal);    // the total is: 10

/* This is what happens under the hood:

const initialvalue = 0
myTotal = myNums.reduce(function(accumulator, currentvalue) {
          return accumulator + currentvalue
        }, initialvalue) 

*/


// Another example: 

const shoppingCart = [

    {
        itemName: "Samsung Galaxy S23 (128GB, 8GB)",
        price: 42999
    },
    {
        itemName: "Lord of the Rings Book Set",
        price: 1299
    },
    {
        itemName: "Phone cover for Samsung S23",
        price: 799
    },
    {
        itemName: "Fossil Watch",
        price: 10999
    },

]

const Total = shoppingCart.reduce((accumulator, item) => (accumulator + item.price), 0)

console.log(`Your total price is ${Total}`);    // Your total price is 56096
