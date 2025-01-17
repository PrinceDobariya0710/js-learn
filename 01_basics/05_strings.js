const name="prince"
const repoCount =22

console.log(name+ repoCount+ " Value") //Do not use

//string interpolation
console.log(`${name} has repoCount : ${repoCount} `)

const gameName = new String('Prince')

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('P'))

const t = gameName.substring(0,4)
console.log(t)

const t2 = gameName.slice(1,2)
console.log(t2)

const newString= " hhhh   "
console.log(newString.trim())

const p = "https://test.com/test2/u%20prince"
console.log(p.replace("%20","-"))
console.log(p.includes('t'))

console.log(p.split('/'))