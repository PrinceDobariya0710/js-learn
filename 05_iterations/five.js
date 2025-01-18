const programming = ["js","py","rb"]

programming.forEach((e)=>{
    console.log(e);
})
programming.forEach(function (e) {
    console.log(e);
})

function printMe(t){
    console.log(t);   
}
programming.forEach(printMe)

programming.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

const myCoding = [
    {
        name:"Python",
        fileName:"py"
    },
    {
        name:"JavaScript",
        fileName:"js"
    },
    {
        name:"Ruby",
        fileName:"rb"
    }
]

myCoding.forEach((element)=>{
    console.log(element.name,element.fileName);
})