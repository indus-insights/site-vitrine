# Antonio Laisé · Site vitrine

Site one-page d'Antonio Laisé, conseil indépendant en structuration de données et dashboards sur-mesure pour PME.

## Stack

- HTML / CSS / JavaScript vanilla
- Polices : Inter + JetBrains Mono (Google Fonts)
- Aucune dépendance JS externe
- Formulaire : Netlify Forms
- Analytics : Umami (privacy-friendly, sans cookies)

## Structure des fichiers

```
.
├── index.html       # Structure complète (9 sections)
├── styles.css       # Tous les styles (design tokens + responsive)
├── main.js          # Interactions (scroll-spy, lightbox, prefill, modales)
├── assets/          # Photo Antonio + 3 captures dashboards
└── README.md
```

## Sections du site

1. Hero (avec capture dashboard maintenance)
2. Le constat (problème pilotage à l'instinct)
3. Ma solution (bloc avant/après + grille 7 caractéristiques)
4. Mon approche (4 étapes)
5. Exemples concrets (3 dashboards avec lightbox + CTA démo)
6. Pourquoi pas Power BI (3 arguments + citation)
7. Tarifs (4 formules + maintenance)
8. À propos (parcours)
9. Contact (formulaire 5 champs + lien Cal.com)

## Développement local

Ouvrir `index.html` directement, ou servir le dossier :

```bash
python3 -m http.server 8000
# puis http://localhost:8000
```

## Déploiement Netlify

1. Pousser le dossier sur le repo GitHub `indus-insights/site-vitrine`
2. Sur Netlify : « Add new site » → « Import from Git » → choisir le repo
3. Build command : *(aucune)* · Publish directory : `/`
4. Netlify détecte automatiquement le formulaire (`data-netlify="true"`). Les soumissions arrivent dans l'onglet **Forms** du dashboard Netlify.

## Modifier le contenu

- **Textes** : tout est dans `index.html`, section par section.
- **Couleurs et design tokens** : variables CSS en haut de `styles.css` (`:root`).
- **Tarifs** : section `#tarifs` de `index.html`.
- **Captures dashboards** : fichiers dans `assets/`. Remplacer en gardant les mêmes noms.
- **Photo Antonio** : `assets/antonio.jpg`.
- **Lien Cal.com** : à intégrer dans la section `#contact`, lien « prenez directement RDV ».
- **Umami** : ajouter le snippet `<script>` dans le `<head>` une fois le site déclaré sur cloud.umami.is.

## À finaliser

- [ ] URL Cal.com à intégrer (section contact)
- [ ] Contenu modales : mentions légales et politique de confidentialité
- [ ] Snippet Umami dans `<head>`
- [ ] Domaine personnalisé (envisagé : `antonio-laise.eu`)
