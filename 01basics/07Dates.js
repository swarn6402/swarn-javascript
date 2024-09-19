let myDate = new Date()
console.log(myDate.toString())   // gives a much readable date as compared to console.log(myDate)
// **console.log(typeof myDate)  --> Date is an OBJECT


// Some methods with Date:

console.log(myDate.toDateString());    // Thu Sep 19 2024
console.log(myDate.toLocaleString());  // 9/19/2024, 7:34:03 PM
console.log(myDate.toISOString());     // 2024-09-19T19:34:03.672Z
console.log(myDate.toUTCString());     // Thu, 19 Sep 2024 19:34:03 GMT
console.log(myDate.toTimeString());    // 19:34:03 GMT+0000 (Coordinated Universal Time)

let myCreatedDate = new Date(2024, 0, 26, 5, 2)  // I gave 0 as month and it returned Jan. So months start from o in JS.
// console.log(myCreatedDate.toLocaleString());    // 1/26/2024, 5:02:00 AM

myCreatedDate = new Date("06-04-2024")  // Returns the date in DD-MM-YYYY format. Here 01 is Jan.
console.log(myCreatedDate.toLocaleString())  // 6/4/2024, 12:00:00 AM


let myTimeStamp = Date.now()
console.log(myTimeStamp)  // Time in milliseconds from Jan 1970
console.log(myCreatedDate.getTime()) // returns the timestamp in milliseconds for the specific date "01-26-2024" you created using the new Date() constructor.

console.log(Math.floor(Date.now()/1000))  //gives time in seconds without decimal places



// +++++++++++++++++More methods+++++++++++++++++++++++++++
let newDate = new Date()
console.log(newDate.getMonth());   // its sept but it gives 8 bec it starts from 0. so we use .getMonth()+1
console.log(newDate.getDay()) // 4 and it thursday. day starts from monday only.

console.log(newDate.toLocaleString('default', {
    weekday: "long",
}))