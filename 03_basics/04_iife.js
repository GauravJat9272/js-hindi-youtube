// Immediately Invoked Function Expressions (IIFE)
//iife -: jo function immediately  exexute ho jaye or global scope ke polution se problem hoti hai kai bar  to us pollution ko hatane ke liye hamane iife ka use kiya 
(function chai()
{ // named iife bcz iska name hai chai
    console.log(`DB CONNECTED`);
})();   // semi colom lagana for terminating //DB CONNECTED
 

( (name) => { //arrow f/n
    // simple iife bcz iska koi name nhi hai
    console.log(`DB CONNECTED TWO ${name}`);
    
})(`hitesh`) //DB CONNECTED TWO hitesh