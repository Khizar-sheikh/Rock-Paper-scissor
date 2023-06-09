
function getComputerChoice(){
    const Computer = ['ROCK','PAPER','SCISSORS']
    const randomNumber = Math.floor(Math.random() * Computer.length);
    return Computer[randomNumber]
}

function playround(playerSelection, computerSelection){
    let playerChoice=playerSelection.toLowerCase()
     let computerChoice=computerSelection.toLowerCase()
     if (playerChoice === computerChoice)
     return `"Tie!" yourchoice and computerchoice are same.`
     else if( (playerChoice==="rock" && computerChoice ==="scissor")||
     (playerChoice==="paper" && computerChoice==="rock" )||
     (playerChoice==="scissor"&& computerChoice==="paper")
     ){
        return `"You Win!" ${playerChoice} beats ${computerChoice} `
     }
     else{
       return `"You Lose!" ${computerChoice} beats ${playerChoice} `
     }
}
function game(){
   
   let playerSelection=prompt('ROCK','PAPER','SCISSORS');

   let computerSelection= getComputerChoice();
   console.log(playround(playerSelection, computerSelection)); 
   playerSelection=prompt('ROCK','PAPER','SCISSORS');
   console.log(playround(playerSelection, computerSelection));   
   playerSelection=prompt('ROCK','PAPER','SCISSORS'); 
   console.log(playround(playerSelection, computerSelection));    
   playerSelection=prompt('ROCK','PAPER','SCISSORS');
   console.log(playround(playerSelection, computerSelection));    
   playerSelection=prompt('ROCK','PAPER','SCISSORS');
   console.log(playround(playerSelection, computerSelection));  
   
}
game()


