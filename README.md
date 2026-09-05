# Bien Caché — site vitrine

Landing page statique (HTML/CSS/JS pur, aucun framework, aucune étape de build).
Trois fichiers font tout le travail : `index.html`, `styles.css`, `script.js`.

## Avant de déployer

1. **Formulaire de contact** — le formulaire poste vers [Formspree](https://formspree.io).
   Ouvrez `script.js`, ligne `FORM_ENDPOINT`, et remplacez
   `https://formspree.io/f/YOUR_FORM_ID` par l'URL que Formspree vous donne
   après création d'un compte gratuit et d'un formulaire. Tant que ce n'est
   pas fait, le site reste utilisable mais le formulaire affiche un message
   invitant à écrire directement à l'adresse email de contact.
2. **Email et téléphone** — remplacez `contact@biencache.fr` et
   `06 83 84 14 39` (présents dans `index.html`, sections contact et pied de
   page) par vos coordonnées réelles.
3. **Mentions légales** — la ligne de pied de page indique explicitement
   qu'il faut compléter la carte professionnelle T et les mentions légales
   avant mise en ligne publique. C'est une obligation légale pour une agence
   immobilière en France : ne la laissez pas en l'état pour un lancement
   réel.
4. **Arrondissement pilote** — la section « Le quartier » reste volontairement
   générique tant que le quartier de lancement n'est pas arrêté.

## Déployer sur Vercel via GitHub

1. Créez un nouveau dépôt sur [github.com/new](https://github.com/new)
   (par exemple `bien-cache-site`), sans README ni .gitignore
   (ce projet en fournit déjà).
2. Dans ce dossier, en local :
   ```bash
   git init
   git add .
   git commit -m "Site Bien Caché — landing page"
   git branch -M main
   git remote add origin https://github.com/VOTRE-COMPTE/bien-cache-site.git
   git push -u origin main
   ```
3. Sur [vercel.com](https://vercel.com), cliquez **Add New → Project**,
   choisissez le dépôt `bien-cache-site`.
4. Aucune configuration n'est nécessaire : Vercel détecte un site statique
   automatiquement (Framework Preset : *Other*). Cliquez **Deploy**.
5. Après quelques secondes, Vercel donne une URL en `.vercel.app` — ajoutez
   ensuite votre nom de domaine dans l'onglet **Domains** du projet si vous
   en avez un.

## Développer en local

Aucune installation n'est nécessaire. Le plus simple :
```bash
npx serve .
```
ou, avec Python :
```bash
python3 -m http.server 8000
```
puis ouvrez `http://localhost:8000` (ou le port indiqué).

## Structure

```
index.html      structure et contenu de la page
styles.css      design system (couleurs, typographies, mise en page)
script.js       menu mobile, formulaire de contact, année du pied de page
```

## Personnaliser les couleurs

Toutes les couleurs sont définies en haut de `styles.css`, dans `:root` :
`--ink` (vert profond), `--forest` (vert principal), `--moss` (vert clair),
`--paper` (blanc cassé), `--mist` (blanc-vert pâle). Changez ces six valeurs
pour ajuster la palette partout sur le site.
