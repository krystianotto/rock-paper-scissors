let computerMove = 'Unknown move';

let playerMove = 'Unknown move';

let randomNumber = Math.floor(Math.random() *3 +1);

if(randomNumber == 1){
    computerMove = 'kamień';
}else if(randomNumber == 2){
    computerMove = 'papier';
}else{
    computerMove = 'nożyce';
}

printMessage('Wylosowana wartość to ' + computerMove)