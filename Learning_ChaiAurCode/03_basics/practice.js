/*Functions*/

function myName() {
    console.log("Ali Hassan");
}

myName     //reference
myName()   //execution


function addTwoNumb(num1, num2) {
    console.log(num1 + num2);
}

// addTwoNumb(3,7)   //output: 10
// addTwoNumb(3,"h")   //output: 3h
// addTwoNumb(3, null)   //output: 3


//we can also check whether the given number is a number or not by if-else

/*   not correct
function addThreeNum(num1, num2, num3) {
    if(num1 == Number && num2 == Number && num3 == Number){

        console.log(num1 + num2 + num3);
    }
    else{
        console.log("NaN");
    }
}

addThreeNum(2,3,9);
*/

function addNum(num1,num2) {
    console.log(num1 + num2);
}

const result = addNum(2,5);   //output: 7
console.log("Result = ", result);    //outpur: undefined

//to solve this problem we can do like this

function subNum(num1, num2) {
    let Result = num1 - num2;
    // return Result;
    //OR
    return num1 - num2;
}

//now it gives the actual result
console.log("Result = ", subNum(9,2));    //outpur: 9-2 = 7

