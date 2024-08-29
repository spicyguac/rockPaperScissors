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
    return choice;f
}



 
 console.log(getComputerChoice());
 console.log(getHumanChoice());

 