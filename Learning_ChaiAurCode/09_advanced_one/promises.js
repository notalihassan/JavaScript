const promiseOne = new Promise(function(resolve,reject){

    /* resolve ka .then(function()) k sth connection ha  */
    setTimeout(function(){
        console.log("Async called");
        resolve();
    },1000)
    
})

promiseOne.then(function(){
    console.log("promise 1!");
    
})


// OR

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async called 2");
        resolve()
    },1000)
}).then(function(){
    console.log("promise 2!");
    
})