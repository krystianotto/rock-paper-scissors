function playGame(playerInput){
    
    clearMessages()

    let playerMove = getMoveName(playerInput);
    
    let randomNumber = Math.floor(Math.random() *3 +1);
    let computerMove = getMoveName(randomNumber);

    function getMoveName(moveId){
        if (moveId == 1){
            return 'rock'
        }else if(moveId == 2){
            return 'paper'
        }else{
            return 'scissors'
        }
    };

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
    };

    displayResult(computerMove, playerMove);
};

document.getElementById('btn-rock').addEventListener('click',function(){playGame(1)});
document.getElementById('btn-paper').addEventListener('click',function(){playGame(1)});
document.getElementById('btn-scissors').addEventListener('click',function(){playGame(1)});