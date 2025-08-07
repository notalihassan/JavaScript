## JavaScript Synchronous 

vid:37  ( imp for interview )
link: https://youtu.be/zgt5oTD3rRc?si=1-rX0ofoXqXmQlel

1. JS is Synchronous ( execute code line buy line )
2. JS is single threaded language 

3. These (1&2) points are for Default JS

4. Execution Context:
- line by line code executes
- each operation awaits for the last one to complete before executing like ( console.log() 1 then console.log() 2 ) 

5. Blocking Code(Sync) VS Non-Blocking Code(Async)

97)	Blocking Code	                        98)	Non-Blocking Code
99)	– block the flow of program            101)	– does not block the flow of prog
100)	– read file sync	               102)	– read file Async
103)	– Example: aik guest aya apke ghr  104)	– Example: same guest ko ap khte hn k me pani
ap use khte hn ke ap yaha betho Koch na          lata ho apke liay utni der tk aap
kro na mob chlao bs bethe rho utni der           mob use krlo yh Koch or kam krlo.
tk me pani le kr aya apke liay.

	 

## JavaScript Async

6.
- JS engine mein memory heap and call stck hota ha
- jb hum kisi task ko chahte hn k voh Koch der bad execute ho to hum setTimeout ka use krte hn to yh or bhi chezein hn setTimeinterval etc. So yh cheez hoti ha JS Asynchronous mein.
- Example lete hn setTimeout ki ke hum chate hn yh task 2 seconds bad execute ho to 
Call Stack se setTimeout se Register Call Back se task Queue se wapis Call stack me jata ha or task execute ho jata ha.(Asynchronous). 
- for fetch(): iske liay aik alag se promise queue hota ha ( jiski high priority hoti ha ) or yh bhi call stck me wapis return ho jata ha.

7. Interviews me in setTimeout and setTimeinterval k bare me pocha jata ha. 

