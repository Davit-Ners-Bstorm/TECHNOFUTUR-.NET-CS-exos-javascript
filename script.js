// Exercice 1
// Recuperation des elements HTML
const inputName = document.getElementById('nom');
const inputAge = document.getElementById('age');
const res1 = document.getElementById('res1');
const btn1 = document.getElementById('btn1');

btn1.addEventListener('click', () => {
    const name = inputName.value;
    const age = inputAge.value;
    // res1.textContent = "Bonjour, je m'appelle " + name + ", et j'ai " + age + ' ans.';
    res1.textContent = `Bonjour, je m'appelle ${name}, et j'ai ${age} ans`;
});



// Exercice IMC

// Recuperation des elements HTML
const inputTaille = document.getElementById('taille');
const inputPoids = document.getElementById('poids');
const imcBtn = document.getElementById('imcBtn');
const imcRes = document.getElementById('resultat');
const imcStatus = document.getElementById('status');

imcBtn.addEventListener('click', () => {
    const tailleValue = inputTaille.valueAsNumber;
    const poidsValue = inputPoids.valueAsNumber;

    if (!tailleValue || !poidsValue) {
        imcRes.textContent = 'Veuillez remplir tout les champs';
        return;
    }

    const tailleEnMetres = tailleValue / 100;

    const resultatIMC = (poidsValue / (tailleEnMetres ** 2)).toFixed(2);

    if (resultatIMC < 18.5) {
        imcStatus.textContent = 'Vous êtes en sous poids';
    } else if (resultatIMC < 25) {
        imcStatus.textContent = "Poids santé";
    } else if (resultatIMC < 30) {
        imcStatus.textContent = 'Surpoids';
    } else {
        imcStatus.textContent = 'Obesité';
    }

    imcRes.textContent = `Votre IMC est de ${resultatIMC}`;


})