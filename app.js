document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");

  // ============================
  // DONNÉES : BONNES RÉPONSES
  // L'ordre correspond aux questions
  // ============================
  const bonnesReponses = [
    "Thales",
    "Librairie",
    "Steve Jobs",
    "Ancien president",
    "Developpeur"
  ];

  // ============================
  // Fonction pour créer une question
  // ============================
  function creerQuestion(titre, reponses,indexQuestion) {
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
      checkbox.name = "question" + indexQuestion; // pour regroupe selon le titre
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

  // fonction gerer les responses
 

  // ============================
  // QUESTIONS
  // ============================

creerQuestion("Qui est le futur grand dev ?", [
    "Thales", 
    "hawa", 
    "myriam"
    ],0
  );

creerQuestion("React est t-il un ?", [
    "framework", 
    "Librairie", 
    "Langage"],1);

creerQuestion("Qui est le Fondateur de Apple ?", [
    "Steve Jobs",
    "Barack Obama",
    "Bill Gates",
  ],2);
creerQuestion("Qui est Nelson Mandela ?", [
    "Ancien president",
    "Acteur",
    "Musicien"
],3);
creerQuestion("Qui suis-je ?", [
    "Developpeur", 
    "ecrivain", 
    "medecin"],4);


     // ============================
  // BOUTON SOUMETTRE
  // ============================
  const btnSubmit = document.createElement("button");
  btnSubmit.textContent = "Soumettre";
  btnSubmit.style.marginTop = "20px";

  container.appendChild(btnSubmit);


  // ============================
  // GESTION DES RÉPONSES
  // ============================
  btnSubmit.addEventListener("click", () => {
    let score = 0;

    // On parcourt chaque bonne réponse
    bonnesReponses.forEach((bonneReponse, index) => {

      // On récupère la réponse cochée pour cette question
      const choix = document.querySelector(
        `input[name="question${index}"]:checked`
      );

      // Si l'utilisateur a répondu
      if (choix) {
        // Comparaison simple
        if (choix.value === bonneReponse) {
          score++;
        }
      }
    });

    if(score === 5){
      alert('Felicitation ! ton score est : ' + score + " / " + bonnesReponses.length);
    }else{
          alert("Ton score est : " + score + " / " + bonnesReponses.length);

    }
  });








});
