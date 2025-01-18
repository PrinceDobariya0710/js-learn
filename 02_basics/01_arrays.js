// array

const myArr = [0,2,true,"prince"]
const myheros = ["ironman","hulk"]
const myArr2 = new Array(1,2,3,4,5)
 
// console.log(myArr[0])

myArr.push("newitem")
myArr.push("7")
myArr.pop()

myArr.unshift(9) // add item at the start of an array
myArr.shift() // remove first item of an array


// console.log(myArr.includes(7))
// console.log(myArr.indexOf("prince"))

const newArr = myArr.join() // convert array into String

// console.log(myArr)
// console.log(newArr)

// slice and splice
console.log("Original Array :",myArr)

const newn1 = myArr.slice(1,3) //3rd will not included
console.log("Original :",newn1)
console.log("Sliced array :",myArr)

const newn2 = myArr.splice(1,3) //3rd will be included and it manipulates originial array
console.log("Spliced array :",newn2)
console.log("Original :", newn1)


