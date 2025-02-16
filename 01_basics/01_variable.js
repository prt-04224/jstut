const account_Id = 144553
let accountEmail = "xyz@gmail.com"
var accountPassword="12345"
// account_Id = 2 is wrong bcz we have declared a constant
accountCity="Jaipur"
accountEmail="hc@hc.com"
accountPassword="21212121"
accountCity="Bengaluru"
let accountState;
console.log(account_Id);
console.log(accountState);
console.table([accountState,account_Id,accountEmail,accountPassword,accountCity])

/*
Prefer not to use var because of issue in block scope and functional scope
*/