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
- jb hum scope {} use krein ge filte rme to return keyword use krna prega 

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



