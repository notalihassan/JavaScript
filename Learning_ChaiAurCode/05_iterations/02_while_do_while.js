/* While & do while loop */

let i = 1;
while( i <= 10 ){
    console.log(` value of i = ${i}`);
    i++;    
}
console.log(" ");   //used for spacing

//using array

const myArray = ["Ali", "Serfo", "Saim"];
let index = 0;
while( index < myArray.length ){
    const element = myArray[index];
    console.log(`${element}`);  
    //OR 
    // console.log(myArray[index]) ;
    
    index++;
}
console.log(" ");   //used for spacing

//do-while

let index2 = 1;
do {
    console.log(`${index2} Hello World! `);
    index2++
} while (index2 <= 10);