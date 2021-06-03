
// function for the computer selection
function computerPlay() {
    const random = stuff[Math.floor(Math.random() * stuff.length)];
    cDiv.append(random);
    return random
};




/// Player and Computer sconre
let playerScore = 0;
let computerScore = 0;


///Dom elements
const h2 = document.querySelector('h2');
const pText = document.querySelector('#pScore');
const cText = document.querySelector('#cScore');
const gameDiv = document.querySelector('#game');
const pDiv = document.querySelector('#pPic');
const cDiv = document.querySelector('#cPic');
const reset = document.querySelector('button');
const bRock = document.querySelector('#rock');
const bScissors = document.querySelector('#scissors')
const bPaper = document.querySelector('#paper');



//Reset button
reset.addEventListener('click', resetB);

//Restart function
function resetB() {
    playerScore = 0;
    computerScore = 0;
    pDiv.innerHTML = '';
    cDiv.innerHTML = '';
    h2.innerText = 'Play a Game!';
    pText.innerText = 'Player Score: 0';
    cText.innerText = 'Computer Score: 0';
    bRock.style.pointerEvents = 'auto';
    bScissors.style.pointerEvents = 'auto';
    bPaper.style.pointerEvents = 'auto';

};



//Element creation.
const rockPic = document.createElement('img');
rockPic.src = "pic/rock.jpg";
rockPic.setAttribute("data-rock", 'Rock');
const paperPic = document.createElement('img');
paperPic.setAttribute("data-paper", "Paper");
paperPic.src = "pic/paper.png";
const scissorsPic = document.createElement('img');
scissorsPic.setAttribute("data-scissors", "Scissors");
scissorsPic.src = "pic/scissors.jpg";


///Array with the images.
const stuff = [rockPic, paperPic, scissorsPic];



///Button events.
bRock.addEventListener('click', function () {
    rockPic.remove();
    paperPic.remove();
    scissorsPic.remove();
    pDiv.innerHTML = ''

    pDiv.innerHTML = `<img src="pic/rock.jpg">`;

    const playerSelection = rockPic;
    const computerSelection = computerPlay();
    h2.innerText = game(playRound(playerSelection, computerSelection));

});


bScissors.addEventListener('click', () => {
    scissorsPic.remove();
    rockPic.remove();
    paperPic.remove();
    pDiv.innerHTML = '';

    pDiv.innerHTML = `<img src="pic/scissors.jpg">`;
    const playerSelection = scissorsPic;
    const computerSelection = computerPlay();

    h2.innerText = game(playRound(playerSelection, computerSelection));

});

bPaper.addEventListener('click', () => {
    paperPic.remove();
    rockPic.remove();
    scissorsPic.remove();
    pDiv.innerHTML = ''

    pDiv.innerHTML = `<img src="pic/paper.png">`;
    const playerSelection = paperPic;
    const computerSelection = computerPlay();

    h2.innerText = game(playRound(playerSelection, computerSelection));

});





//function that plays the game.
function playRound(playerSelection, computerSelection) {

    if (playerSelection === rockPic && computerSelection === stuff[1]) {
        computerScore++;

        cText.innerText = `Computer Score: ${computerScore}`
        return 'Paper beats Rock: You lose Computer wins!'
    } else if (playerSelection === paperPic && computerSelection === stuff[0]) {
        playerScore++;

        pText.innerText = `Player Score: ${playerScore}`;
        return 'Paper beats Rock: You win Computer loses!';
    } else if (playerSelection === paperPic && computerSelection === stuff[2]) {
        computerScore++;

        cText.innerText = `Computer Score: ${computerScore}`;
        return 'Scissors beats Paper: You lose Computer wins!';
    } else if (playerSelection === scissorsPic && computerSelection === stuff[1]) {
        playerScore++;

        pText.innerText = `Player Score: ${playerScore}`;
        return ' Scissors beats Paper: You win Computer loses!';

    } else if (playerSelection === rockPic && computerSelection === stuff[2]) {
        playerScore++;

        pText.innerText = `Player Score: ${playerScore}`;
        return 'Rock beats Scissors: You win Computer loses!';

    } else if (playerSelection === scissorsPic && computerSelection === stuff[0]) {
        computerScore++;

        cText.innerText = `Computer Score: ${computerScore}`;
        return 'Rock beats Scissors: You lose Computer wins!';

    } else return "Even Play Again!";


};


//function that decides the winner.
function game(play) {
    if (playerScore >= 5 || computerScore >= 5) {
        bRock.style.pointerEvents = 'none';
        bScissors.style.pointerEvents = 'none';
        bPaper.style.pointerEvents = 'none';
    }
    if (playerScore >= 5) {
        return h2.innerText = 'You win Computer Lost!';

    } else if (computerScore >= 5) {
        return h2.innerText = 'You lost Computer Won!';
    }
    return play
};




