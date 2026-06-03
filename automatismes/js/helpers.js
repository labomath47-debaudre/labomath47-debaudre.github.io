/* LaboMath — helpers.js
   Fonctions utilitaires partagées par tous les générateurs :
   - aléatoire (rand, randNonZero, pick)
   - formatage LaTeX (signe, par, dec, coefVar, fmtAdd, fmtSub)
   - QCM (qcm)
   - arithmétique (pgcdGlobal, prodVect)
   - bornes par difficulté
   - bibliothèque graphique SVG (creerRepere, tracerXxx, diagrammes…)
   Fichier généré automatiquement par refactor.py. */

// Initialise le registre global et son alias historique.
// Les fichiers gen_*.js viennent étendre window.LM_GEN ; certains générateurs
// (ex. lt_tab) se ré-appellent via `generateurs.<nom>` pour gérer des cas dégénérés
// — l'alias `window.generateurs` préserve cette compatibilité.
window.LM_GEN = window.LM_GEN || {};
window.generateurs = window.LM_GEN;

function rand(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
function randNonZero(min, max) { let n = 0; while (n === 0) n = rand(min, max); return n; }
// Formate un coefficient signé pour LaTeX : 3 → "+ 3", -3 → "- 3", 0 → "+ 0"
function signe(n) { return n >= 0 ? `+ ${n}` : `- ${-n}`; }
function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
// Alias sémantique : pour reformuler la même question avec des phrasings équivalents
// (ex: ["Donner X", "Calculer X", "Quel est X ?"]). Améliore la variété perçue.
function reformule(textes) { return pick(textes); }
// Formate un nombre décimal à la française pour LaTeX : 0.4 → "0{,}4", 3 → "3"
function dec(x) { return String(x).replace('.', '{,}'); }
// Parenthèse un nombre négatif dans une expression LaTeX : -3 → "(-3)", 3 → "3"
function par(n) { return n < 0 ? `(${n})` : `${n}`; }
// Formate un terme "coef·variable" en omettant le coefficient 1 : 1x→x, -1x→-x, 3x→3x
function coefVar(c, v, premier) {
  if (c === 0) return '';
  const abs = Math.abs(c);
  const corps = abs === 1 ? v : `${abs}${v}`;
  if (premier) return c < 0 ? `-${corps}` : corps;
  return c < 0 ? ` - ${corps}` : ` + ${corps}`;
}
// Construit un QCM : props = [{t, ok}], mélange et renvoie {html, bonne}
function qcm(props) {
  const melange = props.slice();
  for (let i = melange.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [melange[i], melange[j]] = [melange[j], melange[i]]; }
  const lettres = ['a', 'b', 'c', 'd'];
  let html = '<br>';
  let bonne = '';
  melange.forEach((p, i) => { html += `<strong>${lettres[i]}.</strong> ${p.t} &nbsp;&nbsp; `; if (p.ok) bonne = lettres[i]; });
  return { html, bonne, lettres, melange };
}
// PGCD (valeur absolue, jamais nul) pour simplifier des fractions
function pgcdGlobal(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { [a, b] = [b, a % b]; } return a || 1; }
// Produit vectoriel de deux vecteurs de l'espace
function prodVect(u, v) { return [u[1] * v[2] - u[2] * v[1], u[2] * v[0] - u[0] * v[2], u[0] * v[1] - u[1] * v[0]]; }

// Helpers de formatage propre des opérations signées
// fmtAdd(b) : retourne "+ b" si b > 0, "- |b|" si b < 0, "" si b = 0
function fmtAdd(b) {
  if (b === 0) return '';
  if (b > 0) return `+ ${b}`;
  return `- ${-b}`;
}
// fmtSub(a, b) : retourne "a - b" si b > 0, "a + |b|" si b < 0, "a" si b = 0
function fmtSub(a, b) {
  if (b === 0) return `${a}`;
  if (b > 0) return `${a} - ${b}`;
  return `${a} + ${-b}`;
}

const bornes = {
  1: { aff_a: [1, 5], aff_b: [0, 9], aff_x: [1, 5], carre_x: [1, 6], carre_n: [2, 6], comp: [1, 6] },
  2: { aff_a: [-5, 5], aff_b: [-8, 8], aff_x: [-4, 4], carre_x: [-9, 9], carre_n: [2, 9], comp: [1, 9] },
  3: { aff_a: [-9, 9], aff_b: [-12, 12], aff_x: [-7, 7], carre_x: [-12, 12], carre_n: [2, 14], comp: [1, 12] }
};

/* =============================================================
   BIBLIOTHÈQUE GRAPHIQUE — Génération de SVG inline
   ============================================================= */

// Constantes de style (charte LaboMath)
const GRAPH_BLEU = '#1e3a5f';
const GRAPH_OR = '#c9b896';
const GRAPH_OR_CLAIR = '#e8dcc4';
const GRAPH_FOND = '#ffffff';
const GRAPH_BORDURE = '#c9b896';

/**
 * Crée un repère ORTHONORMÉ (mêmes échelles X et Y) et renvoie un objet utile.
 * opts : { width, height, xMin, xMax, yMin, yMax, gradX, gradY, titre }
 * NB : la hauteur réelle peut être recalculée pour respecter l'orthonormé.
 * Renvoie : { svg: string (début SVG ouvert), xPix(x), yPix(y), fermer() : string }
 */
function creerRepere(opts) {
  const o = Object.assign({
    width: 130, height: 130,
    xMin: -4, xMax: 4, yMin: -4, yMax: 4,
    gradX: 1, gradY: 1,
    margeG: 14, margeD: 10, margeH: 10, margeB: 14
  }, opts || {});
  
  // Pour un repère ORTHONORMÉ : on calcule l'échelle commune à partir des dimensions disponibles
  const zoneWMax = o.width - o.margeG - o.margeD;
  const zoneHMax = o.height - o.margeH - o.margeB;
  const echelleParX = zoneWMax / (o.xMax - o.xMin);
  const echelleParY = zoneHMax / (o.yMax - o.yMin);
  // On prend la plus petite pour que tout tienne
  const echelle = Math.min(echelleParX, echelleParY);
  
  // On recalcule les dimensions effectives pour centrer la zone
  const zoneW = (o.xMax - o.xMin) * echelle;
  const zoneH = (o.yMax - o.yMin) * echelle;
  // Recentrage des marges si la zone est plus petite que prévu
  const margeG = o.margeG + (zoneWMax - zoneW) / 2;
  const margeH = o.margeH + (zoneHMax - zoneH) / 2;
  
  // Conversion coords math → pixels (orthonormé, donc même echelle)
  const xPix = (x) => margeG + (x - o.xMin) * echelle;
  const yPix = (y) => margeH + (o.yMax - y) * echelle;
  
  // Position de l'origine en pixels
  const xO = xPix(0);
  const yO = yPix(0);
  
  let svg = `<svg width="${o.width}" height="${o.height}" viewBox="0 0 ${o.width} ${o.height}" xmlns="http://www.w3.org/2000/svg" style="background: #f5efe4; border: 1px solid ${GRAPH_BORDURE}; border-radius: 4px; display: block;">`;
  
  // Cadre fond blanc
  svg += `<rect x="${margeG}" y="${margeH}" width="${zoneW}" height="${zoneH}" fill="${GRAPH_FOND}" stroke="${GRAPH_BORDURE}" stroke-width="1"/>`;
  
  // Sous-grille aux demi-graduations (très claire, pour aide à la lecture)
  svg += `<g stroke="#f0e8d6" stroke-width="0.4">`;
  for (let x = Math.ceil(o.xMin * 2) / 2; x <= o.xMax; x += 0.5) {
    if (x !== Math.floor(x)) { // seulement les demi-graduations
      svg += `<line x1="${xPix(x).toFixed(2)}" y1="${margeH}" x2="${xPix(x).toFixed(2)}" y2="${margeH + zoneH}"/>`;
    }
  }
  for (let y = Math.ceil(o.yMin * 2) / 2; y <= o.yMax; y += 0.5) {
    if (y !== Math.floor(y)) {
      svg += `<line x1="${margeG}" y1="${yPix(y).toFixed(2)}" x2="${margeG + zoneW}" y2="${yPix(y).toFixed(2)}"/>`;
    }
  }
  svg += `</g>`;
  
  // Grille principale aux entiers (renforcée)
  svg += `<g stroke="#dcc9a8" stroke-width="0.7">`;
  for (let x = Math.ceil(o.xMin); x <= Math.floor(o.xMax); x += o.gradX) {
    if (x !== 0) svg += `<line x1="${xPix(x)}" y1="${margeH}" x2="${xPix(x)}" y2="${margeH + zoneH}"/>`;
  }
  for (let y = Math.ceil(o.yMin); y <= Math.floor(o.yMax); y += o.gradY) {
    if (y !== 0) svg += `<line x1="${margeG}" y1="${yPix(y)}" x2="${margeG + zoneW}" y2="${yPix(y)}"/>`;
  }
  svg += `</g>`;
  
  // Axes
  if (o.yMin <= 0 && o.yMax >= 0) {
    svg += `<line x1="${margeG}" y1="${yO}" x2="${margeG + zoneW}" y2="${yO}" stroke="${GRAPH_BLEU}" stroke-width="1"/>`;
    // Flèche x
    svg += `<polygon points="${margeG + zoneW - 1.5},${yO} ${margeG + zoneW + 2},${yO} ${margeG + zoneW},${yO - 2.5} ${margeG + zoneW},${yO + 2.5}" fill="${GRAPH_BLEU}"/>`;
    svg += `<text x="${margeG + zoneW + 4}" y="${yO + 3}" font-family="serif" font-style="italic" font-size="9" fill="${GRAPH_BLEU}">x</text>`;
  }
  if (o.xMin <= 0 && o.xMax >= 0) {
    svg += `<line x1="${xO}" y1="${margeH}" x2="${xO}" y2="${margeH + zoneH}" stroke="${GRAPH_BLEU}" stroke-width="1"/>`;
    // Flèche y
    svg += `<polygon points="${xO},${margeH + 1.5} ${xO},${margeH - 2} ${xO - 2.5},${margeH} ${xO + 2.5},${margeH}" fill="${GRAPH_BLEU}"/>`;
    svg += `<text x="${xO + 3}" y="${margeH - 3}" font-family="serif" font-style="italic" font-size="9" fill="${GRAPH_BLEU}">y</text>`;
  }
  
  // Graduations + labels
  svg += `<g font-family="serif" font-size="7" fill="${GRAPH_BLEU}">`;
  for (let x = Math.ceil(o.xMin); x <= Math.floor(o.xMax); x += o.gradX) {
    if (x !== 0 && o.yMin <= 0 && o.yMax >= 0) {
      svg += `<line x1="${xPix(x)}" y1="${yO - 1.5}" x2="${xPix(x)}" y2="${yO + 1.5}" stroke="${GRAPH_BLEU}"/>`;
      svg += `<text x="${xPix(x)}" y="${yO + 8}" text-anchor="middle">${x}</text>`;
    }
  }
  for (let y = Math.ceil(o.yMin); y <= Math.floor(o.yMax); y += o.gradY) {
    if (y !== 0 && o.xMin <= 0 && o.xMax >= 0) {
      svg += `<line x1="${xO - 1.5}" y1="${yPix(y)}" x2="${xO + 1.5}" y2="${yPix(y)}" stroke="${GRAPH_BLEU}"/>`;
      svg += `<text x="${xO - 3}" y="${yPix(y) + 2}" text-anchor="end">${y}</text>`;
    }
  }
  if (o.xMin <= 0 && o.xMax >= 0 && o.yMin <= 0 && o.yMax >= 0) {
    svg += `<text x="${xO - 3}" y="${yO + 8}" text-anchor="end">O</text>`;
  }
  svg += `</g>`;
  
  return {
    svg: svg,
    xPix: xPix,
    yPix: yPix,
    opts: o,
    fermer: () => '</svg>'
  };
}

/**
 * Trace une droite y = ax + b sur le repère, clippée aux limites visibles.
 */
function tracerDroite(repere, a, b, opts) {
  const o = Object.assign({ couleur: GRAPH_BLEU, epaisseur: 2, label: '' }, opts || {});
  const xMin = repere.opts.xMin;
  const xMax = repere.opts.xMax;
  const yMin = repere.opts.yMin;
  const yMax = repere.opts.yMax;
  
  // Calcul des deux points aux extrémités, clippés par les bornes y
  const points = [];
  // Tester aux 4 bords
  // En x = xMin et x = xMax
  let y_g = a * xMin + b;
  let y_d = a * xMax + b;
  if (y_g >= yMin && y_g <= yMax) points.push({x: xMin, y: y_g});
  if (y_d >= yMin && y_d <= yMax) points.push({x: xMax, y: y_d});
  // En y = yMin et y = yMax (si a != 0)
  if (Math.abs(a) > 1e-9) {
    let x_b = (yMin - b) / a;
    let x_h = (yMax - b) / a;
    if (x_b >= xMin && x_b <= xMax) points.push({x: x_b, y: yMin});
    if (x_h >= xMin && x_h <= xMax) points.push({x: x_h, y: yMax});
  }
  if (points.length < 2) return '';
  
  // Trier par x, prendre les 2 extrêmes
  points.sort((p, q) => p.x - q.x);
  const p1 = points[0];
  const p2 = points[points.length - 1];
  
  let svg = `<line x1="${repere.xPix(p1.x)}" y1="${repere.yPix(p1.y)}" x2="${repere.xPix(p2.x)}" y2="${repere.yPix(p2.y)}" stroke="${o.couleur}" stroke-width="${o.epaisseur}"/>`;
  if (o.label) {
    const xLab = p2.x - 0.3;
    const yLab = a * xLab + b + 0.3;
    if (yLab >= yMin && yLab <= yMax) {
      svg += `<text x="${repere.xPix(xLab)}" y="${repere.yPix(yLab)}" font-family="serif" font-style="italic" font-size="13" fill="${o.couleur}">${o.label}</text>`;
    }
  }
  return svg;
}

/**
 * Trace une parabole y = ax² + bx + c sur le repère, clippée aux limites.
 */
function tracerParabole(repere, a, b, c, opts) {
  const o = Object.assign({ couleur: GRAPH_BLEU, epaisseur: 2, label: '', npoints: 60 }, opts || {});
  const xMin = repere.opts.xMin;
  const xMax = repere.opts.xMax;
  const yMin = repere.opts.yMin;
  const yMax = repere.opts.yMax;
  const step = (xMax - xMin) / o.npoints;
  
  let path = '';
  let prevValide = false;
  for (let i = 0; i <= o.npoints; i++) {
    const x = xMin + i * step;
    const y = a*x*x + b*x + c;
    if (y >= yMin && y <= yMax) {
      const cmd = prevValide ? 'L' : 'M';
      path += `${cmd} ${repere.xPix(x).toFixed(2)} ${repere.yPix(y).toFixed(2)} `;
      prevValide = true;
    } else {
      prevValide = false;
    }
  }
  if (!path) return '';
  
  let svg = `<path d="${path}" stroke="${o.couleur}" stroke-width="${o.epaisseur}" fill="none"/>`;
  if (o.label) {
    // Placer label vers x=xMax-1
    const xLab = xMax - 0.8;
    const yLab = a*xLab*xLab + b*xLab + c;
    if (yLab >= yMin && yLab <= yMax) {
      svg += `<text x="${repere.xPix(xLab) + 8}" y="${repere.yPix(yLab) - 3}" font-family="serif" font-style="italic" font-size="13" fill="${o.couleur}">${o.label}</text>`;
    }
  }
  return svg;
}

/**
 * Trace une courbe générique à partir d'une fonction f(x).
 */
function tracerCourbe(repere, f, opts) {
  const o = Object.assign({ couleur: GRAPH_BLEU, epaisseur: 2, label: '', xLabel: null, npoints: 80 }, opts || {});
  const xMin = repere.opts.xMin;
  const xMax = repere.opts.xMax;
  const yMin = repere.opts.yMin;
  const yMax = repere.opts.yMax;
  const step = (xMax - xMin) / o.npoints;
  
  let path = '';
  let prevValide = false;
  for (let i = 0; i <= o.npoints; i++) {
    const x = xMin + i * step;
    const y = f(x);
    if (Number.isFinite(y) && y >= yMin && y <= yMax) {
      const cmd = prevValide ? 'L' : 'M';
      path += `${cmd} ${repere.xPix(x).toFixed(2)} ${repere.yPix(y).toFixed(2)} `;
      prevValide = true;
    } else {
      prevValide = false;
    }
  }
  if (!path) return '';
  
  let svg = `<path d="${path}" stroke="${o.couleur}" stroke-width="${o.epaisseur}" fill="none"/>`;
  if (o.label && o.xLabel != null) {
    const yLab = f(o.xLabel);
    if (Number.isFinite(yLab) && yLab >= yMin && yLab <= yMax) {
      svg += `<text x="${repere.xPix(o.xLabel) + 8}" y="${repere.yPix(yLab) - 3}" font-family="serif" font-style="italic" font-size="13" fill="${o.couleur}">${o.label}</text>`;
    }
  }
  return svg;
}

/**
 * Trace une droite horizontale y = k (utile pour f(x) = k).
 */
function tracerDroiteH(repere, k, opts) {
  const o = Object.assign({ couleur: GRAPH_OR, epaisseur: 1.5, label: '', pointille: true }, opts || {});
  const dash = o.pointille ? 'stroke-dasharray="5,3"' : '';
  let svg = `<line x1="${repere.xPix(repere.opts.xMin)}" y1="${repere.yPix(k)}" x2="${repere.xPix(repere.opts.xMax)}" y2="${repere.yPix(k)}" stroke="${o.couleur}" stroke-width="${o.epaisseur}" ${dash}/>`;
  if (o.label) {
    svg += `<text x="${repere.xPix(repere.opts.xMax) - 8}" y="${repere.yPix(k) - 4}" font-family="serif" font-size="12" fill="${o.couleur}" text-anchor="end">${o.label}</text>`;
  }
  return svg;
}

/**
 * Place un point (x, y) sur le repère avec un label optionnel.
 * opts.pointille = trace pointillés vers les axes
 */
function placerPoint(repere, x, y, label, opts) {
  const o = Object.assign({ couleur: GRAPH_OR, contour: GRAPH_BLEU, rayon: 4, pointille: false, position: 'NE' }, opts || {});
  let svg = '';
  if (o.pointille) {
    svg += `<line x1="${repere.xPix(x)}" y1="${repere.yPix(0)}" x2="${repere.xPix(x)}" y2="${repere.yPix(y)}" stroke="${GRAPH_OR}" stroke-width="1" stroke-dasharray="3,3"/>`;
    svg += `<line x1="${repere.xPix(0)}" y1="${repere.yPix(y)}" x2="${repere.xPix(x)}" y2="${repere.yPix(y)}" stroke="${GRAPH_OR}" stroke-width="1" stroke-dasharray="3,3"/>`;
  }
  svg += `<circle cx="${repere.xPix(x)}" cy="${repere.yPix(y)}" r="${o.rayon}" fill="${o.couleur}" stroke="${o.contour}" stroke-width="1.5"/>`;
  if (label) {
    let dx = 8, dy = -5, anchor = 'start';
    if (o.position === 'NO') { dx = -8; dy = -5; anchor = 'end'; }
    if (o.position === 'SE') { dx = 8; dy = 14; }
    if (o.position === 'SO') { dx = -8; dy = 14; anchor = 'end'; }
    svg += `<text x="${repere.xPix(x) + dx}" y="${repere.yPix(y) + dy}" font-family="serif" font-size="13" fill="${GRAPH_BLEU}" text-anchor="${anchor}">${label}</text>`;
  }
  return svg;
}

/**
 * Trace un segment vertical (pointillés) entre (x, 0) et (x, y).
 */
function tracerProjection(repere, x, y) {
  let svg = '';
  if (y !== 0) {
    svg += `<line x1="${repere.xPix(x)}" y1="${repere.yPix(0)}" x2="${repere.xPix(x)}" y2="${repere.yPix(y)}" stroke="${GRAPH_OR}" stroke-width="1" stroke-dasharray="3,3"/>`;
    svg += `<line x1="${repere.xPix(0)}" y1="${repere.yPix(y)}" x2="${repere.xPix(x)}" y2="${repere.yPix(y)}" stroke="${GRAPH_OR}" stroke-width="1" stroke-dasharray="3,3"/>`;
  }
  return svg;
}

/**
 * Trace un diagramme circulaire à partir de données { label, valeur }.
 * Renvoie le SVG complet (autonome, avec sa propre balise <svg>).
 */
function tracerDiagrammeCirculaire(donnees, opts) {
  const o = Object.assign({ width: 150, height: 150, rayon: 55, cx: 75, cy: 75 }, opts || {});
  const total = donnees.reduce((s, d) => s + d.valeur, 0);
  const couleurs = ['#1e3a5f', '#c9b896', '#8b6914', '#5a7a8a', '#a8896b', '#6b5d4b'];
  let svg = `<svg width="${o.width}" height="${o.height}" viewBox="0 0 ${o.width} ${o.height}" xmlns="http://www.w3.org/2000/svg" style="background: #f5efe4; border: 1px solid ${GRAPH_BORDURE}; border-radius: 4px; display: block;">`;
  
  let angleCourant = -Math.PI / 2; // commencer en haut
  donnees.forEach((d, i) => {
    const angleArc = (d.valeur / total) * 2 * Math.PI;
    const x1 = o.cx + o.rayon * Math.cos(angleCourant);
    const y1 = o.cy + o.rayon * Math.sin(angleCourant);
    const x2 = o.cx + o.rayon * Math.cos(angleCourant + angleArc);
    const y2 = o.cy + o.rayon * Math.sin(angleCourant + angleArc);
    const largeArc = angleArc > Math.PI ? 1 : 0;
    const couleur = couleurs[i % couleurs.length];
    
    // Si secteur = 100%, dessiner un cercle complet
    if (Math.abs(angleArc - 2 * Math.PI) < 0.001) {
      svg += `<circle cx="${o.cx}" cy="${o.cy}" r="${o.rayon}" fill="${couleur}" stroke="white" stroke-width="1"/>`;
    } else {
      svg += `<path d="M ${o.cx} ${o.cy} L ${x1.toFixed(2)} ${y1.toFixed(2)} A ${o.rayon} ${o.rayon} 0 ${largeArc} 1 ${x2.toFixed(2)} ${y2.toFixed(2)} Z" fill="${couleur}" stroke="white" stroke-width="1"/>`;
    }
    
    // Label au milieu du secteur
    const angleMilieu = angleCourant + angleArc / 2;
    const xLabel = o.cx + (o.rayon * 0.65) * Math.cos(angleMilieu);
    const yLabel = o.cy + (o.rayon * 0.65) * Math.sin(angleMilieu);
    const pct = Math.round((d.valeur / total) * 100);
    if (pct >= 8) { // on n'affiche les labels que si la part est assez grande
      svg += `<text x="${xLabel.toFixed(1)}" y="${yLabel.toFixed(1)}" font-family="serif" font-size="9" fill="white" text-anchor="middle" dominant-baseline="middle">${pct}%</text>`;
    }
    
    angleCourant += angleArc;
  });
  
  svg += '</svg>';
  return svg;
}

/**
 * Trace un diagramme en barres à partir de données { label, valeur }.
 * Les graduations Y sont calculées pour que les barres tombent toujours sur une graduation entière.
 * Renvoie le SVG complet.
 */
function tracerDiagrammeBarres(donnees, opts) {
  const o = Object.assign({ width: 180, height: 130, margeG: 22, margeD: 8, margeH: 10, margeB: 24 }, opts || {});
  const zoneW = o.width - o.margeG - o.margeD;
  const zoneH = o.height - o.margeH - o.margeB;
  const valMax = Math.max(...donnees.map(d => d.valeur));
  
  // Choix du pas de graduation : on veut que toutes les valeurs des barres soient
  // des multiples du pas, et qu'il y ait entre 4 et 8 graduations.
  // Stratégie : partir du PGCD des valeurs (pas le plus fin garantissant alignement),
  // puis augmenter le pas EN RESTANT un diviseur commun, jusqu'à avoir au plus 8 graduations.
  const valeurs = donnees.map(d => d.valeur).filter(v => v > 0);
  const pgcd = (a, b) => b === 0 ? a : pgcd(b, a % b);
  let p = valeurs[0];
  for (let i = 1; i < valeurs.length; i++) p = pgcd(p, valeurs[i]);
  // p est le PGCD. Toutes les valeurs sont multiples de p.
  // Trouver les diviseurs de p, par ordre décroissant
  const diviseurs = [];
  for (let d = 1; d <= p; d++) if (p % d === 0) diviseurs.push(d);
  diviseurs.sort((a, b) => b - a); // décroissant
  // Choisir le plus grand diviseur tel que valMax / diviseur ≤ 8 (mais ≥ 3 pour pas trop de graduations)
  let pas = 1;
  for (const d of diviseurs) {
    if (valMax / d <= 8 && valMax / d >= 3) { pas = d; break; }
  }
  // Si aucun diviseur ne marche dans cette plage, prendre le plus grand qui satisfait ≤ 8
  if (pas === 1 && p > 1) {
    for (const d of diviseurs) {
      if (valMax / d <= 8) { pas = d; break; }
    }
  }
  if (pas < 1) pas = 1;
  
  // valTop = multiple de pas immédiatement supérieur ou égal à valMax
  const valTop = Math.ceil(valMax / pas) * pas;
  const nbGrad = valTop / pas;
  
  const barW = zoneW / donnees.length * 0.7;
  const gap = zoneW / donnees.length * 0.3;
  
  let svg = `<svg width="${o.width}" height="${o.height}" viewBox="0 0 ${o.width} ${o.height}" xmlns="http://www.w3.org/2000/svg" style="background: #f5efe4; border: 1px solid ${GRAPH_BORDURE}; border-radius: 4px; display: block;">`;
  
  // Cadre fond blanc
  svg += `<rect x="${o.margeG}" y="${o.margeH}" width="${zoneW}" height="${zoneH}" fill="#ffffff" stroke="${GRAPH_BORDURE}" stroke-width="1"/>`;
  
  // Graduations horizontales sur axe Y (toutes alignées sur des multiples entiers du pas)
  for (let i = 0; i <= nbGrad; i++) {
    const yPix = o.margeH + zoneH - (i / nbGrad) * zoneH;
    const val = i * pas;
    if (i > 0) {
      svg += `<line x1="${o.margeG}" y1="${yPix.toFixed(1)}" x2="${o.margeG + zoneW}" y2="${yPix.toFixed(1)}" stroke="${GRAPH_OR_CLAIR}" stroke-width="0.5"/>`;
    }
    svg += `<text x="${o.margeG - 3}" y="${(yPix + 3).toFixed(1)}" font-family="serif" font-size="8" fill="${GRAPH_BLEU}" text-anchor="end">${val}</text>`;
  }
  
  // Barres
  donnees.forEach((d, i) => {
    const xPix = o.margeG + i * (zoneW / donnees.length) + gap / 2;
    const hBar = (d.valeur / valTop) * zoneH;
    const yPix = o.margeH + zoneH - hBar;
    svg += `<rect x="${xPix.toFixed(1)}" y="${yPix.toFixed(1)}" width="${barW.toFixed(1)}" height="${hBar.toFixed(1)}" fill="${GRAPH_BLEU}" stroke="${GRAPH_BLEU}" stroke-width="0.5"/>`;
    // Label sous la barre
    const xLabel = xPix + barW / 2;
    svg += `<text x="${xLabel.toFixed(1)}" y="${(o.margeH + zoneH + 10).toFixed(1)}" font-family="serif" font-size="8" fill="${GRAPH_BLEU}" text-anchor="middle">${d.label}</text>`;
  });
  
  svg += '</svg>';
  return svg;
}

/**
 * Trace une boîte à moustaches à partir des 5 valeurs (min, Q1, médiane, Q3, max).
 * Renvoie le SVG complet.
 */
function tracerBoiteMoustaches(min, q1, med, q3, max, opts) {
  const o = Object.assign({ width: 200, height: 80, margeG: 18, margeD: 18, margeH: 18, margeB: 28 }, opts || {});
  const zoneW = o.width - o.margeG - o.margeD;
  // Marge sur les valeurs : étendre légèrement pour avoir de l'air
  const etendue = max - min;
  const valMin = min - etendue * 0.1;
  const valMax = max + etendue * 0.1;
  // Arrondir aux entiers ou demi-entiers
  const minAxe = Math.floor(valMin);
  const maxAxe = Math.ceil(valMax);
  
  const xPix = (v) => o.margeG + ((v - minAxe) / (maxAxe - minAxe)) * zoneW;
  const yMid = o.margeH + (o.height - o.margeH - o.margeB) / 2;
  const hBoite = 22;
  
  let svg = `<svg width="${o.width}" height="${o.height}" viewBox="0 0 ${o.width} ${o.height}" xmlns="http://www.w3.org/2000/svg" style="background: #f5efe4; border: 1px solid ${GRAPH_BORDURE}; border-radius: 4px; display: block;">`;
  
  // Axe X
  svg += `<line x1="${o.margeG}" y1="${o.height - o.margeB + 4}" x2="${o.margeG + zoneW}" y2="${o.height - o.margeB + 4}" stroke="${GRAPH_BLEU}" stroke-width="1"/>`;
  
  // Graduations sur l'axe
  for (let v = minAxe; v <= maxAxe; v++) {
    const xpos = xPix(v);
    svg += `<line x1="${xpos.toFixed(1)}" y1="${o.height - o.margeB + 2}" x2="${xpos.toFixed(1)}" y2="${o.height - o.margeB + 6}" stroke="${GRAPH_BLEU}" stroke-width="0.5"/>`;
    svg += `<text x="${xpos.toFixed(1)}" y="${o.height - o.margeB + 14}" font-family="serif" font-size="8" fill="${GRAPH_BLEU}" text-anchor="middle">${v}</text>`;
  }
  
  // Moustache gauche : ligne min → q1
  svg += `<line x1="${xPix(min).toFixed(1)}" y1="${yMid}" x2="${xPix(q1).toFixed(1)}" y2="${yMid}" stroke="${GRAPH_BLEU}" stroke-width="1"/>`;
  // Trait vertical au min
  svg += `<line x1="${xPix(min).toFixed(1)}" y1="${yMid - 6}" x2="${xPix(min).toFixed(1)}" y2="${yMid + 6}" stroke="${GRAPH_BLEU}" stroke-width="1"/>`;
  
  // Boîte (Q1 → Q3)
  svg += `<rect x="${xPix(q1).toFixed(1)}" y="${yMid - hBoite/2}" width="${(xPix(q3) - xPix(q1)).toFixed(1)}" height="${hBoite}" fill="#ffffff" stroke="${GRAPH_BLEU}" stroke-width="1.2"/>`;
  // Médiane (ligne verticale dans la boîte)
  svg += `<line x1="${xPix(med).toFixed(1)}" y1="${yMid - hBoite/2}" x2="${xPix(med).toFixed(1)}" y2="${yMid + hBoite/2}" stroke="${GRAPH_BLEU}" stroke-width="1.5"/>`;
  
  // Moustache droite : ligne q3 → max
  svg += `<line x1="${xPix(q3).toFixed(1)}" y1="${yMid}" x2="${xPix(max).toFixed(1)}" y2="${yMid}" stroke="${GRAPH_BLEU}" stroke-width="1"/>`;
  // Trait vertical au max
  svg += `<line x1="${xPix(max).toFixed(1)}" y1="${yMid - 6}" x2="${xPix(max).toFixed(1)}" y2="${yMid + 6}" stroke="${GRAPH_BLEU}" stroke-width="1"/>`;
  
  svg += '</svg>';
  return svg;
}

/**
 * Trace un triangle rectangle annoté.
 * opts = { angle, sommetA, sommetB, sommetC, opp, adj, hyp, angleNom }
 * - sommetA est le sommet de l'angle droit (en bas à gauche par convention)
 * - sommetB est le sommet où se trouve l'angle aigu marqué (en bas à droite)
 * - sommetC est en haut
 * - opp, adj, hyp sont les labels pour côté opposé à B (=AC), adjacent à B (=AB), hypoténuse (=BC)
 * - angleNom : nom de l'angle (ex: 'α', '30°', 'B̂', etc.)
 */
function tracerTriangleRectangle(opts) {
  const o = Object.assign({
    width: 170, height: 130,
    sommetA: 'A', sommetB: 'B', sommetC: 'C',
    opp: null, adj: null, hyp: null,
    angleNom: null,
    // proportions du triangle (le côté adjacent fait 100 px, l'opposé est défini par l'angle)
    angleDeg: 35,
    cote: 100
  }, opts || {});
  
  // Calculer les coordonnées des 3 sommets
  // A en bas à gauche (angle droit), B en bas à droite (angle aigu), C en haut à gauche
  const angleRad = o.angleDeg * Math.PI / 180;
  const cote_adj = o.cote; // côté A-B
  const cote_opp = cote_adj * Math.tan(angleRad); // côté A-C
  
  // Limiter la hauteur si trop grand
  const maxOpp = 90;
  let scale = 1;
  if (cote_opp > maxOpp) scale = maxOpp / cote_opp;
  const adjFinal = cote_adj * scale;
  const oppFinal = cote_opp * scale;
  
  // Positionnement dans le SVG (centré horizontalement)
  const margeG = 22, margeB = 25, margeH = 18;
  const xA = margeG, yA = o.height - margeB;
  const xB = xA + adjFinal, yB = yA;
  const xC = xA, yC = yA - oppFinal;
  
  let svg = `<svg width="${o.width}" height="${o.height}" viewBox="0 0 ${o.width} ${o.height}" xmlns="http://www.w3.org/2000/svg" style="background: #f5efe4; border: 1px solid ${GRAPH_BORDURE}; border-radius: 4px; display: block;">`;
  
  // Triangle
  svg += `<polygon points="${xA},${yA} ${xB},${yB} ${xC},${yC}" fill="white" stroke="${GRAPH_BLEU}" stroke-width="1.5"/>`;
  
  // Carré indiquant l'angle droit en A
  const tailleCarre = 8;
  svg += `<polyline points="${xA + tailleCarre},${yA} ${xA + tailleCarre},${yA - tailleCarre} ${xA},${yA - tailleCarre}" fill="none" stroke="${GRAPH_BLEU}" stroke-width="1"/>`;
  
  // Arc pour l'angle marqué en B (s'il y en a un)
  if (o.angleNom) {
    const rArc = 14;
    // Angle entre la direction BA (gauche) et BC (vers le sommet en haut)
    const xBAdir_x = -1, xBAdir_y = 0;
    const xBCdir_x = (xC - xB), xBCdir_y = (yC - yB);
    const normBC = Math.sqrt(xBCdir_x*xBCdir_x + xBCdir_y*xBCdir_y);
    const cosA = (xBAdir_x * xBCdir_x + xBAdir_y * xBCdir_y) / normBC;
    const angleAuB = Math.acos(cosA);
    // Arc dessiné de la direction BA à BC autour de B
    const startX = xB - rArc, startY = yB; // direction BA
    const endX = xB + rArc * Math.cos(Math.PI - angleAuB), endY = yB - rArc * Math.sin(Math.PI - angleAuB);
    svg += `<path d="M ${startX.toFixed(1)} ${startY.toFixed(1)} A ${rArc} ${rArc} 0 0 1 ${endX.toFixed(1)} ${endY.toFixed(1)}" fill="none" stroke="${GRAPH_BLEU}" stroke-width="1"/>`;
    // Label de l'angle
    const labelAngle = Math.PI - angleAuB/2;
    const xLab = xB + (rArc + 10) * Math.cos(labelAngle);
    const yLab = yB + (rArc + 10) * Math.sin(-angleAuB/2);
    svg += `<text x="${xLab.toFixed(1)}" y="${yLab.toFixed(1)}" font-family="serif" font-style="italic" font-size="12" fill="${GRAPH_BLEU}" text-anchor="middle" dominant-baseline="middle">${o.angleNom}</text>`;
  }
  
  // Labels des sommets
  svg += `<text x="${xA - 8}" y="${yA + 12}" font-family="serif" font-size="13" font-weight="500" fill="${GRAPH_BLEU}" text-anchor="end">${o.sommetA}</text>`;
  svg += `<text x="${xB + 4}" y="${yB + 12}" font-family="serif" font-size="13" font-weight="500" fill="${GRAPH_BLEU}">${o.sommetB}</text>`;
  svg += `<text x="${xC - 8}" y="${yC - 2}" font-family="serif" font-size="13" font-weight="500" fill="${GRAPH_BLEU}" text-anchor="end">${o.sommetC}</text>`;
  
  // Labels des côtés
  if (o.adj) {
    // Côté A-B (en bas), label sous le segment
    svg += `<text x="${(xA + xB) / 2}" y="${yA + 18}" font-family="serif" font-style="italic" font-size="11" fill="${GRAPH_BLEU}" text-anchor="middle">${o.adj}</text>`;
  }
  if (o.opp) {
    // Côté A-C (à gauche), label à gauche du segment
    svg += `<text x="${xA - 6}" y="${(yA + yC) / 2 + 4}" font-family="serif" font-style="italic" font-size="11" fill="${GRAPH_BLEU}" text-anchor="end">${o.opp}</text>`;
  }
  if (o.hyp) {
    // Côté B-C (oblique), label au milieu décalé
    const midX = (xB + xC) / 2, midY = (yB + yC) / 2;
    // décalage perpendiculaire
    const dx = xC - xB, dy = yC - yB;
    const len = Math.sqrt(dx*dx + dy*dy);
    const offsetX = -dy / len * 12, offsetY = dx / len * 12;
    svg += `<text x="${(midX + offsetX).toFixed(1)}" y="${(midY + offsetY).toFixed(1)}" font-family="serif" font-style="italic" font-size="11" fill="${GRAPH_BLEU}" text-anchor="middle">${o.hyp}</text>`;
  }
  
  svg += '</svg>';
  return svg;
}

/**
 * Trace un vecteur dans un repère (flèche de A vers B).
 * À utiliser après tracerRepere : svg = creerRepere(...).svg + tracerVecteur(...) + creerRepere.fermer()
 */
function tracerVecteur(repere, xA, yA, xB, yB, opts) {
  const o = Object.assign({ couleur: GRAPH_BLEU, label: null, labelOffset: 6 }, opts || {});
  const x1 = repere.xPix(xA), y1 = repere.yPix(yA);
  const x2 = repere.xPix(xB), y2 = repere.yPix(yB);
  let svg = '';
  // Définir un marqueur "arrow" unique avec un id basé sur la couleur
  const arrowId = 'arrow_' + o.couleur.replace('#', '');
  svg += `<defs><marker id="${arrowId}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="${o.couleur}"/></marker></defs>`;
  // Flèche
  svg += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${o.couleur}" stroke-width="1.5" marker-end="url(#${arrowId})"/>`;
  // Label (milieu du vecteur, décalé perpendiculairement)
  if (o.label) {
    const midX = (x1 + x2) / 2, midY = (y1 + y2) / 2;
    const dx = x2 - x1, dy = y2 - y1;
    const len = Math.sqrt(dx*dx + dy*dy);
    if (len > 0) {
      const offsetX = -dy / len * o.labelOffset;
      const offsetY = dx / len * o.labelOffset;
      svg += `<text x="${(midX + offsetX).toFixed(1)}" y="${(midY + offsetY).toFixed(1)}" font-family="serif" font-style="italic" font-size="11" fill="${o.couleur}" text-anchor="middle" dominant-baseline="middle">${o.label}</text>`;
    }
  }
  return svg;
}
