
//import HTML elements
const results = document.querySelector('.results');
const result1 = document.querySelector(".result1");
const result2 = document.querySelector(".result2");
const result3 = document.querySelector(".result3");
const computerScoreVisual = document.querySelector('#computer-score');
const playerScoreVisual = document.querySelector('#player-score');
const rockSelection = document.querySelector('#rock-selection');
const paperSelection = document.querySelector('#paper-selection');
const scissorsSelection = document.querySelector('#scissors-selection');
const container = document.querySelector('#main-container');
const gameplaySpace = document.querySelector('.gameplay');

//add event listeners
rockSelection.addEventListener('click', rockStart)
paperSelection.addEventListener('click', paperStart)
scissorsSelection.addEventListener('click', scissorsStart)



//declare global variables
let computerDecision ='';
let playerSelection = '';
let computerScore = 0;
let playerScore = 0;

function printResult (number, string) {
var number = document.createElement('p');
number.textContent = string;
results.appendChild(number);
}

function rockStart(){
    playerSelection = 'rock';
    rockSelection.classList.add('selected');
    playRound();
}

function paperStart(){
    playerSelection = 'paper';
    paperSelection.classList.add('selected');
    playRound();
}

function scissorsStart(){
    playerSelection = 'scissors';
    scissorsSelection.classList.add('selected');
    playRound();
}



    
//randomly returns either rock, paper or scissors for Computer.
function computerPlay() {
        let randomNumber = Math.random();
        if (randomNumber <0.33333) return "rock";
        else if (randomNumber <0.66667) return "paper";
        else return "scissors";
    }
    


function playRound() {
    computerDecision = computerPlay();
        //Draw calculation
        result1.textContent = "Player chooses " + playerSelection + "."
        result2.textContent = "Robot-Captor chooses " + computerDecision + "."
        if (playerSelection === computerDecision) {
            result3.textContent = 'It\'s a draw!'
        //computer wins
        } else if ((playerSelection === 'rock' && computerDecision === 'paper')|| 
                    (playerSelection === "paper" && computerDecision === 'scissors') ||
                    (playerSelection === "scissors" && computerDecision === "rock") ){
                        result3.textContent = 'Robot-Captor wins this round!'
                computerScore ++;
                
            } //player wins
        else {
            result3.textContent = 'You win this round!'
            playerScore ++;
            }
            computerScoreVisual.textContent = computerScore;
            playerScoreVisual.textContent = playerScore;
            if (computerScore === 5 || playerScore === 5) {
                gameOver();
            }
        };

function gameOver(){
    container.removeChild(gameplaySpace);
    if (computerScore === 5) {
        const h1Red = document.createElement('h1');
        h1Red.classList.add('h1Red');
        h1Red.textContent = "Game Over!";
        h1Red.style.color = "red";
        container.appendChild(h1Red);
        const pRed = document.createElement('p');
        pRed.classList.add('pRed');
        pRed.textContent = "My robot-captor has defeated you. Now I will remain enslaved forever...";
        pRed.style.color = "red";
        container.appendChild(pRed);
    } else {
        const h1Green = document.createElement('h1');
        h1Green.classList.add('h1Green');
        h1Green.textContent = "You won!";
        h1Green.style.color = "green";
        container.appendChild(h1Green);
        const pGreen = document.createElement('p');
        pGreen.classList.add('pGreen');
        pGreen.textContent = "You've defeated my robot-captor and now I am free!";
        pGreen.style.color = "white";
        container.appendChild(pGreen);
    }
    const playAgain = document.createElement('h1');
    playAgain.classList.add('playAgain');
    playAgain.textContent = "Play Again?";
    playAgain.style.color = "white";
    container.appendChild(playAgain);
    playAgain.addEventListener('click', playAgainClick);
    }   


function playAgainClick (){
    window.location.replace('index.html');
}




const buttons = document.querySelectorAll('.selection');
//console.log (buttons);

buttons.forEach(selection => selection.addEventListener('transitionend', removeTransition));

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    console.log(e.propertyName);
    this.classList.remove('selected');
}







    