// const coding = ["js","ruby","java","python","cpp"]
// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item               //forEach value return nhi karta hai
// })
//console.log(values); //undefined

// const myNUms = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNUms.filter( (num) => num > 4)
//  console.log(newNums); //[ 5, 6, 7, 8, 9, 10 ]
 

 const myNUms = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNUms.filter( (num) => {
//    return num > 4
// })
//  console.log(newNums); //[5,6,7,8,9,10]


// const newNums = []
// myNUms.forEach( (num) => {
//     if(num > 4)
//     {
//         newNums.push(num)
//     }
// })
// console.log(newNums);

 books = [
    {title: 'Book One',genre: 'Fiction',publish: 1981,
        edition: 2004 },
    {title: 'Book Two',genre: 'Non_Fiction',publish: 1992,
        edition: 2008 },
    {title: 'Book Three',genre: 'History',publish: 1999,
        edition: 2007 },
    {title: 'Book Four',genre: 'Non_Fiction',publish: 1989,
        edition: 2010 },
    {title: 'Book Five',genre: 'Science',publish: 2009,
        edition: 2014 },
    {title: 'Book Six',genre: 'Fiction',publish: 1987,
        edition: 2010 },
    {title: 'Book Seven',genre: 'History',publish: 1986,
        edition: 1996 },
    {title: 'Book Eight',genre: 'Science',publish: 2011,
        edition: 2016 },
    {title: 'Book Nine',genre: 'Non_Fiction',publish: 1981,
        edition: 1989 },
]

const userBooks = books.filter( (bk) => bk.genre === 'History')
//console.log(userBooks); 
/*
[
    {
      title: 'Book Three',
      genre: 'History',
      publish: 1999,
      edition: 2007
    },
    {
      title: 'Book Seven',
      genre: 'History',
      publish: 1986,
      edition: 1996
    } ]*/

//const userBooks2 = books.filter( (bk)=> { return bk.publish>=2000})
//console.log(userBooks2);  
/*[
    {
      title: 'Book Five',
      genre: 'Science',
      publish: 2009,
      edition: 2014
    },
    {
      title: 'Book Eight',
      genre: 'Science',
      publish: 2011,
      edition: 2016
    }
  ]*/


//const userBooks2 = books.filter( (bk)=> { return bk.publish>=1995 && bk.genre ==="History"})
//console.log(userBooks2);
/*[
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  }
]*/