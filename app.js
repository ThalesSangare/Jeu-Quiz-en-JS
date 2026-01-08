document.addEventListener("DOMContentLoaded", () => {
  //========================================
  //CREATION DES QUESTIONS
  //=========================================
  const questions = [
    {
      question: "Qui est le PDG de Apple ?",
      reponses: ["Thales", "Steve Jobs", "Bill Gates"],
      bonne: "Steve Jobs",
    },
    {
      question: "Qui est le futur grand dev ?",
      reponses: ["Thales", "Hawa", "Myriam"],
      bonne: "Thales",
    },
    {
      question: "React est un ?",
      reponses: ["Framework", "Librairie", "Langage"],
      bonne: "Librairie",
    },
  ];

  // LES VARIABLES
  let indexQuestion = 0;
  let score = 0;

  const container = document.querySelector(".container");
  const questionEl = document.getElementById("question");
  const reponsesEl = document.getElementById("reponses");
  const btnSuivant = document.getElementById("btn");
  const scoreEl = document.getElementById("score");

  const btnReprendre = document.createElement("button");
  btnReprendre.textContent = "Recommencer la partie";

  //=======================
  //FONCTION AFFICHAGE DES QUESTION
  //================================
  function afficherQuestion() {
    const q = questions[indexQuestion];

    questionEl.textContent = q.question;
    reponsesEl.innerHTML = "";

    q.reponses.forEach((rep) => {
      const li = document.createElement("li");

      const checkbox = document.createElement("input");
      checkbox.type = "radio";
      checkbox.name = "reponse";
      checkbox.value = rep;

      li.appendChild(checkbox);
      li.append(" " + rep);

      reponsesEl.appendChild(li);
    });
  }

  //=======================
  //FUNCTION POUR RECOMMENCER LE JEU A LA FIN
  //================================

  function resetQuiz() {
    indexQuestion = 0;
    score = 0;
    scoreEl.textContent = "";
    btnSuivant.style.display = "block";
    btnReprendre.remove();
    afficherQuestion();
  }

  //=======================
  //BOUTON SUIVANT
  //================================
  btnSuivant.addEventListener("click", () => {
    const choix = document.querySelector('input[name="reponse"]:checked');

    if (!choix) {
      alert("Choisis une réponse");
      return;
    }

    if (choix.value === questions[indexQuestion].bonne) {
      score++;
    }
    indexQuestion++;

    if (indexQuestion < questions.length) {
      afficherQuestion();
    } else {
      questionEl.textContent = "Quiz terminé";
      reponsesEl.innerHTML = "";
      btnSuivant.style.display = "none";
      if (score === questions.length) {
        scoreEl.innerHTML = `
        Bravo ! Tu as tout trouvé :) <br>
        Ton score : ${score} / ${questions.length} `;
      }else{
        scoreEl.textContent = `Ton score : ${score} / ${questions.length}`;
      }
      

      container.appendChild(btnReprendre);
      btnReprendre.addEventListener("click", resetQuiz);
    }
  });

  afficherQuestion();
});
