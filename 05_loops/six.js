// map true false nhi dekta filter true false dekhta hai

 const myNumers = [1,2,3,4,5,6,7,8,9,10]
// const newNum = myNumers.map( (num) => num + 10)
// console.log(newNum); //[11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

//or

// const newNum = myNumers.map( (num) => {return num + 10})
// console.log(newNum); //[11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

//-------------Chaining method-----------
const newNums = myNumers
               .map((num) => num*10)
               .map((num) => num+1)
               .filter( (num) => num >= 40)
console.log(newNums); //[41, 51,  61, 71,81, 91, 101]
