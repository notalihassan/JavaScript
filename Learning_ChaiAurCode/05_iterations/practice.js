/* Reduce */
/*Note:-

- shopping cart me bht use hota ha. Jub sb cart ka sum krna ho
*/

const myNum = [1,2,3]

const result = myNum.reduce( function (accumulator, currentValue){
    console.log(`Accumulator = ${accumulator} and CurrentValue = ${currentValue}`);
    return accumulator + currentValue;
}, 0)  //0 is the initial value

console.log(result);
console.log("=====================================");   //used for spacing


/*Working:-

- reduce me bhi call back function use hota ha
  reduce( (accumulator, currentValue) {} )
- reduce ko initial value ki zarorat hoti ha (jo arrow function me zyada clear ho jae ga)

- initial value accumulator me jae gi.
- then accumaltor + currentValue(jo array me values hongi) ki value next accumolator me a jae gi.
- same ese hi chlta jae ga or last me accumulator + currentvalue = result a jae ga.
- reduce me initial value chahiy hoti ha uske bad voh khud hi array se current or accumulator se value le leta ha. 

*/

/* using arrow function */

const myNum2 = [1,2,3]
initialValue = 0
const result2 = myNum.reduce( (accumulator, currentValue) => accumulator + currentValue, initialValue)

console.log(result2);
console.log("=====================================");   //used for spacing


/*Practice 
==========

- Sum all the price in the cart
*/

const shoppingCart = [
    {
        name: "JavaScript",
        price: 999
    },
    {
        name: "Python",
        price: 2999
    },
    {
        name: "CyberSecurity",
        price: 1999
    },
]

const initialVal = 0  //or directly write initial value in the reduce function
const priceToPay = shoppingCart.reduce( (accumaltor, cart) => accumaltor + cart.price, 0);

console.log(priceToPay);


console.log("=====================================");   //used for spacing

/* 10% off  */

const tenPerOff = shoppingCart.reduce( function (accumaltor,cart) {
    const sum =  accumaltor + cart.price;
    return sum * 0.90
}, 0)
console.log(tenPerOff);
