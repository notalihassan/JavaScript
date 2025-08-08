# NOTES:-

## one.html

```

=> onclick hum direct image pr bhi lga skte hn but yh good approch nhi ha. jbke react me hum yh krskte hn

=> document.getElementById('owl').onclick = function(){
        alert('owl clicked')
}  
* (yh way bhi acha nhi ha is ki jagah hmain addEventListner ka use krna chaiay kio k usme zyada functionality ha)

=> document.getElementById('owl').addEventListener('click', function(evnt){
        alert('owl clicked')
    }. flase)    //goood approch
* jb hum addEventListener use krte hn to isme 3 parameter hote hn '',function,true/false. or 
 addEventListener mein default me false hi hota ha. so hum likhein yh na likhe voh false hi hoga

=> document.getElementById('owl').addEventListener('click', function(evnt){
        console.log(evnt);
        //gives browser events and environment events
    }) 

=> Mostly Interview Questions events se poche jate hn

|-> Learn about these Very Important for interview:-

> type, timestamp, defaultPrevented
> target, toElement, srcElement, currentTarget,
> clientX, clientY, screenX, screenY
> altkey, ctrlkey, shiftkey, keyCode

=> EVENT propagation:

//this is bubbling event( small to large )flase
    document.getElementById('images').addEventListener('click', function(evnt){
        console.log("clicked inside the ul");
    }, false)
    document.getElementById('owl').addEventListener('click', function(evnt){
        console.log("owl clicked");
    }, false)

//this is capturing event( large to small )true
    document.getElementById('images').addEventListener('click', function(evnt){
        console.log("clicked inside the ul");
    }, true)
    document.getElementById('owl').addEventListener('click', function(evnt){
        console.log("owl clicked");
    }, true)

=> STOP propagation

* document.getElementById('owl').addEventListener('click', function(evnt){
        console.log("owl clicked");
        evnt.stopPropagation();
    }, false)
    // bubbling nhi kre ga means upper me shift nhi hoga

=> preventDefault()

* form yh kisi bhi link ko rokna ho

```

## two.hrml

=> 2 projects of Asynchronos JS 

* The setTimeout() method of the Window interface sets a timer which executes a function or specified piece of code once the timer expires.

* To clear or stop setTimeout() use clearTimeout()

## three.html

* setInterval(function, time, parameter like string)

* To clear or stop setInterval() use clearInterval(interval)

## 05_RandomColor on click "Project" in Projects folder

## 06_Keyboard "Project" in project folder