## Exercice 1 : Le Calculateur d'IMC (BMI)

### Énoncé

Crée une application qui permet à l'utilisateur de saisir son poids (en kg) et sa taille (en cm) pour calculer son Indice de Masse Corporelle (IMC). L'application doit afficher le score de l'IMC ainsi que la catégorie de poids correspondante (Insuffisance pondérale, poids normal, surpoids, obésité).

* **Formule :** $\text{IMC} = \frac{\text{poids (kg)}}{\text{taille (m)}^2}$ *(Attention à convertir la taille de cm en mètres dans ton script !)*
* **Catégories :** * Moins de 18.5 : Maigreur
* Entre 18.5 et 24.9 : Corpulence normale
* Entre 25 et 29.9 : Surpoids
* 30 et plus : Obésité



### Mockup (Wireframe)

```text
+---------------------------------------------------+
|               CALCULATEUR D'IMC                   |
+---------------------------------------------------+
|  Votre Taille (en cm) :                           |
|  [ 175               ]                            |
|                                                   |
|  Votre Poids (en kg) :                            |
|  [ 70                ]                            |
|                                                   |
|  [      CALCULER L'IMC      ]                     |
+---------------------------------------------------+
|  Résultat :                                       |
|  Votre IMC est de 22.86.                          |
|  Statut : Corpulence normale.                     |
+---------------------------------------------------+

```

---

## Exercice 2 : Le Calculateur d'Âge Exact

### Énoncé

Crée une application avec un champ de saisie de date (calendrier). Lorsque l'utilisateur sélectionne sa date de naissance et clique sur le bouton, l'application doit calculer et afficher son âge exact en **années, mois et jours**.

* **Contrainte JS :** Tu devras utiliser l'objet `new Date()` pour récupérer la date du jour et faire la différence avec la date saisie, en gérant correctement les fins de mois et les années bissextiles pour un calcul précis.

### Mockup (Wireframe)

```text
+---------------------------------------------------+
|               QUEL EST VOTRE ÂGE ?                |
+---------------------------------------------------+
|  Sélectionnez votre date de naissance :           |
|  [ JJ / MM / AAAA ]                           |
|                                                   |
|  [       CALCULER L'ÂGE      ]                    |
+---------------------------------------------------+
|  Vous avez :                                      |
|  - 24 ans                                         |
|  - 5 mois                                         |
|  - 12 jours                                       |
+---------------------------------------------------+

```

## Exercice 3 : Le contrôleur d'accès (Access Control Checker)

### Énoncé

Crée une application qui simule un contrôle d'accès à une zone sécurisée (centre de données, salle serveur). L'utilisateur saisit son niveau d'habilitation, son statut (badge actif ou non) et l'heure actuelle. L'application décide s'il peut entrer et pourquoi. Thème volontairement aligné avec un futur cours de cybersécurité.

### Règles d'accès

* Badge inactif → accès **refusé**, quel que soit le niveau ("Badge désactivé")
* Niveau d'habilitation inférieur à 3 → accès **refusé** ("Habilitation insuffisante")
* Niveau 3 ou 4, en dehors de 8h-20h → accès **refusé** ("Accès hors horaires autorisés")
* Niveau 3 ou 4, entre 8h et 20h, badge actif → accès **autorisé**
* Niveau 5 (admin) → accès **toujours autorisé** si badge actif, peu importe l'heure

### Objectifs pédagogiques

* Combiner plusieurs conditions avec `&&` et `||`
* Imbriquer des if/else proprement sans tomber dans le pyramid of doom
* Travailler avec des booléens (checkbox badge actif) et des nombres (niveau, heure)
* Construire un message d'erreur clair et contextuel selon le motif de refus

### Mockup (Wireframe)

```text
+---------------------------------------------------+
|            CONTRÔLE D'ACCÈS — SALLE SERVEUR        |
+---------------------------------------------------+
|  Niveau d'habilitation (1-5) :                     |
|  [ 4                  ]                            |
|                                                     |
|  Heure actuelle (0-23) :                           |
|  [ 14                 ]                            |
|                                                     |
|  Badge actif :  [x] Oui                            |
|                                                     |
|  [        VÉRIFIER L'ACCÈS        ]                |
+---------------------------------------------------+
|  Résultat :                                        |
|  ACCÈS AUTORISÉ                                    |
|  Bienvenue, niveau 4 reconnu pendant les horaires  |
|  d'ouverture.                                      |
+---------------------------------------------------+
```
