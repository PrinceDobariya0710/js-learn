const user = {
    username: "prince",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} welcome to website`) //this creates current context within scope
        console.log(this)
    }
}
// Context is current state value
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this); // {} blank object

// function chai(){
//     let username ="test"
//     console.log(this.username); //undefined
//     console.log(this);
    
    
// }
// chai()

// const chai = () => {
//     console.log("Chai welcome");
    
// }
// chai()

const addTwo1 = (num1,num2) => {
    return num1+num2 //Explicit return
}
const addTwo = (num1,num2) => num1+num2 //implicit return
const addTwo2 = (num1,num2) => (num1+num2) //implicit return
const addTwo3 = (num1,num2) => ({username:"prince"}) //implicit return


    
