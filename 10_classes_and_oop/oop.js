//Object Literal
const user = {
    username:"Prince",
    loginCount:8,
    isLoggedIn:true,

    getUserDetails:function(){
        console.log(`username : ${this.username}`)
    }
}

user.getUserDetails()

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){console.log("Hi")}
    return this
}

const user1 = new User('pp',3,true)
const user2 = new User('kk',3,false)
console.log(user1.constructor)

