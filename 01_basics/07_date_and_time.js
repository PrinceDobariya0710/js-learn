//Dates

let myDate = new Date()
console.log(myDate.toString()) // Sat Jan 18 2025 11:43:59 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()) // Sat Jan 18 2025
console.log(myDate.toISOString()) // 2025-01-18T06:13:59.622Z
console.log(myDate.toTimeString()) // 11:43:59 GMT+0530 (India Standard Time)
console.log(typeof myDate) // Object

let myCustomDate = new Date(2023,11,23) //month starts from 0 and to 11 // If you add 12 is January
console.log(myCustomDate.toDateString()) //Sat Dec 23 2023 

let myCustomDate2 = new Date("2023-01-14") //yyyy-mm-dd month starts from 1 and to 12 
console.log(myCustomDate2.toDateString()) //Sat Dec 23 2023 

let myCustomDate3 = new Date("05-13-2021") //mm-dd-yyyy month starts from 1 and to 12 
console.log(myCustomDate3.toLocaleString()) //Sat Dec 23 2023 

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myTimeStamp.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())

console.log(newDate.toLocaleString('default',{
    weekday: "narrow",
    timeZone: "Asia/Kolkata",
}))