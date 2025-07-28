================DOM Learning===============

Events in browser are too much importannt for Interview Questions


1. Dom ko ache seekhna 
2. Events ko ache se sekhna


================ 01_dom ================
----------------------------------------

1. document(window)    //shows all things 
2. document.getElementById('firstHeading').innerHTML = "<h1>Ali Hassan</h1>"

================ 01(vid=32)_dom ================
------------------------------------------------

/* Good video watch again if any problem */

- document.getElementById('title')
<h1 id=​"title" class=​"heading">​ Learing DOM || Chai Aur Code ​</h1>​
- document.getElementById('title').getAttribute('id')
'title'
- document.getElementById('title').getAttribute('class')
'heading'
- document.getElementById('title').setAttribute('reWritePreviousId')   //it will rewrite the previous id name
- document.getElementById('title').setAttribute('title newTitle')  //use this , it will reserve the previous and add another id name


// CSS:-
-------

const title = document.getElementById('title')

- title.style.backgroundColor = 'green'
'green'
- title.style.padding = '90px'
'90px'
- title.style.borderRadius = '25px'
'25px'


// get content:-
--------------

- title.innerHTML  (innerHTML mein hamain inner HTML likhi ho gi like (<span>Hello World!</span>) to voh pora text k sth HTML bhi show kre ga)
Learing DOM || Chai Aur Code
- title.textContent
Learing DOM || Chai Aur Code   ( agr humne css me kisi span(any text) ko display:none kia ho to yh textContent voh bhhi show krta ha baki dono above n below wale show nhi krte)
- title.innerText
Learing DOM || Chai Aur Code


// Querry Selctors:-  (gives only single value)
------------------

- document.querySelector('h2')  (gives first h2 not all)
<h2 id="heading2" >Lorem ipsum dolor sit amet.1</h2>

- document.querySelectorAll('h2')  ( gives all h2 )

- document.querySelector('#title')
  document.querySelector('.heading')

<h1 id="title" class="heading">Learing DOM || Chai Aur Code </h1>

- document.querrySelector('input[type=password]')

- document.querrySelector('p:first-child')   //css querrys used here so learn aabout it

- color.style.backgroundColor = "purple"
'purple'


// Querry Selctors:-  (gives all value)
-------------------

- document.querySelectorAll('ul')
NodeList [ul]

=> NodeList is not a pure array(array jesa ha). (bcz isme only forEach ha map given nhi ha)

-  const myColor = document.querySelectorAll('ul')

myColor[0].style.backgroundColor = "yellow"
'yellow'

- NodeList me forEach use krna ha kion ke NodeList me map nhi ha.

- Agr NodeList pr Map() use krna ha to usse convert krna pre ga Array me.


// getElementByClassName:-
-------------------------

- isme hmain HTMLCollection milta ha. 
- agr hamin is pr map() use krna ha to same isse bhi convert krna ho ga Array me.

=> How to Covert HTMLCollection to Array?
-----------------------------------------

- const myClass = document.getElementsByClassName('class-items')
  HTMLCollection(3) [li.class-items, li.class-items, li.class-items]

- Array.from(myClass)   /* conversion */
(3) [li.class-items, li.class-items, li.class-items]

- const myConvertedArray = Array.from(myClass)
(3) [li.class-items, li.class-items, li.class-items]

- myConvertedArray.forEach( (li) => {
    li.style.color = "pink"
} )  

=> so it works 


================ 02_dom ================
----------------------------------------


console.log(parent.children);   //gives HTMLCollection

for(let i = 0; i < parent.children.length; i++){
        console.log(parent.children[i]);
    }
   
parent.children[1].style.color = "yellow"
console.log("=======================================");

//Parent to Child
    console.log(parent.firstElementChild);
    console.log(parent.lastElementChild);
    console.log("=======================================");

//Child to Parent
    const dayOne = document.querySelector('.day')
    console.log(dayOne);
    console.log(dayOne.parentElement);    
    console.log(dayOne.nextElementSibling);

  console.log("=======================================");
    
//NodeList (childNodes is too much used in React)
    console.log("NODES: ", parent.childNodes);  //gives NodeList


================ 03_dom ================
----------------------------------------



