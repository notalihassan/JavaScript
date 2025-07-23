/* forEach loop does not return any value */

const coding = ["js", "cpp", "python"];

const value = coding.forEach( (items) => {
    // console.log(items);
    return items
})

console.log(value);

console.log("=====================================");   //used for spacing

/* filter:-
----------

- return value
- filter me bhi call back function use hota ha 
- too much use and implementation in js
- jb hum scope {} use krein ge filter me to return keyword use krna (zarori ha) pre ga 

*/ 
const myNum = [1,2,3,4,5,6,7,8,9,10];

/* myNum.filter( (any name) => condition ) */
const newNum = myNum.filter( (num) => num > 4 )

console.log(newNum);

console.log("=====================================");   //used for spacing

const newNum2 = myNum.filter( (num) => {
    return num < 4
})

console.log(newNum2);

console.log("=====================================");   //used for spacing
//using forEach loop

const newNum3 = []

myNum.forEach( (num) => {
    if(num > 4){
        newNum3.push(num)
    }
})
console.log(newNum3);
console.log("=====================================");   //used for spacing

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


/* Different Results ( same working like api fetching) */

const result1 = books.filter( (BK) => BK.genre == 'History' )
console.log(result1);
console.log("=====================================");   //used for spacing

//using scope{} 

const result2 = books.filter( (BK) => {
    return BK.publish >= 2000;
})
console.log(result2);
console.log("=====================================");   //used for spacing


const result3 = books.filter( (BK) => {
    return BK.edition <= 2000 && BK.genre == 'History'
})
console.log(result3);
console.log("=====================================");   //used for spacing




