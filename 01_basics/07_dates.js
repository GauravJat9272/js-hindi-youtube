//MDN se date pado achhe se
let myDate = new Date()
// console.log(typeof myDate);//object

// console.log(myDate); //2025-02-04T10:38:06.875Z
// console.log(myDate.toString());//Tue Feb 04 2025 10:39:40 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.getDate());//4
// console.log(myDate.getDay()); //2
// console.log(myDate.getFullYear());//2025
// console.log(myDate.getHours());//10
// console.log(myDate.getMonth());//1
// console.log(myDate.toLocaleDateString()); //2/4/2025
// console.log(myDate.toLocaleString()); //2/4/2025, 10:45:11 AM

// let myCreateDate = new Date(2023,0,23) // month javascript ke ander 0 se start hote hai
// console.log(myCreateDate.toDateString()); //Mon Jan 23 2023
// let my = new Date(2003,11,21,5,3);
// console.log(my.toLocaleString()); //12/21/2003, 5:03:00 AM


// let myDatemy = new Date("2023-01-14")
// console.log(myDatemy.toLocaleString()); //1/14/2023, 12:00:00 AM
// let myDatemy2 = new Date("01-14-2023")
// console.log(myDatemy2.toLocaleString());//1/14/2023, 12:00:00 AM

// let myCreateDate2 = new Date("01-14-2023")
// let myTimeStamp = Date.now()
// console.log(myTimeStamp);//1738666691132 miliSecond
// console.log(myCreateDate2.getTime()); //1673654400000 milisecond

// console.log(Math.floor(Date.now()/1000));//1738666793 in second

let newDate = new Date()
console.log(newDate.getMonth+1); // bcz 0 se start

console.log(newDate.toLocaleString('default',{
    weekday: "long" //Tuesday
}));

