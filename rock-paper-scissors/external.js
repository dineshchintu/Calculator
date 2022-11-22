// function computerSelection(){
//     let r = Math.floor(Math.random()*3+1);
//     if(r === 1)
//         return "rock";
//     else if(r === 2)
//         return "paper";
//     else
//         return "scissors";
// }
// console.log(computerSelection());
// function playerSelection(){
//     let n = prompt(" type rock, paper or scissors");

//     return n.toLowerCase();
// }

// console.log(playerSelection());



// function playRound(playerselection, computerselection){
//     if(playerselection == computerselection)
//         return "Tie";

//     else if(playerselection=="rock" && computerselection=="scissors")
//         return "You Win";
//     else if(playerselection=="scissors" && computerselection=="paper")
//         return "You Win";
//     else if(playerselection=="paper" && computerselection=="rock")
//         return "You Win";
//     else
//         return "Computer Wins";
// }
// let playerselection = playerSelection();
// let computerselection = computerSelection();
// console.log(playRound(playerselection, computerselection));



let computerScore = 0;
let playerScore = 0;


const rockButton = document.querySelector('#rock');
rockButton.addEventListener('click',play);

const paperButton = document.querySelector('#paper');
paperButton.addEventListener('click',play);

const scissorsButton = document.querySelector('#scissors');
scissorsButton.addEventListener('click',play);

const div = document.querySelector('#results');

function play(e){
    console.log(e);
    let compMove = computerPlay();
    let status =  playRound(this.id,compMove);
    let p = document.createElement('p');
    if(status == 'lose'){
        computerScore += 1;
        let x = "You lost your score = " + playerScore+ " computer score = "+computerScore;
        document.getElementById('res').innerHTML = x;
        
    }else if(status == 'win'){
        playerScore += 1;
        let x = "You win your score = " + playerScore+ "computer score = "+computerScore;
        document.getElementById('res').innerHTML = x;
    }else{
        let x = "Tie your score = " + playerScore+ "computer score = "+computerScore;
        document.getElementById('res').innerHTML = x;
    }

    // div.appendChild(p);

    if(computerScore == 5){
        let x = "Computer Wins";
        document.getElementById('fRes').innerHTML = x;
        computerScore = 0;
        playerScore = 0;
    }else if(playerScore == 5){
        let x = "Player Wins";
        document.getElementsByClassName('fRes').innerHTML = x;
        computerScore = 0;
        playerScore = 0;
    }
    
    
}

function computerPlay(){
    let ran = Math.random()*3;
    if(ran<=1){
        return 'rock';
    }else if(ran <=2){
        return 'paper';
    }else{
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(computerSelection==playerSelection){
        return "It's a tie!";
    }else if(computerSelection == 'rock' && playerSelection == 'paper'){
        return "win";
    }else if(computerSelection == 'paper' && playerSelection == 'rock'){
        return "lose";
    }else if(computerSelection == 'paper' && playerSelection == 'scissors'){
        return "win";
    }else if(computerSelection == 'scissors' && playerSelection == 'paper'){
        return "lose";
    }else if(computerSelection == 'scissors' && playerSelection == 'rock'){
        return "win";
    }else if(computerSelection == 'rock' && playerSelection == 'scissors'){
        return "lose";
    }
}