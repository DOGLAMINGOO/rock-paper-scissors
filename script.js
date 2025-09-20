//computer choice block
function getComputerChoice() {   
    let choice = ["Rock", "Paper", "Scissor"]
    let randomNumber = choice[Math.floor(Math.random() * choice.length)];
    return randomNumber;
    //console.log(randomNumber);
}
const compChoice = getComputerChoice().toLowerCase();
console.log("Computer choice: ",compChoice);



//player choice block
function getHumanChoice() {
    let choice = prompt("Enter your choice -- (Rock, paper, scissor):");
    return choice;    
    //alert(choice)
}
const humanChoice = getHumanChoice().toLowerCase();
console.log("Human choice: ",humanChoice);



//round block
function playRound(humanChoice, compChoice) {
    let humanScore = 0;
    let computerScore = 0;
    for(let i = 1; i<=5; i++){
        if ((humanChoice == "rock" && compChoice == "rock") || (humanChoice == "paper" && compChoice == "paper") || (humanChoice == "scissor" && compChoice == "rock")) {
            alert("Human choice: " + humanChoice + "\nComputer choice: " + compChoice + "\nYou've Tied!!!")
        }
        else if ((humanChoice == "rock" && compChoice == "scissor") || (humanChoice == "paper" && compChoice == "rock") || (humanChoice == "scissor" && compChoice == "paper")){
            humanScore++;
            alert("Human choice: " + humanChoice + "\nComputer choice: " + compChoice + "\nHuman Wins! congrats") //human win scenario
        }    
        else if ((humanChoice == "scissor" && compChoice == "rock") || (humanChoice == "rock" && compChoice == "paper") || (humanChoice == "paper" && compChoice == "scissor")) {
            computerScore++;
            alert("Human choice: " + humanChoice + "\nComputer choice: " + compChoice + "\nComputer wins! sorry!") //comp win scenario
        } 
    }     
}
playRound(humanChoice, compChoice);