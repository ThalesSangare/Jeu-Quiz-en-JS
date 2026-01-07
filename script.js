document.addEventListener('DOMContentLoaded', () => {

    const container = document.querySelector('.container');

    // Fonction pour créer une question
    function creerQuestion(titre, reponses) {

        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        const h4 = document.createElement('h4');
        h4.textContent = titre;

        const ul = document.createElement('ul');

        reponses.forEach((reponse) => {

            const li = document.createElement('li');

            const checkbox = document.createElement('input');
            checkbox.type = 'radio';            // radio = 1 seul choix
            checkbox.name = titre;              // groupe de réponses
            checkbox.value = reponse;

            const label = document.createElement('label');
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

    creerQuestion(
        "Qui est le président de la Guinée ?",
        ["Thales Sangaré", "Sékou Touré", "Hawa Sangaré"]
    );

    creerQuestion(
        "Quel langage est utilisé pour le web ?",
        ["Java", "Python", "JavaScript"]
    );

});
