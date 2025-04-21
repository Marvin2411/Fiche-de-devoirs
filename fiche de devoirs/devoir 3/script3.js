// Références aux éléments du DOM
const bmiForm = document.getElementById("bmiForm");
const resultDiv = document.getElementById("result");
const bmiValue = document.getElementById("bmiValue");
const bmiCategory = document.getElementById("bmiCategory");

// Gestion de la soumission du formulaire
bmiForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Récupération des entrées utilisateur
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);

  if (weight > 0 && height > 0) {
    // Calcul de l'IMC
    const bmi = (weight / (height * height)).toFixed(1);

    // Détermination de la catégorie d'IMC
    let category = "";
    let colorClass = "";

    if (bmi < 18.5) {
      category = "Insuffisance pondérale";
      colorClass = "text-yellow-500";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      category = "Poids normal";
      colorClass = "text-green-500";
    } else if (bmi >= 25 && bmi <= 29.9) {
      category = "Surpoids";
      colorClass = "text-orange-500";
    } else {
      category = "Obésité";
      colorClass = "text-red-500";
    }

    // Mise à jour des résultats
    bmiValue.textContent = `Votre IMC est : ${bmi}`;
    bmiCategory.textContent = `Catégorie : ${category}`;
    bmiCategory.className = colorClass; // Code couleur basé sur la catégorie
    resultDiv.classList.remove("hidden");
  } else {
    alert("Veuillez entrer des valeurs valides !");
  }
});
