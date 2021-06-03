
///function that the computer chose random items from my stuff array.

function computerPlay() {
    const random = stuff[Math.floor(Math.random() * stuff.length)]
    cDiv.append(random)
    return random
};



// const computer = {
//     items: ['Rock', 'Paper', 'Scissors']
// }






let playerScore = 0;
let computerScore = 0;



const h1 = document.querySelector('h1');
const h2 = document.querySelector('#pScore');
const h3 = document.querySelector('#cScore');
const gameDiv = document.querySelector('#game');
const pDiv = document.querySelector('#pPic');
const cDiv = document.querySelector('#cPic');



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
rockPic.setAttribute("data-rock", 'Rock')
const paperPic = document.createElement('img')
paperPic.setAttribute("data-paper", "Paper")
paperPic.src = "pic/paper.png"
const scissorsPic = document.createElement('img')
scissorsPic.setAttribute("data-scissors", "Scissors")
scissorsPic.src = "pic/scissors.jpg"

const stuff = [rockPic, paperPic, scissorsPic];




const bRock = document.querySelector('#rock')
bRock.addEventListener('click', function () {
    rockPic.remove()
    paperPic.remove();
    scissorsPic.remove();
    pDiv.innerHTML = ''

    pDiv.innerHTML = `<img src="pic/rock.jpg">`;

    const playerSelection = rockPic;
    const computerSelection = computerPlay();
    h1.innerText = game(playRound(playerSelection, computerSelection));

});

const bScissors = document.querySelector('#scissors')
bScissors.addEventListener('click', () => {
    scissorsPic.remove()
    rockPic.remove()
    paperPic.remove()
    pDiv.innerHTML = ''

    pDiv.innerHTML = `<img src="pic/scissors.jpg">`;
    const playerSelection = scissorsPic;
    const computerSelection = computerPlay();

    h1.innerText = game(playRound(playerSelection, computerSelection));

});
const bPaper = document.querySelector('#paper')
bPaper.addEventListener('click', () => {
    paperPic.remove()
    rockPic.remove()
    scissorsPic.remove()
    pDiv.innerHTML = ''

    pDiv.innerHTML = `<img src="pic/paper.png">`;
    const playerSelection = paperPic;
    const computerSelection = computerPlay();

    h1.innerText = game(playRound(playerSelection, computerSelection));

});





function playRound(playerSelection, computerSelection) {


    if (playerSelection === rockPic && computerSelection === stuff[1]) {
        computerScore++;

        h3.innerText = `Computer Score: ${computerScore}`
        return 'Paper beats Rock: You lose Computer wins!'
    } else if (playerSelection === paperPic && computerSelection === stuff[0]) {
        playerScore++;

        h2.innerText = `Player Score: ${playerScore}`;
        return 'Paper beats Rock: You win Computer loses!';
    } else if (playerSelection === paperPic && computerSelection === stuff[2]) {
        computerScore++;

        h3.innerText = `Computer Score: ${computerScore}`;
        return 'Scissors beats Paper: You lose Computer wins!';
    } else if (playerSelection === scissorsPic && computerSelection === stuff[1]) {
        playerScore++;

        h2.innerText = `Player Score: ${playerScore}`;
        return ' Scissors beats Paper: You win Computer loses!';

    } else if (playerSelection === rockPic && computerSelection === stuff[2]) {
        playerScore++;

        h2.innerText = `Player Score: ${playerScore}`;
        return 'Rock beats Scissors: You win Computer loses!';

    } else if (playerSelection === scissorsPic && computerSelection === stuff[0]) {
        computerScore++;

        h3.innerText = `Computer Score: ${computerScore}`;
        return 'Rock beats Scissors: You lose Computer wins!';

    } else return "Even Play Again!";



};



function game(play) {
    if (playerScore >= 100 || computerScore >= 100) {
        winner.classList.toggle('display')
        theGame.classList.toggle('opacity')
        reset.classList.toggle('display')
    }
    if (playerScore >= 100) {

        winner.textContent = 'You win Computer has Lost!'
    } else if (computerScore >= 100) {

        winner.textContent = 'You lost Computer has Won!'
    }
    return play
};




