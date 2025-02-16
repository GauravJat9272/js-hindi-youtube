//for of loop
// ["","",""] //String in Array
// [{},{},{}] //Object in Array

const arr = [1,2,3,4,5]
for (const num of arr) {
    //console.log(num); 
}

const greeting = "Hello world!"
for (const greet of greeting) {
   // console.log(`Each char is ${greet}`);
}

// ------------ Maps ----------
// unique and duplicate nhi hoti isme
//The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
const map = new Map()
map.set(`IN`,"India")
map.set(`US`,"United States of America")
map.set(`FR`,"France")
map.set(`IN`,"India")
//console.log(map); //Map(3) {  'IN' => 'India',  'US' => 'United States of America','FR' => 'France'}
for (const [key , value] of map) {
    // console.log(key,':-' ,value); //IN :- India US :- United States of America FR :- France
}

const myObject = {
    'game1':'NFS',
    'game2':'Spiderman'
}
//forof not work like in object
// for (const [key , value] of myObject) {
//     console.log(key,':-' ,value); 
// }