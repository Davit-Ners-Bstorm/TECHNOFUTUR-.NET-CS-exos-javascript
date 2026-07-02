# Exercices du week-end — DOM & JavaScript

---

## Exercice 1 : Le compteur de clics

### Énoncé

Crée une page avec un bouton "Cliquer" qui incrémente un compteur affiché à l'écran.

### Étapes

1. Déclare une variable `compteur = 0`
2. Au clic sur le bouton, incrémente `compteur` et affiche la nouvelle valeur dans un paragraphe
3. Si le compteur dépasse 10, le paragraphe devient rouge
4. **Bonus :** ajouter un bouton "Reset" qui remet le compteur à 0 et retire la couleur rouge

### Mockup (Wireframe)

```text
+----------------------------------+
|  [ CLIQUER ]   [ RESET ]         |
|  Nombre de clics : 7             |
+----------------------------------+
```

---

## Exercice 2 : La liste de courses

### Énoncé

Crée une application qui permet de gérer une liste de courses. L'utilisateur peut ajouter et supprimer des articles.

### Étapes

1. Déclare un tableau vide `courses = []`
2. Au clic sur "Ajouter" : push l'article dans le tableau et recrée la liste dans le DOM
3. Chaque article affiché a un bouton "Supprimer" qui le retire du tableau
4. Afficher "Liste vide" si le tableau est vide
5. **Bonus :** empêcher d'ajouter un article vide (vérifier que le champ n'est pas vide avant le push)

### Mockup (Wireframe)

```text
+----------------------------------+
|  [ Pommes         ] [ AJOUTER ]  |
+----------------------------------+
|  🛒 Pommes          [ Supprimer ]|
|  🛒 Pain            [ Supprimer ]|
|  🛒 Lait            [ Supprimer ]|
+----------------------------------+
```

---

## Exercice 3 : Le changeur de couleur

### Énoncé

Crée une page avec une grande div colorée et des boutons pour changer sa couleur.

### Étapes

1. Crée une div avec une taille fixe (ex: 300x200px)
2. Ajoute 4 boutons : Rouge, Vert, Bleu, Aléatoire
3. Chaque bouton change le `backgroundColor` de la div
4. Le bouton "Aléatoire" génère une couleur random
5. Afficher le code couleur actuel sous la div

### Mockup (Wireframe)

```text
+----------------------------------+
|                                  |
|        (grande div colorée)      |
|                                  |
+----------------------------------+
| [Rouge] [Vert] [Bleu] [Aléatoire]|
|  Couleur actuelle : #e74c3c      |
+----------------------------------+
```

### Hint pour la couleur aléatoire

```js
const r = Math.floor(Math.random() * 256);
const g = Math.floor(Math.random() * 256);
const b = Math.floor(Math.random() * 256);
const couleur = `rgb(${r}, ${g}, ${b})`;
```

---

## Exercice 4 : Le générateur de cartes

### Énoncé

À partir d'un tableau d'objets, génère des cartes HTML dynamiquement avec une boucle `for...of`.

### Données de départ

```js
const animaux = [
  { nom: "Chat",   couleur: "#f39c12" },
  { nom: "Chien",  couleur: "#3498db" },
  { nom: "Lapin",  couleur: "#e74c3c" },
  { nom: "Renard", couleur: "#2ecc71" },
];
```

### Étapes

1. Avec un `for...of`, parcours le tableau `animaux`
2. Pour chaque animal, crée une div avec son nom et sa couleur de fond
3. Ajoute chaque carte dans le DOM
4. **Bonus :** au clic sur une carte, afficher son nom dans un paragraphe sous les cartes

### Mockup (Wireframe)

```text
+------------------------------------------+
| [  Chat  ] [  Chien ] [ Lapin ] [ Renard ]|
| (orange)   (bleu)    (rouge)   (vert)     |
+------------------------------------------+
|  Tu as cliqué sur : Chat                 |
+------------------------------------------+
```

---

## Exercice 5 : Le quiz à choix multiples

### Énoncé

Crée un quiz qui affiche une question à la fois avec 3 boutons de réponse. À la fin, affiche le score.

### Données de départ

```js
const questions = [
  {
    question: "Quelle est la capitale de la France ?",
    reponses: ["Londres", "Paris", "Madrid"],
    bonne: "Paris"
  },
  {
    question: "Combien font 7 x 8 ?",
    reponses: ["54", "56", "64"],
    bonne: "56"
  },
  {
    question: "Quel langage s'exécute dans le navigateur ?",
    reponses: ["Python", "Java", "JavaScript"],
    bonne: "JavaScript"
  }
];
```

### Étapes

1. Déclare `indexQuestion = 0` et `score = 0`
2. Écris une fonction `afficherQuestion()` qui affiche la question courante et crée les 3 boutons de réponse
3. Au clic sur un bouton :
   - Si bonne réponse : afficher "✅ Correct !" en vert, incrémenter le score
   - Si mauvaise réponse : afficher "❌ Incorrect !" en rouge
   - Passer à la question suivante après 1 seconde avec `setTimeout`
4. Quand toutes les questions sont passées, afficher le score final

### Mockup (Wireframe)

```text
+------------------------------------------+
|  Question 1/3                            |
|  Quelle est la capitale de la France ?   |
+------------------------------------------+
|  [ Londres ]  [ Paris ]  [ Madrid ]      |
+------------------------------------------+
|  ✅ Correct !                             |
+------------------------------------------+
```

### Hint

Pour désactiver les boutons après un clic (éviter de répondre deux fois) :
```js
boutons.forEach(btn => btn.disabled = true);
```
