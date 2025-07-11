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
    console.log(this.username);   //output: undefined ( we cannot acccess this in functions )
}
chai();

//OR 

// const CHAI = function code() {
//     let username = "AlI HAssan"; 
//     console.log(this);
//     console.log(this.username);
// }
// CHAI();

const CHAI = () => {
    let username = "AlI HAssan"; 
    console.log(this);
    console.log(this.username);
}
CHAI();



/*===================== Pure Arrow Function ==================*/

const add = (num1, num2) => {
    return num1 + num2;
}
console.log(add(3,7));

// OR ( implicit return )

const addThree = (num1, num2, num3) => num1+num2+num3; 
console.log(addThree(3,6,2));

// OR

const sub = (num1, num2) => (num1 - num2); 
/* this method dont require any return statement and it is used in reactJS too much */
console.log(sub(3,2));  

// to return object using implicit return
const SUB = (num1, num2) => ( {userName: "ali hassan"} );
console.log(SUB(3,2));
