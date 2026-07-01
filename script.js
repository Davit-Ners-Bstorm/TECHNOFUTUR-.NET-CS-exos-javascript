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


// Exercice 3
const dateInput = document.getElementById('dob');
const ageBtn = document.getElementById('ageBtn');
const ageResultat = document.getElementById('dateResult');

ageBtn.addEventListener('click', () => {
    const birthDateValue = dateInput.value;

    if (!birthDateValue) {
        ageResultat.textContent = 'Encode ta date de naissance';
        return;
    }

    const birthDate = new Date(birthDateValue);
    const today = new Date();

    if (birthDate > today) {
        ageResultat.textContent = 'Tu peux pas être né dans le futur';
        return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;

        const daysInPreviousMonth = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        ).getDate();

        days += daysInPreviousMonth;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    ageResultat.textContent = `Vous avez ${years} an${years > 1 ? 's' : ''}, ${months} mois et ${days} jours;`;
});



// Exercice : Controlleur d'accès
const niveauInput  = document.getElementById("niveau");
const heureInput   = document.getElementById("heure");
const badgeInput   = document.getElementById("badge");
const btnVerifier  = document.getElementById("btnVerifier");
const statut       = document.getElementById("statut");
const message      = document.getElementById("message");

btnVerifier.addEventListener('click', () => {
    const niveau = niveauInput.valueAsNumber;
    const heure = heureInput.valueAsNumber;

    if (!niveau || isNaN(heure)) {
        statut.textContent = "Erreur";
        message.textContent = "Complète tout les champs";
        return;
    }

    const badgeActif = badgeInput.checked;
    const horaireOuverts = heure >= 8 && heure <= 20;

    if (!badgeActif) {
        statut.textContent = 'ACCES REFUSÉ';
        message.textContent = 'Badge desactivé';
    }
    else if (niveau < 3) {
        statut.textContent = 'ACCES REFUSÉ';
        message.textContent = "Habillitation insuffisante";
    }
    else if (niveau === 5) {
        statut.textContent = 'ACCES AUTORISÉ';
        message.textContent = "Welcome Admin";
    }
    else if (!horaireOuverts) {
        statut.textContent = 'ACCES REFUSÉ';
        message.textContent = "Mauvais horaire";
    }
    else {
        statut.textContent = 'ACCES AUTORISÉ';
        message.textContent = "Welcome";
    }

});
