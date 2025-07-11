const user = {
    userName: "Ali Hassan",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.userName}, welcome to website.`);  /* this is the current context */
    }

}
/* Arrow k under this nhi hota but kio nhi hota yh hum jane gein*/