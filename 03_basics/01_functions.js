function saymyName(){
    console.log("MyName")
}

// saymyName()
function sumtwonums(x,y){ // paramaters
    console.log(x+y)
    return x+y
}
// const res = sumtwonums(2,3) //Arguments
// console.log("Result :",res)

function loginUserMessage(username){
    if (username === undefined){
        console.log("Please Enter the username");
        return
    }
    return `${username} Just logged in.`
}
// const res2 = loginUserMessage("Prince")
// console.log(res2);
// loginUserMessage()

function calculateCartPrice(val1,val2,...nums){ //rest operator to bundle values into one
    return nums
}
console.log(calculateCartPrice(200,300,400,500,1000));

const user = {
    username: "pricne",
    email:"p@mail.com"
}
function handleObj(anyObj){
    console.log(`Username : ${anyObj.username} and email is ${anyObj.email}`);
}
handleObj(user)  