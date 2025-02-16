//ForEach LOOP
const coding = ["js","ruby","java","c","cpp"]
// coding.forEach( function (item) {
//     console.log(item); //js  ruby  java  c  cpp
// } )

//foreach loop with arrow f/n
// coding.forEach( (item) => {
// console.log(item); //js  ruby  java  c  cpp
// } )

// function printMe(item){
//     console.log(item); 
// }
// coding.forEach(printMe) //js  ruby  java  c  cpp

coding.forEach( (item,index,arr) => {
   // console.log(item,index,arr);
    /*js 0 [ 'js', 'ruby', 'java', 'c', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'c', 'cpp' ]
java 2 [ 'js', 'ruby', 'java', 'c', 'cpp' ]
c 3 [ 'js', 'ruby', 'java', 'c', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'java', 'c', 'cpp' ] */
} )

//array ke  ander object loop
const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "c",
        languageFileName: "c"
    }
]
myCoding.forEach( (item) => {
    console.log(item.languageName); //javascript java c
})