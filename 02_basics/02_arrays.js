const marvel_heros = ["spiderman","ironman","hulk"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

let newCombinedArrays = marvel_heros.concat(dc_heros) // merge arrays hold it into new variable and it will return new array
// console.log(newCombinedArrays)

// Spread Operator to merge arrays

const allNewHeros = [...marvel_heros,...dc_heros] // imagine like glass fall and it spreaded into multiple pieces
// console.log(allNewHeros)

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_usable_array = anotherArray.flat(Infinity) // it will get all values from depth of arrays
// console.log(real_usable_array)

console.log(Array.isArray("Pricne")) // check is array
console.log(Array.from("Pricne")) // convert to array
console.log(Array.from({name:"RPince"})) // interesting thing about an array

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))

