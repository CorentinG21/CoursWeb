function play(userChoice) {
  const choices = ["pierre", "feuille", "ciseau"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  const resultElement = document.getElementById("result");

  resultElement.textContent = "";

  resetBorders();

  determineWinner(userChoice, computerChoice);
}

function resetBorders() {
  const playerImages = document.querySelectorAll(".choice");
  playerImages.forEach((img) => img.classList.remove("selected", "loser", "egal"));
}

function determineWinner(userChoice, computerChoice) {
  const resultElement = document.getElementById("result");

  const playerImage = document.getElementById(`player-${userChoice}`);

  const winComdition = {
    pierre: "ciseau",
    feuille: "pierre",
    ciseau: "feuille",
  };

  if (userChoice === computerChoice) {
    resultElement.textContent = `Égalité ! Vous avez tous deux choisi ${userChoice}.`;
    playerImage.classList.add("egal");
    return;
  }

  if (winComdition[userChoice] === computerChoice) {
    resultElement.textContent = `Vous avez gagné ! Vous avez choisi ${userChoice} et l'ordinateur a choisi ${computerChoice}.`;
    playerImage.classList.add("selected");
  } 
  else {
    resultElement.textContent = `Vous avez perdu ! Vous avez choisi ${userChoice} et l'ordinateur a choisi ${computerChoice}.`;
    playerImage.classList.add("loser");
  }
}
