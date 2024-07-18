

let score = JSON.parse(localStorage.getItem('score'));

if (score === null/*!score --- this is a shorthand for this code*/) {// we can set the null error with these values.
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    }
}

updateScoreElement();

/*{
    

    wins: 0,
    losses: 0,
    ties: 0
};*/

console.log(localStorage.getItem('message')); //This is how we get the values from a local storage.
//console.log(JSON.parse(localStorage.getItem('score'))); //we can move this code to the const score.

function playGame(playerMove) {
    const computerMove = pickComputerMove();


    let result = '';

    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You lose and Computer Won!!';
        } else if (computerMove === 'paper') {
            result = 'You won and Computer lose!!';
        } else if (computerMove = 'Scissors') {
            result = 'Tie';
        }


    } else if (playerMove === 'paper') {                 

        if (computerMove === 'rock') {
                result = 'You won and Computer lose!!';
        } else if (computerMove === 'paper') {
                result = 'Tie';
        } else if (computerMove === 'Scissors') {
                result = 'You lose and Computer Won!!';
        }


    } else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie';
        } else if (computerMove === 'paper') {
            result = 'You lose and Computer Won!!';
        } else if (computerMove === 'Scissors') {
            result = 'You won and Computer lose!!';
        }

    }

    if (result === 'You won and Computer lose!!') {
        score.wins += 1 /* or like this score.wins + 1*/;
    } else if (result === 'You lose and Computer Won!!') {
        score.losses += 1;
    } else if (result === 'Tie') {
        score.ties +=1;
    }

    localStorage.setItem('message'/*name*/, 'hello'/*string*/); //This is local storage where values are stored permanantly.
   // localStorage.setItem('score', score); // local storage can only have values in strings. So we need to convert our object score to a string using JSON stringify.

   localStorage.setItem('score', JSON.stringify(score));

   updateScoreElement();

   document.querySelector('.js-result').innerHTML = result;

   document.querySelector('.js-moves').innerHTML = `You        
    <img src="/supersimple dev/10-HTML-CSS-JS/${playerMove}-emoji.png" class="move-icon">
    <img src="/supersimple dev/10-HTML-CSS-JS/${computerMove}-emoji.png" class="move-icon">
    Computer `;
   
   

    /*alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result} 
    Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);*/

}

function updateScoreElement() {

    document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

}

    
function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove ='';

    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = 'Scissors';
    }

    return computerMove;

};