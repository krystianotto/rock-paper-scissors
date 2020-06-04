function playGame(playerInput){
    
    clearMessages()

    const playerMove = getMoveName(playerInput);
    
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    const computerMove = getMoveName(randomNumber);
    console.log(computerMove)

    function getMoveName(moveId){
        // moveId === 1 ? 'rock' : moveId === 2 ? 'paper' : 'scissors';
        if (moveId === 1){
            return 'rock'
        }else if(moveId === 2){
            return 'paper'
        }else{
            return 'scissors'
        }
    };

    function displayResult(computerMove, playerMove){
        printMessage('You play ' + playerMove + ',' + 'computer plays ' + computerMove)
        if ((playerMove === 'rock' && computerMove === 'scissors') || (playerMove === 'scissors' && computerMove === 'paper') || (playerMove === 'paper' && computerMove === 'rock')){
            printMessage('You win !')
        }else if((playerMove === 'rock' && computerMove === 'paper') || (playerMove === 'scissors' && computerMove === 'rock') || (playerMove === 'paper' && computerMove === 'scissors')){
            printMessage('You lose')
        }else{
            printMessage('Draw !')
        };
    };

    displayResult(computerMove, playerMove);
};

document.getElementById('btn-rock').addEventListener('click',function(){playGame(1)});
document.getElementById('btn-paper').addEventListener('click',function(){playGame(2)});
document.getElementById('btn-scissors').addEventListener('click',function(){playGame(3)});