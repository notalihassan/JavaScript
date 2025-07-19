//Truthy and Falsy values

// const userEmail = "ali@gmail.com"  //output: Got user email
// const userEmail = ""               //output: not get user email
const userEmail = []               //output: Got user email

if(userEmail){
    console.log("Got user email")
}else{
    console.log("not get user email");
}


/*
Falsy Values:
------------

false, 0, -0, BigInt 0n, "",  null, undefined, NaN

Truthy Values:
------------

"0", 'false', " ", [], {}, function(){}  (this is the empty function)
*/


//to check array empty or not
if(userEmail.length === 0){
    console.log("Array is empty!");
}

//to check object empty or not
const  myObj = {
    // name: "ali"
}
if(Object.keys(myObj).length === 0){
    console.log("Array is empty!");
}else{
    console.log("Array is not empty!");
}



// Nulish Coalescing Operator (??) : null, undefined
/* 
The nullish coalescing (??) operator is a logical operator that returns its 
right-hand side operand when its left-hand side operand is null or undefined, 
and otherwise returns its left-hand side operand.
 */

let val1
// val1 = 5 ?? 10  //output: 5
// val1 = null ?? 10  //output: 10
// val1 = null ?? undefined  //output: undefined
// val1 = 10 ?? null  //output: 10
// val1 = null ?? 10 ?? 20  //output: 10 (first value)

console.log(val1);


//Conditional(ternary) Operator:

// syntax:-
// condition ? true : false;

const price = 100;

price >= 50 ? console.log("greater than 50") : console.log("less than 50");


