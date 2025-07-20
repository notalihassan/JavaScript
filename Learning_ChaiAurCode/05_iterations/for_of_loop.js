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

/* ===============for of loop on map===========
 Maps: just like arrays but we further discuss in next 

- maps me values unique rhti hein ( agr aik jese 2 entries hein to voh unko aik hi consider kre ga)
- or jis order me values enter ki hon gi ussi order me rhein gi values
- Map() is not itteratebale in for-in loop 

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
console.log("=====================================");   //used for spacing


for( const [index, value] of myMap){
    // console.log(index + ':- ' + value);
    //OR
    console.log(index, ':- ', value);
}

console.log("=====================================");   //used for spacing

/* ================for of loop on object=============== 

objects are not iterable in for-of loop

- for object we use for-in loop (discussed in next)
*/

const myObj = {
    name: "Ali Hassan",
    age: 19,
}

for( const [key, value] of myObj){
    console.log(key, ':- ', value);
}




/* Note:-

- for-of loop gives direct values
- for-in loop gives keys and we can get values by ${myObj[key]}
- Map() is not itteratebale in for-in loop 

*/