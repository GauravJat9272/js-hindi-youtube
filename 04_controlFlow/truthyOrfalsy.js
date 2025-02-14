const userEmail = "h@hitesh.ai"
if(userEmail){ // man lena ki true value hai
  console.log("Got User email"); 
}
else{
    console.log("Don't have user email"); 
}

// falsy values
// false , 0, -0, BigInt 0n , "", null , undefined, Nan

//truthy Values
// "0", 'fasle', " " ,[] , {}, function(){},

// if(userEmail.length === 0){ //check array is empty
//   console.log("Array is empty");
// }

// const emptyObj = {} // check object is empty or not
// if(Object.keys(emptyObj).length===0){
//     console.log("Object is empty");   
// }


// false == 0 --> true
// false ==''--->true
// 0=='' --> true

//Nullish Coalescing Operator  : null undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15
console.log(val1); //5 //10 //15 //10

// Ternary Operator
// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80")
