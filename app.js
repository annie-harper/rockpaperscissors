  
    var score = {
      "computer": 0,
      "player": 0
    }

    function randomNumber(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    function computerPlay() {
      const computerNumber = randomNumber(3);
      const computerOptions = ['rock', 'paper', 'scissors'];
      return computerOptions[computerNumber];
    }

    // function capPlayer(playerSelection) {
    //   const Player = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    // }

    // function capComputer(computerPlay) {
    //   const Computer = computerPlay.charAt(0).toUpperCase() + computerPlay.slice(1);
    // }

    function playRound(playerSelection, computerPlay) {
      const playerChoice = playerSelection.toLowerCase();
      const options = ['scissors', 'rock', 'paper'];
      const capPlayer = playerChoice.charAt(0).toUpperCase() + playerSelection.slice(1);
      const capComputer = computerPlay.charAt(0).toUpperCase() + computerPlay.slice(1);


      if (options.indexOf(playerChoice) == 0 && options.indexOf(computerPlay == 2)) {
          score ["player"]++;
          return `Player chose ${capPlayer}, computer chose ${capComputer}. Player Wins!`
      }
      else if (options.indexOf(playerChoice) > options.indexOf(computerPlay)){
          score ["player"]++;
          return `Player chose ${capPlayer}, computer chose ${capComputer}. Player Wins!`
      }
      else if (options.indexOf(playerChoice) == options.indexOf(computerPlay)){
          score ["player"];
          return `Player and computer both chose ${capPlayer}. It's a tie!`      
        }
      else {
          score["computer"]++;
          return `Player chose ${capPlayer}, computer chose ${capComputer}. Computer Wins!`
      }
    };

    function game() {
      for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Choose: rock, paper, or scissors");
        const result = playRound(playerSelection, computerPlay());
        console.log(`${result} player score =  ${score["player"]} computer score = ${score["computer"]}`);
      }
    }
    game();
    console.log(`player score = ${score["player"]} computer score = ${score["computer"]}`);

    