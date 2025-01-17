// Primitive - call by value - it will copy value
// 7 types: String , Number, Boolean, null, undefined, Symbol, BigInt

// JavaScript is dynamically typed language
// TypeScript is statically typed language

// Refrence Type -> Non-Primitive : Reference is allocated in memory
// Array, Objects, Functions

const score=10
const scoreValue = 200.9
const isLoggedIn = false
const outTemp = null
let email;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id===anotherId)

const bigNumber = 12345678999999999999999999999999n
console.log(bigNumber)

// Non Primitive
const heros = ["superman","batman","ironman"]
const detail = {
    "name":"prince",
    "age":25
}
function test(){
    console.log("I am function")
}
test()

const test2 = function(){
    console.log("Hellow World")
}

// Memory Types
// Stack (Primitive) - You get a Copy, Heap (Non-Primitive)- you get a reference

let myName = "prince"
let anotherName = myName
anotherName = "test"
console.log(anotherName)
console.log(myName)

let user = {
    email : "p@mail.com",
    upi:"test@ybl"
}
let user2 = user
user2.email="pp@mail.om"
console.log(user)
console.log(user2)

