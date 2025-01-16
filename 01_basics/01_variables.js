const accountId = 123456

let accountEmail= "test@mail.com"

var accountPassword = "12345@$&"

let accountState; //undefined

accountCity = "Navsari" //Not recommened approach
// accountId=22 can not change const
accountEmail = "test2@gtest.com"
accountPassword="ee@34"
/*
Prefer not to use var
because of issue in bock scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])