const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));  //output: gives only +ve value 4
// console.log(Math.round(4.6));   //output: 5
// console.log(Math.ceil(4.2));    //output: 5
// console.log(Math.floor(4.9));   //output: 4
// console.log(Math.min(4, 3, 6, 8));    //output: 3 
// console.log(Math.max(4, 3, 6, 8));    //output: 8

console.log(Math);
console.log(Math.random());   //random() genrate random number btw 0-1
console.log(Math.random()*10);   //to get large number
console.log((Math.random()*10) + 1);    //to get at least 1 bcz random() may generates 0. something 
// that will become 0 output so thats why we add 1 

/*It gives output btw 1-9 */
console.log(Math.floor(Math.random()*10) + 1);  //gives random number (a single digit)


/* Get at least min value which we defined and also get some increament using random() */
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min );