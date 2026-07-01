## Exercice : Le palmarès de films

### Énoncé

Tu disposes d'un tableau de films prédéfini. Affiche-les dans une liste HTML, puis permets à l'utilisateur d'en ajouter un nouveau via un champ texte.

### Étapes

1. Déclare un tableau `films` avec 4-5 titres de départ
2. Écris une fonction `afficherFilms()` qui vide la liste HTML et la recrée avec un `for...of`
3. Appelle cette fonction au chargement pour afficher la liste initiale
4. Au clic sur "Ajouter" : push le nouveau titre dans le tableau, puis rappelle `afficherFilms()`
5. **Bonus :** afficher "Aucun film" si le tableau est vide

### Mockup

```text
+-------------------------------------------+
|           MON PALMARÈS DE FILMS            |
+-------------------------------------------+
|  1. Inception                              |
|  2. Interstellar                           |
|  3. The Dark Knight                        |
|  4. Parasite                               |
+-------------------------------------------+
|  Ajouter un film :                         |
|  [ Dune ]                    [ AJOUTER ]   |
+-------------------------------------------+
```
