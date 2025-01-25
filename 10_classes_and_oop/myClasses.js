//ES 6 

// class User{
//     constructor(username,email,password){
//         this.username=username;
//         this.email=email;
//         this.password=password
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUserName(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const user = new User("chai","chia@email.com","test")
// console.log(user.encryptPassword())
// console.log(user.changeUserName())

//behind the scene
 function User(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password
 }

User.prototype.encryptPassword = function(){
return `${this.password}abcd`
}
User.prototype.changeUserName = function(){
return `${this.username.toUpperCase()}`
}

const chai = new User("chai","chia@email.com","test")
console.log(chai.encryptPassword())
console.log(chai.changeUserName())