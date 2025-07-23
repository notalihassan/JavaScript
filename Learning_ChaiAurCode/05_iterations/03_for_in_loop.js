/* for-in loop 

- sirf objects k liay use nhi hota isse hum or bhi xhezon ki liay use krte hn
*/
console.log("=====================================");   //used for spacing
const myObj = {
    'js': 'Java Script',
    'cpp': 'C++',
    'swift': 'Swift by Apple ❤️',
}
for (const key in myObj) {
    console.log(key);
    
}
console.log("=====================================");   //used for spacing
for(const key in myObj){
    console.log(`${key} is shortcut of ${myObj[key]}`);
}
console.log("=====================================");   //used for spacing

/* for-in loop on arrays */

const myArr = ["js", "cpp", "ruby", "python"];

for (const key in myArr) {
    // console.log(key);   //gives key
    // console.log(myArr[key]);  //gives value

    console.log(`${key} => ${myArr[key]}`)
    
}



/* Note:-
--------

- for-of loop gives direct values
- for-in loop gives keys and we can get values by ${myObj[key]}
- Map() is not itteratebale in for-in loop 

*/