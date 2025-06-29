// let myArr = [1,2,3,5]
// console.log(myArr[0]);

// myArr.shift();
// console.log(myArr)

// myArr.pop();
// console.log(myArr)

// myArr.push(9);
// console.log(myArr)


/* Slice and Splice */

let myArr = [0,1,2,3,4,5];
console.log("Real array = ", myArr);

let newArr1 = myArr.slice(1,3);   // in slice starting point is index 1 & index 3 is not included
console.log("Slice array = ", newArr1);  

let newArr2 = myArr.splice(1,3,"hello");    //1 to 3 are deleted andd add "hello"
console.log("Real array = ", myArr);
console.log("Splice array = ", newArr2);




/*Objects*/
console.log("=================Objects=============")

const myObj = {
    name: "Ali Hassan",
    age: 19,
    email: "alihassan@gmail.com",
}

console.log(myObj.name);
console.log(myObj["name"]);

/*     */
const mySymbol = Symbol("name")

const obj = {
    age: 18,
    [mySymbol]: "Ali Hassan",
}

console.log(obj.age);         //output: 18
console.log(obj[mySymbol]);  //output: Ali Hassan
console.log(obj);


