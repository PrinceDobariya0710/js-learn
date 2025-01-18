const nums = [1,2,3]

const newSum = nums.reduce((acc,currval)=>{
    console.log(acc,currval);
    
    return acc+currval
},0)

console.log(newSum);

const shoppingCart = [
    {
        itemName:"js course",
        price:200,
    },
    {
        itemName:"java course",
        price:700,
    },
    {
        itemName:"python course",
        price:33,
    }
]

const cartSum = shoppingCart.reduce((acc,item)=>{
    return acc+item.price // only access your objects and acc (accumulator is only for summing up things)
},0)
console.log(cartSum);
