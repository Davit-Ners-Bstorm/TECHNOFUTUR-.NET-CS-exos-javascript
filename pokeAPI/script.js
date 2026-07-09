const formulaire = document.getElementById("formulaire-recherche");
const inputPokemon = document.getElementById("input-pokemon");
const messageErreur = document.getElementById("message-erreur");
const cartePokemon = document.getElementById("carte-pokemon");
const boutonAleatoire = document.getElementById("bouton-aleatoire");
const checkboxShiny = document.getElementById("version-shiny");
const chargement = document.getElementById("chargement");
const sectionHistorique = document.getElementById("section-historique");
const listeHistorique = document.getElementById("historique-recherches");

const historique = [];
let pokemonCourant = null;

formulaire.addEventListener("submit", async (event) => {
    event.preventDefault();

    const valeur = inputPokemon.value.trim().toLowerCase();

    if (!valeur) {
        messageErreur.textContent = "Merci de renseigner un nom ou un numéro.";
        cartePokemon.classList.remove("visible");
        return;
    }

    await rechercherPokemon(valeur);
});

boutonAleatoire.addEventListener("click", async () => {
    const numeroAleatoire = Math.floor(Math.random() * 1010) + 1;
    inputPokemon.value = numeroAleatoire;
    await rechercherPokemon(numeroAleatoire);
});

checkboxShiny.addEventListener("change", () => {
    if (pokemonCourant) {
        afficherCarte(pokemonCourant);
    }
});

async function rechercherPokemon(nomOuId) {
    chargement.hidden = false;
    messageErreur.textContent = "";
    cartePokemon.classList.remove("visible");

    try {
        const reponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomOuId}`);

        if (!reponse.ok) {
            throw new Error("Pokémon introuvable");
        }

        const data = await reponse.json();
        pokemonCourant = data;
        afficherCarte(data);
        ajouterHistorique(data);
    } catch (erreur) {
        pokemonCourant = null;
        messageErreur.textContent = "Pokémon introuvable, vérifie l'orthographe.";
        cartePokemon.classList.remove("visible");
    } finally {
        chargement.hidden = true;
    }
}

function afficherCarte(data) {
    const types = data.types.map(type => type.type.name).join(", ");
    const nomFormatte = data.name.charAt(0).toUpperCase() + data.name.slice(1);
    const sprite = checkboxShiny.checked
        ? data.sprites.front_shiny
        : data.sprites.front_default;
    const nomsStats = {
        hp: "PV",
        attack: "Attaque",
        defense: "Défense",
        "special-attack": "Attaque spéciale",
        "special-defense": "Défense spéciale",
        speed: "Vitesse"
    };
    const stats = data.stats.map(stat => `
        <li>
            <span>${nomsStats[stat.stat.name] ?? stat.stat.name}</span>
            <progress value="${stat.base_stat}" max="255"></progress>
            <strong>${stat.base_stat}</strong>
        </li>
    `).join("");

    cartePokemon.innerHTML = `
        <h2>${nomFormatte}</h2>
        <img src="${sprite}" alt="${nomFormatte}${checkboxShiny.checked ? " shiny" : ""}">
        <p><strong>Type :</strong> ${types}</p>
        <p><strong>Taille :</strong> ${data.height / 10} m</p>
        <p><strong>Poids :</strong> ${data.weight / 10} kg</p>
        <h3>Stats</h3>
        <ul class="stats">${stats}</ul>
    `;

    cartePokemon.classList.add("visible");
}

function ajouterHistorique(data) {
    const indexExistant = historique.findIndex(pokemon => pokemon.id === data.id);

    if (indexExistant !== -1) {
        historique.splice(indexExistant, 1);
    }

    historique.unshift({ id: data.id, name: data.name });
    historique.splice(5);
    afficherHistorique();
}

function afficherHistorique() {
    listeHistorique.innerHTML = historique.map(pokemon => `
        <li>
            <button type="button" data-pokemon-id="${pokemon.id}">
                #${pokemon.id} ${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </button>
        </li>
    `).join("");

    sectionHistorique.hidden = historique.length === 0;
}

listeHistorique.addEventListener("click", event => {
    const bouton = event.target.closest("[data-pokemon-id]");

    if (!bouton) {
        return;
    }

    inputPokemon.value = bouton.dataset.pokemonId;
    rechercherPokemon(bouton.dataset.pokemonId);
});
