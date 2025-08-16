##Console.log

# console is not a part of techniqal JS 
# it is debugging/developer tool or debugger
# JS runs using C++ because V8 engine that runs JS is build usin C++ 
# console bhi issi V8 enine me hota ha 


##promises.js

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

==> 