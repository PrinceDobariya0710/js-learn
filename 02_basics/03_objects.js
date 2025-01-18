// Object.create
// singleton : Whenever you are creating an object from a construtor it is singleton

// Object literals : A Way to create Objects
const mySym = Symbol("key1")

const JsUser = {
    name: "Prince",
    // mySym: "mykey1val", // not used as a Symbol and used as a String
    [mySym]: "mykey1val", // used as a Symbol
    age: 25,
    location: "india",
    email : "p@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"],
    "full name": "Princekumar Dobariya" // There is no chance you can access this kind fo variables using . operator so use square notation
}
// console.log(JsUser.name); // Not Proper way
// console.log(JsUser["name"]); // Proper way
// console.log(typeof JsUser[mySym]); // Symbol access from object

// console.log(JsUser[mySym]); // Proper way

JsUser.email = "pp@mail.com"
// console.log(JsUser)

// Object.freeze(JsUser) // to lock the editing of an Object
JsUser.email = "i@mai.com"

// console.log(JsUser["email"])

JsUser.greeting = function(){
    console.log("Greetings from Prince Object")
}

console.log(JsUser.greeting) // This will only give your reference of your function
console.log(JsUser.greeting()) // This will call your function

JsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name} welcomes you from ${this.location}`)
}

console.log(JsUser.greeting2())