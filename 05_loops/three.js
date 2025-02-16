// most time array ke uper forof loop and object ke uper forin loop

const myObject = {
    js: 'JavaScript',
    cpp:'c++',
    rb: 'ruby'
}
// forin loop in object
for (const key in myObject) {
    //console.log(key); //js cpp rb
    //console.log(`${key} shortcut is for ${myObject[key]}`);//js shortcut is for JavaScript  cpp shortcut is for c++ rb shortcut is for ruby
}

//in array forin loop
const programming = ["js","rb","java"]
for (const key in programming) {
   //console.log(key); // 0 1 2
  // console.log(programming[key]);//0 js 1 rb 2 java
}

 
const map = new Map()
map.set(`IN`,"India")
map.set(`US`,"United States of America")
map.set(`FR`,"France")
map.set(`IN`,"India")
for (const key in map) {
   //console.log(key); //nothing nhi ayega 
}