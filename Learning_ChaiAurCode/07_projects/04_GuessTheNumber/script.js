const randomNum = parseInt(Math.random()*100+1)  //to get 0-100 value

// const form = document.querySelector('form')
// const numGuess = document.querySelector('#guess')
// const userInput = document.querySelector('#guessField')
// const submit = document.querySelector('#subt')
// const guessSlot = document.querySelector('.guesses')
// const remaining = document.querySelector('.lastResult')
// const lowOrHi = document.querySelector('.lowOrHi')
// const startOver = document.querySelector('.resultParas')

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');


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
        alert("Please enter a number between 1-100")
    }else{
        prevGuess.push(guess)
        if(prevGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over! Guess number was ${randomNum}`)
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    //to check guess is high or low and alert message
    if(guess === randomNum){
        displayMessage(`You Guessed the correct number!!`)
        endGame();
    }else if(guess < randomNum){
        displayMessage(`Number is tooo Low!`);
    }
    else if(guess > randomNum){
        displayMessage(`Number is tooo High!`);
    }
}

function displayGuess(guess){
    //to clean the input
    userInput.value = ''
    guessSlot.innerHTML += `${guess}  `  //dislpay guesses
    numGuess++;     //increment for guess number 1-10
    remaining.innerHTML = `${11 - numGuess}`   //remaining guesses 
}

function displayMessage(message){
    //give message
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){

}

function newGame(){

}



