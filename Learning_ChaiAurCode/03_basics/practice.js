const user = {
    userName: "Ali Hassan",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.userName}, welcome to website.`);  
        console.log(this);
        
    }

}
/*
 this is the current context 
 current context: is te simple current value || kis ke bare me baat ho rhi ha 
 Arrow k under this nhi hota but kio nhi hota yh hum jane gein 
*/

user.welcomeMessage()    // output: Ali Hassan, welcome to website.
user.userName = "Serfo"  // now the userName will be changed to Serfo
user.welcomeMessage()

/* when we console this outside the scope */
console.log(this);   //output: {} empty object.
/* it is due to js engine. In browser it gives the window object */

function chai(){
    const username = "Ali";    
    console.log(this);
    console.log(this.username);   //output: undefined ( we cannot acccess this in functions like this )
}
chai();

