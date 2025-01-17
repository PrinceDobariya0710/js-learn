let score = "123A"

console.log(typeof(score)) //string
console.log(typeof score)

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber) //NaN

// "33" -> 33
// "33abs" => NaN=> number
// true=>1 ; false=>0

let isLoggedIn = 0

let booleanisLoggedIn = Boolean(isLoggedIn)

console.log(booleanisLoggedIn)

// 1=> true
// 0 => false
// "" => false
// "prince" => true

let someNumber = 33
let stringNumber =  String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

// *********************Operations****************

let value=2
let negValue= -value
// console.log(negValue)
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/2)
console.log(2%2)

let str1="hello"
let str2=" Worls"
let str3 = str1+str2
console.log(str3)

// Never write like this
console.log("1"+2)
console.log(1+"2")
console.log("1"+2+2)
console.log(2+3+"1") 

console.log((3+4)*5%3)

console.log(+true)
console.log(+"")

let gameCounter=22
gameCounter++;
console.log(gameCounter)

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"


