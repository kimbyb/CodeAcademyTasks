const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Error');
  }
};



function getComputerChoice() {
  var choice = Math.floor(Math.random() * 3);
  switch(choice){
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

function determineWinner(userChoice, computerChoice){
  if (userChoice === computerChoice) {
    return 'tie';
  } else if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return ('Comp won');
      } else {
        return ('User won');
      }
  } else if (userChoice === 'paper'){
      if(computerChoice === 'scissors') {
        return('Comp won');
      } else {
        return('User won');
      }
  } else if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return ('Comp won');
      } else {
        return('User won');
      }
  }
}


const playGame = () => {
  const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice))
};


playGame();
