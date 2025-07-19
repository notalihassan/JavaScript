//Conditional Statement

if(true){
    console.log("executed 1");
}
if( 2 == 2 ){
    console.log("executed 2");
}
if( 3 != 2 ){
    console.log("executed 3");
}
if( 2 === 2 ){
    console.log("executed 4");
}

/*
Conditional Operators:
--------------------

=  assignment op
== equal to op
=== also check data type

!== In JavaScript, !== is the strict inequality operator. 
It compares two operands and returns true if they are not equal in value OR not equal in type. 
If both the value and the type are the same, it returns false.

< , > , <= , >= , != 

*/

//SCOPE

const score = 200
if( score > 100 ){
    const power = 1000   //using const
    console.log(`Your Power: ${power}`);
}
// console.log(`Your Power = ${power}`);


/* BUT WHEN WE USE var INSTEAD OF const OR let. (var work as as global variable) */
const score2 = 200
if( score2 > 100 ){
    var power = 1000    //using var
    console.log(`Your Power: ${power}`);
}
console.log(`Your Power = ${power}`);

const balance = 1000
if(balance > 500) console.log(`your balance is ${balance}`);


//else-if conditions

const bal = 1100
if(bal < 500){
    console.log("your balance is less than 500");
}else if(bal < 700){
    console.log("your balance is less than 700");
}else if(bal < 1000){
    console.log("your balance is less than 1000");
}else{
    console.log("your balance is less than 1200");
}


//Example
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if( userLoggedIn && debitCard && 2 == 2){
    console.log("You logged In");
}

if( loggedInFromEmail || loggedInFromGoogle){
    console.log("You logged In");
}