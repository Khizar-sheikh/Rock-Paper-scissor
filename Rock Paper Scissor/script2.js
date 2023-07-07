const resetBtn = document.querySelector("#playagain");
let playerPoints = document.querySelector("#playerscore");
let computerPoints =
document.querySelector("#computerscore");
let roundResults = document.querySelector('#result-text')
const buttons = document.querySelectorAll('div.selections button');

let playerScore = 0;
let computerScore = 0;

resetBtn.addEventListener('click', () => location.reload());

buttons.forEach((button) => {
    button.addEventListener('click', () => {
      playround(button.id);
    });
  });
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
  }
function playround(playerSelection){
     let computerSelection = getComputerChoice() ;
     if (playerSelection === computerSelection){
        roundResults.textContent= '"Tie!" Yourchoice and computerSelection are same.'
    }
     else if( (playerSelection==="rock" && computerSelection ==="scissors")||
     (playerSelection==="paper" && computerSelection==="rock" )||
     (playerSelection==="scissors"&& computerSelection==="paper")
     ){
        roundResults.textContent=  `"You Win!" ${playerSelection} beats ${computerSelection} `
        playerScore++
     }
     else  {
        roundResults.textContent= `"You Lose!" ${computerSelection} beats ${playerSelection} `
        computerScore++
     } 
     // Update Score
     document.getElementById('playerscore').textContent = playerScore;
     document.getElementById('computerscore').textContent = computerScore;
     if (playerScore === 5 || computerScore === 5) {
        let gameResult = '';
        if (playerScore > computerScore) {
          gameResult = 'You win the game!';
        } else if (playerScore < computerScore) {
          gameResult = 'You lose the game!';
        } else {
          gameResult = "It's a tie!";
        }
        roundResults.textContent = `Game Over! ${gameResult}`;
        // Disable buttons after game over
        buttons.forEach((button) => {
          button.disabled = true;
        });
      }
}
// const resetBtn = document.querySelector("#playagain");
// let playerScore = 0;
// let computerScore = 0;
// let roundResults = document.querySelector('#result-text');
// const buttons = document.querySelectorAll('div.selections button');

// resetBtn.addEventListener('click', () => location.reload());

// buttons.forEach((button) => {
//   button.addEventListener('click', () => {
//     playround(button.id);
//   });
// });

// function getComputerChoice() {
//   const choices = ['rock', 'paper', 'scissors'];
//   const randomNumber = Math.floor(Math.random() * choices.length);
//   return choices[randomNumber];
// }

// function playround(playerSelection) {
//   let computerSelection = getComputerChoice();

//   if (playerSelection === computerSelection) {
//     roundResults.textContent = 'Tie! Your choice and computer choice are the same.';
//   } else if (!(playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors')) {
//     roundResults.textContent = 'You made an invalid choice.';
//   } else if (
//     (playerSelection === 'rock' && computerSelection === 'scissors') ||
//     (playerSelection === 'paper' && computerSelection === 'rock') ||
//     (playerSelection === 'scissors' && computerSelection === 'paper')
//   ) {
//     roundResults.textContent = `You Win! ${playerSelection} beats ${computerSelection}.`;
//     playerScore++;
//   } else {
//     roundResults.textContent = `You Lose! ${computerSelection} beats ${playerSelection}.`;
//     computerScore++;
//   }

  // Update scores
//   document.getElementById('playerscore').textContent = playerScore;
//   document.getElementById('computerscore').textContent = computerScore;

  // Check for game end
//   if (playerScore === 5 || computerScore === 5) {
//     let gameResult = '';
//     if (playerScore > computerScore) {
//       gameResult = 'You win the game!';
//     } else if (playerScore < computerScore) {
//       gameResult = 'You lose the game!';
//     } else {
//       gameResult = "It's a tie!";
//     }
//     roundResults.textContent = `Game Over! ${gameResult}`;
//     // Disable buttons after game over
//     buttons.forEach((button) => {
//       button.disabled = true;
//     });
//   }
// }
