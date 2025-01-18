const myNums = [1,2,3,4,5,6,7,8,9]

// const newNums = myNums.map((num)=>{
//     return num+10
// })

const newNums = myNums.map((num)=> num*10).map((num)=>num+5).filter((num)=> num < 50) // [ 15, 25, 35, 45 ]
console.log(newNums);


