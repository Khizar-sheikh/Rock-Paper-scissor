
function getComputerChoice(){
    const Computer = ['ROCK','PAPER','SCISSOR']
    const randomNumber = Math.floor(Math.random() * Computer.length);
    return Computer[randomNumber]
}

function playround(playerSelection, computerSelection){
    let playerChoice=playerSelection.toLowerCase()
     let computerChoice=computerSelection.toLowerCase()
     if (playerChoice === computerChoice)
     return `"Tie!" yourchoice and computerchoice are same.`
     else if(!(playerChoice=== "rock" &&"paper" &&"scissor")){
      return "You made an invalid choice "
     }
     else if( (playerChoice==="rock" && computerChoice ==="scissor")||
     (playerChoice==="paper" && computerChoice==="rock" )||
     (playerChoice==="scissor"&& computerChoice==="paper")
     ){
        return `"You Win!" ${playerChoice} beats ${computerChoice} `
     }
     else  {
       return `"You Lose!" ${computerChoice} beats ${playerChoice} `
     }
}
function game(){
   
   let playerSelection=prompt('ROCK','PAPER','SCISSOR');

   let computerSelection= getComputerChoice();
   console.log(playround(playerSelection, computerSelection)); 
   playerSelection=prompt('ROCK','PAPER','SCISSOR');
   console.log(playround(playerSelection, computerSelection));   
   playerSelection=prompt('ROCK','PAPER','SCISSOR'); 
   console.log(playround(playerSelection, computerSelection));    
   playerSelection=prompt('ROCK','PAPER','SCISSOR');
   console.log(playround(playerSelection, computerSelection));    
   playerSelection=prompt('ROCK','PAPER','SCISSOR');
   console.log(playround(playerSelection, computerSelection));
   
   console.log("Game Ended!")
   
}
game()


