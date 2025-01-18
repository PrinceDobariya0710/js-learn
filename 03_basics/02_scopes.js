
var c =200
if (true){
    let a = 10
    const b = 20
    var c = 30 //this does not works with scope and it will override the existing value
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Prince"
    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website) // out of the scope
    two()
}
one()

// Interesting
let v = addone(5)
console.log(v);
function addone(num){
    return num+1
}


console.log(addTwo(7)); // this will create ReferenceError: Cannot access 'addTwo' before initialization because it can not access it because it is holding it as a variable
const addTwo =  function(num){
    return num+2
}



