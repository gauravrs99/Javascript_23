const accountId = 74837
let accountEmail = "gaurav@google.com"
var accountPassword = "123456"
accountCity = "Mumbai"
let accountState;

// accountId = 2 // not allowed


accountEmail = "gaurav@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])