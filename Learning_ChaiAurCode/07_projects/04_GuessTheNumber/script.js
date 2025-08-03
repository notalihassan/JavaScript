const randomNum = parseInt(Math.random()*100+1)  //to get 0-100 value

const form = document.querySelector('form')
const guessNum = document.querySelector('#guess')
const userInput = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true 

if(playGame){
    submit.addEventListener('click', function(evnt){
        evnt.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateNum(guess); 
    })
}


function validateNum(guess){
    //validate user gives only number

    if(isNaN(guess)){
        alert("Please enter a number")
    }else if(guess > 100 || guess < 1){
        alert("Please enter a number between 0-100")
    }else{
        prevGuess.push(guess)
        if(prevGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over! Random number was ${randomNum}`)
            endGame();
        }else{
            
        }
    }
}

function checkGuess(guess){
    //to check 

}

function displayGuess(guess){
    //
}

function displayMessage(message){
    //give message

}

function endGame(){

}

function newGame(){

}



