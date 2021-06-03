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
const h2 = document.querySelector('#pScore');
const h3 = document.querySelector('#cScore');
const gameDiv = document.querySelector('#game')
const pDiv = document.querySelector('#pPic')
const cDiv = document.querySelector('#cPic')



/// Selecting div and p so I can add display and toggle class
const theGame = document.querySelector('div');
const winner = document.querySelector('p');
winner.classList.add('display');




///My reset button that resets the score and togles classes
const reset = document.querySelector('input');
reset.classList.add('display');
reset.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    reset.classList.toggle('display');
    winner.classList.toggle('display');
    theGame.classList.toggle('opacity');
    h1.innerText = 'Play a Game';
    h2.innerText = 'Player Score: 0';
    h3.innerText = 'Computer Score: 0';
});






const rockPic = document.createElement('img')
rockPic.src = "pic/rock.jpg"
const paperPic = document.createElement('img')
paperPic.src = "pic/paper.png"
const scissorsPic = document.createElement('img')
scissorsPic.src = "pic/scissors.jpg"
// const pDiv = document.createElement('div')
// const cDiv = document.createElement('div')
// pDiv.classList.add('test')
// cDiv.classList.add('test')


// gameDiv.append(pDiv)
// gameDiv.append(cDiv)






const bRock = document.querySelector('#r')
bRock.addEventListener('click', function () {
    rockPic.remove()
    paperPic.remove()
    scissorsPic.remove()
    pDiv.append(rockPic)
    const playerSelection = 'rock';
    const computerSelection = computerPlay();

    h1.innerText = game(playRound(playerSelection, computerSelection));

});

const bScissors = document.querySelector('#s')
bScissors.addEventListener('click', () => {
    rockPic.remove()
    paperPic.remove()
    scissorsPic.remove()
    pDiv.append(scissorsPic)
    const playerSelection = 'scissors';
    const computerSelection = computerPlay();

    h1.innerText = game(playRound(playerSelection, computerSelection));

});
const bPaper = document.querySelector('#p')
bPaper.addEventListener('click', () => {
    rockPic.remove()
    paperPic.remove()
    scissorsPic.remove()
    pDiv.append(paperPic)
    const playerSelection = 'paper';
    const computerSelection = computerPlay();

    h1.innerText = game(playRound(playerSelection, computerSelection));

});






/////////////My shitty function with alot of code that needs to be fixed I think.It takes a player selection and computer selection and returns the outcome of my if statements
function playRound(playerSelection, computerSelection) {

    if (playerSelection === 'rock' && computerSelection === 'Paper') {
        computerScore++

        cDiv.append(paperPic)

        h3.innerText = `Computer Score: ${computerScore}`
        return 'Paper beats Rock: You lose Computer wins!'
    } else if (playerSelection === 'paper' && computerSelection === 'Rock') {
        playerScore++

        cDiv.append(rockPic)

        h2.innerText = `Player Score: ${playerScore}`
        return 'Paper beats Rock: You win Computer loses!'
    } else if (playerSelection === 'paper' && computerSelection === 'Scissors') {
        computerScore++

        cDiv.append(scissorsPic)

        h3.innerText = `Computer Score: ${computerScore}`
        return 'Scissors beats Paper: You lose Computer wins!'
    } else if (playerSelection === 'scissors' && computerSelection === 'Paper') {
        playerScore++

        cDiv.append(paperPic)
        h2.innerText = `Player Score: ${playerScore}`
        return ' Scissors beats Paper: You win Computer loses!'

    } else if (playerSelection === 'rock' && computerSelection === 'Scissors') {
        playerScore++

        cDiv.append(scissorsPic)
        h2.innerText = `Player Score: ${playerScore}`
        return 'Rock beats Scissors: You win Computer loses!'

    } else if (playerSelection === 'scissors' && computerSelection === 'Rock') {
        computerScore++

        cDiv.append(rockPic)
        h3.innerText = `Computer Score: ${computerScore}`
        return 'Rock beats Scissors: You lose Computer wins!'

    } else if (playerSelection == computerSelection) return "Even Play Again!"


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

        winner.textContent = 'You win Computer has Lost!'
    } else if (computerScore >= 3) {

        winner.textContent = 'You lost Computer has Won!'
    }
    return play
};




