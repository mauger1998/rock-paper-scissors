/* UI Event Listeners */

const rok = document.getElementById("rock");
const pape = document.getElementById("paper");
const sciss = document.getElementById("scissors");
const results = document.querySelector("div");

rok.addEventListener("click", (e) => {
    console.log(playRound("rock", getComputerChoice()));
    
});

pape.addEventListener("click", (e) => {
    console.log(playRound("paper", getComputerChoice()))

});

sciss.addEventListener("click", (e) => {
    console.log(playRound("scissors", getComputerChoice()))
});



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
        let res = "you tied, you both picked rock";
        results.textContent = res;
        return res;

    } else if (playerSelection === "paper" && computerSelection === "paper"){
        let res = "you tied, you both picked paper";
        results.textContent = res;
        return res;

    } else if (playerSelection === "scissors" && computerSelection === "scissors"){
         let res = "you tied, you both picked scissors";
         results.textContent = res;
         return res;

    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        ++compScore;
        let res = (`you lost, rock beats scissors, Player: ${playerScore}, Computer: ${compScore}`);
        results.textContent = res;
        return res;

    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        ++playerScore;
        let res = (`you won, scissors beats paper, Player: ${playerScore}, Computer: ${compScore}`);
        results.textContent = res;
        return res;

    } else if (playerSelection === "rock" && computerSelection === "paper") {
        ++compScore;
        let res = (`you lost, paper beats tock, Player: ${playerScore}, Computer: ${compScore}`);
        results.textContent = res;
        return res;

    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        ++playerScore;
        let res = (`you won, rock beats scissors, Player: ${playerScore}, Computer: ${compScore}`);
        results.textContent = res;
        return res;

    } else if (playerSelection === "paper" && computerSelection === "scissors") { 
        ++compScore;
        let res = (`you lost, scissors beats paper, Player: ${playerScore}, Computer: ${compScore}`);
        results.textContent = res;
        return res;
          
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        ++playerScore;
        let res = (`you won, rock beats paper, Player: ${playerScore}, Computer: ${compScore}`);
        results.textContent = res;
        return res;
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



