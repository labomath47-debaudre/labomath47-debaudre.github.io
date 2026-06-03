<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>LaboMath — Seconde</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@500;600&family=IBM+Plex+Sans:wght@400;500&display=swap" rel="stylesheet">
  <style>
    :root {
      --cream: #f5efe4;
      --ink: #1e3a5f;
      --gold: #c9b896;
      --gold-light: #e8dcc4;
      --gold-bg: #faf6ec;
    }
    * { box-sizing: border-box; }
    html, body { margin: 0; padding: 0; }
    body {
      font-family: 'IBM Plex Sans', system-ui, sans-serif;
      background: var(--cream);
      color: var(--ink);
      min-height: 100vh;
      padding: 3rem 1.5rem 4rem;
      line-height: 1.5;
    }
    .container { max-width: 640px; margin: 0 auto; }
    .lien-retour {
      display: inline-block;
      font-size: 0.85rem;
      color: var(--ink);
      opacity: 0.7;
      text-decoration: none;
      border-bottom: 1px solid var(--gold);
      margin-bottom: 1.5rem;
      padding-bottom: 1px;
    }
    .lien-retour:hover { opacity: 1; border-bottom-color: var(--ink); }
    header { text-align: center; margin-bottom: 2.5rem; }
    .niveau-eyebrow {
      font-size: 0.78rem;
      opacity: 0.7;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 0.5rem;
    }
    h1 {
      font-family: 'Crimson Pro', Georgia, serif;
      font-weight: 600;
      font-size: 2.8rem;
      margin: 0 0 0.25rem;
      letter-spacing: -0.02em;
    }
    h1.accueil { font-size: 3.2rem; margin-bottom: 0.5rem; }
    header p {
      font-size: 0.95rem;
      opacity: 0.7;
      margin: 0;
    }
    .titre-section {
      font-family: 'Crimson Pro', serif;
      font-weight: 600;
      font-size: 1.2rem;
      text-align: center;
      margin: 0 0 1.25rem;
    }
    .grille { display: grid; gap: 0.75rem; }
    .carte {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: white;
      border: 1px solid var(--gold);
      border-radius: 6px;
      padding: 1.1rem 1.3rem;
      text-decoration: none;
      color: var(--ink);
      transition: background 0.15s, border-color 0.15s, transform 0.05s;
    }
    .carte:hover {
      background: var(--gold-bg);
      border-color: var(--ink);
    }
    .carte:active { transform: scale(0.995); }
    .carte-titre {
      font-family: 'Crimson Pro', serif;
      font-weight: 600;
      font-size: 1.15rem;
    }
    .carte-soustitre {
      font-size: 0.82rem;
      opacity: 0.7;
      margin-top: 2px;
    }
    .fleche {
      color: var(--gold);
      font-size: 1.5rem;
      transition: color 0.15s, transform 0.15s;
    }
    .carte:hover .fleche {
      color: var(--ink);
      transform: translateX(3px);
    }
    .carte-bientot {
      background: var(--gold-bg);
      border: 1px dashed #d9cfb8;
      opacity: 0.6;
      cursor: not-allowed;
    }
    .carte-bientot:hover {
      background: var(--gold-bg);
      border-color: #d9cfb8;
    }
    .badge-bientot {
      font-size: 0.72rem;
      background: var(--gold-light);
      padding: 3px 9px;
      border-radius: 3px;
      color: var(--ink);
      font-weight: 500;
    }
    .note {
      text-align: center;
      margin-top: 2rem;
      font-size: 0.8rem;
      opacity: 0.55;
    }
    @media (max-width: 480px) {
      body { padding: 2rem 1rem 3rem; }
      h1, h1.accueil { font-size: 2.4rem; }
      .carte { padding: 0.9rem 1rem; }
      .carte-titre { font-size: 1.05rem; }
    }
  </style>
</head>
<body>
  <div class="container">

    <a class="lien-retour" href="index.html">← Retour à l'accueil</a>

    <header>
      <div class="niveau-eyebrow">Niveau</div>
      <h1>Seconde</h1>
      <p>Générale et technologique</p>
    </header>

    <p class="titre-section">Que veux-tu faire ?</p>

    <div class="grille">

      <a class="carte" href="automatismes.html?profil=seconde">
        <div>
          <div class="carte-titre">Automatismes</div>
          <div class="carte-soustitre">Générer une fiche d'exercices personnalisée</div>
        </div>
        <div class="fleche">→</div>
      </a>

      <div class="carte carte-bientot">
        <div>
          <div class="carte-titre">Fiches méthodes</div>
          <div class="carte-soustitre">Méthodes essentielles du programme</div>
        </div>
        <span class="badge-bientot">bientôt</span>
      </div>

      <div class="carte carte-bientot">
        <div>
          <div class="carte-titre">Cours et démonstrations</div>
          <div class="carte-soustitre">Théorèmes et propriétés à connaître</div>
        </div>
        <span class="badge-bientot">bientôt</span>
      </div>

    </div>

  </div>
</body>
</html>
