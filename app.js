// Add an event listener to the start button of the game. 
let startButt = document.querySelector('#start').addEventListener('click', switchDiv);

// Record the players choice
let playerSelection = document.querySelectorAll('.butt');
playerSelection.forEach(x => x.addEventListener('click', playerChoice));

// Player and computer score
let pScore = 0;
let cScore = 0;

// Function that let you swtich div
function switchDiv () {
    const initialPage = document.getElementById('main');
    const secondPage = document.getElementById('secScreen');
    const snd = document.getElementById('player');
    snd.src = '';
    initialPage.style.display = "none";
    secondPage.style.display = "block";
    console.log("Start button has been clicked");

}

// Randomly generate a choice for the computer. 
function computerChoice() {
    const choices = ['r' , 'p', 's'];
    let choice = choices[Math.floor(Math.random() * 3)];
    return choice;
}

// When the player pick an option the game begins. 
function playerChoice(a) { 
    playRound(a.target.id, computerChoice());
}

// Algorithm for deciding winner. 
function win(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        document.getElementById("winText").innerHTML = "IT'S A TIE";
        console.log("This is a tie");
        return 't';
    }

    else if (playerSelection === 'r') {
        if (computerSelection === 's') {
            document.getElementById("winText").innerHTML = "You win. Rock beats scissor!";
            console.log("You win. Rock beats scissor!");
            return 'r';
        } 
        else {
            document.getElementById("winText").innerHTML = "You lose. Paper beats rock!";
            console.log("You lose. Paper beats rock!"); 
            return 'p'
        }
    }
    else if (playerSelection === 's') {
        if (computerSelection === 'p') {
            document.getElementById("winText").innerHTML = "You win. Scissor beats paper!";
            console.log("You win. Scissor beats paper!");
            return 's';
        }
        else {
            document.getElementById("winText").innerHTML = "You lose. Rock beats scissors!";
            console.log("You lose. Rock beats scissors!"); 
            return 'r';
        }
    }
    else if (playerSelection === 'p') {
        if (computerSelection === 'r') {
            document.getElementById("winText").innerHTML = "You win. Paper beats Rock!";
            console.log("You win. Paper beats Rock!");
            return 'p';
        }
        else {
            document.getElementById("winText").innerHTML = "You lose. scissors beats rock!";
            console.log("You lose. scissors beats rock!");
            return 's';
        }
    }
}

// Incrmement the global variable
function increment (playerSelection, computerSelection, winner) {
    // create an img element.
    let img = document.createElement("img");
    let img2 = document.createElement("img");

    // Grab the choice boxes
    let cBox = document.getElementById("compBox");
    let uBox = document.getElementById("userBox");

    // Grab the id of the scores. 
    let playerScore = document.getElementById("playerscore");
    let computerScore = document.getElementById("pcscore");
    


    // increment the counter
    if (winner === 't');
    else if (playerSelection === winner) pScore++;
    else if (computerSelection === winner) cScore++; 

    // Display the choices
    if (playerSelection === 'r') img.src = "rock.png";
    else if (playerSelection === 'p') img.src = "paper.png";
    else if (playerSelection === 's') img.src = "scissor.png";

    
    if (computerSelection === 'r') img2.src = "rock.png";
    else if (computerSelection === 'p') img2.src = "paper.png";
    else if (computerSelection === 's') img2.src = "scissor.png";

    document.getElementById("uid").src = img.src;
    document.getElementById("cid").src = img2.src;

    // Update the counter on screen. 
    playerScore.innerText = pScore;
    computerScore.innerText = cScore;

    
    // check if anyone is at 5.
    if (pScore >= 5) {
        console.log("YOU WIN!!!")
        alert("You WIN!");
        pScore = 0;
        cScore = 0;
    } 
    if (cScore >= 5) {
        alert("You LOSE!");
        console.log("YOU LOSe!!!")
        pScore = 0;
        cScore = 0;
    }

    // Update the counter on screen. 
    playerScore.innerText = pScore;
    computerScore.innerText = cScore;
}

// Main function to play the game. 
function playRound(playerSelection, computerSelection) {
    console.log("player choice: " + playerSelection);
    console.log("computer choice: " + computerSelection);

    // Display the choices on screen. 

    // Figure out the winner
    let winner = win(playerSelection, computerSelection);

    // Increment the points
    increment(playerSelection, computerSelection, winner);
    console.log("Your Score: " + pScore);
    console.log("Computer Score: " + cScore);
}
