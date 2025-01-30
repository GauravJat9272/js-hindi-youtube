// const score = 400
// console.log(score);//400

// const balance = new Number(100)
// console.log(balance);  // [Number: 100]
// console.log(balance.toString().length); //3
// console.log(balance.toFixed(2)); //100.00

// const otherNumber = 23.8966
// console.log(otherNumber.toPrecision(3)); //23.9
// const otherNumber1 = 123.8966
// console.log(otherNumber1.toPrecision(3));//124
// const otherNumber2 = 1123.8966
// console.log(otherNumber2.toPrecision(3));//1.12e+3


// const hundreds =1000000
// console.log(hundreds.toLocaleString()); //1,000,000
// const hundreds1 =1000000
// console.log(hundreds1.toLocaleString('en-IN')); //10,00,000

/***************** Maths******** */
// console.log(Math);
// console.log(Math.abs(-4));//4 isme sirf minus value plus ho jati hai only
// console.log(Math.round(4.3));//4
// console.log(Math.round(4.6));//5
// console.log(Math.ceil(4.2));//5
// console.log(Math.floor(4.9));//4
// console.log(Math.min(4,3,6,8));//3
// console.log(Math.max(4,3,6,8));//8
console.log(Math.random());// Math.random ki value hamesha 0 or 1 ke beech me hi aayegi 0 bhi ho sakti hai 1 bhi ho sakti hai
console.log((Math.random()*10) + 1);//6.3335702292681186 
console.log(Math.floor(Math.random()*10) + 1); // 1 se 9

const min =10
const max = 20
console.log(Math.floor(math.random() * (max-min+1)) + min); //min to chahiye uper ho sakta hai  //greater to min
