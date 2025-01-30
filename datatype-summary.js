 //JavaScript Dynamically typed languages because 
 //interpreter assigns variables a type at runtime based on the variables value at the time
 
 
 //primitive
 // 7 types : String, Number, Boolean , null, undefined, Symbol , BigInt
const score = 100
console.log( typeof score); //number

const scoreValue = 100.3
console.log(typeof scoreValue);  //number

const isLoggeddIn = false
console.log(typeof isLoggeddIn);  //boolean

const outsideTemp = null
console.log( typeof outsideTemp); //object

let userEmail;
console.log(typeof userEmail);  //undefined

const id = Symbol('123')
console.log(typeof id); //symbol

const anotherId = Symbol('123')
console.log(typeof anotherId)  //symbol
console.log(id===anotherId); //false
// const bigNumber = 54324532456432564n


 //Reference(Non Primitive)
 //Array , Objects, Functions

 const heros = ["shaktiman" , "naagraj", "doga"]
 console.log(typeof heros); //object
 
 let myObj = {
    name: "gaurav",
    age: 22,
 }
 console.log(typeof myObj); //object
 

const myFunction = function(){
    console.log("Hello world");  
}
console.log(typeof myFunction); //function


console.log(typeof bigNumber);  //undefined
console.log(typeof outsideTemp); //object



