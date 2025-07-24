================DOM Learning===============

Events in browser are too much importannt for Interview Questions


1. Dom ko ache seekhna 
2. Events ko ache se sekhna


================ 01_dom ================

1. document(window)    //shows all things 
2. document.getElementById('firstHeading').innerHTML = "<h1>Ali Hassan</h1>"

================ 01(vid=32)_dom ================

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

const title = document.getElementById('title')

- title.style.backgroundColor = 'green'
'green'
- title.style.padding = '90px'
'90px'
- title.style.borderRadius = '25px'
'25px'


// get content:-

- title.innerHTML  (innerHTML mein hamain inner HTML likhi ho gi like (<span>Hello World!</span>) to voh pora text k sth HTML bhi show kre ga)
Learing DOM || Chai Aur Code
- title.textContent
Learing DOM || Chai Aur Code   ( agr humne css me kisi span(any text) ko display:none kia ho to yh textContent voh bhhi show krta ha baki dono above n below wale show nhi krte)
- title.innerText
Learing DOM || Chai Aur Code

// Querry Selctors:-

- document.querySelector('h2')  (gives first h2 not all)
<h2 id="heading2" >Lorem ipsum dolor sit amet.1</h2>

- document.querySelectorAll('h2')  ( gives all h2 )

- document.querySelector('#title')
  document.querySelector('.heading')

<h1 id="title" class="heading">Learing DOM || Chai Aur Code </h1>

- document.querrySelector('input[type=password]')

- document.querrySelector('p:first-child')   //css querrys used here so learn aabout it

-
