let playerScore = 0;
let computerScore = 0; 
 
 function getComputerChoice() {
    let currentRandomNumber = Math.floor(Math.random() * 3 + 1)

    if (currentRandomNumber == 1){
        return 'rock';
    }else if (currentRandomNumber == 2){
        return 'paper';
    }else{
        return 'scissors';
    }

 }

function getHumanChoice() {
    let choice = prompt('Rock, Paper, or Scissors?');
    return choice;
}

function playRound(humanChoice, computerChoice) {
    console.log(humanChoice);
    console.log(computerChoice);
    if (humanChoice === computerChoice) {
        console.log('tie');
    }else if ((humanChoice == 'scissors') && (computerChoice == 'paper')) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    }else if (humanChoice == 'paper' && computerChoice == 'rock') {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    }else if (humanChoice == 'rock' && computerChoice == 'scissors') {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    }
}

 
playRound(getHumanChoice(),getComputerChoice());

 