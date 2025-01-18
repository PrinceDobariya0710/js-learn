const myObject = {
    js:'Javascript',
    py:'Python',
    cpp:"C++",
    rb:"Ruby"
}

for (key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);    
}

const programming = ["js","py","rb"]

for (key in programming){
    console.log(programming[key])
}