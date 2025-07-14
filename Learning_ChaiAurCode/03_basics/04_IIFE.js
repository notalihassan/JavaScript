/* Immediate Invoked Function Expressions (IIFE) */

/*
======Interview Question======
global scope ke pollution se jo problem hoti ha, tu us global scope k jo variables hn yh koi 
bhhi declaration ha us pollution ko hatane k liay humne IIFE ka use kia
*/

/* 
Q1. 2 IIFE ko aik sth kese likhe ge neche given ha. but masla yh ata ha k phle IIFE me ; last me lagana prta 
*/


//this is named IIFE
(function chai(){
    console.log("ali");
 })();     //this is called IIFE

 //agr hum doabar se esa hi IIFE likhte hn to error ay ga bcz it requie end ( ; ) when we add ; at the end it works

//this is unnamed IIFE
( () => {
    console.log("hellioo");
})();


// (function code(){
//     console.log("ali 2");
//  })()     //this is called IIFE

// chai()  