//var c=  300 //global scope
let a = 300
if(true){   //block scope
    let a = 10
    const b = 20
    //console.log("INNER:",a); // 10
    var c = 30     
}
//console.log(a); // 300
//console.log(b); 
//console.log(c); //30
  /*+++++++++++++++++++VAR++++++++++ 
  The scope of a var variable is functional or global scope.
  It can be updated and re-declared in the same scope
  It can be declared without initialization.
  It can be accessed without initialization as its default value is “undefined
  These variables are hoisted.
   +++++++++++++++++++LET++++++++++++++
   The scope of a let variable is block scope.
   It can be updated but cannot be re-declared in the same scope.
   It can be declared without initialization.
   It cannot be accessed without initialization otherwise it will give ‘referenceError
   These variables are hoisted but stay in the temporal dead zone untill the initialization.
   +++++++++++++++++++++++++CONST+++++++++++
   The scope of a const variable is block scope.
   It can neither be updated or re-declared in any scope
   It cannot be declared without initialization.
   It cannot be accessed without initialization, as it cannot be declared without initialization.
   These variables are hoisted but stays in the temporal dead zone until the initialization.
   */
 

   // NESTED SCOPE 
 function one(){  // parent ki icecream child le sakta hai par child ki icecream parent nhi le sakta hai
    //matlab ander ka function bahar ke variable ko access kar pata hai but bahar ka function ander ke function ke variable ko access nhi kar payega 
    const username = "gaurav"
    function two()
    {
        const website = "youtube"
        //console.log(username);
    }
    //console.log(website); //this is not work
    two() 
 }
 //one() //gaurav

if(true){
    const username = "hitesh"
    if(username==="hitesh")
    {
        const website = " youtube"
       // console.log(username + website); //hitesh youtube
    }
    //console.log(website);   //access nhi hoga
}
//console.log(username); //access nhi hoga



//+++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++

//console.log(addone(5)); //6 is case me declaration se pahle call kar sakte hai
function addone(num){
    return num + 1
}
//console.log(addTwo(5)); //error is case me declaration se pahle call nhi kar sakte hai
const addTwo = function(num){
    return num + 2
}
//console.log(addTwo(5));//7

