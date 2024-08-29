 function getComputerNumber() {
    let currentRandomNumber = Math.floor(Math.random() * 3 + 1)
    console.log(currentRandomNumber);
    if (currentRandomNumber == 1){
        return 'rock';
    }else if (currentRandomNumber == 2){
        return 'paper';
    }else{
        return 'scissors';
    }

 }

 
 console.log(getComputerNumber());
 