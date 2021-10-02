
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

//add event listeners
rockSelection.addEventListener('click', rockStart)
paperSelection.addEventListener('click', paperStart)
scissorsSelection.addEventListener('click', scissorsStart)

//test event listener to remoe
window.addEventListener('keydown',removeElement);

function removeElement(){
    results.removeChild(result1);
}


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
    playRound();
}

function paperStart(){
    playerSelection = 'paper';
    playRound();
}

function scissorsStart(){
    playerSelection = 'scissors';
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
        };











    