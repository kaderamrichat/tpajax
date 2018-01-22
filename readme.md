# TP AJAX : Exercices de perfectionnement
Quelques exercices ajax pour se perfectionner.

Rappel de quelques commandes :

* xhr = new XMLHttpRequest();
* xhr.open('GET', 'www.url.com', true);
* xhr.onload = function(){};
* xhr.send();

Ps : plus on avance dans les exercices & moins il y aura d'explication dans la demande.

## EXO1 : AJAX DEPUIS UN FICHIER TEXT
1. Créer un fichier texte au même niveau que l'index.html et écrire ce qu'on veut dedans.

2. Depuis le fichier HTML, créer un bouton avec un id pour qu'au clic on affiche le contenu du fichier txt.

---
## EXO2 : AJAX DEPUIS UN FICHIER JSON
1. Créer un fichier user.json au même niveau que l'index.html qui contiendra un id, un nom et un prénom.

2. Créer un fichier users.json au même niveau que l'index.html qui contiendra un tableau de plusieurs "user".

3. Dans index.html créer un autre bouton avec son id & afficher dans le html, le user unique & le tableau de users.


## EXO3 : AJAX DEPUIS UN FICHIER PHP
1. Créer un fichier data.php au même niveau que l'index.html qui contiendra simplement un echo d'une string.

2. Depuis le fichier html appeler ce fichier php, voir ce que ca donne


## EXO4 : AJAX DEPUIS UN FICHIER PHP AVEC FORMULAIRE
1. Dans le fichier html ajouter un form avec un champ input & un bouton submit.

2. Afficher le contenu dans la console et dans le document du champ sans rechargement de page.

## EXO5 : AJAX DEPUIS UN FICHIER PHP AVEC REQUETE SQL
1. Dans le fichier html ajouter un autre form avec trois champ input (nom prenom, mail) & un bouton submit.

2. Insérer dans une bdd, le contenu des champs sans rechargement de page. 

3. Créer un autre bouton pour qu'au click au affiche le contenu de la bdd.


