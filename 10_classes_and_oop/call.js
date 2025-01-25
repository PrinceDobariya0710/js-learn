function SetUserName(username){
    //complexDB calls
    this.username = username
    console.log("called")
}

function createUser(username,email,password){
    SetUserName.call(this,username)
    
    this.email =email
    this.password=password
}

const chai = new createUser("chai","chai@fb.com","test")
console.log(chai)