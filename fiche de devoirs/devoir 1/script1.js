// Variables nécessaires
let currentInput = ""; // Stocke la saisie actuelle
let previousInput = ""; // Stocke la saisie précédente
let operator = null; // Stocke l'opérateur en cours

// Références aux éléments du DOM
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

// Ajout d'événements aux boutons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (button.classList.contains("operation")) {
      // Gestion des opérateurs
      handleOperator(value);
    } else if (button.classList.contains("clear")) {
      // Effacer l'écran
      clearDisplay();
    } else if (button.classList.contains("equal")) {
      // Calculer le résultat
      calculate();
    } else {
      // Ajouter un chiffre ou un point décimal
      appendNumber(value);
    }
  });
});

// Fonction pour ajouter un chiffre ou un point
function appendNumber(number) {
  if (number === "." && currentInput.includes(".")) return; // Éviter les points multiples
  currentInput += number;
  updateDisplay(currentInput);
}

// Fonction pour gérer les opérateurs
function handleOperator(op) {
  if (currentInput === "") return;
  operator = op;
  previousInput = currentInput;
  currentInput = "";
}

// Fonction pour effectuer les calculs
function calculate() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  if (isNaN(prev) || isNaN(current)) return;
// operateur +
  switch (operator) {
    case "+":
      result = prev + current;
      break;
// operateur -
    case "-":
      result = prev - current;
      break;
// operateur *
    case "*":
      result = prev * current;
      break;
// operateur /
    case "/":
// ici on prevoit l'eventualite ou le nombre est divise par o
      result = current === 0 ? "Erreur" : prev / current;
      break;
    default:
      return;
  }
  currentInput = result.toString();
  operator = null;
  previousInput = "";
  updateDisplay(currentInput);
}

// Fonction pour mettre à jour l'écran
function updateDisplay(value) {
  display.textContent = value;
}

// Fonction pour effacer l'écran
function clearDisplay() {
  currentInput = "";
  previousInput = "";
  operator = null;
  updateDisplay("0");
}
