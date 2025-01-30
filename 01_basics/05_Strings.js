//String ko Achhe se pado MDN and other all function of String


const name = "Gaurav"
const  repoCount = 50

// now days koi bhi use nhi karta ese
console.log(name + repoCount + "Value");//Gaurav50Value


//AAJ KAL JYADA ESE USE HOTA HAI
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //Hello my name is Gaurav and my repo count is 50

const gameName = new String('Gaurav-jat')

console.log(gameName[0]); //G
console.log(gameName.__proto__); //{}
console.log(gameName.length); //9
console.log(gameName.toUpperCase()); //GAURAVJAT
console.log(gameName.charAt(2)); //u
console.log(gameName.indexOf('t')); //8

const newString = gameName.substring(0,4) //last me jo value dali hai bo include nhi hoti hai like 4
console.log(newString); //Gaur

const anotherString = gameName.slice(-9,4)//slice me negative value de sakte hai
console.log(anotherString); //aur

const newStringOne = "    Gaurav    " 
console.log(newStringOne); //    Gaurav 
//The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.
//To return a new string with whitespace trimmed from just one end, use trimStart() or trimEnd().  
console.log(newStringOne.trim()); //Gaurav

const url = "https://gaurav.com/gaurav%20Jaat"
console.log(url.replace('%20' , '_')); //https://gaurav.com/gaurav_Jaat

console.log(url.includes('gaurav')); //true
console.log(url.includes('golu')); //false


const gameName2 = new String('Gaurav-jat-jg')
//Split ke bare me pado
console.log(gameName2.split('-')); //[ 'Gaurav', 'jat', 'jg' ]


/*
String ---------->
* anchor: ƒ anchor()
* at: ƒ at()
* big: ƒ big()
* blink: ƒ blink()
* bold: ƒ bold()
* charAt: ƒ charAt()
* charCodeAt: ƒ charCodeAt()
* codePointAt: ƒ codePointAt()
* concat: ƒ concat()
* constructor: ƒ String()
* endsWith: ƒ endsWith()
* fixed: ƒ fixed()
* fontcolor: ƒ fontcolor()
* fontsize: ƒ fontsize()
* includes: ƒ includes()
* indexOf: ƒ indexOf()
* isWellFormed: ƒ isWellFormed()
* italics: ƒ italics()
* lastIndexOf: ƒ lastIndexOf()
* length: 0
* link: ƒ link()
* localeCompare: ƒ localeCompare()
* match: ƒ match()
* matchAll: ƒ matchAll()
* normalize: ƒ normalize()
* padEnd: ƒ padEnd()
* padStart: ƒ padStart()
* repeat: ƒ repeat()
* replace: ƒ replace()
* replaceAll: ƒ replaceAll()
* search: ƒ search()
* slice: ƒ slice()
* small: ƒ small()
* split: ƒ split()
* startsWith: ƒ startsWith()
* strike: ƒ strike()
* sub: ƒ sub()
* substr: ƒ substr()
* substring: ƒ substring()
* sup: ƒ sup()
* toLocaleLowerCase: ƒ toLocaleLowerCase()
* toLocaleUpperCase: ƒ toLocaleUpperCase()
* toLowerCase: ƒ toLowerCase()
* toString: ƒ toString()
* toUpperCase: ƒ toUpperCase()
* toWellFormed: ƒ toWellFormed()
* trim: ƒ trim()
* trimEnd: ƒ trimEnd()
* trimLeft: ƒ trimStart()
* trimRight: ƒ trimEnd()
* trimStart: ƒ trimStart()
* valueOf: ƒ valueOf()
* Symbol(Symbol.iterator): ƒ [Symbol.iterator]()
* 
*/
