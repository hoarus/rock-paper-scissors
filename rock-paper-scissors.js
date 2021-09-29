


//declare global variables
let computerDecision ='';
let playerSelection = '';

//execute Script
executeGame();

//Run game is player Decision Check passes. Otherwise, loop.
function executeGame(){
    playerSelection = prompt("Welcome! You are facing a tough contender in a game of Rock, Paper, Scissors. \n \nWhat is your weapon of choice?");
    playerSelection = playerSelection.toLowerCase();
    if (playerSelectionCheck() === true){
        game();
    } else executeGame();
}

function playerSelectionCheck(){
    if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
        return true;
        } else {
        alert("Are you trying to cheat? Please enter Rock, Paper or Scissors!");
        return false};
    }

    function game(){
        let computerScore = 0;
        let playerScore = 0;
        for (let round = 0; round < 5; round++) {
            computerDecision = computerPlay();
            let roundResult = playRound();
            if (roundResult === 'computer') {
                computerScore++;
            }
            else if (roundResult === 'player') {
                playerScore++;
            }
            console.log('Computer score = ' + computerScore + ". And player score = " + playerScore + ".");
            if (round <4) {
                alert("Round " + (round+2) + "!");
                nextRound();
            }
                //computerScore = 0
                //playerScore = 0
            //// roundResult = playRound()
                //if roundResult === 'computer', computerScore++
                //if roundResult === 'player', playerScore++
            
        }
        if (computerScore > playerScore) {
            console.log('Computer Wins! ' + computerScore + ' to ' + playerScore + '.');
        }
        else if (playerScore > computerScore) {
            console.log('Player Wins! ' + playerScore + ' to ' + computerScore + '.');
        }
        else {
            console.log('It\'s a draw! How tense... You had better reload to play again.');
        }
    }
    
//randomly returns either rock, paper or scissors for Computer.
function computerPlay() {
        let randomNumber = Math.random();
        if (randomNumber <0.33333) return "rock";
        else if (randomNumber <0.66667) return "paper";
        else return "scissors";
    }
    


function playRound() {
        //Draw calculation
        if (playerSelection === computerDecision) {
            console.log("Player chooses " + playerSelection + ". Computer chooses " + computerDecision + ". It\'s a draw!");
            return 'draw';
        //player chooses Rock
        } else if (playerSelection === 'rock'){
            if (computerDecision === 'paper') {
                console.log ("Player chooses " + playerSelection + ". Computer chooses " + computerDecision + ". Computer wins!");
                return 'computer';
            }
            else {
                console.log ("Player chooses " + playerSelection + ". Computer chooses " + computerDecision + ". Player wins!");
                return 'player';
            }
        //player chooses Paper
        } else if (playerSelection === 'paper') {
            if (computerDecision === 'scissors') {
                console.log ("Player chooses " + playerSelection + ". Computer chooses " + computerDecision + ". Computer wins!");
                return 'computer';
            }
            else {
                console.log ("Player chooses " + playerSelection + ". Computer chooses " + computerDecision + ". Player wins!");
                return 'player';
            }
        //player chooses Scissors
        } else if (playerSelection === 'scissors') {
            if (computerDecision === 'rock') {
                console.log ("Player chooses " + playerSelection + ". Computer chooses " + computerDecision + ". Computer wins!");
                return 'computer';
            }
            else {
                console.log ("Player chooses " + playerSelection + ". Computer chooses " + computerDecision + ". Player wins!");
                return 'player';
            }
        }
        else {
            alert("Oops! Something went wrong...");
        }
    }
        
function nextRound(){
        playerSelection = prompt("Again. Rock, Paper or Scissors?")
            if (playerSelectionCheck() === false){
                nextRound();
            }
    }
    











    