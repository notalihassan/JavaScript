/* map() */

const myNum = [1,2,3,4,5,6,7,8,9,10]

//Syntax:
// myNum.map( (any name) => condition yah { return });

/*Note:-

- same call back function use hoga 
- similar to forEach loop
- According to Sir Hitesh map is good 
*/

const result = myNum.map( (num) => num + 10);
console.log(result);
console.log("=====================================");   //used for spacing

const result1 = myNum.map( (num) => num * 10 )
console.log(result1);
console.log("=====================================");   //used for spacing

/* Chaining ( useful ) */

const result2 = myNum.map( (num) => num * 10 ).map( (num) => num+1)
//OR
const result3 = myNum
                      .map( (num) => num * 10 )
                      .map( (num) => num + 1)
                      
console.log(result2);
console.log(result3);
console.log("=====================================");   //used for spacing

const result4 = myNum
                     .filter( (num) => num > 5)
                     .map( (num) => num * 100)

console.log(result4);
