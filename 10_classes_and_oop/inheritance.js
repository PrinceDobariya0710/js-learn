class User{
    constructor(username){
        this.username=username;
    }
    logMe(){console.log(`USERNAME is ${this.username}`)}
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password=password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const chai = new Teacher("chai","chai@mail.com","chaipassword")
console.log(chai)
console.log(chai.addCourse())
console.log(chai.logMe())

const chaiUser = new User("chaiUser")
console.log(chaiUser)
console.log(chaiUser.logMe())

console.log(chai instanceof Teacher)
console.log(chai instanceof User)
