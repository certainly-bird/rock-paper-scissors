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
    if(humanScore === 5 || computerScore === 5){
        return;
    }else if(humanChoice === computerChoice){
        updateScore();
        updateMove();
        gameWin();
    }else if((humanChoice === "ROCK" && computerChoice === "PAPER") ||
            (humanChoice === "PAPER" && computerChoice === "SCISSORS") ||
            (humanChoice === "SCISSORS" && computerChoice === "ROCK")){
        computerScore ++;
        updateScore();
        updateMove();
        gameWin();
    }else{
        humanScore ++;
        updateScore();
        updateMove();
        gameWin();
    }
    console.log(humanScore + " " + computerScore);
}

const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');

rockBtn.addEventListener('click', ()=>{btnClick('ROCK')});
paperBtn.addEventListener('click', ()=>{btnClick('PAPER')});
scissorsBtn.addEventListener('click', ()=>{btnClick('SCISSORS')});

function btnClick(playerSelection){
    user = playerSelection;
    playRound(playerSelection, getComputerChoice());
    console.log(playerSelection);
    console.log(computer);
}

function gameWin(){
    if(computerScore === 5){
        const header = document.querySelector('.header');
        const winner = document.createElement('p');
        winner.textContent = "Computer Wins!";
        header.appendChild(winner);
        const replay = document.createElement('button');
        replay.classList.add('reset');
        replay.textContent = "Play Again?";
        header.appendChild(replay);
        const replayBtn = document.querySelector('.reset')
        replayBtn.addEventListener('click', gameReset);
    }else if(humanScore === 5){
        const header = document.querySelector('.header');
        const winner = document.createElement('p');
        winner.textContent = "You Win!";
        header.appendChild(winner);
        const replay = document.createElement('button');
        replay.classList.add('reset');
        replay.textContent = "Play Again?";
        header.appendChild(replay);
        const replayBtn = document.querySelector('.reset')
        replayBtn.addEventListener('click', gameReset);
    }
}

function updateMove(){
    const round = document.querySelector('.round');
    const playerMove = document.createElement('p');
    playerMove.textContent = user;
    playerMove.setAttribute('id','playerMove');
    const computerMove = document.createElement('p');
    computerMove.textContent = computer;
    computerMove.setAttribute('id','computerMove');
    round.insertBefore(playerMove, round.children[0]);
    round.appendChild(computerMove);
    round.removeChild(round.children[1]);
    round.removeChild(round.children[2]);
}

function updateScore(){
    const score = document.querySelector('.score');
    const playerScore = document.createElement('p');
    playerScore.textContent = humanScore;
    const compScore = document.createElement('p');
    compScore.textContent = computerScore;
    score.insertBefore(playerScore, score.children[1]);
    score.removeChild(score.children[2]);
    score.insertBefore(compScore, score.children[2]);
    score.removeChild(score.children[3]);
}

function gameReset(){
    console.log('working')
    humanScore = 0;
    computerScore = 0;

    const score = document.querySelector('.score');
    const playerScore = document.createElement('p');
    playerScore.textContent = 0;
    const compScore = document.createElement('p');
    compScore.textContent = 0;
    score.insertBefore(playerScore, score.children[1]);
    score.removeChild(score.children[2]);
    score.insertBefore(compScore, score.children[2]);
    score.removeChild(score.children[3]);

    const round = document.querySelector('.round');
    const playerMove = document.createElement('p');
    playerMove.textContent = 'Player Move';
    playerMove.setAttribute('id','playerMove');
    const computerMove = document.createElement('p');
    computerMove.textContent = 'Computer Move';
    computerMove.setAttribute('id','computerMove');
    round.insertBefore(playerMove, round.children[0]);
    round.appendChild(computerMove);
    round.removeChild(round.children[1]);
    round.removeChild(round.children[2]);

    const header = document.querySelector('.header');
    header.removeChild(header.children[1]);
    header.removeChild(header.children[1]);
}