let win = 0;
let losse = 0;
let draw = 0;

function play(userChoice) {
  const choices = ["pierre", "feuille", "ciseau"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  const resultat = document.getElementById("result");

  resultat.textContent = "";

  resetBorders();

  determineWinner(userChoice, computerChoice);
}

function resetBorders() {
  const playerImages = document.querySelectorAll(".choice");
  playerImages.forEach((img) => img.classList.remove("selected", "loser", "egal"));
}

function determineWinner(userChoice, computerChoice) {
  const resultat = document.getElementById("result");
  const explain = document.getElementById("explain");
  const playerImage = document.getElementById(`player-${userChoice}`);

  const winComdition = {
    pierre: "ciseau",
    feuille: "pierre",
    ciseau: "feuille",
  };

  if (userChoice === computerChoice) {
    resultat.textContent = `Égalité !`;
    explain.textContent = `Vous avez tous deux choisi ${userChoice}.`
    playerImage.classList.add("egal");
    draw++;
  }
  else if (winComdition[userChoice] === computerChoice) {
    resultat.textContent = `Vous avez gagné !`;
    explain.textContent = `Vous avez choisi ${userChoice} et l'ordinateur a choisi ${computerChoice}.`;
    playerImage.classList.add("selected");
    win++;
  } 
  else{
    resultat.textContent = `Vous avez perdu !`;
    explain.textContent = `Vous avez choisi ${userChoice} et l'ordinateur a choisi ${computerChoice}.`;
    playerImage.classList.add("loser");
    losse++;
  }
  updateCounters();
}

function updateCounters() {
  document.getElementById("win").textContent = win;
  document.getElementById("losse").textContent = losse;
  document.getElementById("draw").textContent = draw;
}