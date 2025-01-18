//for 

for (let index = 0; index <= 10; index++) {
    const element = index;
    if (element == 5){
        console.log("5 is the best number");
    }
    console.log(element);
}

const arr = ["test1","test2","test3"]
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);
}

// for (let i = 0; i <=10; i++) {
//     console.log(`Outer loop value: ${i}`);
//     for (let j = 0; j <=10; j++) {
//         console.log(i + '*' + j + '='+i*j);
//     }
// }

console.log("Iterating through array");
let myArray = ["prince","test","rahl","sam","altman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element)
    if (index == 5){
        break
    }
    
}
for (let index = 0; index < 10; index++) {
    const element = index;
    if (index == 5){
        continue
    }
    console.log(element)
    
}
