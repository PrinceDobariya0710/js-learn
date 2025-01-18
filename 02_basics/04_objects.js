// const tinderUser = new Object() // Singleton Object
const tinderUser = {} //Non-Singleton Object

tinderUser.id = 1
tinderUser.name = "sam"
tinderUser.isLoggedIn=false
// console.log(tinderUser)

const regularUser = {
    email:"some@mail.com",
    fullName: {
        userFullName: "Sam",
        userLastName: "Altman"
    }
}
// console.log(regularUser.fullName.userFullName)

const obejct1 = {
    1:"a",
    2:"b"
}
const object2 = {
    3:"a",
    4:"b"
}

const obj3 = Object.assign(obejct1,object2)
const obj4 = Object.assign({},obejct1,object2)
// console.log(obj3)
// console.log(obj4)

const obj5  = {...obejct1,...object2} // spread operator
// console.log(obj5)

const users = [
    {
        id:1,
        email:"h@email.com"
    },
    {
        id:2,
        email:"p@email.com"
    },
]

// console.log(users[1].email)

// console.log(tinderUser)

// console.log(Object.keys(tinderUser)); // to get all keys of Object and it will be returned as an Array
// console.log(Object.values(tinderUser)); // to get all values of Object and it will be returned as an Array
// console.log(Object.entries(tinderUser)); // to get all values of Object and it will be returned as an Array

// console.log(tinderUser.hasOwnProperty("isLoggedIn")); // find property of object

// destructring 
const course = {
    coursname: "JS learn",
    price:999,
    courseInstructore:"SuperMan"
}

const {courseInstructore:instructor} = course // To directly get field from an Object

console.log(instructor)


