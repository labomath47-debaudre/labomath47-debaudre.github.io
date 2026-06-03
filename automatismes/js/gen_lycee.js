/* LaboMath — Générateurs lycée pré-bac
   129 générateurs, profils : seconde + 1re STMG + 1re STI2D
   Fichier généré automatiquement par refactor.py.
   Étend window.LM_GEN (l'objet global agrégeant tous les générateurs). */

Object.assign(window.LM_GEN ??= {}, {

  affine_image: (d) => {
    const B = bornes[d];
    const a = randNonZero(B.aff_a[0], B.aff_a[1]);
    const b = rand(B.aff_b[0], B.aff_b[1]);
    const x = randNonZero(B.aff_x[0], B.aff_x[1]);
    const r = a * x + b;
    return { enonce: `Soit $f(x) = ${a}x ${b >= 0 ? '+' : ''} ${b}$. Calculer $f(${x})$.`,
             corrige: `$f(${x}) = ${a} \\times ${x} ${b >= 0 ? '+' : ''} ${b} = ${a*x} ${b >= 0 ? '+' : ''} ${b} = ${r}$.` };
  },

  affine_antecedent: (d) => {
    const B = bornes[d];
    const a = randNonZero(B.aff_a[0], B.aff_a[1]);
    const b = rand(B.aff_b[0], B.aff_b[1]);
    const xc = randNonZero(B.aff_x[0], B.aff_x[1]);
    const k = a * xc + b;
    return { enonce: `Soit $f(x) = ${a}x ${b >= 0 ? '+' : ''} ${b}$. Résoudre $f(x) = ${k}$.`,
             corrige: `$${a}x ${b >= 0 ? '+' : ''} ${b} = ${k}$ donne $${a}x = ${k - b}$ soit $x = \\dfrac{${k-b}}{${a}} = ${xc}$.` };
  },

  affine_coefs: (d) => {
    const B = bornes[d];
    const a = randNonZero(B.aff_a[0], B.aff_a[1]);
    const b = rand(B.aff_b[0], B.aff_b[1]);
    return { enonce: `Donner le coefficient directeur et l'ordonnée à l'origine de $f(x) = ${a}x ${b >= 0 ? '+' : ''} ${b}$.`,
             corrige: `Coefficient directeur : $${a}$. Ordonnée à l'origine : $${b}$.` };
  },

  affine_par_points: (d) => {
    const B = bornes[d];
    const a = randNonZero(B.aff_a[0], B.aff_a[1]);
    const b = rand(B.aff_b[0], B.aff_b[1]);
    const x1 = randNonZero(B.aff_x[0], B.aff_x[1]);
    let x2 = randNonZero(B.aff_x[0], B.aff_x[1]);
    while (x2 === x1) x2 = randNonZero(B.aff_x[0], B.aff_x[1]);
    const y1 = a*x1 + b;
    const y2 = a*x2 + b;
    return { enonce: `Une fonction affine $f$ vérifie $f(${x1}) = ${y1}$ et $f(${x2}) = ${y2}$. Déterminer son expression.`,
             corrige: `$a = \\dfrac{${y2} - (${y1})}{${x2} - (${x1})} = ${a}$. Puis $f(${x1}) = ${y1}$ donne $b = ${b}$. Donc $f(x) = ${a}x ${b >= 0 ? '+' : ''} ${b}$.` };
  },

  affine_variation: (d) => {
    const B = bornes[d];
    const a = randNonZero(B.aff_a[0], B.aff_a[1]);
    const b = rand(B.aff_b[0], B.aff_b[1]);
    const sens = a > 0 ? 'croissante' : 'décroissante';
    return { enonce: `Donner le sens de variation de $f(x) = ${a}x ${b >= 0 ? '+' : ''} ${b}$ sur $\\mathbb{R}$.`,
             corrige: `Le coefficient directeur $${a}$ est ${a > 0 ? 'positif' : 'négatif'}, donc $f$ est ${sens} sur $\\mathbb{R}$.` };
  },

  carre_image: (d) => {
    const B = bornes[d];
    const x = randNonZero(B.carre_x[0], B.carre_x[1]);
    return { enonce: `Soit $f(x) = x^2$. Calculer $f(${x})$.`, corrige: `$f(${x}) = (${x})^2 = ${x*x}$.` };
  },

  carre_antecedents: (d) => {
    const B = bornes[d];
    const n = rand(B.carre_n[0], B.carre_n[1]);
    const c = n * n;
    return { enonce: `Résoudre dans $\\mathbb{R}$ l'équation $x^2 = ${c}$.`,
             corrige: `$x = ${n}$ ou $x = -${n}$. Solutions : $\\{-${n}\\,;\\,${n}\\}$.` };
  },

  carre_comparaison: (d) => {
    const B = bornes[d];
    let a = rand(B.comp[0], B.comp[1]);
    let b = rand(B.comp[0], B.comp[1]);
    while (b === a) b = rand(B.comp[0], B.comp[1]);
    if (a > b) [a, b] = [b, a];
    return { enonce: `Comparer $${a}^2$ et $${b}^2$ sans calculer (justifier).`,
             corrige: `La fonction carré est croissante sur $[0\\,;\\,+\\infty[$. Comme $0 < ${a} < ${b}$, on a $${a}^2 < ${b}^2$ ($${a*a} < ${b*b}$).` };
  },

  carre_comparaison_neg: (d) => {
    const B = bornes[d];
    let a = -rand(B.comp[0], B.comp[1]);
    let b = -rand(B.comp[0], B.comp[1]);
    while (b === a) b = -rand(B.comp[0], B.comp[1]);
    if (a > b) [a, b] = [b, a];
    return { enonce: `Comparer $(${a})^2$ et $(${b})^2$ sans calculer (justifier).`,
             corrige: `La fonction carré est décroissante sur $]-\\infty\\,;\\,0]$. Comme $${a} < ${b} \\le 0$, on a $(${a})^2 > (${b})^2$ ($${a*a} > ${b*b}$).` };
  },

  carre_calcul: (d) => {
    const v = (d === 1)
      ? [() => { const x = rand(11, 15); return { enonce: `Calculer $${x}^2$.`, corrige: `$${x*x}$.` }; },
         () => { const x = rand(2, 9); return { enonce: `Calculer $${x}^2$.`, corrige: `$${x*x}$.` }; }]
      : (d === 2)
      ? [() => { const x = rand(11, 19); return { enonce: `Calculer $${x}^2$.`, corrige: `$${x*x}$.` }; },
         () => { const x = rand(21, 29); return { enonce: `Calculer $${x}^2$.`, corrige: `$${x*x}$.` }; },
         () => { const x = -rand(2, 12); return { enonce: `Calculer $(${x})^2$.`, corrige: `$${x*x}$.` }; }]
      : [() => { const x = rand(21, 39); return { enonce: `Calculer $${x}^2$.`, corrige: `$${x*x}$.` }; },
         () => { const x = -rand(11, 19); return { enonce: `Calculer $(${x})^2$.`, corrige: `$${x*x}$.` }; },
         () => { const dem = pick([0.5, 1.5, 2.5, 3.5, 4.5]); return { enonce: `Calculer $(${dem})^2$.`, corrige: `$${(dem*dem).toFixed(2).replace(/\.?0+$/, '')}$.` }; }];
    return pick(v)();
  },

  cm_tables: (d) => {
    // Facile : tables 2 à 5 / Moyen : 2 à 10 / Difficile : 2 à 12
    const max = (d === 1) ? 5 : (d === 2) ? 10 : 12;
    const a = rand(2, max);
    const b = rand(2, max);
    return {
      enonce: `Calculer $${a} \\times ${b}$.`,
      corrige: `$${a} \\times ${b} = ${a*b}$.`
    };
  },

  cm_add: (d) => {
    // Facile : entiers < 50 / Moyen : entiers ou décimaux < 100 / Difficile : décimaux à 1 chiffre
    if (d === 1) {
      const a = rand(10, 50);
      const b = rand(10, 50);
      return { enonce: `Calculer $${a} + ${b}$.`, corrige: `$${a} + ${b} = ${a+b}$.` };
    } else if (d === 2) {
      const variantes = [
        () => { const a = rand(50, 99); const b = rand(50, 99); return { enonce: `Calculer $${a} + ${b}$.`, corrige: `$${a+b}$.` }; },
        () => { const a = rand(10, 50) + 0.5; const b = rand(10, 50) + 0.5; return { enonce: `Calculer $${a} + ${b}$.`, corrige: `$${a+b}$.` }; }
      ];
      return pick(variantes)();
    } else {
      const a = (rand(20, 99) + rand(1, 9)/10);
      const b = (rand(20, 99) + rand(1, 9)/10);
      return { enonce: `Calculer $${a.toFixed(1)} + ${b.toFixed(1)}$.`, corrige: `$${(a+b).toFixed(1)}$.` };
    }
  },

  cm_sous: (d) => {
    if (d === 1) {
      const a = rand(20, 50);
      const b = rand(5, a - 5);
      return { enonce: `Calculer $${a} - ${b}$.`, corrige: `$${a-b}$.` };
    } else if (d === 2) {
      const variantes = [
        () => { const a = rand(50, 99); const b = rand(20, a-10); return { enonce: `Calculer $${a} - ${b}$.`, corrige: `$${a-b}$.` }; },
        () => { const a = rand(10, 30); const b = rand(a+5, a+20); return { enonce: `Calculer $${a} - ${b}$.`, corrige: `$${a-b}$.` }; }
      ];
      return pick(variantes)();
    } else {
      const variantes = [
        () => { const a = rand(20, 99) + rand(1,9)/10; const b = rand(5, 30) + rand(1,9)/10; return { enonce: `Calculer $${a.toFixed(1)} - ${b.toFixed(1)}$.`, corrige: `$${(a-b).toFixed(1)}$.` }; },
        () => { const a = rand(10, 30); const b = rand(a+5, a+30); return { enonce: `Calculer $${a} - ${b}$.`, corrige: `$${a-b}$.` }; }
      ];
      return pick(variantes)();
    }
  },

  cm_mult10: (d) => {
    const facteurs = (d === 1) ? [10, 100]
                   : (d === 2) ? [10, 100, 1000, 0.1, 0.01]
                   :             [10, 100, 1000, 10000, 0.1, 0.01, 0.001];
    const f = pick(facteurs);
    // Choisir un nombre pour multiplier
    const n_entier = rand(2, 99);
    const n_decimal = (rand(1, 99) + rand(1, 99)/100);
    const n = (d === 1) ? n_entier
            : pick([n_entier, parseFloat(n_decimal.toFixed(2))]);
    const r = parseFloat((n * f).toPrecision(12));
    return {
      enonce: `Calculer $${n} \\times ${f}$.`,
      corrige: `$${n} \\times ${f} = ${r}$.`
    };
  },

  cm_compl: (d) => {
    const cible = (d === 1) ? 10
                : (d === 2) ? pick([10, 100])
                :             pick([100, 1000]);
    let n;
    if (cible === 10) n = rand(1, 9);
    else if (cible === 100) n = rand(11, 99);
    else n = rand(101, 999);
    return {
      enonce: `Quel nombre faut-il ajouter à $${n}$ pour obtenir $${cible}$ ?`,
      corrige: `Il faut ajouter $${cible - n}$ (car $${n} + ${cible - n} = ${cible}$).`
    };
  },

  conv_long: (d) => {
    const unites = ['mm', 'cm', 'm', 'km'];
    const facteurs = { mm: 0.001, cm: 0.01, m: 1, km: 1000 };
    // Facile : mm↔cm, cm↔m / Moyen : tous sauf km↔mm / Difficile : km↔mm
    let depart, arrivee;
    if (d === 1) {
      const choix = pick([['mm','cm'], ['cm','m'], ['m','cm'], ['cm','mm']]);
      [depart, arrivee] = choix;
    } else if (d === 2) {
      const choix = pick([['mm','m'], ['cm','m'], ['m','km'], ['km','m'], ['m','mm']]);
      [depart, arrivee] = choix;
    } else {
      const choix = pick([['mm','km'], ['km','mm'], ['mm','m'], ['km','cm'], ['cm','km']]);
      [depart, arrivee] = choix;
    }
    const valeur = (d === 1) ? rand(1, 99) : (rand(1, 999) + rand(0,99)/100);
    const valeurAff = (d === 1) ? valeur : parseFloat(valeur.toFixed(2));
    const resultat = parseFloat((valeurAff * facteurs[depart] / facteurs[arrivee]).toPrecision(10));
    return {
      enonce: `Convertir : $${valeurAff}$ ${depart} = … ${arrivee}.`,
      corrige: `$${valeurAff}$ ${depart} $= ${resultat}$ ${arrivee}.`
    };
  },

  conv_masse: (d) => {
    const unites = ['mg', 'g', 'kg', 't'];
    const facteurs = { mg: 0.000001, g: 0.001, kg: 1, t: 1000 };
    let depart, arrivee;
    if (d === 1) {
      const choix = pick([['g','kg'], ['kg','g'], ['mg','g'], ['g','mg']]);
      [depart, arrivee] = choix;
    } else if (d === 2) {
      const choix = pick([['mg','kg'], ['kg','mg'], ['g','t'], ['t','g'], ['mg','g']]);
      [depart, arrivee] = choix;
    } else {
      const choix = pick([['mg','t'], ['t','mg'], ['mg','kg'], ['t','g']]);
      [depart, arrivee] = choix;
    }
    const valeur = (d === 1) ? rand(1, 99) : (rand(1, 999) + rand(0,99)/100);
    const valeurAff = (d === 1) ? valeur : parseFloat(valeur.toFixed(2));
    const resultat = parseFloat((valeurAff * facteurs[depart] / facteurs[arrivee]).toPrecision(10));
    return {
      enonce: `Convertir : $${valeurAff}$ ${depart} = … ${arrivee}.`,
      corrige: `$${valeurAff}$ ${depart} $= ${resultat}$ ${arrivee}.`
    };
  },

  conv_cap: (d) => {
    const facteurs = { mL: 0.001, cL: 0.01, dL: 0.1, L: 1 };
    let depart, arrivee;
    if (d === 1) {
      const choix = pick([['mL','cL'], ['cL','L'], ['L','cL'], ['cL','mL']]);
      [depart, arrivee] = choix;
    } else if (d === 2) {
      const choix = pick([['mL','L'], ['L','mL'], ['dL','L'], ['L','dL']]);
      [depart, arrivee] = choix;
    } else {
      const choix = pick([['mL','L'], ['L','mL'], ['mL','dL'], ['dL','mL']]);
      [depart, arrivee] = choix;
    }
    const valeur = (d === 1) ? rand(1, 99) : (rand(1, 999) + rand(0,99)/100);
    const valeurAff = (d === 1) ? valeur : parseFloat(valeur.toFixed(2));
    const resultat = parseFloat((valeurAff * facteurs[depart] / facteurs[arrivee]).toPrecision(10));
    return {
      enonce: `Convertir : $${valeurAff}$ ${depart} = … ${arrivee}.`,
      corrige: `$${valeurAff}$ ${depart} $= ${resultat}$ ${arrivee}.`
    };
  },

  conv_duree: (d) => {
    const variantes = (d === 1) ? [
      () => { const m = rand(2, 9); return { enonce: `Combien de minutes dans $${m}$ heures ?`, corrige: `$${m} \\times 60 = ${m*60}$ min.` }; },
      () => { const m = rand(60, 300); return { enonce: `Convertir $${m}$ secondes en minutes.`, corrige: `$${m} : 60 = ${Math.floor(m/60)}$ min $${m%60}$ s.` }; }
    ] : (d === 2) ? [
      () => { const h = rand(1, 5); const m = rand(10, 50); return { enonce: `Convertir $${h}$ h $${m}$ min en minutes.`, corrige: `$${h} \\times 60 + ${m} = ${h*60+m}$ min.` }; },
      () => { const tot = rand(120, 600); return { enonce: `Convertir $${tot}$ minutes en heures et minutes.`, corrige: `$${tot} : 60 = ${Math.floor(tot/60)}$ h $${tot%60}$ min.` }; },
      () => { const min = rand(2, 9); return { enonce: `Combien de secondes dans $${min}$ minutes ?`, corrige: `$${min} \\times 60 = ${min*60}$ s.` }; }
    ] : [
      () => { const h = rand(1, 5); const m = rand(10, 59); const s = rand(10, 59); return { enonce: `Convertir $${h}$ h $${m}$ min $${s}$ s en secondes.`, corrige: `$${h*3600+m*60+s}$ s.` }; },
      () => { const sec = rand(3700, 9999); const h = Math.floor(sec/3600); const m = Math.floor((sec%3600)/60); const s = sec%60; return { enonce: `Convertir $${sec}$ s en heures, minutes, secondes.`, corrige: `$${h}$ h $${m}$ min $${s}$ s.` }; }
    ];
    return pick(variantes)();
  },

  conv_aire: (d) => {
    const facteurs = { 'mm²': 0.000001, 'cm²': 0.0001, 'dm²': 0.01, 'm²': 1, 'a': 100, 'ha': 10000, 'km²': 1000000 };
    let depart, arrivee;
    if (d === 1) {
      const choix = pick([['cm²','m²'], ['m²','cm²'], ['mm²','cm²'], ['cm²','mm²']]);
      [depart, arrivee] = choix;
    } else if (d === 2) {
      const choix = pick([['m²','ha'], ['ha','m²'], ['a','m²'], ['m²','a'], ['km²','m²']]);
      [depart, arrivee] = choix;
    } else {
      const choix = pick([['m²','km²'], ['km²','m²'], ['ha','km²'], ['mm²','m²'], ['cm²','km²']]);
      [depart, arrivee] = choix;
    }
    const valeur = (d === 1) ? rand(1, 99) : (rand(1, 999) + rand(0,99)/100);
    const valeurAff = (d === 1) ? valeur : parseFloat(valeur.toFixed(2));
    const resultat = parseFloat((valeurAff * facteurs[depart] / facteurs[arrivee]).toPrecision(10));
    return {
      enonce: `Convertir : $${valeurAff}$ ${depart} = … ${arrivee}.`,
      corrige: `$${valeurAff}$ ${depart} $= ${resultat}$ ${arrivee}.`
    };
  },

  conv_vol: (d) => {
    const variantes = (d === 1) ? [
      () => { const v = rand(1, 99); return { enonce: `Convertir $${v}$ dm³ en litres.`, corrige: `$1$ dm³ $= 1$ L, donc $${v}$ dm³ $= ${v}$ L.` }; },
      () => { const v = rand(1, 99); return { enonce: `Convertir $${v}$ L en dm³.`, corrige: `$${v}$ L $= ${v}$ dm³.` }; },
      () => { const v = rand(2, 9); return { enonce: `Convertir $${v}$ m³ en L.`, corrige: `$1$ m³ $= 1000$ L, donc $${v}$ m³ $= ${v*1000}$ L.` }; }
    ] : (d === 2) ? [
      () => { const v = rand(100, 9999); return { enonce: `Convertir $${v}$ cm³ en L.`, corrige: `$1000$ cm³ $= 1$ L, donc $${v}$ cm³ $= ${v/1000}$ L.` }; },
      () => { const v = (rand(1, 99) + rand(0,9)/10); return { enonce: `Convertir $${v.toFixed(1)}$ L en mL.`, corrige: `$${v.toFixed(1)}$ L $= ${(v*1000)}$ mL.` }; },
      () => { const v = rand(2, 9); return { enonce: `Convertir $${v}$ m³ en dm³.`, corrige: `$${v}$ m³ $= ${v*1000}$ dm³.` }; }
    ] : [
      () => { const v = (rand(1, 99) + rand(0,9)/10); return { enonce: `Convertir $${v.toFixed(1)}$ m³ en cm³.`, corrige: `$${v.toFixed(1)}$ m³ $= ${v*1000000}$ cm³.` }; },
      () => { const v = rand(10, 999); return { enonce: `Convertir $${v}$ cL en cm³ (sachant que $1$ cL $= 10$ cm³).`, corrige: `$${v}$ cL $= ${v*10}$ cm³.` }; },
      () => { const v = (rand(1, 9) + rand(0,9)/10); return { enonce: `Convertir $${v.toFixed(1)}$ m³ en L.`, corrige: `$${v.toFixed(1)}$ m³ $= ${v*1000}$ L.` }; }
    ];
    return pick(variantes)();
  },

  rel_add: (d) => {
    let a, b;
    if (d === 1) {
      // Facile : un seul des deux est négatif, valeurs petites
      a = pick([rand(2, 9), -rand(2, 9)]);
      b = pick([rand(2, 9), -rand(2, 9)]);
    } else if (d === 2) {
      // Moyen : les deux peuvent être négatifs, valeurs moyennes
      a = pick([rand(2, 20), -rand(2, 20)]);
      b = pick([rand(2, 20), -rand(2, 20)]);
    } else {
      // Difficile : décimaux et valeurs plus grandes
      a = pick([(rand(2, 50) + rand(0,9)/10), -(rand(2, 50) + rand(0,9)/10)]);
      b = pick([(rand(2, 50) + rand(0,9)/10), -(rand(2, 50) + rand(0,9)/10)]);
      a = parseFloat(a.toFixed(1));
      b = parseFloat(b.toFixed(1));
    }
    const r = parseFloat((a + b).toFixed(1));
    // Affichage joli : (+a) ou (-a), avec parenthèses si négatif
    const affB = b < 0 ? `(${b})` : `${b}`;
    return {
      enonce: `Calculer $${a} + ${affB}$.`,
      corrige: `$${a} + ${affB} = ${r}$.`
    };
  },

  rel_sous: (d) => {
    let a, b;
    if (d === 1) {
      a = pick([rand(2, 9), -rand(2, 9)]);
      b = pick([rand(2, 9), -rand(2, 9)]);
    } else if (d === 2) {
      a = pick([rand(2, 20), -rand(2, 20)]);
      b = pick([rand(2, 20), -rand(2, 20)]);
    } else {
      a = pick([(rand(2, 50) + rand(0,9)/10), -(rand(2, 50) + rand(0,9)/10)]);
      b = pick([(rand(2, 50) + rand(0,9)/10), -(rand(2, 50) + rand(0,9)/10)]);
      a = parseFloat(a.toFixed(1));
      b = parseFloat(b.toFixed(1));
    }
    const r = parseFloat((a - b).toFixed(1));
    const affB = b < 0 ? `(${b})` : `${b}`;
    return {
      enonce: `Calculer $${a} - ${affB}$.`,
      corrige: `$${a} - ${affB} = ${r}$.`
    };
  },

  rel_mult: (d) => {
    let a, b;
    if (d === 1) {
      a = pick([rand(2, 7), -rand(2, 7)]);
      b = pick([rand(2, 7), -rand(2, 7)]);
    } else if (d === 2) {
      a = pick([rand(2, 12), -rand(2, 12)]);
      b = pick([rand(2, 12), -rand(2, 12)]);
    } else {
      a = pick([rand(2, 25), -rand(2, 25)]);
      b = pick([rand(2, 15), -rand(2, 15)]);
    }
    const r = a * b;
    const affA = a < 0 ? `(${a})` : `${a}`;
    const affB = b < 0 ? `(${b})` : `${b}`;
    return {
      enonce: `Calculer $${affA} \\times ${affB}$.`,
      corrige: `$${affA} \\times ${affB} = ${r}$.`
    };
  },

  rel_div: (d) => {
    // On choisit le quotient et le diviseur puis on calcule le dividende
    // pour avoir toujours un résultat entier
    let q, diviseur;
    if (d === 1) {
      q = pick([rand(2, 6), -rand(2, 6)]);
      diviseur = pick([rand(2, 5), -rand(2, 5)]);
    } else if (d === 2) {
      q = pick([rand(2, 10), -rand(2, 10)]);
      diviseur = pick([rand(2, 8), -rand(2, 8)]);
    } else {
      q = pick([rand(2, 20), -rand(2, 20)]);
      diviseur = pick([rand(2, 12), -rand(2, 12)]);
    }
    const dividende = q * diviseur;
    const affDividende = dividende < 0 ? `(${dividende})` : `${dividende}`;
    const affDiviseur = diviseur < 0 ? `(${diviseur})` : `${diviseur}`;
    return {
      enonce: `Calculer $${affDividende} \\div ${affDiviseur}$.`,
      corrige: `$${affDividende} \\div ${affDiviseur} = ${q}$.`
    };
  },

  rel_signes: (d) => {
    if (d === 1) {
      // Facile : produit de deux facteurs
      const sa = pick(['+', '-']);
      const sb = pick(['+', '-']);
      const a = rand(2, 9);
      const b = rand(2, 9);
      const affA = sa === '-' ? `(-${a})` : `${a}`;
      const affB = sb === '-' ? `(-${b})` : `${b}`;
      const produit = (sa === '-' ? -a : a) * (sb === '-' ? -b : b);
      const signeRes = produit > 0 ? 'positif' : 'négatif';
      return {
        enonce: `Donner le signe du produit $${affA} \\times ${affB}$ sans calculer.`,
        corrige: `Le produit est ${signeRes} (${sa === sb ? 'même signe' : 'signes différents'}). On a $${affA} \\times ${affB} = ${produit}$.`
      };
    } else if (d === 2) {
      // Moyen : produit de 3 facteurs ou quotient
      const variantes = [
        () => {
          const sa = pick(['+', '-']);
          const sb = pick(['+', '-']);
          const sc = pick(['+', '-']);
          const a = rand(2, 8); const b = rand(2, 8); const c = rand(2, 8);
          const affA = sa === '-' ? `(-${a})` : `${a}`;
          const affB = sb === '-' ? `(-${b})` : `${b}`;
          const affC = sc === '-' ? `(-${c})` : `${c}`;
          const nbMoins = [sa, sb, sc].filter(s => s === '-').length;
          const signeRes = nbMoins % 2 === 0 ? 'positif' : 'négatif';
          return {
            enonce: `Donner le signe du produit $${affA} \\times ${affB} \\times ${affC}$ sans calculer.`,
            corrige: `Il y a ${nbMoins} facteur${nbMoins>1?'s':''} négatif${nbMoins>1?'s':''}, donc le produit est ${signeRes} (${nbMoins} est ${nbMoins%2===0?'pair':'impair'}).`
          };
        }
      ];
      return variantes[0]();
    } else {
      // Difficile : 4 facteurs ou expression mixte
      const sa = pick(['+', '-']);
      const sb = pick(['+', '-']);
      const sc = pick(['+', '-']);
      const sd = pick(['+', '-']);
      const a = rand(2, 7); const b = rand(2, 7); const c = rand(2, 7); const da = rand(2, 7);
      const affA = sa === '-' ? `(-${a})` : `${a}`;
      const affB = sb === '-' ? `(-${b})` : `${b}`;
      const affC = sc === '-' ? `(-${c})` : `${c}`;
      const affD = sd === '-' ? `(-${da})` : `${da}`;
      const nbMoins = [sa, sb, sc, sd].filter(s => s === '-').length;
      const signeRes = nbMoins % 2 === 0 ? 'positif' : 'négatif';
      return {
        enonce: `Donner le signe de $${affA} \\times ${affB} \\times ${affC} \\times ${affD}$ sans calculer.`,
        corrige: `Il y a ${nbMoins} facteur${nbMoins>1?'s':''} négatif${nbMoins>1?'s':''}, donc le produit est ${signeRes}.`
      };
    }
  },

  pri_paren: (d) => {
    if (d === 1) {
      // Facile : (a+b) × c ou a × (b+c)
      const a = rand(2, 9);
      const b = rand(2, 9);
      const c = rand(2, 5);
      const variantes = [
        () => ({ enonce: `Calculer $(${a} + ${b}) \\times ${c}$.`, corrige: `$(${a} + ${b}) \\times ${c} = ${a+b} \\times ${c} = ${(a+b)*c}$.` }),
        () => ({ enonce: `Calculer $${c} \\times (${a} + ${b})$.`, corrige: `$${c} \\times (${a} + ${b}) = ${c} \\times ${a+b} = ${c*(a+b)}$.` })
      ];
      return pick(variantes)();
    } else if (d === 2) {
      // Moyen : (a + b) × (c + d) ou avec soustractions
      const a = rand(2, 12);
      const b = rand(2, 12);
      const c = rand(2, 8);
      const da = rand(2, 8);
      const variantes = [
        () => ({ enonce: `Calculer $(${a} + ${b}) \\times (${c} - ${da})$.`,
                 corrige: `$(${a} + ${b}) \\times (${c} - ${da}) = ${a+b} \\times ${c-da} = ${(a+b)*(c-da)}$.` }),
        () => ({ enonce: `Calculer $(${a} - ${b}) \\times ${c}$.`,
                 corrige: `$(${a} - ${b}) \\times ${c} = ${a-b} \\times ${c} = ${(a-b)*c}$.` })
      ];
      return pick(variantes)();
    } else {
      // Difficile : expressions plus complexes
      const a = rand(2, 15);
      const b = rand(2, 15);
      const c = rand(2, 10);
      const da = rand(2, 10);
      const e = rand(2, 8);
      const variantes = [
        () => ({ enonce: `Calculer $${e} \\times (${a} - ${b}) + ${c} \\times ${da}$.`,
                 corrige: `$${e} \\times (${a} - ${b}) + ${c} \\times ${da} = ${e} \\times ${a-b} + ${c*da} = ${e*(a-b)} + ${c*da} = ${e*(a-b) + c*da}$.` }),
        () => ({ enonce: `Calculer $(${a} + ${b}) \\times (${c} - ${da}) - ${e}$.`,
                 corrige: `$(${a} + ${b}) \\times (${c} - ${da}) - ${e} = ${a+b} \\times ${c-da} - ${e} = ${(a+b)*(c-da)} - ${e} = ${(a+b)*(c-da) - e}$.` })
      ];
      return pick(variantes)();
    }
  },

  pri_puiss: (d) => {
    if (d === 1) {
      // Facile : a² + b ou a × b²
      const a = rand(2, 6);
      const b = rand(2, 9);
      const variantes = [
        () => ({ enonce: `Calculer $${a}^2 + ${b}$.`, corrige: `$${a}^2 + ${b} = ${a*a} + ${b} = ${a*a + b}$.` }),
        () => ({ enonce: `Calculer $${a}^2 \\times ${b}$.`, corrige: `$${a}^2 \\times ${b} = ${a*a} \\times ${b} = ${a*a*b}$.` })
      ];
      return pick(variantes)();
    } else if (d === 2) {
      // Moyen : a² + b² ou a² - b² ou a² × b - c
      const a = rand(2, 9);
      const b = rand(2, 7);
      const c = rand(2, 9);
      const variantes = [
        () => ({ enonce: `Calculer $${a}^2 + ${b}^2$.`, corrige: `$${a}^2 + ${b}^2 = ${a*a} + ${b*b} = ${a*a + b*b}$.` }),
        () => ({ enonce: `Calculer $${a}^2 - ${b}^2$.`, corrige: `$${a}^2 - ${b}^2 = ${a*a} - ${b*b} = ${a*a - b*b}$.` }),
        () => ({ enonce: `Calculer $${a}^2 \\times ${b} - ${c}$.`, corrige: `$${a}^2 \\times ${b} - ${c} = ${a*a} \\times ${b} - ${c} = ${a*a*b} - ${c} = ${a*a*b - c}$.` })
      ];
      return pick(variantes)();
    } else {
      // Difficile : 2 × a² - b × c ou (a + b)² - c²
      const a = rand(2, 9);
      const b = rand(2, 7);
      const c = rand(2, 9);
      const variantes = [
        () => ({ enonce: `Calculer $2 \\times ${a}^2 - ${b} \\times ${c}$.`, corrige: `$2 \\times ${a}^2 - ${b} \\times ${c} = 2 \\times ${a*a} - ${b*c} = ${2*a*a} - ${b*c} = ${2*a*a - b*c}$.` }),
        () => ({ enonce: `Calculer $(${a} + ${b})^2 - ${c}^2$.`, corrige: `$(${a} + ${b})^2 - ${c}^2 = ${a+b}^2 - ${c*c} = ${(a+b)*(a+b)} - ${c*c} = ${(a+b)*(a+b) - c*c}$.` })
      ];
      return pick(variantes)();
    }
  },

  pri_complexe: (d) => {
    if (d === 1) {
      // Facile : a + b × c
      const a = rand(2, 9);
      const b = rand(2, 6);
      const c = rand(2, 6);
      return {
        enonce: `Calculer $${a} + ${b} \\times ${c}$.`,
        corrige: `On effectue d'abord la multiplication : $${a} + ${b} \\times ${c} = ${a} + ${b*c} = ${a + b*c}$.`
      };
    } else if (d === 2) {
      // Moyen : a × b + c × d ou a × (b + c) - d
      const a = rand(2, 9);
      const b = rand(2, 7);
      const c = rand(2, 9);
      const da = rand(2, 6);
      const variantes = [
        () => ({ enonce: `Calculer $${a} \\times ${b} + ${c} \\times ${da}$.`,
                 corrige: `$${a} \\times ${b} + ${c} \\times ${da} = ${a*b} + ${c*da} = ${a*b + c*da}$.` }),
        () => ({ enonce: `Calculer $${a} \\times (${b} + ${c}) - ${da}$.`,
                 corrige: `$${a} \\times (${b} + ${c}) - ${da} = ${a} \\times ${b+c} - ${da} = ${a*(b+c)} - ${da} = ${a*(b+c) - da}$.` })
      ];
      return pick(variantes)();
    } else {
      // Difficile : combinaisons avec puissances et parenthèses
      const a = rand(2, 7);
      const b = rand(2, 9);
      let c = rand(2, 6);
      let da = rand(2, 5);
      if (c <= da) c = da + rand(1, 3); // S'assurer que c - da > 0 pour ne pas avoir de bugs d'affichage
      const variantes = [
        () => ({ enonce: `Calculer $${a}^2 + ${b} \\times (${c} - ${da})$.`,
                 corrige: `$${a}^2 + ${b} \\times (${c} - ${da}) = ${a*a} + ${b} \\times ${c-da} = ${a*a} + ${b*(c-da)} = ${a*a + b*(c-da)}$.` }),
        () => ({ enonce: `Calculer $(${a} + ${b}) \\times ${c} - ${da}^2$.`,
                 corrige: `$(${a} + ${b}) \\times ${c} - ${da}^2 = ${a+b} \\times ${c} - ${da*da} = ${(a+b)*c} - ${da*da} = ${(a+b)*c - da*da}$.` })
      ];
      return pick(variantes)();
    }
  },

  fs_add_mm: (d) => {
    let den, a, b;
    if (d === 1) { den = pick([3, 4, 5, 6, 8]); a = rand(1, den-1); b = rand(1, den-1); }
    else if (d === 2) { den = pick([5, 6, 7, 8, 9, 10, 12]); a = rand(1, den+2); b = rand(1, den+2); }
    else { den = pick([7, 9, 11, 12, 15]); a = rand(2, 2*den); b = rand(2, 2*den); }
    const num = a + b;
    // Simplification
    function pgcd(x,y){x=Math.abs(x);y=Math.abs(y);while(y){[x,y]=[y,x%y];}return x;}
    const g = pgcd(num, den);
    let corrigeFin = '';
    if (g > 1) {
      corrigeFin = ` = \\dfrac{${num/g}}{${den/g}}`;
    }
    return {
      enonce: `Calculer $\\dfrac{${a}}{${den}} + \\dfrac{${b}}{${den}}$.`,
      corrige: `On garde le dénominateur et on ajoute les numérateurs : $\\dfrac{${a}}{${den}} + \\dfrac{${b}}{${den}} = \\dfrac{${num}}{${den}}${corrigeFin}$.`
    };
  },

  fs_add_diff: (d) => {
    // On choisit deux dénominateurs où l'un divise l'autre, pour faciliter
    let den1, den2;
    if (d === 1) { const pairs = [[2,4],[2,6],[2,8],[3,6],[3,9],[4,8],[5,10]]; [den1, den2] = pick(pairs); }
    else if (d === 2) { const pairs = [[2,4],[2,6],[3,6],[4,8],[5,10],[3,12],[4,12],[6,12]]; [den1, den2] = pick(pairs); }
    else { const pairs = [[3,4],[2,5],[3,5],[4,5],[3,7],[2,7],[5,6]]; [den1, den2] = pick(pairs); }
    const a = rand(1, den1-1);
    const b = rand(1, den2-1);
    function pgcd(x,y){x=Math.abs(x);y=Math.abs(y);while(y){[x,y]=[y,x%y];}return x;}
    const denCom = den1 * den2 / pgcd(den1, den2);
    const aN = a * denCom / den1;
    const bN = b * denCom / den2;
    const num = aN + bN;
    const g = pgcd(num, denCom);
    let etape3 = '';
    if (g > 1) {
      etape3 = ` = \\dfrac{${num/g}}{${denCom/g}}`;
    }
    return {
      enonce: `Calculer $\\dfrac{${a}}{${den1}} + \\dfrac{${b}}{${den2}}$.`,
      corrige: `On met au même dénominateur ($${denCom}$) : $\\dfrac{${a}}{${den1}} + \\dfrac{${b}}{${den2}} = \\dfrac{${aN}}{${denCom}} + \\dfrac{${bN}}{${denCom}} = \\dfrac{${num}}{${denCom}}${etape3}$.`
    };
  },

  fs_mult: (d) => {
    let a, b, c, e;
    if (d === 1) { a = rand(1, 5); b = pick([2,3,4,5]); c = rand(1, 5); e = pick([2,3,4,5]); }
    else if (d === 2) { a = rand(1, 9); b = pick([3,4,5,6,7,8]); c = rand(1, 9); e = pick([3,4,5,6,7,8]); }
    else { a = rand(2, 12); b = pick([5,6,7,8,9,11]); c = rand(2, 12); e = pick([5,6,7,8,9,11]); }
    const num = a * c;
    const den = b * e;
    function pgcd(x,y){x=Math.abs(x);y=Math.abs(y);while(y){[x,y]=[y,x%y];}return x;}
    const g = pgcd(num, den);
    let etape2 = '';
    if (g > 1) {
      etape2 = ` = \\dfrac{${num/g}}{${den/g}}`;
    }
    return {
      enonce: `Calculer $\\dfrac{${a}}{${b}} \\times \\dfrac{${c}}{${e}}$.`,
      corrige: `On multiplie les numérateurs entre eux et les dénominateurs entre eux : $\\dfrac{${a}}{${b}} \\times \\dfrac{${c}}{${e}} = \\dfrac{${num}}{${den}}${etape2}$.`
    };
  },

  fs_simpl: (d) => {
    function pgcd(x,y){x=Math.abs(x);y=Math.abs(y);while(y){[x,y]=[y,x%y];}return x;}
    let num, den;
    if (d === 1) {
      // PGCD petit (2, 3, 4, 5)
      const g = pick([2, 3, 4, 5]);
      num = g * rand(2, 7);
      den = g * rand(2, 7);
      while (num === den) den = g * rand(2, 7);
    } else if (d === 2) {
      const g = pick([3, 4, 5, 6, 7, 8]);
      num = g * rand(2, 9);
      den = g * rand(2, 9);
      while (num === den) den = g * rand(2, 9);
    } else {
      // Difficile : PGCD plus grand
      const g = pick([6, 8, 9, 12, 14, 15]);
      num = g * rand(2, 9);
      den = g * rand(2, 9);
      while (num === den) den = g * rand(2, 9);
    }
    const g = pgcd(num, den);
    return {
      enonce: `Simplifier la fraction $\\dfrac{${num}}{${den}}$.`,
      corrige: `Le PGCD de $${num}$ et $${den}$ est $${g}$. On divise par $${g}$ : $\\dfrac{${num}}{${den}} = \\dfrac{${num/g}}{${den/g}}$.`
    };
  },

  fs_dnb: (d) => {
    let num, den, n;
    if (d === 1) {
      // Le résultat tombe juste, fractions simples
      den = pick([2, 3, 4, 5]);
      num = rand(1, den-1);
      n = den * rand(2, 10);
    } else if (d === 2) {
      den = pick([3, 4, 5, 6, 8, 10]);
      num = rand(1, den-1);
      n = den * rand(2, 15);
    } else {
      den = pick([5, 6, 7, 8, 9, 12]);
      num = rand(1, den-1);
      n = den * rand(2, 20);
    }
    const r = num * n / den;
    return {
      enonce: `Calculer $\\dfrac{${num}}{${den}}$ de $${n}$.`,
      corrige: `$\\dfrac{${num}}{${den}} \\times ${n} = \\dfrac{${num} \\times ${n}}{${den}} = \\dfrac{${num*n}}{${den}} = ${r}$.`
    };
  },

  esc_vers: (d) => {
    let n, mantisse, exp;
    if (d === 1) {
      // Facile : nombres simples, exp positif petit
      mantisse = (rand(10, 99) / 10).toFixed(1); // 1.0 à 9.9
      exp = pick([2, 3, 4]);
      n = parseFloat(mantisse) * Math.pow(10, exp);
      // Affichage : nombre entier ou décimal simple
    } else if (d === 2) {
      // Moyen : exp positif ou négatif
      mantisse = (rand(10, 99) / 10).toFixed(1);
      exp = pick([-3, -2, 2, 3, 4, 5]);
      n = parseFloat(mantisse) * Math.pow(10, exp);
    } else {
      // Difficile : grands ou très petits
      mantisse = (rand(100, 999) / 100).toFixed(2);
      exp = pick([-5, -4, -3, 5, 6, 7]);
      n = parseFloat(mantisse) * Math.pow(10, exp);
    }
    // Affichage du nombre n sans notation scientifique
    let nAff;
    if (exp >= 0) {
      nAff = n.toLocaleString('fr-FR', { maximumFractionDigits: 6, useGrouping: false });
    } else {
      nAff = n.toFixed(Math.abs(exp) + 2).replace(/0+$/, '').replace(/\.$/, '');
    }
    return {
      enonce: `Écrire le nombre $${nAff}$ en notation scientifique.`,
      corrige: `$${nAff} = ${mantisse} \\times 10^{${exp}}$.`
    };
  },

  esc_de: (d) => {
    let mantisse, exp;
    if (d === 1) {
      mantisse = (rand(10, 99) / 10).toFixed(1);
      exp = pick([2, 3, 4]);
    } else if (d === 2) {
      mantisse = (rand(10, 99) / 10).toFixed(1);
      exp = pick([-3, -2, 2, 3, 4]);
    } else {
      mantisse = (rand(100, 999) / 100).toFixed(2);
      exp = pick([-5, -4, 5, 6]);
    }
    const n = parseFloat(mantisse) * Math.pow(10, exp);
    let nAff;
    if (exp >= 0) {
      nAff = n.toLocaleString('fr-FR', { maximumFractionDigits: 6, useGrouping: false });
    } else {
      nAff = n.toFixed(Math.abs(exp) + 2).replace(/0+$/, '').replace(/\.$/, '');
    }
    return {
      enonce: `Écrire $${mantisse} \\times 10^{${exp}}$ en notation décimale usuelle.`,
      corrige: `$${mantisse} \\times 10^{${exp}} = ${nAff}$.`
    };
  },

  esc_ordre: (d) => {
    // On veut un nombre dont l'ordre de grandeur (puissance de 10) est repérable
    let mantisse, exp;
    if (d === 1) {
      mantisse = rand(2, 8);
      exp = pick([2, 3]);
    } else if (d === 2) {
      mantisse = (rand(15, 85) / 10).toFixed(1);
      exp = pick([-2, 2, 3, 4]);
    } else {
      mantisse = (rand(15, 85) / 10).toFixed(1);
      exp = pick([-4, -3, 4, 5, 6]);
    }
    const mNum = parseFloat(mantisse);
    // L'ordre de grandeur est 10^exp si mantisse < 5, sinon 10^(exp+1)
    const ordre = mNum < 5 ? exp : exp + 1;
    const n = mNum * Math.pow(10, exp);
    let nAff;
    if (exp >= 0) {
      nAff = n.toLocaleString('fr-FR', { maximumFractionDigits: 6, useGrouping: false });
    } else {
      nAff = n.toFixed(Math.abs(exp) + 2).replace(/0+$/, '').replace(/\.$/, '');
    }
    return {
      enonce: `Donner l'ordre de grandeur du nombre $${nAff}$.`,
      corrige: `$${nAff} \\approx ${mNum < 5 ? '1' : '1'} \\times 10^{${ordre}}$, donc son ordre de grandeur est $10^{${ordre}}$.`
    };
  },

  pr_pct: (d) => {
    let pct, n;
    if (d === 1) {
      pct = pick([10, 25, 50]);
      // n choisi pour que le résultat tombe juste
      if (pct === 10) n = 10 * rand(2, 20);
      else if (pct === 25) n = 4 * rand(5, 25);
      else n = 2 * rand(10, 50);
    } else if (d === 2) {
      pct = pick([10, 20, 25, 50, 75]);
      if (pct === 10) n = 10 * rand(3, 30);
      else if (pct === 20) n = 5 * rand(4, 30);
      else if (pct === 25) n = 4 * rand(5, 30);
      else if (pct === 50) n = 2 * rand(15, 80);
      else n = 4 * rand(8, 40);
    } else {
      pct = pick([5, 15, 30, 40, 60, 80]);
      n = 100 * rand(2, 15);  // pour que les calculs tombent juste
    }
    const r = pct * n / 100;
    return {
      enonce: `Calculer $${pct}\\,\\%$ de $${n}$.`,
      corrige: `$${pct}\\,\\%$ de $${n}$, c'est $\\dfrac{${pct}}{100} \\times ${n} = ${r}$.`
    };
  },

  pr_ech: (d) => {
    if (d === 1) {
      const ech = pick([100, 200, 500]);
      const reelleCm = ech * rand(2, 8);
      const surPlanCm = reelleCm / ech;
      return {
        enonce: `Une carte est à l'échelle $\\dfrac{1}{${ech}}$. Une distance réelle de $${reelleCm}$ cm représente combien sur le plan ?`,
        corrige: `Distance sur plan $= \\dfrac{${reelleCm}}{${ech}} = ${surPlanCm}$ cm.`
      };
    } else if (d === 2) {
      const ech = pick([100, 200, 500, 1000]);
      const surPlanCm = rand(3, 12);
      const reelleCm = surPlanCm * ech;
      const reelleM = reelleCm / 100;
      return {
        enonce: `Sur un plan à l'échelle $\\dfrac{1}{${ech}}$, deux points sont distants de $${surPlanCm}$ cm. Quelle est la distance réelle en mètres ?`,
        corrige: `Distance réelle $= ${surPlanCm} \\times ${ech} = ${reelleCm}$ cm $= ${reelleM}$ m.`
      };
    } else {
      const ech = pick([50000, 100000, 250000]);
      const surCarteCm = rand(2, 15);
      const reelleCm = surCarteCm * ech;
      const reelleKm = reelleCm / 100000;
      return {
        enonce: `Sur une carte à l'échelle $\\dfrac{1}{${ech.toLocaleString('fr-FR').replace(/\u202f/g, '\\,')}}$, deux villes sont distantes de $${surCarteCm}$ cm. Quelle est la distance réelle en km ?`,
        corrige: `Distance réelle $= ${surCarteCm} \\times ${ech} = ${reelleCm}$ cm $= ${reelleKm}$ km.`
      };
    }
  },

  pr_vit: (d) => {
    if (d === 1) {
      // Trouver d connaissant v et t
      const v = pick([20, 30, 40, 50, 60, 80]);
      const t = rand(2, 5);
      const di = v * t;
      return {
        enonce: `Une voiture roule à $${v}$ km/h pendant $${t}$ h. Quelle distance parcourt-elle ?`,
        corrige: `$d = v \\times t = ${v} \\times ${t} = ${di}$ km.`
      };
    } else if (d === 2) {
      // Trouver v connaissant d et t, ou trouver t connaissant d et v
      const variantes = [
        () => {
          const v = pick([40, 50, 60, 80, 100]);
          const t = rand(2, 6);
          const di = v * t;
          return {
            enonce: `Une voiture parcourt $${di}$ km en $${t}$ h. Quelle est sa vitesse moyenne ?`,
            corrige: `$v = \\dfrac{d}{t} = \\dfrac{${di}}{${t}} = ${v}$ km/h.`
          };
        },
        () => {
          const v = pick([40, 50, 60, 80, 100]);
          const t = rand(2, 6);
          const di = v * t;
          return {
            enonce: `Une voiture parcourt $${di}$ km à la vitesse moyenne de $${v}$ km/h. Combien de temps met-elle ?`,
            corrige: `$t = \\dfrac{d}{v} = \\dfrac{${di}}{${v}} = ${t}$ h.`
          };
        }
      ];
      return pick(variantes)();
    } else {
      // Difficile : avec minutes/secondes
      const variantes = [
        () => {
          const v = pick([60, 90, 120]);
          const tMin = rand(15, 45);
          const di = v * tMin / 60;
          return {
            enonce: `Un train roule à $${v}$ km/h pendant $${tMin}$ min. Quelle distance parcourt-il ?`,
            corrige: `$${tMin}$ min $= \\dfrac{${tMin}}{60}$ h. $d = ${v} \\times \\dfrac{${tMin}}{60} = ${di}$ km.`
          };
        },
        () => {
          // Vitesse en m/s vers km/h
          const vms = pick([5, 10, 15, 20, 25]);
          const vkmh = vms * 3.6;
          return {
            enonce: `Une vitesse de $${vms}$ m/s vaut combien en km/h ?`,
            corrige: `$1$ m/s $= 3{,}6$ km/h. Donc $${vms}$ m/s $= ${vms} \\times 3{,}6 = ${vkmh}$ km/h.`
          };
        }
      ];
      return pick(variantes)();
    }
  },

  lt_tab: (d) => {
    if (d === 1) {
      // Tableau à 2 colonnes - chercher la valeur manquante
      const total = rand(20, 50);
      const cat = ['Bleu', 'Rouge', 'Vert', 'Jaune'];
      const valeurs = [rand(3, 15), rand(3, 15), rand(3, 15)];
      const s = valeurs.reduce((a,b)=>a+b, 0);
      const dernier = total - s;
      if (dernier < 1) return generateurs.lt_tab(d); // sécurité
      const tab = `<table style="border-collapse: collapse; margin: 8px 0; font-family: 'Crimson Pro', serif;">
        <tr><th style="border: 1px solid #1e3a5f; padding: 4px 10px; background: #f5efe4;">Couleur</th>
            <th style="border: 1px solid #1e3a5f; padding: 4px 10px;">${cat[0]}</th>
            <th style="border: 1px solid #1e3a5f; padding: 4px 10px;">${cat[1]}</th>
            <th style="border: 1px solid #1e3a5f; padding: 4px 10px;">${cat[2]}</th>
            <th style="border: 1px solid #1e3a5f; padding: 4px 10px;">${cat[3]}</th></tr>
        <tr><th style="border: 1px solid #1e3a5f; padding: 4px 10px; background: #f5efe4;">Nombre</th>
            <td style="border: 1px solid #1e3a5f; padding: 4px 10px; text-align: center;">${valeurs[0]}</td>
            <td style="border: 1px solid #1e3a5f; padding: 4px 10px; text-align: center;">${valeurs[1]}</td>
            <td style="border: 1px solid #1e3a5f; padding: 4px 10px; text-align: center;">${valeurs[2]}</td>
            <td style="border: 1px solid #1e3a5f; padding: 4px 10px; text-align: center;">?</td></tr>
      </table>`;
      return {
        enonce: `Le tableau suivant comptabilise les couleurs préférées de $${total}$ élèves. Combien d'élèves préfèrent le ${cat[3].toLowerCase()} ?<br>${tab}`,
        corrige: `Total moins les autres : $${total} - ${valeurs[0]} - ${valeurs[1]} - ${valeurs[2]} = ${dernier}$ élèves préfèrent le ${cat[3].toLowerCase()}.`
      };
    } else if (d === 2) {
      // Tableau avec un total à calculer
      const v1 = rand(15, 50);
      const v2 = rand(15, 50);
      const v3 = rand(15, 50);
      const v4 = rand(15, 50);
      const tot = v1 + v2 + v3 + v4;
      const tab = `<table style="border-collapse: collapse; margin: 8px 0; font-family: 'Crimson Pro', serif;">
        <tr><th style="border: 1px solid #1e3a5f; padding: 4px 10px; background: #f5efe4;">Mois</th>
            <th style="border: 1px solid #1e3a5f; padding: 4px 10px;">Jan</th>
            <th style="border: 1px solid #1e3a5f; padding: 4px 10px;">Fév</th>
            <th style="border: 1px solid #1e3a5f; padding: 4px 10px;">Mar</th>
            <th style="border: 1px solid #1e3a5f; padding: 4px 10px;">Avr</th></tr>
        <tr><th style="border: 1px solid #1e3a5f; padding: 4px 10px; background: #f5efe4;">Ventes</th>
            <td style="border: 1px solid #1e3a5f; padding: 4px 10px; text-align: center;">${v1}</td>
            <td style="border: 1px solid #1e3a5f; padding: 4px 10px; text-align: center;">${v2}</td>
            <td style="border: 1px solid #1e3a5f; padding: 4px 10px; text-align: center;">${v3}</td>
            <td style="border: 1px solid #1e3a5f; padding: 4px 10px; text-align: center;">${v4}</td></tr>
      </table>`;
      return {
        enonce: `Le tableau donne les ventes mensuelles d'un magasin. Quel est le total des ventes sur ces 4 mois ?<br>${tab}`,
        corrige: `$${v1} + ${v2} + ${v3} + ${v4} = ${tot}$. Total : $${tot}$ ventes.`
      };
    } else {
      // Difficile : pourcentage ou moyenne dans un tableau
      const v1 = 10 * rand(2, 8);
      const v2 = 10 * rand(2, 8);
      const v3 = 10 * rand(2, 8);
      const v4 = 10 * rand(2, 8);
      const tot = v1 + v2 + v3 + v4;
      const moy = tot / 4;
      const tab = `<table style="border-collapse: collapse; margin: 8px 0; font-family: 'Crimson Pro', serif;">
        <tr><th style="border: 1px solid #1e3a5f; padding: 4px 10px; background: #f5efe4;">Trimestre</th>
            <th style="border: 1px solid #1e3a5f; padding: 4px 10px;">T₁</th>
            <th style="border: 1px solid #1e3a5f; padding: 4px 10px;">T₂</th>
            <th style="border: 1px solid #1e3a5f; padding: 4px 10px;">T₃</th>
            <th style="border: 1px solid #1e3a5f; padding: 4px 10px;">T₄</th></tr>
        <tr><th style="border: 1px solid #1e3a5f; padding: 4px 10px; background: #f5efe4;">CA (k€)</th>
            <td style="border: 1px solid #1e3a5f; padding: 4px 10px; text-align: center;">${v1}</td>
            <td style="border: 1px solid #1e3a5f; padding: 4px 10px; text-align: center;">${v2}</td>
            <td style="border: 1px solid #1e3a5f; padding: 4px 10px; text-align: center;">${v3}</td>
            <td style="border: 1px solid #1e3a5f; padding: 4px 10px; text-align: center;">${v4}</td></tr>
      </table>`;
      return {
        enonce: `Voici les chiffres d'affaires trimestriels d'une entreprise. Calculer le chiffre d'affaires moyen par trimestre.<br>${tab}`,
        corrige: `Total : $${v1} + ${v2} + ${v3} + ${v4} = ${tot}$ k€. Moyenne : $\\dfrac{${tot}}{4} = ${moy}$ k€.`
      };
    }
  },

  lt_circ: (d) => {
    if (d === 1) {
      // Facile : lire un pourcentage simple sur un diagramme circulaire
      const variantes = [
        { donnees: [{label: 'Filles', valeur: 60}, {label: 'Garçons', valeur: 40}], q: "Filles", r: 60 },
        { donnees: [{label: 'A', valeur: 25}, {label: 'B', valeur: 50}, {label: 'C', valeur: 25}], q: "B", r: 50 },
        { donnees: [{label: 'Oui', valeur: 75}, {label: 'Non', valeur: 25}], q: "Oui", r: 75 },
        { donnees: [{label: 'P', valeur: 30}, {label: 'Q', valeur: 30}, {label: 'R', valeur: 40}], q: "R", r: 40 }
      ];
      const v = pick(variantes);
      const svg = tracerDiagrammeCirculaire(v.donnees);
      return {
        enonce: `Le diagramme circulaire ci-contre représente la répartition d'un groupe de 200 personnes. Combien représente la catégorie « ${v.q} » ?`,
        svg: svg,
        corrige: `La catégorie « ${v.q} » représente ${v.r} % de 200, soit $\\dfrac{${v.r}}{100} \\times 200 = ${v.r * 2}$ personnes.`
      };
    } else if (d === 2) {
      // Moyen : retrouver l'angle ou la valeur à partir des pourcentages
      const total = pick([180, 360, 240]);
      const variantes = [
        { donnees: [{label: 'A', valeur: 50}, {label: 'B', valeur: 30}, {label: 'C', valeur: 20}], q: "B", pct: 30 },
        { donnees: [{label: 'Foot', valeur: 40}, {label: 'Tennis', valeur: 25}, {label: 'Natation', valeur: 35}], q: "Tennis", pct: 25 },
        { donnees: [{label: 'X', valeur: 45}, {label: 'Y', valeur: 35}, {label: 'Z', valeur: 20}], q: "X", pct: 45 }
      ];
      const v = pick(variantes);
      const r = (v.pct / 100) * total;
      const svg = tracerDiagrammeCirculaire(v.donnees);
      return {
        enonce: `Le diagramme circulaire ci-contre représente la répartition d'un groupe de ${total} personnes. Combien de personnes représente la catégorie « ${v.q} » ?`,
        svg: svg,
        corrige: `« ${v.q} » représente ${v.pct} % du total, soit $\\dfrac{${v.pct}}{100} \\times ${total} = ${r}$ personnes.`
      };
    } else {
      // Difficile : déterminer l'angle correspondant à un effectif
      const total = pick([200, 250, 500]);
      const variantes = [
        { donnees: [{label: 'A', valeur: 40}, {label: 'B', valeur: 35}, {label: 'C', valeur: 25}], q: "A", pct: 40 },
        { donnees: [{label: 'Oui', valeur: 65}, {label: 'Non', valeur: 35}], q: "Non", pct: 35 },
        { donnees: [{label: 'P', valeur: 50}, {label: 'Q', valeur: 30}, {label: 'R', valeur: 20}], q: "P", pct: 50 }
      ];
      const v = pick(variantes);
      const nb = (v.pct / 100) * total;
      const angle = (v.pct / 100) * 360;
      const svg = tracerDiagrammeCirculaire(v.donnees);
      return {
        enonce: `Le diagramme circulaire ci-contre représente la répartition d'un groupe de ${total} personnes. Quel angle correspond à la catégorie « ${v.q} » et combien de personnes représente-t-elle ?`,
        svg: svg,
        corrige: `« ${v.q} » représente ${v.pct} % du total. Angle : $\\dfrac{${v.pct}}{100} \\times 360 = ${angle}°$. Effectif : $\\dfrac{${v.pct}}{100} \\times ${total} = ${nb}$ personnes.`
      };
    }
  },

  lt_bar: (d) => {
    if (d === 1) {
      // Facile : lire la valeur d'une barre (valeurs multiples de 2 ou 5 → graduations propres)
      const variantes = [
        { donnees: [{label: 'Lun', valeur: 4}, {label: 'Mar', valeur: 8}, {label: 'Mer', valeur: 6}, {label: 'Jeu', valeur: 10}, {label: 'Ven', valeur: 2}], q: "mardi", r: 8 },
        { donnees: [{label: 'A', valeur: 10}, {label: 'B', valeur: 15}, {label: 'C', valeur: 5}, {label: 'D', valeur: 20}], q: "B", r: 15 },
        { donnees: [{label: '6e', valeur: 20}, {label: '5e', valeur: 25}, {label: '4e', valeur: 15}, {label: '3e', valeur: 10}], q: "5e", r: 25 },
        { donnees: [{label: 'X', valeur: 6}, {label: 'Y', valeur: 4}, {label: 'Z', valeur: 8}, {label: 'W', valeur: 10}], q: "Z", r: 8 }
      ];
      const v = pick(variantes);
      const svg = tracerDiagrammeBarres(v.donnees);
      return {
        enonce: `Lire sur le diagramme ci-contre la valeur correspondant à « ${v.q} ».`,
        svg: svg,
        corrige: `La barre « ${v.q} » atteint la valeur $${v.r}$.`
      };
    } else if (d === 2) {
      // Moyen : calculer le total (valeurs multiples de 2 ou 5)
      const variantes = [
        { donnees: [{label: 'A', valeur: 10}, {label: 'B', valeur: 15}, {label: 'C', valeur: 5}, {label: 'D', valeur: 20}] },
        { donnees: [{label: 'Lun', valeur: 10}, {label: 'Mar', valeur: 15}, {label: 'Mer', valeur: 5}, {label: 'Jeu', valeur: 20}, {label: 'Ven', valeur: 10}] },
        { donnees: [{label: 'P', valeur: 6}, {label: 'Q', valeur: 8}, {label: 'R', valeur: 4}, {label: 'S', valeur: 10}] },
        { donnees: [{label: 'A', valeur: 4}, {label: 'B', valeur: 6}, {label: 'C', valeur: 8}, {label: 'D', valeur: 2}] }
      ];
      const v = pick(variantes);
      const total = v.donnees.reduce((s, d) => s + d.valeur, 0);
      const svg = tracerDiagrammeBarres(v.donnees);
      return {
        enonce: `Calculer le total représenté par le diagramme en barres ci-contre.`,
        svg: svg,
        corrige: `Total : $${v.donnees.map(d => d.valeur).join(' + ')} = ${total}$.`
      };
    } else {
      // Difficile : trouver la proportion d'une catégorie (valeurs en pourcentages multiples de 10)
      const variantes = [
        { donnees: [{label: 'A', valeur: 20}, {label: 'B', valeur: 30}, {label: 'C', valeur: 50}], q: 'C', pct: 50 },
        { donnees: [{label: 'A', valeur: 10}, {label: 'B', valeur: 40}, {label: 'C', valeur: 50}], q: 'B', pct: 40 },
        { donnees: [{label: 'P', valeur: 30}, {label: 'Q', valeur: 60}, {label: 'R', valeur: 10}], q: 'Q', pct: 60 }
      ];
      const v = pick(variantes);
      const svg = tracerDiagrammeBarres(v.donnees);
      return {
        enonce: `Sur le diagramme en barres ci-contre, on a représenté la répartition de 100 élèves. Quelle proportion (en pourcentage) représente la catégorie « ${v.q} » ?`,
        svg: svg,
        corrige: `« ${v.q} » représente $\\dfrac{${v.pct}}{100} \\times 100 = ${v.pct}\\%$ du total.`
      };
    }
  },

  gr_perim: (d) => {
    if (d === 1) {
      // Carré ou rectangle simple
      const variantes = [
        () => { const c = rand(2, 15); return { enonce: `Calculer le périmètre d'un carré de côté $${c}$ cm.`, corrige: `$P = 4 \\times c = 4 \\times ${c} = ${4*c}$ cm.` }; },
        () => { const L = rand(3, 15); const l = rand(2, L-1); return { enonce: `Calculer le périmètre d'un rectangle de longueur $${L}$ cm et de largeur $${l}$ cm.`, corrige: `$P = 2 \\times (L + l) = 2 \\times (${L} + ${l}) = 2 \\times ${L+l} = ${2*(L+l)}$ cm.` }; }
      ];
      return pick(variantes)();
    } else if (d === 2) {
      const variantes = [
        () => { const c = rand(2, 20); return { enonce: `Calculer le périmètre d'un triangle équilatéral de côté $${c}$ cm.`, corrige: `$P = 3 \\times c = 3 \\times ${c} = ${3*c}$ cm.` }; },
        () => { const r = rand(2, 15); return { enonce: `Calculer le périmètre d'un cercle de rayon $${r}$ cm (donner la valeur exacte en fonction de $\\pi$).`, corrige: `$P = 2 \\pi r = 2 \\pi \\times ${r} = ${2*r}\\pi$ cm.` }; },
        () => { const a = rand(3, 10); const b = rand(3, 10); const c = rand(3, 10); return { enonce: `Calculer le périmètre d'un triangle de côtés $${a}$ cm, $${b}$ cm et $${c}$ cm.`, corrige: `$P = ${a} + ${b} + ${c} = ${a+b+c}$ cm.` }; }
      ];
      return pick(variantes)();
    } else {
      const variantes = [
        () => { const r = rand(3, 20); return { enonce: `Calculer le périmètre d'un cercle de diamètre $${2*r}$ cm. Donner la valeur arrondie au dixième (prendre $\\pi \\approx 3{,}14$).`, corrige: `$P = \\pi \\times d = 3{,}14 \\times ${2*r} \\approx ${(3.14*2*r).toFixed(1)}$ cm.` }; },
        () => { const L = rand(5, 20); const l = rand(3, L-2); return { enonce: `Le périmètre d'un rectangle est $${2*(L+l)}$ cm. Sa longueur est $${L}$ cm. Quelle est sa largeur ?`, corrige: `$P = 2(L+l)$ donc $L+l = \\dfrac{${2*(L+l)}}{2} = ${L+l}$. Largeur $= ${L+l} - ${L} = ${l}$ cm.` }; }
      ];
      return pick(variantes)();
    }
  },

  gr_aire: (d) => {
    if (d === 1) {
      const variantes = [
        () => { const c = rand(2, 15); return { enonce: `Calculer l'aire d'un carré de côté $${c}$ cm.`, corrige: `$A = c^2 = ${c}^2 = ${c*c}$ cm².` }; },
        () => { const L = rand(3, 15); const l = rand(2, L-1); return { enonce: `Calculer l'aire d'un rectangle de longueur $${L}$ cm et largeur $${l}$ cm.`, corrige: `$A = L \\times l = ${L} \\times ${l} = ${L*l}$ cm².` }; }
      ];
      return pick(variantes)();
    } else if (d === 2) {
      const variantes = [
        () => { const b = 2 * rand(2, 12); const h = rand(3, 15); return { enonce: `Calculer l'aire d'un triangle de base $${b}$ cm et de hauteur $${h}$ cm.`, corrige: `$A = \\dfrac{b \\times h}{2} = \\dfrac{${b} \\times ${h}}{2} = \\dfrac{${b*h}}{2} = ${b*h/2}$ cm².` }; },
        () => { const r = rand(2, 12); return { enonce: `Calculer l'aire d'un disque de rayon $${r}$ cm (valeur exacte en fonction de $\\pi$).`, corrige: `$A = \\pi r^2 = \\pi \\times ${r}^2 = ${r*r}\\pi$ cm².` }; },
        () => { const b = rand(3, 12); const B = rand(b+2, b+10); const h = rand(2, 8); return { enonce: `Calculer l'aire d'un trapèze de petite base $${b}$ cm, grande base $${B}$ cm et hauteur $${h}$ cm.`, corrige: `$A = \\dfrac{(B + b) \\times h}{2} = \\dfrac{(${B} + ${b}) \\times ${h}}{2} = \\dfrac{${(B+b)*h}}{2} = ${(B+b)*h/2}$ cm².` }; }
      ];
      return pick(variantes)();
    } else {
      const variantes = [
        () => { const r = rand(3, 10); return { enonce: `Calculer l'aire d'un disque de diamètre $${2*r}$ cm. Donner la valeur arrondie au dixième (prendre $\\pi \\approx 3{,}14$).`, corrige: `Le rayon vaut $${r}$ cm. $A = \\pi r^2 = 3{,}14 \\times ${r*r} \\approx ${(3.14*r*r).toFixed(1)}$ cm².` }; },
        () => { const L = rand(5, 20); const aire = L * rand(2, L-1); return { enonce: `Un rectangle a une aire de $${aire}$ cm² et une longueur de $${L}$ cm. Quelle est sa largeur ?`, corrige: `$l = \\dfrac{A}{L} = \\dfrac{${aire}}{${L}} = ${aire/L}$ cm.` }; }
      ];
      return pick(variantes)();
    }
  },

  gr_vol: (d) => {
    if (d === 1) {
      const variantes = [
        () => { const c = rand(2, 8); return { enonce: `Calculer le volume d'un cube d'arête $${c}$ cm.`, corrige: `$V = c^3 = ${c}^3 = ${c*c*c}$ cm³.` }; },
        () => { const L = rand(2, 10); const l = rand(2, 10); const h = rand(2, 10); return { enonce: `Calculer le volume d'un pavé droit de dimensions $${L}$ cm, $${l}$ cm et $${h}$ cm.`, corrige: `$V = L \\times l \\times h = ${L} \\times ${l} \\times ${h} = ${L*l*h}$ cm³.` }; }
      ];
      return pick(variantes)();
    } else if (d === 2) {
      const variantes = [
        () => { const r = rand(2, 8); const h = rand(3, 12); return { enonce: `Calculer le volume d'un cylindre de rayon $${r}$ cm et hauteur $${h}$ cm (valeur exacte en fonction de $\\pi$).`, corrige: `$V = \\pi r^2 h = \\pi \\times ${r}^2 \\times ${h} = ${r*r*h}\\pi$ cm³.` }; },
        () => { const c = rand(3, 10); return { enonce: `Un cube a une arête de $${c}$ dm. Quel est son volume en litres ?`, corrige: `$V = ${c}^3 = ${c*c*c}$ dm³ $= ${c*c*c}$ L.` }; }
      ];
      return pick(variantes)();
    } else {
      const variantes = [
        () => { const r = rand(2, 8); return { enonce: `Calculer le volume d'une boule de rayon $${r}$ cm (valeur exacte en fonction de $\\pi$).`, corrige: `$V = \\dfrac{4}{3} \\pi r^3 = \\dfrac{4}{3} \\pi \\times ${r}^3 = \\dfrac{${4*r*r*r}\\pi}{3}$ cm³.` }; },
        () => { const r = rand(2, 6); const h = rand(3, 10); return { enonce: `Calculer le volume d'un cône de rayon $${r}$ cm et hauteur $${h}$ cm (valeur exacte en fonction de $\\pi$).`, corrige: `$V = \\dfrac{1}{3} \\pi r^2 h = \\dfrac{\\pi \\times ${r}^2 \\times ${h}}{3} = \\dfrac{${r*r*h}\\pi}{3}$ cm³.` }; }
      ];
      return pick(variantes)();
    }
  },

  gr_pyth: (d) => {
    // Triplets pythagoriciens pour avoir des résultats entiers
    const triplets = [[3,4,5], [5,12,13], [6,8,10], [8,15,17], [9,12,15], [9,40,41], [12,16,20], [7,24,25]];
    if (d === 1) {
      // Triplets simples, on demande l'hypoténuse
      const [a, b, c] = pick([[3,4,5], [6,8,10], [5,12,13]]);
      return {
        enonce: `Le triangle $ABC$ est rectangle en $A$. On a $AB = ${a}$ cm et $AC = ${b}$ cm. Calculer $BC$.`,
        corrige: `D'après Pythagore : $BC^2 = AB^2 + AC^2 = ${a}^2 + ${b}^2 = ${a*a} + ${b*b} = ${a*a + b*b}$. Donc $BC = \\sqrt{${a*a+b*b}} = ${c}$ cm.`
      };
    } else if (d === 2) {
      // Mélange : hypoténuse ou côté
      const [a, b, c] = pick(triplets);
      const variantes = [
        () => ({ enonce: `Le triangle $ABC$ est rectangle en $A$ avec $AB = ${a}$ cm et $AC = ${b}$ cm. Calculer $BC$.`,
                 corrige: `$BC^2 = ${a}^2 + ${b}^2 = ${a*a + b*b}$. Donc $BC = ${c}$ cm.` }),
        () => ({ enonce: `Le triangle $ABC$ est rectangle en $A$ avec $BC = ${c}$ cm et $AB = ${a}$ cm. Calculer $AC$.`,
                 corrige: `$AC^2 = BC^2 - AB^2 = ${c}^2 - ${a}^2 = ${c*c} - ${a*a} = ${c*c - a*a}$. Donc $AC = ${b}$ cm.` })
      ];
      return pick(variantes)();
    } else {
      // Difficile : valeurs non triplets, résultat sous forme de racine
      const a = rand(3, 8);
      const b = rand(3, 8);
      const c2 = a*a + b*b;
      return {
        enonce: `Le triangle $ABC$ est rectangle en $A$ avec $AB = ${a}$ cm et $AC = ${b}$ cm. Calculer la valeur exacte de $BC$.`,
        corrige: `$BC^2 = ${a}^2 + ${b}^2 = ${a*a} + ${b*b} = ${c2}$. Donc $BC = \\sqrt{${c2}}$ cm.`
      };
    }
  },

  gr_thales: (d) => {
    if (d === 1) {
      // Configuration simple, valeurs entières
      const k = rand(2, 4);
      const ae = rand(2, 6);
      const ce = rand(3, 8);
      const be = ae * k;
      const de = ce * k;
      return {
        enonce: `Les droites $(AB)$ et $(CD)$ sont parallèles. On a $AE = ${ae}$, $BE = ${be}$ et $CE = ${ce}$. Calculer $DE$.`,
        corrige: `D'après Thalès : $\\dfrac{AE}{BE} = \\dfrac{CE}{DE}$. Donc $DE = \\dfrac{BE \\times CE}{AE} = \\dfrac{${be} \\times ${ce}}{${ae}} = ${de}$.`
      };
    } else if (d === 2) {
      const ae = rand(2, 6);
      const be = rand(ae+1, ae+8);
      const ce = rand(2, 7);
      const de = parseFloat((be * ce / ae).toFixed(2));
      return {
        enonce: `Les droites $(AB)$ et $(CD)$ sont parallèles. On a $AE = ${ae}$ cm, $BE = ${be}$ cm et $CE = ${ce}$ cm. Calculer $DE$.`,
        corrige: `$\\dfrac{AE}{BE} = \\dfrac{CE}{DE}$, donc $DE = \\dfrac{${be} \\times ${ce}}{${ae}} = ${de}$ cm.`
      };
    } else {
      const ae = rand(2, 5);
      const ke = rand(2, 4) + rand(1,9)/10;
      const be = parseFloat((ae * ke).toFixed(1));
      const ce = rand(3, 8);
      const de = parseFloat((be * ce / ae).toFixed(2));
      return {
        enonce: `Les droites $(AB)$ et $(CD)$ sont parallèles. On a $AE = ${ae}$ cm, $BE = ${be}$ cm et $CE = ${ce}$ cm. Calculer $DE$ (arrondi au centième).`,
        corrige: `$\\dfrac{AE}{BE} = \\dfrac{CE}{DE}$. $DE = \\dfrac{${be} \\times ${ce}}{${ae}} = ${de}$ cm.`
      };
    }
  },

  ca01_op_add: (d) => {
    if (d === 1) {
      // Facile : −(x + a) ou −(x − a)
      const a = rand(2, 9);
      const variantes = [
        () => ({ enonce: `Simplifier $-(x + ${a})$.`, corrige: `$-(x + ${a}) = -x - ${a}$.` }),
        () => ({ enonce: `Simplifier $-(x - ${a})$.`, corrige: `$-(x - ${a}) = -x + ${a}$.` }),
        () => ({ enonce: `Simplifier $-(${a} - x)$.`, corrige: `$-(${a} - x) = -${a} + x = x - ${a}$.` })
      ];
      return pick(variantes)();
    } else if (d === 2) {
      // Moyen : −(ax + b) ou −(ax − b)
      const a = rand(2, 9);
      const b = rand(2, 12);
      const variantes = [
        () => ({ enonce: `Simplifier $-(${a}x + ${b})$.`, corrige: `$-(${a}x + ${b}) = -${a}x - ${b}$.` }),
        () => ({ enonce: `Simplifier $-(${a}x - ${b})$.`, corrige: `$-(${a}x - ${b}) = -${a}x + ${b}$.` })
      ];
      return pick(variantes)();
    } else {
      // Difficile : double opposition ou expressions avec plusieurs termes
      const a = rand(2, 7);
      const b = rand(2, 9);
      const c = rand(2, 7);
      const variantes = [
        () => ({ enonce: `Simplifier $-(${a}x - ${b}) - (${c}x + ${b})$.`,
                 corrige: `$-(${a}x - ${b}) - (${c}x + ${b}) = -${a}x + ${b} - ${c}x - ${b} = -${a+c}x$.` }),
        () => ({ enonce: `Simplifier $-(${a}x + ${b}y - ${c})$.`,
                 corrige: `$-(${a}x + ${b}y - ${c}) = -${a}x - ${b}y + ${c}$.` })
      ];
      return pick(variantes)();
    }
  },

  ca01_simpl: (d) => {
    const variantes_facile = [
      () => ({ enonce: `Simplifier $1 \\times x$.`, corrige: `$1 \\times x = x$.` }),
      () => ({ enonce: `Simplifier $0 \\times a$.`, corrige: `$0 \\times a = 0$.` }),
      () => ({ enonce: `Simplifier $\\dfrac{x}{1}$.`, corrige: `$\\dfrac{x}{1} = x$.` }),
      () => ({ enonce: `Simplifier $-1 \\times a$.`, corrige: `$-1 \\times a = -a$.` })
    ];
    const variantes_moyen = [
      () => ({ enonce: `Simplifier $\\dfrac{0}{a}$ (avec $a \\neq 0$).`, corrige: `$\\dfrac{0}{a} = 0$.` }),
      () => ({ enonce: `Simplifier $\\dfrac{1}{\\frac{1}{a}}$ (avec $a \\neq 0$).`, corrige: `$\\dfrac{1}{\\frac{1}{a}} = a$.` }),
      () => ({ enonce: `Simplifier $\\dfrac{a}{-1}$.`, corrige: `$\\dfrac{a}{-1} = -a$.` }),
      () => ({ enonce: `Que vaut $\\dfrac{a \\times b}{c}$ (autre écriture) ?`, corrige: `$\\dfrac{a \\times b}{c} = a \\times \\dfrac{b}{c} = \\dfrac{a}{c} \\times b$.` })
    ];
    const variantes_difficile = [
      () => ({ enonce: `Simplifier $\\dfrac{1}{\\frac{a}{b}}$ (avec $a, b \\neq 0$).`, corrige: `$\\dfrac{1}{\\frac{a}{b}} = \\dfrac{b}{a}$.` }),
      () => ({ enonce: `Simplifier $\\dfrac{\\frac{a}{b}}{\\frac{c}{d}}$ (tous non nuls).`, corrige: `$\\dfrac{\\frac{a}{b}}{\\frac{c}{d}} = \\dfrac{a}{b} \\times \\dfrac{d}{c} = \\dfrac{ad}{bc}$.` }),
      () => ({ enonce: `Démontrer que $\\dfrac{a}{b} \\times \\dfrac{b}{c} = \\dfrac{a}{c}$.`, corrige: `$\\dfrac{a}{b} \\times \\dfrac{b}{c} = \\dfrac{a \\times b}{b \\times c} = \\dfrac{a}{c}$ (en simplifiant par $b$).` })
    ];
    const v = (d === 1) ? variantes_facile : (d === 2) ? variantes_moyen : variantes_difficile;
    return pick(v)();
  },

  ca01_fract: (d) => {
    if (d === 1) {
      const a = rand(2, 7), b = rand(2, 7);
      return {
        enonce: `Écrire $\\dfrac{${a}x}{${b}}$ comme un produit d'une fraction par $x$.`,
        corrige: `$\\dfrac{${a}x}{${b}} = \\dfrac{${a}}{${b}} \\times x$.`
      };
    } else if (d === 2) {
      const a = rand(2, 7), b = rand(2, 7), c = rand(2, 7);
      return {
        enonce: `Simplifier $\\dfrac{${a} \\times b \\times c}{${a}}$ (avec $a, b, c$ non nuls).`,
        corrige: `$\\dfrac{${a} \\times b \\times c}{${a}} = b \\times c$ (on simplifie par $${a}$).`
      };
    } else {
      // Difficile : plusieurs variantes de manipulations algébriques avec fractions
      const variantes = [
        () => ({
          enonce: `Démontrer que si $\\dfrac{1}{x} + \\dfrac{1}{y} = \\dfrac{1}{u}$ (avec $x, y, u$ non nuls), alors $u = \\dfrac{xy}{x+y}$.`,
          corrige: `$\\dfrac{1}{x} + \\dfrac{1}{y} = \\dfrac{y + x}{xy} = \\dfrac{1}{u}$. En inversant : $u = \\dfrac{xy}{x+y}$.`
        }),
        () => ({
          enonce: `Simplifier l'expression $\\dfrac{2x + 4}{x + 2}$ pour $x \\neq -2$.`,
          corrige: `On factorise le numérateur : $2x + 4 = 2(x + 2)$. Donc $\\dfrac{2(x+2)}{x+2} = 2$.`
        }),
        () => ({
          enonce: `Simplifier l'expression $\\dfrac{3x^2 - 6x}{3x}$ pour $x \\neq 0$.`,
          corrige: `On factorise le numérateur : $3x^2 - 6x = 3x(x - 2)$. Donc $\\dfrac{3x(x-2)}{3x} = x - 2$.`
        }),
        () => ({
          enonce: `Écrire $\\dfrac{a}{b} + \\dfrac{c}{d}$ sous forme d'une seule fraction (avec $b, d$ non nuls).`,
          corrige: `On met au même dénominateur $bd$ : $\\dfrac{a}{b} + \\dfrac{c}{d} = \\dfrac{ad}{bd} + \\dfrac{bc}{bd} = \\dfrac{ad + bc}{bd}$.`
        })
      ];
      return pick(variantes)();
    }
  },

  ca02_dev_simple: (d) => {
    if (d === 1) {
      const k = rand(2, 7);
      const a = rand(2, 9);
      const b = rand(2, 12);
      return {
        enonce: `Développer $${k}(${a}x + ${b})$.`,
        corrige: `$${k}(${a}x + ${b}) = ${k*a}x + ${k*b}$.`
      };
    } else if (d === 2) {
      const k = randNonZero(-7, 7);
      const a = randNonZero(-9, 9);
      const b = randNonZero(-12, 12);
      const ka = k*a, kb = k*b;
      const signB = b >= 0 ? '+' : '-';
      const absB = Math.abs(b);
      const signKB = kb >= 0 ? '+' : '-';
      const absKB = Math.abs(kb);
      const kAff = k < 0 ? `(${k})` : `${k}`;
      return {
        enonce: `Développer $${kAff}(${a}x ${signB} ${absB})$.`,
        corrige: `$${kAff}(${a}x ${signB} ${absB}) = ${ka}x ${signKB} ${absKB}$.`
      };
    } else {
      // Difficile : avec −x ou x au lieu de ax
      const k = randNonZero(-9, 9);
      const a = randNonZero(-12, 12);
      const b = randNonZero(-15, 15);
      const c = randNonZero(-9, 9);
      // k(ax + b) + cx
      const ka = k*a;
      const kb = k*b;
      const total_x = ka + c;
      const kAff = k < 0 ? `(${k})` : `${k}`;
      const cAff = c < 0 ? `${c}` : `+${c}`;
      const signB = b >= 0 ? '+' : '-';
      const absB = Math.abs(b);
      const signKB = kb >= 0 ? '+' : '-';
      const absKB = Math.abs(kb);
      return {
        enonce: `Développer et réduire : $${kAff}(${a}x ${signB} ${absB}) ${cAff}x$.`,
        corrige: `$${kAff}(${a}x ${signB} ${absB}) ${cAff}x = ${ka}x ${signKB} ${absKB} ${cAff}x = ${total_x}x ${signKB} ${absKB}$.`
      };
    }
  },

  ca02_dev_double: (d) => {
    if (d === 1) {
      // Facile : (x + a)(x + b)
      const a = rand(1, 6);
      const b = rand(1, 6);
      return {
        enonce: `Développer $(x + ${a})(x + ${b})$.`,
        corrige: `$(x + ${a})(x + ${b}) = x^2 + ${a+b}x + ${a*b}$.`
      };
    } else if (d === 2) {
      // Moyen : (ax + b)(cx + d) ou (x − a)(x + b)
      const a = randNonZero(-5, 5);
      const b = randNonZero(-7, 7);
      const signA = a >= 0 ? '+' : '-';
      const absA = Math.abs(a);
      const signB = b >= 0 ? '+' : '-';
      const absB = Math.abs(b);
      const s = a + b;
      const p = a * b;
      const signS = s >= 0 ? '+' : '-';
      const absS = Math.abs(s);
      const signP = p >= 0 ? '+' : '-';
      const absP = Math.abs(p);
      return {
        enonce: `Développer $(x ${signA} ${absA})(x ${signB} ${absB})$.`,
        corrige: `$(x ${signA} ${absA})(x ${signB} ${absB}) = x^2 ${signS} ${absS}x ${signP} ${absP}$.`
      };
    } else {
      // Difficile : (ax + b)(cx + d) avec a, c différents de 1
      const a = rand(2, 5);
      const b = randNonZero(-7, 7);
      const c = rand(2, 5);
      const dv = randNonZero(-7, 7);
      const ac = a*c;
      const ad_bc = a*dv + b*c;
      const bd = b*dv;
      const signB = b >= 0 ? '+' : '-';
      const absB = Math.abs(b);
      const signD = dv >= 0 ? '+' : '-';
      const absD = Math.abs(dv);
      const signX = ad_bc >= 0 ? '+' : '-';
      const absX = Math.abs(ad_bc);
      const signBD = bd >= 0 ? '+' : '-';
      const absBD = Math.abs(bd);
      return {
        enonce: `Développer $(${a}x ${signB} ${absB})(${c}x ${signD} ${absD})$.`,
        corrige: `$(${a}x ${signB} ${absB})(${c}x ${signD} ${absD}) = ${ac}x^2 ${signX} ${absX}x ${signBD} ${absBD}$.`
      };
    }
  },

  ca02_ident_dev: (d) => {
    if (d === 1) {
      // Facile : (x + a)² ou (x − a)² avec a entier petit
      const a = rand(2, 6);
      const variantes = [
        () => ({ enonce: `Développer $(x + ${a})^2$.`, corrige: `$(x + ${a})^2 = x^2 + ${2*a}x + ${a*a}$.` }),
        () => ({ enonce: `Développer $(x - ${a})^2$.`, corrige: `$(x - ${a})^2 = x^2 - ${2*a}x + ${a*a}$.` })
      ];
      return pick(variantes)();
    } else if (d === 2) {
      // Moyen : (ax + b)² ou (ax - b)² ou (a+b)(a-b)
      const a = rand(2, 5);
      const b = rand(2, 9);
      const variantes = [
        () => ({ enonce: `Développer $(${a}x + ${b})^2$.`,
                 corrige: `$(${a}x + ${b})^2 = ${a*a}x^2 + ${2*a*b}x + ${b*b}$.` }),
        () => ({ enonce: `Développer $(${a}x - ${b})^2$.`,
                 corrige: `$(${a}x - ${b})^2 = ${a*a}x^2 - ${2*a*b}x + ${b*b}$.` }),
        () => ({ enonce: `Développer $(x + ${b})(x - ${b})$.`,
                 corrige: `$(x + ${b})(x - ${b}) = x^2 - ${b*b}$.` })
      ];
      return pick(variantes)();
    } else {
      // Difficile : avec décimaux ou cas mixtes
      const a = rand(2, 7);
      const b = rand(2, 9);
      const variantes = [
        () => ({ enonce: `Développer $(${a}x + ${b})(${a}x - ${b})$.`,
                 corrige: `$(${a}x + ${b})(${a}x - ${b}) = ${a*a}x^2 - ${b*b}$.` }),
        () => ({ enonce: `Développer $(2x + 0{,}5)^2$.`,
                 corrige: `$(2x + 0{,}5)^2 = 4x^2 + 2x + 0{,}25$.` }),
        () => ({ enonce: `Développer $(${a}x - ${b}y)^2$.`,
                 corrige: `$(${a}x - ${b}y)^2 = ${a*a}x^2 - ${2*a*b}xy + ${b*b}y^2$.` })
      ];
      return pick(variantes)();
    }
  },

  ca02_ident_fact: (d) => {
    if (d === 1) {
      // Facile : x² + 2ax + a² ou x² − 2ax + a²
      const a = rand(2, 6);
      const variantes = [
        () => ({ enonce: `Factoriser $x^2 + ${2*a}x + ${a*a}$.`, corrige: `$x^2 + ${2*a}x + ${a*a} = (x + ${a})^2$.` }),
        () => ({ enonce: `Factoriser $x^2 - ${2*a}x + ${a*a}$.`, corrige: `$x^2 - ${2*a}x + ${a*a} = (x - ${a})^2$.` })
      ];
      return pick(variantes)();
    } else if (d === 2) {
      // Moyen : x² − a² (différence de carrés)
      const a = rand(2, 9);
      return {
        enonce: `Factoriser $x^2 - ${a*a}$.`,
        corrige: `On reconnaît $x^2 - ${a}^2 = (x + ${a})(x - ${a})$.`
      };
    } else {
      // Difficile : a²x² − b² ou (ax)² ± 2abx + b²
      const a = rand(2, 5);
      const b = rand(2, 7);
      const variantes = [
        () => ({ enonce: `Factoriser $${a*a}x^2 - ${b*b}$.`,
                 corrige: `$${a*a}x^2 - ${b*b} = (${a}x)^2 - ${b}^2 = (${a}x + ${b})(${a}x - ${b})$.` }),
        () => ({ enonce: `Factoriser $${a*a}x^2 + ${2*a*b}x + ${b*b}$.`,
                 corrige: `$${a*a}x^2 + ${2*a*b}x + ${b*b} = (${a}x + ${b})^2$.` })
      ];
      return pick(variantes)();
    }
  },

  ca02_reduire: (d) => {
    if (d === 1) {
      const a = rand(2, 7);
      const b = rand(2, 9);
      const c = rand(2, 5);
      return {
        enonce: `Réduire $${a}x + ${b}x + ${c}$.`,
        corrige: `$${a}x + ${b}x + ${c} = ${a+b}x + ${c}$.`
      };
    } else if (d === 2) {
      const a = rand(2, 6);
      const b = rand(2, 6);
      const c = rand(2, 6);
      const dd = rand(2, 6);
      const e = rand(2, 9);
      return {
        enonce: `Réduire $${a}x^2 + ${b}x^2 + ${c}x + ${dd}x + ${e}$.`,
        corrige: `$${a}x^2 + ${b}x^2 + ${c}x + ${dd}x + ${e} = ${a+b}x^2 + ${c+dd}x + ${e}$.`
      };
    } else {
      const a = randNonZero(-6, 6);
      const b = randNonZero(-6, 6);
      const c = randNonZero(-7, 7);
      const dd = randNonZero(-7, 7);
      const sa = a + b;
      const sc = c + dd;
      const signA = a >= 0 ? '' : '-';
      const absA = Math.abs(a);
      const signB = b >= 0 ? '+' : '-';
      const absB = Math.abs(b);
      const signC = c >= 0 ? '+' : '-';
      const absC = Math.abs(c);
      const signD = dd >= 0 ? '+' : '-';
      const absD = Math.abs(dd);
      const signSA = sa >= 0 ? '' : '-';
      const absSA = Math.abs(sa);
      const signSC = sc >= 0 ? '+' : '-';
      const absSC = Math.abs(sc);
      return {
        enonce: `Réduire $${signA}${absA}x^2 ${signB} ${absB}x^2 ${signC} ${absC}x ${signD} ${absD}x$.`,
        corrige: `On regroupe les termes semblables : $${signSA}${absSA}x^2 ${signSC} ${absSC}x$.`
      };
    }
  },

  ca02_fact_simple: (d) => {
    if (d === 1) {
      // Facile : ax + ay = a(x + y) avec a entier
      const a = rand(2, 8);
      const x_coef = rand(2, 6);
      return {
        enonce: `Factoriser $${a*x_coef}x + ${a*x_coef*2}$ par $${a}$.`,
        corrige: `$${a*x_coef}x + ${a*x_coef*2} = ${a}(${x_coef}x + ${x_coef*2})$.`
      };
    } else if (d === 2) {
      // Moyen : ax² + bx avec facteur commun x
      const a = rand(2, 9);
      const b = rand(2, 12);
      return {
        enonce: `Factoriser $${a}x^2 + ${b}x$.`,
        corrige: `On met $x$ en facteur : $${a}x^2 + ${b}x = x(${a}x + ${b})$.`
      };
    } else {
      // Difficile : (x − 3) en facteur commun
      const a = rand(2, 5);
      const b = rand(2, 7);
      const c = rand(2, 9);
      return {
        enonce: `Factoriser $(x - ${a})(${b}x + ${c}) + (x - ${a})$.`,
        corrige: `On met $(x - ${a})$ en facteur : $(x - ${a})(${b}x + ${c}) + (x - ${a}) = (x - ${a})(${b}x + ${c} + 1) = (x - ${a})(${b}x + ${c+1})$.`
      };
    }
  },

  ca03_eq1: (d) => {
    if (d === 1) {
      // Facile : ax = b (solution entière)
      const x = randNonZero(-5, 5);
      const a = randNonZero(2, 7);
      const b = a * x;
      return {
        enonce: `Résoudre l'équation : $${a}x = ${b}$.`,
        corrige: `$x = \\dfrac{${b}}{${a}} = ${x}$.`
      };
    } else if (d === 2) {
      // Moyen : ax + b = c
      const x = randNonZero(-5, 5);
      const a = randNonZero(2, 7);
      const b = randNonZero(-9, 9);
      const c = a * x + b;
      const signB = b >= 0 ? '+' : '-';
      const absB = Math.abs(b);
      return {
        enonce: `Résoudre l'équation : $${a}x ${signB} ${absB} = ${c}$.`,
        corrige: `$${a}x = ${c} ${b >= 0 ? '-' : '+'} ${absB} = ${c-b}$, donc $x = \\dfrac{${c-b}}{${a}} = ${x}$.`
      };
    } else {
      // Difficile : ax + b = cx + d avec a ≠ c
      const x = randNonZero(-4, 4);
      const a = randNonZero(2, 6);
      let c = randNonZero(2, 6);
      while (c === a) c = randNonZero(2, 6);
      const b = randNonZero(-9, 9);
      const d_ = (a - c) * x + b;
      const signB = b >= 0 ? '+' : '-';
      const absB = Math.abs(b);
      const signD = d_ >= 0 ? '+' : '-';
      const absD = Math.abs(d_);
      return {
        enonce: `Résoudre : $${a}x ${signB} ${absB} = ${c}x ${signD} ${absD}$.`,
        corrige: `$${a}x - ${c}x = ${d_} - (${b}) = ${d_ - b}$, donc $${a-c}x = ${d_-b}$, d'où $x = \\dfrac{${d_-b}}{${a-c}} = ${x}$.`
      };
    }
  },

  ca03_eq_carre: (d) => {
    if (d === 1) {
      // Facile : x² = n² avec n entier
      const n = rand(2, 9);
      return {
        enonce: `Résoudre dans $\\mathbb{R}$ : $x^2 = ${n*n}$.`,
        corrige: `Solutions : $x = ${n}$ ou $x = -${n}$, soit $\\mathcal{S} = \\{-${n}\\,;\\,${n}\\}$.`
      };
    } else if (d === 2) {
      // Moyen : x² = a avec parfois pas de solution ou solution non entière
      const variantes = [
        () => { const n = rand(2, 12); return { enonce: `Résoudre dans $\\mathbb{R}$ : $x^2 = ${n*n}$.`, corrige: `$\\mathcal{S} = \\{-${n}\\,;\\,${n}\\}$.` }; },
        () => { const a = pick([2, 3, 5, 6, 7, 10, 11]); return { enonce: `Résoudre dans $\\mathbb{R}$ : $x^2 = ${a}$.`, corrige: `$\\mathcal{S} = \\{-\\sqrt{${a}}\\,;\\,\\sqrt{${a}}\\}$.` }; },
        () => { const a = -rand(2, 9); return { enonce: `Résoudre dans $\\mathbb{R}$ : $x^2 = ${a}$.`, corrige: `Un carré ne peut pas être négatif, donc $\\mathcal{S} = \\emptyset$.` }; }
      ];
      return pick(variantes)();
    } else {
      // Difficile : (x+a)² = b, ou équations à transformer
      const variantes = [
        () => { const a = rand(2, 6); const b = rand(2, 8); return {
          enonce: `Résoudre dans $\\mathbb{R}$ : $(x + ${a})^2 = ${b*b}$.`,
          corrige: `$x + ${a} = ${b}$ ou $x + ${a} = -${b}$, donc $x = ${b-a}$ ou $x = ${-b-a}$. $\\mathcal{S} = \\{${-b-a}\\,;\\,${b-a}\\}$.`
        }; },
        () => { const n = rand(2, 7); return {
          enonce: `Résoudre dans $\\mathbb{R}$ : $2x^2 = ${2*n*n}$.`,
          corrige: `$x^2 = ${n*n}$, donc $\\mathcal{S} = \\{-${n}\\,;\\,${n}\\}$.`
        }; }
      ];
      return pick(variantes)();
    }
  },

  ca03_eq_rat: (d) => {
    if (d === 1) {
      // Facile : a/x = b avec solution entière
      const x = randNonZero(2, 9);
      const b = randNonZero(2, 6);
      const a = b * x;
      return {
        enonce: `Résoudre l'équation : $\\dfrac{${a}}{x} = ${b}$.`,
        corrige: `$x = \\dfrac{${a}}{${b}} = ${x}$.`
      };
    } else if (d === 2) {
      // Moyen : a/x = b avec solution potentiellement fractionnaire
      const x = randNonZero(2, 12);
      const b = randNonZero(-7, 7);
      const a = b * x;
      return {
        enonce: `Résoudre l'équation : $\\dfrac{${a}}{x} = ${b}$.`,
        corrige: `$x = \\dfrac{${a}}{${b}} = ${x}$.`
      };
    } else {
      // Difficile : (a + b)/x = c ou a/(x + c) = b
      const x = randNonZero(2, 8);
      const a = randNonZero(-8, 8);
      const c = randNonZero(-5, 5);
      const b = a / (x + c);
      // On veut que b soit entier
      const bEnt = Math.round(b);
      if (bEnt === 0 || bEnt * (x + c) !== a) {
        // fallback : équation classique
        const xx = randNonZero(2, 9);
        const bb = randNonZero(2, 7);
        const aa = bb * xx;
        return {
          enonce: `Résoudre l'équation : $\\dfrac{${aa}}{x} = ${bb}$.`,
          corrige: `$x = \\dfrac{${aa}}{${bb}} = ${xx}$.`
        };
      }
      const signC = c >= 0 ? '+' : '-';
      const absC = Math.abs(c);
      return {
        enonce: `Résoudre l'équation : $\\dfrac{${a}}{x ${signC} ${absC}} = ${bEnt}$.`,
        corrige: `$x ${signC} ${absC} = \\dfrac{${a}}{${bEnt}} = ${a/bEnt}$, donc $x = ${a/bEnt} ${c >= 0 ? '-' : '+'} ${absC} = ${x}$.`
      };
    }
  },

  ca03_ineq: (d) => {
    if (d === 1) {
      // Facile : ax < b ou ax > b avec a > 0
      const x = randNonZero(-5, 5);
      const a = rand(2, 6);
      const b = a * x;
      const op = pick(['<', '>', '\\le', '\\ge']);
      const sol = (op === '<' || op === '\\le') ? `x ${op} ${x}` : `x ${op} ${x}`;
      const interv = (op === '<') ? `]-\\infty\\,;\\,${x}[` 
                   : (op === '\\le') ? `]-\\infty\\,;\\,${x}]`
                   : (op === '>') ? `]${x}\\,;\\,+\\infty[`
                   : `[${x}\\,;\\,+\\infty[`;
      return {
        enonce: `Résoudre l'inéquation : $${a}x ${op} ${b}$.`,
        corrige: `On divise par $${a}$ (positif, on ne change pas le sens) : $x ${op} ${x}$. Solutions : $${interv}$.`
      };
    } else if (d === 2) {
      // Moyen : ax + b < c ou inégalité avec a < 0 (changement de sens)
      const x = randNonZero(-5, 5);
      const a = randNonZero(-5, 5);
      const b = randNonZero(-9, 9);
      const c = a * x + b;
      const op = pick(['<', '>', '\\le', '\\ge']);
      // Si a < 0, le sens change après division
      const opFinal = (a < 0) 
        ? (op === '<' ? '>' : op === '>' ? '<' : op === '\\le' ? '\\ge' : '\\le')
        : op;
      const signB = b >= 0 ? '+' : '-';
      const absB = Math.abs(b);
      return {
        enonce: `Résoudre l'inéquation : $${a}x ${signB} ${absB} ${op} ${c}$.`,
        corrige: `$${a}x ${op} ${c - b}$, puis on divise par $${a}$ ${a < 0 ? '(négatif, le sens change)' : '(positif)'} : $x ${opFinal} ${x}$.`
      };
    } else {
      // Difficile : ax + b < cx + d
      const x = randNonZero(-4, 4);
      const a = randNonZero(2, 6);
      let c = randNonZero(-5, 5);
      while (c === a) c = randNonZero(-5, 5);
      const b = randNonZero(-7, 7);
      const d_ = (a - c) * x + b;
      const op = pick(['<', '>', '\\le', '\\ge']);
      const opFinal = ((a - c) < 0)
        ? (op === '<' ? '>' : op === '>' ? '<' : op === '\\le' ? '\\ge' : '\\le')
        : op;
      const signB = b >= 0 ? '+' : '-';
      const absB = Math.abs(b);
      const signD = d_ >= 0 ? '+' : '-';
      const absD = Math.abs(d_);
      return {
        enonce: `Résoudre l'inéquation : $${a}x ${signB} ${absB} ${op} ${c}x ${signD} ${absD}$.`,
        corrige: `$${a-c}x ${op} ${d_ - b}$, puis $x ${opFinal} ${x}$.`
      };
    }
  },

  ca04_formule: (d) => {
    if (d === 1) {
      const variantes = [
        () => ({ enonce: `On a $U = R \\times I$ (loi d'Ohm). Exprimer $R$ en fonction de $U$ et $I$.`,
                 corrige: `$R = \\dfrac{U}{I}$.` }),
        () => ({ enonce: `On a $v = \\dfrac{d}{t}$. Exprimer $d$ en fonction de $v$ et $t$.`,
                 corrige: `$d = v \\times t$.` }),
        () => ({ enonce: `On a $P = U \\times I$. Exprimer $I$ en fonction de $P$ et $U$.`,
                 corrige: `$I = \\dfrac{P}{U}$.` })
      ];
      return pick(variantes)();
    } else if (d === 2) {
      const variantes = [
        () => ({ enonce: `Le volume d'un cylindre est $V = \\pi r^2 h$. Exprimer $h$ en fonction de $V$ et $r$.`,
                 corrige: `$h = \\dfrac{V}{\\pi r^2}$.` }),
        () => ({ enonce: `Le volume d'un cône est $V = \\dfrac{1}{3} \\pi r^2 h$. Exprimer $h$ en fonction de $V$ et $r$.`,
                 corrige: `$h = \\dfrac{3V}{\\pi r^2}$.` }),
        () => ({ enonce: `L'aire d'un trapèze est $A = \\dfrac{(B + b) \\times h}{2}$. Exprimer $h$ en fonction de $A$, $B$ et $b$.`,
                 corrige: `$h = \\dfrac{2A}{B + b}$.` })
      ];
      return pick(variantes)();
    } else {
      const variantes = [
        () => ({ enonce: `On a $\\dfrac{1}{x} + \\dfrac{1}{y} = \\dfrac{1}{u}$ (avec $x, y, u \\neq 0$). Exprimer $u$ en fonction de $x$ et $y$.`,
                 corrige: `$\\dfrac{1}{u} = \\dfrac{y + x}{xy}$, donc $u = \\dfrac{xy}{x + y}$.` }),
        () => ({ enonce: `L'accélération centripète vaut $a = \\dfrac{v^2}{R}$. Exprimer $v$ en fonction de $a$ et $R$ (avec $v > 0$).`,
                 corrige: `$v^2 = a \\times R$, donc $v = \\sqrt{aR}$.` }),
        () => ({ enonce: `La formule des résistances en parallèle est $\\dfrac{1}{R} = \\dfrac{1}{R_1} + \\dfrac{1}{R_2}$. Exprimer $R$ en fonction de $R_1$ et $R_2$.`,
                 corrige: `$\\dfrac{1}{R} = \\dfrac{R_2 + R_1}{R_1 R_2}$, donc $R = \\dfrac{R_1 R_2}{R_1 + R_2}$.` }),
        () => ({ enonce: `On a $T = 2\\pi \\sqrt{\\dfrac{L}{g}}$ (période d'un pendule). Exprimer $L$ en fonction de $T$ et $g$.`,
                 corrige: `$\\dfrac{T}{2\\pi} = \\sqrt{\\dfrac{L}{g}}$, donc $\\dfrac{T^2}{4\\pi^2} = \\dfrac{L}{g}$, soit $L = \\dfrac{gT^2}{4\\pi^2}$.` })
      ];
      return pick(variantes)();
    }
  },

  ca04_avec_carre: (d) => {
    if (d === 1) {
      const variantes = [
        () => ({ enonce: `On a $A = c^2$ avec $c > 0$. Exprimer $c$ en fonction de $A$.`,
                 corrige: `$c = \\sqrt{A}$.` }),
        () => ({ enonce: `On a $V = a^3$ avec $a > 0$ (volume d'un cube de côté $a$). Exprimer $a$ en fonction de $V$.`,
                 corrige: `$a = \\sqrt[3]{V}$ (racine cubique).` }),
        () => ({ enonce: `On a $y = x^2$ avec $x > 0$. Exprimer $x$ en fonction de $y$.`,
                 corrige: `$x = \\sqrt{y}$.` })
      ];
      return pick(variantes)();
    } else if (d === 2) {
      const variantes = [
        () => ({ enonce: `On a $A = \\pi r^2$ avec $r > 0$. Exprimer $r$ en fonction de $A$.`,
                 corrige: `$r^2 = \\dfrac{A}{\\pi}$, donc $r = \\sqrt{\\dfrac{A}{\\pi}}$.` }),
        () => ({ enonce: `L'énergie cinétique vaut $E = \\dfrac{1}{2}mv^2$. Exprimer $v$ en fonction de $E$ et $m$ (avec $v > 0$).`,
                 corrige: `$v^2 = \\dfrac{2E}{m}$, donc $v = \\sqrt{\\dfrac{2E}{m}}$.` }),
        () => ({ enonce: `L'aire d'un carré est $A = c^2$. Exprimer $c$ en fonction de $A$ (avec $c > 0$).`,
                 corrige: `$c = \\sqrt{A}$.` }),
        () => ({ enonce: `Le volume d'une sphère est $V = \\dfrac{4}{3}\\pi r^3$. Exprimer $r$ en fonction de $V$.`,
                 corrige: `$r^3 = \\dfrac{3V}{4\\pi}$, donc $r = \\sqrt[3]{\\dfrac{3V}{4\\pi}}$.` })
      ];
      return pick(variantes)();
    } else {
      const variantes = [
        () => ({ enonce: `On a $C = (1 + t)^2$ avec $t > -1$. Exprimer $t$ en fonction de $C$.`,
                 corrige: `$1 + t = \\sqrt{C}$, donc $t = \\sqrt{C} - 1$.` }),
        () => ({ enonce: `On a $a^2 + b^2 = c^2$ (Pythagore). Exprimer $a$ en fonction de $b$ et $c$ (avec $a > 0$ et $c > b > 0$).`,
                 corrige: `$a^2 = c^2 - b^2$, donc $a = \\sqrt{c^2 - b^2}$.` }),
        () => ({ enonce: `On a $V_C = \\dfrac{1}{2} m \\omega^2 R^2$. Exprimer $\\omega$ en fonction de $V_C$, $m$ et $R$ (avec $\\omega > 0$).`,
                 corrige: `$\\omega^2 = \\dfrac{2V_C}{m R^2}$, donc $\\omega = \\sqrt{\\dfrac{2V_C}{mR^2}} = \\dfrac{1}{R}\\sqrt{\\dfrac{2V_C}{m}}$.` }),
        () => ({ enonce: `On a $(x - 3)^2 = K$ avec $K \\geq 0$. Exprimer les valeurs possibles de $x$ en fonction de $K$.`,
                 corrige: `$x - 3 = \\pm\\sqrt{K}$, donc $x = 3 + \\sqrt{K}$ ou $x = 3 - \\sqrt{K}$.` })
      ];
      return pick(variantes)();
    }
  },

  ca05_calc: (d) => {
    if (d === 1) {
      // Facile : ax + b avec x entier
      const a = rand(2, 7);
      const b = randNonZero(-9, 9);
      const x = rand(2, 9);
      const r = a * x + b;
      const signB = b >= 0 ? '+' : '-';
      const absB = Math.abs(b);
      return {
        enonce: `Calculer la valeur de $${a}x ${signB} ${absB}$ pour $x = ${x}$.`,
        corrige: `Pour $x = ${x}$ : $${a} \\times ${x} ${signB} ${absB} = ${a*x} ${signB} ${absB} = ${r}$.`
      };
    } else if (d === 2) {
      // Moyen : ax² + bx + c avec x entier ou négatif
      const a = randNonZero(-3, 3);
      const b = randNonZero(-5, 5);
      const c = randNonZero(-9, 9);
      const x = randNonZero(-5, 5);
      const r = a * x * x + b * x + c;
      const signB = b >= 0 ? '+' : '-';
      const absB = Math.abs(b);
      const signC = c >= 0 ? '+' : '-';
      const absC = Math.abs(c);
      const aAff = a < 0 ? `(${a})` : `${a}`;
      const bxAff = b < 0 ? `${b}x` : `${b}x`;
      const xAff = x < 0 ? `(${x})` : `${x}`;
      return {
        enonce: `Calculer la valeur de $${a}x^2 ${signB} ${absB}x ${signC} ${absC}$ pour $x = ${x}$.`,
        corrige: `Pour $x = ${x}$ : $${a} \\times ${xAff}^2 ${signB} ${absB} \\times ${xAff} ${signC} ${absC} = ${a*x*x} ${b*x>=0 ? '+' : '-'} ${Math.abs(b*x)} ${signC} ${absC} = ${r}$.`
      };
    } else {
      // Difficile : expression avec fraction ou plusieurs variables
      const variantes = [
        () => {
          const a = randNonZero(2, 5), b = randNonZero(2, 7), c = randNonZero(2, 9);
          const dd = randNonZero(-3, 3);
          const x = randNonZero(2, 6);
          const r = (a * x + b) / c + dd;
          if (!Number.isInteger(r * c) || c === 0) return null;
          // Formater proprement les ajouts de dd
          const ddSig = dd >= 0 ? `+ ${dd}` : `- ${-dd}`;
          return {
            enonce: `Calculer $\\dfrac{${a}x + ${b}}{${c}} ${ddSig}$ pour $x = ${x}$.`,
            corrige: `Pour $x = ${x}$ : $\\dfrac{${a*x} + ${b}}{${c}} ${ddSig} = \\dfrac{${a*x+b}}{${c}} ${ddSig} = ${(a*x+b)/c} ${ddSig} = ${r}$.`
          };
        }
      ];
      let result = null;
      let tries = 0;
      while (!result && tries < 10) {
        result = variantes[0]();
        tries++;
      }
      if (!result) {
        // fallback simple
        const a = 2, b = 4, c = 2, x = 3;
        return {
          enonce: `Calculer $\\dfrac{${a}x + ${b}}{${c}}$ pour $x = ${x}$.`,
          corrige: `Pour $x = ${x}$ : $\\dfrac{${a*x} + ${b}}{${c}} = \\dfrac{${a*x+b}}{${c}} = ${(a*x+b)/c}$.`
        };
      }
      return result;
    }
  },

  ca05_formule: (d) => {
    if (d === 1) {
      const variantes = [
        () => {
          const U = rand(2, 12), I = rand(2, 6);
          return { enonce: `D'après la loi d'Ohm, $U = R \\times I$. Calculer $U$ pour $R = ${U}$ et $I = ${I}$ (unités SI).`,
                   corrige: `$U = ${U} \\times ${I} = ${U*I}$.` };
        },
        () => {
          const v = rand(10, 80), t = rand(2, 8);
          return { enonce: `On a $d = v \\times t$. Calculer $d$ pour $v = ${v}$ km/h et $t = ${t}$ h.`,
                   corrige: `$d = ${v} \\times ${t} = ${v*t}$ km.` };
        }
      ];
      return pick(variantes)();
    } else if (d === 2) {
      const variantes = [
        () => {
          const r = rand(2, 6), h = rand(3, 10);
          return { enonce: `Le volume d'un cylindre est $V = \\pi r^2 h$. Calculer $V$ pour $r = ${r}$ cm et $h = ${h}$ cm (en fonction de $\\pi$).`,
                   corrige: `$V = \\pi \\times ${r}^2 \\times ${h} = ${r*r*h}\\pi$ cm³.` };
        },
        () => {
          const m = rand(2, 10), v = rand(2, 12);
          return { enonce: `L'énergie cinétique vaut $E = \\dfrac{1}{2}mv^2$. Calculer $E$ pour $m = ${m}$ kg et $v = ${v}$ m/s.`,
                   corrige: `$E = \\dfrac{1}{2} \\times ${m} \\times ${v}^2 = ${m*v*v/2}$ J.` };
        }
      ];
      return pick(variantes)();
    } else {
      const variantes = [
        () => {
          const a = rand(2, 8), b = rand(2, 8), R = rand(2, 6);
          return { enonce: `Deux résistances en parallèle vérifient $\\dfrac{1}{R} = \\dfrac{1}{R_1} + \\dfrac{1}{R_2}$. Calculer $R$ pour $R_1 = ${a*R}$ Ω et $R_2 = ${b*R}$ Ω.`,
                   corrige: `$\\dfrac{1}{R} = \\dfrac{1}{${a*R}} + \\dfrac{1}{${b*R}} = \\dfrac{${b} + ${a}}{${a*b*R}} = \\dfrac{${a+b}}{${a*b*R}}$, donc $R = \\dfrac{${a*b*R}}{${a+b}}$ Ω.` };
        },
        () => {
          const a = rand(3, 8), b = rand(3, 8);
          return { enonce: `La diagonale d'un rectangle est $d = \\sqrt{L^2 + l^2}$. Calculer $d$ pour $L = ${a}$ cm et $l = ${b}$ cm (valeur exacte).`,
                   corrige: `$d = \\sqrt{${a}^2 + ${b}^2} = \\sqrt{${a*a + b*b}}$ cm.` };
        }
      ];
      return pick(variantes)();
    }
  },

  ca06_simple: (d) => {
    if (d === 1) {
      // Facile : (x − a)(x − b) = 0 avec a, b entiers positifs
      const a = rand(2, 7);
      let b = rand(2, 7);
      while (b === a) b = rand(2, 7);
      return {
        enonce: `Résoudre l'équation : $(x - ${a})(x - ${b}) = 0$.`,
        corrige: `Un produit est nul si l'un de ses facteurs l'est. $x - ${a} = 0$ donne $x = ${a}$, et $x - ${b} = 0$ donne $x = ${b}$. $\\mathcal{S} = \\{${a}\\,;\\,${b}\\}$.`
      };
    } else if (d === 2) {
      // Moyen : (ax + b)(cx + d) = 0
      const a = rand(2, 5);
      const b = randNonZero(-9, 9);
      const c = rand(2, 5);
      const d_ = randNonZero(-9, 9);
      const x1 = -b/a;
      const x2 = -d_/c;
      const signB = b >= 0 ? '+' : '-';
      const absB = Math.abs(b);
      const signD = d_ >= 0 ? '+' : '-';
      const absD = Math.abs(d_);
      return {
        enonce: `Résoudre l'équation : $(${a}x ${signB} ${absB})(${c}x ${signD} ${absD}) = 0$.`,
        corrige: `$${a}x ${signB} ${absB} = 0$ donne $x = ${b>=0 ? '-' : ''}\\dfrac{${absB}}{${a}}${b<0 ? '' : ''} = ${x1}$, et $${c}x ${signD} ${absD} = 0$ donne $x = ${x2}$. $\\mathcal{S} = \\{${x1}\\,;\\,${x2}\\}$.`
      };
    } else {
      // Difficile : produit de 3 facteurs ou forme moins évidente
      const variantes = [
        () => {
          const a = rand(2, 6);
          const b = rand(2, 6);
          let c = rand(2, 6);
          while (c === a || c === b) c = rand(2, 6);
          return {
            enonce: `Résoudre : $x(x - ${a})(x + ${b}) = 0$.`,
            corrige: `Solutions : $x = 0$, $x = ${a}$ ou $x = -${b}$. $\\mathcal{S} = \\{-${b}\\,;\\,0\\,;\\,${a}\\}$.`
          };
        },
        () => {
          const a = rand(2, 6);
          return {
            enonce: `Résoudre : $(2x - ${2*a})^2 = 0$.`,
            corrige: `$(2x - ${2*a})^2 = 0$ équivaut à $2x - ${2*a} = 0$, donc $x = ${a}$. $\\mathcal{S} = \\{${a}\\}$.`
          };
        }
      ];
      return pick(variantes)();
    }
  },

  ca06_factoriser: (d) => {
    if (d === 1) {
      // Facile : x² − a² = 0
      const a = rand(2, 7);
      return {
        enonce: `Résoudre : $x^2 - ${a*a} = 0$.`,
        corrige: `On factorise : $x^2 - ${a*a} = (x - ${a})(x + ${a}) = 0$. Solutions : $x = ${a}$ ou $x = -${a}$. $\\mathcal{S} = \\{-${a}\\,;\\,${a}\\}$.`
      };
    } else if (d === 2) {
      // Moyen : ax² + bx = 0 (facteur commun)
      const a = rand(2, 6);
      const b = rand(2, 12);
      return {
        enonce: `Résoudre : $${a}x^2 + ${b}x = 0$.`,
        corrige: `On factorise par $x$ : $x(${a}x + ${b}) = 0$. Solutions : $x = 0$ ou $${a}x + ${b} = 0$ donc $x = -\\dfrac{${b}}{${a}}$. $\\mathcal{S} = \\{-\\dfrac{${b}}{${a}}\\,;\\,0\\}$.`
      };
    } else {
      // Difficile : forme avec identité remarquable
      const variantes = [
        () => {
          const a = rand(2, 5);
          return {
            enonce: `Résoudre : $x^2 - ${2*a}x + ${a*a} = 0$.`,
            corrige: `On reconnaît $(x - ${a})^2 = 0$, donc $x = ${a}$. $\\mathcal{S} = \\{${a}\\}$.`
          };
        },
        () => {
          const a = rand(2, 4);
          const b = rand(2, 7);
          return {
            enonce: `Résoudre : $(${a}x - ${b})^2 - ${b*b} = 0$.`,
            corrige: `On a $(${a}x - ${b})^2 = ${b*b}$, donc $${a}x - ${b} = ${b}$ ou $${a}x - ${b} = -${b}$. Soit $${a}x = ${2*b}$ ou $${a}x = 0$. $\\mathcal{S} = \\{0\\,;\\,\\dfrac{${2*b}}{${a}}\\}$.`
          };
        }
      ];
      return pick(variantes)();
    }
  },

  ca07_affine: (d) => {
    if (d === 1) {
      // Facile : a > 0
      const a = rand(2, 6);
      const b = randNonZero(-12, 12);
      const x0 = -b / a;
      const x0_aff = Number.isInteger(x0) ? `${x0}` : `\\dfrac{${-b}}{${a}}`;
      const signB = b >= 0 ? '+' : '-';
      const absB = Math.abs(b);
      return {
        enonce: `Donner le signe de $f(x) = ${a}x ${signB} ${absB}$ selon les valeurs de $x$.`,
        corrige: `$f$ s'annule en $x_0 = ${x0_aff}$. Coefficient directeur $${a} > 0$, donc $f$ est croissante. $f(x) < 0$ pour $x < ${x0_aff}$, $f(x) > 0$ pour $x > ${x0_aff}$.`
      };
    } else if (d === 2) {
      // Moyen : a peut être négatif
      const a = randNonZero(-6, 6);
      const b = randNonZero(-12, 12);
      const x0 = -b / a;
      const x0_aff = Number.isInteger(x0) ? `${x0}` : `\\dfrac{${-b}}{${a}}`;
      const aAff = a < 0 ? `(${a})` : `${a}`;
      const signB = b >= 0 ? '+' : '-';
      const absB = Math.abs(b);
      const sensPos = a > 0 ? `x > ${x0_aff}` : `x < ${x0_aff}`;
      const sensNeg = a > 0 ? `x < ${x0_aff}` : `x > ${x0_aff}`;
      return {
        enonce: `Donner le signe de $f(x) = ${a}x ${signB} ${absB}$ selon les valeurs de $x$.`,
        corrige: `$f$ s'annule en $x_0 = ${x0_aff}$. Coefficient $${a} ${a > 0 ? '>' : '<'} 0$, donc $f(x) > 0$ pour $${sensPos}$ et $f(x) < 0$ pour $${sensNeg}$.`
      };
    } else {
      // Difficile : avec lettres ou présenter dans un tableau de signes
      const a = randNonZero(-5, 5);
      const b = randNonZero(-10, 10);
      const x0 = -b / a;
      const x0_aff = Number.isInteger(x0) ? `${x0}` : `\\dfrac{${-b}}{${a}}`;
      const signB = b >= 0 ? '+' : '-';
      const absB = Math.abs(b);
      const signG = a > 0 ? '-' : '+';
      const signD = a > 0 ? '+' : '-';
      return {
        enonce: `Dresser le tableau de signes de $f(x) = ${a}x ${signB} ${absB}$ sur $\\mathbb{R}$.`,
        corrige: `$f$ s'annule en $x_0 = ${x0_aff}$. Coefficient $${a}$ ${a > 0 ? 'positif' : 'négatif'}. Tableau : pour $x < ${x0_aff}$, $f(x)$ est de signe $${signG}$ ; pour $x > ${x0_aff}$, $f(x)$ est de signe $${signD}$.`
      };
    }
  },

  ca07_trinome: (d) => {
    if (d === 1) {
      // Facile : (x − a)(x − b) avec a < b
      let a = rand(-5, 5);
      let b = rand(-5, 5);
      while (b === a) b = rand(-5, 5);
      if (a > b) [a, b] = [b, a];
      const aff_a = `(x ${a >= 0 ? '-' : '+'} ${Math.abs(a)})`;
      const aff_b = `(x ${b >= 0 ? '-' : '+'} ${Math.abs(b)})`;
      return {
        enonce: `Donner le signe de $f(x) = ${aff_a}${aff_b}$ selon les valeurs de $x$.`,
        corrige: `$f$ s'annule en $${a}$ et $${b}$. $f(x) > 0$ pour $x < ${a}$ ou $x > ${b}$ ; $f(x) < 0$ pour $${a} < x < ${b}$.`
      };
    } else if (d === 2) {
      // Moyen : (ax + b)(cx + d) avec coefficients à analyser
      const a = randNonZero(1, 4);
      const b = randNonZero(-9, 9);
      const c = randNonZero(1, 4);
      const d_ = randNonZero(-9, 9);
      const x1 = -b/a;
      const x2 = -d_/c;
      const [r1, r2] = x1 < x2 ? [x1, x2] : [x2, x1];
      const signB = b >= 0 ? '+' : '-';
      const absB = Math.abs(b);
      const signD = d_ >= 0 ? '+' : '-';
      const absD = Math.abs(d_);
      // Le signe à l'extérieur des racines dépend du signe du coefficient dominant a*c
      const signExt = (a*c) > 0 ? '+' : '-';
      const signInt = signExt === '+' ? '-' : '+';
      return {
        enonce: `Donner le signe de $f(x) = (${a}x ${signB} ${absB})(${c}x ${signD} ${absD})$ selon les valeurs de $x$.`,
        corrige: `Racines : $x_1 = ${x1}$ et $x_2 = ${x2}$. Coefficient dominant $${a*c}$. Signe $${signExt}$ à l'extérieur de $[${r1}\\,;\\,${r2}]$, signe $${signInt}$ à l'intérieur.`
      };
    } else {
      // Difficile : forme moins évidente
      const a = rand(2, 5);
      const r1 = randNonZero(-5, 5);
      const r2 = randNonZero(-5, 5);
      // Construire (ax + b)(x + c) = 0 avec racines r1 = -b/a et r2 = -c
      const b = -a * r1;
      const c = -r2;
      const [rm, rM] = r1 < r2 ? [r1, r2] : [r2, r1];
      const signB = b >= 0 ? '+' : '-';
      const absB = Math.abs(b);
      const signC = c >= 0 ? '+' : '-';
      const absC = Math.abs(c);
      // a > 0 et coef de x dans (x + c) = 1 > 0, donc coef dominant positif
      return {
        enonce: `Donner le signe de $f(x) = (${a}x ${signB} ${absB})(x ${signC} ${absC})$ selon les valeurs de $x$.`,
        corrige: `Racines : $x_1 = ${r1}$ et $x_2 = ${r2}$. Coefficient dominant $${a} > 0$. Signe positif à l'extérieur de $[${rm}\\,;\\,${rM}]$, négatif à l'intérieur.`
      };
    }
  },

  ca07_degre3: (d) => {
    if (d === 1) {
      // Facile : (x − a)(x − b)(x − c) avec a < b < c, racines entières
      let racines = [];
      while (racines.length < 3) {
        const r = rand(-5, 5);
        if (!racines.includes(r)) racines.push(r);
      }
      racines.sort((a, b) => a - b);
      const [r1, r2, r3] = racines;
      const aff = (r) => `(x ${r >= 0 ? '-' : '+'} ${Math.abs(r)})`;
      // Coefficient dominant = 1 (positif), signe à droite +
      // Tableau : +, +, -, +, ... non, c'est : à droite de r3 : +, entre r2 et r3 : -, entre r1 et r2 : +, à gauche de r1 : -
      return {
        enonce: `Donner le signe de $f(x) = ${aff(r1)}${aff(r2)}${aff(r3)}$ selon les valeurs de $x$.`,
        corrige: `$f$ s'annule en $${r1}$, $${r2}$ et $${r3}$. Coefficient dominant $1 > 0$, donc à droite de la plus grande racine ($x > ${r3}$), $f(x) > 0$. En changeant de signe à chaque racine : $f(x) > 0$ sur $]${r1}\\,;\\,${r2}[$ et sur $]${r3}\\,;\\,+\\infty[$ ; $f(x) < 0$ sur $]-\\infty\\,;\\,${r1}[$ et sur $]${r2}\\,;\\,${r3}[$.`
      };
    } else if (d === 2) {
      // Moyen : a(x − r1)(x − r2)(x − r3) avec coefficient dominant a éventuellement négatif
      let racines = [];
      while (racines.length < 3) {
        const r = rand(-4, 4);
        if (!racines.includes(r)) racines.push(r);
      }
      racines.sort((a, b) => a - b);
      const [r1, r2, r3] = racines;
      const a = pick([2, 3, -2, -3]);
      const aff = (r) => `(x ${r >= 0 ? '-' : '+'} ${Math.abs(r)})`;
      const signA = a > 0;
      // Signe à droite de r3 : même signe que a (car (x-r1)(x-r2)(x-r3) > 0 pour x grand)
      const signDr = signA ? '+' : '-';
      const signEntr3r2 = signA ? '-' : '+';
      const signEntr2r1 = signA ? '+' : '-';
      const signG = signA ? '-' : '+';
      return {
        enonce: `Donner le signe de $f(x) = ${a}${aff(r1)}${aff(r2)}${aff(r3)}$ selon les valeurs de $x$.`,
        corrige: `Racines : $${r1}$, $${r2}$, $${r3}$. Coefficient dominant $${a}$ ${signA ? 'positif' : 'négatif'}, donc le signe à droite de $${r3}$ est $${signDr}$. En changeant de signe à chaque racine : signe de $f$ — sur $]-\\infty\\,;\\,${r1}[$ : $${signG}$ — sur $]${r1}\\,;\\,${r2}[$ : $${signEntr2r1}$ — sur $]${r2}\\,;\\,${r3}[$ : $${signEntr3r2}$ — sur $]${r3}\\,;\\,+\\infty[$ : $${signDr}$.`
      };
    } else {
      // Difficile : (ax+b)(cx+d)(ex+f) avec coefficients non triviaux
      // On choisit 3 racines distinctes et on construit les facteurs
      const variantes = [
        () => {
          // (x − 1)(x + 2)(2x − 3) — racines : −2, 1, 3/2
          return {
            enonce: `Donner le signe de $f(x) = (x - 1)(x + 2)(2x - 3)$ selon les valeurs de $x$.`,
            corrige: `Racines : $-2$, $1$, $\\dfrac{3}{2}$. Coefficient dominant $1 \\times 1 \\times 2 = 2 > 0$, donc $f(x) > 0$ pour $x$ grand. Tableau : $f(x) < 0$ sur $]-\\infty\\,;\\,-2[$ et $]1\\,;\\,\\dfrac{3}{2}[$ ; $f(x) > 0$ sur $]-2\\,;\\,1[$ et $]\\dfrac{3}{2}\\,;\\,+\\infty[$.`
          };
        },
        () => {
          // (2x + 1)(x − 3)(x + 1) — racines : −1, −1/2, 3
          return {
            enonce: `Donner le signe de $f(x) = (2x + 1)(x - 3)(x + 1)$ selon les valeurs de $x$.`,
            corrige: `Racines : $-1$, $-\\dfrac{1}{2}$, $3$. Coefficient dominant $2 > 0$, donc $f(x) > 0$ pour $x$ grand. Tableau : $f(x) < 0$ sur $]-\\infty\\,;\\,-1[$ et $]-\\dfrac{1}{2}\\,;\\,3[$ ; $f(x) > 0$ sur $]-1\\,;\\,-\\dfrac{1}{2}[$ et $]3\\,;\\,+\\infty[$.`
          };
        },
        () => {
          // −(x − 2)(x + 3)(x − 1) — racines : −3, 1, 2, coef dominant négatif
          return {
            enonce: `Donner le signe de $f(x) = -(x - 2)(x + 3)(x - 1)$ selon les valeurs de $x$.`,
            corrige: `Racines : $-3$, $1$, $2$. Coefficient dominant $-1 < 0$, donc $f(x) < 0$ pour $x$ grand. Tableau : $f(x) > 0$ sur $]-\\infty\\,;\\,-3[$ et $]1\\,;\\,2[$ ; $f(x) < 0$ sur $]-3\\,;\\,1[$ et $]2\\,;\\,+\\infty[$.`
          };
        }
      ];
      return pick(variantes)();
    }
  },

  ev01_aug: (d) => {
    if (d === 1) {
      // Facile : pourcentages "ronds" 10, 20, 25, 50%
      const t = pick([10, 20, 25, 50]);
      const k = 1 + t/100;
      return {
        enonce: `Augmenter une quantité de $${t}\\,\\%$ revient à la multiplier par quel coefficient ?`,
        corrige: `Augmenter de $${t}\\,\\%$ revient à multiplier par $1 + \\dfrac{${t}}{100} = ${k}$.`
      };
    } else if (d === 2) {
      // Moyen : pourcentages variés
      const t = pick([5, 12, 15, 18, 30, 35, 40, 75]);
      const k = 1 + t/100;
      const variantes = [
        () => ({ enonce: `Augmenter une quantité de $${t}\\,\\%$ revient à la multiplier par :`,
                 corrige: `$1 + \\dfrac{${t}}{100} = ${k}$.` }),
        () => ({ enonce: `Un prix augmente de $${t}\\,\\%$. Le coefficient multiplicateur est :`,
                 corrige: `$1 + \\dfrac{${t}}{100} = ${k}$.` })
      ];
      return pick(variantes)();
    } else {
      // Difficile : sens inverse ou variations supérieures à 100%
      const variantes = [
        () => {
          const k = pick([1.02, 1.075, 1.125, 1.34, 1.7]);
          const t = ((k - 1) * 100);
          const tAff = Number.isInteger(t) ? t : t.toFixed(1).replace('.', ',');
          return { enonce: `Multiplier une quantité par $${k.toString().replace('.', ',')}$ revient à l'augmenter de :`,
                   corrige: `$${k.toString().replace('.', ',')} = 1 + \\dfrac{${tAff}}{100}$, soit une augmentation de $${tAff}\\,\\%$.` };
        },
        () => {
          const t = pick([150, 200, 300]);
          const k = 1 + t/100;
          return { enonce: `Augmenter une quantité de $${t}\\,\\%$ revient à la multiplier par :`,
                   corrige: `$1 + \\dfrac{${t}}{100} = ${k}$.` };
        }
      ];
      return pick(variantes)();
    }
  },

  ev01_dim: (d) => {
    if (d === 1) {
      const t = pick([10, 20, 25, 50]);
      const k = 1 - t/100;
      return {
        enonce: `Diminuer une quantité de $${t}\\,\\%$ revient à la multiplier par quel coefficient ?`,
        corrige: `Diminuer de $${t}\\,\\%$ revient à multiplier par $1 - \\dfrac{${t}}{100} = ${k}$.`
      };
    } else if (d === 2) {
      const t = pick([5, 12, 15, 18, 30, 35, 40, 75]);
      const k = 1 - t/100;
      const variantes = [
        () => ({ enonce: `Diminuer une quantité de $${t}\\,\\%$ revient à la multiplier par :`,
                 corrige: `$1 - \\dfrac{${t}}{100} = ${k}$.` }),
        () => ({ enonce: `Un prix baisse de $${t}\\,\\%$. Le coefficient multiplicateur est :`,
                 corrige: `$1 - \\dfrac{${t}}{100} = ${k}$.` })
      ];
      return pick(variantes)();
    } else {
      // Difficile : inverse (du coefficient au pourcentage) ou décimaux
      const variantes = [
        () => {
          const k = pick([0.92, 0.85, 0.66, 0.977, 0.55]);
          const t = ((1 - k) * 100);
          const tAff = Number.isInteger(t) ? t : t.toFixed(1).replace('.', ',');
          return { enonce: `Multiplier une quantité par $${k.toString().replace('.', ',')}$ revient à la diminuer de :`,
                   corrige: `$${k.toString().replace('.', ',')} = 1 - \\dfrac{${tAff}}{100}$, soit une diminution de $${tAff}\\,\\%$.` };
        },
        () => {
          const t = pick([2.5, 7.5, 12.5]);
          const k = 1 - t/100;
          return { enonce: `Diminuer une quantité de $${t.toString().replace('.', ',')}\\,\\%$ revient à la multiplier par :`,
                   corrige: `$1 - \\dfrac{${t.toString().replace('.', ',')}}{100} = ${k.toString().replace('.', ',')}$.` };
        }
      ];
      return pick(variantes)();
    }
  },

  ev02_finale: (d) => {
    if (d === 1) {
      // Facile : valeur initiale "ronde", taux simple
      const v0 = pick([100, 200, 400, 500, 1000]);
      const t = pick([10, 20, 25, 50]);
      const aug = pick([true, false]);
      const k = aug ? 1 + t/100 : 1 - t/100;
      const vf = Math.round(v0 * k * 100) / 100;
      return {
        enonce: `Un prix de $${v0}$ € ${aug ? 'augmente' : 'baisse'} de $${t}\\,\\%$. Quel est le nouveau prix ?`,
        corrige: `Nouveau prix : $${v0} \\times ${aug ? `(1 + \\dfrac{${t}}{100})` : `(1 - \\dfrac{${t}}{100})`} = ${v0} \\times ${k} = ${vf}$ €.`
      };
    } else if (d === 2) {
      // Moyen : valeurs et taux moins ronds
      const v0 = pick([80, 120, 150, 240, 300, 350, 450]);
      const t = pick([5, 12, 15, 30, 40]);
      const aug = pick([true, false]);
      const k = aug ? 1 + t/100 : 1 - t/100;
      const vf = Math.round(v0 * k * 100) / 100;
      return {
        enonce: `Une quantité de $${v0}$ ${aug ? 'augmente' : 'diminue'} de $${t}\\,\\%$. Quelle est sa nouvelle valeur ?`,
        corrige: `Nouvelle valeur : $${v0} \\times ${k} = ${vf}$.`
      };
    } else {
      // Difficile : valeurs avec décimaux
      const variantes = [
        () => {
          const v0 = pick([1500, 2400, 3600]);
          const t = pick([3, 7.5, 12.5, 17, 35]);
          const aug = pick([true, false]);
          const k = aug ? 1 + t/100 : 1 - t/100;
          const vf = Math.round(v0 * k * 100) / 100;
          return { enonce: `Un capital de $${v0}$ € ${aug ? 'augmente' : 'diminue'} de $${t.toString().replace('.', ',')}\\,\\%$. Quelle est la nouvelle valeur ?`,
                   corrige: `Nouvelle valeur : $${v0} \\times ${k.toString().replace('.', ',')} = ${vf.toString().replace('.', ',')}$ €.` };
        }
      ];
      return pick(variantes)();
    }
  },

  ev02_initiale: (d) => {
    if (d === 1) {
      // Facile : valeur finale "ronde", on remonte
      const v0 = pick([100, 200, 400, 500]);
      const t = pick([10, 20, 25, 50]);
      const aug = pick([true, false]);
      const k = aug ? 1 + t/100 : 1 - t/100;
      const vf = Math.round(v0 * k * 100) / 100;
      return {
        enonce: `Après une ${aug ? 'augmentation' : 'baisse'} de $${t}\\,\\%$, un prix vaut $${vf}$ €. Quel était le prix initial ?`,
        corrige: `Si $v_0$ est le prix initial, alors $v_0 \\times ${k} = ${vf}$, donc $v_0 = \\dfrac{${vf}}{${k}} = ${v0}$ €.`
      };
    } else if (d === 2) {
      // Moyen
      const v0 = pick([80, 150, 240, 300, 400]);
      const t = pick([5, 12, 15, 20, 25, 30]);
      const aug = pick([true, false]);
      const k = aug ? 1 + t/100 : 1 - t/100;
      const vf = Math.round(v0 * k * 100) / 100;
      return {
        enonce: `Après une ${aug ? 'augmentation' : 'baisse'} de $${t}\\,\\%$, une quantité vaut $${vf}$. Quelle était sa valeur initiale ?`,
        corrige: `$v_0 \\times ${k} = ${vf}$, donc $v_0 = \\dfrac{${vf}}{${k}} = ${v0}$.`
      };
    } else {
      // Difficile
      const v0 = pick([800, 1200, 2500, 3000]);
      const t = pick([8, 15, 22, 35]);
      const aug = pick([true, false]);
      const k = aug ? 1 + t/100 : 1 - t/100;
      const vf = Math.round(v0 * k * 100) / 100;
      return {
        enonce: `Après une ${aug ? 'augmentation' : 'baisse'} de $${t}\\,\\%$, un capital atteint $${vf}$ €. Calculer la valeur initiale.`,
        corrige: `Le coefficient multiplicateur est $${k}$. La valeur initiale est $v_0 = \\dfrac{${vf}}{${k}} = ${v0}$ €.`
      };
    }
  },

  ev03_calc: (d) => {
    if (d === 1) {
      // Facile : variation "ronde"
      const v0 = pick([100, 200, 500]);
      const t = pick([10, 20, 25, 50]);
      const aug = pick([true, false]);
      const vf = aug ? v0 * (1 + t/100) : v0 * (1 - t/100);
      const k = vf / v0;
      const taux = (k - 1) * 100;
      return {
        enonce: `Un prix passe de $${v0}$ € à $${vf}$ €. Quel est le taux d'évolution ?`,
        corrige: `Coefficient multiplicateur : $\\dfrac{${vf}}{${v0}} = ${k}$. Taux d'évolution : $(${k} - 1) \\times 100 = ${taux}\\,\\%$ (${taux > 0 ? 'augmentation' : 'baisse'}).`
      };
    } else if (d === 2) {
      // Moyen
      const v0 = pick([50, 80, 120, 150, 200, 240]);
      const variations = pick([
        () => Math.round(v0 * 1.12),
        () => Math.round(v0 * 0.85),
        () => Math.round(v0 * 1.30),
        () => Math.round(v0 * 0.75)
      ]);
      const vf = variations();
      const k = vf / v0;
      const taux = Math.round((k - 1) * 100);
      const tauxAff = taux >= 0 ? `+${taux}` : `${taux}`;
      return {
        enonce: `Une valeur passe de $${v0}$ à $${vf}$. Calculer le taux d'évolution en pourcentage.`,
        corrige: `Coefficient : $\\dfrac{${vf}}{${v0}} = ${k}$. Taux : $${tauxAff}\\,\\%$.`
      };
    } else {
      // Difficile : décimaux ou variations non entières
      const v0 = pick([120, 250, 400, 800]);
      const vf = pick([95, 130, 220, 360, 480, 920]);
      const k = vf / v0;
      const taux = Math.round((k - 1) * 100 * 10) / 10;
      const tauxAff = taux >= 0 ? `+${taux.toString().replace('.', ',')}` : `${taux.toString().replace('.', ',')}`;
      return {
        enonce: `Un effectif passe de $${v0}$ à $${vf}$. Calculer le taux d'évolution (arrondi au dixième de %).`,
        corrige: `Coefficient : $\\dfrac{${vf}}{${v0}} \\approx ${k.toFixed(4).replace('.', ',')}$. Taux $\\approx ${tauxAff}\\,\\%$.`
      };
    }
  },

  ev04_2evol: (d) => {
    if (d === 1) {
      // Facile : deux pourcentages simples, valeur ronde
      const variantes = [
        () => {
          const t1 = 10; const t2 = 10;
          const k = 1.10 * 1.10;
          return {
            enonce: `Un prix subit une augmentation de $${t1}\\,\\%$ puis une autre augmentation de $${t2}\\,\\%$. Quel est le coefficient multiplicateur global ?`,
            corrige: `Coefficient global : $1{,}10 \\times 1{,}10 = ${k.toString().replace('.', '{,}')}$, soit une augmentation globale de $${((k-1)*100).toString().replace('.', '{,}')}\\,\\%$.`
          };
        },
        () => {
          const t1 = 20; const t2 = 20;
          const k = 0.80 * 0.80;
          return {
            enonce: `Un prix subit une baisse de $${t1}\\,\\%$ puis une autre baisse de $${t2}\\,\\%$. Quel est le coefficient multiplicateur global ?`,
            corrige: `Coefficient global : $0{,}80 \\times 0{,}80 = ${k.toString().replace('.', '{,}')}$, soit une baisse globale de $${((1-k)*100).toString().replace('.', '{,}')}\\,\\%$.`
          };
        },
        () => {
          const t1 = 5; const t2 = 5;
          const k = 1.05 * 1.05;
          return {
            enonce: `Un placement augmente de $${t1}\\,\\%$ la première année puis de $${t2}\\,\\%$ la deuxième année. Quel est le coefficient multiplicateur global ?`,
            corrige: `Coefficient global : $1{,}05 \\times 1{,}05 = ${k.toString().replace('.', '{,}')}$, soit une augmentation globale de $${((k-1)*100).toFixed(2).replace('.', '{,}')}\\,\\%$.`
          };
        },
        () => {
          const t1 = 50; const t2 = 50;
          const k = 1.50 * 0.50;
          return {
            enonce: `Un prix subit une augmentation de $${t1}\\,\\%$ puis une baisse de $${t2}\\,\\%$. Quel est le coefficient multiplicateur global ?`,
            corrige: `Coefficient global : $1{,}5 \\times 0{,}5 = ${k.toString().replace('.', '{,}')}$, soit une baisse globale de $${((1-k)*100).toString().replace('.', '{,}')}\\,\\%$.`
          };
        }
      ];
      return pick(variantes)();
    } else if (d === 2) {
      // Moyen : aug + baisse ou baisse + aug
      const variantes = [
        () => {
          const t1 = pick([10, 20, 30]);
          const t2 = pick([10, 20, 30]);
          const k1 = 1 + t1/100;
          const k2 = 1 - t2/100;
          const k = k1 * k2;
          const taux = Math.round((k - 1) * 1000) / 10;
          const sens = taux >= 0 ? 'augmentation' : 'baisse';
          return {
            enonce: `Un prix subit une augmentation de $${t1}\\,\\%$ puis une baisse de $${t2}\\,\\%$. Quel est le taux d'évolution global ?`,
            corrige: `Coefficient global : $${k1.toString().replace('.', ',')} \\times ${k2.toString().replace('.', ',')} = ${k.toString().replace('.', ',')}$, soit une ${sens} globale de $${Math.abs(taux).toString().replace('.', ',')}\\,\\%$.`
          };
        },
        () => {
          const t1 = pick([15, 25]);
          const t2 = pick([15, 25]);
          const k1 = 1 - t1/100;
          const k2 = 1 + t2/100;
          const k = k1 * k2;
          const taux = Math.round((k - 1) * 10000) / 100;
          const sens = taux >= 0 ? 'augmentation' : 'baisse';
          return {
            enonce: `Une valeur subit une baisse de $${t1}\\,\\%$ puis une hausse de $${t2}\\,\\%$. Quel est le taux d'évolution global ?`,
            corrige: `Coefficient global : $${k1.toString().replace('.', ',')} \\times ${k2.toString().replace('.', ',')} = ${k.toString().replace('.', ',')}$, soit une ${sens} globale de $${Math.abs(taux).toString().replace('.', ',')}\\,\\%$.`
          };
        }
      ];
      return pick(variantes)();
    } else {
      // Difficile : avec valeurs intermédiaires concrètes
      const variantes = [
        () => {
          const v0 = pick([200, 500, 800]);
          const t1 = pick([12, 18, 25]);
          const t2 = pick([8, 14, 20]);
          const aug1 = pick([true, false]);
          const aug2 = pick([true, false]);
          const k1 = aug1 ? 1 + t1/100 : 1 - t1/100;
          const k2 = aug2 ? 1 + t2/100 : 1 - t2/100;
          const k = k1 * k2;
          const taux = Math.round((k - 1) * 10000) / 100;
          const sens = taux >= 0 ? 'augmentation' : 'baisse';
          return {
            enonce: `Un capital de $${v0}$ € subit une ${aug1 ? 'augmentation' : 'baisse'} de $${t1}\\,\\%$ puis une ${aug2 ? 'augmentation' : 'baisse'} de $${t2}\\,\\%$. Quel est le taux d'évolution global ?`,
            corrige: `Coefficient global : $${k1.toString().replace('.', ',')} \\times ${k2.toString().replace('.', ',')} = ${k.toFixed(4).replace('.', ',')}$, soit une ${sens} globale d'environ $${Math.abs(taux).toString().replace('.', ',')}\\,\\%$.`
          };
        }
      ];
      return pick(variantes)();
    }
  },

  ev05_rec: (d) => {
    if (d === 1) {
      // Facile : pourcentages simples
      const variantes = [
        () => ({
          enonce: `Un prix a baissé de $50\\,\\%$. Quel pourcentage d'augmentation faut-il appliquer pour retrouver le prix initial ?`,
          corrige: `Coefficient de baisse : $0{,}5$. Pour revenir à 1, il faut multiplier par $\\dfrac{1}{0{,}5} = 2$. Augmentation : $200 - 100 = 100\\,\\%$.`
        }),
        () => ({
          enonce: `Un prix a augmenté de $50\\,\\%$. Quel pourcentage de baisse faut-il appliquer pour retrouver le prix initial ?`,
          corrige: `Coefficient d'augmentation : $1{,}5$. Pour revenir à 1, il faut multiplier par $\\dfrac{1}{1{,}5} = \\dfrac{2}{3} \\approx 0{,}667$. Baisse : environ $33{,}3\\,\\%$.`
        }),
        () => ({
          enonce: `Un prix a doublé. Quel pourcentage de baisse faut-il appliquer pour retrouver le prix initial ?`,
          corrige: `Coefficient : $2$. Coefficient réciproque : $\\dfrac{1}{2} = 0{,}5$. Baisse de $50\\,\\%$.`
        }),
        () => ({
          enonce: `Un prix a été divisé par $4$. Quel pourcentage d'augmentation faut-il appliquer pour retrouver le prix initial ?`,
          corrige: `Coefficient : $\\dfrac{1}{4} = 0{,}25$. Coefficient réciproque : $4$. Augmentation : $300\\,\\%$.`
        })
      ];
      return pick(variantes)();
    } else if (d === 2) {
      // Moyen
      const variantes = [
        () => {
          const t = pick([10, 20, 25]);
          const k = 1 - t/100;
          const kRec = 1/k;
          const tRec = Math.round((kRec - 1) * 10000) / 100;
          return {
            enonce: `Un salaire a baissé de $${t}\\,\\%$. Quel pourcentage d'augmentation permet de revenir au salaire initial ?`,
            corrige: `Coefficient de baisse : $${k.toString().replace('.', ',')}$. Coefficient réciproque : $\\dfrac{1}{${k.toString().replace('.', ',')}} \\approx ${kRec.toFixed(4).replace('.', ',')}$. Augmentation nécessaire : environ $${tRec.toString().replace('.', ',')}\\,\\%$.`
          };
        },
        () => {
          const t = pick([20, 25, 40]);
          const k = 1 + t/100;
          const kRec = 1/k;
          const tRec = Math.round((1 - kRec) * 10000) / 100;
          return {
            enonce: `Un prix a augmenté de $${t}\\,\\%$. Quel pourcentage de baisse permet de revenir au prix initial ?`,
            corrige: `Coefficient d'augmentation : $${k.toString().replace('.', ',')}$. Coefficient réciproque : $\\dfrac{1}{${k.toString().replace('.', ',')}} \\approx ${kRec.toFixed(4).replace('.', ',')}$. Baisse nécessaire : environ $${tRec.toString().replace('.', ',')}\\,\\%$.`
          };
        }
      ];
      return pick(variantes)();
    } else {
      // Difficile
      const variantes = [
        () => {
          const t = pick([12, 18, 35]);
          const k = 1 - t/100;
          const kRec = 1/k;
          const tRec = Math.round((kRec - 1) * 10000) / 100;
          return {
            enonce: `Le chiffre d'affaires d'une entreprise a baissé de $${t}\\,\\%$ en 2023. Quel pourcentage d'augmentation en 2024 permettrait de retrouver le niveau initial ?`,
            corrige: `Coefficient 2023 : $${k.toString().replace('.', ',')}$. Pour revenir à 1, coefficient 2024 : $\\dfrac{1}{${k.toString().replace('.', ',')}} \\approx ${kRec.toFixed(4).replace('.', ',')}$. Augmentation : environ $${tRec.toString().replace('.', ',')}\\,\\%$.`
          };
        },
        () => {
          const t = pick([30, 50, 60, 75]);
          const k = 1 + t/100;
          const kRec = 1/k;
          const tRec = Math.round((1 - kRec) * 10000) / 100;
          return {
            enonce: `Un capital a augmenté de $${t}\\,\\%$. Quel pourcentage de baisse permet de revenir à la valeur initiale ?`,
            corrige: `Coefficient : $${k.toString().replace('.', ',')}$. Coefficient réciproque : $\\dfrac{1}{${k.toString().replace('.', ',')}} \\approx ${kRec.toFixed(4).replace('.', ',')}$. Baisse : environ $${tRec.toString().replace('.', ',')}\\,\\%$.`
          };
        }
      ];
      return pick(variantes)();
    }
  },

  ev06_calcul: (d) => {
    if (d === 1) {
      // Facile : valeur de référence simple, indice direct
      const variantes = [
        () => {
          const ref = pick([100, 200, 400, 500]);
          const nouv = pick([110, 120, 80, 90, 150]);
          const indice = (nouv / ref * 100).toFixed(1).replace(/\.0$/, '');
          return {
            enonce: `Une grandeur valait $${ref}$ en année de référence (base 100) et vaut $${nouv}$ aujourd'hui. Calculer son indice.`,
            corrige: `Indice $= \\dfrac{\\text{valeur actuelle}}{\\text{valeur de référence}} \\times 100 = \\dfrac{${nouv}}{${ref}} \\times 100 = ${indice}$.`
          };
        },
        () => {
          const ref = 50;
          const nouv = pick([55, 60, 75, 40, 45]);
          const indice = (nouv / ref * 100);
          return {
            enonce: `Le prix d'un produit valait $${ref}$ € en année de référence et vaut $${nouv}$ € aujourd'hui. Calculer son indice (base 100).`,
            corrige: `Indice $= \\dfrac{${nouv}}{${ref}} \\times 100 = ${indice}$.`
          };
        }
      ];
      return pick(variantes)();
    } else if (d === 2) {
      // Moyen : valeurs réelles, arrondi nécessaire
      const ref = pick([1250, 1500, 1800, 2400, 3200]);
      const taux = pick([5, 8, 12, -3, -7, 15, 20]);
      const nouv = Math.round(ref * (1 + taux/100));
      const indice = (nouv / ref * 100).toFixed(2).replace(/\.?0+$/, '').replace('.', ',');
      return {
        enonce: `En 2020 (année de référence), le chiffre d'affaires d'une entreprise était de $${ref}$ k€. En 2024, il est de $${nouv}$ k€. Calculer l'indice de $2024$ (base 100 en $2020$), arrondi au centième.`,
        corrige: `Indice $= \\dfrac{${nouv}}{${ref}} \\times 100 \\approx ${indice}$.`
      };
    } else {
      // Difficile : trouver une valeur connaissant un indice
      const ref = pick([2400, 3500, 4800, 5200]);
      const indice = pick([108, 115, 92, 87, 125, 78]);
      const nouv = Math.round(ref * indice / 100);
      return {
        enonce: `L'indice du chiffre d'affaires en 2024 est de $${indice}$ (base 100 en 2020). Le chiffre d'affaires de 2020 était $${ref}$ k€. Quel est celui de 2024 ?`,
        corrige: `Chiffre d'affaires 2024 $= \\text{Indice} \\times \\dfrac{\\text{valeur de réf.}}{100} = ${indice} \\times \\dfrac{${ref}}{100} = ${nouv}$ k€.`
      };
    }
  },

  ev06_interp: (d) => {
    if (d === 1) {
      // Facile : indice > 100 ou < 100, interprétation simple
      const variantes = [
        () => {
          const indice = pick([105, 110, 120, 150]);
          const taux = indice - 100;
          return {
            enonce: `L'indice d'une grandeur est de $${indice}$ (base 100). Que peut-on en déduire sur son évolution ?`,
            corrige: `La grandeur a augmenté. Le taux d'évolution est de $${indice} - 100 = ${taux}\\,\\%$.`
          };
        },
        () => {
          const indice = pick([95, 90, 80, 75]);
          const taux = 100 - indice;
          return {
            enonce: `L'indice d'une grandeur est de $${indice}$ (base 100). Que peut-on en déduire sur son évolution ?`,
            corrige: `La grandeur a baissé. Le taux d'évolution est de $${indice} - 100 = -${taux}\\,\\%$ (baisse de $${taux}\\,\\%$).`
          };
        }
      ];
      return pick(variantes)();
    } else if (d === 2) {
      // Moyen : indice décimal, interprétation précise
      const variantes = [
        () => {
          const indice = pick([103.5, 108.2, 112.7, 117.3]);
          const taux = (indice - 100).toFixed(1).replace('.', ',');
          return {
            enonce: `L'indice du prix d'un produit en 2024 est de $${indice.toString().replace('.', ',')}$ (base 100 en 2020). Donner le taux d'évolution entre 2020 et 2024.`,
            corrige: `Le taux d'évolution est : $${indice.toString().replace('.', ',')} - 100 = ${taux}\\,\\%$ (augmentation).`
          };
        },
        () => {
          const indice = pick([93.8, 88.5, 96.4]);
          const taux = (100 - indice).toFixed(1).replace('.', ',');
          return {
            enonce: `L'indice du prix d'un produit en 2024 est de $${indice.toString().replace('.', ',')}$ (base 100 en 2020). Donner le taux d'évolution entre 2020 et 2024.`,
            corrige: `Le taux d'évolution est : $${indice.toString().replace('.', ',')} - 100 = -${taux}\\,\\%$ (baisse de $${taux}\\,\\%$).`
          };
        }
      ];
      return pick(variantes)();
    } else {
      // Difficile : comparer plusieurs indices, ou interpréter la phrase de référence
      const variantes = [
        () => ({
          enonce: `L'indice de la production agricole d'un pays est passé de $100$ en 2010 à $128$ en 2020, puis $122$ en 2023. Comparer la production de 2023 à celle de 2010 et à celle de 2020.`,
          corrige: `Par rapport à 2010 (base 100) : la production a augmenté de $122 - 100 = 22\\,\\%$. Par rapport à 2020 : la production a baissé. Taux d'évolution entre 2020 et 2023 : $\\dfrac{122 - 128}{128} \\times 100 \\approx -4{,}69\\,\\%$.`
        }),
        () => ({
          enonce: `Une grandeur a un indice de $115$ en 2024 (base 100 en 2020). Une autre grandeur a un indice de $108$ en 2024 (base 100 en 2020). Laquelle a connu la plus forte augmentation et de combien ?`,
          corrige: `La première grandeur a augmenté de $15\\,\\%$ et la seconde de $8\\,\\%$. La première a connu la plus forte augmentation, avec $15 - 8 = 7$ points de pourcentage d'écart.`
        })
      ];
      return pick(variantes)();
    }
  },

  ev06_indice_taux: (d) => {
    if (d === 1) {
      // Facile : convertir indice → taux ou taux → indice (cas simples)
      const variantes = [
        () => {
          const taux = pick([5, 10, 15, 20, 25]);
          const indice = 100 + taux;
          return {
            enonce: `Une grandeur a augmenté de $${taux}\\,\\%$. Quel est l'indice correspondant (base 100) ?`,
            corrige: `Indice $= 100 + ${taux} = ${indice}$.`
          };
        },
        () => {
          const taux = pick([5, 10, 15, 20, 25]);
          const indice = 100 - taux;
          return {
            enonce: `Une grandeur a diminué de $${taux}\\,\\%$. Quel est l'indice correspondant (base 100) ?`,
            corrige: `Indice $= 100 - ${taux} = ${indice}$.`
          };
        },
        () => {
          const indice = pick([105, 112, 130, 95, 88]);
          const taux = indice - 100;
          const sens = taux >= 0 ? 'augmentation' : 'baisse';
          return {
            enonce: `L'indice est de $${indice}$. Quel est le taux d'évolution correspondant ?`,
            corrige: `Taux $= ${indice} - 100 = ${taux >= 0 ? '' : ''}${taux}\\,\\%$ (${sens} de $${Math.abs(taux)}\\,\\%$).`
          };
        }
      ];
      return pick(variantes)();
    } else if (d === 2) {
      // Moyen : avec décimales
      const variantes = [
        () => {
          const taux = pick([3.5, 7.2, 12.4, 18.6]);
          const indice = (100 + taux).toString().replace('.', '{,}');
          return {
            enonce: `Une grandeur a augmenté de $${taux.toString().replace('.', ',')}\\,\\%$. Quel est l'indice ?`,
            corrige: `Indice $= 100 + ${taux.toString().replace('.', ',')} = ${indice}$.`
          };
        },
        () => {
          const indice = pick([103.5, 108.2, 117.3, 92.8, 86.5]);
          const taux = (indice - 100).toFixed(1).replace('.', ',');
          const sens = indice >= 100 ? 'augmentation' : 'baisse';
          return {
            enonce: `L'indice d'une grandeur est de $${indice.toString().replace('.', ',')}$. Donner le taux d'évolution correspondant.`,
            corrige: `Taux $= ${indice.toString().replace('.', ',')} - 100 = ${taux}\\,\\%$ (${sens}).`
          };
        }
      ];
      return pick(variantes)();
    } else {
      // Difficile : indices successifs, calcul de taux global
      const variantes = [
        () => ({
          enonce: `L'indice d'une grandeur est passé de $112$ en 2022 à $124$ en 2024 (base 100 en 2020). Quel est le taux d'évolution entre 2022 et 2024 ?`,
          corrige: `Taux entre 2022 et 2024 : $\\dfrac{124 - 112}{112} \\times 100 \\approx 10{,}71\\,\\%$.`
        }),
        () => ({
          enonce: `En 2024, l'indice d'une grandeur est de $115$ (base 100 en 2020). De combien doit-il évoluer pour atteindre $130$ ?`,
          corrige: `Taux : $\\dfrac{130 - 115}{115} \\times 100 \\approx 13{,}04\\,\\%$ de croissance nécessaire.`
        }),
        () => ({
          enonce: `Une grandeur a augmenté de $15\\,\\%$ entre 2020 et 2022, puis de $8\\,\\%$ entre 2022 et 2024. Quel est l'indice en 2024 (base 100 en 2020) ?`,
          corrige: `Coefficient global : $1{,}15 \\times 1{,}08 = 1{,}242$. Indice $= 100 \\times 1{,}242 = 124{,}2$.`
        })
      ];
      return pick(variantes)();
    }
  },

  cn01_diff: (d) => {
    if (d === 1) {
      const a = rand(2, 12);
      const b = rand(2, 12);
      const diff = a - b;
      const comp = diff > 0 ? '>' : (diff < 0 ? '<' : '=');
      return {
        enonce: `Comparer $${a}$ et $${b}$ en étudiant le signe de leur différence.`,
        corrige: `$${a} - ${b} = ${diff}$. Cette différence est ${diff > 0 ? 'positive' : diff < 0 ? 'négative' : 'nulle'}, donc $${a} ${comp} ${b}$.`
      };
    } else if (d === 2) {
      const variantes = [
        () => {
          const a = pick([0.7, 0.8, 0.9, 0.65]);
          const b = pick([3/4, 5/6, 7/8]);
          const diff = a - b;
          const comp = diff > 0 ? '>' : '<';
          const bAff = b === 3/4 ? '\\dfrac{3}{4}' : b === 5/6 ? '\\dfrac{5}{6}' : '\\dfrac{7}{8}';
          return { enonce: `Comparer $${a.toString().replace('.', ',')}$ et $${bAff}$.`,
                   corrige: `On calcule la différence : $${a.toString().replace('.', ',')} - ${bAff} \\approx ${diff.toFixed(3).replace('.', ',')}$. ${diff > 0 ? 'Positive' : 'Négative'}, donc $${a.toString().replace('.', ',')} ${comp} ${bAff}$.` };
        },
        () => {
          const a = rand(-12, -2);
          const b = rand(-12, -2);
          const diff = a - b;
          const comp = diff > 0 ? '>' : (diff < 0 ? '<' : '=');
          return { enonce: `Comparer $${a}$ et $${b}$ en étudiant le signe de leur différence.`,
                   corrige: `$${a} - (${b}) = ${diff}$. ${diff > 0 ? 'Positive' : diff < 0 ? 'Négative' : 'Nulle'}, donc $${a} ${comp} ${b}$.` };
        }
      ];
      return pick(variantes)();
    } else {
      // Difficile : expressions
      const a = rand(2, 9), b = rand(2, 9);
      const variantes = [
        () => ({
          enonce: `Comparer $A = ${a}^2 + ${b}^2$ et $B = (${a} + ${b})^2$.`,
          corrige: `$B - A = (${a} + ${b})^2 - ${a}^2 - ${b}^2 = 2 \\times ${a} \\times ${b} = ${2*a*b}$, positif. Donc $B > A$.`
        }),
        () => ({
          enonce: `Soit $x > 0$. Comparer $A = x^2 + 1$ et $B = 2x$.`,
          corrige: `$A - B = x^2 - 2x + 1 = (x - 1)^2 \\ge 0$, donc $A \\ge B$ (égalité ssi $x = 1$).`
        })
      ];
      return pick(variantes)();
    }
  },

  cn01_quot: (d) => {
    if (d === 1) {
      const a = rand(20, 80);
      const b = rand(10, a-1);
      const q = a/b;
      return {
        enonce: `Comparer $${a}$ et $${b}$ en étudiant leur quotient ($${a}, ${b} > 0$).`,
        corrige: `$\\dfrac{${a}}{${b}} \\approx ${q.toFixed(2).replace('.', ',')}$. Comme $\\dfrac{${a}}{${b}} > 1$, on a $${a} > ${b}$.`
      };
    } else if (d === 2) {
      const variantes = [
        () => {
          const a = pick([1.5, 2.5, 3.5]); const b = pick([1.2, 2.2, 3.2]);
          const q = a/b;
          const comp = q > 1 ? '>' : '<';
          return { enonce: `Comparer $${a.toString().replace('.', ',')}$ et $${b.toString().replace('.', ',')}$ par leur quotient.`,
                   corrige: `$\\dfrac{${a.toString().replace('.', ',')}}{${b.toString().replace('.', ',')}} \\approx ${q.toFixed(3).replace('.', ',')}$. ${q > 1 ? 'Supérieur' : 'Inférieur'} à 1, donc $${a.toString().replace('.', ',')} ${comp} ${b.toString().replace('.', ',')}$.` };
        }
      ];
      return pick(variantes)();
    } else {
      const variantes = [
        () => ({
          enonce: `Comparer $A = \\dfrac{12}{17}$ et $B = \\dfrac{19}{24}$.`,
          corrige: `$\\dfrac{A}{B} = \\dfrac{12}{17} \\times \\dfrac{24}{19} = \\dfrac{288}{323} < 1$, donc $A < B$.`
        }),
        () => ({
          enonce: `Soient $x, y > 0$. Comparer $A = \\dfrac{x+1}{y+1}$ et $B = \\dfrac{x}{y}$ quand $x < y$.`,
          corrige: `$A - B = \\dfrac{(x+1)y - x(y+1)}{y(y+1)} = \\dfrac{y - x}{y(y+1)}$. Si $x < y$, alors $y - x > 0$, donc $A > B$.`
        }),
        () => ({
          enonce: `Comparer $C = \\dfrac{7}{11}$ et $D = \\dfrac{9}{14}$ par leur différence.`,
          corrige: `$C - D = \\dfrac{7 \\times 14 - 9 \\times 11}{11 \\times 14} = \\dfrac{98 - 99}{154} = -\\dfrac{1}{154} < 0$. Donc $C < D$.`
        }),
        () => ({
          enonce: `Comparer $E = \\dfrac{15}{22}$ et $F = \\dfrac{23}{34}$ en étudiant leur quotient.`,
          corrige: `$\\dfrac{E}{F} = \\dfrac{15}{22} \\times \\dfrac{34}{23} = \\dfrac{510}{506} > 1$. Donc $E > F$.`
        })
      ];
      return pick(variantes)();
    }
  },

  cn03_prod: (d) => {
    if (d === 1) {
      const a = pick([2, 3, 5, 10]);
      const n = rand(2, 5);
      const m = rand(2, 5);
      return {
        enonce: `Écrire $${a}^${n} \\times ${a}^${m}$ sous la forme d'une seule puissance.`,
        corrige: `$${a}^${n} \\times ${a}^${m} = ${a}^{${n}+${m}} = ${a}^{${n+m}}$.`
      };
    } else if (d === 2) {
      const a = pick([2, 3, 5, 10, 7]);
      const n = randNonZero(-4, 5);
      const m = randNonZero(-4, 5);
      const s = n + m;
      return {
        enonce: `Simplifier $${a}^{${n}} \\times ${a}^{${m}}$.`,
        corrige: `$${a}^{${n}} \\times ${a}^{${m}} = ${a}^{${n}+(${m})} = ${a}^{${s}}$.`
      };
    } else {
      const variantes = [
        () => {
          const n = rand(2, 5), m = rand(2, 5), p = rand(2, 4);
          return { enonce: `Simplifier $10^${n} \\times 10^${m} \\times 10^${p}$.`,
                   corrige: `$10^${n} \\times 10^${m} \\times 10^${p} = 10^{${n+m+p}}$.` };
        },
        () => {
          const a = pick([2, 3, 10]); const n = rand(2, 5); const m = rand(2, 4);
          return { enonce: `Écrire $${a*a}^${n} \\times ${a}^${m}$ comme une puissance de $${a}$.`,
                   corrige: `$${a*a}^${n} = (${a}^2)^${n} = ${a}^{${2*n}}$, donc $${a*a}^${n} \\times ${a}^${m} = ${a}^{${2*n+m}}$.` };
        }
      ];
      return pick(variantes)();
    }
  },

  cn03_quot: (d) => {
    if (d === 1) {
      const a = pick([2, 3, 5, 10]);
      const n = rand(4, 8);
      const m = rand(2, n-1);
      return {
        enonce: `Simplifier $\\dfrac{${a}^${n}}{${a}^${m}}$.`,
        corrige: `$\\dfrac{${a}^${n}}{${a}^${m}} = ${a}^{${n}-${m}} = ${a}^{${n-m}}$.`
      };
    } else if (d === 2) {
      const a = pick([2, 3, 5, 10]);
      const n = randNonZero(-5, 8);
      const m = randNonZero(-5, 8);
      const diff = n - m;
      return {
        enonce: `Simplifier $\\dfrac{${a}^{${n}}}{${a}^{${m}}}$.`,
        corrige: `$\\dfrac{${a}^{${n}}}{${a}^{${m}}} = ${a}^{${n}-(${m})} = ${a}^{${diff}}$.`
      };
    } else {
      const variantes = [
        () => ({
          enonce: `Simplifier $\\dfrac{10^{-5}}{10^{8}}$.`,
          corrige: `$\\dfrac{10^{-5}}{10^{8}} = 10^{-5-8} = 10^{-13}$.`
        }),
        () => {
          const n = rand(3, 6); const m = rand(2, 5);
          return { enonce: `Écrire $\\dfrac{10^{${n}}}{5^{${m}}}$ sous une forme simplifiée.`,
                   corrige: `$\\dfrac{10^{${n}}}{5^{${m}}} = \\dfrac{2^{${n}} \\times 5^{${n}}}{5^{${m}}} = 2^{${n}} \\times 5^{${n-m}}$.` };
        }
      ];
      return pick(variantes)();
    }
  },

  cn03_puiss_puiss: (d) => {
    if (d === 1) {
      const a = pick([2, 3, 5, 10]);
      const n = rand(2, 4);
      const m = rand(2, 4);
      return {
        enonce: `Écrire $(${a}^${n})^${m}$ sous la forme d'une seule puissance.`,
        corrige: `$(${a}^${n})^${m} = ${a}^{${n} \\times ${m}} = ${a}^{${n*m}}$.`
      };
    } else if (d === 2) {
      const a = pick([2, 3, 5, 10]);
      const n = randNonZero(-4, 4);
      const m = randNonZero(-3, 4);
      return {
        enonce: `Simplifier $(${a}^{${n}})^{${m}}$.`,
        corrige: `$(${a}^{${n}})^{${m}} = ${a}^{${n} \\times ${m}} = ${a}^{${n*m}}$.`
      };
    } else {
      const variantes = [
        () => ({
          enonce: `Simplifier $(2^{-4})^{3}$.`,
          corrige: `$(2^{-4})^{3} = 2^{-12}$.`
        }),
        () => {
          const a = pick([2, 3, 5]); const n = rand(2, 4); const m = rand(2, 3); const p = rand(2, 3);
          return { enonce: `Simplifier $\\left((${a}^${n})^${m}\\right)^${p}$.`,
                   corrige: `$\\left((${a}^${n})^${m}\\right)^${p} = ${a}^{${n*m*p}}$.` };
        }
      ];
      return pick(variantes)();
    }
  },

  cn04_dec_frac: (d) => {
    if (d === 1) {
      const variantes = [
        () => ({ enonce: `Écrire $0{,}5$ sous forme de fraction irréductible.`, corrige: `$0{,}5 = \\dfrac{1}{2}$.` }),
        () => ({ enonce: `Écrire $0{,}25$ sous forme de fraction irréductible.`, corrige: `$0{,}25 = \\dfrac{1}{4}$.` }),
        () => ({ enonce: `Écrire $0{,}75$ sous forme de fraction irréductible.`, corrige: `$0{,}75 = \\dfrac{3}{4}$.` }),
        () => ({ enonce: `Écrire $\\dfrac{3}{4}$ sous forme décimale.`, corrige: `$\\dfrac{3}{4} = 0{,}75$.` }),
        () => ({ enonce: `Écrire $\\dfrac{1}{5}$ sous forme décimale.`, corrige: `$\\dfrac{1}{5} = 0{,}2$.` })
      ];
      return pick(variantes)();
    } else if (d === 2) {
      const variantes = [
        () => ({ enonce: `Écrire $\\dfrac{7}{8}$ sous forme décimale.`, corrige: `$\\dfrac{7}{8} = 0{,}875$.` }),
        () => ({ enonce: `Écrire $0{,}125$ sous forme de fraction irréductible.`, corrige: `$0{,}125 = \\dfrac{125}{1000} = \\dfrac{1}{8}$.` }),
        () => ({ enonce: `Écrire $1{,}6$ sous forme de fraction irréductible.`, corrige: `$1{,}6 = \\dfrac{16}{10} = \\dfrac{8}{5}$.` }),
        () => ({ enonce: `Écrire $\\dfrac{9}{4}$ sous forme décimale.`, corrige: `$\\dfrac{9}{4} = 2{,}25$.` })
      ];
      return pick(variantes)();
    } else {
      const variantes = [
        () => ({ enonce: `Écrire $\\dfrac{7}{16}$ sous forme décimale.`, corrige: `$\\dfrac{7}{16} = 0{,}4375$.` }),
        () => ({ enonce: `Écrire $0{,}\\overline{3}$ (c'est-à-dire $0{,}333...$) sous forme de fraction irréductible.`,
                 corrige: `Soit $x = 0{,}333...$. Alors $10x = 3{,}333...$ donc $10x - x = 3$, soit $9x = 3$ et $x = \\dfrac{1}{3}$.` }),
        () => ({ enonce: `Donner la valeur décimale exacte de $\\dfrac{5}{6}$.`,
                 corrige: `$\\dfrac{5}{6} = 0{,}8\\overline{3}$ (illimité périodique).` })
      ];
      return pick(variantes)();
    }
  },

  cn04_dec_pct: (d) => {
    if (d === 1) {
      const variantes = [
        () => ({ enonce: `Convertir $25\\,\\%$ en écriture décimale.`, corrige: `$25\\,\\% = \\dfrac{25}{100} = 0{,}25$.` }),
        () => ({ enonce: `Convertir $50\\,\\%$ en écriture décimale.`, corrige: `$50\\,\\% = 0{,}5$.` }),
        () => ({ enonce: `Convertir $0{,}3$ en pourcentage.`, corrige: `$0{,}3 = \\dfrac{30}{100} = 30\\,\\%$.` }),
        () => ({ enonce: `Convertir $0{,}75$ en pourcentage.`, corrige: `$0{,}75 = 75\\,\\%$.` })
      ];
      return pick(variantes)();
    } else if (d === 2) {
      const variantes = [
        () => ({ enonce: `Convertir $12{,}5\\,\\%$ en écriture décimale.`, corrige: `$12{,}5\\,\\% = 0{,}125$.` }),
        () => ({ enonce: `Convertir $0{,}085$ en pourcentage.`, corrige: `$0{,}085 = 8{,}5\\,\\%$.` }),
        () => ({ enonce: `Convertir $7{,}25\\,\\%$ en écriture décimale.`, corrige: `$7{,}25\\,\\% = 0{,}0725$.` }),
        () => ({ enonce: `Convertir $1{,}2$ en pourcentage.`, corrige: `$1{,}2 = 120\\,\\%$.` })
      ];
      return pick(variantes)();
    } else {
      const variantes = [
        () => ({ enonce: `Convertir $0{,}00375$ en pourcentage.`, corrige: `$0{,}00375 = 0{,}375\\,\\%$.` }),
        () => ({ enonce: `Convertir $250\\,\\%$ en écriture décimale.`, corrige: `$250\\,\\% = 2{,}5$.` }),
        () => ({ enonce: `Une variation de $\\dfrac{3}{8}$ correspond à quel pourcentage ?`,
                 corrige: `$\\dfrac{3}{8} = 0{,}375 = 37{,}5\\,\\%$.` })
      ];
      return pick(variantes)();
    }
  },

  cn04_frac_pct: (d) => {
    if (d === 1) {
      const variantes = [
        () => ({ enonce: `Convertir $\\dfrac{1}{4}$ en pourcentage.`, corrige: `$\\dfrac{1}{4} = 0{,}25 = 25\\,\\%$.` }),
        () => ({ enonce: `Convertir $\\dfrac{1}{2}$ en pourcentage.`, corrige: `$\\dfrac{1}{2} = 50\\,\\%$.` }),
        () => ({ enonce: `Convertir $\\dfrac{3}{4}$ en pourcentage.`, corrige: `$\\dfrac{3}{4} = 75\\,\\%$.` }),
        () => ({ enonce: `Convertir $20\\,\\%$ en fraction irréductible.`, corrige: `$20\\,\\% = \\dfrac{20}{100} = \\dfrac{1}{5}$.` })
      ];
      return pick(variantes)();
    } else if (d === 2) {
      const variantes = [
        () => ({ enonce: `Convertir $\\dfrac{1}{8}$ en pourcentage.`, corrige: `$\\dfrac{1}{8} = 0{,}125 = 12{,}5\\,\\%$.` }),
        () => ({ enonce: `Convertir $\\dfrac{2}{5}$ en pourcentage.`, corrige: `$\\dfrac{2}{5} = 0{,}4 = 40\\,\\%$.` }),
        () => ({ enonce: `Convertir $15\\,\\%$ en fraction irréductible.`, corrige: `$15\\,\\% = \\dfrac{15}{100} = \\dfrac{3}{20}$.` }),
        () => ({ enonce: `Convertir $\\dfrac{7}{20}$ en pourcentage.`, corrige: `$\\dfrac{7}{20} = 0{,}35 = 35\\,\\%$.` })
      ];
      return pick(variantes)();
    } else {
      const variantes = [
        () => ({ enonce: `Convertir $\\dfrac{3}{8}$ en pourcentage.`, corrige: `$\\dfrac{3}{8} = 0{,}375 = 37{,}5\\,\\%$.` }),
        () => ({ enonce: `Convertir $\\dfrac{5}{16}$ en pourcentage.`, corrige: `$\\dfrac{5}{16} = 0{,}3125 = 31{,}25\\,\\%$.` }),
        () => ({ enonce: `Convertir $66{,}\\overline{6}\\,\\%$ en fraction.`, corrige: `$66{,}\\overline{6}\\,\\% = \\dfrac{2}{3}$.` })
      ];
      return pick(variantes)();
    }
  },

  cn05_estim: (d) => {
    if (d === 1) {
      const variantes = [
        () => ({ enonce: `Donner un ordre de grandeur de $101 \\times 99$.`,
                 corrige: `$101 \\times 99 \\approx 100 \\times 100 = 10\\,000$.` }),
        () => ({ enonce: `Donner un ordre de grandeur de $52 \\times 48$.`,
                 corrige: `$52 \\times 48 \\approx 50 \\times 50 = 2\\,500$.` }),
        () => ({ enonce: `Donner un ordre de grandeur de $\\dfrac{998}{49}$.`,
                 corrige: `$\\dfrac{998}{49} \\approx \\dfrac{1000}{50} = 20$.` })
      ];
      return pick(variantes)();
    } else if (d === 2) {
      const variantes = [
        () => ({ enonce: `Donner un ordre de grandeur de la longueur d'un terrain de football.`,
                 corrige: `Environ $100$ m, soit $1$ hm (hectomètre).` }),
        () => ({ enonce: `Donner un ordre de grandeur de la taille d'une fourmi.`,
                 corrige: `Environ $0{,}5$ cm.` }),
        () => ({ enonce: `Donner un ordre de grandeur de la masse d'un humain adulte.`,
                 corrige: `Environ $70$ kg.` })
      ];
      return pick(variantes)();
    } else {
      const variantes = [
        () => ({ enonce: `Comparer rapidement $\\dfrac{1}{3}$ et $\\dfrac{19}{60}$ par ordre de grandeur.`,
                 corrige: `$\\dfrac{1}{3} = \\dfrac{20}{60}$. Donc $\\dfrac{19}{60} < \\dfrac{20}{60} = \\dfrac{1}{3}$.` }),
        () => ({ enonce: `Donner un ordre de grandeur du nombre de secondes en une année.`,
                 corrige: `$365 \\times 24 \\times 3600 \\approx 400 \\times 25 \\times 4000 = 4 \\times 10^7$ s, environ $3{,}15 \\times 10^7$ s.` }),
        () => ({ enonce: `Donner un ordre de grandeur du nombre de battements de cœur dans une vie humaine de $80$ ans (à raison de $70$ battements/min).`,
                 corrige: `$80 \\times 365 \\times 24 \\times 60 \\times 70 \\approx 80 \\times 365 \\times 1{,}5 \\times 10^5 \\approx 3 \\times 10^9$ battements.` }),
        () => ({ enonce: `Donner un ordre de grandeur de $\\dfrac{6{,}02 \\times 10^{23}}{18}$ (nombre d'atomes dans $1$ g d'eau).`,
                 corrige: `$\\dfrac{6 \\times 10^{23}}{18} \\approx \\dfrac{6}{18} \\times 10^{23} = \\dfrac{1}{3} \\times 10^{23} \\approx 3 \\times 10^{22}$ atomes.` })
      ];
      return pick(variantes)();
    }
  },

  cn06_simpl: (d) => {
    if (d === 1) {
      // Facile : √(a²) = a (a positif)
      const a = rand(2, 9);
      return {
        enonce: `Simplifier $\\sqrt{${a*a}}$.`,
        corrige: `$\\sqrt{${a*a}} = \\sqrt{${a}^2} = ${a}$.`
      };
    } else if (d === 2) {
      // Moyen : √(a²·b) = a√b avec a et b entiers, a² un carré parfait
      const variantes = [
        { a: 2, b: 3, prod: 12 },
        { a: 3, b: 2, prod: 18 },
        { a: 2, b: 5, prod: 20 },
        { a: 5, b: 2, prod: 50 },
        { a: 3, b: 5, prod: 45 },
        { a: 4, b: 3, prod: 48 },
        { a: 2, b: 7, prod: 28 }
      ];
      const v = pick(variantes);
      return {
        enonce: `Simplifier $\\sqrt{${v.prod}}$ en l'écrivant sous la forme $a\\sqrt{b}$ avec $b$ le plus petit possible.`,
        corrige: `$\\sqrt{${v.prod}} = \\sqrt{${v.a*v.a} \\times ${v.b}} = \\sqrt{${v.a*v.a}} \\times \\sqrt{${v.b}} = ${v.a}\\sqrt{${v.b}}$.`
      };
    } else {
      // Difficile : produit ou combinaison à simplifier
      const variantes = [
        () => ({ enonce: `Simplifier $\\sqrt{8} \\times \\sqrt{2}$.`,
                 corrige: `$\\sqrt{8} \\times \\sqrt{2} = \\sqrt{8 \\times 2} = \\sqrt{16} = 4$.` }),
        () => ({ enonce: `Simplifier $\\sqrt{18} \\times \\sqrt{2}$.`,
                 corrige: `$\\sqrt{18} \\times \\sqrt{2} = \\sqrt{36} = 6$.` }),
        () => ({ enonce: `Simplifier $\\sqrt{3} \\times \\sqrt{12}$.`,
                 corrige: `$\\sqrt{3} \\times \\sqrt{12} = \\sqrt{36} = 6$.` }),
        () => ({ enonce: `Simplifier $\\dfrac{\\sqrt{50}}{\\sqrt{2}}$.`,
                 corrige: `$\\dfrac{\\sqrt{50}}{\\sqrt{2}} = \\sqrt{\\dfrac{50}{2}} = \\sqrt{25} = 5$.` })
      ];
      return pick(variantes)();
    }
  },

  cn06_calcul: (d) => {
    if (d === 1) {
      // Facile : produit √a × √b
      const a = pick([2, 3, 5, 6]);
      const b = pick([2, 3, 5, 6]);
      const prod = a*b;
      const racine = Math.sqrt(prod);
      const estEntier = Number.isInteger(racine);
      return {
        enonce: `Calculer $\\sqrt{${a}} \\times \\sqrt{${b}}$.`,
        corrige: `$\\sqrt{${a}} \\times \\sqrt{${b}} = \\sqrt{${a} \\times ${b}} = \\sqrt{${prod}}${estEntier ? ` = ${racine}` : ''}$.`
      };
    } else if (d === 2) {
      // Moyen : somme k√a + m√a
      const a = pick([2, 3, 5, 7]);
      const k = rand(2, 5);
      const m = rand(2, 5);
      const total = k + m;
      return {
        enonce: `Calculer $${k}\\sqrt{${a}} + ${m}\\sqrt{${a}}$.`,
        corrige: `$${k}\\sqrt{${a}} + ${m}\\sqrt{${a}} = (${k} + ${m})\\sqrt{${a}} = ${total}\\sqrt{${a}}$.`
      };
    } else {
      // Difficile : (√a + √b)² ou produit (√a + √b)(√a - √b)
      const variantes = [
        () => {
          const a = pick([2, 3, 5]);
          const b = pick([2, 3, 5]);
          return {
            enonce: `Développer $(\\sqrt{${a}} + \\sqrt{${b}})^2$.`,
            corrige: `$(\\sqrt{${a}} + \\sqrt{${b}})^2 = (\\sqrt{${a}})^2 + 2\\sqrt{${a}}\\sqrt{${b}} + (\\sqrt{${b}})^2 = ${a} + 2\\sqrt{${a*b}} + ${b} = ${a+b} + 2\\sqrt{${a*b}}$.`
          };
        },
        () => {
          const a = pick([3, 5, 7]);
          const b = pick([2, 3, 4]);
          if (a === b) return null;
          return {
            enonce: `Développer $(\\sqrt{${a}} + \\sqrt{${b}})(\\sqrt{${a}} - \\sqrt{${b}})$.`,
            corrige: `Identité remarquable : $(\\sqrt{${a}} + \\sqrt{${b}})(\\sqrt{${a}} - \\sqrt{${b}}) = (\\sqrt{${a}})^2 - (\\sqrt{${b}})^2 = ${a} - ${b} = ${a-b}$.`
          };
        }
      ];
      let res = null, tries = 0;
      while (!res && tries < 10) { res = pick(variantes)(); tries++; }
      return res || { enonce: `Développer $(\\sqrt{5} + \\sqrt{3})(\\sqrt{5} - \\sqrt{3})$.`, corrige: `$(\\sqrt{5})^2 - (\\sqrt{3})^2 = 5 - 3 = 2$.` };
    }
  },

  cn06_ecrire: (d) => {
    if (d === 1) {
      // Facile : nombres comme 12, 18, 20, 50, 8, 27
      const variantes = [
        { n: 8, a: 2, b: 2 },
        { n: 12, a: 2, b: 3 },
        { n: 18, a: 3, b: 2 },
        { n: 20, a: 2, b: 5 },
        { n: 27, a: 3, b: 3 },
        { n: 32, a: 4, b: 2 }
      ];
      const v = pick(variantes);
      return {
        enonce: `Écrire $\\sqrt{${v.n}}$ sous la forme $a\\sqrt{b}$ avec $b$ le plus petit possible.`,
        corrige: `$\\sqrt{${v.n}} = \\sqrt{${v.a*v.a} \\times ${v.b}} = ${v.a}\\sqrt{${v.b}}$.`
      };
    } else if (d === 2) {
      // Moyen : nombres plus grands
      const variantes = [
        { n: 50, a: 5, b: 2 },
        { n: 75, a: 5, b: 3 },
        { n: 48, a: 4, b: 3 },
        { n: 72, a: 6, b: 2 },
        { n: 80, a: 4, b: 5 },
        { n: 98, a: 7, b: 2 }
      ];
      const v = pick(variantes);
      return {
        enonce: `Écrire $\\sqrt{${v.n}}$ sous la forme $a\\sqrt{b}$ avec $b$ le plus petit possible.`,
        corrige: `$\\sqrt{${v.n}} = \\sqrt{${v.a*v.a} \\times ${v.b}} = \\sqrt{${v.a*v.a}} \\times \\sqrt{${v.b}} = ${v.a}\\sqrt{${v.b}}$.`
      };
    } else {
      // Difficile : combinaison √a + √b à simplifier
      const variantes = [
        () => ({
          enonce: `Simplifier $\\sqrt{20} + \\sqrt{45}$.`,
          corrige: `$\\sqrt{20} = 2\\sqrt{5}$ et $\\sqrt{45} = 3\\sqrt{5}$. Donc $\\sqrt{20} + \\sqrt{45} = 2\\sqrt{5} + 3\\sqrt{5} = 5\\sqrt{5}$.`
        }),
        () => ({
          enonce: `Simplifier $\\sqrt{8} + \\sqrt{18}$.`,
          corrige: `$\\sqrt{8} = 2\\sqrt{2}$ et $\\sqrt{18} = 3\\sqrt{2}$. Donc $\\sqrt{8} + \\sqrt{18} = 2\\sqrt{2} + 3\\sqrt{2} = 5\\sqrt{2}$.`
        }),
        () => ({
          enonce: `Simplifier $\\sqrt{50} - \\sqrt{18}$.`,
          corrige: `$\\sqrt{50} = 5\\sqrt{2}$ et $\\sqrt{18} = 3\\sqrt{2}$. Donc $\\sqrt{50} - \\sqrt{18} = 5\\sqrt{2} - 3\\sqrt{2} = 2\\sqrt{2}$.`
        }),
        () => ({
          enonce: `Simplifier $\\sqrt{27} + \\sqrt{12}$.`,
          corrige: `$\\sqrt{27} = 3\\sqrt{3}$ et $\\sqrt{12} = 2\\sqrt{3}$. Donc $\\sqrt{27} + \\sqrt{12} = 3\\sqrt{3} + 2\\sqrt{3} = 5\\sqrt{3}$.`
        })
      ];
      return pick(variantes)();
    }
  },

  pp01_app: (d) => {
    if (d === 1) {
      const variantes = [
        () => { const t = 25; const v = pick([80, 120, 200, 400]); return { enonce: `Calculer $${t}\\,\\%$ de $${v}$.`, corrige: `$${t}\\,\\% \\text{ de } ${v} = \\dfrac{${t}}{100} \\times ${v} = ${v/4}$.` }; },
        () => { const t = 50; const v = pick([60, 80, 120, 200]); return { enonce: `Calculer $${t}\\,\\%$ de $${v}$.`, corrige: `$${t}\\,\\% \\text{ de } ${v} = \\dfrac{${v}}{2} = ${v/2}$.` }; },
        () => { const t = 10; const v = pick([50, 120, 250, 480]); return { enonce: `Calculer $${t}\\,\\%$ de $${v}$.`, corrige: `$${t}\\,\\% \\text{ de } ${v} = \\dfrac{${v}}{10} = ${v/10}$.` }; }
      ];
      return pick(variantes)();
    } else if (d === 2) {
      const t = pick([15, 20, 30, 40, 60, 75]);
      const v = pick([40, 80, 120, 160, 200, 240, 300, 400]);
      const r = t * v / 100;
      return {
        enonce: `Calculer $${t}\\,\\%$ de $${v}$.`,
        corrige: `$${t}\\,\\% \\text{ de } ${v} = \\dfrac{${t}}{100} \\times ${v} = ${t/100} \\times ${v} = ${r}$.`
      };
    } else {
      const variantes = [
        () => {
          const t = pick([12, 18, 35, 45, 65]);
          const v = pick([250, 380, 480, 720, 950]);
          const r = Math.round(t * v) / 100;
          return { enonce: `Calculer $${t}\\,\\%$ de $${v}$.`,
                   corrige: `$${t}\\,\\% \\text{ de } ${v} = \\dfrac{${t} \\times ${v}}{100} = \\dfrac{${t*v}}{100} = ${r}$.` };
        },
        () => {
          const t = pick([2.5, 7.5, 12.5]);
          const v = pick([200, 400, 800, 1000]);
          const r = t * v / 100;
          return { enonce: `Calculer $${t.toString().replace('.', ',')}\\,\\%$ de $${v}$.`,
                   corrige: `$${t.toString().replace('.', ',')}\\,\\% \\text{ de } ${v} = ${t/100} \\times ${v} = ${r}$.` };
        }
      ];
      return pick(variantes)();
    }
  },

  pp02_dec: (d) => {
    if (d === 1) {
      const variantes = [
        () => ({ enonce: `Dans une classe de $25$ élèves, $5$ sont absents. Quelle est la proportion d'absents (forme décimale) ?`,
                 corrige: `Proportion : $\\dfrac{5}{25} = \\dfrac{1}{5} = 0{,}2$.` }),
        () => ({ enonce: `Dans un panier de $20$ fruits, $4$ sont des pommes. Quelle est la proportion de pommes (forme décimale) ?`,
                 corrige: `Proportion : $\\dfrac{4}{20} = \\dfrac{1}{5} = 0{,}2$.` }),
        () => ({ enonce: `Dans un sac de $50$ billes, $15$ sont rouges. Quelle est la proportion de rouges (forme décimale) ?`,
                 corrige: `Proportion : $\\dfrac{15}{50} = \\dfrac{3}{10} = 0{,}3$.` }),
        () => ({ enonce: `Sur $40$ candidats à un concours, $10$ ont été admis. Quelle est la proportion d'admis (forme décimale) ?`,
                 corrige: `Proportion : $\\dfrac{10}{40} = \\dfrac{1}{4} = 0{,}25$.` }),
        () => ({ enonce: `Sur $200$ visiteurs d'une exposition, $80$ sont des enfants. Quelle est la proportion d'enfants (forme décimale) ?`,
                 corrige: `Proportion : $\\dfrac{80}{200} = \\dfrac{2}{5} = 0{,}4$.` })
      ];
      return pick(variantes)();
    } else if (d === 2) {
      const total = pick([40, 50, 80, 100, 150, 200]);
      const partie = pick([6, 8, 12, 15, 18, 24]);
      const p = partie / total;
      const pAff = Number.isInteger(p * 100) ? (Math.round(p * 100) / 100).toString().replace('.', '{,}') : p.toFixed(3).replace('.', '{,}');
      return {
        enonce: `Sur $${total}$ personnes interrogées, $${partie}$ ont répondu « oui ». Quelle est la proportion de « oui » (forme décimale) ?`,
        corrige: `Proportion : $\\dfrac{${partie}}{${total}} = ${pAff}$.`
      };
    } else {
      const variantes = [
        () => ({ enonce: `Sur $90$ élèves, $3$ sont absents. Donner la proportion d'absents sous forme décimale arrondie au centième.`,
                 corrige: `$\\dfrac{3}{90} = \\dfrac{1}{30} \\approx 0{,}03$.` }),
        () => ({ enonce: `Sur $1250$ inscrits, $50$ étudient le grec. Donner la proportion (forme décimale).`,
                 corrige: `$\\dfrac{50}{1250} = \\dfrac{4}{100} = 0{,}04$.` }),
        () => ({ enonce: `Sur $750$ électeurs, $120$ ont voté blanc. Donner la proportion sous forme décimale arrondie au millième.`,
                 corrige: `$\\dfrac{120}{750} = \\dfrac{16}{100} = 0{,}16$.` }),
        () => ({ enonce: `Sur $1800$ habitants d'un village, $72$ ont plus de $80$ ans. Donner la proportion sous forme décimale.`,
                 corrige: `$\\dfrac{72}{1800} = \\dfrac{4}{100} = 0{,}04$.` })
      ];
      return pick(variantes)();
    }
  },

  pp02_frac: (d) => {
    if (d === 1) {
      const variantes = [
        () => ({ enonce: `Dans un sac de $12$ billes, $3$ sont rouges. Quelle est la proportion de billes rouges (fraction irréductible) ?`,
                 corrige: `$\\dfrac{3}{12} = \\dfrac{1}{4}$.` }),
        () => ({ enonce: `Sur $20$ élèves, $8$ portent des lunettes. Quelle proportion porte des lunettes ?`,
                 corrige: `$\\dfrac{8}{20} = \\dfrac{2}{5}$.` }),
        () => ({ enonce: `Dans un paquet de $24$ bonbons, $6$ sont au caramel. Quelle est la proportion de bonbons au caramel (fraction irréductible) ?`,
                 corrige: `$\\dfrac{6}{24} = \\dfrac{1}{4}$.` }),
        () => ({ enonce: `Sur $15$ joueurs d'une équipe, $9$ sont titulaires. Quelle est la proportion de titulaires (fraction irréductible) ?`,
                 corrige: `$\\dfrac{9}{15} = \\dfrac{3}{5}$.` })
      ];
      return pick(variantes)();
    } else if (d === 2) {
      const variantes = [
        () => ({ enonce: `Dans un panier de $32$ légumes : $8$ courgettes, $4$ poireaux, $6$ artichauts, $14$ pommes de terre. Quelle est la proportion de courgettes ?`,
                 corrige: `$\\dfrac{8}{32} = \\dfrac{1}{4}$.` }),
        () => ({ enonce: `Dans une classe de $30$ élèves, $18$ font une langue vivante 2. Donner la proportion sous forme de fraction irréductible.`,
                 corrige: `$\\dfrac{18}{30} = \\dfrac{3}{5}$.` }),
        () => ({ enonce: `Une bibliothèque contient $48$ livres : $36$ romans et le reste des essais. Quelle est la proportion d'essais (fraction irréductible) ?`,
                 corrige: `Nombre d'essais : $48 - 36 = 12$. Proportion : $\\dfrac{12}{48} = \\dfrac{1}{4}$.` }),
        () => ({ enonce: `Sur $42$ élèves de Terminale, $28$ ont choisi maths spécialité. Quelle est la proportion (fraction irréductible) ?`,
                 corrige: `$\\dfrac{28}{42} = \\dfrac{2}{3}$.` })
      ];
      return pick(variantes)();
    } else {
      const variantes = [
        () => ({ enonce: `Un quart des élèves d'un lycée est en seconde, $\\dfrac{1}{3}$ en première, le reste en terminale. Quelle proportion d'élèves est en terminale ?`,
                 corrige: `Proportion en terminale : $1 - \\dfrac{1}{4} - \\dfrac{1}{3} = \\dfrac{12 - 3 - 4}{12} = \\dfrac{5}{12}$.` }),
        () => ({ enonce: `Une famille consomme $\\dfrac{2}{5}$ de son budget en logement et $\\dfrac{1}{4}$ en alimentation. Quelle proportion reste-t-il pour le reste ?`,
                 corrige: `Reste : $1 - \\dfrac{2}{5} - \\dfrac{1}{4} = \\dfrac{20 - 8 - 5}{20} = \\dfrac{7}{20}$.` }),
        () => ({ enonce: `Dans une école, $\\dfrac{3}{8}$ des élèves font de l'allemand et $\\dfrac{1}{6}$ font du chinois. Quelle proportion ne fait ni l'un ni l'autre ?`,
                 corrige: `Proportion : $1 - \\dfrac{3}{8} - \\dfrac{1}{6} = \\dfrac{24 - 9 - 4}{24} = \\dfrac{11}{24}$.` })
      ];
      return pick(variantes)();
    }
  },

  pp03_partie: (d) => {
    if (d === 1) {
      const total = pick([100, 200, 500, 1000]);
      const t = pick([10, 20, 25, 50]);
      const partie = total * t / 100;
      return {
        enonce: `Dans un groupe de $${total}$ personnes, $${t}\\,\\%$ pratiquent un sport. Combien de personnes pratiquent un sport ?`,
        corrige: `Nombre : $\\dfrac{${t}}{100} \\times ${total} = ${partie}$ personnes.`
      };
    } else if (d === 2) {
      const total = pick([80, 150, 240, 320, 450]);
      const t = pick([15, 20, 35, 40, 60]);
      const partie = total * t / 100;
      return {
        enonce: `Une association compte $${total}$ adhérents. $${t}\\,\\%$ sont mineurs. Combien d'adhérents sont mineurs ?`,
        corrige: `Mineurs : $\\dfrac{${t}}{100} \\times ${total} = ${partie}$.`
      };
    } else {
      const variantes = [
        () => ({ enonce: `Un pot de confiture pèse $400$ g et contient $45\\,\\%$ de fruits. Quelle est la masse de fruits ?`,
                 corrige: `Masse de fruits : $0{,}45 \\times 400 = 180$ g.` }),
        () => ({ enonce: `Dans un lycée, le quart des élèves sont internes ; parmi eux, la moitié sont des filles. Si le lycée compte $800$ élèves, combien de filles internes y a-t-il ?`,
                 corrige: `Filles internes : $\\dfrac{1}{2} \\times \\dfrac{1}{4} \\times 800 = \\dfrac{1}{8} \\times 800 = 100$ filles.` }),
        () => ({ enonce: `Sur $1200$ habitants d'un village, $35\\,\\%$ ont plus de $60$ ans. Combien d'habitants ont plus de $60$ ans ?`,
                 corrige: `Nombre : $0{,}35 \\times 1200 = 420$ habitants.` }),
        () => ({ enonce: `Un magasin offre $15\\,\\%$ de réduction sur un produit à $80$ €. Quel est le montant de la réduction ?`,
                 corrige: `Réduction : $0{,}15 \\times 80 = 12$ €.` })
      ];
      return pick(variantes)();
    }
  },

  pp03_tout: (d) => {
    if (d === 1) {
      const total = pick([100, 200, 500, 1000]);
      const t = pick([10, 20, 25, 50]);
      const partie = total * t / 100;
      return {
        enonce: `$${partie}$ élèves représentent $${t}\\,\\%$ des élèves d'un lycée. Combien d'élèves compte ce lycée au total ?`,
        corrige: `Si $${t}\\,\\%$ représentent $${partie}$, alors $100\\,\\%$ représentent $\\dfrac{${partie}}{${t}/100} = \\dfrac{${partie} \\times 100}{${t}} = ${total}$ élèves.`
      };
    } else if (d === 2) {
      const variantes = [
        () => ({ enonce: `Dans un lycée, $50$ élèves étudient le Grec, ce qui représente $4\\,\\%$ du nombre d'élèves inscrits. Combien d'élèves sont inscrits dans ce lycée ?`,
                 corrige: `$\\dfrac{50}{0{,}04} = \\dfrac{50 \\times 100}{4} = 1\\,250$ élèves.` }),
        () => {
          const t = pick([15, 25, 30, 40]);
          const total = pick([120, 200, 400, 500]);
          const partie = total * t / 100;
          return { enonce: `$${partie}$ adhérents représentent $${t}\\,\\%$ des membres d'un club. Combien y a-t-il de membres au total ?`,
                   corrige: `Total : $\\dfrac{${partie} \\times 100}{${t}} = ${total}$ membres.` };
        }
      ];
      return pick(variantes)();
    } else {
      const variantes = [
        () => ({ enonce: `Une réduction de $18$ € correspond à $12\\,\\%$ du prix d'un article. Quel est le prix initial de l'article ?`,
                 corrige: `Prix initial : $\\dfrac{18}{0{,}12} = 150$ €.` }),
        () => ({ enonce: `Dans une association, $7{,}5\\,\\%$ des adhérents (soit $60$ personnes) sont bénévoles. Combien y a-t-il d'adhérents au total ?`,
                 corrige: `Total : $\\dfrac{60}{0{,}075} = 800$ adhérents.` }),
        () => ({ enonce: `Un commerçant verse $35$ € de TVA sur un produit, ce qui représente $20\\,\\%$ du prix HT. Quel est le prix HT ?`,
                 corrige: `Prix HT : $\\dfrac{35}{0{,}20} = 175$ €.` }),
        () => ({ enonce: `Une remise de $24$ € correspond à $8\\,\\%$ du prix initial d'un produit. Quel était le prix initial ?`,
                 corrige: `Prix initial : $\\dfrac{24}{0{,}08} = 300$ €.` })
      ];
      return pick(variantes)();
    }
  },

  fr01_image_g: (d) => {
    if (d === 1) {
      // Facile : fonction affine simple, image entière
      const a = pick([1, -1, 2, -2]);
      const b = randNonZero(-2, 3);
      const x0 = pick([-2, -1, 1, 2]);
      const y0 = a*x0 + b;
      if (y0 < -4 || y0 > 4) {
        // fallback
        const r = creerRepere({});
        let svg = r.svg + tracerDroite(r, 1, 0, { label: 'C_f' }) + r.fermer();
        return {
          enonce: `Sur le graphique ci-contre est représentée une fonction $f$. Lire graphiquement $f(2)$.`,
          svg: svg,
          corrige: `On cherche l'ordonnée du point de $\\mathcal{C}_f$ d'abscisse $2$ : $f(2) = 2$.`
        };
      }
      const r = creerRepere({});
      let svg = r.svg + tracerDroite(r, a, b, { label: 'C_f' }) + r.fermer();
      return {
        enonce: `Sur le graphique ci-contre est représentée une fonction $f$. Lire graphiquement $f(${x0})$.`,
        svg: svg,
        corrige: `On cherche l'ordonnée du point de $\\mathcal{C}_f$ d'abscisse $${x0}$ : $f(${x0}) = ${y0}$.`
      };
    } else if (d === 2) {
      // Moyen : parabole ou affine plus complexe, image entière garantie
      const variantes = [
        () => {
          const h = randNonZero(-1, 1);
          const k = randNonZero(-2, 2);
          const a = pick([1, -1]);
          const x0 = h + pick([-2, -1, 1, 2]);
          const y0 = a*(x0-h)*(x0-h) + k;
          if (y0 < -4 || y0 > 4 || x0 < -3 || x0 > 3) return null;
          const r = creerRepere({});
          let svg = r.svg + tracerParabole(r, a, -2*a*h, a*h*h+k, { label: 'C_f' }) + r.fermer();
          return {
            enonce: `Sur le graphique ci-contre est représentée une fonction $f$. Lire graphiquement $f(${x0})$.`,
            svg: svg,
            corrige: `On cherche l'ordonnée du point de $\\mathcal{C}_f$ d'abscisse $${x0}$ : $f(${x0}) = ${y0}$.`
          };
        },
        () => {
          const a = pick([1, -1, 2, -2]);
          const b = randNonZero(-3, 3);
          const x0 = randNonZero(-3, 3);
          const y0 = a*x0 + b;
          if (y0 < -4 || y0 > 4) return null;
          const r = creerRepere({});
          let svg = r.svg + tracerDroite(r, a, b, { label: 'C_f' }) + r.fermer();
          return {
            enonce: `Sur le graphique ci-contre est représentée une fonction $f$. Lire graphiquement $f(${x0})$.`,
            svg: svg,
            corrige: `On cherche l'ordonnée du point de $\\mathcal{C}_f$ d'abscisse $${x0}$ : $f(${x0}) = ${y0}$.`
          };
        }
      ];
      let result = null, tries = 0;
      while (!result && tries < 10) { result = pick(variantes)(); tries++; }
      return result || (() => {
        const r = creerRepere({});
        let svg = r.svg + tracerDroite(r, 1, 0, { label: 'C_f' }) + r.fermer();
        return {
          enonce: `Sur le graphique ci-contre est représentée une fonction $f$. Lire $f(2)$.`,
          svg: svg,
          corrige: `$f(2) = 2$.`
        };
      })();
    } else {
      // Difficile : lectures multiples sur parabole, images entières
      const a = pick([1, -1]);
      const h = randNonZero(-1, 1);
      const k = randNonZero(-2, 2);
      const x1 = h - 1;
      const x2 = h + 1;
      const y1 = a*(x1-h)*(x1-h) + k;
      const y2 = a*(x2-h)*(x2-h) + k;
      if (Math.max(y1, y2) > 4 || Math.min(y1, y2) < -4 || x1 < -3 || x2 > 3) {
        // fallback
        const r = creerRepere({});
        let svg = r.svg + tracerParabole(r, 1, 0, -3, { label: 'C_f' }) + r.fermer();
        return {
          enonce: `Sur le graphique ci-contre est représentée une fonction $f$. Lire $f(-2)$ et $f(2)$.`,
          svg: svg,
          corrige: `$f(-2) = 1$ et $f(2) = 1$.`
        };
      }
      const r = creerRepere({});
      let svg = r.svg + tracerParabole(r, a, -2*a*h, a*h*h+k, { label: 'C_f' }) + r.fermer();
      return {
        enonce: `Sur le graphique ci-contre est représentée une fonction $f$. Lire $f(${x1})$ et $f(${x2})$.`,
        svg: svg,
        corrige: `$f(${x1}) = ${y1}$ et $f(${x2}) = ${y2}$.`
      };
    }
  },

  fr01_ant_g: (d) => {
    if (d === 1) {
      // Facile : fonction affine, antécédent unique d'un y donné (souvent y=0)
      const a = pick([1, -1, 2, -2]);
      const b = randNonZero(-2, 2);
      const x0 = randNonZero(-3, 3);
      const y0 = a*x0 + b;
      if (y0 < -4 || y0 > 4) {
        // fallback
        const r = creerRepere({});
        let svg = r.svg + tracerDroite(r, 1, -1, { label: 'C_f' }) + r.fermer();
        return {
          enonce: `Sur le graphique ci-contre est représentée une fonction $f$. Déterminer graphiquement l'antécédent de $0$ par $f$.`,
          svg: svg,
          corrige: `On cherche l'abscisse du point de $\\mathcal{C}_f$ d'ordonnée $0$ : $x = 1$.`
        };
      }
      // Antécédent de 0 si possible
      if (Math.random() < 0.5) {
        const x0_zero = -b/a;
        if (Number.isInteger(x0_zero) && x0_zero >= -3 && x0_zero <= 3) {
          const r = creerRepere({});
          let svg = r.svg + tracerDroite(r, a, b, { label: 'C_f' }) + r.fermer();
          return {
            enonce: `Sur le graphique ci-contre est représentée une fonction $f$. Déterminer graphiquement l'antécédent de $0$ par $f$.`,
            svg: svg,
            corrige: `On cherche l'abscisse du point de $\\mathcal{C}_f$ d'ordonnée $0$ : $x = ${x0_zero}$.`
          };
        }
      }
      // Sinon, antécédent de y0 avec droite horizontale
      const r = creerRepere({});
      let svg = r.svg + tracerDroite(r, a, b, { label: 'C_f' });
      svg += tracerDroiteH(r, y0, { label: `y = ${y0}`, couleur: GRAPH_OR, pointille: true });
      svg += r.fermer();
      return {
        enonce: `Sur le graphique ci-contre est représentée une fonction $f$ et la droite d'équation $y = ${y0}$. Déterminer graphiquement l'antécédent de $${y0}$ par $f$.`,
        svg: svg,
        corrige: `On cherche l'abscisse du point de $\\mathcal{C}_f$ d'ordonnée $${y0}$ : $x = ${x0}$.`
      };
    } else if (d === 2) {
      // Moyen : parabole, antécédents de 0
      const a_coef = pick([1, -1]);
      const r1 = randNonZero(-3, -1);
      const r2 = randNonZero(1, 3);
      const A = a_coef;
      const B = -a_coef*(r1+r2);
      const C = a_coef*r1*r2;
      const sommet_x = -B/(2*A);
      const sommet_y = A*sommet_x*sommet_x + B*sommet_x + C;
      if (sommet_y < -4 || sommet_y > 4 || A*16+B*4+C > 5 || A*16-B*4+C > 5) {
        const r = creerRepere({});
        let svg = r.svg + tracerParabole(r, 1, 0, -4, { label: 'C_f' }) + r.fermer();
        return {
          enonce: `Sur le graphique ci-contre est représentée une fonction $f$. Déterminer graphiquement les antécédents de $0$ par $f$.`,
          svg: svg,
          corrige: `Les antécédents de $0$ sont les abscisses des points d'intersection avec l'axe des abscisses : $x = -2$ et $x = 2$.`
        };
      }
      const r = creerRepere({});
      let svg = r.svg + tracerParabole(r, A, B, C, { label: 'C_f' }) + r.fermer();
      return {
        enonce: `Sur le graphique ci-contre est représentée une fonction $f$. Déterminer graphiquement les antécédents de $0$ par $f$.`,
        svg: svg,
        corrige: `Les antécédents de $0$ sont les abscisses des points d'intersection avec l'axe des abscisses : $x = ${r1}$ et $x = ${r2}$.`
      };
    } else {
      // Difficile : antécédents multiples d'un y ≠ 0
      const h = randNonZero(-1, 1);
      const k_min = pick([-2, -3]);
      const dh = pick([1, 2]);
      const yCible = k_min + dh*dh;
      const x1 = h - dh, x2 = h + dh;
      if (yCible > 4 || x1 < -4 || x2 > 4 || k_min < -4) {
        const r = creerRepere({});
        let svg = r.svg + tracerParabole(r, 1, -2, -2, { label: 'C_f' });
        svg += tracerDroiteH(r, 1, { label: 'y = 1', couleur: GRAPH_OR, pointille: true });
        svg += r.fermer();
        return {
          enonce: `Sur le graphique ci-contre est représentée une fonction $f$ et la droite $y = 1$. Déterminer graphiquement les antécédents de $1$ par $f$.`,
          svg: svg,
          corrige: `Les antécédents de $1$ sont $x = -1$ et $x = 3$.`
        };
      }
      const r = creerRepere({});
      let svg = r.svg + tracerParabole(r, 1, -2*h, h*h+k_min, { label: 'C_f' });
      svg += tracerDroiteH(r, yCible, { label: `y = ${yCible}`, couleur: GRAPH_OR, pointille: true });
      svg += r.fermer();
      return {
        enonce: `Sur le graphique ci-contre est représentée une fonction $f$ et la droite d'équation $y = ${yCible}$. Déterminer graphiquement les antécédents de $${yCible}$ par $f$.`,
        svg: svg,
        corrige: `Les antécédents de $${yCible}$ sont $x = ${x1}$ et $x = ${x2}$.`
      };
    }
  },

  fr02_appart: (d) => {
    if (d === 1) {
      // Facile : appartenance à une droite (fonction affine)
      const a = randNonZero(2, 5);
      const b = randNonZero(-5, 5);
      const x = randNonZero(-3, 3);
      const yJuste = a*x + b;
      const point = pick([true, false]);
      const y = point ? yJuste : yJuste + randNonZero(2, 5);
      const sB = b >= 0 ? `+ ${b}` : `- ${-b}`;
      const xAff = x < 0 ? `(${x})` : `${x}`;
      return {
        enonce: `Soit $f(x) = ${a}x ${sB}$. Le point $A(${x}\\,;\\,${y})$ appartient-il à la courbe de $f$ ?`,
        corrige: `On calcule $f(${x}) = ${a} \\times ${xAff} ${sB} = ${a*x} ${sB} = ${yJuste}$. ${point ? `Comme $f(${x}) = ${y}$, le point $A$ appartient bien à la courbe de $f$.` : `Comme $f(${x}) = ${yJuste} \\neq ${y}$, le point $A$ n'appartient pas à la courbe de $f$.`}`
      };
    } else if (d === 2) {
      // Moyen : appartenance à une parabole (fonction du second degré)
      const a = randNonZero(1, 3);
      const b = randNonZero(-3, 3);
      const c = randNonZero(-5, 5);
      const x = randNonZero(-3, 3);
      const yJuste = a*x*x + b*x + c;
      const point = pick([true, false]);
      const y = point ? yJuste : yJuste + randNonZero(2, 4);
      // Affichage propre de "ax² ± bx ± c"
      const sB = b >= 0 ? `+ ${b}x` : `- ${-b}x`;
      const sC = c >= 0 ? `+ ${c}` : `- ${-c}`;
      const xAff = x < 0 ? `(${x})` : `${x}`;
      // Calcul intermédiaire bien affiché
      const ax2 = a*x*x;
      const bx = b*x;
      const sBx = bx >= 0 ? `+ ${bx}` : `- ${-bx}`;
      return {
        enonce: `Soit $f(x) = ${a}x^2 ${sB} ${sC}$. Le point $A(${x}\\,;\\,${y})$ appartient-il à la courbe de $f$ ?`,
        corrige: `On calcule $f(${x}) = ${a} \\times ${xAff}^2 ${sB.replace('x', ` \\times ${xAff}`)} ${sC} = ${ax2} ${sBx} ${sC} = ${yJuste}$. ${point ? `Comme $f(${x}) = ${y}$, le point $A$ appartient à la courbe de $f$.` : `Comme $f(${x}) = ${yJuste} \\neq ${y}$, le point $A$ n'appartient pas à la courbe de $f$.`}`
      };
    } else {
      // Difficile : appartenance à une fonction rationnelle (forme a/(x+b))
      const variantes = [
        () => {
          // f(x) = a/(x+b) : éviter x = -b (division par 0)
          const a = randNonZero(2, 8);
          let b = randNonZero(-3, 3);
          let x = randNonZero(-3, 3);
          while (x + b === 0) { x = randNonZero(-3, 3); }
          const yJuste = a / (x + b);
          // S'assurer que yJuste est un entier pour rester lisible
          if (!Number.isInteger(yJuste)) {
            // ajuster a pour que (x+b) divise a
            const denom = x + b;
            const aBis = denom * randNonZero(1, 4);
            const yJusteBis = aBis / denom;
            const point = pick([true, false]);
            const y = point ? yJusteBis : yJusteBis + randNonZero(1, 3);
            const sB = b >= 0 ? `+ ${b}` : `- ${-b}`;
            const xAff = x < 0 ? `(${x})` : `${x}`;
            return {
              enonce: `Soit $f(x) = \\dfrac{${aBis}}{x ${sB}}$. Le point $A(${x}\\,;\\,${y})$ appartient-il à la courbe de $f$ ?`,
              corrige: `On calcule $f(${x}) = \\dfrac{${aBis}}{${xAff} ${sB}} = \\dfrac{${aBis}}{${denom}} = ${yJusteBis}$. ${point ? `Comme $f(${x}) = ${y}$, le point $A$ appartient à la courbe.` : `Comme $f(${x}) = ${yJusteBis} \\neq ${y}$, le point $A$ n'appartient pas à la courbe.`}`
            };
          }
          const point = pick([true, false]);
          const y = point ? yJuste : yJuste + randNonZero(1, 3);
          const sB = b >= 0 ? `+ ${b}` : `- ${-b}`;
          const xAff = x < 0 ? `(${x})` : `${x}`;
          return {
            enonce: `Soit $f(x) = \\dfrac{${a}}{x ${sB}}$. Le point $A(${x}\\,;\\,${y})$ appartient-il à la courbe de $f$ ?`,
            corrige: `On calcule $f(${x}) = \\dfrac{${a}}{${xAff} ${sB}} = \\dfrac{${a}}{${x+b}} = ${yJuste}$. ${point ? `Comme $f(${x}) = ${y}$, le point $A$ appartient à la courbe.` : `Comme $f(${x}) = ${yJuste} \\neq ${y}$, le point $A$ n'appartient pas à la courbe.`}`
          };
        },
        () => {
          // f(x) = (ax + b) / c
          const c = randNonZero(2, 4);
          const a = randNonZero(2, 5);
          const b = randNonZero(-5, 5);
          const x = randNonZero(-3, 3);
          const num = a*x + b;
          // Forcer un résultat entier (sinon retomber sur c=1)
          if (num % c !== 0) {
            const yJuste = num;
            const point = pick([true, false]);
            const y = point ? yJuste : yJuste + randNonZero(1, 3);
            const sB = b >= 0 ? `+ ${b}` : `- ${-b}`;
            const xAff = x < 0 ? `(${x})` : `${x}`;
            return {
              enonce: `Soit $f(x) = ${a}x ${sB}$. Le point $A(${x}\\,;\\,${y})$ appartient-il à la courbe de $f$ ?`,
              corrige: `On calcule $f(${x}) = ${a} \\times ${xAff} ${sB} = ${a*x} ${sB} = ${yJuste}$. ${point ? `Comme $f(${x}) = ${y}$, le point $A$ appartient à la courbe.` : `Comme $f(${x}) = ${yJuste} \\neq ${y}$, le point $A$ n'appartient pas à la courbe.`}`
            };
          }
          const yJuste = num / c;
          const point = pick([true, false]);
          const y = point ? yJuste : yJuste + randNonZero(1, 3);
          const sB = b >= 0 ? `+ ${b}` : `- ${-b}`;
          const xAff = x < 0 ? `(${x})` : `${x}`;
          return {
            enonce: `Soit $f(x) = \\dfrac{${a}x ${sB}}{${c}}$. Le point $A(${x}\\,;\\,${y})$ appartient-il à la courbe de $f$ ?`,
            corrige: `On calcule $f(${x}) = \\dfrac{${a} \\times ${xAff} ${sB}}{${c}} = \\dfrac{${a*x} ${sB}}{${c}} = \\dfrac{${num}}{${c}} = ${yJuste}$. ${point ? `Comme $f(${x}) = ${y}$, le point $A$ appartient à la courbe.` : `Comme $f(${x}) = ${yJuste} \\neq ${y}$, le point $A$ n'appartient pas à la courbe.`}`
          };
        }
      ];
      return pick(variantes)();
    }
  },

  fr03_image_aff: (d) => {
    if (d === 1) {
      // Facile : a et b entiers simples, x entier positif
      const a = randNonZero(2, 5);
      const b = randNonZero(-5, 5);
      const x = randNonZero(2, 6);
      const r = a*x + b;
      const signB = b >= 0 ? '+' : '-';
      const absB = Math.abs(b);
      const sB = b >= 0 ? `+ ${b}` : `- ${-b}`;
      return {
        enonce: `On considère la fonction $f$ définie par $f(x) = ${a}x ${signB} ${absB}$. Calculer $f(${x})$.`,
        corrige: `$f(${x}) = ${a} \\times ${x} ${sB} = ${a*x} ${sB} = ${r}$.`
      };
    } else if (d === 2) {
      // Moyen : a peut être négatif, x peut être négatif
      const a = randNonZero(-5, 5);
      const b = randNonZero(-6, 6);
      const x = randNonZero(-4, 4);
      const r = a*x + b;
      const signB = b >= 0 ? '+' : '-';
      const absB = Math.abs(b);
      const xAff = x < 0 ? `(${x})` : `${x}`;
      const ax = a*x;
      const sAx = ax >= 0 ? `${ax}` : `${ax}`; // garder le signe naturel
      const sB = b >= 0 ? `+ ${b}` : `- ${-b}`;
      return {
        enonce: `On considère la fonction $f$ définie par $f(x) = ${a}x ${signB} ${absB}$. Calculer $f(${x})$.`,
        corrige: `$f(${x}) = ${a} \\times ${xAff} ${sB} = ${ax} ${sB} = ${r}$.`
      };
    } else {
      // Difficile : fonction écrite sous forme $f : x \mapsto ...$
      const a = randNonZero(-5, 5);
      const b = randNonZero(-6, 6);
      const x1 = randNonZero(-3, 3);
      const x2 = randNonZero(-3, 3);
      const r1 = a*x1 + b;
      const r2 = a*x2 + b;
      const signB = b >= 0 ? '+' : '-';
      const absB = Math.abs(b);
      const x1Aff = x1 < 0 ? `(${x1})` : `${x1}`;
      const x2Aff = x2 < 0 ? `(${x2})` : `${x2}`;
      const sB = b >= 0 ? `+ ${b}` : `- ${-b}`;
      return {
        enonce: `Soit $f : x \\mapsto ${a}x ${signB} ${absB}$. Calculer $f(${x1})$ et $f(${x2})$.`,
        corrige: `$f(${x1}) = ${a} \\times ${x1Aff} ${sB} = ${r1}$ et $f(${x2}) = ${a} \\times ${x2Aff} ${sB} = ${r2}$.`
      };
    }
  },

  fr03_image_carre: (d) => {
    if (d === 1) {
      // Facile : f(x) = x² + c ou f(x) = ax² avec a entier, x petit
      const variantes = [
        () => {
          const c = randNonZero(-5, 5);
          const x = randNonZero(-4, 4);
          const r = x*x + c;
          const sC = c >= 0 ? `+ ${c}` : `- ${-c}`;
          const xAff = x < 0 ? `(${x})` : `${x}`;
          return {
            enonce: `Soit $f$ définie par $f(x) = x^2 ${sC}$. Calculer $f(${x})$.`,
            corrige: `$f(${x}) = ${xAff}^2 ${sC} = ${x*x} ${sC} = ${r}$.`
          };
        },
        () => {
          const a = randNonZero(2, 4);
          const x = randNonZero(-3, 3);
          const r = a*x*x;
          const xAff = x < 0 ? `(${x})` : `${x}`;
          return {
            enonce: `Soit $f$ définie par $f(x) = ${a}x^2$. Calculer $f(${x})$.`,
            corrige: `$f(${x}) = ${a} \\times ${xAff}^2 = ${a} \\times ${x*x} = ${r}$.`
          };
        }
      ];
      return pick(variantes)();
    } else if (d === 2) {
      // Moyen : f(x) = ax² + bx + c
      const a = randNonZero(-3, 3);
      const b = randNonZero(-5, 5);
      const c = randNonZero(-5, 5);
      const x = randNonZero(-3, 3);
      const r = a*x*x + b*x + c;
      const sB = b >= 0 ? `+ ${b}x` : `- ${-b}x`;
      const sC = c >= 0 ? `+ ${c}` : `- ${-c}`;
      const xAff = x < 0 ? `(${x})` : `${x}`;
      const bxVal = b*x;
      const sBxVal = bxVal >= 0 ? `+ ${bxVal}` : `- ${-bxVal}`;
      return {
        enonce: `Soit $f$ définie par $f(x) = ${a}x^2 ${sB} ${sC}$. Calculer $f(${x})$.`,
        corrige: `$f(${x}) = ${a} \\times ${xAff}^2 ${sBxVal === '+ 0' ? '' : sBxVal.replace(/^\+ /, '+ ').replace(/\+ /, ' + ').replace(/- /, ' - ')} ${sC} = ${a*x*x} ${sBxVal} ${sC} = ${r}$.`
      };
    } else {
      // Difficile : forme canonique ou factorisée
      const variantes = [
        () => {
          // Forme canonique : f(x) = (x - h)² + k
          const h = randNonZero(-3, 3);
          const k = randNonZero(-4, 4);
          const x = randNonZero(-3, 3);
          const r = (x-h)*(x-h) + k;
          const sH = h >= 0 ? `- ${h}` : `+ ${-h}`;
          const sK = k >= 0 ? `+ ${k}` : `- ${-k}`;
          const xAff = x < 0 ? `(${x})` : `${x}`;
          return {
            enonce: `Soit $f$ définie par $f(x) = (x ${sH})^2 ${sK}$. Calculer $f(${x})$.`,
            corrige: `$f(${x}) = (${xAff} ${sH})^2 ${sK} = (${x-h})^2 ${sK} = ${(x-h)*(x-h)} ${sK} = ${r}$.`
          };
        },
        () => {
          // Forme factorisée : f(x) = (x - r1)(x - r2)
          const r1 = randNonZero(-3, 3);
          let r2 = randNonZero(-3, 3);
          while (r2 === r1) r2 = randNonZero(-3, 3);
          const x = randNonZero(-3, 3);
          const r = (x-r1)*(x-r2);
          const sR1 = r1 >= 0 ? `- ${r1}` : `+ ${-r1}`;
          const sR2 = r2 >= 0 ? `- ${r2}` : `+ ${-r2}`;
          const xAff = x < 0 ? `(${x})` : `${x}`;
          return {
            enonce: `Soit $f$ définie par $f(x) = (x ${sR1})(x ${sR2})$. Calculer $f(${x})$.`,
            corrige: `$f(${x}) = (${xAff} ${sR1})(${xAff} ${sR2}) = (${x-r1}) \\times (${x-r2}) = ${r}$.`
          };
        }
      ];
      return pick(variantes)();
    }
  },

  fr03_image_div: (d) => {
    if (d === 1) {
      // Facile : f(x) = a/x avec a et x entiers donnant un résultat entier
      const x = randNonZero(2, 6);
      const k = randNonZero(2, 5);
      const a = k * x; // pour que a/x soit entier
      return {
        enonce: `Soit $f$ définie sur $\\mathbb{R}^*$ par $f(x) = \\dfrac{${a}}{x}$. Calculer $f(${x})$.`,
        corrige: `$f(${x}) = \\dfrac{${a}}{${x}} = ${k}$.`
      };
    } else if (d === 2) {
      // Moyen : f(x) = (ax+b) / c, x négatif possible
      const a = randNonZero(2, 5);
      const b = randNonZero(-5, 5);
      const x = randNonZero(-4, 4);
      const num = a*x + b;
      const c = randNonZero(2, 5);
      const sB = b >= 0 ? `+ ${b}` : `- ${-b}`;
      const xAff = x < 0 ? `(${x})` : `${x}`;
      // Garantir un résultat entier
      if (num % c !== 0) {
        // fallback : prendre c = 1 pour éviter une fraction
        return {
          enonce: `Soit $f$ définie par $f(x) = ${a}x ${sB}$. Calculer $f(${x})$.`,
          corrige: `$f(${x}) = ${a} \\times ${xAff} ${sB} = ${a*x} ${sB} = ${num}$.`
        };
      }
      return {
        enonce: `Soit $f$ définie par $f(x) = \\dfrac{${a}x ${sB}}{${c}}$. Calculer $f(${x})$.`,
        corrige: `$f(${x}) = \\dfrac{${a} \\times ${xAff} ${sB}}{${c}} = \\dfrac{${a*x} ${sB}}{${c}} = \\dfrac{${num}}{${c}} = ${num/c}$.`
      };
    } else {
      // Difficile : f(x) = (ax+b)/(x+c)
      const a = randNonZero(1, 4);
      const b = randNonZero(-4, 4);
      const c = randNonZero(-3, 3);
      const x = randNonZero(-3, 3);
      // Eviter x + c = 0
      if (x + c === 0) {
        return {
          enonce: `Soit $f$ définie par $f(x) = \\dfrac{2x + 3}{x + 1}$. Calculer $f(2)$.`,
          corrige: `$f(2) = \\dfrac{2 \\times 2 + 3}{2 + 1} = \\dfrac{7}{3}$.`
        };
      }
      const num = a*x + b;
      const den = x + c;
      const sB = b >= 0 ? `+ ${b}` : `- ${-b}`;
      const sC = c >= 0 ? `+ ${c}` : `- ${-c}`;
      const xAff = x < 0 ? `(${x})` : `${x}`;
      // Résultat sous forme de fraction (irréductible si possible)
      const pgcd = (a, b) => b === 0 ? Math.abs(a) : pgcd(b, a % b);
      const g = pgcd(num, den);
      const numR = num/g, denR = den/g;
      const resultStr = denR === 1 ? `${numR}` : (denR === -1 ? `${-numR}` : `\\dfrac{${numR}}{${denR}}`);
      return {
        enonce: `Soit $f$ définie par $f(x) = \\dfrac{${a}x ${sB}}{x ${sC}}$. Calculer $f(${x})$.`,
        corrige: `$f(${x}) = \\dfrac{${a} \\times ${xAff} ${sB}}{${xAff} ${sC}} = \\dfrac{${num}}{${den}} = ${resultStr}$.`
      };
    }
  },

  fr04_eq: (d) => {
    if (d === 1) {
      // Facile : droite affine + droite horizontale, 1 solution entière
      const a = pick([1, -1, 2, -2]);
      const b = randNonZero(-2, 2);
      const k = randNonZero(-3, 3);
      const x_sol = (k - b) / a;
      if (!Number.isInteger(x_sol) || x_sol < -3 || x_sol > 3) {
        // fallback
        const r = creerRepere({});
        let svg = r.svg + tracerDroite(r, 1, -1, { label: 'C_f' });
        svg += tracerDroiteH(r, 2, { label: 'y = 2', couleur: GRAPH_OR, pointille: true });
        svg += r.fermer();
        return {
          enonce: `Le graphique ci-contre montre la courbe d'une fonction $f$ et la droite $y = 2$. Résoudre graphiquement $f(x) = 2$.`,
          svg: svg,
          corrige: `La solution est l'abscisse du point d'intersection : $\\mathcal{S} = \\{3\\}$.`
        };
      }
      const r = creerRepere({});
      let svg = r.svg + tracerDroite(r, a, b, { label: 'C_f' });
      svg += tracerDroiteH(r, k, { label: `y = ${k}`, couleur: GRAPH_OR, pointille: true });
      svg += r.fermer();
      return {
        enonce: `Le graphique ci-contre montre la courbe d'une fonction $f$ et la droite $y = ${k}$. Résoudre graphiquement $f(x) = ${k}$.`,
        svg: svg,
        corrige: `La solution est l'abscisse du point d'intersection : $\\mathcal{S} = \\{${x_sol}\\}$.`
      };
    } else if (d === 2) {
      // Moyen : parabole + droite horizontale, 2 solutions entières
      // y = (x - h)² + k_min, on cherche les antécédents de k_min + d²
      const h = randNonZero(-1, 1);
      const k_min = pick([-3, -2]);
      const dh = pick([1, 2]);
      const k_cible = k_min + dh*dh;
      const x1 = h - dh, x2 = h + dh;
      if (k_cible > 3 || x1 < -3 || x2 > 3) {
        // fallback
        const r = creerRepere({});
        let svg = r.svg + tracerParabole(r, 1, -2, -2, { label: 'C_f' });
        svg += tracerDroiteH(r, 1, { label: 'y = 1', couleur: GRAPH_OR, pointille: true });
        svg += r.fermer();
        return {
          enonce: `Le graphique ci-contre montre la courbe d'une fonction $f$ et la droite $y = 1$. Résoudre graphiquement $f(x) = 1$.`,
          svg: svg,
          corrige: `Les solutions sont les abscisses des points d'intersection : $\\mathcal{S} = \\{-1\\,;\\,3\\}$.`
        };
      }
      const r = creerRepere({});
      let svg = r.svg + tracerParabole(r, 1, -2*h, h*h+k_min, { label: 'C_f' });
      svg += tracerDroiteH(r, k_cible, { label: `y = ${k_cible}`, couleur: GRAPH_OR, pointille: true });
      svg += r.fermer();
      return {
        enonce: `Le graphique ci-contre montre la courbe d'une fonction $f$ et la droite $y = ${k_cible}$. Résoudre graphiquement $f(x) = ${k_cible}$.`,
        svg: svg,
        corrige: `Les solutions sont les abscisses des points d'intersection : $\\mathcal{S} = \\{${x1}\\,;\\,${x2}\\}$.`
      };
    } else {
      // Difficile : parabole avec une seule solution (cas tangent au sommet) ou aucune
      const variantes = [
        () => {
          // Tangent au sommet : f(x) = k_min, une seule solution
          const h = randNonZero(-1, 1);
          const k_min = randNonZero(-3, 2);
          const r = creerRepere({});
          let svg = r.svg + tracerParabole(r, 1, -2*h, h*h+k_min, { label: 'C_f' });
          svg += tracerDroiteH(r, k_min, { label: `y = ${k_min}`, couleur: GRAPH_OR, pointille: true });
          svg += r.fermer();
          return {
            enonce: `Le graphique ci-contre montre la courbe d'une fonction $f$ et la droite $y = ${k_min}$. Résoudre graphiquement $f(x) = ${k_min}$.`,
            svg: svg,
            corrige: `La droite est tangente à la courbe au sommet. Une unique solution : $\\mathcal{S} = \\{${h}\\}$.`
          };
        },
        () => {
          // Pas de solution : f(x) < k toujours
          const h = randNonZero(-1, 1);
          const k_min = pick([-2, -1]);
          const r = creerRepere({});
          let svg = r.svg + tracerParabole(r, -1, 2*h, -h*h+k_min, { label: 'C_f' }); // tourne vers le bas, sommet en (h, k_min)
          svg += tracerDroiteH(r, k_min+2, { label: `y = ${k_min+2}`, couleur: GRAPH_OR, pointille: true });
          svg += r.fermer();
          return {
            enonce: `Le graphique ci-contre montre la courbe d'une fonction $f$ et la droite $y = ${k_min+2}$. Résoudre graphiquement $f(x) = ${k_min+2}$.`,
            svg: svg,
            corrige: `La droite ne coupe pas la courbe : $\\mathcal{S} = \\emptyset$.`
          };
        }
      ];
      return pick(variantes)();
    }
  },

  fr04_ineq: (d) => {
    if (d === 1) {
      // Facile : f affine, f(x) < k pour x < x_sol ou x > x_sol
      const a = pick([1, -1, 2, -2]);
      const b = randNonZero(-2, 2);
      const k = randNonZero(-2, 2);
      const x_sol = (k - b) / a;
      if (!Number.isInteger(x_sol) || x_sol < -3 || x_sol > 3) {
        // fallback
        const r = creerRepere({});
        let svg = r.svg + tracerDroite(r, 1, -1, { label: 'C_f' });
        svg += tracerDroiteH(r, 1, { label: 'y = 1', couleur: GRAPH_OR, pointille: true });
        svg += r.fermer();
        return {
          enonce: `Le graphique ci-contre montre la courbe de $f$ et la droite $y = 1$. Résoudre graphiquement $f(x) < 1$.`,
          svg: svg,
          corrige: `$f(x) < 1$ pour les $x$ tels que la courbe est sous la droite, donc $\\mathcal{S} = ]-\\infty\\,;\\,2[$.`
        };
      }
      // Si a > 0, f croissante : f(x) < k ⇔ x < x_sol
      const r = creerRepere({});
      let svg = r.svg + tracerDroite(r, a, b, { label: 'C_f' });
      svg += tracerDroiteH(r, k, { label: `y = ${k}`, couleur: GRAPH_OR, pointille: true });
      svg += r.fermer();
      const sol = a > 0 ? `]-\\infty\\,;\\,${x_sol}[` : `]${x_sol}\\,;\\,+\\infty[`;
      return {
        enonce: `Le graphique ci-contre montre la courbe de $f$ et la droite $y = ${k}$. Résoudre graphiquement $f(x) < ${k}$.`,
        svg: svg,
        corrige: `$f(x) < ${k}$ pour les $x$ tels que la courbe est sous la droite, donc $\\mathcal{S} = ${sol}$.`
      };
    } else if (d === 2) {
      // Moyen : parabole, f(x) > k : extérieur des racines
      const h = randNonZero(-1, 1);
      const k_min = pick([-3, -2]);
      const dh = pick([1, 2]);
      const k_cible = k_min + dh*dh;
      const x1 = h - dh, x2 = h + dh;
      if (k_cible > 3 || x1 < -3 || x2 > 3) {
        // fallback
        const r = creerRepere({});
        let svg = r.svg + tracerParabole(r, 1, -2, -2, { label: 'C_f' });
        svg += tracerDroiteH(r, 1, { label: 'y = 1', couleur: GRAPH_OR, pointille: true });
        svg += r.fermer();
        return {
          enonce: `Le graphique ci-contre montre la courbe de $f$ et la droite $y = 1$. Résoudre graphiquement $f(x) \\le 1$.`,
          svg: svg,
          corrige: `$f(x) \\le 1$ là où la courbe est sous (ou sur) la droite : $\\mathcal{S} = [-1\\,;\\,3]$.`
        };
      }
      const r = creerRepere({});
      let svg = r.svg + tracerParabole(r, 1, -2*h, h*h+k_min, { label: 'C_f' });
      svg += tracerDroiteH(r, k_cible, { label: `y = ${k_cible}`, couleur: GRAPH_OR, pointille: true });
      svg += r.fermer();
      return {
        enonce: `Le graphique ci-contre montre la courbe de $f$ et la droite $y = ${k_cible}$. Résoudre graphiquement $f(x) \\le ${k_cible}$.`,
        svg: svg,
        corrige: `$f(x) \\le ${k_cible}$ là où la courbe est sous (ou sur) la droite : $\\mathcal{S} = [${x1}\\,;\\,${x2}]$.`
      };
    } else {
      // Difficile : deux courbes f et g, résoudre f(x) < g(x)
      const variantes = [
        () => {
          // f(x) = 0 (axe x), g(x) = x² - 3
          const r = creerRepere({});
          let svg = r.svg + tracerDroite(r, 0, 0, { label: 'C_f' });
          svg += tracerParabole(r, 1, 0, -3, { label: 'C_g', couleur: '#8b6914' });
          svg += r.fermer();
          return {
            enonce: `Le graphique ci-contre montre les courbes de deux fonctions $f$ et $g$. Résoudre graphiquement $g(x) < f(x)$.`,
            svg: svg,
            corrige: `$g(x) < f(x)$ là où $\\mathcal{C}_g$ est sous $\\mathcal{C}_f$ : $\\mathcal{S} = ]-\\sqrt{3}\\,;\\,\\sqrt{3}[$, soit visuellement environ $]-1{,}7\\,;\\,1{,}7[$.`
          };
        },
        () => {
          // f droite x+1, g parabole x²-2 : intersection en x=-1 et x=3
          const r = creerRepere({});
          let svg = r.svg + tracerDroite(r, 1, 1, { label: 'C_f' });
          svg += tracerParabole(r, 1, 0, -2, { label: 'C_g', couleur: '#8b6914' });
          svg += r.fermer();
          return {
            enonce: `Le graphique ci-contre montre les courbes de $f(x) = x + 1$ (droite) et $g(x) = x^2 - 2$ (parabole). Résoudre graphiquement $f(x) > g(x)$.`,
            svg: svg,
            corrige: `$f(x) > g(x)$ là où la droite est au-dessus de la parabole. Les courbes se coupent en $x = -1$ et $x = 3$. $\\mathcal{S} = ]-1\\,;\\,3[$.`
          };
        },
        () => {
          // f droite -x+2, g parabole x²-2
          const r = creerRepere({});
          let svg = r.svg + tracerDroite(r, -1, 2, { label: 'C_f' });
          svg += tracerParabole(r, 1, 0, -2, { label: 'C_g', couleur: '#8b6914' });
          svg += r.fermer();
          return {
            enonce: `Le graphique ci-contre montre les courbes de $f$ (droite) et $g$ (parabole). Résoudre graphiquement $g(x) \\le f(x)$.`,
            svg: svg,
            corrige: `$g(x) \\le f(x)$ là où $\\mathcal{C}_g$ est sous (ou sur) $\\mathcal{C}_f$. Les courbes se coupent en $x = -2$ et $x = 2$. $\\mathcal{S} = [-2\\,;\\,2]$.`
          };
        }
      ];
      return pick(variantes)();
    }
  },

  fr05_signe: (d) => {
    if (d === 1) {
      // Facile : droite affine, signe selon position par rapport à l'axe x
      const a = pick([1, -1, 2, -2]);
      const x0 = randNonZero(-3, 3);
      const b = -a * x0;
      const r = creerRepere({});
      let svg = r.svg + tracerDroite(r, a, b, { label: 'C_f' }) + r.fermer();
      const signe_avant = (a > 0) ? 'négatif' : 'positif';
      const signe_apres = (a > 0) ? 'positif' : 'négatif';
      return {
        enonce: `Le graphique ci-contre montre la courbe d'une fonction affine $f$. Donner le signe de $f(x)$ selon les valeurs de $x$.`,
        svg: svg,
        corrige: `$f$ s'annule en $x = ${x0}$. $f(x)$ est ${signe_avant} pour $x < ${x0}$ et ${signe_apres} pour $x > ${x0}$.`
      };
    } else if (d === 2) {
      // Moyen : parabole, signe selon position des racines
      const a_coef = pick([1, -1]);
      const r1 = randNonZero(-3, -1);
      const r2 = randNonZero(1, 3);
      const A = a_coef;
      const B = -a_coef * (r1 + r2);
      const C = a_coef * r1 * r2;
      const r = creerRepere({});
      let svg = r.svg + tracerParabole(r, A, B, C, { label: 'C_f' }) + r.fermer();
      const ext = a_coef > 0 ? 'positif' : 'négatif';
      const int_ = a_coef > 0 ? 'négatif' : 'positif';
      return {
        enonce: `Le graphique ci-contre montre la courbe d'une fonction $f$. Donner le signe de $f(x)$ selon les valeurs de $x$.`,
        svg: svg,
        corrige: `$f$ s'annule en $${r1}$ et $${r2}$. $f(x)$ est ${ext} pour $x < ${r1}$ ou $x > ${r2}$, et ${int_} pour $${r1} < x < ${r2}$.`
      };
    } else {
      // Difficile : déduire l'expression à partir du tableau de signes ET du graphique
      const r1 = randNonZero(-3, -1);
      const r2 = randNonZero(1, 3);
      const r = creerRepere({});
      let svg = r.svg + tracerParabole(r, 1, -(r1+r2), r1*r2, { label: 'C_f' }) + r.fermer();
      return {
        enonce: `Le graphique ci-contre montre la courbe d'une fonction polynomiale $f$. Donner une forme factorisée possible pour $f(x)$.`,
        svg: svg,
        corrige: `Les racines visibles sont $${r1}$ et $${r2}$. La parabole tourne vers le haut (coefficient $> 0$). On peut prendre $f(x) = (x - (${r1}))(x - ${r2}) = (x + ${-r1})(x - ${r2})$.`
      };
    }
  },

  fr05_var: (d) => {
    if (d === 1) {
      // Facile : droite affine, variation simple
      const a = pick([1, -1, 2, -2]);
      const b = randNonZero(-2, 2);
      const r = creerRepere({});
      let svg = r.svg + tracerDroite(r, a, b, { label: 'C_f' }) + r.fermer();
      const sens = a > 0 ? 'croissante' : 'décroissante';
      return {
        enonce: `Le graphique ci-contre montre la courbe d'une fonction $f$. Donner son sens de variation.`,
        svg: svg,
        corrige: `La fonction $f$ est ${sens} sur $\\mathbb{R}$.`
      };
    } else if (d === 2) {
      // Moyen : parabole, donner sommet et variations
      const a_coef = pick([1, -1]);
      const h = randNonZero(-2, 2);
      const k = randNonZero(-2, 2);
      const r = creerRepere({});
      let svg = r.svg + tracerParabole(r, a_coef, -2*a_coef*h, a_coef*h*h+k, { label: 'C_f' }) + r.fermer();
      const sens_av = a_coef > 0 ? 'décroissante' : 'croissante';
      const sens_ap = a_coef > 0 ? 'croissante' : 'décroissante';
      const extremum = a_coef > 0 ? 'minimum' : 'maximum';
      return {
        enonce: `Le graphique ci-contre montre la courbe d'une fonction $f$. Donner ses variations et son extremum.`,
        svg: svg,
        corrige: `$f$ est ${sens_av} sur $]-\\infty\\,;\\,${h}]$ puis ${sens_ap} sur $[${h}\\,;\\,+\\infty[$. Le ${extremum} est $${k}$, atteint en $x = ${h}$.`
      };
    } else {
      // Difficile : parabole avec lecture précise du sommet et des bornes
      const a_coef = pick([1, -1]);
      const h = randNonZero(-1, 1);
      const k = randNonZero(-2, 2);
      const r = creerRepere({});
      let svg = r.svg + tracerParabole(r, a_coef, -2*a_coef*h, a_coef*h*h+k, { label: 'C_f' }) + r.fermer();
      // Calculer combien de solutions a f(x) = 0
      // (x-h)² + k/a = 0 → x = h ± √(-k/a) si -k/a ≥ 0
      const disc = -k/a_coef;
      let nb_sol = "aucune";
      if (disc > 0) nb_sol = "deux";
      else if (disc === 0) nb_sol = "une";
      return {
        enonce: `Le graphique ci-contre montre la courbe d'une fonction $f$. Combien de solutions admet l'équation $f(x) = 0$ ? Justifier.`,
        svg: svg,
        corrige: `Le sommet est en $(${h}\\,;\\,${k})$. L'équation $f(x) = 0$ admet ${nb_sol} solution${nb_sol === 'aucune' ? '' : 's'} (nombre de points d'intersection avec l'axe des abscisses).`
      };
    }
  },

  fr06_tracer: (d) => {
    if (d === 1) {
      // Facile : on donne y = ax + b, on demande deux points → graphique illustre
      const a = pick([1, -1, 2, -2]);
      const b = randNonZero(-2, 3);
      const signB = b >= 0 ? '+' : '-';
      const absB = Math.abs(b);
      const r = creerRepere({});
      let svg = r.svg + tracerDroite(r, a, b, { label: '\u0394' }) + r.fermer();
      return {
        enonce: `La droite $\\Delta$ ci-contre a pour équation $y = ${a}x ${signB} ${absB}$. Vérifier en donnant deux points par lesquels elle passe.`,
        svg: svg,
        corrige: `Pour $x = 0$ : $y = ${b}$, donc $A(0\\,;\\,${b})$. Pour $x = 1$ : $y = ${a + b}$, donc $B(1\\,;\\,${a + b})$.`
      };
    } else if (d === 2) {
      // Moyen : on donne deux points, on demande l'équation, graphique illustre
      const a = pick([1, -1, 2, -2]);
      const b = randNonZero(-2, 2);
      const x1 = randNonZero(-3, 3);
      const y1 = a*x1 + b;
      if (y1 < -3 || y1 > 3) {
        const r = creerRepere({});
        let svg = r.svg + tracerDroite(r, 1, 0, { label: '\u0394' }) + r.fermer();
        return {
          enonce: `La droite $\\Delta$ ci-contre passe par $A(1\\,;\\,1)$ et a pour coefficient directeur $1$. Donner son équation.`,
          svg: svg,
          corrige: `Équation : $y = 1 \\times x + 0 = x$. Donc $\\Delta : y = x$.`
        };
      }
      const r = creerRepere({});
      let svg = r.svg + tracerDroite(r, a, b, { label: '\u0394' }) + r.fermer();
      const signB = b >= 0 ? '+' : '-';
      const absB = Math.abs(b);
      const ax1 = a*x1;
      return {
        enonce: `La droite $\\Delta$ ci-contre passe par $A(${x1}\\,;\\,${y1})$ et a pour coefficient directeur $${a}$. Donner son équation.`,
        svg: svg,
        corrige: `Équation de la forme $y = ${a}x + b$. Or $${y1} = ${ax1} + b$, donc $b = ${b}$. Équation : $y = ${a}x ${signB} ${absB}$.`
      };
    } else {
      // Difficile : à partir du graphique et d'un point d'ordonnée à l'origine
      const a = pick([1, -1, 2, -2]);
      const x0 = randNonZero(-3, 3);
      const b = -a * x0;
      if (b < -3 || b > 3) {
        const r = creerRepere({});
        let svg = r.svg + tracerDroite(r, -1, 2, { label: '\u0394' }) + r.fermer();
        return {
          enonce: `La droite $\\Delta$ ci-contre a pour coefficient directeur $-1$ et passe par le point $(2\\,;\\,0)$. Donner son équation réduite.`,
          svg: svg,
          corrige: `$y = -1(x - 2) = -x + 2$.`
        };
      }
      const r = creerRepere({});
      let svg = r.svg + tracerDroite(r, a, b, { label: '\u0394' }) + r.fermer();
      const signB = b >= 0 ? '+' : '-';
      const absB = Math.abs(b);
      const signX0 = x0 >= 0 ? '-' : '+';
      const absX0 = Math.abs(x0);
      return {
        enonce: `La droite $\\Delta$ ci-contre a pour coefficient directeur $${a}$ et coupe l'axe des abscisses en $x = ${x0}$. Donner son équation réduite.`,
        svg: svg,
        corrige: `$y = ${a}(x ${signX0} ${absX0}) = ${a}x ${signB} ${absB}$.`
      };
    }
  },

  fr07_lire: (d) => {
    if (d === 1) {
      // Facile : droite avec coefs entiers simples, lecture directe
      const a = pick([1, -1, 2]);
      const b = randNonZero(-3, 3);
      const r = creerRepere({});
      let svg = r.svg + tracerDroite(r, a, b, { label: 'd' }) + r.fermer();
      const signB = b >= 0 ? '+' : '-';
      const absB = Math.abs(b);
      return {
        enonce: `Lire graphiquement l'équation réduite de la droite $d$ ci-contre.`,
        svg: svg,
        corrige: `Ordonnée à l'origine : $${b}$. Coefficient directeur : $${a}$ (en avançant de 1, on monte de $${a}$). Équation : $y = ${a}x ${signB} ${absB}$.`
      };
    } else if (d === 2) {
      // Moyen : coef négatif ou b décimal
      const a = pick([-1, -2, 2, -3]);
      const b = randNonZero(-3, 3);
      const r = creerRepere({});
      let svg = r.svg + tracerDroite(r, a, b, { label: 'd' }) + r.fermer();
      const signB = b >= 0 ? '+' : '-';
      const absB = Math.abs(b);
      return {
        enonce: `Lire graphiquement l'équation réduite de la droite $d$ ci-contre.`,
        svg: svg,
        corrige: `Ordonnée à l'origine : $${b}$. Coefficient directeur : $${a}$. Équation : $y = ${a}x ${signB} ${absB}$.`
      };
    } else {
      // Difficile : droite qui ne passe pas par un point entier d'axe y simple
      // ou demande de lire à partir de 2 points particuliers
      const a = pick([1, -1, 2, -2]);
      const x0 = randNonZero(-3, 3);
      const b = -a * x0;
      if (b < -3 || b > 3) {
        const r = creerRepere({});
        let svg = r.svg + tracerDroite(r, 1, -2, { label: 'd' }) + r.fermer();
        return {
          enonce: `Lire graphiquement l'équation réduite de la droite $d$ ci-contre.`,
          svg: svg,
          corrige: `$d$ coupe l'axe des ordonnées en $-2$ et a un coefficient directeur de $1$. Équation : $y = x - 2$.`
        };
      }
      const r = creerRepere({});
      let svg = r.svg + tracerDroite(r, a, b, { label: 'd' }) + r.fermer();
      const signB = b >= 0 ? '+' : '-';
      const absB = Math.abs(b);
      // Formater proprement "0 - x0" en évitant les "0 - -2"
      const denom = x0 < 0 ? `0 + ${-x0}` : `0 - ${x0}`;
      return {
        enonce: `Lire graphiquement l'équation réduite de la droite $d$ ci-contre.`,
        svg: svg,
        corrige: `$d$ coupe l'axe des abscisses en $${x0}$ (donc passe par $(${x0}\\,;\\,0)$) et l'axe des ordonnées en $${b}$. Coefficient directeur : $\\dfrac{${b} - 0}{${denom}} = ${a}$. Équation : $y = ${a}x ${signB} ${absB}$.`
      };
    }
  },

  fr08_2pts: (d) => {
    if (d === 1) {
      const xa = rand(-3, 3); let xb = rand(-3, 3); while (xb === xa) xb = rand(-3, 3);
      const ya = rand(-5, 5); const yb = rand(-5, 5);
      const m = (yb - ya) / (xb - xa);
      const mAff = Number.isInteger(m) ? `${m}` : `\\dfrac{${yb - ya}}{${xb - xa}}`;
      const xaAff = xa < 0 ? `(${xa})` : `${xa}`;
      const yaAff = ya < 0 ? `(${ya})` : `${ya}`;
      return {
        enonce: `Calculer le coefficient directeur de la droite passant par $A(${xa}\\,;\\,${ya})$ et $B(${xb}\\,;\\,${yb})$.`,
        corrige: `$m = \\dfrac{y_B - y_A}{x_B - x_A} = \\dfrac{${yb} - ${yaAff}}{${xb} - ${xaAff}} = \\dfrac{${yb - ya}}{${xb - xa}} = ${mAff}$.`
      };
    } else if (d === 2) {
      // Moyen : valeurs plus grandes, pente entière garantie
      const m = pick([2, 3, 4, 5, -2, -3]);
      const xa = pick([1, 2, 3, 5, 10]);
      const dx = pick([2, 3, 4, 5]);
      const xb = xa + dx;
      const ya = pick([50, 100, 150, 200]);
      const yb = ya + m * dx;
      return {
        enonce: `Dans un repère, on considère les points $A(${xa}\\,;\\,${ya})$ et $B(${xb}\\,;\\,${yb})$. Calculer le coefficient directeur de la droite $(AB)$.`,
        corrige: `$m = \\dfrac{${yb} - ${ya}}{${xb} - ${xa}} = \\dfrac{${yb - ya}}{${dx}} = ${m}$.`
      };
    } else {
      // Difficile : pente entière, mais nombres plus grands ou pente négative
      const m = pick([-5, -4, -3, -2, 2, 3, 4, 5]);
      const xa = pick([10, 20, 30, 50]);
      const dx = pick([5, 10, 15, 20]);
      const xb = xa + dx;
      const ya = pick([100, 150, 200, 250, 300]);
      const yb = ya + m * dx;
      const dy = yb - ya;
      const dyAff = dy < 0 ? `${dy}` : `${dy}`;
      return {
        enonce: `Dans un repère, on considère les points $C(${xa}\\,;\\,${ya})$ et $D(${xb}\\,;\\,${yb})$. Calculer le coefficient directeur de la droite $(CD)$.`,
        corrige: `$m = \\dfrac{${yb} - ${ya}}{${xb} - ${xa}} = \\dfrac{${dyAff}}{${dx}} = ${m}$.`
      };
    }
  },

  st02_moy: (d) => {
    if (d === 1) {
      const n = 5;
      const valeurs = Array.from({length: n}, () => rand(2, 18));
      const somme = valeurs.reduce((s, x) => s + x, 0);
      const moy = somme / n;
      const moyAff = Number.isInteger(moy) ? `${moy}` : moy.toFixed(2).replace('.', ',');
      return {
        enonce: `Calculer la moyenne de la série : $${valeurs.join('\\,;\\,')}$.`,
        corrige: `Moyenne : $\\dfrac{${valeurs.join(' + ')}}{${n}} = \\dfrac{${somme}}{${n}} = ${moyAff}$.`
      };
    } else if (d === 2) {
      const n = 7;
      const valeurs = Array.from({length: n}, () => rand(0, 20));
      const somme = valeurs.reduce((s, x) => s + x, 0);
      const moy = somme / n;
      const moyAff = Number.isInteger(moy) ? `${moy}` : moy.toFixed(2).replace('.', ',');
      return {
        enonce: `Calculer la moyenne de la série : $${valeurs.join('\\,;\\,')}$.`,
        corrige: `Somme : $${somme}$. Moyenne : $\\dfrac{${somme}}{${n}} \\approx ${moyAff}$.`
      };
    } else {
      return {
        enonce: `Une série a une moyenne de $12$ sur $10$ valeurs. Si on ajoute la valeur $24$, quelle est la nouvelle moyenne ?`,
        corrige: `Ancienne somme : $12 \\times 10 = 120$. Nouvelle somme : $120 + 24 = 144$. Nouvelle moyenne : $\\dfrac{144}{11} \\approx 13{,}09$.`
      };
    }
  },

  st02_moy_pond: (d) => {
    if (d === 1) {
      // Facile : 3 notes avec coef simples, on calcule la moyenne
      const notes = [rand(8, 18), rand(8, 18), rand(8, 18)];
      const coefs = [pick([1, 2, 3]), 1, 1];
      const totCoef = coefs.reduce((s, c) => s + c, 0);
      const totProd = notes.reduce((s, n, i) => s + n * coefs[i], 0);
      const moy = totProd / totCoef;
      const moyAff = Number.isInteger(moy) ? `${moy}` : moy.toFixed(2).replace('.', '{,}');
      return {
        enonce: `Un élève a obtenu : $${notes[0]}$ (coef. $${coefs[0]}$), $${notes[1]}$ (coef. $${coefs[1]}$), $${notes[2]}$ (coef. $${coefs[2]}$). Quelle est sa moyenne ?`,
        corrige: `Moyenne : $\\dfrac{${notes[0]} \\times ${coefs[0]} + ${notes[1]} \\times ${coefs[1]} + ${notes[2]} \\times ${coefs[2]}}{${totCoef}} = \\dfrac{${totProd}}{${totCoef}} = ${moyAff}$.`
      };
    } else if (d === 2) {
      // Moyen : moyenne avec 3 notes et coefs variables
      const notes = [rand(5, 18), rand(5, 18), rand(5, 18)];
      const coefs = [rand(1, 3), rand(1, 3), rand(1, 3)];
      const totCoef = coefs.reduce((s, c) => s + c, 0);
      const totProd = notes.reduce((s, n, i) => s + n * coefs[i], 0);
      const moy = totProd / totCoef;
      const estEntier = Number.isInteger(moy);
      const moyAff = estEntier ? `${moy}` : moy.toFixed(2).replace('.', '{,}');
      return {
        enonce: `Notes : $${notes[0]}$ (coef. $${coefs[0]}$), $${notes[1]}$ (coef. $${coefs[1]}$), $${notes[2]}$ (coef. $${coefs[2]}$). Calculer la moyenne.`,
        corrige: `Moyenne : $\\dfrac{${notes[0]} \\times ${coefs[0]} + ${notes[1]} \\times ${coefs[1]} + ${notes[2]} \\times ${coefs[2]}}{${totCoef}} = \\dfrac{${totProd}}{${totCoef}} ${estEntier ? '=' : '\\approx'} ${moyAff}$.`
      };
    } else {
      // Difficile : trouver la valeur manquante pour atteindre une moyenne donnée
      const n1 = rand(8, 16), n2 = rand(8, 16);
      const c1 = pick([1, 2]), c2 = pick([1, 2]);
      const cX = pick([2, 3]);
      const mCible = pick([12, 13, 14, 15]);
      // (n1*c1 + n2*c2 + x*cX) / (c1+c2+cX) = mCible
      // x = (mCible*(c1+c2+cX) - n1*c1 - n2*c2) / cX
      const numerateur = mCible * (c1 + c2 + cX) - n1*c1 - n2*c2;
      if (numerateur % cX !== 0 || numerateur / cX < 0 || numerateur / cX > 20) {
        // fallback simple
        return {
          enonce: `Voici une série : note $10$ (coef. $1$), note $8$ (coef. $2$), note $x$ (coef. $3$). Quelle doit être la valeur de $x$ pour que la moyenne soit $13$ ?`,
          corrige: `$\\dfrac{10 + 16 + 3x}{6} = 13$, soit $26 + 3x = 78$, donc $x = \\dfrac{52}{3} \\approx 17{,}3$.`
        };
      }
      const x = numerateur / cX;
      return {
        enonce: `Voici une série de notes : $${n1}$ (coef. $${c1}$), $${n2}$ (coef. $${c2}$), $x$ (coef. $${cX}$). Quelle doit être la valeur de $x$ pour que la moyenne soit $${mCible}$ ?`,
        corrige: `On résout : $\\dfrac{${n1} \\times ${c1} + ${n2} \\times ${c2} + ${cX}x}{${c1+c2+cX}} = ${mCible}$. Cela donne $${n1*c1 + n2*c2} + ${cX}x = ${mCible*(c1+c2+cX)}$, soit $${cX}x = ${numerateur}$, donc $x = ${x}$.`
      };
    }
  },

  st02_med: (d) => {
    if (d === 1) {
      // Facile : série impaire, médiane = valeur centrale
      const n = 7;
      const valeurs = [];
      while (valeurs.length < n) {
        const v = rand(1, 20);
        if (!valeurs.includes(v)) valeurs.push(v);
      }
      const tries = [...valeurs].sort((a, b) => a - b);
      const valeursMelang = [...valeurs].sort(() => Math.random() - 0.5);
      return {
        enonce: `Calculer la médiane de la série : $${valeursMelang.join('\\,;\\,')}$.`,
        corrige: `On range : $${tries.join('\\,;\\,')}$. Avec $${n}$ valeurs (impair), la médiane est la $${(n+1)/2}^e$ valeur : $${tries[(n-1)/2]}$.`
      };
    } else if (d === 2) {
      // Moyen : série paire, médiane = moyenne des 2 centrales
      const n = 6;
      const valeurs = [];
      while (valeurs.length < n) {
        const v = rand(1, 20);
        if (!valeurs.includes(v)) valeurs.push(v);
      }
      valeurs.sort((a, b) => a - b);
      const v1 = valeurs[n/2 - 1];
      const v2 = valeurs[n/2];
      const med = (v1 + v2) / 2;
      const medAff = Number.isInteger(med) ? `${med}` : med.toFixed(1).replace('.', '{,}');
      return {
        enonce: `Voici une série rangée : $${valeurs.join('\\,;\\,')}$. Quelle est sa médiane ?`,
        corrige: `Avec $${n}$ valeurs (pair), la médiane est la moyenne des $${n/2}^e$ et $${n/2+1}^e$ valeurs : $\\dfrac{${v1} + ${v2}}{2} = ${medAff}$.`
      };
    } else {
      // Difficile : comparer moyenne et médiane sur deux séries
      const variantes = [
        () => ({
          enonce: `Considérer les deux séries A : $1\\,;\\,2\\,;\\,3$ et B : $0{,}5\\,;\\,2\\,;\\,100$. Comparer leur moyenne et leur médiane.`,
          corrige: `Moyenne A : $\\dfrac{1+2+3}{3} = 2$. Médiane A : $2$. Moyenne B : $\\dfrac{0{,}5+2+100}{3} \\approx 34{,}17$. Médiane B : $2$. Les deux séries ont la **même médiane** ($2$) mais des **moyennes très différentes** : la moyenne est sensible aux valeurs extrêmes.`
        }),
        () => ({
          enonce: `Considérer les deux séries C : $5\\,;\\,6\\,;\\,7\\,;\\,8\\,;\\,9$ et D : $1\\,;\\,6\\,;\\,7\\,;\\,8\\,;\\,13$. Comparer leur moyenne et leur médiane.`,
          corrige: `Moyenne C : $\\dfrac{35}{5} = 7$. Médiane C : $7$. Moyenne D : $\\dfrac{35}{5} = 7$. Médiane D : $7$. Les deux séries ont les **mêmes moyenne et médiane**, mais leurs dispersions diffèrent (D plus étalée).`
        }),
        () => ({
          enonce: `Une série de $5$ valeurs a pour moyenne $10$ et médiane $8$. Que peut-on en déduire sur la distribution ?`,
          corrige: `La moyenne ($10$) est supérieure à la médiane ($8$), ce qui suggère que quelques valeurs élevées tirent la moyenne vers le haut. La distribution est asymétrique à droite.`
        })
      ];
      return pick(variantes)();
    }
  },

  st02_quart: (d) => {
    if (d === 1) {
      // Facile : série rangée de 8 valeurs, on demande Q1 et Q3
      const n = 8;
      const valeurs = [];
      while (valeurs.length < n) {
        const v = rand(1, 20);
        if (!valeurs.includes(v)) valeurs.push(v);
      }
      valeurs.sort((a, b) => a - b);
      const q1 = valeurs[1]; // 2e valeur (rang ceil(8/4)=2)
      const q3 = valeurs[5]; // 6e valeur (rang ceil(24/4)=6)
      return {
        enonce: `Voici une série rangée : $${valeurs.join('\\,;\\,')}$. Déterminer $Q_1$ (premier quartile) et $Q_3$ (troisième quartile).`,
        corrige: `$Q_1$ est la $\\lceil ${n}/4 \\rceil = 2^e$ valeur : $Q_1 = ${q1}$. $Q_3$ est la $\\lceil 3 \\times ${n}/4 \\rceil = 6^e$ valeur : $Q_3 = ${q3}$.`
      };
    } else if (d === 2) {
      // Moyen : série de 12 valeurs, médiane + Q1 + Q3
      const n = 12;
      const valeurs = [];
      while (valeurs.length < n) {
        const v = rand(1, 25);
        if (!valeurs.includes(v)) valeurs.push(v);
      }
      valeurs.sort((a, b) => a - b);
      const med = (valeurs[5] + valeurs[6]) / 2;
      const q1 = valeurs[2]; // ceil(12/4)=3, 3e valeur
      const q3 = valeurs[8]; // ceil(36/4)=9, 9e valeur
      const medAff = Number.isInteger(med) ? `${med}` : med.toFixed(1).replace('.', '{,}');
      return {
        enonce: `Voici une série rangée : $${valeurs.join('\\,;\\,')}$. Déterminer la médiane, $Q_1$ et $Q_3$.`,
        corrige: `Avec $12$ valeurs (pair) : médiane $= \\dfrac{${valeurs[5]} + ${valeurs[6]}}{2} = ${medAff}$. $Q_1$ est la $\\lceil 12/4 \\rceil = 3^e$ valeur, soit $${q1}$. $Q_3$ est la $\\lceil 3 \\times 12/4 \\rceil = 9^e$ valeur, soit $${q3}$.`
      };
    } else {
      // Difficile : comparer la dispersion de deux séries
      const variantes = [
        () => ({
          enonce: `Deux séries A : $9\\,;\\,10\\,;\\,10\\,;\\,11$ et B : $7\\,;\\,10\\,;\\,10\\,;\\,13$. Comparer la moyenne et l'écart-type (qualitatif).`,
          corrige: `Moyenne A $= \\dfrac{40}{4} = 10$, moyenne B $= \\dfrac{40}{4} = 10$. Les valeurs de B sont plus dispersées autour de $10$, donc l'écart-type de B est plus grand que celui de A.`
        }),
        () => ({
          enonce: `Deux séries C : $4\\,;\\,5\\,;\\,5\\,;\\,6$ et D : $3\\,;\\,5\\,;\\,5\\,;\\,7$. Comparer leur moyenne et leur étendue.`,
          corrige: `Les deux moyennes valent $5$. Étendue C : $6 - 4 = 2$. Étendue D : $7 - 3 = 4$. La série D est plus dispersée.`
        }),
        () => ({
          enonce: `Une série a pour quartiles : $Q_1 = 8$, médiane $= 12$, $Q_3 = 16$. Quelle est l'écart interquartile $Q_3 - Q_1$ ?`,
          corrige: `Écart interquartile : $Q_3 - Q_1 = 16 - 8 = 8$. 50 % des valeurs sont comprises entre $8$ et $16$.`
        })
      ];
      return pick(variantes)();
    }
  },

  st03_boite: (d) => {
    if (d === 1) {
      const variantes = [
        { min: 5, q1: 8, med: 12, q3: 15, max: 20, etendue: 15 },
        { min: 2, q1: 4, med: 7, q3: 10, max: 14, etendue: 12 },
        { min: 0, q1: 3, med: 5, q3: 9, max: 12, etendue: 12 }
      ];
      const v = pick(variantes);
      const svg = tracerBoiteMoustaches(v.min, v.q1, v.med, v.q3, v.max);
      return {
        enonce: `La boîte à moustaches ci-contre représente les notes d'une classe. Quelle est l'étendue de cette série ?`,
        svg: svg,
        corrige: `Étendue = maximum - minimum = $${v.max} - ${v.min} = ${v.etendue}$.`
      };
    } else if (d === 2) {
      const variantes = [
        { min: 5, q1: 9, med: 12, q3: 14, max: 18, ei: 5 },
        { min: 3, q1: 6, med: 9, q3: 13, max: 17, ei: 7 },
        { min: 1, q1: 4, med: 7, q3: 10, max: 15, ei: 6 }
      ];
      const v = pick(variantes);
      const svg = tracerBoiteMoustaches(v.min, v.q1, v.med, v.q3, v.max);
      return {
        enonce: `La boîte à moustaches ci-contre représente une série statistique. Donner sa médiane et son écart interquartile.`,
        svg: svg,
        corrige: `Médiane : $${v.med}$. Écart interquartile : $Q_3 - Q_1 = ${v.q3} - ${v.q1} = ${v.ei}$.`
      };
    } else {
      const variantes = [
        { min: 10, q1: 12, med: 14, q3: 18, max: 25, descr: "la moitié supérieure (14 à 25) est plus étalée que la moitié inférieure (10 à 14)" },
        { min: 2, q1: 8, med: 11, q3: 13, max: 16, descr: "la moitié inférieure (2 à 11) est plus étalée que la moitié supérieure (11 à 16)" },
        { min: 0, q1: 5, med: 10, q3: 15, max: 20, descr: "la distribution est symétrique autour de la médiane" }
      ];
      const v = pick(variantes);
      const svg = tracerBoiteMoustaches(v.min, v.q1, v.med, v.q3, v.max);
      const etendue = v.max - v.min;
      const ei = v.q3 - v.q1;
      return {
        enonce: `La boîte à moustaches ci-contre représente une série. Calculer l'étendue et l'écart interquartile, puis décrire la dispersion.`,
        svg: svg,
        corrige: `Étendue : $${v.max} - ${v.min} = ${etendue}$. Écart interquartile : $${v.q3} - ${v.q1} = ${ei}$. ${v.descr}.`
      };
    }
  },

  pr04_equi: (d) => {
    if (d === 1) {
      const variantes = [
        () => ({ enonce: `On lance un dé équilibré à $6$ faces. Quelle est la probabilité d'obtenir un $3$ ?`,
                 corrige: `Il y a $6$ issues équiprobables et $1$ favorable. $P(A) = \\dfrac{1}{6}$.` }),
        () => ({ enonce: `On tire une carte au hasard dans un jeu de $32$ cartes. Quelle est la probabilité d'obtenir un As ?`,
                 corrige: `Il y a $4$ As parmi $32$ cartes. $P = \\dfrac{4}{32} = \\dfrac{1}{8}$.` }),
        () => ({ enonce: `Une urne contient $3$ boules rouges et $5$ boules bleues. Quelle est la probabilité de tirer une boule rouge ?`,
                 corrige: `$P = \\dfrac{3}{3 + 5} = \\dfrac{3}{8}$.` })
      ];
      return pick(variantes)();
    } else if (d === 2) {
      const variantes = [
        () => ({ enonce: `On lance un dé équilibré à $6$ faces. Quelle est la probabilité d'obtenir un nombre pair ?`,
                 corrige: `Issues favorables : $\\{2, 4, 6\\}$, soit $3$ issues. $P = \\dfrac{3}{6} = \\dfrac{1}{2}$.` }),
        () => ({ enonce: `Dans un jeu de $32$ cartes, quelle est la probabilité d'obtenir une figure (valet, dame ou roi) ?`,
                 corrige: `Il y a $3 \\times 4 = 12$ figures. $P = \\dfrac{12}{32} = \\dfrac{3}{8}$.` }),
        () => ({ enonce: `Une urne contient $4$ boules numérotées de $1$ à $4$. On tire au hasard $2$ boules successivement avec remise. Quelle est la probabilité d'obtenir deux fois le numéro $1$ ?`,
                 corrige: `$P = \\dfrac{1}{4} \\times \\dfrac{1}{4} = \\dfrac{1}{16}$.` })
      ];
      return pick(variantes)();
    } else {
      const variantes = [
        () => ({ enonce: `On lance deux pièces équilibrées simultanément. Quelle est la probabilité que les deux pièces tombent du même côté ?`,
                 corrige: `Issues : $\\{PP, PF, FP, FF\\}$, $4$ équiprobables. Favorables : $\\{PP, FF\\}$, soit $2$. $P = \\dfrac{2}{4} = \\dfrac{1}{2}$.` }),
        () => ({ enonce: `Dans un jeu de $32$ cartes, quelle est la probabilité d'obtenir un As ou un Pique ?`,
                 corrige: `As : $4$, Piques : $8$, As de Pique compté deux fois : $1$. Total : $4 + 8 - 1 = 11$. $P = \\dfrac{11}{32}$.` }),
        () => ({ enonce: `On lance deux dés équilibrés à $6$ faces. Quelle est la probabilité que la somme des deux dés soit égale à $7$ ?`,
                 corrige: `Il y a $36$ issues équiprobables. Sommes égales à $7$ : $\\{(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)\\}$, soit $6$ issues. $P = \\dfrac{6}{36} = \\dfrac{1}{6}$.` }),
        () => ({ enonce: `Dans une urne, $5$ jetons numérotés de $1$ à $5$. On en tire $2$ simultanément. Quelle est la probabilité d'obtenir $2$ jetons de somme paire ?`,
                 corrige: `$\\binom{5}{2} = 10$ tirages possibles. Somme paire : pair+pair ou impair+impair. Pairs : $\\{2,4\\}$ → $\\binom{2}{2}=1$. Impairs : $\\{1,3,5\\}$ → $\\binom{3}{2}=3$. Total favorables : $4$. $P = \\dfrac{4}{10} = \\dfrac{2}{5}$.` })
      ];
      return pick(variantes)();
    }
  },

  pr02_contraire: (d) => {
    if (d === 1) {
      const variantes = [
        () => {
          const p = pick([0.3, 0.4, 0.6, 0.75, 0.8]);
          return { enonce: `Soit $A$ un événement de probabilité $P(A) = ${p.toString().replace('.', ',')}$. Quelle est la probabilité de l'événement contraire $\\bar{A}$ ?`,
                   corrige: `$P(\\bar{A}) = 1 - P(A) = 1 - ${p.toString().replace('.', ',')} = ${(1-p).toString().replace('.', ',')}$.` };
        },
        () => ({ enonce: `On lance un dé à $6$ faces. Quelle est la probabilité de ne pas obtenir un $6$ ?`,
                 corrige: `$P(\\text{pas 6}) = 1 - \\dfrac{1}{6} = \\dfrac{5}{6}$.` })
      ];
      return pick(variantes)();
    } else if (d === 2) {
      const variantes = [
        () => ({ enonce: `Dans un jeu de $32$ cartes, quelle est la probabilité de ne pas tirer un cœur ?`,
                 corrige: `$P(\\text{cœur}) = \\dfrac{8}{32} = \\dfrac{1}{4}$. Donc $P(\\text{pas cœur}) = 1 - \\dfrac{1}{4} = \\dfrac{3}{4}$.` }),
        () => ({ enonce: `On lance deux dés à $6$ faces. La probabilité d'obtenir un double $6$ est $\\dfrac{1}{36}$. Quelle est la probabilité de **ne pas** obtenir un double $6$ ?`,
                 corrige: `$P = 1 - \\dfrac{1}{36} = \\dfrac{35}{36}$.` }),
        () => ({ enonce: `Dans un jeu de $52$ cartes, on tire une carte. Quelle est la probabilité de **ne pas** obtenir une figure (valet, dame, roi) ?`,
                 corrige: `$P(\\text{figure}) = \\dfrac{12}{52} = \\dfrac{3}{13}$. Donc $P(\\text{pas figure}) = 1 - \\dfrac{3}{13} = \\dfrac{10}{13}$.` }),
        () => ({ enonce: `Une urne contient $7$ boules : $3$ rouges et $4$ bleues. On tire une boule au hasard. Quelle est la probabilité de **ne pas** tirer une boule rouge ?`,
                 corrige: `$P(\\text{rouge}) = \\dfrac{3}{7}$. Donc $P(\\text{pas rouge}) = 1 - \\dfrac{3}{7} = \\dfrac{4}{7}$.` })
      ];
      return pick(variantes)();
    } else {
      const variantes = [
        () => ({
          enonce: `Dans une urne, $P(\\text{rouge}) = \\dfrac{2}{5}$ et $P(\\text{bleu}) = \\dfrac{1}{3}$. Quelle est la probabilité de tirer une boule ni rouge ni bleue ?`,
          corrige: `$P(\\text{rouge ou bleu}) = \\dfrac{2}{5} + \\dfrac{1}{3} = \\dfrac{6 + 5}{15} = \\dfrac{11}{15}$. Donc $P(\\text{ni rouge ni bleu}) = 1 - \\dfrac{11}{15} = \\dfrac{4}{15}$.`
        }),
        () => ({
          enonce: `Dans un jeu de $52$ cartes, on tire une carte au hasard. Quelle est la probabilité que la carte ne soit ni un roi ni un cœur ?`,
          corrige: `$P(\\text{roi}) = \\dfrac{4}{52}$, $P(\\text{cœur}) = \\dfrac{13}{52}$, $P(\\text{roi de cœur}) = \\dfrac{1}{52}$. Donc $P(\\text{roi ou cœur}) = \\dfrac{4 + 13 - 1}{52} = \\dfrac{16}{52}$. Et $P(\\text{ni roi ni cœur}) = 1 - \\dfrac{16}{52} = \\dfrac{36}{52} = \\dfrac{9}{13}$.`
        }),
        () => {
          const a = pick([2, 3, 4]); const b = pick([5, 6, 7]); const denom = pick([12, 15, 20]);
          // P(A) = a/denom, P(B) = b/denom, événements disjoints
          if (a + b >= denom) return null;
          return {
            enonce: `Dans une urne, $P(A) = \\dfrac{${a}}{${denom}}$ et $P(B) = \\dfrac{${b}}{${denom}}$, avec $A$ et $B$ incompatibles. Quelle est la probabilité de l'événement contraire de $A \\cup B$ ?`,
            corrige: `$P(A \\cup B) = P(A) + P(B) = \\dfrac{${a}}{${denom}} + \\dfrac{${b}}{${denom}} = \\dfrac{${a+b}}{${denom}}$. Donc $P(\\overline{A \\cup B}) = 1 - \\dfrac{${a+b}}{${denom}} = \\dfrac{${denom - a - b}}{${denom}}$.`
          };
        }
      ];
      let res = null, tries = 0;
      while (!res && tries < 5) { res = pick(variantes)(); tries++; }
      return res || { enonce: 'Calculer 1 - 0,3.', corrige: '$1 - 0{,}3 = 0{,}7$.' };
    }
  },

  pr03_somme: (d) => {
    if (d === 1) {
      // Facile : 4 issues, on connaît 3 probabilités, on cherche la 4e
      const variantes = [
        () => {
          // Probabilités sous forme décimale
          const p1 = pick([0.2, 0.3, 0.4]);
          const p2 = pick([0.1, 0.2, 0.3]);
          const p3 = pick([0.1, 0.15, 0.2]);
          const p4 = 1 - p1 - p2 - p3;
          if (p4 <= 0 || p4 >= 1) return null;
          const fmt = (v) => v.toFixed(2).replace(/0+$/, '').replace(/\.$/, '').replace('.', '{,}');
          return {
            enonce: `On tire un objet parmi $4$ catégories A, B, C, D. On a $P(A) = ${fmt(p1)}$, $P(B) = ${fmt(p2)}$, $P(C) = ${fmt(p3)}$. Calculer $P(D)$.`,
            corrige: `La somme des probabilités vaut $1$. Donc $P(D) = 1 - ${fmt(p1)} - ${fmt(p2)} - ${fmt(p3)} = ${fmt(p4)}$.`
          };
        },
        () => {
          // Probabilités sous forme de fractions de dénominateur 10
          const d = 10;
          const p1 = rand(1, 4), p2 = rand(1, 3), p3 = rand(1, 3);
          const p4 = d - p1 - p2 - p3;
          if (p4 <= 0) return null;
          return {
            enonce: `Un dé truqué à $4$ faces a des probabilités $P(1) = \\dfrac{${p1}}{${d}}$, $P(2) = \\dfrac{${p2}}{${d}}$, $P(3) = \\dfrac{${p3}}{${d}}$. Calculer $P(4)$.`,
            corrige: `La somme vaut $1$ : $P(4) = 1 - \\dfrac{${p1}}{${d}} - \\dfrac{${p2}}{${d}} - \\dfrac{${p3}}{${d}} = \\dfrac{${d} - ${p1} - ${p2} - ${p3}}{${d}} = \\dfrac{${p4}}{${d}}$.`
          };
        }
      ];
      let res = null, tries = 0;
      while (!res && tries < 10) { res = pick(variantes)(); tries++; }
      return res || { enonce: 'Sur 4 issues, P(A) = 0,2, P(B) = 0,3, P(C) = 0,3. Calculer P(D).', corrige: '$P(D) = 1 - 0{,}2 - 0{,}3 - 0{,}3 = 0{,}2$.' };
    } else if (d === 2) {
      // Moyen : pièce ou dé truqué, rapport entre les issues
      const variantes = [
        () => {
          const k = pick([2, 3, 4]);
          // P(pile) = k * P(face), donc P(face) = 1/(k+1)
          return {
            enonce: `On lance une pièce truquée : on a $${k}$ fois plus de chances de tomber sur "pile" que sur "face". Quelle est la probabilité de tomber sur "pile" ?`,
            corrige: `Soit $P(\\text{face}) = p$. Alors $P(\\text{pile}) = ${k}p$. Or $p + ${k}p = 1$, donc $${k+1}p = 1$, soit $p = \\dfrac{1}{${k+1}}$. Donc $P(\\text{pile}) = \\dfrac{${k}}{${k+1}}$.`
          };
        },
        () => {
          // Dé truqué à 6 faces : P(6) = k * P(autre face), équiprobables ailleurs
          const k = pick([2, 3]);
          // Soit p = P(autres faces), alors 5p + kp = 1, soit p = 1/(5+k)
          return {
            enonce: `Un dé à $6$ faces est truqué : la face $6$ a $${k}$ fois plus de chances d'apparaître que chacune des autres faces. Quelle est la probabilité d'obtenir un $6$ ?`,
            corrige: `Notons $p$ la probabilité commune des faces $1$ à $5$. Alors $P(6) = ${k}p$, et $5p + ${k}p = 1$, soit $${5+k}p = 1$, donc $p = \\dfrac{1}{${5+k}}$. Ainsi $P(6) = \\dfrac{${k}}{${5+k}}$.`
          };
        }
      ];
      return pick(variantes)();
    } else {
      // Difficile : 6 issues, plusieurs équiprobables, on en cherche une
      const variantes = [
        () => {
          // P(3) et P(6) données, faces 1,2,4,5 équiprobables
          const p3 = { num: 1, den: 4 };
          const p6 = { num: 1, den: 12 };
          // 4p + 1/4 + 1/12 = 1, soit 4p = 1 - 4/12 = 8/12 = 2/3, p = 1/6
          return {
            enonce: `Un dé à $6$ faces est truqué : les faces $1, 2, 4, 5$ sont équiprobables. On donne $P(3) = \\dfrac{1}{4}$ et $P(6) = \\dfrac{1}{12}$. Calculer $P(1)$.`,
            corrige: `Notons $p = P(1) = P(2) = P(4) = P(5)$. Alors $4p + \\dfrac{1}{4} + \\dfrac{1}{12} = 1$. Or $\\dfrac{1}{4} + \\dfrac{1}{12} = \\dfrac{3}{12} + \\dfrac{1}{12} = \\dfrac{4}{12} = \\dfrac{1}{3}$. Donc $4p = 1 - \\dfrac{1}{3} = \\dfrac{2}{3}$, soit $p = \\dfrac{1}{6}$.`
          };
        },
        () => {
          // Roue à 5 secteurs : P(rouge) = 0,2, P(bleu) = 2*P(vert), reste = 0,4
          // 0,2 + 2p + p + autre = 1 → équation
          const pVert = pick([0.1, 0.15, 0.2]);
          const pBleu = 2 * pVert;
          const pRouge = 0.2;
          const pAutre = 1 - pVert - pBleu - pRouge;
          if (pAutre <= 0 || pAutre >= 1) return null;
          const fmt = (v) => v.toFixed(2).replace(/0+$/, '').replace(/\.$/, '').replace('.', '{,}');
          return {
            enonce: `Une roue est divisée en $4$ couleurs : rouge, bleu, vert, jaune. On sait que $P(\\text{rouge}) = ${fmt(pRouge)}$ et que $P(\\text{bleu}) = 2 \\times P(\\text{vert})$. Si $P(\\text{jaune}) = ${fmt(pAutre)}$, calculer $P(\\text{vert})$.`,
            corrige: `Soit $p = P(\\text{vert})$. Alors $P(\\text{bleu}) = 2p$, et la somme des probabilités vaut $1$ : $${fmt(pRouge)} + 2p + p + ${fmt(pAutre)} = 1$, soit $3p = 1 - ${fmt(pRouge)} - ${fmt(pAutre)} = ${fmt(1 - pRouge - pAutre)}$, donc $p = ${fmt(pVert)}$.`
          };
        }
      ];
      let res = null, tries = 0;
      while (!res && tries < 5) { res = pick(variantes)(); tries++; }
      return res || { enonce: 'Une roue à 4 secteurs : P(A) = 0,2, P(B) = 0,3, P(C) = 0,3. Calculer P(D).', corrige: '$P(D) = 1 - 0{,}2 - 0{,}3 - 0{,}3 = 0{,}2$.' };
    }
  },

  pr05_tab: (d) => {
    if (d === 1) {
      const variantes = [
        () => {
          const total = 200;
          const aime = 120;
          const aimeF = 80;
          const f = 90;
          return {
            enonce: `Dans un sondage sur $${total}$ personnes : $${aime}$ aiment le café (dont $${aimeF}$ femmes). Il y a $${f}$ femmes au total. Si on choisit une femme au hasard, quelle est la probabilité qu'elle aime le café ?`,
            corrige: `$P_{\\text{femme}}(\\text{café}) = \\dfrac{${aimeF}}{${f}} = \\dfrac{${aimeF/10}}{${f/10}}$.`
          };
        },
        () => ({
          enonce: `Dans une classe de $30$ élèves : $18$ font du sport, dont $10$ filles. Il y a $14$ filles au total. Si on choisit une fille au hasard, quelle est la probabilité qu'elle fasse du sport ?`,
          corrige: `$P_{\\text{fille}}(\\text{sport}) = \\dfrac{10}{14} = \\dfrac{5}{7}$.`
        }),
        () => ({
          enonce: `Sur $150$ candidats à un examen, $90$ ont réussi. Parmi les $90$ réussis, $60$ avaient suivi une préparation. $100$ candidats au total avaient suivi la préparation. Quelle est la probabilité qu'un candidat ayant suivi la préparation ait réussi ?`,
          corrige: `$P_{\\text{prépa}}(\\text{réussi}) = \\dfrac{60}{100} = 0{,}6$.`
        })
      ];
      return pick(variantes)();
    } else if (d === 2) {
      const variantes = [
        () => ({
          enonce: `Sur $200$ coureurs, $20$ ont été testés positifs (dont $5$ sont effectivement dopés). $7$ coureurs au total sont dopés. Si un coureur est testé positif, quelle est la probabilité qu'il **ne soit pas** dopé ?`,
          corrige: `Sur $20$ positifs, $5$ sont dopés et $15$ ne le sont pas. $P_{\\text{positif}}(\\text{pas dopé}) = \\dfrac{15}{20} = 0{,}75 = 75\\,\\%$.`
        }),
        () => ({
          enonce: `Une enquête sur $500$ ménages : $300$ ont un chien, $200$ ont un chat, et $80$ ont les deux. Si un ménage possède un chien, quelle est la probabilité qu'il possède aussi un chat ?`,
          corrige: `$P_{\\text{chien}}(\\text{chat}) = \\dfrac{80}{300} = \\dfrac{4}{15} \\approx 0{,}267$.`
        }),
        () => ({
          enonce: `Dans une entreprise : $60$ salariés sont cadres et $40$ non-cadres. Parmi les cadres, $15$ télétravaillent ; parmi les non-cadres, $5$ télétravaillent. Si une personne télétravaille, quelle est la probabilité qu'elle soit cadre ?`,
          corrige: `Total télétravailleurs : $15 + 5 = 20$. $P_{\\text{tt}}(\\text{cadre}) = \\dfrac{15}{20} = 0{,}75$.`
        })
      ];
      return pick(variantes)();
    } else {
      const variantes = [
        () => ({
          enonce: `Dans un club d'escalade de $100$ adhérents : $75$ viennent le lundi, $65$ le jeudi, $45$ les deux jours. Si on choisit au hasard un adhérent venu le lundi, quelle est la probabilité qu'il soit aussi venu le jeudi ?`,
          corrige: `Sur $75$ adhérents venus le lundi, $45$ sont aussi venus le jeudi. $P_{\\text{lundi}}(\\text{jeudi}) = \\dfrac{45}{75} = \\dfrac{3}{5} = 0{,}6$.`
        }),
        () => ({
          enonce: `Dans une école : $400$ élèves au total. $250$ aiment les maths, $200$ aiment le sport, $150$ aiment les deux. Si on choisit un élève qui aime le sport, quelle est la probabilité qu'il aime aussi les maths ?`,
          corrige: `Sur $200$ aimant le sport, $150$ aiment aussi les maths. $P_{\\text{sport}}(\\text{maths}) = \\dfrac{150}{200} = 0{,}75 = 75\\,\\%$.`
        }),
        () => ({
          enonce: `Une étude sur $1000$ patients : $300$ ont la grippe et la fièvre, $400$ ont la fièvre. Si un patient a la fièvre, quelle est la probabilité qu'il ait la grippe ?`,
          corrige: `$P_{\\text{fièvre}}(\\text{grippe}) = \\dfrac{300}{400} = 0{,}75$.`
        })
      ];
      return pick(variantes)();
    }
  },

  pr05_arbre: (d) => {
    if (d === 1) {
      // Facile : produit P(A)*P_A(B) avec valeurs décimales simples
      const variantes = [
        () => {
          const pA = pick([0.3, 0.4, 0.5, 0.6, 0.7, 0.8]);
          const pAB = pick([0.2, 0.3, 0.4, 0.5, 0.6]);
          const inter = (pA * pAB).toFixed(2).replace(/0+$/, '').replace(/\.$/, '');
          return {
            enonce: `On considère un arbre pondéré : $P(A) = ${String(pA).replace('.', '{,}')}$, $P_A(B) = ${String(pAB).replace('.', '{,}')}$. Calculer $P(A \\cap B)$.`,
            corrige: `$P(A \\cap B) = P(A) \\times P_A(B) = ${String(pA).replace('.', '{,}')} \\times ${String(pAB).replace('.', '{,}')} = ${inter.replace('.', '{,}')}$.`
          };
        },
        () => {
          const pPluie = pick([0.3, 0.4]);
          const pRetardSiPluie = pick([0.5, 0.6, 0.7]);
          const inter = (pPluie * pRetardSiPluie).toFixed(2).replace(/0+$/, '').replace(/\.$/, '');
          return {
            enonce: `On considère qu'il pleut avec probabilité $${String(pPluie).replace('.', '{,}')}$. S'il pleut, le train est en retard avec probabilité $${String(pRetardSiPluie).replace('.', '{,}')}$. Quelle est la probabilité qu'il pleuve ET que le train soit en retard ?`,
            corrige: `$P(\\text{pluie} \\cap \\text{retard}) = P(\\text{pluie}) \\times P_{\\text{pluie}}(\\text{retard}) = ${String(pPluie).replace('.', '{,}')} \\times ${String(pRetardSiPluie).replace('.', '{,}')} = ${inter.replace('.', '{,}')}$.`
          };
        }
      ];
      return pick(variantes)();
    } else if (d === 2) {
      // Moyen : probabilité d'une intersection dans contexte de test médical
      const variantes = [
        () => {
          const pM = pick([0.02, 0.05, 0.1]);
          const pPosSiM = pick([0.85, 0.9, 0.95]);
          const inter = (pM * pPosSiM).toFixed(4).replace(/0+$/, '').replace(/\.$/, '');
          return {
            enonce: `Une maladie touche $${String(pM).replace('.', '{,}')}$ de la population. Si on est malade, le test est positif avec probabilité $${String(pPosSiM).replace('.', '{,}')}$. Calculer la probabilité d'être malade et d'avoir un test positif.`,
            corrige: `$P(M \\cap +) = P(M) \\times P_M(+) = ${String(pM).replace('.', '{,}')} \\times ${String(pPosSiM).replace('.', '{,}')} = ${inter.replace('.', '{,}')}$.`
          };
        },
        () => {
          const pA = pick([0.6, 0.7]);
          const pBA = pick([0.4, 0.5]);
          const inter = (pA * pBA).toFixed(2).replace(/0+$/, '').replace(/\.$/, '');
          return {
            enonce: `Dans une classe, $${String(pA).replace('.', '{,}')}$ des élèves font de l'allemand. Parmi eux, $${String(pBA).replace('.', '{,}')}$ font aussi de l'espagnol. Quelle est la probabilité qu'un élève choisi au hasard fasse les deux langues ?`,
            corrige: `$P(A \\cap E) = P(A) \\times P_A(E) = ${String(pA).replace('.', '{,}')} \\times ${String(pBA).replace('.', '{,}')} = ${inter.replace('.', '{,}')}$.`
          };
        }
      ];
      return pick(variantes)();
    } else {
      // Difficile : probabilités totales
      // Helper pour formater une décimale en notation française
      const fmt = (v) => {
        const s = (Math.round(v * 10000) / 10000).toString();
        return s.replace('.', '{,}');
      };
      const variantes = [
        () => {
          const pM = pick([0.05, 0.1]);
          const pPosM = pick([0.9, 0.95]);
          const pPosNonM = pick([0.05, 0.1, 0.15]);
          const t1 = pM * pPosM;
          const t2 = (1-pM) * pPosNonM;
          const pPos = t1 + t2;
          return {
            enonce: `Une maladie touche $${fmt(pM)}$ de la population. Test positif : $${fmt(pPosM)}$ si malade, $${fmt(pPosNonM)}$ sinon. Calculer la probabilité $P(+)$ d'être testé positif.`,
            corrige: `Formule des probabilités totales : $P(+) = P(M) \\times P_M(+) + P(\\bar{M}) \\times P_{\\bar{M}}(+) = ${fmt(pM)} \\times ${fmt(pPosM)} + ${fmt(1-pM)} \\times ${fmt(pPosNonM)} = ${fmt(t1)} + ${fmt(t2)} = ${fmt(pPos)}$.`
          };
        },
        () => {
          const pPluie = pick([0.3, 0.4]);
          const pRetardPluie = pick([0.5, 0.6]);
          const pRetardSec = pick([0.1, 0.15]);
          const t1 = pPluie * pRetardPluie;
          const t2 = (1-pPluie) * pRetardSec;
          const pRetard = t1 + t2;
          return {
            enonce: `Il pleut avec probabilité $${fmt(pPluie)}$. Le train est en retard avec probabilité $${fmt(pRetardPluie)}$ s'il pleut, $${fmt(pRetardSec)}$ sinon. Quelle est la probabilité que le train soit en retard ?`,
            corrige: `Formule des probabilités totales : $P(R) = P(P) \\times P_P(R) + P(\\bar{P}) \\times P_{\\bar{P}}(R) = ${fmt(pPluie)} \\times ${fmt(pRetardPluie)} + ${fmt(1-pPluie)} \\times ${fmt(pRetardSec)} = ${fmt(t1)} + ${fmt(t2)} = ${fmt(pRetard)}$.`
          };
        }
      ];
      return pick(variantes)();
    }
  },

  vec_coords: (d) => {
    // Helpers pour bien afficher les soustractions
    const formSous = (a, b) => b >= 0 ? `${a} - ${b}` : `${a} - (${b})`;
    if (d === 1) {
      // Coordonnées restreintes à [-3, 3] pour que A et B entrent dans le repère
      const xA = randNonZero(-3, 3);
      const yA = randNonZero(-3, 3);
      let xB = randNonZero(-3, 3);
      let yB = randNonZero(-3, 3);
      // Éviter A = B
      while (xA === xB && yA === yB) {
        xB = randNonZero(-3, 3);
        yB = randNonZero(-3, 3);
      }
      const dx = xB - xA;
      const dy = yB - yA;
      // Figure : repère avec A, B et vecteur AB
      const r = creerRepere({});
      let svg = r.svg;
      svg += placerPoint(r, xA, yA, 'A');
      svg += placerPoint(r, xB, yB, 'B');
      svg += tracerVecteur(r, xA, yA, xB, yB, { label: '\u2192' });
      svg += r.fermer();
      return {
        enonce: `Soient $A(${xA}\\,;\\,${yA})$ et $B(${xB}\\,;\\,${yB})$ (voir figure ci-contre). Calculer les coordonnées du vecteur $\\vec{AB}$.`,
        svg: svg,
        corrige: `$\\vec{AB}\\begin{pmatrix} x_B - x_A \\\\ y_B - y_A \\end{pmatrix} = \\begin{pmatrix} ${formSous(xB, xA)} \\\\ ${formSous(yB, yA)} \\end{pmatrix} = \\begin{pmatrix} ${dx} \\\\ ${dy} \\end{pmatrix}$.`
      };
    } else if (d === 2) {
      // Connaissant A et le vecteur AB, trouver B
      // Restreindre A et B à [-4, 4] pour la figure
      const xA = randNonZero(-3, 3);
      const yA = randNonZero(-3, 3);
      let dx = randNonZero(-3, 3);
      let dy = randNonZero(-3, 3);
      // S'assurer que B = A + (dx, dy) reste dans [-4, 4]
      while (Math.abs(xA + dx) > 4 || Math.abs(yA + dy) > 4) {
        dx = randNonZero(-3, 3);
        dy = randNonZero(-3, 3);
      }
      const xB = xA + dx;
      const yB = yA + dy;
      const sX = dx >= 0 ? `+ ${dx}` : `- ${-dx}`;
      const sY = dy >= 0 ? `+ ${dy}` : `- ${-dy}`;
      const dxAff = dx >= 0 ? `+ ${dx}` : `+ (${dx})`;
      const dyAff = dy >= 0 ? `+ ${dy}` : `+ (${dy})`;
      // Figure : repère avec A et vecteur AB partant de A
      const r = creerRepere({});
      let svg = r.svg;
      svg += placerPoint(r, xA, yA, 'A');
      svg += tracerVecteur(r, xA, yA, xB, yB, { label: null });
      svg += r.fermer();
      return {
        enonce: `Soit $A(${xA}\\,;\\,${yA})$ et $\\vec{AB}\\begin{pmatrix} ${dx} \\\\ ${dy} \\end{pmatrix}$ (le vecteur est représenté ci-contre). Déterminer les coordonnées du point $B$.`,
        svg: svg,
        corrige: `$x_B = x_A ${dxAff} = ${xA} ${sX} = ${xB}$ et $y_B = y_A ${dyAff} = ${yA} ${sY} = ${yB}$. Donc $B(${xB}\\,;\\,${yB})$.`
      };
    } else {
      // Connaissant B et le vecteur AB, trouver A
      const xB = randNonZero(-3, 3);
      const yB = randNonZero(-3, 3);
      let dx = randNonZero(-3, 3);
      let dy = randNonZero(-3, 3);
      // S'assurer que A = B - (dx, dy) reste dans [-4, 4]
      while (Math.abs(xB - dx) > 4 || Math.abs(yB - dy) > 4) {
        dx = randNonZero(-3, 3);
        dy = randNonZero(-3, 3);
      }
      const xA = xB - dx;
      const yA = yB - dy;
      const sXB = dx >= 0 ? `${dx}` : `(${dx})`;
      const sYB = dy >= 0 ? `${dy}` : `(${dy})`;
      // Figure : repère avec B et vecteur AB arrivant à B
      const r = creerRepere({});
      let svg = r.svg;
      svg += placerPoint(r, xB, yB, 'B');
      svg += tracerVecteur(r, xA, yA, xB, yB, { label: null });
      svg += r.fermer();
      return {
        enonce: `Soit $B(${xB}\\,;\\,${yB})$ et $\\vec{AB}\\begin{pmatrix} ${dx} \\\\ ${dy} \\end{pmatrix}$ (le vecteur arrive à $B$ sur la figure). Déterminer les coordonnées du point $A$.`,
        svg: svg,
        corrige: `On a $x_B - x_A = ${dx}$, donc $x_A = x_B - ${sXB} = ${xA}$. De même $y_A = ${yB} - ${sYB} = ${yA}$. Donc $A(${xA}\\,;\\,${yA})$.`
      };
    }
  },

  vec_somme: (d) => {
    if (d === 1) {
      // Coordonnées restreintes à [-3, 3] pour que les vecteurs et leur somme rentrent
      const u1 = randNonZero(-3, 3);
      const u2 = randNonZero(-3, 3);
      let v1 = randNonZero(-3, 3);
      let v2 = randNonZero(-3, 3);
      // S'assurer que la somme reste dans [-4, 4] pour le repère
      while (Math.abs(u1 + v1) > 4 || Math.abs(u2 + v2) > 4) {
        v1 = randNonZero(-3, 3);
        v2 = randNonZero(-3, 3);
      }
      const s1 = v1 >= 0 ? `+ ${v1}` : `- ${-v1}`;
      const s2 = v2 >= 0 ? `+ ${v2}` : `- ${-v2}`;
      // Figure : vecteurs u et v depuis l'origine, puis u+v en pointillés
      const r = creerRepere({});
      let svg = r.svg;
      svg += tracerVecteur(r, 0, 0, u1, u2, { label: 'u', couleur: GRAPH_BLEU });
      svg += tracerVecteur(r, 0, 0, v1, v2, { label: 'v', couleur: '#8b6914' });
      svg += r.fermer();
      return {
        enonce: `Calculer les coordonnées du vecteur $\\vec{u} + \\vec{v}$ avec $\\vec{u}\\begin{pmatrix} ${u1} \\\\ ${u2} \\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix} ${v1} \\\\ ${v2} \\end{pmatrix}$ (voir figure ci-contre).`,
        svg: svg,
        corrige: `$\\vec{u} + \\vec{v} = \\begin{pmatrix} ${u1} ${s1} \\\\ ${u2} ${s2} \\end{pmatrix} = \\begin{pmatrix} ${u1+v1} \\\\ ${u2+v2} \\end{pmatrix}$.`
      };
    } else if (d === 2) {
      // Moyen : combinaison linéaire k*u + v avec k entier non nul, différent de 1 et -1
      // Restreindre pour que k*u et v rentrent dans le repère
      const k = pick([2, -2]); // garder k = ±2 seulement pour figure
      const u1 = randNonZero(-2, 2);
      const u2 = randNonZero(-2, 2);
      const v1 = randNonZero(-3, 3);
      const v2 = randNonZero(-3, 3);
      const ku1 = k*u1, ku2 = k*u2;
      const s1 = v1 >= 0 ? `+ ${v1}` : `- ${-v1}`;
      const s2 = v2 >= 0 ? `+ ${v2}` : `- ${-v2}`;
      // Figure : montrer u et v depuis l'origine (k*u et v+k*u peuvent être trop grands)
      const r = creerRepere({});
      let svg = r.svg;
      svg += tracerVecteur(r, 0, 0, u1, u2, { label: 'u', couleur: GRAPH_BLEU });
      svg += tracerVecteur(r, 0, 0, v1, v2, { label: 'v', couleur: '#8b6914' });
      svg += r.fermer();
      return {
        enonce: `Calculer les coordonnées du vecteur $${k}\\vec{u} + \\vec{v}$ avec $\\vec{u}\\begin{pmatrix} ${u1} \\\\ ${u2} \\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix} ${v1} \\\\ ${v2} \\end{pmatrix}$ (voir figure ci-contre).`,
        svg: svg,
        corrige: `$${k}\\vec{u} + \\vec{v} = \\begin{pmatrix} ${ku1} ${s1} \\\\ ${ku2} ${s2} \\end{pmatrix} = \\begin{pmatrix} ${k*u1+v1} \\\\ ${k*u2+v2} \\end{pmatrix}$.`
      };
    } else {
      // Difficile : relation de Chasles avec 3 points A, B, C
      // Restreindre les coords à [-3, 3] pour que tous les points rentrent et la figure soit claire
      const xA = randNonZero(-3, 3);
      const yA = randNonZero(-3, 3);
      let xB = randNonZero(-3, 3);
      let yB = randNonZero(-3, 3);
      let xC = randNonZero(-3, 3);
      let yC = randNonZero(-3, 3);
      // Éviter les points confondus
      while ((xA === xB && yA === yB) || (xB === xC && yB === yC) || (xA === xC && yA === yC)) {
        xB = randNonZero(-3, 3); yB = randNonZero(-3, 3);
        xC = randNonZero(-3, 3); yC = randNonZero(-3, 3);
      }
      // Figure : trois points avec vecteurs AB et BC
      const r = creerRepere({});
      let svg = r.svg;
      svg += tracerVecteur(r, xA, yA, xB, yB, { label: null, couleur: GRAPH_BLEU });
      svg += tracerVecteur(r, xB, yB, xC, yC, { label: null, couleur: '#8b6914' });
      svg += placerPoint(r, xA, yA, 'A');
      svg += placerPoint(r, xB, yB, 'B');
      svg += placerPoint(r, xC, yC, 'C');
      svg += r.fermer();
      return {
        enonce: `Soient $A(${xA}\\,;\\,${yA})$, $B(${xB}\\,;\\,${yB})$ et $C(${xC}\\,;\\,${yC})$ (voir figure ci-contre). Calculer les coordonnées de $\\vec{AB} + \\vec{BC}$ et identifier ce vecteur.`,
        svg: svg,
        corrige: `Par la relation de Chasles : $\\vec{AB} + \\vec{BC} = \\vec{AC}$. Ses coordonnées sont $\\begin{pmatrix} ${xC - xA} \\\\ ${yC - yA} \\end{pmatrix}$.`
      };
    }
  },

  vec_colin: (d) => {
    if (d === 1) {
      const colin = pick([true, false]);
      // Restreindre à [-3, 3] pour la figure
      const u1 = randNonZero(-3, 3);
      const u2 = randNonZero(-3, 3);
      const k = pick([-2, 2]); // pour rester dans le repère
      let v1, v2;
      if (colin) {
        v1 = k*u1; v2 = k*u2;
        // Vérifier que ça rentre dans [-4, 4]
        if (Math.abs(v1) > 4 || Math.abs(v2) > 4) {
          // Cas non colinéaire à la place
          v1 = u1 + (u1 > 0 ? 1 : -1);
          v2 = u2 - (u2 > 0 ? 1 : -1);
        }
      } else {
        v1 = u1 + (u1 > 0 ? 1 : -1);
        v2 = u2 - (u2 > 0 ? 1 : -1);
        if (Math.abs(v1) > 4) v1 = u1;
        if (Math.abs(v2) > 4) v2 = u2;
        // S'assurer qu'ils ne sont pas colinéaires malgré tout
        if (u1*v2 - u2*v1 === 0) v2 = v2 + 1;
        if (Math.abs(v2) > 4) v2 = v2 - 2;
      }
      const det = u1*v2 - u2*v1;
      const colinReel = (det === 0);
      const u1Aff = u1 < 0 ? `(${u1})` : `${u1}`;
      const u2Aff = u2 < 0 ? `(${u2})` : `${u2}`;
      const v1Aff = v1 < 0 ? `(${v1})` : `${v1}`;
      const v2Aff = v2 < 0 ? `(${v2})` : `${v2}`;
      const u2v1 = u2*v1;
      const u1v2 = u1*v2;
      const sousU2V1 = u2v1 >= 0 ? `- ${u2v1}` : `+ ${-u2v1}`;
      // Figure : deux vecteurs depuis l'origine
      const r = creerRepere({});
      let svg = r.svg;
      svg += tracerVecteur(r, 0, 0, u1, u2, { label: 'u', couleur: GRAPH_BLEU });
      svg += tracerVecteur(r, 0, 0, v1, v2, { label: 'v', couleur: '#8b6914' });
      svg += r.fermer();
      return {
        enonce: `Les vecteurs $\\vec{u}\\begin{pmatrix} ${u1} \\\\ ${u2} \\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix} ${v1} \\\\ ${v2} \\end{pmatrix}$ sont-ils colinéaires (voir figure ci-contre) ?`,
        svg: svg,
        corrige: `Déterminant : $x_u \\times y_v - y_u \\times x_v = ${u1Aff} \\times ${v2Aff} - ${u2Aff} \\times ${v1Aff} = ${u1v2} ${sousU2V1} = ${det}$. ${colinReel ? 'Le déterminant est nul, donc $\\vec{u}$ et $\\vec{v}$ sont colinéaires.' : 'Le déterminant est non nul, donc $\\vec{u}$ et $\\vec{v}$ ne sont pas colinéaires.'}`
      };
    } else if (d === 2) {
      // Moyen : trouver le coefficient k tel que v = k*u
      // Pour la figure : k = 2 ou -2 pour que les deux vecteurs rentrent
      const u1 = randNonZero(1, 2);
      const u2 = randNonZero(1, 2);
      const signe = pick([1, -1]);
      const k = pick([2, -2]); // k = 2 ou -2 pour figure lisible
      const u1Final = u1 * signe;
      const u2Final = u2 * signe;
      const v1 = k * u1Final;
      const v2 = k * u2Final;
      // Figure : montrer u et v depuis l'origine
      const r = creerRepere({});
      let svg = r.svg;
      svg += tracerVecteur(r, 0, 0, u1Final, u2Final, { label: 'u', couleur: GRAPH_BLEU });
      svg += tracerVecteur(r, 0, 0, v1, v2, { label: 'v', couleur: '#8b6914' });
      svg += r.fermer();
      return {
        enonce: `Montrer que les vecteurs $\\vec{u}\\begin{pmatrix} ${u1Final} \\\\ ${u2Final} \\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix} ${v1} \\\\ ${v2} \\end{pmatrix}$ sont colinéaires et donner le coefficient $k$ tel que $\\vec{v} = k\\vec{u}$.`,
        svg: svg,
        corrige: `On cherche $k$ tel que $${v1} = k \\times ${u1Final}$ et $${v2} = k \\times ${u2Final}$, soit $k = ${k}$ dans les deux cas. Donc $\\vec{v} = ${k}\\vec{u}$, les vecteurs sont colinéaires.`
      };
    } else {
      // Difficile : trouver y pour que deux vecteurs soient colinéaires (sans figure : trop abstrait)
      const u1 = randNonZero(2, 4);
      const u2 = randNonZero(2, 4);
      const k = randNonZero(2, 4);
      const v1b = k * u1;
      const v2_attendu = k * u2;
      return {
        enonce: `Déterminer la valeur de $y$ pour que les vecteurs $\\vec{u}\\begin{pmatrix} ${u1} \\\\ ${u2} \\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix} ${v1b} \\\\ y \\end{pmatrix}$ soient colinéaires.`,
        corrige: `$\\vec{u}$ et $\\vec{v}$ sont colinéaires si et seulement si leur déterminant est nul : $${u1} \\times y - ${u2} \\times ${v1b} = 0$, soit $y = \\dfrac{${u2} \\times ${v1b}}{${u1}} = ${v2_attendu}$.`
      };
    }
  },

  vec_norme: (d) => {
    if (d === 1) {
      // Restreindre au triplet 3-4-5 pour que le vecteur rentre dans le repère
      const a = 3, b = 4, c = 5;
      const signs = pick([[1,1], [-1,1], [1,-1], [-1,-1]]);
      const u1 = signs[0]*a;
      const u2 = signs[1]*b;
      const u1Aff = u1 >= 0 ? `${u1}^2` : `(${u1})^2`;
      const u2Aff = u2 >= 0 ? `${u2}^2` : `(${u2})^2`;
      // Figure : vecteur depuis l'origine (rentre car u1 ∈ {-3, 3}, u2 ∈ {-4, 4})
      const r = creerRepere({});
      let svg = r.svg;
      svg += tracerVecteur(r, 0, 0, u1, u2, { label: 'u', couleur: GRAPH_BLEU });
      svg += r.fermer();
      return {
        enonce: `Calculer la norme du vecteur $\\vec{u}\\begin{pmatrix} ${u1} \\\\ ${u2} \\end{pmatrix}$ représenté ci-contre.`,
        svg: svg,
        corrige: `$\\|\\vec{u}\\| = \\sqrt{${u1Aff} + ${u2Aff}} = \\sqrt{${u1*u1} + ${u2*u2}} = \\sqrt{${u1*u1+u2*u2}} = ${c}$.`
      };
    } else if (d === 2) {
      const u1 = randNonZero(-4, 4);
      const u2 = randNonZero(-4, 4);
      const carre = u1*u1 + u2*u2;
      const racine = Math.sqrt(carre);
      const estEntier = Number.isInteger(racine);
      const u1Aff = u1 >= 0 ? `${u1}^2` : `(${u1})^2`;
      const u2Aff = u2 >= 0 ? `${u2}^2` : `(${u2})^2`;
      // Figure : vecteur depuis l'origine
      const r = creerRepere({});
      let svg = r.svg;
      svg += tracerVecteur(r, 0, 0, u1, u2, { label: 'u', couleur: GRAPH_BLEU });
      svg += r.fermer();
      return {
        enonce: `Calculer la norme du vecteur $\\vec{u}\\begin{pmatrix} ${u1} \\\\ ${u2} \\end{pmatrix}$ représenté ci-contre.`,
        svg: svg,
        corrige: `$\\|\\vec{u}\\| = \\sqrt{${u1Aff} + ${u2Aff}} = \\sqrt{${u1*u1} + ${u2*u2}} = \\sqrt{${carre}}${estEntier ? ` = ${racine}` : ''}$.`
      };
    } else {
      // Distance entre deux points : on peut faire une figure si on restreint
      const variantes = [
        { xA: -1, yA: -2, xB: 2, yB: 2 },   // (3, 4) → 5
        { xA: 2, yA: 1, xB: -1, yB: -3 },    // (-3, -4) → 5
        { xA: -2, yA: 3, xB: 1, yB: -1 },    // (3, -4) → 5
        { xA: 0, yA: 2, xB: 3, yB: -2 }      // (3, -4) → 5
      ];
      const v = pick(variantes);
      const dx = v.xB - v.xA;
      const dy = v.yB - v.yA;
      const carre = dx*dx + dy*dy;
      const racine = Math.sqrt(carre);
      const estEntier = Number.isInteger(racine);
      const dxAff = dx >= 0 ? `${dx}` : `(${dx})`;
      const dyAff = dy >= 0 ? `${dy}` : `(${dy})`;
      // Figure : repère avec A et B
      const r = creerRepere({});
      let svg = r.svg;
      svg += placerPoint(r, v.xA, v.yA, 'A');
      svg += placerPoint(r, v.xB, v.yB, 'B');
      svg += r.fermer();
      return {
        enonce: `Soient $A(${v.xA}\\,;\\,${v.yA})$ et $B(${v.xB}\\,;\\,${v.yB})$ (voir figure ci-contre). Calculer la distance $AB$.`,
        svg: svg,
        corrige: `$AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2} = \\sqrt{${dxAff}^2 + ${dyAff}^2} = \\sqrt{${dx*dx} + ${dy*dy}} = \\sqrt{${carre}}${estEntier ? ` = ${racine}` : ''}$.`
      };
    }
  },

  trigo_long: (d) => {
    if (d === 1) {
      // Facile : longueur de l'hypoténuse avec angle remarquable + figure
      const variantes = [
        { angle: 30, cote: 5, formule: '\\cos', val: '\\dfrac{\\sqrt{3}}{2}', nomCote: "côté adjacent", res: (5 / Math.cos(Math.PI/6)).toFixed(2), opp: null, adj: '5', hyp: '?' },
        { angle: 45, cote: 7, formule: '\\cos', val: '\\dfrac{\\sqrt{2}}{2}', nomCote: "côté adjacent", res: (7 / Math.cos(Math.PI/4)).toFixed(2), opp: null, adj: '7', hyp: '?' },
        { angle: 60, cote: 6, formule: '\\sin', val: '\\dfrac{\\sqrt{3}}{2}', nomCote: "côté opposé", res: (6 / Math.sin(Math.PI/3)).toFixed(2), opp: '6', adj: null, hyp: '?' }
      ];
      const v = pick(variantes);
      const svg = tracerTriangleRectangle({
        angleDeg: v.angle,
        sommetA: 'A', sommetB: 'B', sommetC: 'C',
        adj: v.adj, opp: v.opp, hyp: v.hyp,
        angleNom: `${v.angle}°`
      });
      return {
        enonce: `Dans le triangle $ABC$ rectangle en $A$ ci-contre, calculer la longueur de l'hypoténuse $BC$ (arrondie au centième).`,
        svg: svg,
        corrige: `$${v.formule}(${v.angle}°) = \\dfrac{\\text{${v.nomCote}}}{\\text{hypoténuse}}$, donc $BC = \\dfrac{${v.cote}}{${v.formule}(${v.angle}°)} \\approx ${v.res}$ cm.`
      };
    } else if (d === 2) {
      // Moyen : trouver un côté avec sin, cos ou tan + figure
      const variantes = [
        { angle: 35, baseValue: 10, calc: 10*Math.sin(35*Math.PI/180), formule: '\\sin', nomCote: 'opposé', baseRole: 'hyp', adj: null, opp: '?', hyp: '10' },
        { angle: 40, baseValue: 12, calc: 12*Math.cos(40*Math.PI/180), formule: '\\cos', nomCote: 'adjacent', baseRole: 'hyp', adj: '?', opp: null, hyp: '12' },
        { angle: 25, baseValue: 8, calc: 8*Math.tan(25*Math.PI/180), formule: '\\tan', nomCote: 'opposé', baseRole: 'adj', adj: '8', opp: '?', hyp: null }
      ];
      const v = pick(variantes);
      const valTrigo = (v.formule === '\\sin' ? Math.sin(v.angle*Math.PI/180) : v.formule === '\\cos' ? Math.cos(v.angle*Math.PI/180) : Math.tan(v.angle*Math.PI/180));
      const baseName = v.baseRole === 'hyp' ? "l'hypoténuse" : 'le côté adjacent';
      const svg = tracerTriangleRectangle({
        angleDeg: v.angle,
        sommetA: 'A', sommetB: 'B', sommetC: 'C',
        adj: v.adj, opp: v.opp, hyp: v.hyp,
        angleNom: `${v.angle}°`
      });
      return {
        enonce: `Dans le triangle ci-contre rectangle en $A$, ${baseName} mesure $${v.baseValue}$ cm. Calculer la longueur du côté ${v.nomCote} (arrondie au centième).`,
        svg: svg,
        corrige: `On utilise $${v.formule}(${v.angle}°) \\approx ${valTrigo.toFixed(4)}$. Côté ${v.nomCote} $= ${v.baseValue} \\times ${v.formule}(${v.angle}°) \\approx ${v.calc.toFixed(2)}$ cm.`
      };
    } else {
      // Difficile : trouver hypoténuse à partir du côté opposé et de l'angle + figure
      const angle = pick([25, 35, 50, 65, 70]);
      const opp = rand(4, 10);
      const sinA = Math.sin(angle*Math.PI/180);
      const hyp = opp / sinA;
      const svg = tracerTriangleRectangle({
        angleDeg: angle,
        sommetA: 'A', sommetB: 'B', sommetC: 'C',
        adj: null, opp: `${opp}`, hyp: '?',
        angleNom: `${angle}°`
      });
      return {
        enonce: `Dans le triangle ci-contre rectangle en $A$, le côté opposé à l'angle de $${angle}°$ mesure $${opp}$ cm. Calculer la longueur de l'hypoténuse (arrondie au centième).`,
        svg: svg,
        corrige: `$\\sin(${angle}°) = \\dfrac{\\text{opposé}}{\\text{hypoténuse}}$, donc hypoténuse $= \\dfrac{${opp}}{\\sin(${angle}°)} \\approx \\dfrac{${opp}}{${sinA.toFixed(4)}} \\approx ${hyp.toFixed(2)}$ cm.`
      };
    }
  },

  trigo_angle: (d) => {
    if (d === 1) {
      // Facile : valeurs remarquables, pas besoin de figure
      const variantes = [
        { rapport: '\\dfrac{1}{2}', formule: 'cos', valeur: 60 },
        { rapport: '\\dfrac{\\sqrt{2}}{2}', formule: 'sin', valeur: 45 },
        { rapport: '\\dfrac{\\sqrt{3}}{2}', formule: 'cos', valeur: 30 },
        { rapport: '\\dfrac{1}{2}', formule: 'sin', valeur: 30 },
        { rapport: '1', formule: 'tan', valeur: 45 }
      ];
      const v = pick(variantes);
      return {
        enonce: `Dans un triangle rectangle, on a $\\${v.formule}(\\alpha) = ${v.rapport}$. Quelle est la mesure de l'angle $\\alpha$ ?`,
        corrige: `Par les valeurs remarquables, $\\${v.formule}(\\alpha) = ${v.rapport}$ donne $\\alpha = ${v.valeur}°$.`
      };
    } else if (d === 2) {
      // Moyen : trouver alpha à partir de hyp et opp + figure
      const hyp = rand(8, 15);
      const opp = rand(3, hyp-1);
      const sinA = opp/hyp;
      const angle = Math.asin(sinA) * 180 / Math.PI;
      const svg = tracerTriangleRectangle({
        angleDeg: angle,
        sommetA: 'A', sommetB: 'B', sommetC: 'C',
        adj: null, opp: `${opp}`, hyp: `${hyp}`,
        angleNom: 'α'
      });
      return {
        enonce: `Dans le triangle ci-contre rectangle en $A$, calculer la mesure de l'angle $\\alpha$ (arrondie au degré).`,
        svg: svg,
        corrige: `$\\sin(\\alpha) = \\dfrac{\\text{opposé}}{\\text{hypoténuse}} = \\dfrac{${opp}}{${hyp}} \\approx ${sinA.toFixed(4)}$. Donc $\\alpha = \\arcsin(${sinA.toFixed(4)}) \\approx ${Math.round(angle)}°$.`
      };
    } else {
      // Difficile : trouver alpha à partir de adj et opp + figure
      const adj = rand(4, 10);
      const opp = rand(3, 10);
      const tanA = opp/adj;
      const angle = Math.atan(tanA) * 180 / Math.PI;
      const svg = tracerTriangleRectangle({
        angleDeg: angle,
        sommetA: 'A', sommetB: 'B', sommetC: 'C',
        adj: `${adj}`, opp: `${opp}`, hyp: null,
        angleNom: 'α'
      });
      return {
        enonce: `Dans le triangle ci-contre rectangle en $A$, calculer la mesure de l'angle $\\alpha$ (arrondie au degré).`,
        svg: svg,
        corrige: `$\\tan(\\alpha) = \\dfrac{\\text{opposé}}{\\text{adjacent}} = \\dfrac{${opp}}{${adj}} \\approx ${tanA.toFixed(4)}$. Donc $\\alpha = \\arctan(${tanA.toFixed(4)}) \\approx ${Math.round(angle)}°$.`
      };
    }
  },

  trigo_rapports: (d) => {
    if (d === 1) {
      // Facile : pas besoin de figure (question théorique)
      const variantes = [
        { question: "Quel rapport représente $\\sin(\\alpha)$ dans un triangle rectangle ?", reponse: "$\\sin(\\alpha) = \\dfrac{\\text{côté opposé}}{\\text{hypoténuse}}$." },
        { question: "Quel rapport représente $\\cos(\\alpha)$ dans un triangle rectangle ?", reponse: "$\\cos(\\alpha) = \\dfrac{\\text{côté adjacent}}{\\text{hypoténuse}}$." },
        { question: "Quel rapport représente $\\tan(\\alpha)$ dans un triangle rectangle ?", reponse: "$\\tan(\\alpha) = \\dfrac{\\text{côté opposé}}{\\text{côté adjacent}}$." }
      ];
      const v = pick(variantes);
      return {
        enonce: v.question,
        corrige: v.reponse
      };
    } else if (d === 2) {
      // Moyen : donner sin/cos/tan d'un angle à partir des 2 côtés + figure
      const adj = rand(3, 8);
      const opp = rand(3, 8);
      const hypCarre = adj*adj + opp*opp;
      const racine = Math.sqrt(hypCarre);
      const hypFmt = Number.isInteger(racine) ? `${racine}` : `\\sqrt{${hypCarre}}`;
      const variantes = [
        { trigo: 'sin', val: `\\dfrac{${opp}}{${hypFmt}}`, explication: `Côté opposé $= ${opp}$, hypoténuse $= ${hypFmt}$ (par Pythagore : $\\sqrt{${adj}^2 + ${opp}^2} = \\sqrt{${hypCarre}}$).` },
        { trigo: 'cos', val: `\\dfrac{${adj}}{${hypFmt}}`, explication: `Côté adjacent $= ${adj}$, hypoténuse $= ${hypFmt}$ (par Pythagore : $\\sqrt{${adj}^2 + ${opp}^2} = \\sqrt{${hypCarre}}$).` },
        { trigo: 'tan', val: `\\dfrac{${opp}}{${adj}}`, explication: `Côté opposé $= ${opp}$, côté adjacent $= ${adj}$.` }
      ];
      const v = pick(variantes);
      // Calculer l'angle approximatif pour la figure
      const angleApprox = Math.atan(opp/adj) * 180 / Math.PI;
      const svg = tracerTriangleRectangle({
        angleDeg: angleApprox,
        sommetA: 'A', sommetB: 'B', sommetC: 'C',
        adj: `${adj}`, opp: `${opp}`, hyp: null,
        angleNom: 'α'
      });
      return {
        enonce: `Dans le triangle ci-contre rectangle en $A$, donner $\\${v.trigo}(\\alpha)$ sous forme exacte.`,
        svg: svg,
        corrige: `${v.explication} Donc $\\${v.trigo}(\\alpha) = ${v.val}$.`
      };
    } else {
      // Difficile : exprimer sin/cos/tan en fonction des côtés AB, AC, BC + figure générique
      // On utilise une figure avec angle 45° pour montrer la position d'AB, AC, BC
      const svg = tracerTriangleRectangle({
        angleDeg: 42,
        sommetA: 'A', sommetB: 'B', sommetC: 'C',
        adj: 'AB', opp: 'AC', hyp: 'BC',
        angleNom: 'B̂'
      });
      return {
        enonce: `Dans le triangle $ABC$ rectangle en $A$ ci-contre, exprimer $\\sin(\\widehat{ABC})$, $\\cos(\\widehat{ABC})$ et $\\tan(\\widehat{ABC})$ en fonction de $AB$, $AC$ et $BC$.`,
        svg: svg,
        corrige: `Pour l'angle $\\widehat{ABC}$ : côté opposé $= AC$, côté adjacent $= AB$, hypoténuse $= BC$. Donc $\\sin(\\widehat{ABC}) = \\dfrac{AC}{BC}$, $\\cos(\\widehat{ABC}) = \\dfrac{AB}{BC}$, $\\tan(\\widehat{ABC}) = \\dfrac{AC}{AB}$.`
      };
    }
  },

  rep_dist: (d) => {
    if (d === 1) {
      // Triplet 3-4-5 uniquement pour que tout rentre dans le repère [-3, 3]
      // On place A et B tels que dx=3, dy=4 (ou variantes) avec A et B dans le repère
      const variantes = [
        { xA: -1, yA: -2, xB: 2, yB: 2, c: 5 },  // (3, 4) → 5
        { xA: 1, yA: 2, xB: -2, yB: -2, c: 5 },  // (-3, -4) → 5
        { xA: -2, yA: 1, xB: 1, yB: -3, c: 5 },  // (3, -4) → 5
        { xA: 0, yA: 3, xB: 3, yB: -1, c: 5 }    // (3, -4) → 5
      ];
      const v = pick(variantes);
      const dx = v.xB - v.xA;
      const dy = v.yB - v.yA;
      const dxAff = dx >= 0 ? `${dx}` : `(${dx})`;
      const dyAff = dy >= 0 ? `${dy}` : `(${dy})`;
      // Figure
      const r = creerRepere({});
      let svg = r.svg;
      svg += placerPoint(r, v.xA, v.yA, 'A');
      svg += placerPoint(r, v.xB, v.yB, 'B');
      svg += r.fermer();
      return {
        enonce: `Calculer la distance $AB$ entre les points $A(${v.xA}\\,;\\,${v.yA})$ et $B(${v.xB}\\,;\\,${v.yB})$ (voir figure ci-contre).`,
        svg: svg,
        corrige: `$AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2} = \\sqrt{${dxAff}^2 + ${dyAff}^2} = \\sqrt{${dx*dx} + ${dy*dy}} = \\sqrt{${dx*dx+dy*dy}} = ${v.c}$.`
      };
    } else if (d === 2) {
      // Coords dans [-4, 4] : A et B rentrent dans le repère
      let xA = randNonZero(-4, 4);
      let yA = randNonZero(-4, 4);
      let xB = randNonZero(-4, 4);
      let yB = randNonZero(-4, 4);
      // Éviter A = B
      while (xA === xB && yA === yB) {
        xB = randNonZero(-4, 4); yB = randNonZero(-4, 4);
      }
      const dx = xB - xA;
      const dy = yB - yA;
      const carre = dx*dx + dy*dy;
      const racine = Math.sqrt(carre);
      const estEntier = Number.isInteger(racine);
      const dxAff = dx >= 0 ? `${dx}` : `(${dx})`;
      const dyAff = dy >= 0 ? `${dy}` : `(${dy})`;
      // Figure : repère avec A et B
      const r = creerRepere({});
      let svg = r.svg;
      svg += placerPoint(r, xA, yA, 'A');
      svg += placerPoint(r, xB, yB, 'B');
      svg += r.fermer();
      return {
        enonce: `Calculer la distance $AB$ entre les points $A(${xA}\\,;\\,${yA})$ et $B(${xB}\\,;\\,${yB})$ (voir figure ci-contre). Donner la valeur exacte.`,
        svg: svg,
        corrige: `$AB = \\sqrt{${dxAff}^2 + ${dyAff}^2} = \\sqrt{${dx*dx} + ${dy*dy}} = \\sqrt{${carre}}${estEntier ? ` = ${racine}` : ''}$.`
      };
    } else {
      // Triangle rectangle en A : A, B sur même y, A, C sur même x
      const xA = randNonZero(-3, 3), yA = randNonZero(-3, 3);
      // Ajuster pour rester dans [-4, 4]
      let dxB = pick([3, -3, 4, -4]);
      while (Math.abs(xA + dxB) > 4) dxB = pick([3, -3]);
      let dyC = pick([3, -3, 4, -4]);
      while (Math.abs(yA + dyC) > 4) dyC = pick([3, -3]);
      const xB = xA + dxB;
      const yB = yA;
      const xC = xA;
      const yC = yA + dyC;
      const AB = Math.abs(xB - xA);
      const AC = Math.abs(yC - yA);
      const carreBC = (xC-xB)*(xC-xB) + (yC-yB)*(yC-yB);
      // Figure : triangle ABC avec ses 3 sommets et côtés
      const r = creerRepere({});
      let svg = r.svg;
      // Tracer le triangle (segments)
      svg += `<line x1="${r.xPix(xA)}" y1="${r.yPix(yA)}" x2="${r.xPix(xB)}" y2="${r.yPix(yB)}" stroke="${GRAPH_BLEU}" stroke-width="1.5"/>`;
      svg += `<line x1="${r.xPix(xA)}" y1="${r.yPix(yA)}" x2="${r.xPix(xC)}" y2="${r.yPix(yC)}" stroke="${GRAPH_BLEU}" stroke-width="1.5"/>`;
      svg += `<line x1="${r.xPix(xB)}" y1="${r.yPix(yB)}" x2="${r.xPix(xC)}" y2="${r.yPix(yC)}" stroke="${GRAPH_BLEU}" stroke-width="1.5"/>`;
      svg += placerPoint(r, xA, yA, 'A');
      svg += placerPoint(r, xB, yB, 'B');
      svg += placerPoint(r, xC, yC, 'C');
      svg += r.fermer();
      return {
        enonce: `Soient $A(${xA}\\,;\\,${yA})$, $B(${xB}\\,;\\,${yB})$, $C(${xC}\\,;\\,${yC})$ (voir figure ci-contre). Montrer que le triangle $ABC$ est rectangle en $A$.`,
        svg: svg,
        corrige: `$AB = ${AB}$ (distance horizontale), $AC = ${AC}$ (distance verticale). $BC^2 = (${xC-xB})^2 + (${yC-yB})^2 = ${carreBC}$. Or $AB^2 + AC^2 = ${AB*AB} + ${AC*AC} = ${AB*AB+AC*AC}$. Comme $BC^2 = AB^2 + AC^2$, par la réciproque du théorème de Pythagore, $ABC$ est rectangle en $A$.`
      };
    }
  },

  rep_milieu: (d) => {
    // Helper pour afficher des coordonnées (entier ou demi-entier propre)
    const formCoord = (v) => Number.isInteger(v) ? `${v}` : `${(2*v >= 0 ? '' : '-')}\\dfrac{${Math.abs(2*v)}}{2}`;
    // Forcer des coordonnées entières pour A et B → milieu entier ou demi-entier
    if (d === 1) {
      // Pour avoir milieu entier, on choisit A et B de même parité
      const xA = pick([-4, -2, 0, 2, 4]);
      const yA = pick([-4, -2, 0, 2, 4]);
      let xB = pick([-4, -2, 0, 2, 4]);
      let yB = pick([-4, -2, 0, 2, 4]);
      while (xA === xB && yA === yB) {
        xB = pick([-4, -2, 0, 2, 4]);
        yB = pick([-4, -2, 0, 2, 4]);
      }
      const xMmi = (xA + xB) / 2;
      const yMmi = (yA + yB) / 2;
      const xBaff = xB < 0 ? `(${xB})` : `${xB}`;
      const yBaff = yB < 0 ? `(${yB})` : `${yB}`;
      // Figure : repère avec A, B, et segment [AB]
      const r = creerRepere({});
      let svg = r.svg;
      // Segment AB en trait fin
      svg += `<line x1="${r.xPix(xA)}" y1="${r.yPix(yA)}" x2="${r.xPix(xB)}" y2="${r.yPix(yB)}" stroke="${GRAPH_BLEU}" stroke-width="1" stroke-dasharray="3,2"/>`;
      svg += placerPoint(r, xA, yA, 'A');
      svg += placerPoint(r, xB, yB, 'B');
      svg += r.fermer();
      return {
        enonce: `Calculer les coordonnées du milieu $M$ du segment $[AB]$ avec $A(${xA}\\,;\\,${yA})$ et $B(${xB}\\,;\\,${yB})$ (voir figure ci-contre).`,
        svg: svg,
        corrige: `$x_M = \\dfrac{x_A + x_B}{2} = \\dfrac{${xA} + ${xBaff}}{2} = \\dfrac{${xA+xB}}{2} = ${xMmi}$. De même $y_M = \\dfrac{${yA} + ${yBaff}}{2} = ${yMmi}$. Donc $M(${xMmi}\\,;\\,${yMmi})$.`
      };
    } else if (d === 2) {
      // Moyen : trouver B connaissant A et M (entiers)
      // Pour la figure : A et M dans [-3, 3] pour que B = 2M - A reste dans [-4, 4] maximum
      let xA = randNonZero(-3, 3);
      let yA = randNonZero(-3, 3);
      let xM = randNonZero(-3, 3);
      let yM = randNonZero(-3, 3);
      // S'assurer que xB = 2xM - xA ∈ [-4, 4]
      while (Math.abs(2*xM - xA) > 4 || Math.abs(2*yM - yA) > 4 || (xM === xA && yM === yA)) {
        xA = randNonZero(-3, 3);
        yA = randNonZero(-3, 3);
        xM = randNonZero(-3, 3);
        yM = randNonZero(-3, 3);
      }
      const xB = 2*xM - xA;
      const yB = 2*yM - yA;
      // Figure : A et M placés, B à trouver
      const r = creerRepere({});
      let svg = r.svg;
      svg += placerPoint(r, xA, yA, 'A');
      svg += placerPoint(r, xM, yM, 'M');
      svg += r.fermer();
      return {
        enonce: `$M(${xM}\\,;\\,${yM})$ est le milieu du segment $[AB]$ et $A(${xA}\\,;\\,${yA})$ (voir figure ci-contre). Déterminer les coordonnées de $B$.`,
        svg: svg,
        corrige: `Comme $x_M = \\dfrac{x_A + x_B}{2}$, on a $x_B = 2x_M - x_A = 2 \\times ${xM} - (${xA}) = ${xB}$. De même $y_B = 2 \\times ${yM} - (${yA}) = ${yB}$. Donc $B(${xB}\\,;\\,${yB})$.`
      };
    } else {
      // Difficile : vérification de milieu avec coords entières
      let xA = pick([-4, -2, 0, 2, 4]);
      let yA = pick([-4, -2, 0, 2, 4]);
      let xB = pick([-4, -2, 0, 2, 4]);
      let yB = pick([-4, -2, 0, 2, 4]);
      while (xA === xB && yA === yB) {
        xB = pick([-4, -2, 0, 2, 4]);
        yB = pick([-4, -2, 0, 2, 4]);
      }
      const xM = (xA + xB) / 2;
      const yM = (yA + yB) / 2;
      const xBaff = xB < 0 ? `(${xB})` : `${xB}`;
      const yBaff = yB < 0 ? `(${yB})` : `${yB}`;
      // Figure : A, B, et M sur le repère
      const r = creerRepere({});
      let svg = r.svg;
      svg += `<line x1="${r.xPix(xA)}" y1="${r.yPix(yA)}" x2="${r.xPix(xB)}" y2="${r.yPix(yB)}" stroke="${GRAPH_BLEU}" stroke-width="1" stroke-dasharray="3,2"/>`;
      svg += placerPoint(r, xA, yA, 'A');
      svg += placerPoint(r, xB, yB, 'B');
      svg += placerPoint(r, xM, yM, 'M');
      svg += r.fermer();
      return {
        enonce: `Soient $A(${xA}\\,;\\,${yA})$, $B(${xB}\\,;\\,${yB})$ et $M(${xM}\\,;\\,${yM})$ (voir figure ci-contre). Montrer que $M$ est le milieu de $[AB]$.`,
        svg: svg,
        corrige: `On vérifie : $\\dfrac{x_A + x_B}{2} = \\dfrac{${xA} + ${xBaff}}{2} = ${xM} = x_M$ et $\\dfrac{y_A + y_B}{2} = \\dfrac{${yA} + ${yBaff}}{2} = ${yM} = y_M$. Donc $M$ est bien le milieu de $[AB]$.`
      };
    }
  },

});
