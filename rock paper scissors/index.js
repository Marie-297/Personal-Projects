playerHand = document.querySelector('.playerhand');
computerHand = document.querySelector('.computerhand');
gamePlay = document.querySelector('.gameCont');
starter = document.querySelector('.starter');
rule = document.querySelector('.rule');
time = document.querySelector('.time');
userScore = document.querySelector('.userscore');
compScore = document.querySelector('.compscore');
tieScore = document.querySelector('.tiescore');
finishGame = document.querySelector('.finishgame');

let score = (JSON.parse(localStorage.getItem('score')))
if (score === null) {
  score = {
    Wins: 0,
    Losses : 0,
    Ties : 0
  };
}

scoresUpdate();
//Initial Time
let seconds = 0;
let minutes = 0;
//For timer
let timeGenerator = () => {
  seconds += 1;
  //minutes condition
  if (seconds >= 60) {
    minutes += 1;
    seconds = 0;
  }
  //formatting time in displaying
  let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
  let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
  time.innerHTML = `<span>Time:</span>${minutesValue}:${secondsValue}`;
};

function playGame(move) {
  playerHand.src = "../images/rock-emoji.png"
  computerHand.src = "../images/rock-emoji.png"
  playerHand.classList.add("playeranimate");
  computerHand.classList.add("computeranimate");
  const computerMove = computerRandomMove();
  let result = '';
  if (move === 'rock') {
    if (computerMove === 'rock') {
      result = 'IT IS A TIE!';
    } else if (computerMove === 'paper') {
        result = 'YOU LOSE!';
    } else if (computerMove === 'scissors') {
        result = 'YOU WIN!';
    }
  } else if (move === 'paper') {
    if (computerMove === 'rock') {
        result = 'YOU WIN!';
    } else if (computerMove === 'paper') {
        result = 'IT IS A TIE!';
    } else if (computerMove === 'scissors') {
        result = 'YOU LOSE!';
    }
  } else if (move === 'scissors') {
    if (computerMove === 'rock') {
      result =  'YOU LOSE!';
    } else if (computerMove === 'paper') {
        result = 'YOU WIN!';
    } else if (computerMove === 'scissors') {
        result = 'IT IS A TIE!';
    }
  };
  setTimeout(() => {
    if (result === 'YOU WIN!') {
      score.Wins = score.Wins + 1; 
    } else if (result === 'YOU LOSE!') {
      score.Losses = score.Losses + 1;
    } else if (result === 'IT IS A TIE!') {
      score.Ties = score.Ties + 1;
    }
    
    document.querySelector('.js-score-state').innerHTML = result;
    
    computerHand.src = `../images/${computerMove}-emoji.png`;
    playerHand.src = `../images/${move}-emoji.png`;
    playerHand.classList.remove("playeranimate");
    computerHand.classList.remove("computeranimate");
    
    localStorage.setItem('score', JSON.stringify(score));
  
      scoresUpdate();
    }, 2000);
  
}

function scoresUpdate() {
  document.querySelector('.scoremarks').innerHTML = `Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`;
}

function computerRandomMove() {
  const randonNumber = Math.random();
  let computerMove = '';
  if (randonNumber >= 0 && randonNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randonNumber >= 1 / 3 && randonNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randonNumber >= 2 / 3 && randonNumber <= 1) {
    computerMove = 'scissors';
  };

  return computerMove;
}
function clickMe() {
  starter.classList.add('dimm');
  rule.classList.remove('hidden');
}
function okBtn() {
  location.reload();
  console.log("bye");
}
function startGame() {
  starter.classList.add('hidden');
  gamePlay.classList.remove('hidden');
  interval = setInterval(timeGenerator, 1000);
  setTimeout(stopGame,120000);
}
function stopGame() {
  gamePlay.classList.add('hidden');
  finishGame.classList.remove('hidden');
  userScore.textContent = ` ${score.Wins}`;
  compScore.textContent = ` ${score.Losses}`;
  tieScore.textContent = ` ${score.Ties}`;
  score.Wins = 0;
  score.Losses = 0;
  score.Ties = 0;
  localStorage.removeItem('score')
  clearInterval(interval);
}
function playAgain() {
  starter.classList.add('hidden');
  finishGame.classList.add('hidden');
  gamePlay.classList.remove('hidden');
  score.Wins = 0;
  score.Losses = 0;
  score.Ties = 0;
  localStorage.removeItem('score')
  scoresUpdate();
  seconds = 0;
  minutes = 0;
  timeGenerator();
  interval = setInterval(timeGenerator, 1000);
  setTimeout(stopGame,120000);
}

function reset() {
  clearInterval(interval);
  starter.classList.add('hidden');
  finishGame.classList.add('hidden');
  gamePlay.classList.remove('hidden');
  score.Wins = 0;
  score.Losses = 0;
  score.Ties = 0;
  localStorage.removeItem('score')
  scoresUpdate();
  seconds = 0;
  minutes = 0;
  timeGenerator();
  interval = setInterval(timeGenerator, 1000);
  setTimeout(stopGame,120000);
}

