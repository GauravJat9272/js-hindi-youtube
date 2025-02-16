/*The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.*/

const myNums = [1,2,3]
// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// },0)
// console.log(myTotal); //acc: 0 and currval: 1 acc: 1 and currval: 2 acc: 3 and currval: 3 6



//in arrow f/n
const myTotal = myNums.reduce( (acc,curr) => acc+curr,0)
console.log(myTotal); //6
