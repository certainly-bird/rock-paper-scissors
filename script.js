let user = "";
let computer = "";
let humanScore = 0;
let computerScore = 0;

function getHumanChoice(){
    user = prompt("Please enter rock, paper, or scissors.", "rock").toUpperCase();
    if(!["ROCK", "PAPER", "SCISSORS"].includes(user.toUpperCase())){
        getHumanChoice()
    }
    return user;
}

function getComputerChoice(){
    const rpc = ["ROCK", "PAPER", "SCISSORS"];
    computer = rpc[Math.floor(Math.random() * rpc.length)];
    return computer;
}

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        computerScore ++;
        humanScore ++;
        alert(`It's a Tie! The current score is You: ${humanScore}, Computer: ${computerScore}.`)
        gameWin();
    }else if((humanChoice === "ROCK" && computerChoice === "PAPER") ||
            (humanChoice === "PAPER" && computerChoice === "SCISSORS") ||
            (humanChoice === "SCISSORS" && computerChoice === "ROCK")){
        computerScore ++;
        alert(`Computer Wins! The current score is You: ${humanScore}, Computer: ${computerScore}.`)
        gameWin();
    }else{
        humanScore ++;
        alert(`You Win! The current score is You: ${humanScore}, Computer: ${computerScore}.`)
        gameWin();
    }
}

function gameWin(){
    if(humanScore === 5 && computerScore ===5){
        alert("You both got five points, it's a draw!")
        return null;
    }else if(computerScore === 5){
        alert("The computer got five points, it wins!")
        return null;
    }else if(humanScore === 5){
        alert("You got five points, you win!")
        return null;
    }else{
        playRound(getHumanChoice(), getComputerChoice());
    }
}

playRound(getHumanChoice(), getComputerChoice());
