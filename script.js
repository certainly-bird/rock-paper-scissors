let user = "";
let computer = "";
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const rpc = ["ROCK", "PAPER", "SCISSORS"];
    computer = rpc[Math.floor(Math.random() * rpc.length)];
    return computer;
}

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        alert(`It's a Tie!`);
    }else if((humanChoice === "ROCK" && computerChoice === "PAPER") ||
            (humanChoice === "PAPER" && computerChoice === "SCISSORS") ||
            (humanChoice === "SCISSORS" && computerChoice === "ROCK")){
        computerScore ++;
        alert(`Computer Wins!`);
    }else{
        humanScore ++;
        alert(`You Win!`);
    }
}

const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');

rockBtn.addEventListener('click', ()=>{btnClick('ROCK')});
paperBtn.addEventListener('click', ()=>{btnClick('PAPER')});
scissorsBtn.addEventListener('click', ()=>{btnClick('SCISSORS')});

function btnClick(playerSelection){
    playRound(playerSelection, getComputerChoice());
    console.log(playerSelection);
    console.log(computer);
}