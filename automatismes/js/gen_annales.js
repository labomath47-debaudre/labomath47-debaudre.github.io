/* LaboMath — Générateurs annales (rev_*)
   98 générateurs, profils : terminale spé
   Fichier généré automatiquement par refactor.py.
   Étend window.LM_GEN (l'objet global agrégeant tous les générateurs). */

Object.assign(window.LM_GEN ??= {}, {

  rev_suites_recurrence: (d) => {
    const u0 = rand(1, 2 + d);
    const a = d === 1 ? 2 : rand(2, 3);
    const b = rand(1, 2 + d);
    const enonce = `On considère la suite $(u_n)$ définie par $u_0 = ${u0}$ et, pour tout entier naturel $n$, $u_{n+1} = ${a}\\,u_n + ${b}$.<br>` +
      reformule([
        `Démontrer par récurrence que pour tout entier naturel $n$, $u_n \\geqslant ${u0}$.`,
        `Montrer, à l'aide d'un raisonnement par récurrence, que $u_n \\geqslant ${u0}$ pour tout $n \\in \\mathbb{N}$.`,
        `Prouver par récurrence que, quel que soit l'entier naturel $n$, on a $u_n \\geqslant ${u0}$.`
      ]);
    const corrige = `<strong>Initialisation.</strong> Pour $n = 0$ : $u_0 = ${u0} \\geqslant ${u0}$. La propriété est vraie au rang $0$.<br>` +
      `<strong>Hérédité.</strong> Supposons $u_n \\geqslant ${u0}$ pour un entier $n$ fixé. Alors $u_{n+1} = ${a}u_n + ${b} \\geqslant ${a} \\times ${u0} + ${b} = ${a*u0+b} \\geqslant ${u0}$ (car $${a*u0+b} \\geqslant ${u0}$). La propriété est héréditaire.<br>` +
      `<strong>Conclusion.</strong> Par récurrence, pour tout entier naturel $n$, $u_n \\geqslant ${u0}$.`;
    const rappel = `<strong>Raisonnement par récurrence.</strong> Pour démontrer qu'une propriété $P(n)$ est vraie pour tout $n \\geqslant n_0$ : (1) <em>Initialisation</em> — vérifier $P(n_0)$ ; (2) <em>Hérédité</em> — supposer $P(n)$ vraie (hypothèse de récurrence) et démontrer $P(n+1)$ ; (3) <em>Conclusion</em> — $P(n)$ est vraie pour tout $n \\geqslant n_0$.`;
    return { enonce, corrige, rappel };
  },

  rev_suites_limite: (d) => {
    // d=1 : raison simple ; d=2 : avec coefficient ; d=3 : forme A*q^n + c (limite décalée)
    const cas = pick(['conv', 'div']);
    const A = rand(2, 3 + d);
    const c = d === 3 ? rand(1, 5) : 0;
    let qTxt, justif, concl;
    if (cas === 'conv') {
      const den = rand(2, 2 + d);
      qTxt = `\\dfrac{1}{${den}}`;
      justif = `Comme $-1 < ${qTxt} < 1$, $\\lim\\limits_{n \\to +\\infty} \\left(${qTxt}\\right)^n = 0$, donc $\\lim\\limits_{n \\to +\\infty} ${A}\\left(${qTxt}\\right)^n = 0$`;
      concl = c === 0 ? `. La suite converge vers $0$.` : ` et $\\lim\\limits_{n \\to +\\infty} u_n = 0 + ${c} = ${c}$. La suite converge vers $${c}$.`;
    } else {
      const qe = rand(2, 3);
      qTxt = `${qe}`;
      justif = `Comme $${qTxt} > 1$ et $${A} > 0$, $\\lim\\limits_{n \\to +\\infty} ${A} \\times ${qTxt}^{\\,n} = +\\infty$`;
      concl = c === 0 ? `. La suite diverge vers $+\\infty$.` : ` et $\\lim\\limits_{n \\to +\\infty} u_n = +\\infty$. La suite diverge vers $+\\infty$.`;
    }
    const expr = c === 0 ? `${A} \\times \\left(${qTxt}\\right)^{n}` : `${A} \\times \\left(${qTxt}\\right)^{n} + ${c}`;
    const enonce = `Soit la suite $(u_n)$ définie pour tout entier naturel $n$ par $u_n = ${expr}$.<br>` +
      reformule([
        `Déterminer la limite de $(u_n)$ en justifiant.`,
        `Étudier la convergence de la suite $(u_n)$ et préciser sa limite.`,
        `La suite $(u_n)$ est-elle convergente ? Déterminer sa limite éventuelle.`
      ]);
    const corrige = `${justif}${concl}`;
    const rappel = `<strong>Limite d'une suite géométrique.</strong> Soit $q$ un réel. Si $-1 < q < 1$, alors $\\lim\\limits_{n \\to +\\infty} q^n = 0$. Si $q > 1$, alors $\\lim\\limits_{n \\to +\\infty} q^n = +\\infty$. Si $q = 1$, la suite est constante.`;
    return { enonce, corrige, rappel };
  },

  rev_suites_variation: (d) => {
    const b = rand(0, 2 + d);
    const c = rand(-2 - d, 2 + d);
    const enonce = `On considère la suite $(u_n)$ définie pour tout entier naturel $n$ par $u_n = n^2 ${signe(b)}\\,n ${signe(c)}$.<br>` +
      reformule([
        `Étudier le sens de variation de la suite $(u_n)$.`,
        `Déterminer si la suite $(u_n)$ est croissante, décroissante ou ni l'un ni l'autre.`,
        `Préciser, en justifiant, la monotonie de la suite $(u_n)$.`
      ]);
    const corrige = `On calcule $u_{n+1} - u_n = \\big[(n+1)^2 ${signe(b)}(n+1) ${signe(c)}\\big] - \\big[n^2 ${signe(b)}n ${signe(c)}\\big] = 2n + 1 ${signe(b)} = 2n ${signe(1+b)}$.<br>` +
      `Pour tout entier naturel $n \\geqslant 0$, $2n ${signe(1+b)} > 0$. Donc $u_{n+1} - u_n > 0$ : la suite $(u_n)$ est <strong>strictement croissante</strong>.`;
    const rappel = `<strong>Sens de variation d'une suite.</strong> On étudie le signe de $u_{n+1} - u_n$ : positif $\\Rightarrow$ croissante, négatif $\\Rightarrow$ décroissante. (Pour une suite à termes strictement positifs, on peut comparer $\\frac{u_{n+1}}{u_n}$ à $1$.)`;
    return { enonce, corrige, rappel };
  },

  rev_suites_somme: (d) => {
    const q = d === 1 ? 2 : rand(2, 3);
    const u0 = rand(1, 1 + d);
    const n = rand(3 + d, 5 + d);
    const qn1 = Math.pow(q, n + 1);
    const S = u0 * (qn1 - 1) / (q - 1);
    const enonce = `Soit $(u_n)$ la suite géométrique de premier terme $u_0 = ${u0}$ et de raison $q = ${q}$.<br>` +
      reformule([
        `Calculer la somme $S = u_0 + u_1 + \\dots + u_{${n}}$.`,
        `Déterminer la valeur de $S = \\displaystyle\\sum_{k=0}^{${n}} u_k$.`,
        `Calculer $S = u_0 + u_1 + \\cdots + u_{${n}}$ (somme des ${n + 1} premiers termes).`
      ]);
    const corrige = `La somme des $n+1$ premiers termes d'une suite géométrique de raison $q \\neq 1$ vaut $S = u_0 \\times \\dfrac{q^{\\,n+1} - 1}{q - 1}$.<br>` +
      `Ici : $S = ${u0} \\times \\dfrac{${q}^{${n + 1}} - 1}{${q} - 1} = ${u0} \\times \\dfrac{${qn1} - 1}{${q - 1}} = ${u0} \\times \\dfrac{${qn1 - 1}}{${q - 1}} = ${S}$.`;
    const rappel = `<strong>Somme des termes d'une suite géométrique.</strong> Pour $q \\neq 1$ : $\\displaystyle\\sum_{k=0}^{n} u_k = u_0 \\times \\dfrac{q^{\\,n+1} - 1}{q - 1}$ (avec $n+1$ termes).`;
    return { enonce, corrige, rappel };
  },

  rev_suites_geom_explicite: (d) => {
    const u0 = rand(2, 3 + d);
    const q = d === 1 ? 2 : rand(2, 3);
    const k = rand(2 + d, 4 + d);
    const uk = u0 * Math.pow(q, k);
    const enonce = `Une suite géométrique $(u_n)$ a pour premier terme $u_0 = ${u0}$ et pour raison $q = ${q}$.<br>` +
      reformule([
        `Exprimer $u_n$ en fonction de $n$, puis calculer $u_{${k}}$.`,
        `Donner le terme général $u_n$, puis en déduire $u_{${k}}$.`,
        `Déterminer une expression de $u_n$ en fonction de $n$ et calculer $u_{${k}}$.`
      ]);
    const corrige = `Pour une suite géométrique : $u_n = u_0 \\times q^{\\,n} = ${u0} \\times ${q}^{\\,n}$.<br>` +
      `Donc $u_{${k}} = ${u0} \\times ${q}^{${k}} = ${u0} \\times ${Math.pow(q, k)} = ${uk}$.`;
    const rappel = `<strong>Terme général d'une suite géométrique.</strong> Si $(u_n)$ est géométrique de raison $q$, alors $u_n = u_0 \\times q^{\\,n}$, ou plus généralement $u_n = u_p \\times q^{\\,n - p}$.`;
    return { enonce, corrige, rappel };
  },

  rev_explog_simplifier: (d) => {
    const a = randNonZero(-3 - d, 3 + d);
    const b = randNonZero(-3 - d, 3 + d);
    const s = a + b;
    const enonce = reformule([
      `Simplifier l'expression $A = e^{${a}} \\times e^{${b}}$ sous la forme $e^k$.`,
      `Écrire $A = e^{${a}} \\times e^{${b}}$ sous la forme d'une seule exponentielle.`,
      `Donner l'écriture la plus simple de $A = e^{${a}} \\times e^{${b}}$.`
    ]);
    const corrige = `D'après la relation fonctionnelle $e^x \\times e^y = e^{x+y}$ : $A = e^{${a} ${signe(b)}} = e^{${s}}$.`;
    const rappel = `<strong>Propriétés algébriques de l'exponentielle.</strong> Pour tous réels $x, y$ : $e^x \\times e^y = e^{x+y}$ ; $\\dfrac{e^x}{e^y} = e^{x-y}$ ; $(e^x)^n = e^{nx}$ ; $e^0 = 1$ et $e^{-x} = \\dfrac{1}{e^x}$.`;
    return { enonce, corrige, rappel };
  },

  rev_explog_equation: (d) => {
    const type = pick(['exp', 'ln']);
    if (type === 'exp') {
      const k = rand(2, 3 + d);
      const enonce = reformule([
        `Résoudre dans $\\mathbb{R}$ l'équation $e^{x} = ${k}$.`,
        `Déterminer la (ou les) solution(s) de l'équation $e^{x} = ${k}$.`,
        `Résoudre l'équation $e^{x} = ${k}$ d'inconnue réelle $x$.`
      ]);
      const corrige = `La fonction $\\exp$ étant strictement croissante sur $\\mathbb{R}$, on applique $\\ln$ : $e^x = ${k} \\iff x = \\ln(${k})$.<br>` +
        `L'unique solution est $x = \\ln(${k})$.`;
      const rappel = `<strong>Équations exponentielle / logarithme.</strong> Pour $k > 0$ : $e^x = k \\iff x = \\ln(k)$. Pour $x > 0$ : $\\ln(x) = k \\iff x = e^k$. Les fonctions $\\exp$ et $\\ln$ sont réciproques : $\\ln(e^x) = x$ et $e^{\\ln(x)} = x$ (pour $x>0$).`;
      return { enonce, corrige, rappel };
    } else {
      const k = rand(1, 1 + d);
      const enonce = reformule([
        `Résoudre dans $]0\\,;\\,+\\infty[$ l'équation $\\ln(x) = ${k}$.`,
        `Déterminer la solution de l'équation $\\ln(x) = ${k}$.`,
        `Résoudre $\\ln(x) = ${k}$ sur $]0\\,;\\,+\\infty[$.`
      ]);
      const corrige = `La fonction $\\ln$ étant strictement croissante sur $]0\\,;\\,+\\infty[$, on applique $\\exp$ : $\\ln(x) = ${k} \\iff x = e^{${k}}$.<br>` +
        `L'unique solution est $x = e^{${k}}$.`;
      const rappel = `<strong>Équations exponentielle / logarithme.</strong> Pour $k > 0$ : $e^x = k \\iff x = \\ln(k)$. Pour $x > 0$ : $\\ln(x) = k \\iff x = e^k$. Les fonctions $\\exp$ et $\\ln$ sont réciproques.`;
      return { enonce, corrige, rappel };
    }
  },

  rev_explog_derivee: (d) => {
    if (d === 1) {
      const a = randNonZero(2, 5);
      const b = rand(-4, 4);
      const enonce = `Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = e^{${a}x ${signe(b)}}$.<br>Déterminer la fonction dérivée $f'$.`;
      const corrige = `On reconnaît $f = e^{u}$ avec $u(x) = ${a}x ${signe(b)}$, donc $u'(x) = ${a}$. Or $(e^u)' = u' \\, e^u$.<br>` +
        `Ainsi $f'(x) = ${a}\\,e^{${a}x ${signe(b)}}$.`;
      const rappel = `<strong>Dérivée de l'exponentielle composée.</strong> $(e^x)' = e^x$ ; plus généralement $(e^u)' = u' \\, e^u$. Rappel produit : $(uv)' = u'v + uv'$.`;
      return { enonce, corrige, rappel };
    } else {
      const a = randNonZero(2, 3 + d);
      const enonce = `Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = ${a}x\\,e^{x}$.<br>Déterminer la fonction dérivée $f'$.`;
      const corrige = `On dérive un produit $f = uv$ avec $u(x) = ${a}x$ (donc $u' = ${a}$) et $v(x) = e^x$ (donc $v' = e^x$).<br>` +
        `$f'(x) = u'v + uv' = ${a}\\,e^x + ${a}x\\,e^x = ${a}(1 + x)\\,e^x$.`;
      const rappel = `<strong>Dérivée — produit et exponentielle.</strong> $(uv)' = u'v + uv'$ et $(e^x)' = e^x$, $(e^u)' = u'e^u$. On factorise souvent par $e^x$ (toujours strictement positif) pour étudier le signe de $f'$.`;
      return { enonce, corrige, rappel };
    }
  },

  rev_explog_limite: (d) => {
    const cas = pick(['exp_plus', 'exp_moins']);
    if (cas === 'exp_plus') {
      const enonce = reformule([
        `Déterminer $\\lim\\limits_{x \\to +\\infty} \\dfrac{e^{x}}{x}$.`,
        `Calculer la limite en $+\\infty$ de $\\dfrac{e^{x}}{x}$.`,
        `Étudier $\\lim\\limits_{x \\to +\\infty} \\dfrac{e^{x}}{x}$.`
      ]);
      const corrige = `Par croissance comparée, l'exponentielle l'emporte sur toute puissance de $x$ : $\\lim\\limits_{x \\to +\\infty} \\dfrac{e^x}{x} = +\\infty$.`;
      const rappel = `<strong>Croissances comparées.</strong> $\\lim\\limits_{x \\to +\\infty} \\dfrac{e^x}{x} = +\\infty$ et $\\lim\\limits_{x \\to +\\infty} \\dfrac{e^x}{x^n} = +\\infty$ ; $\\lim\\limits_{x \\to -\\infty} x\\,e^x = 0$ ; $\\lim\\limits_{x \\to +\\infty} \\dfrac{\\ln x}{x} = 0$. <em>« L'exponentielle l'emporte sur la puissance, qui l'emporte sur le logarithme. »</em>`;
      return { enonce, corrige, rappel };
    } else {
      const enonce = reformule([
        `Déterminer $\\lim\\limits_{x \\to -\\infty} x\\,e^{x}$.`,
        `Calculer la limite en $-\\infty$ de $x\\,e^{x}$.`,
        `Étudier $\\lim\\limits_{x \\to -\\infty} x\\,e^{x}$.`
      ]);
      const corrige = `Il s'agit d'une forme indéterminée $(-\\infty) \\times 0$. Par croissance comparée : $\\lim\\limits_{x \\to -\\infty} x\\,e^x = 0$.`;
      const rappel = `<strong>Croissances comparées.</strong> $\\lim\\limits_{x \\to +\\infty} \\dfrac{e^x}{x} = +\\infty$ ; $\\lim\\limits_{x \\to -\\infty} x\\,e^x = 0$ ; $\\lim\\limits_{x \\to +\\infty} \\dfrac{\\ln x}{x} = 0$. <em>« L'exponentielle l'emporte sur la puissance, qui l'emporte sur le logarithme. »</em>`;
      return { enonce, corrige, rappel };
    }
  },

  rev_explog_proprietes_ln: (d) => {
    const a = rand(2, 3 + d);
    let b = rand(2, 3 + d);
    while (b === a) b = rand(2, 3 + d);
    const enonce = reformule([
      `Exprimer $\\ln(${a}) + \\ln(${b})$ comme le logarithme d'un seul nombre.`,
      `Simplifier $A = \\ln(${a}) + \\ln(${b})$ sous la forme $\\ln(N)$.`,
      `Écrire $\\ln(${a}) + \\ln(${b})$ sous la forme $\\ln(N)$ avec $N$ entier.`
    ]);
    const corrige = `D'après la propriété fondamentale $\\ln(a) + \\ln(b) = \\ln(ab)$ : $A = \\ln(${a} \\times ${b}) = \\ln(${a*b})$.`;
    const rappel = `<strong>Propriétés du logarithme népérien.</strong> Pour $a, b > 0$ : $\\ln(ab) = \\ln a + \\ln b$ ; $\\ln\\!\\left(\\dfrac{a}{b}\\right) = \\ln a - \\ln b$ ; $\\ln(a^n) = n\\ln a$ ; $\\ln(1) = 0$ et $\\ln(e) = 1$.`;
    return { enonce, corrige, rappel };
  },

  rev_proba_binom_calcul: (d) => {
    const binom = (n, k) => {
      if (k < 0 || k > n) return 0;
      if (k === 0 || k === n) return 1;
      let r = 1;
      for (let i = 0; i < k; i++) r = r * (n - i) / (i + 1);
      return Math.round(r);
    };
    // p sous forme de dixième pour des calculs propres
    const num = rand(2, 5);            // p = num/10
    const p = num / 10;
    const q = 1 - p;
    const n = d === 1 ? rand(3, 4) : (d === 2 ? rand(4, 6) : rand(5, 8));
    const k = rand(1, n - 1);
    const c = binom(n, k);
    const pk = p ** k;
    const qnk = q ** (n - k);
    const res = c * pk * qnk;
    const resArr = Math.round(res * 1e6) / 1e6;
    const enonce = `Une variable aléatoire $X$ suit la loi binomiale $\\mathcal{B}(${n}\\,;\\,${dec(p)})$.<br>` +
      reformule([
        `Calculer $P(X = ${k})$. On donnera une valeur arrondie au millième.`,
        `Déterminer $P(X = ${k})$ (arrondir au millième).`,
        `Calculer la probabilité $P(X = ${k})$, arrondie au millième.`
      ]);
    const corrige = `$P(X = ${k}) = \\binom{${n}}{${k}} \\times ${dec(p)}^{${k}} \\times ${dec(q)}^{${n - k}} = ${c} \\times ${dec(Math.round(pk * 1e6) / 1e6)} \\times ${dec(Math.round(qnk * 1e6) / 1e6)} \\approx ${dec(resArr.toFixed(3))}$.`;
    const rappel = `<strong>Loi binomiale $\\mathcal{B}(n\\,;\\,p)$.</strong> Si $X$ compte le nombre de succès lors de $n$ répétitions indépendantes d'une épreuve de Bernoulli de paramètre $p$, alors $P(X = k) = \\binom{n}{k}\\,p^k\\,(1-p)^{n-k}$ pour $0 \\leqslant k \\leqslant n$. Espérance : $E(X) = np$. Variance : $V(X) = np(1-p)$.`;
    return { enonce, corrige, rappel };
  },

  rev_proba_binom_esperance: (d) => {
    const num = rand(2, 6);
    const p = num / 10;
    const n = d === 1 ? rand(10, 20) : (d === 2 ? rand(20, 50) : rand(50, 100));
    const E = n * p;
    const V = n * p * (1 - p);
    const enonce = `Une variable aléatoire $X$ suit la loi binomiale $\\mathcal{B}(${n}\\,;\\,${dec(p)})$.<br>` +
      reformule([
        `Calculer l'espérance $E(X)$ et la variance $V(X)$.`,
        `Déterminer $E(X)$ puis $V(X)$.`,
        `Donner l'espérance et la variance de $X$.`
      ]);
    const corrige = `Pour une loi binomiale, $E(X) = np = ${n} \\times ${dec(p)} = ${dec(Math.round(E * 100) / 100)}$.<br>` +
      `$V(X) = np(1-p) = ${n} \\times ${dec(p)} \\times ${dec(1 - p)} = ${dec(Math.round(V * 100) / 100)}$.`;
    const rappel = `<strong>Espérance et variance de la loi binomiale.</strong> Si $X \\sim \\mathcal{B}(n\\,;\\,p)$, alors $E(X) = np$, $V(X) = np(1-p)$ et $\\sigma(X) = \\sqrt{np(1-p)}$. Interprétation : $E(X)$ est le nombre moyen de succès attendu sur $n$ répétitions.`;
    return { enonce, corrige, rappel };
  },

  rev_proba_conditionnelle: (d) => {
    // On choisit P(A), P(A inter B) avec des dixièmes
    const pA = rand(3, 6) / 10;
    const pAB = rand(1, Math.round(pA * 10) - 1) / 10; // < pA
    const res = pAB / pA;
    const enonce = `On considère deux événements $A$ et $B$ tels que $P(A) = ${dec(pA)}$ et $P(A \\cap B) = ${dec(pAB)}$.<br>` +
      reformule([
        `Calculer la probabilité conditionnelle $P_A(B)$.`,
        `Déterminer $P_A(B)$, probabilité de $B$ sachant $A$.`,
        `Calculer la probabilité de $B$ sachant que $A$ est réalisé.`
      ]);
    const corrige = `Par définition, $P_A(B) = \\dfrac{P(A \\cap B)}{P(A)} = \\dfrac{${dec(pAB)}}{${dec(pA)}} = ${dec(Math.round(res * 1000) / 1000)}$.`;
    const rappel = `<strong>Probabilité conditionnelle.</strong> Pour $P(A) \\neq 0$ : $P_A(B) = \\dfrac{P(A \\cap B)}{P(A)}$. On en déduit $P(A \\cap B) = P(A) \\times P_A(B)$. Deux événements sont <em>indépendants</em> si $P(A \\cap B) = P(A) \\times P(B)$.`;
    return { enonce, corrige, rappel };
  },

  rev_proba_totales: (d) => {
    const pA = rand(3, 7) / 10;       // P(A)
    const pAc = Math.round((1 - pA) * 10) / 10;
    const pA_B = rand(2, 8) / 10;     // P_A(B)
    const pAc_B = rand(1, 5) / 10;    // P_{Abar}(B)
    const res = pA * pA_B + pAc * pAc_B;
    const enonce = `Un arbre pondéré donne : $P(A) = ${dec(pA)}$, $P_A(B) = ${dec(pA_B)}$ et $P_{\\overline{A}}(B) = ${dec(pAc_B)}$.<br>` +
      reformule([
        `Calculer la probabilité $P(B)$ à l'aide de la formule des probabilités totales.`,
        `Déterminer $P(B)$.`,
        `En utilisant la formule des probabilités totales, calculer $P(B)$.`
      ]);
    const corrige = `Les événements $A$ et $\\overline{A}$ forment une partition. D'où $P(\\overline{A}) = 1 - ${dec(pA)} = ${dec(pAc)}$.<br>` +
      `$P(B) = P(A) \\times P_A(B) + P(\\overline{A}) \\times P_{\\overline{A}}(B) = ${dec(pA)} \\times ${dec(pA_B)} + ${dec(pAc)} \\times ${dec(pAc_B)} = ${dec(Math.round(res * 1000) / 1000)}$.`;
    const rappel = `<strong>Formule des probabilités totales.</strong> Si $A$ et $\\overline{A}$ partitionnent l'univers : $P(B) = P(A \\cap B) + P(\\overline{A} \\cap B) = P(A)P_A(B) + P(\\overline{A})P_{\\overline{A}}(B)$. C'est la somme des produits le long des branches d'un arbre pondéré menant à $B$.`;
    return { enonce, corrige, rappel };
  },

  rev_proba_esperance_va: (d) => {
    // Loi à 3 valeurs avec probabilités en dixièmes sommant à 1
    const v = [rand(0, 2), rand(3, 5), rand(6, 9)];
    // probas : p1, p2, p3 en dixièmes sommant à 10, chacun >= 1
    let p1 = rand(2, 5);
    let p2 = rand(2, 9 - p1);
    const p3 = 10 - p1 - p2;
    const probs = [p1 / 10, p2 / 10, p3 / 10];
    const E = v[0] * probs[0] + v[1] * probs[1] + v[2] * probs[2];
    const tableau = `$x_i$ : ${v[0]}, ${v[1]}, ${v[2]} — $P(X = x_i)$ : ${dec(probs[0])}, ${dec(probs[1])}, ${dec(probs[2])}`;
    const enonce = `La variable aléatoire $X$ prend les valeurs ${v[0]}, ${v[1]}, ${v[2]} avec les probabilités respectives $${dec(probs[0])}$, $${dec(probs[1])}$ et $${dec(probs[2])}$.<br>` +
      reformule([
        `Calculer l'espérance $E(X)$.`,
        `Déterminer l'espérance mathématique de $X$.`,
        `Calculer $E(X)$ et interpréter le résultat.`
      ]);
    const corrige = `$E(X) = \\sum x_i\\,P(X = x_i) = ${v[0]} \\times ${dec(probs[0])} + ${v[1]} \\times ${dec(probs[1])} + ${v[2]} \\times ${dec(probs[2])} = ${dec(Math.round(E * 1000) / 1000)}$.`;
    const rappel = `<strong>Espérance d'une variable aléatoire.</strong> $E(X) = \\displaystyle\\sum_{i} x_i\\,P(X = x_i)$. C'est la « moyenne » des valeurs prises par $X$, pondérée par leurs probabilités. Linéarité : $E(aX + b) = a\\,E(X) + b$.`;
    return { enonce, corrige, rappel };
  },

  rev_lim_rationnelle: (d) => {
    // (a x^2 + ...) / (b x + ...) ou degrés variés
    const a = randNonZero(1, 4);
    const b = randNonZero(1, 4);
    const cas = d === 1 ? 'meme_degre' : pick(['meme_degre', 'num_plus_grand']);
    let enonce, corrige;
    if (cas === 'meme_degre') {
      const c = randNonZero(-3, 3), e = randNonZero(-3, 3);
      enonce = `Déterminer $\\lim\\limits_{x \\to +\\infty} \\dfrac{${a}x^2 ${signe(c)}}{${b}x^2 ${signe(e)}}$.`;
      const lim = a / b;
      corrige = `On factorise par le terme dominant : $\\dfrac{${a}x^2 ${signe(c)}}{${b}x^2 ${signe(e)}} = \\dfrac{x^2\\left(${a} + \\frac{${c}}{x^2}\\right)}{x^2\\left(${b} + \\frac{${e}}{x^2}\\right)} \\to \\dfrac{${a}}{${b}}$.<br>Donc $\\lim\\limits_{x \\to +\\infty} = ${dec(Math.round(lim * 1000) / 1000)}$ (limite finie).`;
    } else {
      const c = randNonZero(-3, 3);
      enonce = `Déterminer $\\lim\\limits_{x \\to +\\infty} \\dfrac{${a}x^2 ${signe(c)}}{${b}x}$.`;
      const sgn = (a / b) > 0 ? '+\\infty' : '-\\infty';
      corrige = `Le numérateur est de degré $2$, le dénominateur de degré $1$ : le quotient se comporte comme $\\dfrac{${a}x^2}{${b}x} = \\dfrac{${a}}{${b}}x \\to ${sgn}$.<br>Donc $\\lim\\limits_{x \\to +\\infty} = ${sgn}$.`;
    }
    const rappel = `<strong>Limite d'une fonction rationnelle à l'infini.</strong> En $\\pm\\infty$, une fonction rationnelle a la même limite que le quotient de ses termes de plus haut degré. On factorise numérateur et dénominateur par leur terme dominant. Les termes $\\frac{1}{x^n}$ tendent vers $0$.`;
    return { enonce, corrige, rappel };
  },

  rev_lim_asymptote: (d) => {
    const a = randNonZero(1, 5);
    const x0 = rand(1, 4);
    const enonce = reformule([
      `La fonction $f$ définie par $f(x) = \\dfrac{${a}}{x - ${x0}}$ admet-elle une asymptote verticale ? Préciser son équation et la limite associée.`,
      `Étudier les limites de $f(x) = \\dfrac{${a}}{x - ${x0}}$ en $${x0}$ et en déduire l'asymptote verticale.`
    ]);
    const corrige = `En $x = ${x0}$, le dénominateur s'annule. Quand $x \\to ${x0}^+$, $x - ${x0} \\to 0^+$ donc $f(x) \\to ${a > 0 ? '+\\infty' : '-\\infty'}$ ; quand $x \\to ${x0}^-$, $f(x) \\to ${a > 0 ? '-\\infty' : '+\\infty'}$.<br>La droite d'équation $x = ${x0}$ est asymptote verticale à la courbe.`;
    const rappel = `<strong>Asymptote verticale.</strong> Si $\\lim\\limits_{x \\to x_0} f(x) = \\pm\\infty$, la droite $x = x_0$ est asymptote verticale. <strong>Asymptote horizontale</strong> : si $\\lim\\limits_{x \\to +\\infty} f(x) = \\ell$ (fini), la droite $y = \\ell$ est asymptote horizontale.`;
    return { enonce, corrige, rappel };
  },

  rev_lim_tvi: (d) => {
    // polynôme continu strictement monotone changeant de signe
    const a = rand(1, 3);
    const c = rand(1, 5);
    const enonce = `Soit $f$ la fonction continue et strictement croissante définie sur $[0\\,;\\,${a + c}]$ par $f(x) = x^3 + ${c}x - ${a * (a + c)}$.<br>` +
      reformule([
        `Justifier que l'équation $f(x) = 0$ admet une unique solution sur $[0\\,;\\,${a + c}]$.`,
        `Montrer que $f(x) = 0$ possède exactement une solution dans cet intervalle.`
      ]);
    const corrige = `$f$ est continue et strictement croissante sur $[0\\,;\\,${a + c}]$. De plus $f(0) = -${a * (a + c)} < 0$ et $f(${a + c}) > 0$ : $f$ change de signe.<br>D'après le <strong>corollaire du théorème des valeurs intermédiaires</strong> (théorème de la bijection), l'équation $f(x) = 0$ admet une <strong>unique</strong> solution sur $[0\\,;\\,${a + c}]$.`;
    const rappel = `<strong>Théorème des valeurs intermédiaires (TVI).</strong> Si $f$ est continue sur $[a\\,;\\,b]$ et si $k$ est compris entre $f(a)$ et $f(b)$, alors l'équation $f(x) = k$ admet au moins une solution dans $[a\\,;\\,b]$. <em>Corollaire</em> : si de plus $f$ est strictement monotone, la solution est unique.`;
    return { enonce, corrige, rappel };
  },

  rev_deriv_calcul: (d) => {
    if (d === 1) {
      const a = randNonZero(1, 5), b = randNonZero(-5, 5), c = rand(-5, 5);
      const enonce = `Déterminer la dérivée de $f(x) = ${a}x^2 ${signe(b)}x ${signe(c)}$.`;
      const corrige = `$f'(x) = ${2 * a}x ${signe(b)}$.`;
      const rappel = `<strong>Dérivées usuelles.</strong> $(x^n)' = n x^{n-1}$ ; $(\\sqrt{x})' = \\frac{1}{2\\sqrt{x}}$ ; $(e^x)' = e^x$ ; $(\\ln x)' = \\frac{1}{x}$. <strong>Opérations</strong> : $(uv)' = u'v + uv'$ ; $\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}$.`;
      return { enonce, corrige, rappel };
    } else if (d === 2) {
      const a = randNonZero(2, 5), b = randNonZero(1, 5);
      const enonce = `Déterminer la dérivée de $f(x) = (${a}x ${signe(b)})\\,e^{x}$.`;
      const corrige = `Produit $uv$ avec $u = ${a}x ${signe(b)}$ ($u' = ${a}$), $v = e^x$ ($v' = e^x$).<br>$f'(x) = ${a}e^x + (${a}x ${signe(b)})e^x = (${a}x ${signe(a + b)})e^x$.`;
      const rappel = `<strong>Dérivée d'un produit.</strong> $(uv)' = u'v + uv'$. Avec l'exponentielle, on factorise par $e^x$ (toujours $>0$) pour étudier ensuite le signe de $f'$.`;
      return { enonce, corrige, rappel };
    } else {
      const a = randNonZero(1, 4), b = randNonZero(1, 5);
      const enonce = `Déterminer la dérivée de $f(x) = \\dfrac{${a}x ${signe(b)}}{x}$ sur $]0\\,;\\,+\\infty[$.`;
      const corrige = `Quotient $\\frac{u}{v}$ avec $u = ${a}x ${signe(b)}$ ($u' = ${a}$), $v = x$ ($v' = 1$).<br>$f'(x) = \\dfrac{${a} \\cdot x - (${a}x ${signe(b)}) \\cdot 1}{x^2} = \\dfrac{${b < 0 ? '+' : '-'}${Math.abs(b)}}{x^2} = \\dfrac{${-b}}{x^2}$.`;
      const rappel = `<strong>Dérivée d'un quotient.</strong> $\\left(\\dfrac{u}{v}\\right)' = \\dfrac{u'v - uv'}{v^2}$. On simplifie toujours le numérateur avant de conclure sur le signe.`;
      return { enonce, corrige, rappel };
    }
  },

  rev_deriv_tangente: (d) => {
    const a = randNonZero(1, 3), b = randNonZero(-4, 4), c = rand(-4, 4);
    const x0 = rand(-2, 2);
    const fx0 = a * x0 * x0 + b * x0 + c;
    const fp = 2 * a * x0 + b; // f'(x0)
    // y = f'(x0)(x - x0) + f(x0) = fp*x + (fx0 - fp*x0)
    const ord = fx0 - fp * x0;
    const enonce = `Soit $f(x) = ${a}x^2 ${signe(b)}x ${signe(c)}$. Déterminer une équation de la tangente $T$ à la courbe de $f$ au point d'abscisse $x_0 = ${x0}$.`;
    const corrige = `On a $f(${x0}) = ${fx0}$ et $f'(x) = ${2 * a}x ${signe(b)}$, donc $f'(${x0}) = ${fp}$.<br>` +
      `Équation de la tangente : $y = f'(x_0)(x - x_0) + f(x_0) = ${fp}(x - ${par(x0)}) ${signe(fx0)}$, soit $y = ${fp}x ${signe(ord)}$.`;
    const rappel = `<strong>Équation de la tangente.</strong> La tangente à $\\mathcal{C}_f$ au point d'abscisse $x_0$ a pour équation $y = f'(x_0)(x - x_0) + f(x_0)$. Le coefficient directeur de la tangente est $f'(x_0)$.`;
    return { enonce, corrige, rappel };
  },

  rev_deriv_convexite: (d) => {
    const a = randNonZero(1, 3);
    const b = randNonZero(-4, 4);
    // f = a x^3 + b x^2 ; f'' = 6a x + 2b ; point d'inflexion en x = -b/(3a)
    const enonce = `Soit $f(x) = ${a}x^3 ${signe(b)}x^2$. Étudier la convexité de $f$ et préciser l'abscisse de son éventuel point d'inflexion.`;
    const xi = -b / (3 * a);
    const corrige = `$f'(x) = ${3 * a}x^2 ${signe(2 * b)}x$ puis $f''(x) = ${6 * a}x ${signe(2 * b)}$.<br>` +
      `$f''(x) = 0 \\iff x = ${dec(Math.round(xi * 1000) / 1000)}$. $f''$ change de signe en cette valeur : ${a > 0 ? `$f$ est concave avant, convexe après` : `$f$ est convexe avant, concave après`}.<br>` +
      `La courbe admet un <strong>point d'inflexion</strong> d'abscisse $x = ${dec(Math.round(xi * 1000) / 1000)}$.`;
    const rappel = `<strong>Convexité.</strong> $f$ est convexe sur un intervalle si $f'' \\geqslant 0$ (courbe « au-dessus » de ses tangentes), concave si $f'' \\leqslant 0$. Un <em>point d'inflexion</em> est un point où $f''$ s'annule en changeant de signe (la courbe traverse sa tangente).`;
    return { enonce, corrige, rappel };
  },

  rev_integ_polynome: (d) => {
    const a = randNonZero(1, 4);
    const b = rand(0, 5);
    const borneB = rand(2, 3 + d);
    // ∫_0^B (a x + b) dx = a B^2/2 + b B
    const valeur = a * borneB * borneB / 2 + b * borneB;
    const enonce = `Calculer l'intégrale $I = \\displaystyle\\int_{0}^{${borneB}} (${a}x ${signe(b)})\\, dx$.`;
    const corrige = `Une primitive de $${a}x ${signe(b)}$ est $F(x) = \\dfrac{${a}}{2}x^2 ${signe(b)}x$.<br>` +
      `$I = \\left[\\dfrac{${a}}{2}x^2 ${signe(b)}x\\right]_{0}^{${borneB}} = \\left(\\dfrac{${a}}{2}\\times ${borneB}^2 + ${b}\\times ${borneB}\\right) - 0 = ${dec(valeur)}$.`;
    const rappel = `<strong>Intégrale et primitive.</strong> Si $F$ est une primitive de $f$ sur $[a\\,;\\,b]$, alors $\\displaystyle\\int_a^b f(x)\\,dx = \\big[F(x)\\big]_a^b = F(b) - F(a)$. Primitives usuelles : $x^n \\to \\frac{x^{n+1}}{n+1}$, $e^x \\to e^x$, $\\frac{1}{x} \\to \\ln x$.`;
    return { enonce, corrige, rappel };
  },

  rev_integ_exp: (d) => {
    const borneB = rand(1, 2 + d);
    // ∫_0^B e^x dx = e^B - 1
    const enonce = `Calculer l'intégrale $J = \\displaystyle\\int_{0}^{${borneB}} e^{x}\\, dx$.`;
    const corrige = `Une primitive de $e^x$ est $e^x$.<br>$J = \\big[e^x\\big]_{0}^{${borneB}} = e^{${borneB}} - e^{0} = e^{${borneB}} - 1$.`;
    const rappel = `<strong>Primitive de l'exponentielle.</strong> $\\displaystyle\\int e^x\\,dx = e^x + C$ ; plus généralement $\\displaystyle\\int e^{ax+b}\\,dx = \\frac{1}{a}e^{ax+b} + C$. On laisse souvent le résultat sous forme exacte (avec $e$).`;
    return { enonce, corrige, rappel };
  },

  rev_integ_aire: (d) => {
    const a = rand(1, 3);
    const borneB = rand(2, 3 + d);
    // aire sous f(x) = a x^2 entre 0 et B = a B^3/3
    const aire = a * Math.pow(borneB, 3) / 3;
    const enonce = `On considère la fonction $f$ définie par $f(x) = ${a}x^2$, positive sur $[0\\,;\\,${borneB}]$.<br>` +
      reformule([
        `Calculer l'aire $\\mathcal{A}$, en unités d'aire, du domaine compris entre la courbe de $f$, l'axe des abscisses et les droites $x = 0$ et $x = ${borneB}$.`,
        `Déterminer l'aire sous la courbe de $f$ sur $[0\\,;\\,${borneB}]$.`
      ]);
    const corrige = `Comme $f \\geqslant 0$, l'aire vaut $\\mathcal{A} = \\displaystyle\\int_{0}^{${borneB}} ${a}x^2\\,dx = \\left[\\dfrac{${a}}{3}x^3\\right]_{0}^{${borneB}} = \\dfrac{${a}}{3}\\times ${borneB}^3 = ${dec(Math.round(aire * 1000) / 1000)}$ u.a.`;
    const rappel = `<strong>Aire sous une courbe.</strong> Si $f \\geqslant 0$ sur $[a\\,;\\,b]$, l'aire entre $\\mathcal{C}_f$ et l'axe des abscisses vaut $\\displaystyle\\int_a^b f(x)\\,dx$ (en unités d'aire). Si $f \\leqslant 0$, l'aire vaut $-\\int_a^b f(x)\\,dx$.`;
    return { enonce, corrige, rappel };
  },

  rev_integ_moyenne: (d) => {
    const a = randNonZero(1, 4);
    const borneB = rand(2, 4);
    // valeur moyenne de a x sur [0,B] = (1/B) * a B^2/2 = a B / 2
    const moy = a * borneB / 2;
    const enonce = `Déterminer la valeur moyenne de la fonction $f(x) = ${a}x$ sur l'intervalle $[0\\,;\\,${borneB}]$.`;
    const corrige = `La valeur moyenne vaut $\\mu = \\dfrac{1}{${borneB} - 0}\\displaystyle\\int_{0}^{${borneB}} ${a}x\\,dx = \\dfrac{1}{${borneB}}\\left[\\dfrac{${a}}{2}x^2\\right]_0^{${borneB}} = \\dfrac{1}{${borneB}} \\times \\dfrac{${a}}{2}\\times ${borneB}^2 = ${dec(moy)}$.`;
    const rappel = `<strong>Valeur moyenne.</strong> La valeur moyenne de $f$ sur $[a\\,;\\,b]$ (avec $a \\neq b$) est $\\mu = \\dfrac{1}{b - a}\\displaystyle\\int_a^b f(x)\\,dx$. C'est la hauteur du rectangle de base $[a\\,;\\,b]$ ayant la même aire que sous la courbe.`;
    return { enonce, corrige, rappel };
  },

  rev_espace_scalaire: (d) => {
    const u = [randNonZero(-4, 4), randNonZero(-4, 4), randNonZero(-4, 4)];
    const v = [randNonZero(-4, 4), randNonZero(-4, 4), randNonZero(-4, 4)];
    const ps = u[0] * v[0] + u[1] * v[1] + u[2] * v[2];
    const enonce = `Dans un repère orthonormé de l'espace, on donne $\\vec{u}\\,(${u[0]}\\,;\\,${u[1]}\\,;\\,${u[2]})$ et $\\vec{v}\\,(${v[0]}\\,;\\,${v[1]}\\,;\\,${v[2]})$.<br>` +
      reformule([
        `Calculer le produit scalaire $\\vec{u} \\cdot \\vec{v}$.`,
        `Déterminer $\\vec{u} \\cdot \\vec{v}$ et indiquer si les vecteurs sont orthogonaux.`
      ]);
    const corrige = `$\\vec{u} \\cdot \\vec{v} = ${u[0]} \\times ${par(v[0])} + ${u[1]} \\times ${par(v[1])} + ${u[2]} \\times ${par(v[2])} = ${ps}$.` +
      (ps === 0 ? ` Comme $\\vec{u} \\cdot \\vec{v} = 0$, les vecteurs sont <strong>orthogonaux</strong>.` : ` Le produit scalaire est non nul : les vecteurs ne sont pas orthogonaux.`);
    const rappel = `<strong>Produit scalaire dans l'espace.</strong> En repère orthonormé, $\\vec{u}\\,(x\\,;\\,y\\,;\\,z) \\cdot \\vec{v}\\,(x'\\,;\\,y'\\,;\\,z') = xx' + yy' + zz'$. Deux vecteurs sont <em>orthogonaux</em> si et seulement si leur produit scalaire est nul. Norme : $\\|\\vec{u}\\| = \\sqrt{x^2 + y^2 + z^2}$.`;
    return { enonce, corrige, rappel };
  },

  rev_espace_norme: (d) => {
    // points à coordonnées entières donnant des distances correctes
    const A = [rand(-3, 3), rand(-3, 3), rand(-3, 3)];
    const v = [randNonZero(-3, 3), randNonZero(-3, 3), randNonZero(-3, 3)];
    const B = [A[0] + v[0], A[1] + v[1], A[2] + v[2]];
    const d2 = v[0] * v[0] + v[1] * v[1] + v[2] * v[2];
    const enonce = `On considère les points $A\\,(${A[0]}\\,;\\,${A[1]}\\,;\\,${A[2]})$ et $B\\,(${B[0]}\\,;\\,${B[1]}\\,;\\,${B[2]})$ dans un repère orthonormé.<br>` +
      reformule([
        `Calculer la distance $AB$.`,
        `Déterminer la longueur $AB$.`
      ]);
    const corrige = `$\\overrightarrow{AB}\\,(${v[0]}\\,;\\,${v[1]}\\,;\\,${v[2]})$, donc $AB = \\sqrt{${par(v[0])}^2 + ${par(v[1])}^2 + ${par(v[2])}^2} = \\sqrt{${d2}}$.`;
    const rappel = `<strong>Distance dans l'espace.</strong> $AB = \\|\\overrightarrow{AB}\\| = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2}$. On laisse le résultat sous forme de racine si elle n'est pas entière.`;
    return { enonce, corrige, rappel };
  },

  rev_espace_plan: (d) => {
    const n = [randNonZero(1, 4), randNonZero(-4, 4), randNonZero(-4, 4)];
    const A = [rand(-2, 2), rand(-2, 2), rand(-2, 2)];
    // ax + by + cz + d = 0 avec d = -(n·A)
    const dd = -(n[0] * A[0] + n[1] * A[1] + n[2] * A[2]);
    const enonce = `Déterminer une équation cartésienne du plan $\\mathcal{P}$ passant par $A\\,(${A[0]}\\,;\\,${A[1]}\\,;\\,${A[2]})$ et de vecteur normal $\\vec{n}\\,(${n[0]}\\,;\\,${n[1]}\\,;\\,${n[2]})$.`;
    const corrige = `Le plan a une équation de la forme $${n[0]}x ${signe(n[1])}y ${signe(n[2])}z + d = 0$.<br>` +
      `$A \\in \\mathcal{P}$ : $${n[0]}\\times ${par(A[0])} ${signe(n[1])}\\times ${par(A[1])} ${signe(n[2])}\\times ${par(A[2])} + d = 0$, d'où $d = ${dd}$.<br>` +
      `Une équation est : $${n[0]}x ${signe(n[1])}y ${signe(n[2])}z ${signe(dd)} = 0$.`;
    const rappel = `<strong>Équation cartésienne d'un plan.</strong> Un plan de vecteur normal $\\vec{n}\\,(a\\,;\\,b\\,;\\,c)$ a une équation de la forme $ax + by + cz + d = 0$. On trouve $d$ en utilisant les coordonnées d'un point du plan. Réciproquement, $\\vec{n}\\,(a\\,;\\,b\\,;\\,c)$ est normal au plan $ax+by+cz+d=0$.`;
    return { enonce, corrige, rappel };
  },

  rev_espace_droite: (d) => {
    const A = [rand(-3, 3), rand(-3, 3), rand(-3, 3)];
    const u = [randNonZero(-3, 3), randNonZero(-3, 3), randNonZero(-3, 3)];
    const enonce = `Déterminer une représentation paramétrique de la droite $\\mathcal{D}$ passant par $A\\,(${A[0]}\\,;\\,${A[1]}\\,;\\,${A[2]})$ et de vecteur directeur $\\vec{u}\\,(${u[0]}\\,;\\,${u[1]}\\,;\\,${u[2]})$.`;
    const corrige = `Pour $t \\in \\mathbb{R}$ : $\\begin{cases} x = ${A[0]} ${signe(u[0])}t \\\\ y = ${A[1]} ${signe(u[1])}t \\\\ z = ${A[2]} ${signe(u[2])}t \\end{cases}$`;
    const rappel = `<strong>Représentation paramétrique d'une droite.</strong> La droite passant par $A\\,(x_A\\,;\\,y_A\\,;\\,z_A)$ de vecteur directeur $\\vec{u}\\,(a\\,;\\,b\\,;\\,c)$ est l'ensemble des points $M$ tels que $\\begin{cases} x = x_A + at \\\\ y = y_A + bt \\\\ z = z_A + ct \\end{cases}$ avec $t \\in \\mathbb{R}$.`;
    return { enonce, corrige, rappel };
  },

  rev_espace_colineaire: (d) => {
    const cas = pick(['colin', 'noncolin']);
    const u = [randNonZero(1, 3), randNonZero(1, 3), randNonZero(1, 3)];
    let v, concl;
    if (cas === 'colin') {
      const k = rand(2, 3);
      v = [u[0] * k, u[1] * k, u[2] * k];
      concl = `On remarque que $\\vec{v} = ${k}\\,\\vec{u}$ : les vecteurs sont <strong>colinéaires</strong>.`;
    } else {
      v = [u[0] + 1, u[1], u[2]];
      concl = `Les rapports $\\frac{${v[0]}}{${u[0]}}$, $\\frac{${v[1]}}{${u[1]}}$, $\\frac{${v[2]}}{${u[2]}}$ ne sont pas tous égaux : les vecteurs ne sont <strong>pas colinéaires</strong>.`;
    }
    const enonce = `Les vecteurs $\\vec{u}\\,(${u[0]}\\,;\\,${u[1]}\\,;\\,${u[2]})$ et $\\vec{v}\\,(${v[0]}\\,;\\,${v[1]}\\,;\\,${v[2]})$ sont-ils colinéaires ?`;
    const corrige = concl;
    const rappel = `<strong>Colinéarité.</strong> $\\vec{u}$ et $\\vec{v}$ sont colinéaires s'il existe un réel $k$ tel que $\\vec{v} = k\\,\\vec{u}$ (coordonnées proportionnelles). Trois points $A$, $B$, $C$ sont alignés si $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$ sont colinéaires.`;
    return { enonce, corrige, rappel };
  },

  rev_repere_vecteur: (d) => {
    const A = [rand(-5, 5), rand(-5, 5)];
    const B = [rand(-5, 5), rand(-5, 5)];
    const v = [B[0] - A[0], B[1] - A[1]];
    const mil = [(A[0] + B[0]) / 2, (A[1] + B[1]) / 2];
    const enonce = `On donne $A\\,(${A[0]}\\,;\\,${A[1]})$ et $B\\,(${B[0]}\\,;\\,${B[1]})$.<br>` +
      reformule([
        `Déterminer les coordonnées du vecteur $\\overrightarrow{AB}$ et celles du milieu $I$ de $[AB]$.`,
        `Calculer $\\overrightarrow{AB}$ puis les coordonnées du milieu de $[AB]$.`
      ]);
    const corrige = `$\\overrightarrow{AB}\\,(x_B - x_A\\,;\\,y_B - y_A) = (${v[0]}\\,;\\,${v[1]})$.<br>` +
      `Milieu : $I\\left(\\dfrac{${A[0]} + ${par(B[0])}}{2}\\,;\\,\\dfrac{${A[1]} + ${par(B[1])}}{2}\\right) = (${dec(mil[0])}\\,;\\,${dec(mil[1])})$.`;
    const rappel = `<strong>Coordonnées dans le plan.</strong> $\\overrightarrow{AB}\\,(x_B - x_A\\,;\\,y_B - y_A)$. Milieu de $[AB]$ : $I\\left(\\frac{x_A + x_B}{2}\\,;\\,\\frac{y_A + y_B}{2}\\right)$. Norme : $\\|\\overrightarrow{AB}\\| = \\sqrt{(x_B-x_A)^2 + (y_B-y_A)^2}$.`;
    return { enonce, corrige, rappel };
  },

  rev_repere_scalaire: (d) => {
    const u = [randNonZero(-4, 4), randNonZero(-4, 4)];
    const v = [randNonZero(-4, 4), randNonZero(-4, 4)];
    const ps = u[0] * v[0] + u[1] * v[1];
    const enonce = `Dans un repère orthonormé, $\\vec{u}\\,(${u[0]}\\,;\\,${u[1]})$ et $\\vec{v}\\,(${v[0]}\\,;\\,${v[1]})$.<br>` +
      reformule([
        `Calculer $\\vec{u} \\cdot \\vec{v}$ et préciser si les vecteurs sont orthogonaux.`,
        `Déterminer le produit scalaire $\\vec{u} \\cdot \\vec{v}$.`
      ]);
    const corrige = `$\\vec{u} \\cdot \\vec{v} = ${u[0]} \\times ${par(v[0])} + ${u[1]} \\times ${par(v[1])} = ${ps}$.` +
      (ps === 0 ? ` Le produit scalaire est nul : $\\vec{u}$ et $\\vec{v}$ sont <strong>orthogonaux</strong>.` : ``);
    const rappel = `<strong>Produit scalaire dans le plan.</strong> $\\vec{u}\\,(x\\,;\\,y) \\cdot \\vec{v}\\,(x'\\,;\\,y') = xx' + yy'$. Aussi : $\\vec{u} \\cdot \\vec{v} = \\|\\vec{u}\\|\\,\\|\\vec{v}\\|\\cos\\theta$. Orthogonaux $\\iff$ produit scalaire nul.`;
    return { enonce, corrige, rappel };
  },

  rev_repere_droite: (d) => {
    const A = [rand(-4, 4), rand(-4, 4)];
    let B = [rand(-4, 4), rand(-4, 4)];
    while (B[0] === A[0]) B = [rand(-4, 4), rand(-4, 4)]; // éviter droite verticale
    const m = (B[1] - A[1]) / (B[0] - A[0]);
    const p = A[1] - m * A[0];
    const enonce = `Déterminer l'équation réduite de la droite $(AB)$ avec $A\\,(${A[0]}\\,;\\,${A[1]})$ et $B\\,(${B[0]}\\,;\\,${B[1]})$.`;
    const corrige = `Coefficient directeur : $m = \\dfrac{y_B - y_A}{x_B - x_A} = \\dfrac{${B[1]} - ${par(A[1])}}{${B[0]} - ${par(A[0])}} = ${dec(Math.round(m * 1000) / 1000)}$.<br>` +
      `Ordonnée à l'origine : avec $A$, $${A[1]} = ${dec(Math.round(m * 1000) / 1000)}\\times ${par(A[0])} + p$, donc $p = ${dec(Math.round(p * 1000) / 1000)}$.<br>` +
      `Équation : $y = ${dec(Math.round(m * 1000) / 1000)}x ${signe(Math.round(p * 1000) / 1000)}$.`;
    const rappel = `<strong>Équation réduite d'une droite.</strong> $y = mx + p$ où $m$ est le coefficient directeur et $p$ l'ordonnée à l'origine. Pour deux points : $m = \\frac{y_B - y_A}{x_B - x_A}$, puis on trouve $p$ en remplaçant par les coordonnées d'un point.`;
    return { enonce, corrige, rappel };
  },

  rev_annales_qcm_primitive_xex: (d) => {
    const props = [
      { t: `$F(x) = (x-1)e^{x}$`, ok: true },
      { t: `$F(x) = (x+1)e^{x}$`, ok: false },
      { t: `$F(x) = \\dfrac{x^2}{2}e^{x}$`, ok: false },
      { t: `$F(x) = x^2 e^{x}$`, ok: false }
    ];
    const Q = qcm(props);
    return {
      enonce: `Une primitive sur $\\mathbb{R}$ de la fonction $f(x) = x\\,e^{x}$ est :${Q.html}`,
      corrige: `Réponse <strong>${Q.bonne}</strong>. On vérifie : $\\big((x-1)e^x\\big)' = e^x + (x-1)e^x = x\\,e^x$. Les autres propositions ne redonnent pas $f$ par dérivation.`,
      rappel: `<strong>Primitive d'un produit $(\\text{polynôme}) \\times e^x$.</strong> On cherche $F$ de la même forme et on dérive pour vérifier : $\\big((ax+b)e^x\\big)' = (ax + a + b)e^x$. La dérivation est l'outil de contrôle d'une primitive.`
    };
  },

  rev_annales_qcm_limite_geom: (d) => {
    const a = rand(2, 5);
    const props = [
      { t: `converge vers $0$`, ok: true },
      { t: `diverge vers $+\\infty$`, ok: false },
      { t: `converge vers $\\dfrac{${a}}{${a + 3}}$`, ok: false },
      { t: `converge vers $1$`, ok: false }
    ];
    const Q = qcm(props);
    return {
      enonce: `On considère la suite $(u_n)$ définie pour tout entier naturel $n$ par $u_n = \\dfrac{1 + ${a}^{n}}{1 + ${a + 3}^{n}}$. Cette suite :${Q.html}`,
      corrige: `Réponse <strong>${Q.bonne}</strong>. En factorisant par le terme dominant : $u_n = \\dfrac{${a}^n\\left(${a}^{-n} + 1\\right)}{${a + 3}^n\\left(${a + 3}^{-n} + 1\\right)} \\sim \\left(\\dfrac{${a}}{${a + 3}}\\right)^n \\to 0$ car $0 < \\frac{${a}}{${a + 3}} < 1$.`,
      rappel: `<strong>Limite d'un quotient de puissances.</strong> On factorise haut et bas par la plus grande base. Si $0 < q < 1$, $q^n \\to 0$ ; si $q > 1$, $q^n \\to +\\infty$.`
    };
  },

  rev_annales_qcm_binom_param: (d) => {
    const n = rand(3, 5);
    const num = rand(3, 7);
    const k = rand(1, n - 1);
    const binom = (n, k) => { if (k < 0 || k > n) return 0; if (k === 0 || k === n) return 1; let r = 1; for (let i = 0; i < k; i++) r = r * (n - i) / (i + 1); return Math.round(r); };
    const c = binom(n, k);
    const props = [
      { t: `$\\binom{${n}}{${k}}\\left(\\dfrac{${num}}{10}\\right)^{${k}}\\left(\\dfrac{${10 - num}}{10}\\right)^{${n - k}}$`, ok: true },
      { t: `$\\left(\\dfrac{${num}}{10}\\right)^{${k}}\\left(\\dfrac{${10 - num}}{10}\\right)^{${n - k}}$`, ok: false },
      { t: `$\\binom{${n}}{${k}}\\left(\\dfrac{${num}}{10}\\right)^{${n - k}}\\left(\\dfrac{${10 - num}}{10}\\right)^{${k}}$`, ok: false },
      { t: `$\\left(\\dfrac{${num}}{10}\\right)^{${k}}$`, ok: false }
    ];
    const Q = qcm(props);
    return {
      enonce: `Une urne contient 10 boules dont ${num} rouges. On effectue ${n} tirages successifs <strong>avec remise</strong>. La probabilité d'obtenir exactement ${k} boule(s) rouge(s) est :${Q.html}`,
      corrige: `Réponse <strong>${Q.bonne}</strong>. Le nombre de rouges suit une loi binomiale $\\mathcal{B}\\left(${n}\\,;\\,\\frac{${num}}{10}\\right)$, d'où $P(X = ${k}) = \\binom{${n}}{${k}}\\left(\\frac{${num}}{10}\\right)^{${k}}\\left(\\frac{${10 - num}}{10}\\right)^{${n - k}}$ (ici $\\binom{${n}}{${k}} = ${c}$).`,
      rappel: `<strong>Répétition d'épreuves identiques et indépendantes.</strong> Un tirage <em>avec remise</em> garantit l'indépendance : le nombre de succès suit alors $\\mathcal{B}(n\\,;\\,p)$ et $P(X=k) = \\binom{n}{k}p^k(1-p)^{n-k}$.`
    };
  },

  rev_annales_qcm_derivee_xln: (d) => {
    const props = [
      { t: `$f'(x) = x(2\\ln x + 1)$`, ok: true },
      { t: `$f'(x) = 2x\\ln x$`, ok: false },
      { t: `$f'(x) = 2$`, ok: false },
      { t: `$f'(x) = x$`, ok: false }
    ];
    const Q = qcm(props);
    return {
      enonce: `Soit $f$ définie sur $]0\\,;\\,+\\infty[$ par $f(x) = x^2\\ln x$. La dérivée de $f$ est :${Q.html}`,
      corrige: `Réponse <strong>${Q.bonne}</strong>. Produit : $f'(x) = 2x\\ln x + x^2 \\times \\frac{1}{x} = 2x\\ln x + x = x(2\\ln x + 1)$.`,
      rappel: `<strong>Dérivée d'un produit avec $\\ln$.</strong> $(uv)' = u'v + uv'$ et $(\\ln x)' = \\frac{1}{x}$. Attention à ne pas oublier le second terme.`
    };
  },

  rev_annales_vf_convexe: (d) => {
    return {
      enonce: `<strong>Affirmation.</strong> La fonction $f$ définie sur $\\mathbb{R}$ par $f(x) = e^{x} - x$ est convexe sur $\\mathbb{R}$.<br>Cette affirmation est-elle vraie ou fausse ? Justifier.`,
      corrige: `<strong>VRAIE.</strong> $f'(x) = e^x - 1$ puis $f''(x) = e^x$. Or $e^x > 0$ pour tout réel $x$, donc $f'' > 0$ : $f$ est convexe sur $\\mathbb{R}$.`,
      rappel: `<strong>Convexité par la dérivée seconde.</strong> $f$ est convexe sur un intervalle si et seulement si $f'' \\geqslant 0$ sur cet intervalle.`
    };
  },

  rev_annales_vf_croissance: (d) => {
    return {
      enonce: `<strong>Affirmation.</strong> $\\lim\\limits_{x \\to +\\infty} \\dfrac{e^{2x} - 1}{e^{x} - x} = 0$.<br>Vraie ou fausse ? Justifier.`,
      corrige: `<strong>FAUSSE.</strong> Au numérateur $e^{2x}$ domine, au dénominateur $e^x$ domine (car $\\frac{x}{e^x} \\to 0$). Donc le quotient se comporte comme $\\frac{e^{2x}}{e^x} = e^x \\to +\\infty$, et non $0$.`,
      rappel: `<strong>Croissances comparées.</strong> En $+\\infty$, l'exponentielle l'emporte sur toute puissance : $\\frac{e^x}{x^n} \\to +\\infty$. On compare les termes dominants haut et bas.`
    };
  },

  rev_annales_vf_bornee: (d) => {
    return {
      enonce: `<strong>Affirmation.</strong> La suite $(u_n)$ définie pour tout entier naturel $n$ par $u_n = \\dfrac{(-1)^{n}}{n + 1}$ est bornée.<br>Vraie ou fausse ? Justifier.`,
      corrige: `<strong>VRAIE.</strong> Pour tout $n$, $|u_n| = \\dfrac{1}{n+1} \\leqslant 1$, donc $-1 \\leqslant u_n \\leqslant 1$ : la suite est bornée.`,
      rappel: `<strong>Suite bornée.</strong> $(u_n)$ est bornée s'il existe deux réels $m$ et $M$ tels que $m \\leqslant u_n \\leqslant M$ pour tout $n$. Étudier $|u_n|$ est souvent commode.`
    };
  },

  rev_annales_vf_eq_exp: (d) => {
    const a = rand(2, 4);
    return {
      enonce: `<strong>Affirmation.</strong> L'équation $(2e^{x} - ${2 * a})(e^{x} + 2) = 0$ admet $\\ln(${a})$ comme unique solution dans $\\mathbb{R}$.<br>Vraie ou fausse ? Justifier.`,
      corrige: `<strong>VRAIE.</strong> Un produit est nul si l'un des facteurs l'est. $e^x + 2 > 0$ toujours (pas de solution). $2e^x - ${2 * a} = 0 \\iff e^x = ${a} \\iff x = \\ln(${a})$. Unique solution : $\\ln(${a})$.`,
      rappel: `<strong>Équation produit.</strong> $AB = 0 \\iff A = 0$ ou $B = 0$. Penser à écarter les facteurs toujours strictement positifs comme $e^x + c$ avec $c > 0$.`
    };
  },

  rev_annales_suite_aux_geom: (d) => {
    const contextes = [
      { intro: `Une entreprise suit l'état de ses trottinettes chaque semaine.`, evt: `la trottinette est en bon état`, p0: 1 },
      { intro: `Un athlète s'entraîne à franchir une haie chaque jour.`, evt: `l'athlète franchit la haie`, p0: 0.6 },
      { intro: `M. Durand choisit chaque matin le vélo ou les transports.`, evt: `il prend les transports`, p0: 1 }
    ];
    const ctx = pick(contextes);
    const aNum = rand(2, 5);
    const a = aNum / 10;
    const Lcible = pick([0.75, 0.8]);
    const b = Math.round(Lcible * (1 - a) * 100) / 100;
    const enonce = `${ctx.intro} On note $p_n$ la probabilité que « ${ctx.evt} » à l'étape $n$, et on admet que pour tout entier naturel $n$ :<br>$p_{n+1} = ${dec(a)}\\,p_n + ${dec(b)}$, avec $p_0 = ${dec(ctx.p0)}$.<br>` +
      `On pose $u_n = p_n - ${dec(Lcible)}$.<br>` +
      reformule([
        `Démontrer que $(u_n)$ est géométrique, puis en déduire la limite de $(p_n)$.`,
        `Montrer que $(u_n)$ est géométrique et déterminer $\\lim\\limits_{n\\to+\\infty} p_n$.`
      ]);
    const corrige = `$u_{n+1} = p_{n+1} - ${dec(Lcible)} = ${dec(a)}p_n + ${dec(b)} - ${dec(Lcible)} = ${dec(a)}\\left(p_n - ${dec(Lcible)}\\right) = ${dec(a)}\\,u_n$.<br>` +
      `Donc $(u_n)$ est géométrique de raison $${dec(a)}$. Comme $0 < ${dec(a)} < 1$, $u_n \\to 0$, donc $p_n \\to ${dec(Lcible)}$.`;
    const rappel = `<strong>Suite auxiliaire géométrique.</strong> Pour $p_{n+1} = a\\,p_n + b$ (avec $a \\neq 1$), le point fixe est $L = \\frac{b}{1-a}$. La suite $u_n = p_n - L$ est géométrique de raison $a$. Si $|a| < 1$, alors $p_n \\to L$.`;
    return { enonce, corrige, rappel };
  },

  rev_annales_binom_identifier: (d) => {
    const contextes = [
      { intro: `Dans un lot de trottinettes, chacune est en bon état avec probabilité`, sujet: `trottinettes en bon état`, p: 0.8 },
      { intro: `Un athlète franchit chaque haie avec probabilité`, sujet: `haies franchies`, p: 0.75 },
      { intro: `Un déchet prélevé est recyclable avec probabilité`, sujet: `déchets recyclables`, p: 0.65 }
    ];
    const ctx = pick(contextes);
    const n = d === 1 ? rand(5, 10) : (d === 2 ? rand(10, 20) : rand(20, 40));
    const enonce = `${ctx.intro} $${dec(ctx.p)}$, indépendamment des autres. On prélève $${n}$ éléments (assimilé à un tirage avec remise). On note $X$ le nombre de ${ctx.sujet}.<br>` +
      reformule([
        `Justifier que $X$ suit une loi binomiale et préciser ses paramètres, puis donner $E(X)$.`,
        `Préciser la loi suivie par $X$ ainsi que ses paramètres, et calculer son espérance.`
      ]);
    const E = Math.round(n * ctx.p * 100) / 100;
    const corrige = `On répète $${n}$ épreuves de Bernoulli identiques et indépendantes (tirage avec remise), chacune avec probabilité de succès $${dec(ctx.p)}$. Donc $X$ suit la loi binomiale $\\mathcal{B}\\left(${n}\\,;\\,${dec(ctx.p)}\\right)$.<br>` +
      `Espérance : $E(X) = np = ${n} \\times ${dec(ctx.p)} = ${dec(E)}$.`;
    const rappel = `<strong>Reconnaître une loi binomiale.</strong> Quatre conditions : (1) répétition de $n$ épreuves identiques ; (2) deux issues (succès/échec) ; (3) épreuves indépendantes (tirage avec remise) ; (4) même probabilité $p$. Alors $X \\sim \\mathcal{B}(n\\,;\\,p)$, $E(X) = np$.`;
    return { enonce, corrige, rappel };
  },

  rev_annales_recur_minoration: (d) => {
    const u0 = rand(2, 5);
    const a = rand(2, 3);
    const b = rand(1, 4);
    const enonce = `Soit $(u_n)$ la suite définie par $u_0 = ${u0}$ et $u_{n+1} = ${a}u_n ${signe(b)}$ pour tout entier naturel $n$.<br>` +
      reformule([
        `Démontrer par récurrence que pour tout entier naturel $n$, $u_n \\geqslant ${u0}$.`,
        `Montrer par récurrence que $u_n \\geqslant ${u0}$ pour tout $n \\in \\mathbb{N}$.`
      ]);
    const corrige = `<strong>Initialisation :</strong> $u_0 = ${u0} \\geqslant ${u0}$, vrai au rang $0$.<br>` +
      `<strong>Hérédité :</strong> si $u_n \\geqslant ${u0}$, alors $u_{n+1} = ${a}u_n ${signe(b)} \\geqslant ${a} \\times ${u0} ${signe(b)} = ${a * u0 + b} \\geqslant ${u0}$.<br>` +
      `<strong>Conclusion :</strong> par récurrence, $u_n \\geqslant ${u0}$ pour tout $n$.`;
    const rappel = `<strong>Récurrence.</strong> Initialisation (rang $0$), hérédité (supposer vrai au rang $n$, prouver au rang $n+1$), conclusion. Dans l'hérédité, on part de l'hypothèse et on applique la relation de récurrence.`;
    return { enonce, corrige, rappel };
  },

  rev_annales_esp_normal_plan: (d) => {
    const u = [randNonZero(1, 3), randNonZero(1, 3), randNonZero(-3, 3)];
    const v = [randNonZero(1, 3), randNonZero(-3, 3), randNonZero(1, 3)];
    const n = [u[1] * v[2] - u[2] * v[1], u[2] * v[0] - u[0] * v[2], u[0] * v[1] - u[1] * v[0]];
    const enonce = `Dans un repère orthonormé de l'espace, un plan $\\mathcal{P}$ est dirigé par $\\vec{u}\\,(${u[0]}\\,;\\,${u[1]}\\,;\\,${u[2]})$ et $\\vec{v}\\,(${v[0]}\\,;\\,${v[1]}\\,;\\,${v[2]})$.<br>Vérifier que $\\vec{n}\\,(${n[0]}\\,;\\,${n[1]}\\,;\\,${n[2]})$ est normal à $\\mathcal{P}$.`;
    const corrige = `Il suffit de vérifier $\\vec{n} \\cdot \\vec{u} = 0$ et $\\vec{n} \\cdot \\vec{v} = 0$.<br>` +
      `$\\vec{n} \\cdot \\vec{u} = ${n[0]} \\times ${par(u[0])} ${signe(n[1])} \\times ${par(u[1])} ${signe(n[2])} \\times ${par(u[2])} = ${n[0] * u[0] + n[1] * u[1] + n[2] * u[2]}$.<br>` +
      `$\\vec{n} \\cdot \\vec{v} = ${n[0]} \\times ${par(v[0])} ${signe(n[1])} \\times ${par(v[1])} ${signe(n[2])} \\times ${par(v[2])} = ${n[0] * v[0] + n[1] * v[1] + n[2] * v[2]}$.<br>` +
      `Les deux produits scalaires sont nuls, donc $\\vec{n}$ est orthogonal à deux vecteurs non colinéaires de $\\mathcal{P}$ : il est normal à $\\mathcal{P}$.`;
    const rappel = `<strong>Vecteur normal à un plan.</strong> $\\vec{n}$ est normal au plan $\\mathcal{P}$ s'il est orthogonal à deux vecteurs directeurs non colinéaires de $\\mathcal{P}$, c'est-à-dire si son produit scalaire avec chacun est nul.`;
    return { enonce, corrige, rappel };
  },

  rev_annales_esp_distance: (d) => {
    const A = [rand(-2, 2), rand(-2, 2), rand(-2, 2)];
    const n = [randNonZero(1, 3), randNonZero(-3, 3), randNonZero(1, 3)];
    const dd = randNonZero(-4, 4);
    const numer = Math.abs(n[0] * A[0] + n[1] * A[1] + n[2] * A[2] + dd);
    const norme2 = n[0] * n[0] + n[1] * n[1] + n[2] * n[2];
    const enonce = `Soit le plan $\\mathcal{P}$ d'équation $${coefVar(n[0], 'x', true)}${coefVar(n[1], 'y', false)}${coefVar(n[2], 'z', false)} ${signe(dd)} = 0$ et le point $A\\,(${A[0]}\\,;\\,${A[1]}\\,;\\,${A[2]})$.<br>Calculer la distance du point $A$ au plan $\\mathcal{P}$.`;
    const corrige = `$d(A, \\mathcal{P}) = \\dfrac{\\left|${n[0]} \\times ${par(A[0])} ${signe(n[1])}\\times ${par(A[1])} ${signe(n[2])}\\times ${par(A[2])} ${signe(dd)}\\right|}{\\sqrt{${n[0]}^2 + ${par(n[1])}^2 + ${n[2]}^2}} = \\dfrac{${numer}}{\\sqrt{${norme2}}}$.`;
    const rappel = `<strong>Distance d'un point à un plan.</strong> Pour $\\mathcal{P} : ax + by + cz + d = 0$ et $A(x_A\\,;\\,y_A\\,;\\,z_A)$ : $d(A, \\mathcal{P}) = \\dfrac{|a x_A + b y_A + c z_A + d|}{\\sqrt{a^2 + b^2 + c^2}}$.`;
    return { enonce, corrige, rappel };
  },

  rev_annales_py_seuil: (d) => {
    const u0 = rand(2, 5);
    const q = rand(2, 3);
    const seuil = rand(50, 200);
    let n = 0, u = u0;
    while (u <= seuil) { u = u * q; n++; }
    const enonce = `On considère la fonction Python suivante :<br>` +
      `<pre>def seuil():\n    u = ${u0}\n    n = 0\n    while u <= ${seuil}:\n        u = ${q} * u\n        n = n + 1\n    return n</pre>` +
      `Que renvoie l'appel <code>seuil()</code> ? Justifier.`;
    const corrige = `La suite $u_n = ${u0} \\times ${q}^{n}$ part de $${u0}$ et est multipliée par $${q}$ à chaque tour. On compte le nombre d'étapes pour dépasser $${seuil}$.<br>` +
      `Les valeurs successives mènent à dépasser $${seuil}$ au bout de <strong>$${n}$</strong> itérations : la fonction renvoie $${n}$.`;
    const rappel = `<strong>Recherche de seuil.</strong> Une boucle <code>while</code> répète tant que la condition est vraie ; le compteur $n$ donne le nombre d'itérations nécessaires pour atteindre le seuil. Ici $u_n = u_0 q^n$ (suite géométrique).`;
    return { enonce, corrige, rappel };
  },

  rev_annales_lec_tangente: (d) => {
    const x0 = rand(1, 4);
    const m = randNonZero(-3, 3);
    const p = rand(-2, 4);
    const y0 = m * x0 + p;
    return {
      enonce: `La tangente à une courbe $\\mathcal{C}_f$ au point d'abscisse $${x0}$ passe par les points de coordonnées $(${x0}\\,;\\,${y0})$ et $(${x0 + 1}\\,;\\,${y0 + m})$.<br>Par lecture, donner $f'(${x0})$.`,
      corrige: `Le nombre dérivé $f'(${x0})$ est le coefficient directeur de la tangente : $f'(${x0}) = \\dfrac{${y0 + m} - ${par(y0)}}{${x0 + 1} - ${x0}} = ${m}$.`,
      rappel: `<strong>Nombre dérivé et tangente.</strong> $f'(a)$ est le coefficient directeur de la tangente à $\\mathcal{C}_f$ au point d'abscisse $a$. On le lit comme une pente : $\\frac{\\Delta y}{\\Delta x}$.`
    };
  },

  rev_annales_lec_inflexion: (d) => {
    return {
      enonce: `La courbe d'une fonction $f$ deux fois dérivable « tourne » sa concavité vers le haut puis vers le bas, le changement se produisant au point d'abscisse $${rand(2, 5)}$.<br>Que représente ce point pour la courbe ? Que vaut $f''$ en ce point ?`,
      corrige: `C'est un <strong>point d'inflexion</strong> : la courbe traverse sa tangente et la convexité change. En ce point, $f''$ s'annule en changeant de signe.`,
      rappel: `<strong>Point d'inflexion.</strong> Point où la courbe change de convexité ; $f''$ s'y annule en changeant de signe. La courbe y traverse sa tangente.`
    };
  },

  rev_annales_qcm_asymptote: (d) => {
    const a = randNonZero(2, 5);
    const b = randNonZero(-4, 4);
    const c = randNonZero(-3, 3);
    const props = [
      { t: `$y = ${a}$ en $+\\infty$ et $x = ${-c}$`, ok: true },
      { t: `$y = 0$ en $+\\infty$ et $x = ${c}$`, ok: false },
      { t: `$y = ${a}$ en $+\\infty$ uniquement`, ok: false },
      { t: `$x = ${b}$ et pas d'asymptote horizontale`, ok: false }
    ];
    const Q = qcm(props);
    return {
      enonce: `Soit $f$ définie par $f(x) = \\dfrac{${a}x ${signe(b)}}{x ${signe(c)}}$ sur son ensemble de définition. Les asymptotes à $\\mathcal{C}_f$ sont :${Q.html}`,
      corrige: `Réponse <strong>${Q.bonne}</strong>. En $\\pm\\infty$ : $f(x) \\sim \\frac{${a}x}{x} = ${a}$, asymptote horizontale $y = ${a}$. La fonction n'est pas définie en $x = ${-c}$ (annule le dénominateur) avec $f(x) \\to \\pm\\infty$ : asymptote verticale $x = ${-c}$.`,
      rappel: `<strong>Asymptotes d'une fonction rationnelle.</strong> Pour $f(x) = \\frac{ax + b}{cx + d}$ : asymptote horizontale $y = \\frac{a}{c}$ en $\\pm\\infty$ ; asymptote verticale là où le dénominateur s'annule sans annuler le numérateur.`
    };
  },

  rev_annales_qcm_convexite_fss: (d) => {
    const b = randNonZero(-3, 3);
    const c = randNonZero(-3, 3);
    const props = [
      { t: `convexe sur $[0\\,;\\,+\\infty[$, concave sur $]-\\infty\\,;\\,0]$`, ok: true },
      { t: `convexe sur $\\mathbb{R}$`, ok: false },
      { t: `concave sur $\\mathbb{R}$`, ok: false },
      { t: `convexe sur $]-\\infty\\,;\\,0]$, concave sur $[0\\,;\\,+\\infty[$`, ok: false }
    ];
    const Q = qcm(props);
    return {
      enonce: `Soit $f$ définie sur $\\mathbb{R}$ par $f(x) = x^{3}${coefVar(b, 'x', false)} ${signe(c)}$. La fonction $f$ est :${Q.html}`,
      corrige: `Réponse <strong>${Q.bonne}</strong>. $f'(x) = 3x^{2} ${signe(b)}$, puis $f''(x) = 6x$. $f''$ est négative sur $]-\\infty\\,;\\,0]$ (concave) et positive sur $[0\\,;\\,+\\infty[$ (convexe).`,
      rappel: `<strong>Convexité et signe de $f''$.</strong> $f'' \\geqslant 0$ sur un intervalle $\\iff f$ y est convexe. Un changement de signe de $f''$ correspond à un point d'inflexion.`
    };
  },

  rev_annales_qcm_tvi: (d) => {
    const k = rand(3, 8);
    const props = [
      { t: `une unique solution sur $\\mathbb{R}$`, ok: true },
      { t: `aucune solution sur $\\mathbb{R}$`, ok: false },
      { t: `exactement deux solutions`, ok: false },
      { t: `une infinité de solutions`, ok: false }
    ];
    const Q = qcm(props);
    return {
      enonce: `Soit $f$ définie sur $\\mathbb{R}$ par $f(x) = x^{3} + x - ${k}$. L'équation $f(x) = 0$ admet :${Q.html}`,
      corrige: `Réponse <strong>${Q.bonne}</strong>. $f'(x) = 3x^{2} + 1 > 0$ : $f$ est strictement croissante sur $\\mathbb{R}$. De plus $\\lim_{x \\to -\\infty} f = -\\infty$ et $\\lim_{x \\to +\\infty} f = +\\infty$. Par le théorème de la bijection (corollaire du TVI), $f$ s'annule en un unique réel.`,
      rappel: `<strong>Théorème de la bijection.</strong> Si $f$ est continue et strictement monotone sur $[a, b]$, et si $k$ est entre $f(a)$ et $f(b)$, alors $f(x) = k$ a une <em>unique</em> solution dans $[a, b]$.`
    };
  },

  rev_annales_qcm_tangente_horiz: (d) => {
    const sommet = randNonZero(-3, 3);
    const b = -2 * sommet; // pour que x = sommet soit la tangente horizontale
    const c = randNonZero(-3, 3);
    const props = [
      { t: `$x = ${sommet}$`, ok: true },
      { t: `$x = ${b}$`, ok: false },
      { t: `$x = ${-b}$`, ok: false },
      { t: `aucune tangente horizontale`, ok: false }
    ];
    const Q = qcm(props);
    return {
      enonce: `Soit $f$ définie sur $\\mathbb{R}$ par $f(x) = x^{2} ${signe(b)}x ${signe(c)}$. La tangente à $\\mathcal{C}_f$ est horizontale au point d'abscisse :${Q.html}`,
      corrige: `Réponse <strong>${Q.bonne}</strong>. $f'(x) = 2x ${signe(b)}$. La tangente est horizontale là où $f'(x) = 0$, soit $2x ${signe(b)} = 0 \\iff x = ${sommet}$.`,
      rappel: `<strong>Tangente horizontale.</strong> La tangente à $\\mathcal{C}_f$ au point d'abscisse $a$ est horizontale ssi $f'(a) = 0$. Pour $f(x) = ax^{2} + bx + c$, c'est en $x = -\\frac{b}{2a}$.`
    };
  },

  rev_annales_vf_asymptote: (d) => {
    return {
      enonce: `<strong>Affirmation.</strong> La fonction $f$ définie sur $]1\\,;\\,+\\infty[$ par $f(x) = \\dfrac{2x + 1}{x - 1}$ admet la droite d'équation $y = 2$ comme asymptote horizontale en $+\\infty$.<br>Vraie ou fausse ? Justifier.`,
      corrige: `<strong>VRAIE.</strong> En $+\\infty$ : $f(x) = \\dfrac{2x + 1}{x - 1} = \\dfrac{2 + \\frac{1}{x}}{1 - \\frac{1}{x}} \\to \\dfrac{2}{1} = 2$. Donc $y = 2$ est asymptote horizontale à $\\mathcal{C}_f$ en $+\\infty$.`,
      rappel: `<strong>Asymptote horizontale.</strong> Si $\\lim_{x \\to +\\infty} f(x) = L$ (réel fini), alors la droite $y = L$ est asymptote horizontale à $\\mathcal{C}_f$ en $+\\infty$.`
    };
  },

  rev_annales_vf_tvi: (d) => {
    return {
      enonce: `<strong>Affirmation.</strong> L'équation $x^{5} + x + 1 = 0$ admet une unique solution réelle.<br>Vraie ou fausse ? Justifier.`,
      corrige: `<strong>VRAIE.</strong> Posons $f(x) = x^{5} + x + 1$. $f'(x) = 5x^{4} + 1 > 0$, donc $f$ est strictement croissante sur $\\mathbb{R}$. De plus $\\lim_{x \\to -\\infty} f = -\\infty$ et $\\lim_{x \\to +\\infty} f = +\\infty$. Par le théorème de la bijection, $f$ s'annule en un unique réel.`,
      rappel: `<strong>Théorème de la bijection.</strong> $f$ continue strictement monotone sur $I$ qui prend des valeurs négatives <em>et</em> positives s'annule en un unique point de $I$.`
    };
  },

  rev_annales_vf_indep: (d) => {
    const cas = pick([
      { pA: 0.4, pB: 0.5, pInter: 0.2, verdict: true },
      { pA: 0.3, pB: 0.6, pInter: 0.18, verdict: true },
      { pA: 0.5, pB: 0.4, pInter: 0.25, verdict: false } // 0.5*0.4 = 0.2 ≠ 0.25
    ]);
    const { pA, pB, pInter, verdict } = cas;
    const produit = Math.round(pA * pB * 100) / 100;
    return {
      enonce: `<strong>Affirmation.</strong> Soient $A$ et $B$ deux événements tels que $P(A) = ${dec(pA)}$, $P(B) = ${dec(pB)}$ et $P(A \\cap B) = ${dec(pInter)}$. Les événements $A$ et $B$ sont indépendants.<br>Vraie ou fausse ? Justifier.`,
      corrige: verdict
        ? `<strong>VRAIE.</strong> $P(A) \\times P(B) = ${dec(pA)} \\times ${dec(pB)} = ${dec(produit)} = P(A \\cap B)$. Donc $A$ et $B$ sont indépendants.`
        : `<strong>FAUSSE.</strong> $P(A) \\times P(B) = ${dec(pA)} \\times ${dec(pB)} = ${dec(produit)}$, mais $P(A \\cap B) = ${dec(pInter)} \\neq ${dec(produit)}$. Donc $A$ et $B$ ne sont pas indépendants.`,
      rappel: `<strong>Indépendance.</strong> Deux événements $A$ et $B$ sont indépendants ssi $P(A \\cap B) = P(A) \\times P(B)$. C'est équivalent à $P_A(B) = P(B)$ (si $P(A) > 0$).`
    };
  },

  rev_annales_suite_arith_geom_encadrement: (d) => {
    return {
      enonce: `Soit $(u_n)$ définie par $u_0 = 0$ et $u_{n+1} = \\dfrac{1}{2}u_n + 1$ pour tout $n \\in \\mathbb{N}$.<br>` +
        reformule([
          `Démontrer par récurrence que $0 \\leqslant u_n \\leqslant 2$ pour tout entier naturel $n$.`,
          `Montrer par récurrence que pour tout $n$, $u_n \\in [0\\,;\\,2]$.`
        ]),
      corrige: `<strong>Initialisation :</strong> $u_0 = 0$, donc $0 \\leqslant u_0 \\leqslant 2$.<br>` +
        `<strong>Hérédité :</strong> supposons $0 \\leqslant u_n \\leqslant 2$. Alors $0 \\leqslant \\dfrac{1}{2}u_n \\leqslant 1$, puis $1 \\leqslant \\dfrac{1}{2}u_n + 1 \\leqslant 2$, soit $1 \\leqslant u_{n+1} \\leqslant 2$. En particulier $0 \\leqslant u_{n+1} \\leqslant 2$.<br>` +
        `<strong>Conclusion :</strong> par récurrence, $0 \\leqslant u_n \\leqslant 2$ pour tout $n$.`,
      rappel: `<strong>Encadrement par récurrence.</strong> On manipule chaque inégalité en parallèle. Multiplier par un coefficient positif conserve l'ordre, ajouter une constante aussi.`
    };
  },

  rev_annales_recur_encadrement: (d) => {
    return {
      enonce: `Soit $(u_n)$ définie par $u_0 = 1$ et $u_{n+1} = \\dfrac{u_n + 3}{2}$ pour tout $n \\in \\mathbb{N}$.<br>` +
        `Démontrer par récurrence que $1 \\leqslant u_n \\leqslant 3$ pour tout entier naturel $n$.`,
      corrige: `<strong>Initialisation :</strong> $u_0 = 1$, donc $1 \\leqslant u_0 \\leqslant 3$.<br>` +
        `<strong>Hérédité :</strong> si $1 \\leqslant u_n \\leqslant 3$, alors $4 \\leqslant u_n + 3 \\leqslant 6$, puis $2 \\leqslant \\dfrac{u_n + 3}{2} \\leqslant 3$, donc $1 \\leqslant u_{n+1} \\leqslant 3$.<br>` +
        `<strong>Conclusion :</strong> par récurrence, $1 \\leqslant u_n \\leqslant 3$ pour tout $n$.`,
      rappel: `<strong>Stabilité d'un intervalle.</strong> Si $f([m, M]) \\subset [m, M]$ (intervalle stable par $f$) et $u_0 \\in [m, M]$, alors $u_n \\in [m, M]$ pour tout $n$.`
    };
  },

  rev_annales_recur_monotonie: (d) => {
    return {
      enonce: `Soit $(u_n)$ définie par $u_0 = 0$ et $u_{n+1} = u_n^{2} + u_n + 1$ pour tout $n \\in \\mathbb{N}$.<br>` +
        `Démontrer que $(u_n)$ est strictement croissante.`,
      corrige: `Pour tout $n \\in \\mathbb{N}$ : $u_{n+1} - u_n = u_n^{2} + 1 > 0$ (somme d'un carré et de $1$). Donc $u_{n+1} > u_n$, ce qui prouve que $(u_n)$ est strictement croissante.`,
      rappel: `<strong>Monotonie d'une suite.</strong> Pour montrer $u_{n+1} > u_n$, étudier directement le signe de $u_{n+1} - u_n$ est souvent plus simple qu'une récurrence. Si la relation est $u_{n+1} = f(u_n)$ avec $f$ croissante, la récurrence marche aussi.`
    };
  },

  rev_annales_esp_volume: (d) => {
    const a = rand(2, 5), b = rand(2, 5), c = rand(2, 5);
    const vol6 = a * b * c;
    const g = pgcdGlobal(vol6, 6);
    const volAff = (vol6 % 6 === 0) ? `${vol6 / 6}` : `\\dfrac{${vol6 / g}}{${6 / g}}`;
    const aireBase = a * b;
    const aireG = pgcdGlobal(aireBase, 2);
    const aireAff = (aireBase % 2 === 0) ? `${aireBase / 2}` : `\\dfrac{${aireBase}}{2}`;
    return {
      enonce: `Dans un repère orthonormé, on considère le tétraèdre $OABC$ avec $O(0\\,;\\,0\\,;\\,0)$, $A(${a}\\,;\\,0\\,;\\,0)$, $B(0\\,;\\,${b}\\,;\\,0)$ et $C(0\\,;\\,0\\,;\\,${c})$.<br>` +
        reformule([
          `Calculer le volume du tétraèdre $OABC$ en unités de volume.`,
          `Déterminer le volume du tétraèdre $OABC$.`
        ]),
      corrige: `Le triangle $OAB$, base du tétraèdre, est rectangle en $O$ : son aire vaut $\\dfrac{${a} \\times ${b}}{2} = ${aireAff}$.<br>` +
        `La hauteur issue de $C$ est $OC = ${c}$ (axe $z$, perpendiculaire au plan $(OAB)$).<br>` +
        `$V = \\dfrac{1}{3} \\times \\mathcal{A}_{\\text{base}} \\times h = \\dfrac{1}{3} \\times ${aireAff} \\times ${c} = ${volAff}$ u.v.`,
      rappel: `<strong>Volume d'un tétraèdre.</strong> $V = \\dfrac{1}{3} \\times \\mathcal{A}_{\\text{base}} \\times h$. On choisit comme base un triangle dont on sait calculer l'aire (souvent rectangle), et $h$ est la hauteur relative à cette base.`
    };
  },

  rev_annales_esp_param: (d) => {
    const A = [rand(-3, 3), rand(-3, 3), rand(-3, 3)];
    const u = [randNonZero(1, 3), randNonZero(-3, 3), randNonZero(1, 3)];
    return {
      enonce: `Dans un repère orthonormé, on considère le point $A(${A[0]}\\,;\\,${A[1]}\\,;\\,${A[2]})$ et le vecteur $\\vec{u}(${u[0]}\\,;\\,${u[1]}\\,;\\,${u[2]})$.<br>` +
        `Donner une représentation paramétrique de la droite $\\mathcal{D}$ passant par $A$ et dirigée par $\\vec{u}$.`,
      corrige: `Un point $M(x\\,;\\,y\\,;\\,z)$ appartient à $\\mathcal{D}$ ssi $\\overrightarrow{AM} = t\\,\\vec{u}$ pour un certain $t \\in \\mathbb{R}$. D'où :<br>` +
        `$\\mathcal{D} : \\begin{cases} x = ${A[0]}${coefVar(u[0], 't', false)} \\\\ y = ${A[1]}${coefVar(u[1], 't', false)} \\\\ z = ${A[2]}${coefVar(u[2], 't', false)} \\end{cases}$, $t \\in \\mathbb{R}$.`,
      rappel: `<strong>Représentation paramétrique d'une droite.</strong> Pour une droite passant par $A(x_A\\,;\\,y_A\\,;\\,z_A)$ et de vecteur directeur $\\vec{u}(a\\,;\\,b\\,;\\,c)$ : $\\begin{cases} x = x_A + at \\\\ y = y_A + bt \\\\ z = z_A + ct \\end{cases}$, $t \\in \\mathbb{R}$.`
    };
  },

  rev_annales_esp_eq_plan: (d) => {
    const A = [randNonZero(-3, 3), randNonZero(-3, 3), randNonZero(-3, 3)];
    const n = [randNonZero(1, 3), randNonZero(-3, 3), randNonZero(1, 3)];
    const dd = -(n[0] * A[0] + n[1] * A[1] + n[2] * A[2]);
    const eqStr = `${coefVar(n[0], 'x', true)}${coefVar(n[1], 'y', false)}${coefVar(n[2], 'z', false)}${dd === 0 ? '' : ' ' + fmtAdd(dd)} = 0`;
    return {
      enonce: `Dans un repère orthonormé, on considère le point $A(${A[0]}\\,;\\,${A[1]}\\,;\\,${A[2]})$ et le vecteur $\\vec{n}(${n[0]}\\,;\\,${n[1]}\\,;\\,${n[2]})$.<br>` +
        `Déterminer une équation cartésienne du plan $\\mathcal{P}$ passant par $A$ et de vecteur normal $\\vec{n}$.`,
      corrige: `Un point $M(x\\,;\\,y\\,;\\,z)$ appartient à $\\mathcal{P}$ ssi $\\overrightarrow{AM} \\cdot \\vec{n} = 0$, c'est-à-dire $${n[0]}(x ${signe(-A[0])}) ${signe(n[1])}(y ${signe(-A[1])}) ${signe(n[2])}(z ${signe(-A[2])}) = 0$.<br>` +
        `En développant : $${eqStr}$.`,
      rappel: `<strong>Équation cartésienne d'un plan.</strong> Pour un plan passant par $A(x_A\\,;\\,y_A\\,;\\,z_A)$ de vecteur normal $\\vec{n}(a\\,;\\,b\\,;\\,c)$ : $a(x - x_A) + b(y - y_A) + c(z - z_A) = 0$, qui se met sous la forme $ax + by + cz + d = 0$ avec $d = -(ax_A + by_A + cz_A)$.`
    };
  },

  rev_annales_esp_intersection: (d) => {
    return {
      enonce: `Dans un repère orthonormé, on considère le plan $\\mathcal{P} : x + 2y - z - 4 = 0$ et la droite $\\mathcal{D}$ de représentation paramétrique $\\begin{cases} x = 2 + t \\\\ y = t \\\\ z = 1 + 2t \\end{cases}$, $t \\in \\mathbb{R}$.<br>Déterminer les coordonnées du point d'intersection de $\\mathcal{D}$ et $\\mathcal{P}$.`,
      corrige: `On substitue les expressions de $x, y, z$ dans l'équation du plan : $(2 + t) + 2t - (1 + 2t) - 4 = 0$, soit $-3 + t = 0$, d'où $t = 3$.<br>` +
        `En reportant : $x = 2 + 3 = 5$, $y = 3$, $z = 1 + 2 \\times 3 = 7$. Le point d'intersection est $I(5\\,;\\,3\\,;\\,7)$.`,
      rappel: `<strong>Intersection droite-plan.</strong> On substitue les expressions paramétriques de la droite dans l'équation cartésienne du plan, ce qui donne une équation en $t$ dont la solution fournit le paramètre du point d'intersection.`
    };
  },

  rev_annales_esp_projete: (d) => {
    return {
      enonce: `Dans un repère orthonormé, on considère le point $M(2\\,;\\,1\\,;\\,0)$ et le plan $\\mathcal{P} : x + y + z - 6 = 0$.<br>Déterminer les coordonnées du projeté orthogonal $H$ de $M$ sur $\\mathcal{P}$.`,
      corrige: `Le vecteur $\\vec{n}(1\\,;\\,1\\,;\\,1)$ est normal à $\\mathcal{P}$. La droite $(MH)$ passe par $M$ et est dirigée par $\\vec{n}$ : $\\begin{cases} x = 2 + t \\\\ y = 1 + t \\\\ z = t \\end{cases}$.<br>` +
        `$H \\in \\mathcal{P} \\iff (2 + t) + (1 + t) + t - 6 = 0 \\iff 3t = 3 \\iff t = 1$.<br>` +
        `Donc $H(3\\,;\\,2\\,;\\,1)$.`,
      rappel: `<strong>Projeté orthogonal sur un plan.</strong> Soit $\\vec{n}$ un vecteur normal au plan $\\mathcal{P}$. Le projeté orthogonal $H$ de $M$ sur $\\mathcal{P}$ est l'intersection de $\\mathcal{P}$ et de la droite passant par $M$ et dirigée par $\\vec{n}$.`
    };
  },

  rev_annales_esp_pos_droites: (d) => {
    return {
      enonce: `Dans un repère orthonormé, on considère les deux droites :<br>` +
        `$\\mathcal{D}_1 : \\begin{cases} x = 1 + t \\\\ y = t \\\\ z = 1 \\end{cases}$ et $\\mathcal{D}_2 : \\begin{cases} x = 2 + s \\\\ y = 1 + s \\\\ z = 2 \\end{cases}$, $t, s \\in \\mathbb{R}$.<br>` +
        `Déterminer la position relative de $\\mathcal{D}_1$ et $\\mathcal{D}_2$.`,
      corrige: `Les vecteurs directeurs sont $\\vec{u_1}(1\\,;\\,1\\,;\\,0)$ et $\\vec{u_2}(1\\,;\\,1\\,;\\,0)$ : ils sont égaux donc colinéaires, les droites sont <strong>parallèles</strong>.<br>` +
        `Vérifions si $A(1\\,;\\,0\\,;\\,1) \\in \\mathcal{D}_1$ appartient à $\\mathcal{D}_2$ : il faudrait $1 = 2 + s$, $0 = 1 + s$, soit $s = -1$ (cohérent pour $x, y$), mais $z = 2 \\neq 1$. Donc $A \\notin \\mathcal{D}_2$.<br>` +
        `Conclusion : $\\mathcal{D}_1$ et $\\mathcal{D}_2$ sont <strong>strictement parallèles</strong>.`,
      rappel: `<strong>Position relative de deux droites.</strong> (1) Vecteurs directeurs colinéaires → parallèles : confondues si elles ont un point commun, strictement parallèles sinon. (2) Vecteurs directeurs non colinéaires → sécantes si un point commun, non coplanaires sinon.`
    };
  },

  rev_annales_esp_sphere: (d) => {
    const I = [rand(-2, 2), rand(-2, 2), rand(-2, 2)];
    const triplets = [[1, 2, 2], [2, 1, 2], [2, 2, 1], [2, 3, 6], [3, 6, 2], [6, 2, 3], [1, 4, 8]];
    const [dx, dy, dz] = pick(triplets);
    const r = Math.sqrt(dx * dx + dy * dy + dz * dz);
    const sx = pick([-1, 1]), sy = pick([-1, 1]), sz = pick([-1, 1]);
    const A = [I[0] + sx * dx, I[1] + sy * dy, I[2] + sz * dz];
    const carre = (A[0] - I[0]) * (A[0] - I[0]) + (A[1] - I[1]) * (A[1] - I[1]) + (A[2] - I[2]) * (A[2] - I[2]);
    return {
      enonce: `Dans un repère orthonormé, on considère la sphère $\\mathcal{S}$ de centre $I(${I[0]}\\,;\\,${I[1]}\\,;\\,${I[2]})$ et de rayon $${r}$, ainsi que le point $A(${A[0]}\\,;\\,${A[1]}\\,;\\,${A[2]})$.<br>Le point $A$ appartient-il à $\\mathcal{S}$ ?`,
      corrige: `On calcule $IA^{2} = (${A[0]} - ${par(I[0])})^{2} + (${A[1]} - ${par(I[1])})^{2} + (${A[2]} - ${par(I[2])})^{2} = ${dx * dx} + ${dy * dy} + ${dz * dz} = ${carre}$.<br>` +
        `Donc $IA = \\sqrt{${carre}} = ${r}$, ce qui est exactement le rayon de $\\mathcal{S}$. Conclusion : <strong>$A \\in \\mathcal{S}$</strong>.`,
      rappel: `<strong>Sphère.</strong> La sphère de centre $I$ et de rayon $r$ est l'ensemble des points $M$ tels que $IM = r$. On compare $IA$ (ou $IA^{2}$ pour éviter la racine) au rayon $r$ (ou $r^{2}$).`
    };
  },

  rev_annales_py_somme: (d) => {
    const n = rand(3, 7);
    const total = Array.from({ length: n }, (_, i) => (i + 1) * (i + 1)).reduce((a, b) => a + b, 0);
    return {
      enonce: `On considère la fonction Python suivante :<br>` +
        `<pre>def somme(n):\n    s = 0\n    for k in range(1, n + 1):\n        s = s + k * k\n    return s</pre>` +
        `Que renvoie l'appel <code>somme(${n})</code> ? Justifier.`,
      corrige: `La boucle parcourt $k$ de $1$ à $${n}$ inclus, et accumule $k^{2}$ dans $s$. L'appel renvoie donc $\\displaystyle\\sum_{k=1}^{${n}} k^{2} = 1 + 4 + 9 ${n >= 4 ? '+ \\ldots + ' + n * n : ''} = ${total}$.`,
      rappel: `<strong>Accumulateur avec boucle <code>for</code>.</strong> <code>for k in range(a, b)</code> parcourt $k$ de $a$ à $b - 1$ inclus. La variable <code>s</code> accumule progressivement les contributions de chaque itération.`
    };
  },

  rev_annales_py_dicho: (d) => {
    return {
      enonce: `On considère la fonction Python ci-dessous, où <code>f</code> est définie par $f(x) = x^{2} - 2$ :<br>` +
        `<pre>def dicho():\n    a = 0\n    b = 2\n    while b - a > 0.1:\n        m = (a + b) / 2\n        if f(a) * f(m) < 0:\n            b = m\n        else:\n            a = m\n    return (a + b) / 2</pre>` +
        `Expliquer ce que renvoie cette fonction et préciser la précision obtenue sur le résultat.`,
      corrige: `L'algorithme cherche par dichotomie la racine positive de $f$ sur $[0\\,;\\,2]$ (c'est-à-dire $\\sqrt{2}$, puisque $f(\\sqrt{2}) = 0$). À chaque itération, on découpe l'intervalle en deux et on garde la moitié où $f$ change de signe (condition $f(a) \\times f(m) < 0$). La boucle s'arrête lorsque $b - a \\leqslant 0{,}1$, et la fonction renvoie le centre $\\frac{a+b}{2}$ qui est donc une <strong>valeur approchée de $\\sqrt{2}$ à $0{,}05$ près</strong>.`,
      rappel: `<strong>Dichotomie.</strong> Pour $f$ continue sur $[a, b]$ avec $f(a) \\times f(b) < 0$, on coupe en deux à chaque étape et on garde la moitié contenant la racine. La précision est divisée par 2 à chaque tour de boucle.`
    };
  },

  rev_annales_py_completer: (d) => {
    return {
      enonce: `On considère la suite définie par $u_0 = 100$ et $u_{n+1} = 1{,}05 \\times u_n$ (croissance de $5\\,\\%$ par étape).<br>` +
        `Compléter la fonction Python ci-dessous qui renvoie le plus petit entier $n$ tel que $u_n > 200$ :<br>` +
        `<pre>def seuil():\n    u = ____   # (trou 1)\n    n = 0\n    while u <= ____:   # (trou 2)\n        u = ____ * u   # (trou 3)\n        n = n + 1\n    return n</pre>`,
      corrige: `<strong>Trou 1 :</strong> <code>100</code> (valeur initiale $u_0$).<br>` +
        `<strong>Trou 2 :</strong> <code>200</code> (la boucle continue tant que $u_n \\leqslant 200$, et s'arrête dès que $u_n > 200$).<br>` +
        `<strong>Trou 3 :</strong> <code>1.05</code> (coefficient multiplicateur correspondant à $+5\\,\\%$).`,
      rappel: `<strong>Recherche de seuil.</strong> On initialise la variable avec $u_0$ ; la boucle <code>while</code> continue tant que la condition de seuil n'est pas atteinte. Le compteur $n$ donne le rang du premier terme qui dépasse le seuil.`
    };
  },

  rev_annales_lec_variation_fprime: (d) => {
    const xMin = rand(-4, -2);
    const xMax = rand(2, 4);
    const xCrit = rand(xMin + 1, xMax - 1);
    return {
      enonce: `Sur l'intervalle $[${xMin}\\,;\\,${xMax}]$, on observe que la courbe de $f'$ est strictement <em>au-dessus</em> de l'axe des abscisses sur $[${xMin}\\,;\\,${xCrit}[$ et strictement <em>en-dessous</em> sur $]${xCrit}\\,;\\,${xMax}]$.<br>En déduire les variations de $f$ et préciser la nature du point d'abscisse $${xCrit}$.`,
      corrige: `Sur $[${xMin}\\,;\\,${xCrit}[$ : $f' > 0$, donc $f$ est <strong>strictement croissante</strong>.<br>` +
        `Sur $]${xCrit}\\,;\\,${xMax}]$ : $f' < 0$, donc $f$ est <strong>strictement décroissante</strong>.<br>` +
        `En $x = ${xCrit}$, $f'$ s'annule en changeant de signe (de $+$ à $-$) : c'est un <strong>maximum local</strong> de $f$.`,
      rappel: `<strong>Signe de $f'$ et variations.</strong> $f' > 0$ sur un intervalle $\\iff f$ y est strictement croissante. Un changement de signe de $f'$ donne un extremum local : maximum si $f'$ passe de $+$ à $-$, minimum sinon.`
    };
  },

  rev_annales_lec_signe_fss: (d) => {
    const a = rand(-4, -2);
    const b = rand(2, 4);
    const xI = rand(a + 1, b - 1);
    return {
      enonce: `Sur l'intervalle $[${a}\\,;\\,${b}]$, la courbe de $f$ a sa concavité tournée vers le bas sur $[${a}\\,;\\,${xI}]$ et vers le haut sur $[${xI}\\,;\\,${b}]$.<br>En déduire le signe de $f''$ sur $[${a}\\,;\\,${b}]$ et la nature du point d'abscisse $${xI}$.`,
      corrige: `Concavité vers le bas sur $[${a}\\,;\\,${xI}]$ : $f$ est <strong>concave</strong>, donc $f'' \\leqslant 0$ sur cet intervalle.<br>` +
        `Concavité vers le haut sur $[${xI}\\,;\\,${b}]$ : $f$ est <strong>convexe</strong>, donc $f'' \\geqslant 0$ sur cet intervalle.<br>` +
        `En $x = ${xI}$, $f''$ s'annule en changeant de signe : c'est un <strong>point d'inflexion</strong>.`,
      rappel: `<strong>Convexité et $f''$.</strong> $f$ convexe (concavité vers le haut) $\\iff f'' \\geqslant 0$. Un point d'inflexion correspond à un changement de signe de $f''$, donc à un changement de convexité.`
    };
  },

  rev_annales_proba_arbre_cond: (d) => {
    return {
      enonce: `Dans une population, $1\\,\\%$ des personnes sont atteintes d'une maladie. Un test détecte la maladie avec probabilité $0{,}95$ chez les malades, et donne un faux positif avec probabilité $0{,}02$ chez les non-malades.<br>` +
        `Une personne est testée positive. Quelle est la probabilité qu'elle soit réellement malade ?`,
      corrige: `Notons $M$ « la personne est malade » et $T$ « le test est positif ». Par la formule des probabilités totales :<br>` +
        `$P(T) = P(M) \\times P_M(T) + P(\\bar M) \\times P_{\\bar M}(T) = 0{,}01 \\times 0{,}95 + 0{,}99 \\times 0{,}02 = 0{,}0095 + 0{,}0198 = 0{,}0293$.<br>` +
        `Puis par la définition de la conditionnelle : $P_T(M) = \\dfrac{P(M \\cap T)}{P(T)} = \\dfrac{0{,}0095}{0{,}0293} \\approx 0{,}324$.<br>` +
        `Conclusion : environ <strong>$32{,}4\\,\\%$</strong> de chances d'être réellement malade en cas de test positif.`,
      rappel: `<strong>Inversion d'un conditionnement (Bayes).</strong> $P_T(M) = \\dfrac{P(M) \\times P_M(T)}{P(T)}$, où $P(T)$ s'obtient par la formule des probabilités totales sur la partition $(M, \\bar M)$.`
    };
  },

  rev_annales_proba_totales: (d) => {
    return {
      enonce: `Une enquête montre que $60\\,\\%$ des clients d'une chaîne s'approvisionnent au magasin $A$ et $40\\,\\%$ au magasin $B$. Parmi les clients du magasin $A$, $10\\,\\%$ se déclarent insatisfaits ; chez ceux de $B$, c'est $5\\,\\%$.<br>` +
        `Quelle est la probabilité qu'un client choisi au hasard soit insatisfait ?`,
      corrige: `Soient $A, B, I$ les événements correspondants. $(A, B)$ forme une partition de l'univers, donc par la formule des probabilités totales :<br>` +
        `$P(I) = P(A) \\times P_A(I) + P(B) \\times P_B(I) = 0{,}6 \\times 0{,}1 + 0{,}4 \\times 0{,}05 = 0{,}06 + 0{,}02 = 0{,}08$.<br>` +
        `Conclusion : <strong>$P(I) = 0{,}08$</strong> (soit $8\\,\\%$ de clients insatisfaits).`,
      rappel: `<strong>Formule des probabilités totales.</strong> Si $A_1, \\ldots, A_n$ partitionnent l'univers, pour tout événement $B$ : $P(B) = \\displaystyle\\sum_{i=1}^{n} P(A_i) \\times P_{A_i}(B)$.`
    };
  },

  rev_annales_proba_binom_calc: (d) => {
    return {
      enonce: `Soit $X$ une variable aléatoire suivant la loi binomiale $\\mathcal{B}(50\\,;\\,0{,}6)$. À la calculatrice, on obtient $P(X \\leqslant 32) \\approx 0{,}747$.<br>` +
        `En déduire $P(X \\geqslant 33)$.`,
      corrige: `L'événement $\\{X \\geqslant 33\\}$ est le complémentaire de $\\{X \\leqslant 32\\}$ (car $X$ est à valeurs entières) :<br>` +
        `$P(X \\geqslant 33) = 1 - P(X \\leqslant 32) \\approx 1 - 0{,}747 = \\mathbf{0{,}253}$.`,
      rappel: `<strong>Passage du cumul inverse au seuil.</strong> Pour une va à valeurs entières : $P(X \\geqslant k + 1) = 1 - P(X \\leqslant k)$. Bien décaler de 1 entre l'inégalité large et son complémentaire.`
    };
  },

  rev_annales_proba_esp_va: (d) => {
    const variantes = [
      { x: [-1, 0, 2, 4], p: [0.2, 0.3, 0.3, 0.2] },
      { x: [-2, 0, 3, 5], p: [0.1, 0.3, 0.4, 0.2] },
      { x: [0, 1, 2, 5], p: [0.4, 0.2, 0.2, 0.2] }
    ];
    const v = pick(variantes);
    const E = v.x.reduce((s, xi, i) => s + xi * v.p[i], 0);
    const detailExpr = v.x.map((xi, i) => `${par(xi)} \\times ${dec(v.p[i])}`).join(' + ');
    return {
      enonce: `Une variable aléatoire $X$ a pour loi de probabilité :<br>` +
        `<table style="border-collapse: collapse; margin: 0.5em 0;">` +
        `<tr><td style="border: 1px solid #888; padding: 4px 12px;">$x_i$</td>${v.x.map(x => `<td style="border: 1px solid #888; padding: 4px 12px; text-align: center;">$${x}$</td>`).join('')}</tr>` +
        `<tr><td style="border: 1px solid #888; padding: 4px 12px;">$P(X = x_i)$</td>${v.p.map(p => `<td style="border: 1px solid #888; padding: 4px 12px; text-align: center;">$${dec(p)}$</td>`).join('')}</tr>` +
        `</table>` +
        `Calculer $E(X)$.`,
      corrige: `$E(X) = \\sum_{i} x_i \\times P(X = x_i) = ${detailExpr} = ${dec(Math.round(E * 100) / 100)}$.`,
      rappel: `<strong>Espérance d'une variable aléatoire discrète.</strong> $E(X) = \\displaystyle\\sum_{i} x_i \\times P(X = x_i)$. C'est la moyenne des valeurs possibles pondérée par leurs probabilités.`
    };
  },

  rev_annales_conc_tcheb: (d) => {
    return {
      enonce: `Soit $X$ une variable aléatoire d'espérance $E(X) = 10$ et de variance $V(X) = 4$.<br>` +
        `Majorer la probabilité $P(|X - 10| \\geqslant 3)$ à l'aide de l'inégalité de Bienaymé-Tchebychev.`,
      corrige: `L'inégalité de Bienaymé-Tchebychev s'écrit : pour tout $\\delta > 0$, $P(|X - E(X)| \\geqslant \\delta) \\leqslant \\dfrac{V(X)}{\\delta^{2}}$.<br>` +
        `Ici, avec $\\delta = 3$ : $P(|X - 10| \\geqslant 3) \\leqslant \\dfrac{4}{9} \\approx 0{,}444$.`,
      rappel: `<strong>Inégalité de Bienaymé-Tchebychev.</strong> Pour toute variable aléatoire $X$ d'espérance $\\mu$ et de variance $V(X)$, et pour tout $\\delta > 0$ :<br>$P(|X - \\mu| \\geqslant \\delta) \\leqslant \\dfrac{V(X)}{\\delta^{2}}$.<br>Cette inégalité borne la probabilité d'écart à la moyenne par un terme contrôlé par la variance.`
    };
  },

  rev_annales_conc_tcheb_moy: (d) => {
    const variantes = [
      { intro: `On lance $n$ fois, de façon indépendante, un dé équilibré à six faces.`, mu: `3{,}5`, Vstr: `\\dfrac{35}{12}`, Vnum: 35 / 12, Vdec: `\\dfrac{35}{12}` },
      { intro: `On répète $n$ fois, de façon indépendante, une épreuve de Bernoulli de paramètre $0{,}5$ (Pile = 1, Face = 0).`, mu: `0{,}5`, Vstr: `0{,}25`, Vnum: 0.25, Vdec: `0{,}25` },
      { intro: `On effectue $n$ tirages avec remise dans une urne, modélisés par des va indépendantes de même loi, d'espérance $5$ et de variance $4$.`, mu: `5`, Vstr: `4`, Vnum: 4, Vdec: `4` }
    ];
    const v = pick(variantes);
    const delta = pick([0.1, 0.2, 0.5]);
    const seuil = pick([0.05, 0.1]);
    // condition : V / (n δ²) ≤ seuil  ⇔  n ≥ V / (δ² × seuil)
    const nMin = Math.ceil(v.Vnum / (delta * delta * seuil));
    const denom = Math.round(delta * delta * seuil * 10000) / 10000;
    const approx = Math.round(v.Vnum / (delta * delta * seuil) * 100) / 100;
    return {
      enonce: `${v.intro} On note $M_n$ la moyenne empirique des $n$ résultats. On admet que l'espérance commune est $\\mu = ${v.mu}$ et que la variance commune est $\\sigma^{2} = ${v.Vstr}$.<br>` +
        reformule([
          `Déterminer une valeur de $n$ pour laquelle, à l'aide de l'inégalité de concentration, $P\\left(|M_n - ${v.mu}| \\geqslant ${dec(delta)}\\right) \\leqslant ${dec(seuil)}$.`,
          `À partir de quelle valeur de $n$ peut-on garantir, via l'inégalité de concentration, que $P\\left(|M_n - ${v.mu}| \\geqslant ${dec(delta)}\\right) \\leqslant ${dec(seuil)}$ ?`
        ]),
      corrige: `Comme $M_n$ a pour espérance $\\mu$ et pour variance $\\dfrac{\\sigma^{2}}{n}$, l'inégalité de Bienaymé-Tchebychev appliquée à $M_n$ donne l'<strong>inégalité de concentration</strong> :<br>` +
        `$P\\left(|M_n - \\mu| \\geqslant \\delta\\right) \\leqslant \\dfrac{\\sigma^{2}}{n\\,\\delta^{2}}$.<br>` +
        `Il suffit donc que $\\dfrac{\\sigma^{2}}{n\\,\\delta^{2}} \\leqslant ${dec(seuil)}$, soit $n \\geqslant \\dfrac{\\sigma^{2}}{\\delta^{2} \\times ${dec(seuil)}} = \\dfrac{${v.Vdec}}{${dec(denom)}} \\approx ${dec(approx)}$.<br>` +
        `Donc $n = ${nMin}$ convient.`,
      rappel: `<strong>Inégalité de concentration.</strong> Pour la moyenne empirique $M_n = \\dfrac{X_1 + \\ldots + X_n}{n}$ de $n$ variables indépendantes de même loi, d'espérance $\\mu$ et de variance $\\sigma^{2}$ :<br>$P\\left(|M_n - \\mu| \\geqslant \\delta\\right) \\leqslant \\dfrac{\\sigma^{2}}{n\\,\\delta^{2}}$.<br>C'est Bienaymé-Tchebychev appliquée à $M_n$ (qui a pour variance $\\sigma^{2}/n$). Quand $n \\to +\\infty$, la borne tend vers $0$ : c'est ce qui prouve la loi des grands nombres.`
    };
  },

  rev_annales_conc_lgn: (d) => {
    return {
      enonce: `On lance $n$ fois un dé équilibré à 6 faces, et on note $X_1, X_2, \\ldots, X_n$ les résultats successifs. On pose $M_n = \\dfrac{X_1 + X_2 + \\ldots + X_n}{n}$ (moyenne empirique des résultats).<br>` +
        `Vers quelle valeur converge $M_n$ quand $n \\to +\\infty$ ? Justifier en citant un théorème.`,
      corrige: `Les variables $X_i$ sont indépendantes, de même loi (uniforme sur $\\{1, 2, 3, 4, 5, 6\\}$). Leur espérance commune est $E(X_i) = \\dfrac{1 + 2 + 3 + 4 + 5 + 6}{6} = \\dfrac{21}{6} = 3{,}5$.<br>` +
        `D'après la <strong>loi des grands nombres</strong>, $M_n$ converge en probabilité vers $E(X_i) = 3{,}5$ quand $n \\to +\\infty$.`,
      rappel: `<strong>Loi des grands nombres (loi faible).</strong> Soient $X_1, \\ldots, X_n$ indépendantes de même loi, d'espérance $\\mu$ et de variance finie. La moyenne empirique $M_n = \\dfrac{X_1 + \\ldots + X_n}{n}$ converge en probabilité vers $\\mu$ : pour tout $\\delta > 0$, $P(|M_n - \\mu| \\geqslant \\delta) \\to 0$.`
    };
  },

  rev_annales_qcm_solution_ed: (d) => {
    const variantes = [
      { ed: `y' = -y + 3`, ok: `f(x) = e^{-x} + 3`, faux1: `f(x) = e^{x} + 3`, faux2: `f(x) = 3\\,e^{-x}`, faux3: `f(x) = -e^{-x} + 3` },
      { ed: `y' = -2y + 4`, ok: `f(x) = e^{-2x} + 2`, faux1: `f(x) = e^{2x} + 2`, faux2: `f(x) = 2\\,e^{-2x}`, faux3: `f(x) = -2x + 2` },
      { ed: `y' = y - 5`, ok: `f(x) = 2\\,e^{x} + 5`, faux1: `f(x) = 2\\,e^{-x} + 5`, faux2: `f(x) = 5\\,e^{x}`, faux3: `f(x) = e^{x} - 5` }
    ];
    const v = pick(variantes);
    const props = [
      { t: `$${v.ok}$`, ok: true },
      { t: `$${v.faux1}$`, ok: false },
      { t: `$${v.faux2}$`, ok: false },
      { t: `$${v.faux3}$`, ok: false }
    ];
    const Q = qcm(props);
    return {
      enonce: `On considère l'équation différentielle $(E) : ${v.ed}$. Parmi les fonctions suivantes, laquelle est solution de $(E)$ ?${Q.html}`,
      corrige: `Réponse <strong>${Q.bonne}</strong>. La solution générale de $y' = ay + b$ s'écrit $y(x) = K\\,e^{ax} - \\dfrac{b}{a}$. On peut vérifier la bonne réponse en dérivant et en remplaçant dans l'équation.`,
      rappel: `<strong>Résoudre $y' = ay + b$ ($a \\neq 0$).</strong> Solutions : $y(x) = K\\,e^{ax} - \\dfrac{b}{a}$, $K \\in \\mathbb{R}$. Le terme $-\\frac{b}{a}$ est la solution constante (point fixe).`
    };
  },

  rev_annales_vf_ipp_resultat: (d) => {
    return {
      enonce: `<strong>Affirmation.</strong> $\\displaystyle\\int_{0}^{1} x\\,e^{x}\\,dx = 1$.<br>Vraie ou fausse ? Justifier en utilisant une intégration par parties.`,
      corrige: `<strong>VRAIE.</strong> On pose $u(x) = x$ et $v'(x) = e^{x}$, d'où $u'(x) = 1$ et $v(x) = e^{x}$.<br>` +
        `Par intégration par parties : $\\displaystyle\\int_{0}^{1} x\\,e^{x}\\,dx = \\big[x\\,e^{x}\\big]_{0}^{1} - \\int_{0}^{1} e^{x}\\,dx = e - \\big[e^{x}\\big]_{0}^{1} = e - (e - 1) = 1$.`,
      rappel: `<strong>Intégration par parties.</strong> $\\displaystyle\\int_{a}^{b} u(x)\\,v'(x)\\,dx = \\big[u(x)\\,v(x)\\big]_{a}^{b} - \\int_{a}^{b} u'(x)\\,v(x)\\,dx$. On choisit $u$ tel que $u'$ se simplifie (souvent un polynôme).`
    };
  },

  rev_annales_ed_verif_solution: (d) => {
    const variantes = [
      {
        ED: `y' = 2y`,
        fStr: `f(x) = 3\\,e^{2x}`,
        fpStr: `f'(x) = 6\\,e^{2x}`,
        secondMembre: `2\\,f(x) = 2 \\times 3\\,e^{2x} = 6\\,e^{2x}`,
        ccl: `$f'(x) = 2\\,f(x)$, donc $f$ est bien solution de $(E)$.`
      },
      {
        ED: `y' = -y`,
        fStr: `f(x) = 4\\,e^{-x}`,
        fpStr: `f'(x) = -4\\,e^{-x}`,
        secondMembre: `-f(x) = -4\\,e^{-x}`,
        ccl: `$f'(x) = -f(x)$, donc $f$ est bien solution de $(E)$.`
      },
      {
        ED: `y' = y - 5`,
        fStr: `f(x) = 2\\,e^{x} + 5`,
        fpStr: `f'(x) = 2\\,e^{x}`,
        secondMembre: `f(x) - 5 = (2\\,e^{x} + 5) - 5 = 2\\,e^{x}`,
        ccl: `$f'(x) = f(x) - 5$, donc $f$ est bien solution de $(E)$.`
      },
      {
        ED: `y' = -3y + 3`,
        fStr: `f(x) = 2\\,e^{-3x} + 1`,
        fpStr: `f'(x) = -6\\,e^{-3x}`,
        secondMembre: `-3\\,f(x) + 3 = -3(2\\,e^{-3x} + 1) + 3 = -6\\,e^{-3x} - 3 + 3 = -6\\,e^{-3x}`,
        ccl: `$f'(x) = -3\\,f(x) + 3$, donc $f$ est bien solution de $(E)$.`
      }
    ];
    const v = pick(variantes);
    return {
      enonce: `On considère l'équation différentielle $(E) : ${v.ED}$ et la fonction $f$ définie sur $\\mathbb{R}$ par $${v.fStr}$.<br>` +
        reformule([
          `Démontrer que $f$ est solution de l'équation différentielle $(E)$.`,
          `Vérifier que la fonction $f$ est solution de $(E)$.`
        ]),
      corrige: `On calcule la dérivée : $${v.fpStr}$.<br>` +
        `Puis on évalue le second membre en remplaçant $y$ par $f(x)$ : $${v.secondMembre}$.<br>` +
        `Conclusion : ${v.ccl}`,
      rappel: `<strong>Vérifier qu'une fonction est solution d'une ED.</strong> Calculer $f'(x)$, puis évaluer le second membre en remplaçant $y$ par $f(x)$. Si les deux quantités sont égales pour tout $x$, $f$ est solution.`
    };
  },

  rev_annales_ed_resoudre_homogene: (d) => {
    const variantes = [
      { a: 2, y0: 3, sol: `f(x) = 3\\,e^{2x}` },
      { a: -1, y0: 5, sol: `f(x) = 5\\,e^{-x}` },
      { a: 3, y0: 1, sol: `f(x) = e^{3x}` },
      { a: -2, y0: 4, sol: `f(x) = 4\\,e^{-2x}` },
      { a: 0.5, y0: 2, sol: `f(x) = 2\\,e^{0{,}5x}`, aStr: `\\dfrac{1}{2}`, aTxt: '0{,}5' }
    ];
    const v = pick(variantes);
    const aMembre = v.a === 1 ? 'y' : (v.a === -1 ? '-y' : `${v.aStr || v.a}\\,y`);
    const aExp = v.aTxt || v.a;
    return {
      enonce: `Résoudre l'équation différentielle $y' = ${aMembre}$ avec la condition initiale $f(0) = ${v.y0}$.`,
      corrige: `Les solutions générales de $y' = ${aMembre}$ sont les fonctions de la forme $y(x) = K\\,e^{${aExp}x}$, avec $K \\in \\mathbb{R}$.<br>` +
        `La condition initiale donne $y(0) = K = ${v.y0}$.<br>` +
        `Solution unique : $${v.sol}$.`,
      rappel: `<strong>ED homogène $y' = ay$.</strong> Solutions : $y(x) = K\\,e^{ax}$ ($K \\in \\mathbb{R}$). La condition initiale $y(0) = y_0$ détermine $K = y_0$.`
    };
  },

  rev_annales_ed_resoudre_complete: (d) => {
    const variantes = [
      { a: -1, b: 5, y0: 1, yFixe: 5, K: -4, sol: `f(x) = -4\\,e^{-x} + 5`, edAff: `y' = -y + 5` },
      { a: -2, b: 6, y0: 0, yFixe: 3, K: -3, sol: `f(x) = -3\\,e^{-2x} + 3`, edAff: `y' = -2y + 6` },
      { a: 1, b: -3, y0: 4, yFixe: 3, K: 1, sol: `f(x) = e^{x} + 3`, edAff: `y' = y - 3` },
      { a: -1, b: 2, y0: 5, yFixe: 2, K: 3, sol: `f(x) = 3\\,e^{-x} + 2`, edAff: `y' = -y + 2` }
    ];
    const v = pick(variantes);
    return {
      enonce: `Résoudre l'équation différentielle $(E) : ${v.edAff}$ avec la condition initiale $f(0) = ${v.y0}$.`,
      corrige: `<strong>Solution particulière constante :</strong> on cherche $y_p$ tel que $0 = ${v.a}\\,y_p ${v.b > 0 ? '+ ' + v.b : '- ' + (-v.b)}$, soit $y_p = ${v.yFixe}$.<br>` +
        `<strong>Solutions générales :</strong> $y(x) = K\\,e^{${v.a}x} + ${v.yFixe}$, avec $K \\in \\mathbb{R}$.<br>` +
        `<strong>Condition initiale :</strong> $y(0) = K + ${v.yFixe} = ${v.y0}$, donc $K = ${v.K}$.<br>` +
        `<strong>Solution unique :</strong> $${v.sol}$.`,
      rappel: `<strong>ED $y' = ay + b$ ($a \\neq 0$).</strong> Solutions : $y(x) = K\\,e^{ax} - \\dfrac{b}{a}$, $K \\in \\mathbb{R}$. La méthode : (1) trouver la solution particulière constante $y_p = -\\frac{b}{a}$ ; (2) ajouter la solution générale de l'homogène $K\\,e^{ax}$ ; (3) déterminer $K$ par la condition initiale.`
    };
  },

  rev_annales_int_primitive_directe: (d) => {
    const variantes = [
      {
        enonce: `Calculer $\\displaystyle\\int_{0}^{1} (3x^{2} + 2x - 1)\\,dx$.`,
        corrige: `Une primitive de $3x^{2} + 2x - 1$ est $F(x) = x^{3} + x^{2} - x$.<br>` +
          `$\\displaystyle\\int_{0}^{1} (3x^{2} + 2x - 1)\\,dx = F(1) - F(0) = (1 + 1 - 1) - 0 = 1$.`
      },
      {
        enonce: `Calculer $\\displaystyle\\int_{0}^{2} e^{x}\\,dx$.`,
        corrige: `Une primitive de $e^{x}$ est $e^{x}$.<br>` +
          `$\\displaystyle\\int_{0}^{2} e^{x}\\,dx = \\big[e^{x}\\big]_{0}^{2} = e^{2} - 1$.`
      },
      {
        enonce: `Calculer $\\displaystyle\\int_{1}^{e} \\dfrac{1}{x}\\,dx$.`,
        corrige: `Une primitive de $\\dfrac{1}{x}$ sur $]0\\,;\\,+\\infty[$ est $\\ln(x)$.<br>` +
          `$\\displaystyle\\int_{1}^{e} \\dfrac{1}{x}\\,dx = \\big[\\ln(x)\\big]_{1}^{e} = \\ln(e) - \\ln(1) = 1$.`
      },
      {
        enonce: `Calculer $\\displaystyle\\int_{0}^{1} e^{-2x}\\,dx$.`,
        corrige: `Une primitive de $e^{-2x}$ est $-\\dfrac{1}{2}e^{-2x}$.<br>` +
          `$\\displaystyle\\int_{0}^{1} e^{-2x}\\,dx = \\left[-\\dfrac{1}{2}e^{-2x}\\right]_{0}^{1} = -\\dfrac{1}{2}e^{-2} + \\dfrac{1}{2} = \\dfrac{1 - e^{-2}}{2}$.`
      }
    ];
    const v = pick(variantes);
    return {
      enonce: v.enonce,
      corrige: v.corrige,
      rappel: `<strong>Calcul d'intégrale par primitive.</strong> Si $F$ est une primitive de $f$ sur $[a, b]$, alors $\\displaystyle\\int_{a}^{b} f(x)\\,dx = F(b) - F(a)$. Primitives usuelles : $x^{n} \\to \\frac{x^{n+1}}{n+1}$ ; $e^{ax} \\to \\frac{1}{a}e^{ax}$ ; $\\frac{1}{x} \\to \\ln|x|$.`
    };
  },

  rev_annales_int_ipp: (d) => {
    const variantes = [
      {
        enonce: `Calculer, à l'aide d'une intégration par parties, $\\displaystyle\\int_{0}^{1} x\\,e^{x}\\,dx$.`,
        corrige: `On pose $u(x) = x$ et $v'(x) = e^{x}$, d'où $u'(x) = 1$ et $v(x) = e^{x}$.<br>` +
          `Par IPP : $\\displaystyle\\int_{0}^{1} x\\,e^{x}\\,dx = \\big[x\\,e^{x}\\big]_{0}^{1} - \\int_{0}^{1} e^{x}\\,dx = e - \\big[e^{x}\\big]_{0}^{1} = e - (e - 1) = 1$.`
      },
      {
        enonce: `Calculer, à l'aide d'une intégration par parties, $\\displaystyle\\int_{1}^{e} x\\,\\ln(x)\\,dx$.`,
        corrige: `On pose $u(x) = \\ln(x)$ et $v'(x) = x$, d'où $u'(x) = \\dfrac{1}{x}$ et $v(x) = \\dfrac{x^{2}}{2}$.<br>` +
          `Par IPP : $\\displaystyle\\int_{1}^{e} x\\,\\ln(x)\\,dx = \\left[\\dfrac{x^{2}}{2}\\,\\ln(x)\\right]_{1}^{e} - \\int_{1}^{e} \\dfrac{x^{2}}{2} \\cdot \\dfrac{1}{x}\\,dx = \\dfrac{e^{2}}{2} - \\dfrac{1}{2}\\int_{1}^{e} x\\,dx$.<br>` +
          `$= \\dfrac{e^{2}}{2} - \\dfrac{1}{2}\\left[\\dfrac{x^{2}}{2}\\right]_{1}^{e} = \\dfrac{e^{2}}{2} - \\dfrac{1}{2}\\left(\\dfrac{e^{2}}{2} - \\dfrac{1}{2}\\right) = \\dfrac{e^{2} + 1}{4}$.`
      },
      {
        enonce: `Calculer, à l'aide d'une intégration par parties, $\\displaystyle\\int_{0}^{1} x\\,e^{-x}\\,dx$.`,
        corrige: `On pose $u(x) = x$ et $v'(x) = e^{-x}$, d'où $u'(x) = 1$ et $v(x) = -e^{-x}$.<br>` +
          `Par IPP : $\\displaystyle\\int_{0}^{1} x\\,e^{-x}\\,dx = \\big[-x\\,e^{-x}\\big]_{0}^{1} + \\int_{0}^{1} e^{-x}\\,dx = -e^{-1} + \\big[-e^{-x}\\big]_{0}^{1} = -e^{-1} + (1 - e^{-1}) = 1 - 2\\,e^{-1} = \\dfrac{e - 2}{e}$.`
      }
    ];
    const v = pick(variantes);
    return {
      enonce: v.enonce,
      corrige: v.corrige,
      rappel: `<strong>Intégration par parties.</strong> $\\displaystyle\\int_{a}^{b} u(x)\\,v'(x)\\,dx = \\big[u\\,v\\big]_{a}^{b} - \\int_{a}^{b} u'(x)\\,v(x)\\,dx$. Stratégie : choisir $u$ tel que $u'$ se simplifie (polynôme à dériver ; $\\ln$ à dériver ; exp/sin/cos à intégrer).`
    };
  },

  rev_annales_int_aire: (d) => {
    const variantes = [
      {
        enonce: `Dans un repère orthonormé d'unité 1 cm, on considère la fonction $f$ définie sur $[0\\,;\\,2]$ par $f(x) = x^{2} + 1$. Calculer, en cm², l'aire du domaine délimité par la courbe $\\mathcal{C}_{f}$, l'axe des abscisses, et les droites d'équations $x = 0$ et $x = 2$.`,
        corrige: `Pour $x \\in [0\\,;\\,2]$, $f(x) > 0$, donc l'aire vaut :<br>` +
          `$\\mathcal{A} = \\displaystyle\\int_{0}^{2} (x^{2} + 1)\\,dx = \\left[\\dfrac{x^{3}}{3} + x\\right]_{0}^{2} = \\dfrac{8}{3} + 2 = \\dfrac{14}{3}$ cm² $\\approx 4{,}67$ cm².`
      },
      {
        enonce: `Dans un repère orthonormé, on considère $f(x) = x + 2$ et $g(x) = x^{2}$ sur $[0\\,;\\,2]$. Calculer l'aire du domaine compris entre les courbes $\\mathcal{C}_{f}$ et $\\mathcal{C}_{g}$, entre $x = 0$ et $x = 2$.`,
        corrige: `Sur $[0\\,;\\,2]$, $f(x) - g(x) = -x^{2} + x + 2 = -(x - 2)(x + 1) \\geqslant 0$, donc $\\mathcal{C}_{f}$ est au-dessus de $\\mathcal{C}_{g}$.<br>` +
          `Aire : $\\displaystyle\\int_{0}^{2} (f(x) - g(x))\\,dx = \\int_{0}^{2} (-x^{2} + x + 2)\\,dx = \\left[-\\dfrac{x^{3}}{3} + \\dfrac{x^{2}}{2} + 2x\\right]_{0}^{2} = -\\dfrac{8}{3} + 2 + 4 = \\dfrac{10}{3}$ u.a.`
      },
      {
        enonce: `On considère la fonction $f(x) = \\ln(x)$ sur $[1\\,;\\,e]$. Calculer l'aire du domaine délimité par $\\mathcal{C}_{f}$, l'axe des abscisses et la droite $x = e$.`,
        corrige: `Pour $x \\in [1\\,;\\,e]$, $\\ln(x) \\geqslant 0$. L'aire vaut $\\displaystyle\\int_{1}^{e} \\ln(x)\\,dx$.<br>` +
          `Par IPP avec $u(x) = \\ln(x)$, $v'(x) = 1$ : $u'(x) = \\dfrac{1}{x}$, $v(x) = x$.<br>` +
          `$\\displaystyle\\int_{1}^{e} \\ln(x)\\,dx = \\big[x\\,\\ln(x)\\big]_{1}^{e} - \\int_{1}^{e} 1\\,dx = e - (e - 1) = 1$ u.a.`
      }
    ];
    const v = pick(variantes);
    return {
      enonce: v.enonce,
      corrige: v.corrige,
      rappel: `<strong>Aire sous/entre courbes.</strong> Si $f \\geqslant 0$ sur $[a,b]$ : aire = $\\int_{a}^{b} f(x)\\,dx$. Si $f \\geqslant g$ : aire entre les courbes = $\\int_{a}^{b} (f - g)\\,dx$. L'unité d'aire est celle du repère.`
    };
  },

  rev_annales_int_valeur_moyenne: (d) => {
    const variantes = [
      {
        enonce: `On considère la fonction $f$ définie sur $[0\\,;\\,4]$ par $f(x) = e^{-x}$. Calculer la valeur moyenne de $f$ sur $[0\\,;\\,4]$.`,
        corrige: `La valeur moyenne est $\\mu = \\dfrac{1}{4 - 0}\\displaystyle\\int_{0}^{4} e^{-x}\\,dx = \\dfrac{1}{4}\\big[-e^{-x}\\big]_{0}^{4} = \\dfrac{1}{4}(1 - e^{-4}) = \\dfrac{1 - e^{-4}}{4} \\approx 0{,}245$.`
      },
      {
        enonce: `Soit $f$ définie sur $[1\\,;\\,3]$ par $f(x) = \\dfrac{1}{x}$. Calculer la valeur moyenne de $f$ sur $[1\\,;\\,3]$.`,
        corrige: `$\\mu = \\dfrac{1}{3 - 1}\\displaystyle\\int_{1}^{3} \\dfrac{1}{x}\\,dx = \\dfrac{1}{2}\\big[\\ln(x)\\big]_{1}^{3} = \\dfrac{\\ln(3)}{2} \\approx 0{,}549$.`
      },
      {
        enonce: `Soit $f$ définie sur $[0\\,;\\,2]$ par $f(x) = 3x^{2} - 2x + 1$. Calculer la valeur moyenne de $f$ sur $[0\\,;\\,2]$.`,
        corrige: `$\\mu = \\dfrac{1}{2}\\displaystyle\\int_{0}^{2} (3x^{2} - 2x + 1)\\,dx = \\dfrac{1}{2}\\big[x^{3} - x^{2} + x\\big]_{0}^{2} = \\dfrac{1}{2}(8 - 4 + 2) = 3$.`
      }
    ];
    const v = pick(variantes);
    return {
      enonce: v.enonce,
      corrige: v.corrige,
      rappel: `<strong>Valeur moyenne d'une fonction sur $[a, b]$.</strong> $\\mu = \\dfrac{1}{b - a}\\displaystyle\\int_{a}^{b} f(x)\\,dx$. Géométriquement : hauteur du rectangle de base $[a, b]$ ayant la même aire que sous $\\mathcal{C}_{f}$.`
    };
  },

  rev_annales_tvi_etude_complete: (d) => {
    const variantes = [
      {
        f: `f(x) = x^{3} + x - 3`,
        domaine: `\\mathbb{R}`,
        a: 1, b: 2,
        fa: `f(1) = 1 + 1 - 3 = -1`,
        fb: `f(2) = 8 + 2 - 3 = 7`,
        fp: `f'(x) = 3x^{2} + 1`,
        fpSigne: `$f'(x) > 0$ pour tout $x \\in \\mathbb{R}$`,
        alpha_approx: `1{,}21`
      },
      {
        f: `f(x) = e^{x} + x - 4`,
        domaine: `\\mathbb{R}`,
        a: 0, b: 2,
        fa: `f(0) = 1 + 0 - 4 = -3`,
        fb: `f(2) = e^{2} + 2 - 4 = e^{2} - 2 \\approx 5{,}39`,
        fp: `f'(x) = e^{x} + 1`,
        fpSigne: `$f'(x) > 0$ pour tout $x \\in \\mathbb{R}$`,
        alpha_approx: `1{,}07`
      },
      {
        f: `f(x) = x + \\ln(x) - 2`,
        domaine: `]0\\,;\\,+\\infty[`,
        a: 1, b: 2,
        fa: `f(1) = 1 + \\ln(1) - 2 = -1`,
        fb: `f(2) = 2 + \\ln(2) - 2 = \\ln(2) \\approx 0{,}69`,
        fp: `f'(x) = 1 + \\dfrac{1}{x}`,
        fpSigne: `$f'(x) > 0$ pour tout $x > 0$`,
        alpha_approx: `1{,}56`
      }
    ];
    const v = pick(variantes);
    return {
      enonce: `On considère la fonction $f$ définie sur $${v.domaine}$ par $${v.f}$.<br>` +
        reformule([
          `Démontrer que l'équation $f(x) = 0$ admet une unique solution $\\alpha$ sur $[${v.a}\\,;\\,${v.b}]$, puis donner une valeur approchée de $\\alpha$ à $10^{-2}$ près.`,
          `Montrer qu'il existe un unique réel $\\alpha \\in [${v.a}\\,;\\,${v.b}]$ tel que $f(\\alpha) = 0$, et encadrer $\\alpha$ à $10^{-2}$ près.`
        ]),
      corrige: `<strong>Variations :</strong> on calcule $${v.fp}$, et ${v.fpSigne}. Donc $f$ est strictement croissante sur son domaine.<br>` +
        `<strong>Application du TVI :</strong> $f$ est continue (somme de fonctions continues) et strictement croissante sur $[${v.a}\\,;\\,${v.b}]$. De plus :<br>` +
        `$${v.fa} < 0$ et $${v.fb} > 0$.<br>` +
        `Par le théorème de la bijection (corollaire du TVI), l'équation $f(x) = 0$ admet une unique solution $\\alpha$ dans $[${v.a}\\,;\\,${v.b}]$.<br>` +
        `<strong>Encadrement :</strong> par balayage à la calculatrice, $\\alpha \\approx ${v.alpha_approx}$.`,
      rappel: `<strong>TVI / théorème de la bijection.</strong> Si $f$ est continue et strictement monotone sur $[a, b]$, et si $k$ est compris entre $f(a)$ et $f(b)$, alors l'équation $f(x) = k$ admet une <em>unique</em> solution dans $[a, b]$. Pour encadrer $\\alpha$ : balayage ou dichotomie à la calculatrice.`
    };
  },

  rev_espace_volume: (d) => {
    // tétraèdre dont 3 arêtes issues d'un sommet sont portées par les axes : volume = |det|/6
    const a = rand(1, 4), b = rand(1, 4), c = rand(1, 4);
    // sommet O, et A(a,0,0), B(0,b,0), C(0,0,c) : V = (1/3)*(aire base triangle dans plan)*hauteur = abc/6
    const vol6 = a * b * c;
    const g = pgcdGlobal(vol6, 6);
    const volAff = (vol6 % 6 === 0) ? `${vol6 / 6}` : `\\dfrac{${vol6 / g}}{${6 / g}}`;
    const enonce = `Dans un repère orthonormé, on considère le tétraèdre $OABC$ avec $O(0\\,;\\,0\\,;\\,0)$, $A(${a}\\,;\\,0\\,;\\,0)$, $B(0\\,;\\,${b}\\,;\\,0)$ et $C(0\\,;\\,0\\,;\\,${c})$.<br>` +
      reformule([
        `Calculer le volume du tétraèdre $OABC$.`,
        `Déterminer le volume du tétraèdre $OABC$ en unités de volume.`
      ]);
    const corrige = `Le triangle $OAB$, base du tétraèdre, est rectangle en $O$ : son aire vaut $\\dfrac{${a} \\times ${b}}{2} = ${dec(a * b / 2)}$.<br>` +
      `La hauteur issue de $C$ est $OC = ${c}$ (axe $z$).<br>` +
      `$V = \\dfrac{1}{3} \\times \\text{aire base} \\times \\text{hauteur} = \\dfrac{1}{3} \\times ${dec(a * b / 2)} \\times ${c} = ${volAff}$ u.v.`;
    const rappel = `<strong>Volume d'un tétraèdre.</strong> $V = \\dfrac{1}{3} \\times \\mathcal{A}_{\\text{base}} \\times h$, où $h$ est la hauteur relative à la base choisie. On choisit comme base un triangle dont on sait calculer l'aire (souvent un triangle rectangle).`;
    return { enonce, corrige, rappel };
  },

  rev_espace_projete: (d) => {
    const type = pick(['sur_plan', 'sur_droite']);
    if (type === 'sur_plan') {
      const n = [randNonZero(1, 3), randNonZero(-3, 3), randNonZero(1, 3)];
      const A = [rand(-2, 2), rand(-2, 2), rand(-2, 2)];
      const dd = randNonZero(-4, 4);
      const enonce = `Soit le plan $\\mathcal{P}$ d'équation $${coefVar(n[0], 'x', true)}${coefVar(n[1], 'y', false)}${coefVar(n[2], 'z', false)} ${signe(dd)} = 0$ et le point $A\\,(${A[0]}\\,;\\,${A[1]}\\,;\\,${A[2]})$.<br>Décrire la méthode pour déterminer le projeté orthogonal $H$ de $A$ sur $\\mathcal{P}$.`;
      const corrige = `1) $\\vec{n}\\,(${n[0]}\\,;\\,${n[1]}\\,;\\,${n[2]})$ est normal à $\\mathcal{P}$ : on écrit la droite $(d)$ passant par $A$ de vecteur directeur $\\vec{n}$ (représentation paramétrique).<br>` +
        `2) On cherche le point d'intersection de $(d)$ et de $\\mathcal{P}$ en injectant les coordonnées paramétrées dans l'équation du plan, ce qui donne la valeur du paramètre $t$.<br>` +
        `3) Ce point d'intersection est $H$, le projeté orthogonal cherché.`;
      const rappel = `<strong>Projeté orthogonal sur un plan.</strong> $H$ est l'intersection de $\\mathcal{P}$ avec la droite passant par $A$ et dirigée par un vecteur normal $\\vec{n}$ de $\\mathcal{P}$. La distance $AH$ est alors la distance de $A$ à $\\mathcal{P}$.`;
      return { enonce, corrige, rappel };
    }
    // projeté sur une droite
    const A = [rand(-2, 2), rand(-2, 2), rand(-2, 2)];
    const P = [rand(-2, 2), rand(-2, 2), rand(-2, 2)];
    const u = [randNonZero(-3, 3), randNonZero(-3, 3), randNonZero(-3, 3)];
    const enonce = `Soit la droite $(d)$ passant par $P\\,(${P[0]}\\,;\\,${P[1]}\\,;\\,${P[2]})$ de vecteur directeur $\\vec{u}\\,(${u[0]}\\,;\\,${u[1]}\\,;\\,${u[2]})$, et le point $A\\,(${A[0]}\\,;\\,${A[1]}\\,;\\,${A[2]})$.<br>Décrire la méthode pour déterminer le projeté orthogonal $H$ de $A$ sur $(d)$.`;
    const corrige = `On écrit $H$ comme point courant de $(d)$ : $H = P + t\\,\\vec{u}$, de coordonnées $(${P[0]} ${signe(u[0])}t\\,;\\,${P[1]} ${signe(u[1])}t\\,;\\,${P[2]} ${signe(u[2])}t)$.<br>` +
      `$H$ est le projeté orthogonal si $\\overrightarrow{AH} \\cdot \\vec{u} = 0$. On résout cette équation en $t$, puis on remplace pour obtenir $H$.`;
    const rappel = `<strong>Projeté orthogonal sur une droite.</strong> $H$ appartient à $(d)$ (donc $H = P + t\\vec{u}$) et vérifie $\\overrightarrow{AH} \\perp \\vec{u}$, soit $\\overrightarrow{AH} \\cdot \\vec{u} = 0$. C'est le point de $(d)$ le plus proche de $A$.`;
    return { enonce, corrige, rappel };
  },

  rev_espace_position_droites: (d) => {
    const cas = pick(['paralleles', 'sécantes', 'non_coplanaires']);
    const P = [rand(-2, 2), rand(-2, 2), rand(-2, 2)];
    const u = [randNonZero(1, 3), randNonZero(1, 3), randNonZero(-2, 2)];
    let v, concl, Q;
    if (cas === 'paralleles') {
      const k = rand(2, 3);
      v = [u[0] * k, u[1] * k, u[2] * k];
      Q = [P[0] + 1, P[1], P[2]]; // décalée → strictement parallèles
      concl = `$\\vec{v} = ${k}\\,\\vec{u}$ : les vecteurs directeurs sont colinéaires. Comme les droites sont distinctes, elles sont <strong>strictement parallèles</strong>.`;
    } else if (cas === 'sécantes') {
      v = [randNonZero(1, 3), randNonZero(-3, 3), randNonZero(1, 3)];
      while (v[0] * u[1] - v[1] * u[0] === 0 && v[0] * u[2] - v[2] * u[0] === 0) v = [randNonZero(1, 3), randNonZero(-3, 3), randNonZero(1, 3)];
      Q = [P[0] + v[0], P[1] + v[1], P[2] + v[2]]; // partage le point P+v... en fait on force un point commun
      Q = P.slice(); // même point de passage → sécantes (concourantes en P)
      Q = [P[0], P[1], P[2]];
      concl = `Les vecteurs directeurs $\\vec{u}$ et $\\vec{v}$ ne sont pas colinéaires, et les droites ont un point commun : elles sont <strong>sécantes</strong>.`;
    } else {
      v = [randNonZero(1, 3), randNonZero(-3, 3), randNonZero(1, 3)];
      while (v[0] * u[1] - v[1] * u[0] === 0) v = [randNonZero(1, 3), randNonZero(-3, 3), randNonZero(1, 3)];
      Q = [P[0] + 3, P[1] - 2, P[2] + 4]; // décalée et non concourante → non coplanaires
      concl = `Les vecteurs directeurs ne sont pas colinéaires (donc non parallèles), et le système d'intersection n'a pas de solution : les droites sont <strong>non coplanaires</strong>.`;
    }
    const enonce = `On donne deux droites : $(d_1)$ passant par $P\\,(${P[0]}\\,;\\,${P[1]}\\,;\\,${P[2]})$ de vecteur directeur $\\vec{u}\\,(${u[0]}\\,;\\,${u[1]}\\,;\\,${u[2]})$, et $(d_2)$ passant par $Q\\,(${Q[0]}\\,;\\,${Q[1]}\\,;\\,${Q[2]})$ de vecteur directeur $\\vec{v}\\,(${v[0]}\\,;\\,${v[1]}\\,;\\,${v[2]})$.<br>Quelle est la position relative de $(d_1)$ et $(d_2)$ ? Justifier la démarche.`;
    const corrige = concl + `<br><em>Méthode :</em> on compare d'abord les vecteurs directeurs (colinéaires ou non), puis on cherche un éventuel point d'intersection en résolvant le système.`;
    const rappel = `<strong>Position relative de deux droites dans l'espace.</strong> (1) Directeurs colinéaires → parallèles (confondues si un point commun, strictement parallèles sinon). (2) Directeurs non colinéaires → sécantes si un point commun, <em>non coplanaires</em> sinon.`;
    return { enonce, corrige, rappel };
  },

  rev_espace_intersection: (d) => {
    const n = [randNonZero(1, 3), randNonZero(-3, 3), randNonZero(1, 3)];
    const dd = randNonZero(-4, 4);
    const P = [rand(-2, 2), rand(-2, 2), rand(-2, 2)];
    const u = [randNonZero(-3, 3), randNonZero(-3, 3), randNonZero(-3, 3)];
    const ps = n[0] * u[0] + n[1] * u[1] + n[2] * u[2];
    const enonce = `Soit le plan $\\mathcal{P} : ${coefVar(n[0], 'x', true)}${coefVar(n[1], 'y', false)}${coefVar(n[2], 'z', false)} ${signe(dd)} = 0$ et la droite $(d)$ passant par $P\\,(${P[0]}\\,;\\,${P[1]}\\,;\\,${P[2]})$ de vecteur directeur $\\vec{u}\\,(${u[0]}\\,;\\,${u[1]}\\,;\\,${u[2]})$.<br>` +
      reformule([
        `La droite $(d)$ et le plan $\\mathcal{P}$ sont-ils sécants ? Décrire la méthode pour trouver leur intersection.`,
        `Étudier la position de $(d)$ par rapport à $\\mathcal{P}$ et expliquer comment trouver le point d'intersection s'il existe.`
      ]);
    let corrige;
    if (ps !== 0) {
      corrige = `$\\vec{n} \\cdot \\vec{u} = ${n[0]}\\times${par(u[0])} + ${n[1]}\\times${par(u[1])} + ${n[2]}\\times${par(u[2])} = ${ps} \\neq 0$ : la droite n'est pas parallèle au plan, ils sont <strong>sécants</strong> en un point.<br>` +
        `<em>Méthode :</em> on écrit la représentation paramétrique de $(d)$, on injecte $x(t), y(t), z(t)$ dans l'équation de $\\mathcal{P}$, on résout en $t$, puis on remplace pour obtenir le point d'intersection.`;
    } else {
      corrige = `$\\vec{n} \\cdot \\vec{u} = ${ps} = 0$ : la droite est parallèle au plan. Elle est soit <strong>incluse</strong> dans $\\mathcal{P}$ (si $P \\in \\mathcal{P}$), soit <strong>strictement parallèle</strong> (sinon). On teste en remplaçant les coordonnées de $P$ dans l'équation de $\\mathcal{P}$.`;
    }
    const rappel = `<strong>Intersection droite-plan.</strong> Si $\\vec{n} \\cdot \\vec{u} \\neq 0$ ($\\vec{n}$ normal au plan, $\\vec{u}$ directeur de la droite), il y a un unique point d'intersection : on substitue la paramétrisation de la droite dans l'équation du plan. Sinon la droite est parallèle au plan.`;
    return { enonce, corrige, rappel };
  },

  rev_espace_plans: (d) => {
    const cas = pick(['perpendiculaires', 'paralleles', 'quelconques']);
    const n1 = [randNonZero(1, 3), randNonZero(-3, 3), randNonZero(1, 3)];
    let n2, concl;
    if (cas === 'perpendiculaires') {
      // n2 orthogonal à n1 : produit vectoriel avec un vecteur quelconque
      const w = [randNonZero(1, 3), randNonZero(-2, 2), randNonZero(1, 3)];
      n2 = prodVect(n1, w);
      if (n2[0] === 0 && n2[1] === 0 && n2[2] === 0) n2 = [n1[1], -n1[0], 0];
      concl = `$\\vec{n_1} \\cdot \\vec{n_2} = 0$ : les vecteurs normaux sont orthogonaux, donc les plans sont <strong>perpendiculaires</strong>.`;
    } else if (cas === 'paralleles') {
      const k = rand(2, 3);
      n2 = [n1[0] * k, n1[1] * k, n1[2] * k];
      concl = `$\\vec{n_2} = ${k}\\,\\vec{n_1}$ : les vecteurs normaux sont colinéaires, donc les plans sont <strong>parallèles</strong>.`;
    } else {
      n2 = [n1[0] + 1, n1[1] + 1, n1[2] - 1];
      const ps = n1[0] * n2[0] + n1[1] * n2[1] + n1[2] * n2[2];
      concl = `$\\vec{n_1} \\cdot \\vec{n_2} = ${ps} \\neq 0$ et les normaux ne sont pas colinéaires : les plans sont <strong>sécants mais non perpendiculaires</strong>.`;
    }
    const ps = n1[0] * n2[0] + n1[1] * n2[1] + n1[2] * n2[2];
    const enonce = `Deux plans ont pour vecteurs normaux respectifs $\\vec{n_1}\\,(${n1[0]}\\,;\\,${n1[1]}\\,;\\,${n1[2]})$ et $\\vec{n_2}\\,(${n2[0]}\\,;\\,${n2[1]}\\,;\\,${n2[2]})$.<br>Préciser leur position relative (parallèles, perpendiculaires, ou sécants quelconques).`;
    const corrige = `$\\vec{n_1} \\cdot \\vec{n_2} = ${n1[0]}\\times${par(n2[0])} + ${n1[1]}\\times${par(n2[1])} + ${n1[2]}\\times${par(n2[2])} = ${ps}$.<br>${concl}`;
    const rappel = `<strong>Position relative de deux plans.</strong> On compare leurs vecteurs normaux : colinéaires → plans parallèles ; produit scalaire nul → plans perpendiculaires ; sinon → plans sécants quelconques.`;
    return { enonce, corrige, rappel };
  },

  rev_espace_sphere: (d) => {
    const C = [rand(-2, 2), rand(-2, 2), rand(-2, 2)];
    const r = rand(2, 5);
    // point sur la sphère : C + (r,0,0) si on veut, mais on teste un point quelconque
    const M = [C[0] + rand(-3, 3), C[1] + rand(-3, 3), C[2] + rand(-3, 3)];
    const dist2 = (M[0] - C[0]) ** 2 + (M[1] - C[1]) ** 2 + (M[2] - C[2]) ** 2;
    const surSphere = (dist2 === r * r);
    const enonce = `Soit la sphère $\\mathcal{S}$ de centre $C\\,(${C[0]}\\,;\\,${C[1]}\\,;\\,${C[2]})$ et de rayon $${r}$. Le point $M\\,(${M[0]}\\,;\\,${M[1]}\\,;\\,${M[2]})$ appartient-il à $\\mathcal{S}$ ?`;
    const corrige = `On calcule $CM^2 = ${par(M[0] - C[0])}^2 + ${par(M[1] - C[1])}^2 + ${par(M[2] - C[2])}^2 = ${dist2}$.<br>` +
      `Or $r^2 = ${r * r}$. ` + (surSphere ? `Comme $CM^2 = r^2$, le point $M$ <strong>appartient</strong> à $\\mathcal{S}$.` : `Comme $CM^2 = ${dist2} \\neq ${r * r} = r^2$, le point $M$ <strong>n'appartient pas</strong> à $\\mathcal{S}$.`);
    const rappel = `<strong>Sphère.</strong> $M \\in \\mathcal{S}(C\\,;\\,r) \\iff CM = r \\iff CM^2 = r^2$. On compare le carré de la distance au carré du rayon pour éviter les racines.`;
    return { enonce, corrige, rappel };
  },

  rev_conc_esp_var: (d) => {
    // petite loi à 3 valeurs avec probabilités fractionnaires sur 10
    const vals = [rand(-2, 1), rand(2, 4), rand(5, 7)];
    let p = [rand(2, 4), rand(2, 4), 0]; p[2] = 10 - p[0] - p[1];
    while (p[2] <= 0) { p = [rand(2, 4), rand(2, 4), 0]; p[2] = 10 - p[0] - p[1]; }
    const E = (vals[0] * p[0] + vals[1] * p[1] + vals[2] * p[2]) / 10;
    const EX2 = (vals[0] ** 2 * p[0] + vals[1] ** 2 * p[1] + vals[2] ** 2 * p[2]) / 10;
    const V = Math.round((EX2 - E * E) * 1000) / 1000;
    const enonce = `Une variable aléatoire $X$ prend les valeurs $${vals[0]}$, $${vals[1]}$, $${vals[2]}$ avec les probabilités respectives $\\dfrac{${p[0]}}{10}$, $\\dfrac{${p[1]}}{10}$, $\\dfrac{${p[2]}}{10}$.<br>` +
      reformule([
        `Calculer l'espérance $E(X)$ et la variance $V(X)$.`,
        `Déterminer $E(X)$ puis $V(X)$.`
      ]);
    const corrige = `$E(X) = ${vals[0]}\\times\\frac{${p[0]}}{10} + ${vals[1]}\\times\\frac{${p[1]}}{10} + ${vals[2]}\\times\\frac{${p[2]}}{10} = ${dec(E)}$.<br>` +
      `$V(X) = E(X^2) - E(X)^2$, avec $E(X^2) = ${vals[0]}^2\\times\\frac{${p[0]}}{10} + ${vals[1]}^2\\times\\frac{${p[1]}}{10} + ${vals[2]}^2\\times\\frac{${p[2]}}{10} = ${dec(Math.round(EX2 * 1000) / 1000)}$.<br>` +
      `Donc $V(X) = ${dec(Math.round(EX2 * 1000) / 1000)} - ${dec(Math.round(E * E * 1000) / 1000)} = ${dec(V)}$.`;
    const rappel = `<strong>Espérance et variance.</strong> $E(X) = \\sum x_i\\,P(X = x_i)$. $V(X) = E\\left((X - E(X))^2\\right) = E(X^2) - E(X)^2$ (formule de König-Huygens). Écart-type : $\\sigma(X) = \\sqrt{V(X)}$.`;
    return { enonce, corrige, rappel };
  },

  rev_conc_tchebychev: (d) => {
    const E = rand(5, 20);
    const V = rand(2, 9);
    const a = rand(2, 4);
    // P(|X - E| >= a) <= V / a^2
    const borne = V / (a * a);
    const g = pgcdGlobal(V, a * a);
    const borneAff = `\\dfrac{${V / g}}{${(a * a) / g}}`;
    const enonce = `Soit $X$ une variable aléatoire d'espérance $E(X) = ${E}$ et de variance $V(X) = ${V}$.<br>` +
      reformule([
        `À l'aide de l'inégalité de Bienaymé-Tchebychev, majorer $P\\left(|X - ${E}| \\geqslant ${a}\\right)$.`,
        `Majorer $P\\left(|X - E(X)| \\geqslant ${a}\\right)$ avec l'inégalité de Bienaymé-Tchebychev.`
      ]);
    const corrige = `L'inégalité de Bienaymé-Tchebychev donne $P\\left(|X - E(X)| \\geqslant a\\right) \\leqslant \\dfrac{V(X)}{a^2}$.<br>` +
      `Ici : $P\\left(|X - ${E}| \\geqslant ${a}\\right) \\leqslant \\dfrac{${V}}{${a}^2} = ${borneAff} \\approx ${dec(Math.round(borne * 1000) / 1000)}$.`;
    const rappel = `<strong>Inégalité de Bienaymé-Tchebychev.</strong> Pour tout réel $a > 0$ : $P\\left(|X - E(X)| \\geqslant a\\right) \\leqslant \\dfrac{V(X)}{a^2}$. Elle majore la probabilité de s'écarter de la moyenne, sans connaître la loi précise.`;
    return { enonce, corrige, rappel };
  },

  rev_conc_concentration: (d) => {
    const V = rand(2, 8);
    const n = pick([100, 400, 900, 1000]);
    const a = pick([0.1, 0.2, 0.5]);
    // P(|M_n - E| >= a) <= V / (n a^2)
    const borne = V / (n * a * a);
    const enonce = `On répète $${n}$ fois, de façon indépendante, une expérience modélisée par une variable aléatoire d'espérance $\\mu$ et de variance $V = ${V}$. On note $M_{${n}}$ la moyenne des $${n}$ résultats.<br>` +
      `Majorer $P\\left(\\left|M_{${n}} - \\mu\\right| \\geqslant ${dec(a)}\\right)$ à l'aide de l'inégalité de concentration.`;
    const corrige = `L'inégalité de concentration donne $P\\left(\\left|M_n - \\mu\\right| \\geqslant a\\right) \\leqslant \\dfrac{V}{n\\,a^2}$.<br>` +
      `Ici : $P\\left(\\left|M_{${n}} - \\mu\\right| \\geqslant ${dec(a)}\\right) \\leqslant \\dfrac{${V}}{${n} \\times ${dec(a)}^2} = \\dfrac{${V}}{${dec(n * a * a)}} \\approx ${dec(Math.round(borne * 10000) / 10000)}$.`;
    const rappel = `<strong>Inégalité de concentration.</strong> Si $M_n$ est la moyenne de $n$ variables indépendantes de même loi (espérance $\\mu$, variance $V$), alors $P\\left(|M_n - \\mu| \\geqslant a\\right) \\leqslant \\dfrac{V}{n\\,a^2}$. Quand $n \\to +\\infty$, cette borne tend vers $0$.`;
    return { enonce, corrige, rappel };
  },

  rev_conc_lgn: (d) => {
    const contextes = [
      { exp: `un dé équilibré à six faces`, mu: `3{,}5`, grandeur: `la moyenne des faces obtenues` },
      { exp: `une pièce équilibrée (Pile = 1, Face = 0)`, mu: `0{,}5`, grandeur: `la fréquence de Pile` },
      { exp: `une roue donnant un gain moyen de 2 €`, mu: `2`, grandeur: `le gain moyen` }
    ];
    const ctx = pick(contextes);
    const enonce = `On répète un grand nombre de fois, de façon indépendante, ${ctx.exp}.<br>` +
      `Que dit la loi des grands nombres sur ${ctx.grandeur} lorsque le nombre de répétitions devient très grand ?`;
    const corrige = `D'après la <strong>loi des grands nombres</strong>, quand le nombre $n$ de répétitions tend vers l'infini, ${ctx.grandeur} se rapproche (en probabilité) de l'espérance $\\mu = ${ctx.mu}$.<br>` +
      `Formellement, pour tout $a > 0$, $P\\left(|M_n - \\mu| \\geqslant a\\right) \\to 0$ quand $n \\to +\\infty$.`;
    const rappel = `<strong>Loi des grands nombres.</strong> La moyenne $M_n$ de $n$ variables indépendantes et de même loi converge (en probabilité) vers l'espérance commune $\\mu$ quand $n \\to +\\infty$. C'est une conséquence de l'inégalité de concentration.`;
    return { enonce, corrige, rappel };
  },

});
