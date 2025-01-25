const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    // |DB calls. cryptography, network
    setTimeout(()=>{console.log("Task complete")
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("Async task 2");
        resolve()   
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})

const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username:"prince",password:"prince@mail.com"})
    },2000)
}).then((data)=>{
    console.log(data)
})

const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true
        if (!error){
            resolve({username:"prince",password:"prince@mail.com"})
        }
        else{
            reject('ERROR: Something went wrong in PromiseFour')
        }
    },1000)
})
const username = promiseFour.then((user)=>{
    console.log(user)
    return user.username

}).then((username)=>{
    console.log(username);
    
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("Finally called for promise 4")
})

const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = false
        if (!error){
            resolve({username:"prince",password:"prince@mail.com"})
        }
        else{
            reject('ERROR: Something went wrong in promiseFive')
        }
    },1000)
})

async function consumeFive() {
    try {
        const response = await promiseFive
    console.log(response);
}
    catch (error){
        console.log(error)
    }
}
consumeFive()

async function getAllUsers() {
    try{
        const resp = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await resp.json()
        console.log(data)
    }
    catch (error){
        console.log(error)
    }
    
}

getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((data)=>{
    return data.json()
})
.then((userData)=>{
    console.log(userData)
})
.catch((error)=>{
    console.log(error)
})