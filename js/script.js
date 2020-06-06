function playGame(playerInput){

    const playerMove = getMoveName(playerInput);
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    const computerMove = getMoveName(randomNumber);

    clearMessage();

    function getMoveName(moveId){
        if (moveId === 1){
            return 'rock'
        }else if(moveId === 2){
            return 'paper'
        }else{
            return 'scissors'
        }
    };

    function gameResult(computerMove, playerMove){
        //printMessage('You play ' + playerMove + ',' + 'computer plays ' + computerMove);
        if ((playerMove === 'rock' && computerMove === 'scissors') || (playerMove === 'scissors' && computerMove === 'paper') || (playerMove === 'paper' && computerMove === 'rock')){
            winGame();
            gameMessage.innerHTML = 'Players ' + playerMove + ' beats ' + 'computers ' + computerMove;
        }else if((playerMove === 'rock' && computerMove === 'paper') || (playerMove === 'scissors' && computerMove === 'rock') || (playerMove === 'paper' && computerMove === 'scissors')){
            loseGame();
            gameMessage.innerHTML = 'computers ' + computerMove + ' beats ' + 'Players ' + playerMove;
        }else{
            gameMessage.innerHTML = "It's a drawwwww !";
        };
    };

    function winGame(){
        playerScore++;
        playerScore_span.innerHTML = playerScore;
        computerScore_span.innerHTML = computerScore;
        checkScore(playerScore, computerScore)
    }

    function loseGame(){
        computerScore++;
        computerScore_span.innerHTML = computerScore;
        playerScore_span.innerHTML = playerScore;
        checkScore(playerScore, computerScore)
    }

    function checkScore(playerScore, computerScore){
        (computerScore == roundToPlay) || (playerScore == roundToPlay) ? confirm('Game Over') : false;
    }

    function clearMessage(){
        gameMessage.innerHTML = '';
    }

    
    gameResult(computerMove, playerMove);
};

const roundToPlay = prompt('What score should end the game ? Put a number Down there','0')
const playerScore_span = document.getElementById('player-score');
const computerScore_span = document.getElementById('computer-score');
const gameMessage = document.getElementById('game-message');
let playerScore = 0;
let computerScore = 0;

document.getElementById('btn-rock').addEventListener('click',function(){
    playGame(1)
});
document.getElementById('btn-paper').addEventListener('click',function(){
    playGame(2)
});
document.getElementById('btn-scissors').addEventListener('click',function(){
    playGame(3)
});