//for 
for (let index = 0; index < 10; index++) {
    const element = index;
    if(element==5){
        // console.log("5 is best Number");
    }
    // console.log(element);
}
// console.log(element)//not access outside the loop

for (let i = 1; i <=10; i++) {
    //console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <=10; j++) {
       // console.log(`inner loop value ${j} and inner loop ${i}`);
        // console.log(i + '*' + j + '=' + i*j);  
    }   
// }
// let myArray = ["Golu", "Bat", "Super"]
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
    //console.log(element); 
}

// break and continue
//---------------- Break -----------------
// for (let i = 1; i <= 20; i++) {
//     if(i == 5){
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`value of i is ${i}`);
// }
//---------------Continue ----------
// for (let i = 1; i <= 20; i++) {
//     if(i == 5){
//         console.log(`Detected 5`);
//         continue;
//     }
//     console.log(`value of i is ${i}`);
// }


//-------------------WHILE LOOP---------
// let i = 0
// while (i<=10) {
//     console.log(`Value of index is ${i}`);
//    i = i + 2; 
// }
// let i=0
// let myArray2 = ["Ram", "Jam", "Max"]
// while (i<myArray.length) {
//     console.log(`Value is ${myArray2[i]}`); 
//     i++;
// }

//--------------DO WHILE LOOP ------------
// let i = 11
// do {
//     console.log(`Score is ${i}`); //Score is 11
//     i++;
// } while (i<=10);