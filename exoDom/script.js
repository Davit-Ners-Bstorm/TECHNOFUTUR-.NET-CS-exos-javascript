const filmsTab = ['Les Visiteurs', 'Interstellar', 'Inglorious Bastards'];
const filmContainer = document.getElementById('filmContainer');
const addInput = document.getElementById('addInput');
const addBtn = document.getElementById('addBtn');
const errorString = document.getElementById('error');

function afficherFilm() {
    filmContainer.innerHTML = '';
    filmsTab.forEach(function(film, index) {
        const filmElement = document.createElement('li');
        filmElement.textContent = film;

        const delBtn = document.createElement('button');
        delBtn.textContent = 'Supprimer';

        delBtn.addEventListener('click', () => {
            filmsTab.splice(index, 1);
            afficherFilm();
        });

        filmElement.append(delBtn);
        filmContainer.append(filmElement);
    })
};

afficherFilm();

addBtn.addEventListener('click', () => {
    errorString.textContent = '';
    const filmTitle = addInput.value;

    if (!filmTitle) {
        errorString.textContent = "Erreur, l'input ne peut pas être vide";
        return;
    }

    filmsTab.push(filmTitle);
    afficherFilm();
    addInput.value = '';
    addInput.focus();
});
