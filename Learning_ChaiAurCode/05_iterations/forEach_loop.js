/* NOTE:-

for Arrays we use one of each loop:
1. map  (discuessed later)
2. forEach

*/

const coding = ["js", "cpp", "python"];


// coding.forEach( function name() {

// })

//the function used in this is called callback function
coding.forEach( function (items){   //items yh koch bhi name de skte yh array ki index pr jo values hn ussi indicate kr rha ha 
    console.log(items);
})

console.log("=====================================");   //used for spacing

// coding.forEach( name =  () => {

// })

/* Using Arrow Function:- */
coding.forEach( (items) => {
    console.log(items);
})

console.log("=====================================");   //used for spacing
//declared function used in forEach

function printMe(items){
    console.log(items);
}

coding.forEach(printMe)
console.log("=====================================");   //used for spacing

coding.forEach( (items, index, Array)=> {
    console.log(items, index, Array);
})

console.log("=====================================");   //used for spacing

/* NOTE:-
- objects in an array like api's 
- in these forEach is too much useful
*/

const myCodeing = [
    {
        name: "ali hassan",
        age: 19,
        university: "BZU",
    },
    {
        name: "Serfraz",
        age: 17,
        university: "BZU",
    },
    {
        name: "Saim",
        age: 18,
        university: "BZU",
    },
]

myCodeing.forEach( (stdData) => {    //(any name you want)
    console.log(stdData);
})

console.log("=====================================");   //used for spacing

myCodeing.forEach( (stdData) => {    //(any name you want)
    console.log(stdData.name);
})

console.log("=====================================");   //used for spacing

myCodeing.forEach( (stdData,index) => {    //(any name you want)
    console.log(index,stdData.name);
})

console.log("=====================================");   //used for spacing

myCodeing.forEach( (stdData,index) => {    //(any name you want)
    console.log(index,stdData.name,stdData.age);
})