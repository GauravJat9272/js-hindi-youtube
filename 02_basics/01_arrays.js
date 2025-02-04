//array
//array document padna MDN se Most important
const myArr = [0,1,2,3,4,5]
const myHeors = ["Gaurav" , "Jat"]
const myArr2 = new Array(1,2,3,4)

//Array methods
myArr.push(6) //push to add value in array
myArr.push(7)
// console.log(myArr); //[0, 1, 2, 3, 4, 5, 6,7]
myArr.pop() // pop last value ko remove kar deta hai
// console.log(myArr);//[0, 1, 2, 3, 4, 5, 6]

myArr.unshift(9) // unshift se starting me value add
// console.log(myArr); //[9, 0, 1, 2, 3, 4, 5, 6]
myArr.shift() //shift remove the value from starting
// console.log(myArr); [0, 1, 2, 3, 4, 5, 6]


// console.log(myArr.includes(9)); //false mtlb 9 hai ki nhi
// console.log(myArr.indexOf(9)); //-1
// console.log(myArr.indexOf(3)); //3

const newArr = myArr.join() //Adds all the elements of an array into a string , separated by the specified separator string
// console.log(myArr);[0, 1, 2, 3, 4, 5, 6]
// console.log(newArr); // 0,1,2,3,4,5,6

// console.log(typeof myArr); //object
// console.log(typeof newArr); // string
 

//slice , splice
// console.log("A",myArr); //A [0, 1, 2, 3, 4, 5, 6]
// const myn1 = myArr.slice(1,3)  //3 include nhi hota
// console.log(myn1); //[ 1, 2 ] 
// console.log("B",myArr); //B [0, 1, 2, 3, 4, 5, 6]

// const myn2 = myArr.splice(1,3) // original array ko manipulate karta hai
// console.log("C",myArr); //C [ 0, 4, 5, 6 ]
// console.log(myn2); //[ 1, 2, 3 ]


//Array ke or method padna
const marvel_heros = ["thor","Ironmen","spiderman"]
const dc_heros = ["supermna","flash","batman"]

//marvel_heros.push(dc_heros)
// console.log(marvel_heros); //[ 'thor', 'Ironmen', 'spiderman', [ 'supermna', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]); //flash

const allheros = marvel_heros.concat(dc_heros) //concat use
// console.log(allheros); //[ 'thor', 'Ironmen', 'spiderman', 'supermna', 'flash', 'batman' ]

const all_new_heros = [...marvel_heros, ...dc_heros] // ese hi spread operator ki help se ... laga ke add kar sakte hai kitne bhi array
// console.log(all_new_heros); //[ 'thor', 'Ironmen', 'spiderman', 'supermna', 'flash', 'batman' ]

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = anotherArray.flat(Infinity)
// console.log(real_another_array); //[1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// console.log(Array.isArray("Gaurav")); //false
// console.log(Array.from("Gaurav")); //[ 'G', 'a', 'u', 'r', 'a', 'v' ]

// console.log(Array.from({name: "Gaurav"})); //[] interesting case


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)); //[ 100, 200, 300 ]
