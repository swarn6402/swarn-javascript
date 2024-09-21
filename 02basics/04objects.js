// How to make singleton objects or use the constructor to make objects:

// const User = new Object()   --> Singleton Object
const User_one = {}                 // non-singleton object  

User_one.email = "swarn@gmail.com"
User_one.id = "ID123"
User_one.isLoggedin = false

// console.log(User_one);  // prints --> { email: 'swarn@gmail.com', id: 'ID123', isLoggedin: false }

const User_two = {
    email: "swarnjeet@gmail.com",
    UserDetails : {
        Firstname: "Swarnjeet",
        Address : {
            Street: "Fifth Avenue, 136 Street"
        }
    }
}

console.log(User_two.UserDetails.Address);  // Accessing the nested objects. this returns --> { Street: 'Fifth Avenue, 136 Street' }
// can add a ? after a key to check for it. used in web dev APi calls

const obj1 = {1 : "abc", 2 : "xyz"}
const obj2 = {3 : "efg", 4 : "def"}
const MergedObj = Object.assign({}, obj1, obj2)
// console.log(MergedObj); --> { '1': 'abc', '2': 'xyz', '3': 'efg', '4': 'def' }

const Merge_thisway = {...obj1, ...obj2}
// console.log(Merge_thisway);   // User more to merge objects together


/* IMPORTANT Object Methods for projects perspective */

console.log(Object.keys(User_one));  // returns an Array of keys--> [ 'email', 'id', 'isLoggedin' ]
console.log(Object.values(User_one));  // [ 'swarn@gmail.com', 'ID123', false ]
console.log(User_one.hasOwnProperty("isLoggedin"));   // returns true


// How values are obtained from Databases: its an array of objects.

const UserDetails = [
    {pronouns: "He/Him", name : "John"},
    {pronouns: "She/Her", name : "Helena"},
    {pronouns: "They/Them", name : "Oscar"}
]

console.log(UserDetails[0].name);    // Way to access the values. Here UserDetails[1] is used to access values of the array, then dot notation for accessing values of the object



