function getMoveName(moveId){
    if (moveId == 1){
        return 'rock'
    }else if(moveId == 2){
        return 'paper'
    }else if (moveId == 3){
        return 'scissors'
    }else{
        alert('You picked the wrong button sir')
    }
}

function displayResult(computerMove, playerMove){
    printMessage('You play ' + playerMove + ',' + 'computer plays ' + computerMove)
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
}

let randomNumber = Math.floor(Math.random() *3 +1);
let computerMove = getMoveName(randomNumber);

let playerInput = prompt('Choose your Destiny! 1: rock 2: paper 3: scissors');
let playerMove = getMoveName(playerInput)

displayResult(computerMove, playerMove)