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

const displayResults = document.querySelector("div");
const results = document.querySelector("p");

function playRound(humanChoice, computerChoice) {
    console.log(humanChoice);
    console.log(computerChoice);
    if (humanChoice === computerChoice) {
        displayResults.textContent = "Tie";
        results.textContent = (`Score: \nHuman: ${playerScore}\nComputer ${computerScore}`);
    }else if ((humanChoice == 'scissors') && (computerChoice == 'paper')) {
        displayResults.textContent = (`You win! ${humanChoice} beats ${computerChoice}`);
        playerScore += 1;
        results.textContent = (`Score: \nHuman: ${playerScore}\nComputer ${computerScore}`);
    }else if (humanChoice == 'paper' && computerChoice == 'rock') {
        displayResults.textContent = (`You win! ${humanChoice} beats ${computerChoice}`);
        playerScore += 1;
        results.textContent = (`Score: \nHuman: ${playerScore}\nComputer ${computerScore}`);
    }else if (humanChoice == 'rock' && computerChoice == 'scissors') {
        displayResults.textContent = (`You win! ${humanChoice} beats ${computerChoice}`);
        playerScore += 1;
        results.textContent = (`Score: \nHuman: ${playerScore}\nComputer ${computerScore}`);
    }else if (humanChoice == 'scissors' && computerChoice == 'rock') {
        displayResults.textContent = (`You lost. ${humanChoice} doesn't beat ${computerChoice}`);
        computerScore += 1;
        results.textContent = (`Score: \nHuman: ${playerScore}\nComputer ${computerScore}`);
    }else if (humanChoice == 'paper' && computerChoice == 'scissors') {
        displayResults.textContent = (`You lost. ${humanChoice} doesn't beat ${computerChoice}`);
        computerScore += 1;
        results.textContent = (`Score: \nHuman: ${playerScore}\nComputer ${computerScore}`);
    }else if (humanChoice == 'rock' && computerChoice == 'paper') {
        displayResults.textContent = (`You lost. ${humanChoice} doesn't beat ${computerChoice}`);
        computerScore += 1;
        results.textContent = (`Score: \nHuman: ${playerScore}\nComputer ${computerScore}`);
    }else{
        console.log('Error');
    }
}

function playGame() {
    /* for (i = 0; i < 5; i++) { 
        playRound(getHumanChoice(),getComputerChoice());
    } */

    
}

const btnR = document.querySelector("#rock");
const btnP = document.querySelector("#paper");
const btnS = document.querySelector("#scissors");
        
btnR.addEventListener("click", () =>{ 

    playRound(btnR.id,getComputerChoice());

});        

btnP.addEventListener("click", () =>{

    playRound(btnP.id,getComputerChoice());

})

btnS.addEventListener("click", () =>{

    playRound(btnS.id,getComputerChoice());

})


