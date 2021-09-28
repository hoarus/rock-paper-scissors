

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

function calculateRoundResult() {
        //function singleRound

        //Calculate match
            //if userDecision & computerDecision match, return 'Draw'
            //else if userDecision = 'Rock'
                //if computerDecision = 'Paper', return 'Computer Win'
                //else return 'User Win'
            //else if userDecision = 'Scissors'
                //if computerDecision = 'Rock', return 'Computer Win'
                //else return 'User Win'
            //else if userDecision = 'Paper'
                //if computerDecision = 'Scissors', return 'Computer Win'
                //else return 'User Win'
}

let computerDecision = computerPlay();
let userDecision = prompt("Would you like to play Rock, Paper or Scissors?");

userDecision = userDecision.toLowerCase();
if (userDecisionCheck() === true){
    //calculateRoundResult();
}










    