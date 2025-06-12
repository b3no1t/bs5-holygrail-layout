# Bootstrap 5 and the Holy Grail layout.

> Le Holy Grail layout est un pattern de mise en page web emblématique, souvent cité comme un exercice classique pour les développeurs front-end. 

Il se compose d'un **header** en haut, d'un **footer** en bas, et d'un **corps** principal structuré en trois colonnes : une **sidebar** gauche (navigation), une colonne centrale flexible (contenu principal), et une **sidebar** droite (contenu secondaire ou pub).

Aujourd'hui, ce layout s'implémente facilement avec CSS Grid ou Flexbox, en utilisant des balises sémantiques comme `<header>`, `<nav>`, `<main>`, `<aside>`, et `<footer>`. Le Holy Grail layout est souvent utilisé comme benchmark pour comparer différentes techniques CSS et illustrer la maîtrise des layouts complexes.

Les contraintes principales sont:

Les sidebars ont une **largeur fixe**, la colonne centrale est flexible et occupe l'espace restant.

Le footer doit rester en bas de la page, même si le contenu est court.

> La mise en page doit être responsive et basée sur les designs.

## Mise en place.

1. installer un projet web pour le web avec Bootstrap 5.
   - utiliser un gestionnaire de paquets comme npm ou yarn, ou inclure Bootstrap via un CDN.
   - exemple d'installation via npm :

     ```bash
     npm init -y
     npm i --save-dev parcel
     etc...suivre la démarche de Bootstrap 5.
     ```

> ps: [BS5 Doc](https://getbootstrap.com/docs/5.3/getting-started/parcel/#what-is-parcel)
> ps ps: [PARCELJS Doc](https://parceljs.org/docs/getting-started/web/)

Happy Coding :smile: