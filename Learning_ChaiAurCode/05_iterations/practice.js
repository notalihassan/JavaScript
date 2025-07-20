/* for of loop:-

- very important and useful loop in js for apis

*/

//In JS Arrays and Objects are too much important
// ["", "", ""];
// [{}, {}, {}];


/*syntax*/
// for (const element of object) {     //element is like i used in for loop
    
// }

const myArray = [1,2,3,4,5]
for (const index of myArray) {    
    console.log(index);
}
console.log("=====================================");   //used for spacing

//

const greeting = "Hello World!";
for (const greet of greeting) {
    console.log(`Each Char of ${greeting} is ${greet}`);
    
}
console.log("=====================================");   //used for spacing

/*
 Maps: just like arrays but we further discuss in next 

- maps me values uniquerhti hein ( agr aik jese 2 entries hein to voh unko aik hi consider kre ga)
- or jis order me values enter ki hon gi ussi order me rhein gi values
*/

const myMap = new Map();
myMap.set("num", 27);

myMap.set("USA", "United States of America");
myMap.set("PK", "Pakistan");
myMap.set("IN", "India");
myMap.set("PK", "Pakistan");

// console.log(myMap.get("num"));
// console.log(myMap.get("PK"));
// console.log(myMap.get("USA"));
// console.log(myMap.get("IN"));

console.log(myMap);
console.log("=====================================");   //used for spacing


for( const index of myMap){
    console.log(index);
    
}