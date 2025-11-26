[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/dX8z92B_)
- nom : Grevillot
- prénom : Noa 
- URL Netlify :

# Travail

N'oublier pas votre nom, prénom et l'URL de publication Netlify...

# Complétez le CSS

**Faire plusieurs commits** pour chaque étape du CSS

Pour styler l'accordéon ouvert, utilisez l'attribut `open` (entre crochet en CSS `[open]` :

```css
details {
  /* fermé et ouvert */
}

details[open] {
  /* ouvert */
}
```

Compléter le fichier [accordeon.css](/src/css/components/accordeon.css) et visualiser l'effet sur [index.html](/index.html) .

Vous devez obtenir comme la premiére video sur Moodle.

# Manuellement sans JS

Simplement, cliquez sur les `summary`...

# Refermer les autres par code JS

Testez dans la console :

```js
accordeon = document.querySelector(".accordeon");
accordeon.querySelectorAll("details").forEach((det) => (det.open = false));
```

À faire, adapter le code dans les fichiers [script.js](/src/js/script.js) pour le faire suite à un clic sur un des `summary`.

**Commit** : referme les détails suite à un clic sur un `summary`

# Version avec [triangle CSS](https://css-tricks.com/snippets/css/css-triangle/)

Voir seconde video sur Moodle.

Pour supprimer le triangle "d'origine" :

```css
.accordeon > details > summary {
  list-style: none;
}
.accordeon > details > summary::marker,
.accordeon > details > summary::-webkit-details-marker {
  display: none;
}
```

**Faire plusieurs commits** pour chaque étape du CSS
