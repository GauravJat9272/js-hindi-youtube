const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        //console.log(this); //karke dekho run
    }
}
// user.welcomeMessage() //hitesh , welcome to website
// user.username = "sam"
// user.welcomeMessage() //sam , welcome to website
//console.log(this); //{}
//sabse jyada jo global object hai bo WINDOW object hai
//browser ke ander window object

// function chai(){
//     let username = "hitesh"
//     //console.log(this.username);   
// }
// chai() //undefined

// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username)
// }
// chai() //undefined


//++++++++++++++++++++ARROW FUNCTION++++++++++++++++++
const chai = () =>{
        let username = "hitesh"
        console.log(this.username)
    }
    //chai()//undefined

 //++++++++++++++++++++ARROW FUNCTION ++++++++++++
 //simple arrow function
 //  const addTwo = (num1,num2) => { // curly brakets me nhi likhoge to return nhi likhna
//     return num1+num2
//  }
//implicite return 
//const addTwo = (num1,num2) => num1+num2 

//const addTwo = (num1,num2) =>  ( num1 + num2 )  //paranthesis me return keyword nhi likhna hota hai
//agar object ko return karna hai tab
const addTwo = (num1,num2) =>  ({username: "hitesh"})
console.log(addTwo(3,4));
 
// const myArray = [2,5,3,7,8]
// myArray.forEach()