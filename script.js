let playerScore = 0;
let compScore = 0;

let  getComputerChoice = () => {
    
    let computerChoice = Math.random();
    
    if (computerChoice <= 0.33) {
        computerChoice= "rock";
    } else if (computerChoice > 0.33 && computerChoice <= 0.66) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    } 
    return computerChoice;
   
    
}



const playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "rock"){
        return "you tied";

    } else if (playerSelection === "paper" && computerSelection === "paper"){
        return "you tied";

    } else if (playerSelection === "scissors" && computerSelection === "scissors"){
        return "you tied";

    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "you lost";

    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        return "you won";

    } else if (playerSelection === "rock" && computerSelection === "paper") { 
        return "you lost";

    } else if (playerSelection === "rock" && computerSelection === "scissors") { 
        return "you won";

    } else if (playerSelection === "paper" && computerSelection === "scissors") { 
        return "you lost";
          
    } else if (playerSelection === "paper" && computerSelection === "rock") { 
        return "you won";
    }
}

let game = () => {
    for (i = 0; i < 5; i++) {
        console.log(playRound(playerSelection = prompt(), computerSelection = getComputerChoice()));
    }
}
    

        





game();

