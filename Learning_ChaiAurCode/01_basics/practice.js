let name = 'Ali Hassan'
let age = 18

console.log(`My name is ${name} and my age is ${age}`);

const gameName = new String('Mar-vels')

// console.log(gameName.__proto__)

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('M'));

// console.log(gameName.substring(0,5));
// console.log(gameName.slice(-8,3));
// console.log(gameName.split('-'));



// const num = 1123.889
// console.log(num.toPrecision(3));




// console.log(Math);
// console.log(Math.random());   //random() genrate random number btw 0-1
// console.log(Math.random()*10);   //to get large number
// console.log((Math.random()*10) + 1);    //to get at least 1 bcz random() may generates 0. something 
// // that will become 0 output so thats why we add 1 

// /*It gives output btw 1-9 */
// console.log(Math.floor(Math.random()*10) + 1);  //gives random number (a single digit)


// /* Get at least min value which we defined and also get some increament using random() */
// const min = 10
// const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)) + min);



let myCreatedDate = new Date("01-22-2025");
console.log(myCreatedDate.toLocaleDateString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);    //in miliseconds

console.log(myCreatedDate.getTime());

/*so we can compare these two values for quizes winner and get the person who gives answer more fastly*/
console.log(myTimeStamp);    //in miliseconds
console.log(myCreatedDate.getTime());

/*to get time in seconds instead of miliseconds so */
console.log(Date.now()/1000);   //prob is it gives decimal point value. to solve this we can do
//output: 1750741140.065
console.log(Math.floor(Date.now()/1000));
//output: 1750741203


let newDate = new Date();
console.log(newDate.toLocaleString('default', {
    weekday: "long",
    day: "2-digit"
}));
//output: 24 Tuesday
