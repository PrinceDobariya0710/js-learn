// IIFE (Immediately Invoked Function Expressions)

(function chai(){
    console.log("DB Connected");
    
})(); // Semicolon is needed so JS knows that IIFE needs to be end

((name)=>{
    console.log(`DB connected 2 arrow ${name}`)
})('prince');