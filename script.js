//computer choice block
function getComputerChoice() {   
    let choice = ["Rock", "Paper", "Scissor"]
    let randomNumber = choice[Math.floor(Math.random() * choice.length)];
    return randomNumber;
    //console.log(randomNumber);
}



//player choice block
function getHumanChoice() {
    let choice = prompt("Enter your choice -- (Rock, paper, scissor):");
    return choice;    
    //alert(choice)
}



//round block

let humanScore = 0;
let computerScore = 0;
function playRound(x, y){
        if ((x == "rock" && y == "rock") || (x == "paper" && y == "paper") || (x == "scissor" && y == "scissor")) {
        alert("Human choice: " + x + "\nComputer choice: " + y + "\nYou've Tied!!!");
    }
    else if ((x == "rock" && y == "scissor") || (x == "paper" && y == "rock") || (x == "scissor" && y == "paper")) {
        humanScore++;
        alert("Human choice: " + x + "\nComputer choice: " + y + "\nHuman Wins! congrats"); // human win scenario
    }    
    else if ((x == "scissor" && y == "rock") || (x == "rock" && y == "paper") || (x == "paper" && y == "scissor")) {
        computerScore++;
        alert("Human choice: " + x + "\nComputer choice: " + y + "\nComputer wins! sorry!"); // comp win scenario
    } 

}

for(let i = 1; i<=5; i++){
    let hc = getHumanChoice().toLowerCase();
    let cc = getComputerChoice().toLowerCase();
    playRound(hc, cc);
}

//alert("Human Score: " + humanScore + "\nComputer Score: " + computerScore)
if(humanScore === computerScore) alert("Human Score: " + humanScore + "\nComputer Score: " + computerScore + "\nIts tied.")
else if (humanScore > computerScore) alert("Human Score: " + humanScore + "\nComputer Score: " + computerScore + "\nHuman wins! Congrats")
else if(humanScore < computerScore) alert("Human Score: " + humanScore + "\nComputer Score: " + computerScore + "\nComputer Wins!")        