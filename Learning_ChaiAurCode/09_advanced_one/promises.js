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
        resolve()    //resolve ko agr hum yah use nhi krte to jo .then wala function ha voh execute nhi hoga
    },1000)

}).then(function(){
    console.log("promise 2!");
})

/*re */

const promiseThree = new Promise(function(resolve,reject){

    setTimeout(function(){
        console.log("Async called 3!");
        resolve({ username: "Ali Hassan", email: "ali@gmail.com"}) 
        //resolve k under hum koi bhi parameter(objectt,array etc) pass kr skte hn
        
    },1000)
})

promiseThree.then(function(user){
    console.log(user);    //yh user parameter ha jo resolve se a raha ha
    
})

//

const promiseFourth = new Promise(function(resolve,reject){

    setTimeout(function(){
        console.log("async called 4!");
        

        const error = false
        if(!error){
            resolve({username: "Ali", password: 1122})
        }else{
            reject("ERROR: Something went wrong!")
        }

    },1000)
})

promiseFourth.then(function(user){
    console.log("hmmmmmm");
    return user.username
}).then(function(username){     //yh syntax DB me bht use hota ha & multiple then ko bhi use kr skte hn
    console.log(username);     
}).catch(function(error){      //catch error k liay use hota ha
    return error
}).finally(function(){         //
    console.log("The promise is either resolved or rejected");
})


/* hum sirf .then .catch k ilawa async (await) ka use bhi kr skte hn */
/* async : thora sa wait krta ha kam k ho jane ka or agr kam ho jata ha to age execute hota ha wrna
wahin pr error de deta ha. 

isme yh ha k hum isme catch handle nhi kr skte */

const promiseFive = new Promise(function(resolve, reject){

    setTimeout(function(){

        const error = true;
        if(!error){
            resolve({ course: "JS", password: "123" })
            console.log("async called 5!");
        }else{
            reject("ERROR: JS went wrong");
        }

    },1000)
})


async function consumePromiseFive() {
    const response = await promiseFive
    console.log(response);
    
}

consumePromiseFive();