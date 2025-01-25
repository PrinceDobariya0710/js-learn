let myHeroes = ["spiderman","thor"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.prince =  function(){ //acccessing top level hierrachy 
    console.log("Prince is presnet in all object")
}

Array.prototype.heyPrince = function(){console.log("Calling from array")}
heroPower.prince()
myHeroes.prince()
myHeroes.heyPrince()

//inheritance old way
const User = {
    name:'chai'
}
const Teacher = {
    makeVideo:true
}
const TeachingSupport = {
    isAvailable:false
}
const TASupport = {
    makeAssignment:"JS ASSIGNMENT",
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User


//Modern syntax inheritance

Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherUserName = "Prince     "
String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length is : ${this.trim().length}`)
}
anotherUserName.trueLength()  