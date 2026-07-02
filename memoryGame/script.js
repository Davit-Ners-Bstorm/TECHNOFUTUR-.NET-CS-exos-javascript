const SYMBOLES = ["🍎","🍊","🍋","🍇","🍓","🍒","🥝","🍉"];

let premiereCarteSelectionnee = null;
let deuxiemeCarteSelectionnee = null;
let verrouille = false;
let nbTentatives = 0;
let nbPaires = 0;
let timerInterval = null;
let secondes = 0;

const board = document.getElementById('game-board');
const statMoves = document.getElementById('stat-moves');
const statPairs = document.getElementById('stat-pairs');
const statTime = document.getElementById('stat-time');
const victoryMsg = document.getElementById('victory-msg');
const victoryDetail = document.getElementById('victory-detail');
const btnRestart = document.getElementById('btn-restart');

function shuffle(tableau) {
    for (let i = tableau.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tableau[i], tableau[j]] = [tableau[j], tableau[i]];
    }
    return tableau;
}

function creerCartes() {
    const paires = [...SYMBOLES, ...SYMBOLES];
    const melange = shuffle(paires);

    board.innerHTML = "";

    for (const symbole of melange) {
        const carte = document.createElement('div');
        carte.classList.add('card');

        carte.innerHTML = `
            <div class="card-inner">
                <div class="card-face card-back"></div>
                <div class="card-face card-front">${symbole}</div>
            </div>
        `;

        carte.addEventListener('click', () => gererClic(carte));
        board.appendChild(carte);
    }
}

function gererClic(carte) {
    if (verrouille) return;
    if (carte.classList.contains('flipped')) return;
    if (carte.classList.contains('matched')) return;

    if (nbTentatives === 0 && !premiereCarteSelectionnee) {
        demarrerChrono();
    }

    carte.classList.add('flipped');

    if (!premiereCarteSelectionnee) {
        premiereCarteSelectionnee = carte;
        return;
    }

    deuxiemeCarteSelectionnee = carte;
    nbTentatives++;
    statMoves.textContent = nbTentatives;

    verifierPaire();
}

function verifierPaire() {
    const c1 = premiereCarteSelectionnee.querySelector('.card-front').textContent;
    const c2 = deuxiemeCarteSelectionnee.querySelector('.card-front').textContent;

    if (c1 === c2) {
        premiereCarteSelectionnee.classList.add('matched');
        deuxiemeCarteSelectionnee.classList.add('matched');
        nbPaires++;
        statPairs.textContent = `${nbPaires}/8`;
        reinitialiserSelection();

        if (nbPaires === 8) {
            terminerJeu();
        }
    } else {
        verrouille = true;
        setTimeout(() => {
            premiereCarteSelectionnee.classList.remove('flipped');
            deuxiemeCarteSelectionnee.classList.remove('flipped');
            reinitialiserSelection();
            verrouille = false;
        }, 1000);
    }
}

function reinitialiserSelection() {
    premiereCarteSelectionnee = null;
    deuxiemeCarteSelectionnee = null;
}

function demarrerChrono() {
    secondes = 0;
    timerInterval = setInterval(() => {
        secondes++;
        statTime.textContent = secondes + 's';
    }, 1000);
}

function arreterChrono() {
    clearInterval(timerInterval);
}

function terminerJeu() {
    arreterChrono();
    victoryDetail.textContent = `${nbTentatives} tentatives en ${secondes} secondes`;
    victoryMsg.classList.add('visible');
}

function reinitialiserJeu() {
    arreterChrono();
    premiereCarteSelectionnee = null;
    deuxiemeCarteSelectionnee = null;
    verrouille = false;
    nbTentatives = 0;
    nbPaires = 0;
    secondes = 0;
    statMoves.textContent = '0';
    statPairs.textContent = '0/8';
    statTime.textContent = '0s';
    victoryMsg.classList.remove('visible');
    creerCartes();
}

btnRestart.addEventListener('click', reinitialiserJeu);
creerCartes();
