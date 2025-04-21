// Références aux éléments du DOM
const textInput = document.getElementById("textInput");
const clearBtn = document.getElementById("clearBtn");
const wordCount = document.getElementById("wordCount");
const charCountWithSpaces = document.getElementById("charCountWithSpaces");
const charCountWithoutSpaces = document.getElementById("charCountWithoutSpaces");
const averageWordLength = document.getElementById("averageWordLength");
const readingTime = document.getElementById("readingTime");

// Ajouter un événement pour la saisie en temps réel
textInput.addEventListener("input", updateStats);

// Effacer le texte et réinitialiser les stats
clearBtn.addEventListener("click", () => {
  textInput.value = "";
  updateStats();
});

// Fonction pour mettre à jour les statistiques
function updateStats() {
  const text = textInput.value;

  // Calculs
  const words = text.trim() ? text.trim().split(/\s+/) : [];
  const numWords = words.length;
  const numCharsWithSpaces = text.length;
  const numCharsWithoutSpaces = text.replace(/\s/g, "").length;
  const avgWordLength = numWords ? (numCharsWithoutSpaces / numWords).toFixed(2) : 0;
  const estimatedReadingTime = Math.ceil(numWords / 200); // Lecture : 200 mots par minute

  // Mise à jour du DOM
  wordCount.textContent = numWords;
  charCountWithSpaces.textContent = numCharsWithSpaces;
  charCountWithoutSpaces.textContent = numCharsWithoutSpaces;
  averageWordLength.textContent = avgWordLength;
  readingTime.textContent = estimatedReadingTime > 0 ? `${estimatedReadingTime} min` : "0 sec";
}
