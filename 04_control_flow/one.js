// if
t = "myname"
if (t === "myname"){
    console.log("Condition true");
}
else{
    console.log("Condition is False");
}

// <, >, <=, >=, ==, ===, !=, !==

const  balance = 1000
// if (balance > 500) console.log("Greater than 500") //implicit scope
// if (balance > 500) console.log("Greater than 500"),console.log("test2") //implicit scope

if (balance == 1000){
    console.log("equal 1000")
}
else if(balance > 1000){
    console.log("greater than 1000");
}
else{
    console.log("Nothing")
}

const userLoggedIn = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && loggedInFromEmail && loggedInFromGoogle){
    console.log("all logged in");
    
}
if (userLoggedIn || loggedInFromEmail || loggedInFromGoogle){
    console.log("all logged in");
    
}