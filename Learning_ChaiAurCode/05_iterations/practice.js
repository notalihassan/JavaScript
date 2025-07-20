// LOOPS:-

for(let i =1; i <=10; i++){
    console.log(`${i} Hello world!`);
}

for(let i=1; i<= 10; i++){
    let element = i;
    console.log(element);
}

//make a table 

const table = 11;

for(let i= table; i<= table; i++){
    for(let j=1; j<= 10; j++){
        console.log(i + '*' + j + '=' + i*j );
    }
    console.log(" ");
}

//

const myArray = ["Ali", "Saim", "Serfraz"];

for(let i = 0; i < myArray.length; i++){
    const element = myArray[i];
    console.log(`${i} => ${element}`);
}
console.log(" ");   //used for spacing

/* Break & Continue */

// for(let i = 1; i <= 20; i++){
    //     if(i==5){
    //         console.log("5 is detected!");
    //         break;
    //     }
//     console.log(`${i}`);
// }


for(let i = 1; i <= 20; i++){
    if(i==5){
        console.log("5 is detected!");
        continue;
    }
    console.log(`${i}`);
}