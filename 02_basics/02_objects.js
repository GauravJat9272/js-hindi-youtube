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
// console.log(typeof jsUser.mysym); //myKey1 //string symbol ki trh use nhi ho raha abhi ye
// console.log(jsUser[mysym]); 

jsUser.email = "hitesh@chatgpt.com"; //change the value
//  console.log(jsUser);

//Object.freeze(jsUser) //not change koi bhi change nhi kar sakta freez ho gaya
// jsUser.email = "golu@gmail.com"
// console.log(jsUser);


jsUser.greeting = function(){
    // console.log("Hello js user");   
}
jsUser.greetingtwo = function(){
    // console.log(`Hello js user, ${this.name}`);   
}
// console.log(jsUser.greeting); //undefined
// console.log(jsUser.greeting()); //Hello js user
// console.log(jsUser.greetingtwo()); //Hello js user, Gaurav



/********** singleton************/

// const tinderUser = new object() //singleton object
const tinderUser = {} //non-singleton object
// console.log(tinderUser); //{}
tinderUser.id = "123abc"
tinderUser.nmae = "peter"
tinderUser.isLoggedIn = false
//console.log(tinderUser); //{ id: '123abc', nmae: 'peter', isLoggedIn: false }


const regularUser ={
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "gaurav",
            lastname: "jat"
        }
    }
}
// console.log(regularUser.fullname); //{ userfullname: { firstname: 'gaurav', lastname: 'jat' } }
// console.log(regularUser.fullname.userfullname.firstname); //gaurav

const obj1 ={1: "a",2: "b"} //merge problem
const obj2 ={3: "c",4: "d"}
const obj3 ={obj1, obj2}
// console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
const obj4 = Object.assign(obj1, obj2)
// console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
//object assign mdn se padna jarur
const obj5 = Object.assign({},obj1, obj2)
// console.log(obj5); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj6 = {...obj1, ...obj2} //most of the time ye hi use karoge for concat objects
// console.log(obj6); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);
// console.log(object.keys(tinderUser));// datatype array  { id: '123abc', nmae: 'peter', isLoggedIn: false }
// console.log(object.values(tinderUser))//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// console.log(Object.entries(tinderUser));//[ [ 'id', '123abc' ], [ 'nmae', 'peter' ], [ 'isLoggedIn', false ] ]
// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true  mtlb ye value hai ki nhi
// console.log(tinderUser.hasOwnProperty('isfrom')); //false



const course ={
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
const{courseInstructor: instructor} = course //object ko destructure means name change 
console.log(courseInstructor); //hitesh
console.log(instructor);//hitesh

// const navbar =({company}) => {

// }
// navbar(company = "hitesh") related to react

//jab bhi apko apna kam kisi or ke sir pe dal dena hai usi ko api bolte hai

//  { //jason
//   "name": "gaurav",
//   "coursename": "js in hnd",
//   "price": "free"
// }

[
    {},
    {},
    {}
]