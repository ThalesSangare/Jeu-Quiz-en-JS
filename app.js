document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");

  // Fonction pour créer une question
  function creerQuestion(titre, reponses) {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");

    const h4 = document.createElement("h4");
    h4.textContent = titre;

    const ul = document.createElement("ul");

    // Parcours chaque reponse et fais ça pour chacun d'eux
    reponses.forEach((reponse) => {
      const li = document.createElement("li");

      const checkbox = document.createElement("input");
      checkbox.type = "radio"; // radio = 1 seul choix
      checkbox.name = titre; // pour regroupe selon le titre
      checkbox.value = reponse;

      const label = document.createElement("label");
      label.textContent = " " + reponse;

      li.appendChild(checkbox);
      li.appendChild(label);
      ul.appendChild(li);
    });
    questionDiv.appendChild(h4);
    questionDiv.appendChild(ul);

    container.appendChild(questionDiv);
  }

  // ============================
  // QUESTIONS
  // ============================

  creerQuestion("Qui est le futur grand dev ?", ["Thales", "hawa", "myriam"]);

  creerQuestion("React est t-il un ?", ["framework", "Librairie", "Langage"]);

  creerQuestion("Qui est le Fondateur de Apple ?", [
    "Steve Jobs",
    "Barack Obama",
    "Bill Gates",
  ]);
  creerQuestion("Qui est Nelson Mandela ?", [
    "Ancien president",
    "Acteur",
    "Musicien"
]);
  creerQuestion("Qui suis-je ?", [
    "Developpeur", 
    "ecrivain", 
    "medecin"]);
});
