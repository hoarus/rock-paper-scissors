

//function computerPlay
    //randomly returns either rock, paper or scissors.
        //either: randomly selects 1 of 3 values; or
        //use the math.random function and have if rules for <0.3333, <0.33333 < 0.677777, & >0.67777
        //return computerDecision
    //console.log decision
function computerPlay() {
    let randomNumber = Math.random();
    if (randomNumber <0.33333) return "rock";
    else if (randomNumber <0.66667) return "paper";
    else return "scissors";
}

function userDecisionCheck(){
if (userDecision === 'rock' || userDecision === 'paper' || userDecision === 'scissors') {
    return true;
    } else {
    alert("Please enter Rock, Paper or Scissors!");
    return false};
}

function playRound() {
    //Draw calculation
    if (userDecision === computerDecision) {
        console.log("Player chooses " + userDecision + ". Computer chooses " + computerDecision + ". It\'s a draw!");
        return 'draw';
    //player chooses Rock
    } else if (userDecision === 'rock'){
        if (computerDecision === 'paper') {
            console.log ("Player chooses " + userDecision + ". Computer chooses " + computerDecision + ". Computer wins!");
            return 'computer';
        }
        else {
            console.log ("Player chooses " + userDecision + ". Computer chooses " + computerDecision + ". Player wins!");
            return 'player';
        }
    //player chooses Paper
    } else if (userDecision === 'paper') {
        if (computerDecision === 'scissors') {
            console.log ("Player chooses " + userDecision + ". Computer chooses " + computerDecision + ". Computer wins!");
            return 'computer';
        }
        else {
            console.log ("Player chooses " + userDecision + ". Computer chooses " + computerDecision + ". Player wins!");
            return 'player';
        }
    //plaer chooses Scissors
    } else if (userDecision === 'scissors') {
        if (computerDecision === 'rock') {
            console.log ("Player chooses " + userDecision + ". Computer chooses " + computerDecision + ". Computer wins!");
            return 'computer';
        }
        else {
            console.log ("Player chooses " + userDecision + ". Computer chooses " + computerDecision + ". Player wins!");
            return 'player';
        }
    }
    else {
        alert("Oops! Something went wrong...");
    }
}

function game(){
    let computerScore = 0;
    let userScore = 0;
    for (let round = 0; round < 5; round++) {
        computerDecision = computerPlay();
        let roundResult = playRound();
        if (roundResult === 'computer') {
            computerScore++;
        }
        else if (roundResult === 'player') {
            userScore++;
        }
        console.log('Computer score = ' + computerScore + ". And player score = " + userScore + ".");
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
    if (computerScore > userScore) {
        console.log('Computer Wins! ' + computerScore + ' to ' + userScore + '.');
    }
    else if (userScore > computerScore) {
        console.log('Player Wins! ' + userScore + ' to ' + computerScore + '.');
    }
    else {
        console.log('It\'s a draw!');
    }
}

function nextRound(){
    userDecision = prompt("Again. Rock, Paper or Scissors?")
        if (userDecisionCheck() === false){
            nextRound();
        }
}

function executeGame(){
    userDecision = prompt("Welcome! Would you like to play Rock, Paper or Scissors?");
    userDecision = userDecision.toLowerCase();
    if (userDecisionCheck() === true){
        game();
    } else executeGame();
}

//declaring global variables
let computerDecision ='';
let userDecision = '';

//get prompt from user
executeGame();



//userDecisionCheck













    