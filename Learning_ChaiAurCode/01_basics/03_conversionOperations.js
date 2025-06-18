let score = "hitesh"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);  //output: true

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);   //output: -3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);  //2 raise the power 3
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);   //concatinate 

// console.log("1" + 2);  //output: 12
// console.log(1 + "2");  //output: 12

/* jo first data type ho gi ussi ke lehaz se operation perform hoga */
// console.log("1" + 2 + 2);  //output: 122
// console.log(1 + 2 + "2");  //output: 32

/* Don't use these types of complex things in practicle Programming */
// console.log( (3 + 4) * 5 % 3);
// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion