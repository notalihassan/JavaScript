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


