const useremail = "p@mail.com"

if (useremail){ // when you assume value has something
    console.log("User email");   
}
else{
    console.log("DOn't have user email")
}

//fasly values
// false, 0, null, undefined, -0, BigInt 0n, "",NaN

// truthy values
// true, 1,2,3.., "prince", ["err"], "0", "false", " ", [], {}, function(){}

t = []
if (t.length === 0){
    console.log("Empty Array");
    
}

const empObj = {}
if (Object.keys(empObj).length === 0){
    console.log("Empty Object");
    
} 

//Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10 // asnwer 5
val1 = null ?? 10 // answer 10
val1 = undefined ?? 15 // answer 15
console.log(val1)

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("greater than 80") : console.log("Less than 80");

