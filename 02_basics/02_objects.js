//singleton
// Object.create <-- ise hi constructor ki trh banaya jata hai or ise hi singleton bolte hai
//jab bhi literals ki tarah object banate hai to singleton nhi banta hai and constructore ki tarah banane par singleton banta hai

//Object literals
const mysym = Symbol("key1")
const jsUser = {
    name: "Gaurav",
    "full name": "Gaurav Jat", //isko . se access nhi kar paoge
     mysym: "myKey1",
    age: 18,
    location: "Gwalior",
    email: "gauravjat9272@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}
// console.log(jsUser.email); //gauravjat9272@gmail.com
// console.log(jsUser["email"]); //gauravjat9272@gmail.com
// console.log(jsUser["full name"]); //Gaurav Jat  agr yh . f/n use karte to access nhi kar pate
console.log(typeof jsUser.mysym); //myKey1 //string symbol ki trh use nhi ho raha abhi ye
console.log(jsUser[mysym]); 

