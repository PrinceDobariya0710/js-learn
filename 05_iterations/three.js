// Higher Order Loops

// for of

const arr = [1,2,3,4,5,6,7]
for (const element of arr) {
    console.log(element)
}

const test = "Prince"
for (const ele of test){
    console.log(`Each char is ${ele}`);
}

// Maps

const map = new Map()
map.set('IN',"India")
map.set('NZ',"New Zealand")
map.set('CA',"Canada")

console.log(map)

for (const [key,value] of map){
    console.log(`${key}:${value}`)
}