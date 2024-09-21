// De-structure of Objects:

const Sport = {
    game : "Cricket",
    players : "eleven",
    ground : "Oval"
}

const {players : cricketers} = Sport  // extracting the value from an object and we can access the value just by using this. Also, players : cricketers is to rename it.
console.log(cricketers); 


//JSON:  this is a standard JSON format. API handling is used to then convert it to objects and use them.

{
    "Username" : "Swarn6402",
    "Site" : "Github",
    "Repos" : "In-Progress"
    "IsLoggedIn" : true

}