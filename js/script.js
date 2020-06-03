let playerInput = prompt('Choose your Destiny! 1: rock 2: paper 3: scissors');

let computerMove = 'Unknown move';
let playerMove = 'Unknown move';

let randomNumber = Math.floor(Math.random() *3 +1);

if(randomNumber == 1){
    computerMove = 'rock';
}else if(randomNumber == 2){
    computerMove = 'paper';
}else{
    computerMove =  'scissors';
}

if(playerInput == 1){
    playerMove = 'rock';
}else if(playerInput == 2){
    playerMove = 'paper'
}else if(playerInput == 3){
    playerMove = 'scissors'
}else{
    alert('You picked the wrong button sir')
}


if (playerMove == computerMove){
    printMessage('Draw !')
}else if(playerMove == 'rock' && computerMove == 'paper'){
    printMessage('You lose')
}else if(playerMove == 'rock' && computerMove == 'scissors'){
    printMessage('You win')
}else if(playerMove == 'scissors' && computerMove == 'paper'){
    printMessage('You win')
}else if(playerMove == 'scissors' && computerMove == 'rock'){
    printMessage('You lose')
}else if(playerMove == 'paper' && computerMove == 'scissors'){
    printMessage('You lose')
}else if(playerMove == 'paper' && computerMove == 'rock'){
    printMessage('You win')
}