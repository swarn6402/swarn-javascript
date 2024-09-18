const accountId = 642002
let accountEmail = "swarnjeet@gmail.com"
var accountPassword = "12345"
accountCity = "Patna"
let accountState

// accountId = 2 is not allowed because const cannpot be changed

accountEmail = "swarn@gmail.com"
accountPassword = "67890"
accountCity = "Kolkata"

console.table([accountEmail, accountId, accountPassword, accountCity, accountState])

/*
Prefer not to use var due to issues in block scope and functional scope
*/
