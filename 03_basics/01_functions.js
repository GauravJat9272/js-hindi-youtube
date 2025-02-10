function sayMyName(){
    console.log("G"); 
    console.log("A");
    console.log("U");
    console.log("R");
    console.log("A");
    console.log("V");
}
//sayMyName    //reference
//sayMyName()  //Execution
//sayMyName()   //G A U R A V -->function call

// function addTwonumbers(number1, number2){ // yaha jo number1, number2 hai unhe bola jata hai parameter
//   console.log( number1 + number2);
  
// }
// addTwonumbers() //NaN
// addTwonumbers(5,3); //8  ----> yaha jo value di gai hai function call ke time 5,3 unhe arguments bola jata hai
// addTwonumbers(5,"3"); // 53
// addTwonumbers(5,null);// 5
// const result = addTwonumbers(3,5); //8
// console.log("Result:" ,result); //Result: undefined



function addTwonumbers(number1, number2){ // yaha jo number1, number2 hai unhe bola jata hai parameter
    // let result = number1+number2
    // return result  //return ke bad kuch bhi print nhi hota hai
    return number1+number2
  }
//   console.log(addTwonumbers(3,5)); //kuch nhi ayega kisi variable me savr karna padega
  
  const result = addTwonumbers(3,5)
  //console.log("Result:",result); //8


function loginUserMessage(username){
    if(username === undefined) //if(!username)
    {
        //console.log("Please enter e username");
        return
    }
 return `${username} just logged in`
}
// console.log(loginUserMessage("Gaurav"))
// console.log(loginUserMessage())//Please enter e username undefined  


function calculateCartPrice(...num1){//... rest operator 
  return num1
}
//console.log(calculateCartPrice(200,400,500,2000));//[ 200, 400, 500 ,2000]

function calculateCartPrice1(val1,val2,...num1){//... rest operator 
    return num1
  }
  //console.log(calculateCartPrice1(200,400,500,2000));//[ 500, 20000 ]

  const user = {
    username: "Gaurav",
    prices: 199
  }
  function handleObject(anyobject)
  {
    //console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
  }
  //handleObject(user) //username is Gaurav and price is 199
  handleObject({
    username: "same",
    price:399
  })

  const myNewArray = [200,400,100,600]
  function returnSecondValue(getArray){
   return getArray[1]
  }
  //console.log(returnSecondValue(myNewArray)); //400
  //console.log(returnSecondValue([200,400,500,1000])); //400
  