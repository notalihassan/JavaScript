/*
Scope: local and global

local(block scope): if(){ let a=1 }
global: let a = 1

scope is {}
scope if yh loops me hota ha 
Scope ka matlb ha k code sirf utna hi execute hoga jitna uska scope hoga.
*/

if(true){
    let a = 1;
    const b = 2;
    var c = 3;
}

//when we call a,b,c so only c will print due to var. so thats why we avoid var

// console.log(a);   //error
// console.log(b);   //error
console.log(c);   // 3


function one(){
    const userName = "Ali Hassan"

    function two(){
        const id = 1;
        console.log(userName);
    }

    two();  //when it is not called then there is no output bcz there is nothing to console in one().
}

one();

/* Note: Nested function mein child function parent 
function ke variables ko access kr pate hein. (also called clousure) */

if(true){
    const website = " Youtube";
    if(website === "Youtube"){
        const user = "Ali";
        console.log(user + website);
    }
    // console.log(user);   //error1: bcz user ka scope sirf if k under ha
}
// console.log(website);  //same error


/*======================= Interesting ======================= 

There are two ways of declaring function
*/

//1
function addone(num){
    return num + 1;
}

addone();
console.log(addone(5));
/*When we call addone() function before the declaring it gives no error, in this way*/


//2
const myFunc = function addtwo(num){
    return num + 2;
}

myFunc();
console.log(myFunc(3));
/*When we call myFunc() function before the declaring it gives error, in this way*/