const game = (language = "en") => {
  const options = ["rock", "paper", "scissors"];
  let userScore = 0;
  let cpuScore = 0;

  const cpuPlay = () => {
    return options[Math.floor(Math.random() * options.length)];
  };

  const playRound = (userSelections, cpuSelections) => {
    if (userSelections === cpuSelections) {
      return language === "en" ? "Draw match!" : "Ничья!";
    } else if (
      (userSelections === "rock" && cpuSelections === "scissors") ||
      (userSelections === "paper" && cpuSelections === "rock") ||
      (userSelections === "scissors" && cpuSelections === "paper")
    ) {
      userScore++;
      return language === "en"
        ? `You won! ${userSelections} beats ${cpuSelections}`
        : `Вы выиграли! ${userSelections} побеждает ${cpuSelections}`;
    } else {
      cpuScore++;
      return language === "en"
        ? `You lose! ${cpuSelections} beats ${userSelections}`
        : `Вы проиграли! ${cpuSelections} побеждает ${userSelections}`;
    }
  };

  const displayScore = () => {
    alert(
      language === "en"
        ? `Player score: ${userScore}`
        : `Счет игрока: ${userScore}`
    );
    alert(
      language === "en"
        ? `Computer score: ${cpuScore}`
        : `Счет компьютера: ${cpuScore}`
    );
  };

  const playGame = () => {
    for (let i = 0; i < 5; i++) {
      const userSelections = prompt(
        language === "en"
          ? "Rock, paper or scissors?"
          : "Камень, ножницы или бумага?"
      ).toLowerCase();
      const cpuSelections = cpuPlay();
      alert(playRound(userSelections, cpuSelections));
      displayScore();
    }

    if (userScore > cpuScore) {
      alert(language === "en" ? "You win the game!" : "Вы выиграли игру!");
    } else if (cpuScore > userScore) {
      alert(language === "en" ? "You lose the game!" : "Вы проиграли игру!");
    } else {
      alert(language === "en" ? "Draw match!" : "Ничья!");
    }
  };

  return playGame;
};

const language = prompt("Choose language: 'en' for English, 'ru' for Russian");

const play = game(language);
play();
