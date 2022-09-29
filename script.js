/* UI Event Listeners */

const rok = document.getElementById("rock");
const pape = document.getElementById("paper");
const sciss = document.getElementById("scissors");

rok.addEventListener("click", (e) => {
    console.log(playRound("rock", getComputerChoice()));
})



//Set scores to zero//
let playerScore = 0;
let compScore = 0;

//Make function that picks a random number and assigns it to either rock, paper or scissors//

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


//Make function that plays the game for one round//


const playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "rock"){
        return "you tied, you both picked rock";

    } else if (playerSelection === "paper" && computerSelection === "paper"){
        return "you tied, you both picked rock";

    } else if (playerSelection === "scissors" && computerSelection === "scissors"){
        return "you tied, you both picked rock";

    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "you lost";

    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        ++playerScore;
        console.log(`Player: ${playerScore}, Computer: ${compScore}`);
        return "you won";

    } else if (playerSelection === "rock" && computerSelection === "paper") {
        ++compScore;
        console.log(`Player: ${playerScore}, Computer: ${compScore}`);
        return "you lost";

    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        ++playerScore;
        console.log(`Player: ${playerScore}, Computer: ${compScore}`); 
        return "you won";

    } else if (playerSelection === "paper" && computerSelection === "scissors") { 
        ++compScore;
        console.log(`Player: ${playerScore}, Computer: ${compScore}`);
        return "you lost";
          
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        ++playerScore;
        console.log(`Player: ${playerScore}, Computer: ${compScore}`); 
        return "you won";
    }
}

//Make function which loops the playRound function//

let game = () => {
    for (i = 0; i < 1; i++) {
        console.log(playRound(playerSelection = prompt(), computerSelection = getComputerChoice()));
        
    }
}
    

        



//Run code and prnt final score//

/*game();
if (playerScore > compScore) {
    console.log("You Win!");
} else if (playerScore < compScore) {
    console.log("You Loose!");
} else {
    console.log("It's a tie!");
}
console.log(`Final Score = Player: ${playerScore}, Computer ${compScore}`);*/



