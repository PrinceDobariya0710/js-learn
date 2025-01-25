class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Ussername: ${this.username}`)
    }
    static createId(){
        return `123`
    }
}

const hitesh = new User("hiteshg")
// console.log(hitesh.createId())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const chai = new Teacher('chai','chai@mail.com')
console.log(chai.logMe())
console.log(chai.createId())