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
    choice = choice.toLocaleLowerCase();
    return choice;
}

function playRound(humanChoice, computerChoice) {
    console.log(humanChoice);
    console.log(computerChoice);
    if (humanChoice === computerChoice) {
        console.log('tie');
        console.log(`Score: \nHuman: ${playerScore}\nComputer ${computerScore}`);
    }else if ((humanChoice == 'scissors') && (computerChoice == 'paper')) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        playerScore += 1;
        console.log(`Score: \nHuman: ${playerScore}\nComputer ${computerScore}`);
    }else if (humanChoice == 'paper' && computerChoice == 'rock') {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        playerScore += 1;
        console.log(`Score: \nHuman: ${playerScore}\nComputer ${computerScore}`);
    }else if (humanChoice == 'rock' && computerChoice == 'scissors') {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        playerScore += 1;
        console.log(`Score: \nHuman: ${playerScore}\nComputer ${computerScore}`);
    }else if (humanChoice == 'scissors' && computerChoice == 'rock') {
        console.log(`You lost. ${humanChoice} doesn't beat ${computerChoice}`);
        computerScore += 1;
        console.log(`Score: \nHuman: ${playerScore}\nComputer ${computerScore}`);
    }else if (humanChoice == 'paper' && computerChoice == 'scissors') {
        console.log(`You lost. ${humanChoice} doesn't beat ${computerChoice}`);
        computerScore += 1;
        console.log(`Score: \nHuman: ${playerScore}\nComputer ${computerScore}`);
    }else if (humanChoice == 'rock' && computerChoice == 'paper') {
        console.log(`You lost. ${humanChoice} doesn't beat ${computerChoice}`);
        computerScore += 1;
        console.log(`Score: \nHuman: ${playerScore}\nComputer ${computerScore}`);
    }else{
        console.log('Error');
    }
}

function playGame() {
    /* for (i = 0; i < 5; i++) { 
        playRound(getHumanChoice(),getComputerChoice());
    } */
}

const btnR = document.querySelector("#btnR");
const btnP = document.querySelector("btnP");
const btnS = document.querySelector("btnS");



playGame();

 