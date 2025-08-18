# Console.log

## console is not a part of techniqal JS 
## it is debugging/developer tool or debugger
## JS runs using C++ because V8 engine that runs JS is build usin C++ 
## console bhi issi V8 enine me hota ha 

# -------------------------------
# Promises.js

==> resolve ka .then(function()) k sth connection ha
==> resolve ko agr hum yah use nhi krte to jo .then wala function ha voh execute nhi hoga
==> resolve k under hum koi bhi parameter(objectt,array etc) pass kr skte hn
==> promiseThree.then(function(user){
    console.log(user);    //yh user parameter ha jo resolve se a raha ha
    
})

==> promiseFourth.then(function(user){
    console.log("hmmmmmm");
    return user.username
}).then(function(username){     //yh syntax DB me bht use hota ha & multiple then ko bhi use kr skte hn
    console.log(username);     
}).catch(function(error){      //catch error k liay use hota ha
    return error
}).finally(function(){         //
    console.log("The promise is either resolved or rejected");
})

==> hum sirf .then .catch k ilawa async (await) ka use bhi kr skte hn 
async : thora sa wait krta ha kam k ho jane ka or agr kam ho jata ha to age execute hota ha wrna
wahin pr error de deta ha. 
isme yh ha k hum isme catch handle nhi kr skte.

==> async await ka use krte hoe hum error handlin keliay try catch ka use krte hn!

==> 
// async function getAllUsers() {
//     try {
//         console.log("jsonplaceholder user api");
        
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json();   //response.json ko bhi time lgta ha is liay isko bhi await krwana pre ga
//         console.log(data);
//     } catch (error) {
//         console.log("Error: ", error);
        
//     }
    
// }

// getAllUsers();

/*Now doing this with .then .catch */

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response.json()
}).then(function(data){    //handle the response
    console.log(data)
}).catch(function(error){
    console.log(error);
})


# watch video(no.40) from the last again for re-concept


# Interview Question :

A fetch() promise only rejects when a network error is encountered
(which is usually when there's a permissions issue or similar). A fetch()
promise does not reject on HTTP errors (404, etc.). Instead, a then ()
handler must check the Response.ok and/or Response.status properties.