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
        return "you tied you both picked rock";

    } else if (playerSelection === "paper" && computerSelection === "paper"){
        return "you tied you both picked paper";

    } else if (playerSelection === "scissors" && computerSelection === "scissors"){
        return "you tied you both picked scissors";

    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "you lost rock beats scissors";

    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        return "you won scissors beats paper";

    } else if (playerSelection === "rock" && computerSelection === "paper") { 
        return "you lost paper beats rock";

    } else if (playerSelection === "rock" && computerSelection === "scissors") { 
        return "you won rock beats scissors";

    } else if (playerSelection === "paper" && computerSelection === "scissors") { 
        return "you lost scissors beats paper";
          
    } else if (playerSelection === "paper" && computerSelection === "rock") { 
        return "you won paper beats rock";
    }
}

const playerSelection = prompt("Pick");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));



