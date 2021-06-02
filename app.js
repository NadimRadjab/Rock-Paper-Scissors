/// Array with my stuff inside .
const stuff = ['Rock', 'Paper', 'Scissors'];
///function that the computer chose random items from my stuff array.
function computerPlay() {
    const random = stuff[Math.floor(Math.random() * stuff.length)]
    return random
};
/// Player score and computer score
let playerScore = 0;
let computerScore = 0;



///Selecting my Hs
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');



/// Selecting div and p so I can add display and toggle class
const theGame = document.querySelector('div');
const winner = document.querySelector('p');
winner.classList.add('display');




///My reset button that resets the score and togles classes
const reset = document.querySelector('input');
reset.classList.add('display');
reset.addEventListener('click', (e) => {
    playerScore = 0;
    computerScore = 0;
    reset.classList.toggle('display');
    winner.classList.toggle('display');
    theGame.classList.toggle('opacity');
    h1.innerText = 'Play a Game';
    h2.innerText = 'Player Score: 0';
    h3.innerText = 'Computer Score : 0';
});


/////////My buttons rock, paper and scissors that on click take a player selection and a computer selection and update my h1 text with the fucntions game and playround!
const bRock = document.querySelector('#r')
bRock.addEventListener('click', function (e) {
    const playerSelection = 'rock';
    const computerSelection = computerPlay();
    h1.innerText = game(playRound(playerSelection, computerSelection));

});

const bScissors = document.querySelector('#s')
bScissors.addEventListener('click', (e) => {
    const playerSelection = 'scissors';
    const computerSelection = computerPlay();
    h1.innerText = game(playRound(playerSelection, computerSelection));

});
const bPaper = document.querySelector('#p')
bPaper.addEventListener('click', () => {
    const playerSelection = 'paper';
    const computerSelection = computerPlay();
    h1.innerText = game(playRound(playerSelection, computerSelection));

});





/////////////My shitty function with alot of code that needs to be fixed I think.It takes a player selection and computer selection and returns the outcome of my if statements
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'Paper') {
        computerScore++
        h3.innerText = `Computer Score: ${computerScore}`
        return 'Paper beats Rock: You lose Computer wins!'
    } else if (playerSelection === 'paper' && computerSelection === 'Rock') {
        playerScore++
        h2.innerText = `Player Score: ${playerScore}`
        return 'Paper beats Rock: You win Computer loses!'
    } else if (playerSelection === 'paper' && computerSelection === 'Scissors') {
        computerScore++
        h3.innerText = `Computer Score: ${computerScore}`
        return 'Scissors beats Paper: You lose Computer wins!'
    } else if (playerSelection === 'scissors' && computerSelection === 'Paper') {
        playerScore++
        h2.innerText = `Player Score: ${playerScore}`
        return ' Scissors beats Paper: You win Computer loses!'

    } else if (playerSelection === 'rock' && computerSelection === 'Scissors') {
        playerScore++
        h2.innerText = `Player Score: ${playerScore}`
        return 'Rock beats Scissors: You win Computer loses!'

    } else if (playerSelection === 'scissors' && computerSelection === 'Rock') {
        computerScore++
        h3.innerText = `Computer Score: ${computerScore}`
        return 'Rock beats Scissors: You lose Computer wins!'

    } else return "Even Play Again!"

};



////my game function that works to decide a winner the winner is deice by who reaches a score of 3 first.I don't really stop the game I just toggle classes so I can blur the backgroung
//// and show the winner and to show a reset button the button resets the score ,but if the player presses for example other button can crash the game or simply put it not really a polisd product
function game(play) {
    if (playerScore >= 3 || computerScore >= 3) {
        winner.classList.toggle('display')
        theGame.classList.toggle('opacity')
        reset.classList.toggle('display')
    }
    if (playerScore >= 3) {

        winner.textContent = 'You won Computer Lost!'
    } else if (computerScore >= 3) {

        winner.textContent = 'You lost Computer Won!'
    }
    return play
};



// const playerSelection = 'rock'
// const computerSelection = computerPlay()
// console.log(playRound(playerSelection, computerSelection))






