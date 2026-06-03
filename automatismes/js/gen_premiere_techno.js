/* LaboMath — Générateurs 1re technologique
   36 générateurs, profils : 1re STMG + 1re STI2D
   Fichier généré automatiquement par refactor.py.
   Étend window.LM_GEN (l'objet global agrégeant tous les générateurs). */

Object.assign(window.LM_GEN ??= {}, {

  su_terme_fonc: (d) => {
    if (d === 1) {
      // Facile : u(n) = an + b, calculer u(n) pour un petit n
      const a = randNonZero(-5, 5);
      const b = randNonZero(-9, 9);
      const n = rand(2, 6);
      const u = a*n + b;
      const signB = b >= 0 ? '+' : '-';
      const absB = Math.abs(b);
      // Affichage propre du coefficient a
      const aAff = a === 1 ? '' : (a === -1 ? '-' : `${a}`);
      const aMul = a === 1 ? `${n}` : (a === -1 ? `-${n}` : `${a} \\times ${n}`);
      return {
        enonce: `Soit la suite $(u_n)$ définie par $u_n = ${aAff}n ${signB} ${absB}$. Calculer $u_{${n}}$.`,
        corrige: `$u_{${n}} = ${aMul} ${signB} ${absB} = ${a*n} ${signB} ${absB} = ${u}$.`
      };
    } else if (d === 2) {
      // Moyen : u(n) = an² + b ou (an+b)/c
      const variantes = [
        () => {
          const a = pick([2, 3, -2, -3]);
          const b = randNonZero(-5, 5);
          const n = rand(2, 5);
          const u = a*n*n + b;
          const signB = b >= 0 ? '+' : '-';
          const absB = Math.abs(b);
          return {
            enonce: `Soit la suite $(u_n)$ définie par $u_n = ${a}n^2 ${signB} ${absB}$. Calculer $u_{${n}}$.`,
            corrige: `$u_{${n}} = ${a} \\times ${n}^2 ${signB} ${absB} = ${a} \\times ${n*n} ${signB} ${absB} = ${a*n*n} ${signB} ${absB} = ${u}$.`
          };
        },
        () => {
          const a = randNonZero(2, 6);
          const b = randNonZero(-5, 5);
          const c = randNonZero(2, 4);
          const n = c;  // pour que ça tombe juste
          const num = a*n + b;
          const u = num / c;
          const signB = b >= 0 ? '+' : '-';
          const absB = Math.abs(b);
          const uAff = Number.isInteger(u) ? `${u}` : u.toFixed(2).replace('.', '{,}');
          return {
            enonce: `Soit la suite $(u_n)$ définie par $u_n = \\dfrac{${a}n ${signB} ${absB}}{${c}}$. Calculer $u_{${n}}$.`,
            corrige: `$u_{${n}} = \\dfrac{${a} \\times ${n} ${signB} ${absB}}{${c}} = \\dfrac{${num}}{${c}} = ${uAff}$.`
          };
        }
      ];
      return pick(variantes)();
    } else {
      // Difficile : calculer plusieurs termes ou chercher un rang
      const variantes = [
        () => {
          const a = randNonZero(-3, 3);
          const b = randNonZero(-5, 5);
          const n1 = pick([0, 1]);
          const n2 = pick([5, 10]);
          const u1 = a*n1 + b;
          const u2 = a*n2 + b;
          const signB = b >= 0 ? '+' : '-';
          const absB = Math.abs(b);
          return {
            enonce: `Soit $(u_n)$ définie par $u_n = ${a}n ${signB} ${absB}$. Calculer $u_{${n1}}$ et $u_{${n2}}$.`,
            corrige: `$u_{${n1}} = ${a} \\times ${n1} ${signB} ${absB} = ${u1}$ et $u_{${n2}} = ${a} \\times ${n2} ${signB} ${absB} = ${u2}$.`
          };
        },
        () => {
          // u_n = c - n, chercher le rang où u_n = 0
          const c = rand(5, 15);
          return {
            enonce: `Soit $(u_n)$ définie par $u_n = ${c} - n$. À partir de quel rang $n$ a-t-on $u_n < 0$ ?`,
            corrige: `$u_n < 0 \\Leftrightarrow ${c} - n < 0 \\Leftrightarrow n > ${c}$. Donc à partir du rang $n = ${c+1}$.`
          };
        }
      ];
      return pick(variantes)();
    }
  },

  su_terme_rec: (d) => {
    if (d === 1) {
      // Facile : u_{n+1} = u_n + c, c entier, calculer u_3 ou u_4
      const u0 = rand(1, 5);
      const c = randNonZero(-3, 3);
      const n = rand(2, 4);
      // u_0 = u0, u_1 = u0+c, u_2 = u0+2c, etc.
      let suite = [u0];
      for (let i = 1; i <= n; i++) suite.push(suite[i-1] + c);
      const signC = c >= 0 ? '+' : '-';
      const absC = Math.abs(c);
      let calc = '';
      for (let i = 1; i <= n; i++) {
        calc += `$u_${i} = u_${i-1} ${signC} ${absC} = ${suite[i-1]} ${signC} ${absC} = ${suite[i]}$. `;
      }
      return {
        enonce: `Soit la suite $(u_n)$ définie par $u_0 = ${u0}$ et $u_{n+1} = u_n ${signC} ${absC}$. Calculer $u_{${n}}$.`,
        corrige: calc
      };
    } else if (d === 2) {
      // Moyen : u_{n+1} = a*u_n + b
      const u0 = rand(1, 5);
      const a = pick([2, 3, -2]);
      const b = randNonZero(-5, 5);
      const n = 3;
      let suite = [u0];
      for (let i = 1; i <= n; i++) suite.push(a * suite[i-1] + b);
      const signB = b >= 0 ? '+' : '-';
      const absB = Math.abs(b);
      let calc = '';
      for (let i = 1; i <= n; i++) {
        const uPrev = suite[i-1];
        const uPrevAff = uPrev < 0 ? `(${uPrev})` : `${uPrev}`;
        calc += `$u_${i} = ${a} \\times u_${i-1} ${signB} ${absB} = ${a} \\times ${uPrevAff} ${signB} ${absB} = ${a*uPrev} ${signB} ${absB} = ${suite[i]}$. `;
      }
      return {
        enonce: `Soit la suite $(u_n)$ définie par $u_0 = ${u0}$ et $u_{n+1} = ${a}u_n ${signB} ${absB}$. Calculer $u_{${n}}$.`,
        corrige: calc
      };
    } else {
      // Difficile : suite quadratique u_{n+1} = u_n² - c ou similaire
      const variantes = [
        () => {
          const u0 = rand(2, 4);
          const c = rand(1, 3);
          let suite = [u0];
          for (let i = 1; i <= 3; i++) suite.push(suite[i-1]*suite[i-1] - c);
          let calc = '';
          for (let i = 1; i <= 3; i++) {
            calc += `$u_${i} = (u_${i-1})^2 - ${c} = ${suite[i-1]}^2 - ${c} = ${suite[i-1]*suite[i-1]} - ${c} = ${suite[i]}$. `;
          }
          return {
            enonce: `Soit la suite $(u_n)$ définie par $u_0 = ${u0}$ et $u_{n+1} = u_n^2 - ${c}$. Calculer $u_3$.`,
            corrige: calc
          };
        },
        () => {
          // u_{n+1} = (u_n + c) / 2 (moyenne)
          const u0 = rand(8, 20);
          const c = pick([4, 6, 8]);
          let suite = [u0];
          for (let i = 1; i <= 2; i++) suite.push((suite[i-1] + c) / 2);
          let calc = '';
          for (let i = 1; i <= 2; i++) {
            const u = suite[i];
            const uAff = Number.isInteger(u) ? `${u}` : u.toFixed(2).replace('.', '{,}');
            calc += `$u_${i} = \\dfrac{u_${i-1} + ${c}}{2} = \\dfrac{${suite[i-1]} + ${c}}{2} = \\dfrac{${suite[i-1]+c}}{2} = ${uAff}$. `;
          }
          return {
            enonce: `Soit la suite $(u_n)$ définie par $u_0 = ${u0}$ et $u_{n+1} = \\dfrac{u_n + ${c}}{2}$. Calculer $u_2$.`,
            corrige: calc
          };
        }
      ];
      return pick(variantes)();
    }
  },

  su_var_sens: (d) => {
    if (d === 1) {
      // Facile : 3 termes donnés, dire si croissante/décroissante
      const variantes = [
        () => {
          const r = randNonZero(1, 5);
          const u0 = rand(2, 10);
          const termes = [u0, u0+r, u0+2*r, u0+3*r];
          const sens = r > 0 ? 'croissante' : 'décroissante';
          return {
            enonce: `Les premiers termes d'une suite sont : $u_0 = ${termes[0]}$, $u_1 = ${termes[1]}$, $u_2 = ${termes[2]}$, $u_3 = ${termes[3]}$. La suite semble-t-elle croissante ou décroissante ?`,
            corrige: `Chaque terme est ${r > 0 ? 'plus grand' : 'plus petit'} que le précédent (on ajoute $${r}$). La suite semble **${sens}**.`
          };
        }
      ];
      return pick(variantes)();
    } else if (d === 2) {
      // Moyen : calculer u_{n+1} - u_n et conclure
      const u0 = rand(1, 5);
      const a = pick([2, 3, -2, -3]);
      const b = randNonZero(-3, 3);
      // u_n = an + b, u_{n+1} - u_n = a
      const signB = b >= 0 ? '+' : '-';
      const absB = Math.abs(b);
      const sens = a > 0 ? 'strictement croissante' : 'strictement décroissante';
      return {
        enonce: `Soit la suite $(u_n)$ définie par $u_n = ${a}n ${signB} ${absB}$. Étudier le sens de variation de $(u_n)$.`,
        corrige: `$u_{n+1} - u_n = (${a}(n+1) ${signB} ${absB}) - (${a}n ${signB} ${absB}) = ${a}$. Comme $u_{n+1} - u_n = ${a} ${a > 0 ? '> 0' : '< 0'}$, la suite est **${sens}**.`
      };
    } else {
      // Difficile : u_n = an² + b
      const variantes = [
        () => {
          const a = pick([1, 2, -1, -2]);
          const b = randNonZero(-3, 3);
          const signB = b >= 0 ? '+' : '-';
          const absB = Math.abs(b);
          const sens = a > 0 ? 'strictement croissante' : 'strictement décroissante';
          // Affichages propres selon le coefficient a
          const aAff = a === 1 ? '' : (a === -1 ? '-' : (a > 0 ? `${a}` : `${a}`));
          const signe = a > 0 ? 'positif' : 'négatif';
          // Pour la formule de différence : on parenthèse si a est négatif
          const termeNcarre = (a === 1) ? 'n^2' : (a === -1 ? '-n^2' : `${a}n^2`);
          const termeNplus1carre = (a === 1) ? '(n+1)^2' : (a === -1 ? '-(n+1)^2' : `${a}(n+1)^2`);
          const soustraction = a < 0 ? `(${termeNcarre})` : termeNcarre;
          return {
            enonce: `Soit la suite $(u_n)$ définie par $u_n = ${termeNcarre} ${signB} ${absB}$ pour $n \\geq 0$. Étudier son sens de variation.`,
            corrige: `$u_{n+1} - u_n = ${termeNplus1carre} - ${soustraction} = ${aAff}(n^2 + 2n + 1 - n^2) = ${aAff}(2n + 1)$. Pour $n \\geq 0$, on a $2n + 1 > 0$, donc $u_{n+1} - u_n$ est ${signe}. La suite est **${sens}**.`
          };
        }
      ];
      return pick(variantes)();
    }
  },

  su_repr_graph: (d) => {
    if (d === 1) {
      // Facile : suite arithmétique simple, représenter les premiers points
      const u0 = pick([0, 1, 2]);
      const r = pick([1, 2]);
      const termes = [u0, u0+r, u0+2*r, u0+3*r, u0+4*r];
      // Figure : nuage de points (n, u_n)
      const rep = creerRepere({ xMin: -0.5, xMax: 5, yMin: -1, yMax: 10 });
      let svg = rep.svg;
      for (let i = 0; i < 5; i++) {
        svg += `<circle cx="${rep.xPix(i)}" cy="${rep.yPix(termes[i])}" r="2.5" fill="${GRAPH_BLEU}"/>`;
      }
      svg += rep.fermer();
      return {
        enonce: `Le nuage de points ci-contre représente les premiers termes d'une suite $(u_n)$. Lire les valeurs de $u_0$, $u_1$ et $u_2$.`,
        svg: svg,
        corrige: `On lit graphiquement : $u_0 = ${termes[0]}$, $u_1 = ${termes[1]}$, $u_2 = ${termes[2]}$.`
      };
    } else if (d === 2) {
      // Moyen : suite donnée, placer les points
      const u0 = rand(1, 3);
      const r = pick([1, 2]);
      const termes = [u0, u0+r, u0+2*r, u0+3*r, u0+4*r];
      const rep = creerRepere({ xMin: -0.5, xMax: 5, yMin: -1, yMax: 12 });
      let svg = rep.svg;
      for (let i = 0; i < 5; i++) {
        svg += `<circle cx="${rep.xPix(i)}" cy="${rep.yPix(termes[i])}" r="2.5" fill="${GRAPH_BLEU}"/>`;
      }
      svg += rep.fermer();
      return {
        enonce: `Le graphique ci-contre représente une suite $(u_n)$. Conjecturer son sens de variation et estimer $u_4$.`,
        svg: svg,
        corrige: `Les points montent à mesure que $n$ augmente : la suite semble **croissante**. On lit $u_4 \\approx ${termes[4]}$.`
      };
    } else {
      // Difficile : suite décroissante ou non monotone
      const variantes = [
        () => {
          // Suite décroissante
          const u0 = rand(8, 10);
          const r = -pick([1, 2]);
          const termes = [u0, u0+r, u0+2*r, u0+3*r, u0+4*r];
          const rep = creerRepere({ xMin: -0.5, xMax: 5, yMin: -1, yMax: 11 });
          let svg = rep.svg;
          for (let i = 0; i < 5; i++) {
            svg += `<circle cx="${rep.xPix(i)}" cy="${rep.yPix(termes[i])}" r="2.5" fill="${GRAPH_BLEU}"/>`;
          }
          svg += rep.fermer();
          return {
            enonce: `Le graphique ci-contre représente une suite $(u_n)$. Décrire son comportement et estimer son sens de variation.`,
            svg: svg,
            corrige: `Les points descendent : la suite semble **décroissante**. La raison apparente est environ $${r}$.`
          };
        }
      ];
      return pick(variantes)();
    }
  },

  sa_reconnaitre: (d) => {
    if (d === 1) {
      // Facile : donner 4-5 termes, l'élève dit oui/non
      const variantes = [
        () => {
          const u0 = rand(1, 5);
          const r = randNonZero(2, 5);
          const termes = [u0, u0+r, u0+2*r, u0+3*r, u0+4*r];
          return {
            enonce: `Les premiers termes d'une suite sont : $${termes.join('\\,;\\,')}$. Cette suite est-elle arithmétique ? Si oui, donner sa raison.`,
            corrige: `On calcule les différences successives : $${termes[1]} - ${termes[0]} = ${r}$, $${termes[2]} - ${termes[1]} = ${r}$, $${termes[3]} - ${termes[2]} = ${r}$, $${termes[4]} - ${termes[3]} = ${r}$. La différence est constante, donc la suite est **arithmétique de raison $r = ${r}$**.`
          };
        },
        () => {
          const u0 = rand(2, 8);
          const r = randNonZero(2, 5);
          // Casser la régularité au 4e terme
          const termes = [u0, u0+r, u0+2*r, u0+3*r + 1, u0+4*r + 1];
          return {
            enonce: `Les premiers termes d'une suite sont : $${termes.join('\\,;\\,')}$. Cette suite est-elle arithmétique ?`,
            corrige: `$${termes[1]} - ${termes[0]} = ${r}$, $${termes[2]} - ${termes[1]} = ${r}$, mais $${termes[3]} - ${termes[2]} = ${termes[3]-termes[2]}$. La différence n'est **pas constante**, donc la suite n'est **pas arithmétique**.`
          };
        }
      ];
      return pick(variantes)();
    } else if (d === 2) {
      // Moyen : suite définie par une formule u_n = an + b, vérifier que (u_n) est arithmétique
      const a = randNonZero(-5, 5);
      const b = randNonZero(-9, 9);
      const signB = b >= 0 ? '+' : '-';
      const absB = Math.abs(b);
      // Parenthéser les coefficients négatifs pour éviter "- -2n"
      const aN = a < 0 ? `(${a}n)` : `${a}n`;
      const aNp1 = a < 0 ? `(${a}(n+1))` : `${a}(n+1)`;
      const aMul = a < 0 ? `(${a})` : `${a}`;
      return {
        enonce: `Soit $(u_n)$ définie par $u_n = ${a}n ${signB} ${absB}$. Montrer que cette suite est arithmétique et donner sa raison.`,
        corrige: `On calcule $u_{n+1} - u_n = \\bigl(${a}(n+1) ${signB} ${absB}\\bigr) - \\bigl(${a}n ${signB} ${absB}\\bigr)$. Après simplification : $u_{n+1} - u_n = ${aNp1} - ${aN} = ${aMul} \\times \\bigl((n+1) - n\\bigr) = ${aMul} \\times 1 = ${a}$. La différence est constante égale à $${a}$, donc la suite est **arithmétique de raison $r = ${a}$**.`
      };
    } else {
      // Difficile : suite définie par récurrence avec u_{n+1} = u_n + c, vérifier
      const variantes = [
        () => {
          const u0 = rand(2, 8);
          const c = randNonZero(-4, 4);
          const signC = c >= 0 ? '+' : '-';
          const absC = Math.abs(c);
          return {
            enonce: `Soit $(u_n)$ définie par $u_0 = ${u0}$ et $u_{n+1} = u_n ${signC} ${absC}$. Cette suite est-elle arithmétique ? Si oui, donner sa raison et son premier terme.`,
            corrige: `Par définition, $u_{n+1} - u_n = ${c}$ est constante, donc la suite est **arithmétique** de raison $r = ${c}$ et de premier terme $u_0 = ${u0}$.`
          };
        },
        () => {
          // Quotient de suite arithmétique (non arithmétique)
          const u0 = rand(2, 5);
          const r = randNonZero(2, 4);
          return {
            enonce: `On considère la suite $(v_n)$ définie par $v_n = n^2$. Cette suite est-elle arithmétique ?`,
            corrige: `$v_0 = 0$, $v_1 = 1$, $v_2 = 4$, $v_3 = 9$. Les différences sont $1 - 0 = 1$, $4 - 1 = 3$, $9 - 4 = 5$ : **pas constantes**. La suite n'est **pas arithmétique**.`
          };
        }
      ];
      return pick(variantes)();
    }
  },

  sa_raison: (d) => {
    if (d === 1) {
      // Facile : 2 termes consécutifs donnés, calculer r = u_{n+1} - u_n
      const u0 = rand(1, 10);
      const r = randNonZero(-5, 5);
      const u1 = u0 + r;
      return {
        enonce: `Une suite arithmétique $(u_n)$ vérifie $u_0 = ${u0}$ et $u_1 = ${u1}$. Calculer sa raison $r$.`,
        corrige: `$r = u_1 - u_0 = ${u1} - ${u0} = ${r}$.`
      };
    } else if (d === 2) {
      // Moyen : 2 termes non consécutifs donnés, calculer r
      const u0 = rand(1, 10);
      const r = randNonZero(-5, 5);
      const n = rand(3, 6);
      const un = u0 + n*r;
      return {
        enonce: `Une suite arithmétique $(u_n)$ vérifie $u_0 = ${u0}$ et $u_{${n}} = ${un}$. Calculer sa raison $r$.`,
        corrige: `Pour une suite arithmétique : $u_n = u_0 + n \\times r$. Donc $${un} = ${u0} + ${n}r$, soit $${n}r = ${un - u0}$, donc $r = \\dfrac{${un - u0}}{${n}} = ${r}$.`
      };
    } else {
      // Difficile : raison à partir de 2 termes quelconques u_p et u_q
      const u0 = rand(1, 5);
      const r = randNonZero(-3, 4);
      const p = rand(2, 4);
      const q = p + rand(2, 4);
      const up = u0 + p*r;
      const uq = u0 + q*r;
      return {
        enonce: `Une suite arithmétique $(u_n)$ vérifie $u_${p} = ${up}$ et $u_${q} = ${uq}$. Calculer sa raison $r$.`,
        corrige: `Pour une suite arithmétique : $u_q = u_p + (q-p) \\times r$. Donc $${uq} = ${up} + ${q-p}r$, soit $${q-p}r = ${uq - up}$, donc $r = \\dfrac{${uq - up}}{${q-p}} = ${r}$.`
      };
    }
  },

  sa_terme: (d) => {
    if (d === 1) {
      // Facile : u_n = u_0 + nr avec petits nombres
      const u0 = rand(1, 8);
      const r = randNonZero(2, 5);
      const n = rand(3, 6);
      const un = u0 + n*r;
      return {
        enonce: `Soit la suite arithmétique $(u_n)$ de premier terme $u_0 = ${u0}$ et de raison $r = ${r}$. Calculer $u_{${n}}$.`,
        corrige: `$u_n = u_0 + n \\times r$, donc $u_{${n}} = ${u0} + ${n} \\times ${r} = ${u0} + ${n*r} = ${un}$.`
      };
    } else if (d === 2) {
      // Moyen : raison négative ou n plus grand
      const u0 = rand(20, 50);
      const r = -rand(2, 5);
      const n = rand(8, 15);
      const un = u0 + n*r;
      // Affichage propre avec r négatif
      const nr = n*r;
      const signNR = nr >= 0 ? '+' : '-';
      const absNR = Math.abs(nr);
      return {
        enonce: `Soit la suite arithmétique $(u_n)$ de premier terme $u_0 = ${u0}$ et de raison $r = ${r}$. Calculer $u_{${n}}$.`,
        corrige: `$u_n = u_0 + n \\times r$, donc $u_{${n}} = ${u0} + ${n} \\times (${r}) = ${u0} ${signNR} ${absNR} = ${un}$.`
      };
    } else {
      // Difficile : trouver à partir de quel rang u_n dépasse un seuil
      const variantes = [
        () => {
          const u0 = rand(3, 10);
          const r = rand(2, 5);
          const seuil = u0 + rand(5, 10) * r;
          // u_0 + nr >= seuil → n >= (seuil - u_0) / r
          const n = Math.ceil((seuil - u0) / r);
          const quotient = (seuil - u0) / r;
          const quotAff = Number.isInteger(quotient) ? `${quotient}` : quotient.toFixed(2).replace('.', '{,}');
          const signe = Number.isInteger(quotient) ? '=' : '\\approx';
          return {
            enonce: `Soit $(u_n)$ arithmétique avec $u_0 = ${u0}$ et $r = ${r}$. À partir de quel rang $n$ a-t-on $u_n \\geq ${seuil}$ ?`,
            corrige: `$u_n = ${u0} + ${r}n \\geq ${seuil} \\Leftrightarrow ${r}n \\geq ${seuil - u0} \\Leftrightarrow n \\geq \\dfrac{${seuil - u0}}{${r}} ${signe} ${quotAff}$. Donc à partir du rang $n = ${n}$.`
          };
        },
        () => {
          // Suite financière : u_0 capital, r intérêts annuels (linéaires)
          const u0 = pick([1000, 2000, 5000]);
          const r = pick([50, 100, 200]);
          const n = rand(5, 15);
          const un = u0 + n*r;
          return {
            enonce: `Un capital initial de $${u0}$ € rapporte $${r}$ € d'intérêts simples chaque année. Quel sera le capital après $${n}$ ans ?`,
            corrige: `On modélise par une suite arithmétique : $u_0 = ${u0}$, raison $r = ${r}$. Après $${n}$ ans : $u_{${n}} = ${u0} + ${n} \\times ${r} = ${un}$ €.`
          };
        }
      ];
      return pick(variantes)();
    }
  },

  sa_sens: (d) => {
    if (d === 1) {
      // Facile : raison donnée, dire si croissante ou décroissante
      const u0 = rand(1, 10);
      const r = randNonZero(-5, 5);
      const sens = r > 0 ? 'strictement croissante' : 'strictement décroissante';
      return {
        enonce: `Soit la suite arithmétique $(u_n)$ de premier terme $u_0 = ${u0}$ et de raison $r = ${r}$. Étudier son sens de variation.`,
        corrige: `Pour une suite arithmétique : si $r > 0$ alors croissante, si $r < 0$ alors décroissante. Ici $r = ${r} ${r > 0 ? '> 0' : '< 0'}$, donc la suite est **${sens}**.`
      };
    } else if (d === 2) {
      // Moyen : 2 termes donnés, déterminer le sens
      const u0 = rand(5, 20);
      const r = randNonZero(-4, 4);
      const n = rand(3, 5);
      const un = u0 + n*r;
      const sens = r > 0 ? 'strictement croissante' : 'strictement décroissante';
      return {
        enonce: `Une suite arithmétique $(u_n)$ vérifie $u_0 = ${u0}$ et $u_${n} = ${un}$. Déterminer son sens de variation.`,
        corrige: `On calcule la raison : $r = \\dfrac{u_${n} - u_0}{${n}} = \\dfrac{${un - u0}}{${n}} = ${r}$. Comme $r ${r > 0 ? '> 0' : '< 0'}$, la suite est **${sens}**.`
      };
    } else {
      // Difficile : déterminer pour quelles valeurs de r la suite est croissante / décroissante / constante
      const variantes = [
        () => ({
          enonce: `Soit la suite arithmétique $(u_n)$ de raison $r$. Pour quelles valeurs de $r$ cette suite est-elle croissante ? décroissante ? constante ?`,
          corrige: `On rappelle que $u_{n+1} - u_n = r$. Donc : la suite est **strictement croissante** si $r > 0$, **strictement décroissante** si $r < 0$, et **constante** si $r = 0$.`
        }),
        () => {
          const u0 = rand(10, 30);
          const r = randNonZero(-3, 3);
          const n = rand(5, 10);
          const un = u0 + n*r;
          // Contexte : pop d'animaux qui décroît / croît
          const sens = r > 0 ? 'augmente' : 'diminue';
          return {
            enonce: `Une population suit une évolution arithmétique : $u_0 = ${u0}$ individus, $u_${n} = ${un}$ individus. Calculer la raison, et préciser si la population augmente ou diminue.`,
            corrige: `$r = \\dfrac{${un} - ${u0}}{${n}} = \\dfrac{${un - u0}}{${n}} = ${r}$. La raison est ${r > 0 ? 'positive' : 'négative'}, donc la population **${sens}** de $${Math.abs(r)}$ individus par an.`
          };
        }
      ];
      return pick(variantes)();
    }
  },

  sg_reconnaitre: (d) => {
    if (d === 1) {
      // Facile : 4-5 termes donnés, voir si rapport constant
      const variantes = [
        () => {
          const u0 = pick([1, 2, 3]);
          const q = pick([2, 3]);
          const termes = [u0, u0*q, u0*q*q, u0*q*q*q, u0*q*q*q*q];
          return {
            enonce: `Les premiers termes d'une suite sont : $${termes.join('\\,;\\,')}$. Cette suite est-elle géométrique ? Si oui, donner sa raison.`,
            corrige: `On calcule les quotients successifs : $\\dfrac{${termes[1]}}{${termes[0]}} = ${q}$, $\\dfrac{${termes[2]}}{${termes[1]}} = ${q}$, $\\dfrac{${termes[3]}}{${termes[2]}} = ${q}$, $\\dfrac{${termes[4]}}{${termes[3]}} = ${q}$. Le quotient est constant, donc la suite est **géométrique de raison $q = ${q}$**.`
          };
        },
        () => {
          // Une suite arithmétique faussement présentée comme géométrique
          const u0 = rand(2, 6);
          const r = randNonZero(2, 4);
          const termes = [u0, u0+r, u0+2*r, u0+3*r];
          return {
            enonce: `Les premiers termes d'une suite sont : $${termes.join('\\,;\\,')}$. Cette suite est-elle géométrique ?`,
            corrige: `On calcule les quotients : $\\dfrac{${termes[1]}}{${termes[0]}} = ${(termes[1]/termes[0]).toFixed(2).replace('.', '{,}')}$ et $\\dfrac{${termes[2]}}{${termes[1]}} = ${(termes[2]/termes[1]).toFixed(2).replace('.', '{,}')}$. Les quotients ne sont **pas constants**, donc la suite n'est **pas géométrique** (elle est en fait arithmétique de raison $${r}$).`
          };
        }
      ];
      return pick(variantes)();
    } else if (d === 2) {
      // Moyen : suite définie par formule, vérifier qu'elle est géométrique
      const u0 = pick([1, 2, 5, 10]);
      const q = pick([2, 3, 0.5]);
      const qAff = q === 0.5 ? '\\dfrac{1}{2}' : `${q}`;
      const qNb = q === 0.5 ? '0{,}5' : `${q}`;
      return {
        enonce: `Soit $(u_n)$ définie par $u_n = ${u0} \\times ${qAff}^n$. Montrer que cette suite est géométrique et donner sa raison.`,
        corrige: `On calcule $\\dfrac{u_{n+1}}{u_n} = \\dfrac{${u0} \\times ${qAff}^{n+1}}{${u0} \\times ${qAff}^n} = ${qAff}$. Le quotient est constant égal à $${qAff}$, donc la suite est **géométrique de raison $q = ${qNb}$**.`
      };
    } else {
      // Difficile : suite par récurrence u_{n+1} = q × u_n
      const variantes = [
        () => {
          const u0 = rand(2, 10);
          const q = pick([2, 3, 0.5, 0.25]);
          const qAff = q === 0.5 ? '0{,}5' : (q === 0.25 ? '0{,}25' : `${q}`);
          return {
            enonce: `Soit $(u_n)$ définie par $u_0 = ${u0}$ et $u_{n+1} = ${qAff} \\times u_n$. Cette suite est-elle géométrique ? Si oui, donner sa raison et son premier terme.`,
            corrige: `Par définition, $\\dfrac{u_{n+1}}{u_n} = ${qAff}$ est constant (en supposant $u_n \\neq 0$), donc la suite est **géométrique** de raison $q = ${qAff}$ et de premier terme $u_0 = ${u0}$.`
          };
        }
      ];
      return pick(variantes)();
    }
  },

  sg_raison: (d) => {
    if (d === 1) {
      // Facile : 2 termes consécutifs donnés, calculer q = u_{n+1} / u_n
      const u0 = pick([1, 2, 3, 5]);
      const q = pick([2, 3, 4]);
      const u1 = u0 * q;
      return {
        enonce: `Une suite géométrique $(u_n)$ vérifie $u_0 = ${u0}$ et $u_1 = ${u1}$. Calculer sa raison $q$.`,
        corrige: `$q = \\dfrac{u_1}{u_0} = \\dfrac{${u1}}{${u0}} = ${q}$.`
      };
    } else if (d === 2) {
      // Moyen : raison décimale (placement bancaire)
      const variantes = [
        () => {
          const u0 = pick([100, 500, 1000]);
          const taux = pick([2, 3, 5, 10]); // %
          const q = 1 + taux/100;
          const u1 = u0 * q;
          return {
            enonce: `Un capital initial de $${u0}$ € est placé à un taux annuel constant. Après 1 an, il vaut $${u1}$ €. Quelle est la raison de la suite géométrique modélisant le capital ?`,
            corrige: `$q = \\dfrac{${u1}}{${u0}} = ${q.toString().replace('.', '{,}')}$, ce qui correspond à un taux d'évolution de $${taux}\\,\\%$.`
          };
        },
        () => {
          // 2 termes non consécutifs
          const u0 = pick([1, 2, 3]);
          const q = pick([2, 3]);
          const n = rand(3, 5);
          const un = u0 * Math.pow(q, n);
          return {
            enonce: `Une suite géométrique $(u_n)$ vérifie $u_0 = ${u0}$ et $u_${n} = ${un}$. Calculer sa raison $q$ (positive).`,
            corrige: `$u_n = u_0 \\times q^n$, donc $${un} = ${u0} \\times q^${n}$, soit $q^${n} = ${un/u0}$, donc $q = \\sqrt[${n}]{${un/u0}} = ${q}$.`
          };
        }
      ];
      return pick(variantes)();
    } else {
      // Difficile : avec décroissance (q entre 0 et 1)
      const variantes = [
        () => {
          const u0 = pick([1000, 2000, 5000]);
          const taux = pick([10, 15, 20, 25]); // % de baisse
          const q = 1 - taux/100;
          const u1 = u0 * q;
          return {
            enonce: `La valeur d'une voiture diminue chaque année du même pourcentage. Initialement, elle valait $${u0}$ €, et après 1 an elle vaut $${u1}$ €. Calculer la raison $q$ de la suite géométrique modélisant la valeur.`,
            corrige: `$q = \\dfrac{${u1}}{${u0}} = ${q.toString().replace('.', '{,}')}$, ce qui correspond à une baisse de $${taux}\\,\\%$ par an.`
          };
        },
        () => {
          // Suite à termes pairs ou impairs : u_p et u_q donnés
          const u0 = pick([1, 2, 4]);
          const q = pick([2, 3]);
          const p = 2;
          const q_rang = 5;
          const up = u0 * Math.pow(q, p);
          const uq = u0 * Math.pow(q, q_rang);
          return {
            enonce: `Une suite géométrique vérifie $u_${p} = ${up}$ et $u_${q_rang} = ${uq}$. Calculer la raison $q$.`,
            corrige: `$\\dfrac{u_{${q_rang}}}{u_${p}} = q^{${q_rang - p}}$, soit $\\dfrac{${uq}}{${up}} = ${uq/up} = q^{${q_rang - p}}$. Donc $q = \\sqrt[${q_rang - p}]{${uq/up}} = ${q}$.`
          };
        }
      ];
      return pick(variantes)();
    }
  },

  sg_terme: (d) => {
    if (d === 1) {
      // Facile : u_n = u_0 × q^n avec petits nombres
      const u0 = pick([1, 2, 3]);
      const q = pick([2, 3]);
      const n = rand(3, 5);
      const un = u0 * Math.pow(q, n);
      return {
        enonce: `Soit la suite géométrique $(u_n)$ de premier terme $u_0 = ${u0}$ et de raison $q = ${q}$. Calculer $u_{${n}}$.`,
        corrige: `$u_n = u_0 \\times q^n$, donc $u_{${n}} = ${u0} \\times ${q}^{${n}} = ${u0} \\times ${Math.pow(q, n)} = ${un}$.`
      };
    } else if (d === 2) {
      // Moyen : raison décimale ou contexte financier
      const variantes = [
        () => {
          const u0 = pick([1000, 2000, 5000]);
          const taux = pick([2, 3, 5]); // %
          const q = 1 + taux/100;
          const n = rand(3, 8);
          const un = Math.round(u0 * Math.pow(q, n) * 100) / 100;
          const unAff = Number.isInteger(un) ? `${un}` : un.toFixed(2).replace('.', '{,}');
          return {
            enonce: `Un capital de $${u0}$ € est placé à $${taux}\\,\\%$ par an. Calculer sa valeur après $${n}$ ans (arrondie au centime).`,
            corrige: `Le capital suit une suite géométrique de raison $q = 1 + \\dfrac{${taux}}{100} = ${q.toString().replace('.', '{,}')}$. Après $${n}$ ans : $u_{${n}} = ${u0} \\times ${q.toString().replace('.', '{,}')}^{${n}} \\approx ${unAff}$ €.`
          };
        },
        () => {
          const u0 = pick([2, 5, 10]);
          const q = pick([0.5, 0.25]);
          const qAff = q === 0.5 ? '0{,}5' : '0{,}25';
          const n = rand(3, 5);
          const un = u0 * Math.pow(q, n);
          const unAff = Number.isInteger(un) ? `${un}` : un.toFixed(4).replace('.', '{,}').replace(/0+$/, '').replace(/,$/, '');
          return {
            enonce: `Soit la suite géométrique $(u_n)$ de premier terme $u_0 = ${u0}$ et de raison $q = ${qAff}$. Calculer $u_{${n}}$.`,
            corrige: `$u_{${n}} = ${u0} \\times ${qAff}^{${n}} = ${u0} \\times ${Math.pow(q, n).toString().replace('.', '{,}')} = ${unAff}$.`
          };
        }
      ];
      return pick(variantes)();
    } else {
      // Difficile : trouver à partir de quel rang u_n dépasse ou descend sous un seuil
      const variantes = [
        () => {
          const u0 = pick([100, 200]);
          const taux = pick([5, 10]); // %
          const q = 1 + taux/100;
          // Chercher quand le capital double
          const seuil = 2 * u0;
          // u_0 × q^n >= seuil → n >= log(2)/log(q)
          const n = Math.ceil(Math.log(2) / Math.log(q));
          const un = (u0 * Math.pow(q, n)).toFixed(2).replace('.', '{,}');
          return {
            enonce: `Un capital de $${u0}$ € est placé à $${taux}\\,\\%$ par an. À partir de quelle année le capital aura-t-il doublé ?`,
            corrige: `On cherche $n$ tel que $${u0} \\times ${q.toString().replace('.', '{,}')}^n \\geq ${seuil}$, soit $${q.toString().replace('.', '{,}')}^n \\geq 2$. Avec la calculatrice : $n \\geq \\dfrac{\\ln 2}{\\ln ${q.toString().replace('.', '{,}')}} \\approx ${(Math.log(2) / Math.log(q)).toFixed(2).replace('.', '{,}')}$. Donc à partir de l'année $n = ${n}$ (valeur : $${un}$ €).`
          };
        },
        () => {
          // Décroissance : population qui diminue
          const u0 = pick([10000, 20000, 50000]);
          const taux = pick([5, 10, 15]); // %
          const q = 1 - taux/100;
          const n = rand(5, 10);
          const un = Math.round(u0 * Math.pow(q, n));
          return {
            enonce: `Une population de $${u0}$ individus diminue de $${taux}\\,\\%$ chaque année. Quel sera l'effectif après $${n}$ ans (arrondi à l'unité) ?`,
            corrige: `On modélise par une suite géométrique de raison $q = 1 - \\dfrac{${taux}}{100} = ${q.toString().replace('.', '{,}')}$. Après $${n}$ ans : $u_{${n}} = ${u0} \\times ${q.toString().replace('.', '{,}')}^{${n}} \\approx ${un}$ individus.`
          };
        }
      ];
      return pick(variantes)();
    }
  },

  sg_sens: (d) => {
    if (d === 1) {
      // Facile : raison donnée, dire croissante / décroissante / constante
      const variantes = [
        () => {
          const u0 = pick([1, 2, 5]);
          const q = pick([2, 3, 4]);
          return {
            enonce: `Soit la suite géométrique $(u_n)$ avec $u_0 = ${u0}$ (positif) et $q = ${q}$. Étudier son sens de variation.`,
            corrige: `Comme $u_0 > 0$ et $q = ${q} > 1$, la suite est **strictement croissante**.`
          };
        },
        () => {
          const u0 = pick([10, 20, 50]);
          const q = pick([0.5, 0.25]);
          const qAff = q === 0.5 ? '0{,}5' : '0{,}25';
          return {
            enonce: `Soit la suite géométrique $(u_n)$ avec $u_0 = ${u0}$ (positif) et $q = ${qAff}$. Étudier son sens de variation.`,
            corrige: `Comme $u_0 > 0$ et $0 < q = ${qAff} < 1$, la suite est **strictement décroissante**.`
          };
        }
      ];
      return pick(variantes)();
    } else if (d === 2) {
      // Moyen : déterminer le sens en contexte
      const variantes = [
        () => {
          const u0 = pick([1000, 2000]);
          const taux = pick([3, 5, 8]); // %
          const q = 1 + taux/100;
          return {
            enonce: `Un capital initial de $${u0}$ € est placé à $${taux}\\,\\%$ par an. Étudier le sens de variation de la suite $(u_n)$ modélisant le capital au bout de $n$ années.`,
            corrige: `La raison est $q = ${q.toString().replace('.', '{,}')} > 1$ et $u_0 = ${u0} > 0$, donc la suite est **strictement croissante** : le capital augmente chaque année.`
          };
        },
        () => {
          const u0 = pick([5000, 10000]);
          const taux = pick([10, 15, 20]); // %
          const q = 1 - taux/100;
          return {
            enonce: `La valeur d'une machine diminue de $${taux}\\,\\%$ chaque année. Sa valeur initiale est $${u0}$ €. Étudier le sens de variation de la suite $(u_n)$ modélisant la valeur.`,
            corrige: `La raison est $q = ${q.toString().replace('.', '{,}')}$ (avec $0 < q < 1$) et $u_0 = ${u0} > 0$, donc la suite est **strictement décroissante** : la valeur diminue chaque année.`
          };
        }
      ];
      return pick(variantes)();
    } else {
      // Difficile : énoncer les règles générales selon q
      const variantes = [
        () => ({
          enonce: `Soit la suite géométrique $(u_n)$ de premier terme $u_0 > 0$ et de raison $q > 0$. Discuter du sens de variation selon les valeurs de $q$.`,
          corrige: `Trois cas selon $q$ : si $q > 1$, la suite est **strictement croissante** ; si $q = 1$, la suite est **constante** (égale à $u_0$) ; si $0 < q < 1$, la suite est **strictement décroissante**.`
        }),
        () => ({
          enonce: `Pourquoi le programme limite-t-il l'étude des suites géométriques au cas où $u_0 > 0$ et $q > 0$ ?`,
          corrige: `Si $q < 0$, les termes alternent de signe (positif, négatif, positif…), donc la suite n'est ni croissante ni décroissante. L'étude du sens de variation perd alors son sens classique. Si $u_0 = 0$, la suite est constante nulle.`
        })
      ];
      return pick(variantes)();
    }
  },

  p2_image_ax2: (d) => {
    if (d === 1) {
      // Facile : a entier petit, x petit
      const a = randNonZero(-3, 3);
      const x = randNonZero(-4, 4);
      const fx = a * x * x;
      const aAff = a === 1 ? '' : (a === -1 ? '-' : `${a}`);
      const xAff = x < 0 ? `(${x})` : `${x}`;
      // Calcul détaillé selon a
      let calcDetail;
      if (a === 1) calcDetail = `${x*x}`;
      else if (a === -1) calcDetail = `-${x*x}`;
      else calcDetail = `${a} \\times ${x*x}`;
      return {
        enonce: `Soit $f(x) = ${aAff}x^2$. Calculer $f(${x})$.`,
        corrige: `$f(${x}) = ${aAff}\\times ${xAff}^2 = ${calcDetail} = ${fx}$.`
      };
    } else if (d === 2) {
      // Moyen : a fractionnaire ou x fractionnaire
      const variantes = [
        () => {
          const a = pick([2, 3, -2, -3, 4]);
          const x = pick([5, -5, 6, -6, 7]);
          const fx = a * x * x;
          return {
            enonce: `Soit $f(x) = ${a}x^2$. Calculer $f(${x})$.`,
            corrige: `$f(${x}) = ${a} \\times ${x}^2 = ${a} \\times ${x*x} = ${fx}$.`
          };
        },
        () => {
          const num = randNonZero(1, 3);
          const den = pick([2, 3, 4]);
          const x = pick([2, 4, 6, -2, -4]);
          const fxNum = num * x * x;
          const simpl = fxNum / den;
          const fxAff = Number.isInteger(simpl) ? `${simpl}` : `\\dfrac{${fxNum}}{${den}}`;
          return {
            enonce: `Soit $f(x) = \\dfrac{${num}}{${den}}x^2$. Calculer $f(${x})$.`,
            corrige: `$f(${x}) = \\dfrac{${num}}{${den}} \\times ${x}^2 = \\dfrac{${num} \\times ${x*x}}{${den}} = \\dfrac{${fxNum}}{${den}} = ${fxAff}$.`
          };
        }
      ];
      return pick(variantes)();
    } else {
      // Difficile : trouver x sachant f(x) = k
      const a = pick([1, 2, 3, -1, -2]);
      const xSol = pick([2, 3, 4, 5]);
      const k = a * xSol * xSol;
      // f(x) = ax² = k → x² = k/a → x = ±√(k/a)
      return {
        enonce: `Soit $f(x) = ${a}x^2$. Résoudre l'équation $f(x) = ${k}$.`,
        corrige: `$f(x) = ${k} \\Leftrightarrow ${a}x^2 = ${k} \\Leftrightarrow x^2 = ${k/a}$. Donc $x = \\sqrt{${k/a}} = ${xSol}$ ou $x = -\\sqrt{${k/a}} = ${-xSol}$. $\\mathcal{S} = \\{${-xSol}\\,;\\,${xSol}\\}$.`
      };
    }
  },

  p2_image_axb: (d) => {
    if (d === 1) {
      // Facile : f(x) = x² + b ou x² - b
      const b = randNonZero(-9, 9);
      const x = randNonZero(-4, 4);
      const fx = x*x + b;
      const signB = b >= 0 ? '+' : '-';
      const absB = Math.abs(b);
      return {
        enonce: `Soit $f(x) = x^2 ${signB} ${absB}$. Calculer $f(${x})$.`,
        corrige: `$f(${x}) = ${x}^2 ${signB} ${absB} = ${x*x} ${signB} ${absB} = ${fx}$.`
      };
    } else if (d === 2) {
      // Moyen : ax² + b
      const a = randNonZero(-4, 4);
      const b = randNonZero(-9, 9);
      const x = randNonZero(-4, 4);
      const fx = a*x*x + b;
      const signB = b >= 0 ? '+' : '-';
      const absB = Math.abs(b);
      const aAff = a === 1 ? '' : (a === -1 ? '-' : `${a}`);
      const aMul = a === 1 ? `${x}^2` : (a === -1 ? `-${x}^2` : `${a} \\times ${x}^2`);
      return {
        enonce: `Soit $f(x) = ${aAff}x^2 ${signB} ${absB}$. Calculer $f(${x})$.`,
        corrige: `$f(${x}) = ${aMul} ${signB} ${absB} = ${a*x*x} ${signB} ${absB} = ${fx}$.`
      };
    } else {
      // Difficile : trouver f(x_1) + f(x_2) ou ressolution f(x) = k
      const a = pick([1, 2, -1]);
      const b = randNonZero(-5, 5);
      const xSol = pick([2, 3, 4]);
      // f(x) = ax² + b = k → x² = (k-b)/a
      const k = a * xSol * xSol + b;
      const signB = b >= 0 ? '+' : '-';
      const absB = Math.abs(b);
      const aAff = a === 1 ? '' : (a === -1 ? '-' : `${a}`);
      return {
        enonce: `Soit $f(x) = ${aAff}x^2 ${signB} ${absB}$. Résoudre $f(x) = ${k}$.`,
        corrige: `$f(x) = ${k} \\Leftrightarrow ${aAff}x^2 ${signB} ${absB} = ${k} \\Leftrightarrow ${aAff === '' ? '' : (aAff === '-' ? '-' : `${a}`)}x^2 = ${k-b} \\Leftrightarrow x^2 = ${xSol*xSol}$. Donc $x = ${xSol}$ ou $x = ${-xSol}$. $\\mathcal{S} = \\{${-xSol}\\,;\\,${xSol}\\}$.`
      };
    }
  },

  p2_racines: (d) => {
    if (d === 1) {
      // Facile : f(x) = (x - r1)(x - r2), racines évidentes
      const r1 = randNonZero(-5, 5);
      let r2 = randNonZero(-5, 5);
      while (r2 === r1) r2 = randNonZero(-5, 5);
      const r1Aff = r1 < 0 ? `+ ${-r1}` : `- ${r1}`;
      const r2Aff = r2 < 0 ? `+ ${-r2}` : `- ${r2}`;
      // Trier pour le solutions
      const racines = [r1, r2].sort((a, b) => a - b);
      return {
        enonce: `Soit $f(x) = (x ${r1Aff})(x ${r2Aff})$. Déterminer les racines de $f$.`,
        corrige: `Un produit est nul si et seulement si au moins un des facteurs est nul. $f(x) = 0 \\Leftrightarrow x ${r1Aff} = 0$ ou $x ${r2Aff} = 0$, soit $x = ${r1}$ ou $x = ${r2}$. Les racines sont $${racines[0]}$ et $${racines[1]}$.`
      };
    } else if (d === 2) {
      // Moyen : f(x) = a(x - r1)(x - r2), avec a ≠ 1
      const a = pick([2, 3, -1, -2]);
      const r1 = randNonZero(-4, 4);
      let r2 = randNonZero(-4, 4);
      while (r2 === r1) r2 = randNonZero(-4, 4);
      const r1Aff = r1 < 0 ? `+ ${-r1}` : `- ${r1}`;
      const r2Aff = r2 < 0 ? `+ ${-r2}` : `- ${r2}`;
      const aAff = a === -1 ? '-' : `${a}`;
      const racines = [r1, r2].sort((a, b) => a - b);
      return {
        enonce: `Soit $f(x) = ${aAff}(x ${r1Aff})(x ${r2Aff})$. Déterminer les racines de $f$.`,
        corrige: `$f(x) = 0$ équivaut à $x ${r1Aff} = 0$ ou $x ${r2Aff} = 0$ (le facteur $${a}$ n'est jamais nul). Donc les racines sont $${racines[0]}$ et $${racines[1]}$.`
      };
    } else {
      // Difficile : factoriser puis trouver racines
      const variantes = [
        () => {
          // f(x) = x² - r² → racines ±r
          const r = rand(2, 5);
          return {
            enonce: `Soit $f(x) = x^2 - ${r*r}$. Factoriser $f(x)$ et donner ses racines.`,
            corrige: `Identité remarquable : $f(x) = x^2 - ${r}^2 = (x - ${r})(x + ${r})$. Les racines sont $${-r}$ et $${r}$.`
          };
        },
        () => {
          // f(x) = x² - sx avec s = r1+r2 et 0 racine, autre = s
          const s = randNonZero(2, 6);
          return {
            enonce: `Soit $f(x) = x^2 - ${s}x$. Factoriser $f(x)$ et donner ses racines.`,
            corrige: `On factorise par $x$ : $f(x) = x(x - ${s})$. Les racines sont $0$ et $${s}$.`
          };
        },
        () => {
          // Une racine donnée, vérifier puis factoriser
          // Choisir r1 et r2 distincts
          let r1 = randNonZero(-3, 3);
          let r2 = randNonZero(-3, 3);
          while (r2 === r1) r2 = randNonZero(-3, 3);
          // Forme développée : x² + bx + c où b = -(r1+r2) et c = r1*r2
          const b = -(r1 + r2);
          const c = r1 * r2;
          const br1 = b * r1;

          // Formatage propre du polynôme x² + bx + c (omet « 0x » et « 1x »)
          let polyStr = 'x^2';
          if (b === 1) polyStr += ' + x';
          else if (b === -1) polyStr += ' - x';
          else if (b > 0) polyStr += ` + ${b}x`;
          else if (b < 0) polyStr += ` - ${-b}x`;
          if (c > 0) polyStr += ` + ${c}`;
          else if (c < 0) polyStr += ` - ${-c}`;

          // Formatage de la substitution x = r1 dans bx (omet « 0 × (...) » et « 1 × (...) »)
          let substStr = `(${r1})^2`;
          if (b === 1) substStr += ` + (${r1})`;
          else if (b === -1) substStr += ` - (${r1})`;
          else if (b > 0) substStr += ` + ${b} \\times (${r1})`;
          else if (b < 0) substStr += ` - ${-b} \\times (${r1})`;
          if (c > 0) substStr += ` + ${c}`;
          else if (c < 0) substStr += ` - ${-c}`;

          // Calcul numérique intermédiaire : r1² + b*r1 + c (omet le terme nul)
          let calcStr = `${r1 * r1}`;
          if (br1 > 0) calcStr += ` + ${br1}`;
          else if (br1 < 0) calcStr += ` - ${-br1}`;
          if (c > 0) calcStr += ` + ${c}`;
          else if (c < 0) calcStr += ` - ${-c}`;

          // Factorisation
          const r1Fact = r1 < 0 ? `+ ${-r1}` : `- ${r1}`;
          const r2Fact = r2 < 0 ? `+ ${-r2}` : `- ${r2}`;
          const racines = [r1, r2].sort((a, b) => a - b);
          return {
            enonce: `On donne $f(x) = ${polyStr}$. Vérifier que $${r1}$ est racine de $f$ et en déduire l'autre racine.`,
            corrige: `$f(${r1}) = ${substStr} = ${calcStr} = 0$. Donc $${r1}$ est bien racine. Par la somme et le produit des racines : $r_1 + r_2 = ${-b} = ${r1} + r_2$, donc $r_2 = ${r2}$. La forme factorisée est $f(x) = (x ${r1Fact})(x ${r2Fact})$. Les racines sont $${racines[0]}$ et $${racines[1]}$.`
          };
        }
      ];
      let res = null, tries = 0;
      while (!res && tries < 5) { res = pick(variantes)(); tries++; }
      return res || { enonce: 'Soit $f(x) = x^2 - 9$. Factoriser et donner les racines.', corrige: '$f(x) = (x-3)(x+3)$. Racines : $-3$ et $3$.' };
    }
  },

  p2_signe: (d) => {
    if (d === 1) {
      // Facile : a > 0, (x - r1)(x - r2)
      const r1 = randNonZero(-4, 4);
      let r2 = randNonZero(-4, 4);
      while (r2 === r1) r2 = randNonZero(-4, 4);
      const racines = [r1, r2].sort((a, b) => a - b);
      const r1Aff = r1 < 0 ? `+ ${-r1}` : `- ${r1}`;
      const r2Aff = r2 < 0 ? `+ ${-r2}` : `- ${r2}`;
      return {
        enonce: `Étudier le signe de $f(x) = (x ${r1Aff})(x ${r2Aff})$.`,
        corrige: `Les racines sont $${racines[0]}$ et $${racines[1]}$. Le coefficient dominant est $1 > 0$, donc $f$ est **positive** à l'extérieur des racines et **négative** entre elles. Concrètement : $f(x) > 0$ sur $]-\\infty\\,;\\,${racines[0]}[ \\cup ]${racines[1]}\\,;\\,+\\infty[$ et $f(x) < 0$ sur $]${racines[0]}\\,;\\,${racines[1]}[$.`
      };
    } else if (d === 2) {
      // Moyen : a < 0 (coefficient dominant négatif)
      const a = pick([-1, -2]);
      const r1 = randNonZero(-3, 3);
      let r2 = randNonZero(-3, 3);
      while (r2 === r1) r2 = randNonZero(-3, 3);
      const racines = [r1, r2].sort((a, b) => a - b);
      const r1Aff = r1 < 0 ? `+ ${-r1}` : `- ${r1}`;
      const r2Aff = r2 < 0 ? `+ ${-r2}` : `- ${r2}`;
      const aAff = a === -1 ? '-' : `${a}`;
      return {
        enonce: `Étudier le signe de $f(x) = ${aAff}(x ${r1Aff})(x ${r2Aff})$.`,
        corrige: `Les racines sont $${racines[0]}$ et $${racines[1]}$. Le coefficient dominant est $${a} < 0$, donc $f$ est **négative** à l'extérieur des racines et **positive** entre elles. Concrètement : $f(x) > 0$ sur $]${racines[0]}\\,;\\,${racines[1]}[$ et $f(x) < 0$ sur $]-\\infty\\,;\\,${racines[0]}[ \\cup ]${racines[1]}\\,;\\,+\\infty[$.`
      };
    } else {
      // Difficile : f sous forme développée, factoriser puis signe
      const variantes = [
        () => {
          // x² - c²
          const c = rand(2, 5);
          return {
            enonce: `Étudier le signe de $f(x) = x^2 - ${c*c}$ sur $\\mathbb{R}$.`,
            corrige: `On factorise : $f(x) = x^2 - ${c}^2 = (x - ${c})(x + ${c})$. Racines : $${-c}$ et $${c}$. Coefficient dominant $1 > 0$, donc $f > 0$ sur $]-\\infty\\,;\\,${-c}[ \\cup ]${c}\\,;\\,+\\infty[$ et $f < 0$ sur $]${-c}\\,;\\,${c}[$.`
          };
        },
        () => {
          // f(x) = x(x - s)
          const s = randNonZero(-4, 4);
          const racines = [0, s].sort((a, b) => a - b);
          const sAff = s < 0 ? `+ ${-s}` : `- ${s}`;
          return {
            enonce: `Étudier le signe de $f(x) = x(x ${sAff})$.`,
            corrige: `Racines : $0$ et $${s}$. Coefficient dominant $1 > 0$, donc $f > 0$ sur $]-\\infty\\,;\\,${racines[0]}[ \\cup ]${racines[1]}\\,;\\,+\\infty[$ et $f < 0$ sur $]${racines[0]}\\,;\\,${racines[1]}[$.`
          };
        }
      ];
      return pick(variantes)();
    }
  },

  p2_reconnaitre: (d) => {
    if (d === 1) {
      // Facile : reconnaître x ↦ x², 2x², -x²
      const variantes = [
        () => ({
          enonce: `Parmi les fonctions $f(x) = x^2$, $g(x) = 2x^2$, $h(x) = -x^2$, laquelle correspond à une parabole tournée vers le haut, plus "fine" (resserrée) que la parabole standard ?`,
          corrige: `$g(x) = 2x^2$ : coefficient dominant $> 1$, la parabole est plus resserrée que $f(x) = x^2$, et elle est tournée vers le haut (coefficient positif).`
        }),
        () => ({
          enonce: `Comment reconnaît-on, à partir de son expression, qu'une parabole $f(x) = ax^2$ est tournée vers le bas ?`,
          corrige: `Une parabole $f(x) = ax^2$ est tournée **vers le bas** si et seulement si **$a < 0$** (coefficient dominant négatif).`
        }),
        () => ({
          enonce: `Soit $f(x) = -3x^2$. La parabole associée est-elle tournée vers le haut ou vers le bas ?`,
          corrige: `Le coefficient dominant est $-3 < 0$, donc la parabole est tournée **vers le bas**.`
        })
      ];
      return pick(variantes)();
    } else if (d === 2) {
      // Moyen : f(x) = ax² + b, déterminer le sommet
      const a = pick([1, 2, -1, -2]);
      const b = randNonZero(-5, 5);
      const signB = b >= 0 ? '+' : '-';
      const absB = Math.abs(b);
      const aAff = a === 1 ? '' : (a === -1 ? '-' : `${a}`);
      const sens = a > 0 ? 'haut' : 'bas';
      return {
        enonce: `Soit $f(x) = ${aAff}x^2 ${signB} ${absB}$. Donner les coordonnées du sommet de la parabole et son sens.`,
        corrige: `La fonction $f$ atteint son extremum en $x = 0$ : $f(0) = ${b}$. Le sommet est donc $S(0\\,;\\,${b})$. Comme $a = ${a} ${a > 0 ? '> 0' : '< 0'}$, la parabole est tournée **vers le ${sens}** et $S$ est un ${a > 0 ? 'minimum' : 'maximum'}.`
      };
    } else {
      // Difficile : f factorisée, donner sens + position de l'extremum (axe de symétrie)
      const a = pick([1, -1, 2, -2]);
      const r1 = randNonZero(-3, 3);
      let r2 = randNonZero(-3, 3);
      while (r2 === r1) r2 = randNonZero(-3, 3);
      const racines = [r1, r2].sort((a, b) => a - b);
      const r1Aff = r1 < 0 ? `+ ${-r1}` : `- ${r1}`;
      const r2Aff = r2 < 0 ? `+ ${-r2}` : `- ${r2}`;
      const aAff = a === 1 ? '' : (a === -1 ? '-' : `${a}`);
      const axe = (r1 + r2) / 2;
      const axeAff = Number.isInteger(axe) ? `${axe}` : (axe % 0.5 === 0 ? `\\dfrac{${r1+r2}}{2} = ${axe}` : `${axe}`);
      const sens = a > 0 ? 'haut' : 'bas';
      // Affichage propre de la somme r1 + r2 dans la fraction
      const sommeAff = r2 >= 0 ? `${r1} + ${r2}` : `${r1} - ${-r2}`;
      return {
        enonce: `Soit $f(x) = ${aAff}(x ${r1Aff})(x ${r2Aff})$. Sans calculer le sommet, déterminer l'équation de l'axe de symétrie de la parabole.`,
        corrige: `L'axe de symétrie passe par le milieu des deux racines $${racines[0]}$ et $${racines[1]}$. L'abscisse de cet axe est $x = \\dfrac{${sommeAff}}{2} = ${axeAff}$. L'équation de l'axe est donc $x = ${axeAff}$. La parabole est tournée vers le ${sens}.`
      };
    }
  },

  p2_symetrie: (d) => {
    if (d === 1) {
      // Facile : f(x) = ax², symétrie par rapport à l'axe Oy
      const variantes = [
        () => ({
          enonce: `Quel est l'axe de symétrie de la parabole d'équation $y = x^2$ ?`,
          corrige: `L'axe de symétrie est l'axe des ordonnées, d'équation $x = 0$.`
        }),
        () => {
          const a = pick([2, 3, -1, -2]);
          return {
            enonce: `Quel est l'axe de symétrie de la parabole d'équation $y = ${a}x^2$ ?`,
            corrige: `Pour toute fonction $f(x) = ${a}x^2$, on a $f(-x) = ${a}(-x)^2 = ${a}x^2 = f(x)$. La parabole est symétrique par rapport à l'axe des ordonnées, d'équation $x = 0$.`
          };
        }
      ];
      return pick(variantes)();
    } else if (d === 2) {
      // Moyen : f(x) = a(x - x1)(x - x2), axe = (x1+x2)/2
      const a = pick([1, -1, 2]);
      const r1 = randNonZero(-3, 3);
      let r2 = randNonZero(-3, 3);
      while (r2 === r1) r2 = randNonZero(-3, 3);
      const r1Aff = r1 < 0 ? `+ ${-r1}` : `- ${r1}`;
      const r2Aff = r2 < 0 ? `+ ${-r2}` : `- ${r2}`;
      const aAff = a === 1 ? '' : (a === -1 ? '-' : `${a}`);
      const axe = (r1 + r2) / 2;
      const axeAff = Number.isInteger(axe) ? `${axe}` : `\\dfrac{${r1+r2}}{2}`;
      // Affichage propre de la somme dans la fraction
      const sommeAff = r2 >= 0 ? `${r1} + ${r2}` : `${r1} - ${-r2}`;
      // Calculer l'extremum
      const yExtr = a * (axe - r1) * (axe - r2);
      const yAff = Number.isInteger(yExtr) ? `${yExtr}` : yExtr.toFixed(2).replace('.', '{,}');
      const ext = a > 0 ? 'minimum' : 'maximum';
      return {
        enonce: `Soit $f(x) = ${aAff}(x ${r1Aff})(x ${r2Aff})$. Déterminer l'axe de symétrie de la parabole et l'extremum de $f$.`,
        corrige: `Les racines sont $${r1}$ et $${r2}$. L'axe de symétrie a pour abscisse $x = \\dfrac{${sommeAff}}{2} = ${axeAff}$. L'extremum est atteint en $x = ${axeAff}$ : $f(${axeAff}) = ${yAff}$. Comme $a = ${a} ${a > 0 ? '> 0' : '< 0'}$, c'est un **${ext}**.`
      };
    } else {
      // Difficile : trouver une racine connaissant l'autre + axe
      const variantes = [
        () => {
          const axe = pick([1, 2, -1, -2]);
          const dist = pick([2, 3]);
          const r1 = axe - dist;
          const r2 = axe + dist;
          // Affichages propres
          const axeAff = axe < 0 ? `(${axe})` : `${axe}`;
          const r1Aff = r1 < 0 ? `(${r1})` : `${r1}`;
          // 2*axe - r1 → on calcule manuellement
          const calc1 = 2 * axe;
          const calc1Aff = calc1 < 0 ? `(${calc1})` : `${calc1}`;
          return {
            enonce: `Une parabole $\\mathcal{P}$ admet pour axe de symétrie la droite $x = ${axe}$. Une de ses racines est $${r1}$. Quelle est l'autre racine ?`,
            corrige: `L'axe de symétrie passe par le milieu des deux racines. Si $r_1 = ${r1}$ et l'axe est $x = ${axe}$, alors $\\dfrac{r_1 + r_2}{2} = ${axe}$, donc $r_2 = 2 \\times ${axeAff} - ${r1Aff} = ${calc1} - ${r1Aff} = ${r2}$. L'autre racine est $${r2}$.`
          };
        }
      ];
      return pick(variantes)();
    }
  },

  p3_image: (d) => {
    if (d === 1) {
      // Facile : f(x) = x³, calcul direct
      const x = randNonZero(-3, 3);
      const fx = x * x * x;
      const xAff = x < 0 ? `(${x})` : `${x}`;
      return {
        enonce: `Soit $f(x) = x^3$. Calculer $f(${x})$.`,
        corrige: `$f(${x}) = ${xAff}^3 = ${fx}$.`
      };
    } else if (d === 2) {
      // Moyen : f(x) = ax³ ou ax³ + b
      const variantes = [
        () => {
          const a = pick([2, 3, -1, -2]);
          const x = pick([2, 3, -2, -3]);
          const fx = a * x * x * x;
          const xAff = x < 0 ? `(${x})` : `${x}`;
          const aAff = a === -1 ? '-' : `${a}`;
          return {
            enonce: `Soit $f(x) = ${aAff}x^3$. Calculer $f(${x})$.`,
            corrige: `$f(${x}) = ${aAff} \\times ${xAff}^3 = ${aAff} \\times ${x*x*x} = ${fx}$.`
          };
        },
        () => {
          const a = pick([1, 2, -1]);
          const b = randNonZero(-5, 5);
          const x = pick([2, 3, -2, -3]);
          const fx = a * x * x * x + b;
          const signB = b >= 0 ? '+' : '-';
          const absB = Math.abs(b);
          const xAff = x < 0 ? `(${x})` : `${x}`;
          const aAff = a === 1 ? '' : (a === -1 ? '-' : `${a}`);
          const aMul = a === 1 ? `${x*x*x}` : (a === -1 ? `-${x*x*x}` : `${a*x*x*x}`);
          return {
            enonce: `Soit $f(x) = ${aAff}x^3 ${signB} ${absB}$. Calculer $f(${x})$.`,
            corrige: `$f(${x}) = ${aAff}${xAff}^3 ${signB} ${absB} = ${aMul} ${signB} ${absB} = ${fx}$.`
          };
        }
      ];
      return pick(variantes)();
    } else {
      // Difficile : résoudre f(x) = k, équation x³ = c
      const variantes = [
        () => {
          // f(x) = x³ + b, résoudre f(x) = k → x³ = k - b
          const b = randNonZero(-5, 5);
          const xSol = pick([2, 3, -2, -3]);
          const k = xSol * xSol * xSol + b;
          const signB = b >= 0 ? '+' : '-';
          const absB = Math.abs(b);
          return {
            enonce: `Soit $f(x) = x^3 ${signB} ${absB}$. Résoudre l'équation $f(x) = ${k}$.`,
            corrige: `$f(x) = ${k} \\Leftrightarrow x^3 ${signB} ${absB} = ${k} \\Leftrightarrow x^3 = ${k-b}$. La racine cubique : $x = \\sqrt[3]{${k-b}} = ${xSol}$. $\\mathcal{S} = \\{${xSol}\\}$.`
          };
        },
        () => {
          // f(x) = ax³, résoudre f(x) = k
          const a = pick([2, 3]);
          const xSol = pick([2, 3, -2]);
          const k = a * xSol * xSol * xSol;
          return {
            enonce: `Soit $f(x) = ${a}x^3$. Résoudre l'équation $f(x) = ${k}$.`,
            corrige: `$f(x) = ${k} \\Leftrightarrow ${a}x^3 = ${k} \\Leftrightarrow x^3 = ${k/a}$. Donc $x = \\sqrt[3]{${k/a}} = ${xSol}$. $\\mathcal{S} = \\{${xSol}\\}$.`
          };
        }
      ];
      return pick(variantes)();
    }
  },

  p3_racines: (d) => {
    if (d === 1) {
      // Facile : 3 racines entières distinctes, a = 1
      let r1 = randNonZero(-4, 4);
      let r2 = randNonZero(-4, 4);
      let r3 = randNonZero(-4, 4);
      while (r2 === r1) r2 = randNonZero(-4, 4);
      while (r3 === r1 || r3 === r2) r3 = randNonZero(-4, 4);
      const r1Aff = r1 < 0 ? `+ ${-r1}` : `- ${r1}`;
      const r2Aff = r2 < 0 ? `+ ${-r2}` : `- ${r2}`;
      const r3Aff = r3 < 0 ? `+ ${-r3}` : `- ${r3}`;
      const racines = [r1, r2, r3].sort((a, b) => a - b);
      return {
        enonce: `Soit $f(x) = (x ${r1Aff})(x ${r2Aff})(x ${r3Aff})$. Déterminer les racines de $f$.`,
        corrige: `Un produit est nul si et seulement si l'un des facteurs est nul : $f(x) = 0 \\Leftrightarrow x ${r1Aff} = 0$ ou $x ${r2Aff} = 0$ ou $x ${r3Aff} = 0$. Les racines sont $${racines[0]}$, $${racines[1]}$ et $${racines[2]}$.`
      };
    } else if (d === 2) {
      // Moyen : a ≠ 1, ou une racine = 0
      const variantes = [
        () => {
          const a = pick([2, -1, -2, 3]);
          let r1 = randNonZero(-3, 3);
          let r2 = randNonZero(-3, 3);
          let r3 = randNonZero(-3, 3);
          while (r2 === r1) r2 = randNonZero(-3, 3);
          while (r3 === r1 || r3 === r2) r3 = randNonZero(-3, 3);
          const r1Aff = r1 < 0 ? `+ ${-r1}` : `- ${r1}`;
          const r2Aff = r2 < 0 ? `+ ${-r2}` : `- ${r2}`;
          const r3Aff = r3 < 0 ? `+ ${-r3}` : `- ${r3}`;
          const aAff = a === -1 ? '-' : `${a}`;
          const racines = [r1, r2, r3].sort((a, b) => a - b);
          return {
            enonce: `Soit $f(x) = ${aAff}(x ${r1Aff})(x ${r2Aff})(x ${r3Aff})$. Déterminer les racines de $f$.`,
            corrige: `Le facteur $${a}$ n'est jamais nul. Les racines sont solutions de $x ${r1Aff} = 0$ ou $x ${r2Aff} = 0$ ou $x ${r3Aff} = 0$. On trouve : $${racines[0]}$, $${racines[1]}$ et $${racines[2]}$.`
          };
        },
        () => {
          // f(x) = x(x - r1)(x - r2) : 0 est une racine
          let r1 = randNonZero(-3, 3);
          let r2 = randNonZero(-3, 3);
          while (r2 === r1) r2 = randNonZero(-3, 3);
          const r1Aff = r1 < 0 ? `+ ${-r1}` : `- ${r1}`;
          const r2Aff = r2 < 0 ? `+ ${-r2}` : `- ${r2}`;
          const racines = [0, r1, r2].sort((a, b) => a - b);
          return {
            enonce: `Soit $f(x) = x(x ${r1Aff})(x ${r2Aff})$. Déterminer les racines de $f$.`,
            corrige: `$f(x) = 0 \\Leftrightarrow x = 0$ ou $x ${r1Aff} = 0$ ou $x ${r2Aff} = 0$. Les racines sont $${racines[0]}$, $${racines[1]}$ et $${racines[2]}$.`
          };
        }
      ];
      return pick(variantes)();
    } else {
      // Difficile : factoriser à partir d'une racine connue
      const variantes = [
        () => {
          // f(x) = x³ - sx où s = a², racines : 0, ±a
          const a = pick([1, 2, 3]);
          return {
            enonce: `Soit $f(x) = x^3 - ${a*a}x$. Factoriser $f(x)$ et donner ses racines.`,
            corrige: `On factorise par $x$ : $f(x) = x(x^2 - ${a*a})$. Puis on utilise l'identité remarquable : $x^2 - ${a*a} = x^2 - ${a}^2 = (x - ${a})(x + ${a})$. Donc $f(x) = x(x - ${a})(x + ${a})$. Les racines sont $${-a}$, $0$ et $${a}$.`
          };
        },
        () => {
          // f(x) = (x-r)(x²-c²) = (x-r)(x-c)(x+c)
          const r = randNonZero(-3, 3);
          const c = pick([2, 3]);
          const rAff = r < 0 ? `+ ${-r}` : `- ${r}`;
          const racines = [r, -c, c].sort((a, b) => a - b);
          return {
            enonce: `Soit $f(x) = (x ${rAff})(x^2 - ${c*c})$. Factoriser entièrement $f(x)$ et donner ses racines.`,
            corrige: `On utilise l'identité remarquable sur $x^2 - ${c*c}$ : $x^2 - ${c*c} = (x - ${c})(x + ${c})$. Donc $f(x) = (x ${rAff})(x - ${c})(x + ${c})$. Les racines sont $${racines[0]}$, $${racines[1]}$ et $${racines[2]}$.`
          };
        }
      ];
      return pick(variantes)();
    }
  },

  p3_cube_eq: (d) => {
    if (d === 1) {
      // Facile : x³ = c avec c = cube parfait, positif
      const x = pick([2, 3, 4, 5]);
      const c = x * x * x;
      return {
        enonce: `Résoudre dans $\\mathbb{R}$ l'équation $x^3 = ${c}$.`,
        corrige: `$x^3 = ${c} \\Leftrightarrow x = \\sqrt[3]{${c}} = ${x}$. $\\mathcal{S} = \\{${x}\\}$.`
      };
    } else if (d === 2) {
      // Moyen : c négatif ou décomposition
      const variantes = [
        () => {
          const x = pick([-2, -3, -4, -5]);
          const c = x * x * x;
          return {
            enonce: `Résoudre dans $\\mathbb{R}$ l'équation $x^3 = ${c}$.`,
            corrige: `$x^3 = ${c} \\Leftrightarrow x = \\sqrt[3]{${c}} = ${x}$ (la racine cubique d'un nombre négatif est négative). $\\mathcal{S} = \\{${x}\\}$.`
          };
        },
        () => {
          // ax³ = c → x³ = c/a
          const a = pick([2, 3, 4]);
          const x = pick([2, 3, -2]);
          const c = a * x * x * x;
          return {
            enonce: `Résoudre dans $\\mathbb{R}$ l'équation $${a}x^3 = ${c}$.`,
            corrige: `$${a}x^3 = ${c} \\Leftrightarrow x^3 = \\dfrac{${c}}{${a}} = ${c/a} \\Leftrightarrow x = \\sqrt[3]{${c/a}} = ${x}$. $\\mathcal{S} = \\{${x}\\}$.`
          };
        }
      ];
      return pick(variantes)();
    } else {
      // Difficile : application volume ou contexte concret
      const variantes = [
        () => {
          // Volume d'un cube : V = c³, trouver c
          const c = pick([2, 3, 4, 5]);
          const V = c * c * c;
          return {
            enonce: `Un cube a un volume de $${V}$ cm³. Quelle est la longueur de son côté ?`,
            corrige: `Notons $c$ le côté du cube. Alors $c^3 = ${V}$, donc $c = \\sqrt[3]{${V}} = ${c}$ cm.`
          };
        },
        () => {
          // x³ + a = b
          const x = pick([2, 3, -2]);
          const a = randNonZero(-5, 5);
          const b = x * x * x + a;
          const signA = a >= 0 ? '+' : '-';
          const absA = Math.abs(a);
          return {
            enonce: `Résoudre dans $\\mathbb{R}$ l'équation $x^3 ${signA} ${absA} = ${b}$.`,
            corrige: `$x^3 ${signA} ${absA} = ${b} \\Leftrightarrow x^3 = ${b-a} \\Leftrightarrow x = \\sqrt[3]{${b-a}} = ${x}$. $\\mathcal{S} = \\{${x}\\}$.`
          };
        }
      ];
      return pick(variantes)();
    }
  },

  de_taux: (d) => {
    if (d === 1) {
      // Facile : f(x) = ax + b (affine), taux = a
      const a = randNonZero(-3, 3);
      const b = randNonZero(-5, 5);
      const x1 = randNonZero(-4, 4);
      let x2 = randNonZero(-4, 4);
      while (x2 === x1) x2 = randNonZero(-4, 4);
      const fx1 = a*x1 + b;
      const fx2 = a*x2 + b;
      const signB = b >= 0 ? '+' : '-';
      const absB = Math.abs(b);
      const aAff = a === 1 ? '' : (a === -1 ? '-' : `${a}`);
      const fx1Aff = fx1 < 0 ? `(${fx1})` : `${fx1}`;
      const fx2Aff = fx2 < 0 ? `(${fx2})` : `${fx2}`;
      const x1Aff = x1 < 0 ? `(${x1})` : `${x1}`;
      const x2Aff = x2 < 0 ? `(${x2})` : `${x2}`;
      return {
        enonce: `Soit $f(x) = ${aAff}x ${signB} ${absB}$. Calculer le taux de variation de $f$ entre $${x1}$ et $${x2}$.`,
        corrige: `Taux : $\\tau = \\dfrac{f(${x2}) - f(${x1})}{${x2Aff} - ${x1Aff}} = \\dfrac{${fx2Aff} - ${fx1Aff}}{${x2Aff} - ${x1Aff}} = \\dfrac{${fx2 - fx1}}{${x2 - x1}} = ${(fx2-fx1)/(x2-x1)}$. (Pour une fonction affine, ce taux est constant et égal à $a = ${a}$.)`
      };
    } else if (d === 2) {
      // Moyen : f(x) = x², taux = x1 + x2
      const x1 = randNonZero(-4, 4);
      let x2 = randNonZero(-4, 4);
      while (x2 === x1) x2 = randNonZero(-4, 4);
      const fx1 = x1*x1;
      const fx2 = x2*x2;
      const tau = x1 + x2;
      const x1Aff = x1 < 0 ? `(${x1})` : `${x1}`;
      const x2Aff = x2 < 0 ? `(${x2})` : `${x2}`;
      return {
        enonce: `Soit $f(x) = x^2$. Calculer le taux de variation de $f$ entre $${x1}$ et $${x2}$.`,
        corrige: `Taux : $\\tau = \\dfrac{f(${x2}) - f(${x1})}{${x2Aff} - ${x1Aff}} = \\dfrac{${x2Aff}^2 - ${x1Aff}^2}{${x2Aff} - ${x1Aff}} = \\dfrac{${fx2} - ${fx1}}{${x2 - x1}} = \\dfrac{${fx2-fx1}}{${x2-x1}} = ${tau}$.`
      };
    } else {
      // Difficile : f(x) = ax² + bx + c
      const variantes = [
        () => {
          const a = pick([1, 2, -1]);
          const b = randNonZero(-3, 3);
          const c = randNonZero(-5, 5);
          const x1 = randNonZero(-3, 3);
          let x2 = randNonZero(-3, 3);
          while (x2 === x1) x2 = randNonZero(-3, 3);
          const fx1 = a*x1*x1 + b*x1 + c;
          const fx2 = a*x2*x2 + b*x2 + c;
          const tau = (fx2 - fx1) / (x2 - x1);
          const aAff = a === 1 ? '' : (a === -1 ? '-' : `${a}`);
          const signB = b >= 0 ? '+' : '-';
          const absB = Math.abs(b);
          const signC = c >= 0 ? '+' : '-';
          const absC = Math.abs(c);
          const fx1Aff = fx1 < 0 ? `(${fx1})` : `${fx1}`;
          const fx2Aff = fx2 < 0 ? `(${fx2})` : `${fx2}`;
          const x1Aff = x1 < 0 ? `(${x1})` : `${x1}`;
          const x2Aff = x2 < 0 ? `(${x2})` : `${x2}`;
          return {
            enonce: `Soit $f(x) = ${aAff}x^2 ${signB} ${absB}x ${signC} ${absC}$. Calculer le taux de variation entre $${x1}$ et $${x2}$.`,
            corrige: `On calcule $f(${x1}) = ${fx1}$ et $f(${x2}) = ${fx2}$. Taux : $\\tau = \\dfrac{${fx2Aff} - ${fx1Aff}}{${x2Aff} - ${x1Aff}} = \\dfrac{${fx2-fx1}}{${x2-x1}} = ${tau}$.`
          };
        },
        () => {
          // f(x) = x³
          const x1 = pick([1, 2, -1]);
          const x2 = pick([2, 3, 4]);
          if (x1 === x2) return null;
          const fx1 = x1*x1*x1;
          const fx2 = x2*x2*x2;
          const tau = (fx2 - fx1) / (x2 - x1);
          const fx1Aff = fx1 < 0 ? `(${fx1})` : `${fx1}`;
          const x1Aff = x1 < 0 ? `(${x1})` : `${x1}`;
          return {
            enonce: `Soit $f(x) = x^3$. Calculer le taux de variation entre $${x1}$ et $${x2}$.`,
            corrige: `$f(${x1}) = ${fx1}$ et $f(${x2}) = ${fx2}$. Taux : $\\tau = \\dfrac{${fx2} - ${fx1Aff}}{${x2} - ${x1Aff}} = \\dfrac{${fx2-fx1}}{${x2-x1}} = ${tau}$.`
          };
        }
      ];
      let res = null, tries = 0;
      while (!res && tries < 5) { res = pick(variantes)(); tries++; }
      return res || { enonce: 'Soit $f(x) = x^2$. Taux entre 1 et 2.', corrige: '$\\tau = 3$.' };
    }
  },

  de_nombre_derive: (d) => {
    if (d === 1) {
      // Facile : lecture graphique d'une tangente à pente entière
      const a = pick([1, 2, -1, -2]); // pente de la tangente
      const x0 = pick([-1, 0, 1, 2]);
      const y0 = pick([-1, 0, 1, 2]);
      // Tracer la parabole y = x² translatée et la tangente
      // Pour un repère simple, on dessine juste la tangente passant par (x0, y0)
      const r = creerRepere({});
      let svg = r.svg;
      // Tracer une parabole de référence (a/2)*(x-x0)² + y0 dont la dérivée en x0 est 0... non
      // On simplifie : on trace juste la tangente
      svg += tracerDroite(r, a, y0 - a*x0, { label: 'T' });
      svg += `<circle cx="${r.xPix(x0)}" cy="${r.yPix(y0)}" r="3" fill="${GRAPH_BLEU}"/>`;
      svg += `<text x="${r.xPix(x0)+5}" y="${r.yPix(y0)-4}" font-size="11" font-weight="500" fill="${GRAPH_BLEU}">A</text>`;
      svg += r.fermer();
      return {
        enonce: `La droite $T$ ci-contre est la tangente à la courbe d'une fonction $f$ au point $A(${x0}\\,;\\,${y0})$. Lire graphiquement le nombre dérivé $f'(${x0})$.`,
        svg: svg,
        corrige: `Le nombre dérivé $f'(${x0})$ est le coefficient directeur de la tangente $T$. En lisant la pente sur le graphique : $f'(${x0}) = ${a}$.`
      };
    } else if (d === 2) {
      // Moyen : nombre dérivé à partir de la formule (sans graphique)
      // f(x) = ax² + b, f'(x) = 2ax, f'(x0) = 2a*x0
      const a = pick([1, 2, -1, -2]);
      const b = randNonZero(-5, 5);
      const x0 = randNonZero(-3, 3);
      const fprime = 2 * a * x0;
      const aAff = a === 1 ? '' : (a === -1 ? '-' : `${a}`);
      const signB = b >= 0 ? '+' : '-';
      const absB = Math.abs(b);
      const deuxA = 2 * a;
      const x0Aff = x0 < 0 ? `(${x0})` : `${x0}`;
      return {
        enonce: `Soit $f(x) = ${aAff}x^2 ${signB} ${absB}$. On admet que $f'(x) = ${deuxA}x$. Calculer $f'(${x0})$.`,
        corrige: `$f'(${x0}) = ${deuxA} \\times ${x0Aff} = ${fprime}$.`
      };
    } else {
      // Difficile : nombre dérivé via définition (limite du taux)
      const variantes = [
        () => {
          // f(x) = x², f'(a) = 2a via formule du taux qui tend vers 2a
          const a = randNonZero(-3, 3);
          const deuxA = 2 * a;
          const signDeuxA = deuxA >= 0 ? '+' : '-';
          const absDeuxA = Math.abs(deuxA);
          const aAff = a < 0 ? `(${a})` : `${a}`;
          return {
            enonce: `Soit $f(x) = x^2$. En utilisant la formule du taux de variation entre $${a}$ et $${a} + h$, conjecturer la valeur de $f'(${a})$.`,
            corrige: `Taux : $\\tau(h) = \\dfrac{f(${a}+h) - f(${a})}{h} = \\dfrac{(${a}+h)^2 - ${a*a}}{h} = \\dfrac{${a*a} ${signDeuxA} ${absDeuxA}h + h^2 - ${a*a}}{h} = ${deuxA} + h$. Quand $h$ tend vers $0$, le taux tend vers $${deuxA}$. Donc $f'(${a}) = ${deuxA}$.`
          };
        },
        () => {
          // f(x) = x³, f'(a) = 3a²
          const a = pick([1, 2, -1, -2]);
          const fp = 3 * a * a;
          return {
            enonce: `Soit $f(x) = x^3$. On admet que $f'(x) = 3x^2$. Calculer $f'(${a})$ et interpréter géométriquement.`,
            corrige: `$f'(${a}) = 3 \\times ${a*a} = ${fp}$. Géométriquement, $f'(${a})$ est le coefficient directeur de la tangente à la courbe de $f$ au point d'abscisse $${a}$.`
          };
        }
      ];
      return pick(variantes)();
    }
  },

  de_tangente_eq: (d) => {
    // Helper local : afficher x - a proprement (devient x + |a| si a < 0)
    const moinsXa = (a) => a < 0 ? `+ ${-a}` : `- ${a}`;
    // Helper local : afficher a + b proprement (b négatif → soustraction)
    const additionne = (a, b) => {
      if (b >= 0) return `${a} + ${b}`;
      else return `${a} - ${-b}`;
    };
    if (d === 1) {
      // Facile : f(x) = x², au point (a, a²), pente 2a
      const a = randNonZero(-3, 3);
      const fa = a * a;
      const fpa = 2 * a;
      // Équation : y = 2a(x - a) + a² = 2a*x - 2a² + a² = 2a*x - a²
      const ordonneeOrig = -a * a;  // car y = 2a*x - a²
      const signOO = ordonneeOrig >= 0 ? '+' : '-';
      const absOO = Math.abs(ordonneeOrig);
      const aAff = a < 0 ? `(${a})` : `${a}`;
      const fpaAff = fpa === 1 ? '' : (fpa === -1 ? '-' : `${fpa}`);
      const xMoinsA = moinsXa(a);
      return {
        enonce: `Soit $f(x) = x^2$. On admet $f'(x) = 2x$. Déterminer l'équation de la tangente à la courbe de $f$ au point d'abscisse $${a}$.`,
        corrige: `$f(${a}) = ${fa}$ et $f'(${a}) = 2 \\times ${aAff} = ${fpa}$. Équation : $y = f'(${a})(x ${xMoinsA}) + f(${a}) = ${fpa}(x ${xMoinsA}) + ${fa} = ${fpaAff}x ${signOO} ${absOO}$.`
      };
    } else if (d === 2) {
      // Moyen : f(x) = ax² + b
      const a = pick([1, 2, -1]);
      const b = randNonZero(-5, 5);
      const x0 = randNonZero(-3, 3);
      const fa = a*x0*x0 + b;
      const fpa = 2*a*x0;
      const aAff = a === 1 ? '' : (a === -1 ? '-' : `${a}`);
      const signB = b >= 0 ? '+' : '-';
      const absB = Math.abs(b);
      const deuxA = 2 * a;
      const x0Aff = x0 < 0 ? `(${x0})` : `${x0}`;
      // y = fpa(x - x0) + fa = fpa*x - fpa*x0 + fa
      const ordonneeOrig = -fpa*x0 + fa;
      const signOO = ordonneeOrig >= 0 ? '+' : '-';
      const absOO = Math.abs(ordonneeOrig);
      const fpaAff = fpa === 1 ? '' : (fpa === -1 ? '-' : (fpa === 0 ? '' : `${fpa}`));
      const xMoinsX0 = moinsXa(x0);
      const faAff = fa < 0 ? `- ${-fa}` : `+ ${fa}`;
      return {
        enonce: `Soit $f(x) = ${aAff}x^2 ${signB} ${absB}$. On admet $f'(x) = ${deuxA}x$. Déterminer l'équation de la tangente à $\\mathcal{C}_f$ au point d'abscisse $${x0}$.`,
        corrige: `$f(${x0}) = ${aAff}${x0Aff}^2 ${signB} ${absB} = ${fa}$ et $f'(${x0}) = ${deuxA} \\times ${x0Aff} = ${fpa}$. Équation : $y = ${fpa}(x ${xMoinsX0}) ${faAff} = ${fpa === 0 ? '' : `${fpaAff}x `}${signOO} ${absOO}$.`
      };
    } else {
      // Difficile : f(x) = x³, équation tangente
      const variantes = [
        () => {
          const x0 = pick([1, 2, -1, -2]);
          const fa = x0 * x0 * x0;
          const fpa = 3 * x0 * x0;
          // y = fpa(x - x0) + fa = fpa*x - fpa*x0 + fa
          const ordonneeOrig = -fpa*x0 + fa;
          const signOO = ordonneeOrig >= 0 ? '+' : '-';
          const absOO = Math.abs(ordonneeOrig);
          const x0Aff = x0 < 0 ? `(${x0})` : `${x0}`;
          const xMoinsX0 = moinsXa(x0);
          const faAff = fa < 0 ? `- ${-fa}` : `+ ${fa}`;
          return {
            enonce: `Soit $f(x) = x^3$. On admet $f'(x) = 3x^2$. Déterminer l'équation de la tangente à $\\mathcal{C}_f$ au point d'abscisse $${x0}$.`,
            corrige: `$f(${x0}) = ${x0Aff}^3 = ${fa}$ et $f'(${x0}) = 3 \\times ${x0Aff}^2 = 3 \\times ${x0*x0} = ${fpa}$. Équation : $y = ${fpa}(x ${xMoinsX0}) ${faAff} = ${fpa}x ${signOO} ${absOO}$.`
          };
        }
      ];
      return pick(variantes)();
    }
  },

  de_fonc_derivee: (d) => {
    if (d === 1) {
      // Facile : f(x) = ax + b → f'(x) = a
      const variantes = [
        () => {
          const a = randNonZero(-5, 5);
          const b = randNonZero(-9, 9);
          const aAff = a === 1 ? '' : (a === -1 ? '-' : `${a}`);
          const signB = b >= 0 ? '+' : '-';
          const absB = Math.abs(b);
          return {
            enonce: `Calculer la fonction dérivée de $f(x) = ${aAff}x ${signB} ${absB}$.`,
            corrige: `La dérivée d'une fonction affine $ax + b$ est la fonction constante $a$. Donc $f'(x) = ${a}$.`
          };
        },
        () => {
          const a = randNonZero(-4, 4);
          const aAff = a === 1 ? '' : (a === -1 ? '-' : `${a}`);
          const deuxA = 2*a;
          return {
            enonce: `Calculer la fonction dérivée de $f(x) = ${aAff}x^2$.`,
            corrige: `On utilise $(x^2)' = 2x$, donc $f'(x) = ${aAff} \\times 2x = ${deuxA}x$.`
          };
        }
      ];
      return pick(variantes)();
    } else if (d === 2) {
      // Moyen : f(x) = ax² + bx + c
      const a = randNonZero(-3, 3);
      const b = randNonZero(-5, 5);
      const c = randNonZero(-9, 9);
      const aAff = a === 1 ? '' : (a === -1 ? '-' : `${a}`);
      const signB = b >= 0 ? '+' : '-';
      const absB = Math.abs(b);
      const signC = c >= 0 ? '+' : '-';
      const absC = Math.abs(c);
      const deuxA = 2 * a;
      const deuxAaff = deuxA === 1 ? '' : (deuxA === -1 ? '-' : `${deuxA}`);
      return {
        enonce: `Calculer la fonction dérivée de $f(x) = ${aAff}x^2 ${signB} ${absB}x ${signC} ${absC}$.`,
        corrige: `On dérive terme à terme : $(x^2)' = 2x$, $(x)' = 1$, et la constante dérive en $0$. Donc $f'(x) = ${deuxAaff}x ${signB} ${absB}$.`
      };
    } else {
      // Difficile : f(x) = ax³ + bx² + cx + d
      const a = pick([1, 2, -1]);
      const b = randNonZero(-3, 3);
      const c = randNonZero(-5, 5);
      const d_const = randNonZero(-7, 7);
      const aAff = a === 1 ? '' : (a === -1 ? '-' : `${a}`);
      const signB = b >= 0 ? '+' : '-';
      const absB = Math.abs(b);
      const signC = c >= 0 ? '+' : '-';
      const absC = Math.abs(c);
      const signD = d_const >= 0 ? '+' : '-';
      const absD = Math.abs(d_const);
      const triA = 3 * a;
      const triAaff = triA === 1 ? '' : (triA === -1 ? '-' : `${triA}`);
      const deuxB = 2 * b;
      const signDeuxB = deuxB >= 0 ? '+' : '-';
      const absDeuxB = Math.abs(deuxB);
      return {
        enonce: `Calculer la fonction dérivée de $f(x) = ${aAff}x^3 ${signB} ${absB}x^2 ${signC} ${absC}x ${signD} ${absD}$.`,
        corrige: `On utilise $(x^3)' = 3x^2$, $(x^2)' = 2x$, $(x)' = 1$, $(\\text{constante})' = 0$. Donc $f'(x) = ${triAaff}x^2 ${signDeuxB} ${absDeuxB}x ${signC} ${absC}$.`
      };
    }
  },

  de_signe_derivee: (d) => {
    if (d === 1) {
      // Facile : f'(x) = ax + b affine, signe selon a
      const a = randNonZero(-3, 3);
      const b = randNonZero(-5, 5);
      // f'(x) = 0 quand x = -b/a
      // Pour simplicité, on prend -b/a entier
      const x0 = pick([-2, -1, 0, 1, 2]);
      const aReal = randNonZero(-2, 2);
      const bReal = -aReal * x0;
      const signB = bReal >= 0 ? '+' : '-';
      const absB = Math.abs(bReal);
      const aAff = aReal === 1 ? '' : (aReal === -1 ? '-' : `${aReal}`);
      const sens1 = aReal > 0 ? 'décroissante' : 'croissante';
      const sens2 = aReal > 0 ? 'croissante' : 'décroissante';
      return {
        enonce: `On donne $f'(x) = ${aAff}x ${signB} ${absB}$. Étudier le signe de $f'$ et en déduire les variations de $f$.`,
        corrige: `$f'(x) = 0 \\Leftrightarrow ${aAff}x = ${-bReal} \\Leftrightarrow x = ${x0}$. Le coefficient de $x$ est $${aReal} ${aReal > 0 ? '> 0' : '< 0'}$. Donc $f'(x) < 0$ sur $]-\\infty\\,;\\,${x0}[$ et $f'(x) > 0$ sur $]${x0}\\,;\\,+\\infty[$. La fonction $f$ est donc **${sens1}** sur $]-\\infty\\,;\\,${x0}]$ et **${sens2}** sur $[${x0}\\,;\\,+\\infty[$.`
      };
    } else if (d === 2) {
      // Moyen : f(x) = x² + bx + c, donc f'(x) = 2x + b
      const b = randNonZero(-6, 6);
      // Pas besoin de c pour cet exercice
      // f'(x) = 2x + b, s'annule en x = -b/2
      const x0 = -b/2;
      const x0Entier = Number.isInteger(x0);
      const x0Aff = x0Entier ? `${x0}` : `\\dfrac{${-b}}{2}`;
      const signB = b >= 0 ? '+' : '-';
      const absB = Math.abs(b);
      return {
        enonce: `Soit $f$ telle que $f'(x) = 2x ${signB} ${absB}$. Étudier le signe de $f'$ et en déduire les variations de $f$.`,
        corrige: `$f'(x) = 0 \\Leftrightarrow 2x = ${-b} \\Leftrightarrow x = ${x0Aff}$. Le coefficient de $x$ est $2 > 0$, donc $f'(x) < 0$ sur $]-\\infty\\,;\\,${x0Aff}[$ et $f'(x) > 0$ sur $]${x0Aff}\\,;\\,+\\infty[$. La fonction $f$ est donc **décroissante** sur $]-\\infty\\,;\\,${x0Aff}]$ et **croissante** sur $[${x0Aff}\\,;\\,+\\infty[$. Elle admet un minimum en $x = ${x0Aff}$.`
      };
    } else {
      // Difficile : f'(x) = 3x² + bx + c, ou f'(x) = a(x-r1)(x-r2)
      const variantes = [
        () => {
          // f'(x) = (x - r1)(x - r2) avec r1 < r2
          let r1 = randNonZero(-3, 3);
          let r2 = randNonZero(-3, 3);
          while (r2 === r1) r2 = randNonZero(-3, 3);
          const racines = [r1, r2].sort((a, b) => a - b);
          const [rA, rB] = racines;
          const rAaff = rA < 0 ? `+ ${-rA}` : `- ${rA}`;
          const rBaff = rB < 0 ? `+ ${-rB}` : `- ${rB}`;
          return {
            enonce: `Soit $f$ telle que $f'(x) = (x ${rAaff})(x ${rBaff})$. Étudier le signe de $f'$ et donner les variations de $f$.`,
            corrige: `Le coefficient dominant de $f'$ est $1 > 0$, donc $f'(x) > 0$ à l'extérieur des racines et $f'(x) < 0$ entre elles. Concrètement : $f'(x) > 0$ sur $]-\\infty\\,;\\,${rA}[ \\cup ]${rB}\\,;\\,+\\infty[$ et $f'(x) < 0$ sur $]${rA}\\,;\\,${rB}[$. Donc $f$ est **croissante** sur $]-\\infty\\,;\\,${rA}]$, **décroissante** sur $[${rA}\\,;\\,${rB}]$, et **croissante** sur $[${rB}\\,;\\,+\\infty[$. Maximum en $x = ${rA}$, minimum en $x = ${rB}$.`
          };
        },
        () => {
          // f'(x) = -(x - r1)(x - r2), coefficient négatif
          let r1 = randNonZero(-3, 3);
          let r2 = randNonZero(-3, 3);
          while (r2 === r1) r2 = randNonZero(-3, 3);
          const racines = [r1, r2].sort((a, b) => a - b);
          const [rA, rB] = racines;
          const rAaff = rA < 0 ? `+ ${-rA}` : `- ${rA}`;
          const rBaff = rB < 0 ? `+ ${-rB}` : `- ${rB}`;
          return {
            enonce: `Soit $f$ telle que $f'(x) = -(x ${rAaff})(x ${rBaff})$. Étudier le signe de $f'$ et donner les variations de $f$.`,
            corrige: `Le coefficient dominant de $f'$ est $-1 < 0$, donc $f'(x) < 0$ à l'extérieur des racines et $f'(x) > 0$ entre elles. Concrètement : $f'(x) < 0$ sur $]-\\infty\\,;\\,${rA}[ \\cup ]${rB}\\,;\\,+\\infty[$ et $f'(x) > 0$ sur $]${rA}\\,;\\,${rB}[$. Donc $f$ est **décroissante** sur $]-\\infty\\,;\\,${rA}]$, **croissante** sur $[${rA}\\,;\\,${rB}]$, et **décroissante** sur $[${rB}\\,;\\,+\\infty[$. Minimum en $x = ${rA}$, maximum en $x = ${rB}$.`
          };
        }
      ];
      return pick(variantes)();
    }
  },

  tc_lire: (d) => {
    // Contextes possibles
    const contextes = [
      { sujet: 'élèves d\'un lycée', critA: ['Filles', 'Garçons'], critB: ['Externes', 'Demi-pensionnaires'] },
      { sujet: 'salariés d\'une entreprise', critA: ['Femmes', 'Hommes'], critB: ['Cadres', 'Non-cadres'] },
      { sujet: 'spectateurs d\'un cinéma', critA: ['Adultes', 'Enfants'], critB: ['Comédie', 'Action'] },
      { sujet: 'clients d\'un café', critA: ['Habitués', 'Occasionnels'], critB: ['Café', 'Thé'] }
    ];
    const ctx = pick(contextes);
    // Effectifs (4 cases)
    const a11 = rand(20, 80);
    const a12 = rand(20, 80);
    const a21 = rand(20, 80);
    const a22 = rand(20, 80);
    const l1 = a11 + a12, l2 = a21 + a22;
    const c1 = a11 + a21, c2 = a12 + a22;
    const total = l1 + l2;
    const tab = `
      <table class="tableau-croise">
        <tr><th></th><th>${ctx.critB[0]}</th><th>${ctx.critB[1]}</th><th class="total">Total</th></tr>
        <tr><th>${ctx.critA[0]}</th><td>${a11}</td><td>${a12}</td><td class="total">${l1}</td></tr>
        <tr><th>${ctx.critA[1]}</th><td>${a21}</td><td>${a22}</td><td class="total">${l2}</td></tr>
        <tr><th class="total">Total</th><td class="total">${c1}</td><td class="total">${c2}</td><td class="total">${total}</td></tr>
      </table>
    `;
    if (d === 1) {
      const cible = pick(['ligne', 'colonne', 'total']);
      let question, reponse;
      if (cible === 'ligne') {
        question = `Combien y a-t-il de ${ctx.critA[0].toLowerCase()} au total ?`;
        reponse = `${l1} ${ctx.critA[0].toLowerCase()} au total (lecture directe de la marge).`;
      } else if (cible === 'colonne') {
        question = `Combien y a-t-il de ${ctx.critB[0].toLowerCase()} au total ?`;
        reponse = `${c1} ${ctx.critB[0].toLowerCase()} au total (lecture directe de la marge).`;
      } else {
        question = `Quel est l'effectif total ?`;
        reponse = `Effectif total : $${total}$.`;
      }
      return {
        enonce: `Le tableau ci-dessous donne la répartition de ${ctx.sujet}. ${question}`,
        tableau: tab,
        corrige: reponse
      };
    } else if (d === 2) {
      const cible = pick(['ligne', 'colonne']);
      let effectif, libelle;
      if (cible === 'ligne') {
        effectif = l1; libelle = ctx.critA[0];
      } else {
        effectif = c1; libelle = ctx.critB[0];
      }
      const freq = effectif / total;
      const freqPct = (freq * 100).toFixed(1).replace('.', '{,}');
      return {
        enonce: `Tableau de répartition de ${ctx.sujet}. Calculer la fréquence (en %) de "${libelle}" dans la population totale.`,
        tableau: tab,
        corrige: `Fréquence : $\\dfrac{${effectif}}{${total}} = ${freq.toFixed(3).replace('.', '{,}')} \\approx ${freqPct}\\,\\%$.`
      };
    } else {
      const freqInter = a11 / total;
      const freqPct = (freqInter * 100).toFixed(1).replace('.', '{,}');
      return {
        enonce: `Tableau de répartition de ${ctx.sujet}. Quelle proportion (en %) de la population totale est à la fois "${ctx.critA[0]}" ET "${ctx.critB[0]}" ?`,
        tableau: tab,
        corrige: `On lit à l'intersection ligne "${ctx.critA[0]}" / colonne "${ctx.critB[0]}" : $${a11}$ individus. Proportion : $\\dfrac{${a11}}{${total}} \\approx ${freqPct}\\,\\%$.`
      };
    }
  },

  tc_freq_cond: (d) => {
    const contextes = [
      { sujet: 'élèves', critA: ['Filles', 'Garçons'], critB: ['Externes', 'DP'] },
      { sujet: 'clients', critA: ['Membres', 'Non-membres'], critB: ['Acheteurs', 'Non-acheteurs'] },
      { sujet: 'voyageurs', critA: ['Adultes', 'Enfants'], critB: ['1re classe', '2e classe'] }
    ];
    const ctx = pick(contextes);
    const a11 = rand(30, 80);
    const a12 = rand(30, 80);
    const a21 = rand(30, 80);
    const a22 = rand(30, 80);
    const l1 = a11 + a12, l2 = a21 + a22;
    const c1 = a11 + a21, c2 = a12 + a22;
    const total = l1 + l2;
    const tab = `
      <table class="tableau-croise">
        <tr><th></th><th>${ctx.critB[0]}</th><th>${ctx.critB[1]}</th><th class="total">Total</th></tr>
        <tr><th>${ctx.critA[0]}</th><td>${a11}</td><td>${a12}</td><td class="total">${l1}</td></tr>
        <tr><th>${ctx.critA[1]}</th><td>${a21}</td><td>${a22}</td><td class="total">${l2}</td></tr>
        <tr><th class="total">Total</th><td class="total">${c1}</td><td class="total">${c2}</td><td class="total">${total}</td></tr>
      </table>
    `;
    if (d === 1) {
      const freq = a11 / l1;
      const freqPct = (freq * 100).toFixed(1).replace('.', '{,}');
      return {
        enonce: `Tableau de répartition des ${ctx.sujet}. Parmi les "${ctx.critA[0]}", quelle est la fréquence (en %) de "${ctx.critB[0]}" ?`,
        tableau: tab,
        corrige: `On restreint l'étude aux ${ctx.critA[0]} (total : $${l1}$). Parmi eux, $${a11}$ sont "${ctx.critB[0]}". Fréquence conditionnelle : $\\dfrac{${a11}}{${l1}} \\approx ${freqPct}\\,\\%$.`
      };
    } else if (d === 2) {
      const freq1 = a11 / l1;
      const freq2 = a21 / l2;
      const f1Pct = (freq1 * 100).toFixed(1).replace('.', '{,}');
      const f2Pct = (freq2 * 100).toFixed(1).replace('.', '{,}');
      const comp = freq1 > freq2 ? 'plus' : 'moins';
      return {
        enonce: `Tableau de répartition des ${ctx.sujet}. Compare la proportion de "${ctx.critB[0]}" parmi les "${ctx.critA[0]}" avec celle parmi les "${ctx.critA[1]}".`,
        tableau: tab,
        corrige: `Parmi les "${ctx.critA[0]}" : $\\dfrac{${a11}}{${l1}} \\approx ${f1Pct}\\,\\%$. Parmi les "${ctx.critA[1]}" : $\\dfrac{${a21}}{${l2}} \\approx ${f2Pct}\\,\\%$. Les "${ctx.critA[0]}" sont donc proportionnellement **${comp}** souvent "${ctx.critB[0]}" que les "${ctx.critA[1]}".`
      };
    } else {
      const freqMarg = c1 / total;
      const freqCondA = a11 / l1;
      const fmPct = (freqMarg * 100).toFixed(1).replace('.', '{,}');
      const fcPct = (freqCondA * 100).toFixed(1).replace('.', '{,}');
      const relation = Math.abs(freqMarg - freqCondA) < 0.03
        ? 'sont proches : le critère "' + ctx.critA[0] + '" semble peu influencer "' + ctx.critB[0] + '"'
        : 'diffèrent : le critère "' + ctx.critA[0] + '" semble influencer "' + ctx.critB[0] + '"';
      return {
        enonce: `Tableau de répartition des ${ctx.sujet}. Compare la fréquence marginale de "${ctx.critB[0]}" (dans toute la population) à la fréquence conditionnelle de "${ctx.critB[0]}" parmi les "${ctx.critA[0]}". Que peut-on en conclure ?`,
        tableau: tab,
        corrige: `Fréquence marginale : $\\dfrac{${c1}}{${total}} \\approx ${fmPct}\\,\\%$. Fréquence conditionnelle (parmi les ${ctx.critA[0]}) : $\\dfrac{${a11}}{${l1}} \\approx ${fcPct}\\,\\%$. Ces deux fréquences ${relation}.`
      };
    }
  },

  tc_completer: (d) => {
    const contextes = [
      { sujet: 'élèves', critA: ['Filles', 'Garçons'], critB: ['Externes', 'DP'] },
      { sujet: 'salariés', critA: ['Femmes', 'Hommes'], critB: ['Cadres', 'Non-cadres'] },
      { sujet: 'clients', critA: ['Adultes', 'Enfants'], critB: ['Habitués', 'Nouveaux'] }
    ];
    const ctx = pick(contextes);
    const a11 = rand(20, 80);
    const a12 = rand(20, 80);
    const a21 = rand(20, 80);
    const a22 = rand(20, 80);
    const l1 = a11 + a12, l2 = a21 + a22;
    const c1 = a11 + a21, c2 = a12 + a22;
    const total = l1 + l2;
    if (d === 1) {
      const tab = `
        <table class="tableau-croise">
          <tr><th></th><th>${ctx.critB[0]}</th><th>${ctx.critB[1]}</th><th class="total">Total</th></tr>
          <tr><th>${ctx.critA[0]}</th><td>${a11}</td><td>${a12}</td><td class="total">${l1}</td></tr>
          <tr><th>${ctx.critA[1]}</th><td>${a21}</td><td class="inconnu">?</td><td class="total">${l2}</td></tr>
          <tr><th class="total">Total</th><td class="total">${c1}</td><td class="total">${c2}</td><td class="total">${total}</td></tr>
        </table>
      `;
      return {
        enonce: `Compléter la case manquante du tableau ci-dessous (effectifs des ${ctx.sujet}).`,
        tableau: tab,
        corrige: `Sur la ligne "${ctx.critA[1]}", le total est $${l2}$ et on a déjà $${a21}$ "${ctx.critB[0]}". Donc la case manquante vaut $${l2} - ${a21} = ${a22}$. (On peut aussi vérifier avec la colonne : $${c2} - ${a12} = ${a22}$.)`
      };
    } else if (d === 2) {
      const tab = `
        <table class="tableau-croise">
          <tr><th></th><th>${ctx.critB[0]}</th><th>${ctx.critB[1]}</th><th class="total">Total</th></tr>
          <tr><th>${ctx.critA[0]}</th><td>${a11}</td><td>${a12}</td><td class="total">${l1}</td></tr>
          <tr><th>${ctx.critA[1]}</th><td class="inconnu">?</td><td class="inconnu">?</td><td class="total">${l2}</td></tr>
          <tr><th class="total">Total</th><td class="total">${c1}</td><td class="total">${c2}</td><td class="total">${total}</td></tr>
        </table>
      `;
      return {
        enonce: `Compléter les cases manquantes du tableau ci-dessous (${ctx.sujet}).`,
        tableau: tab,
        corrige: `Pour la case "${ctx.critA[1]} / ${ctx.critB[0]}" : on utilise la colonne "${ctx.critB[0]}" : $${c1} - ${a11} = ${a21}$. Pour la case "${ctx.critA[1]} / ${ctx.critB[1]}" : $${c2} - ${a12} = ${a22}$. (Vérification : $${a21} + ${a22} = ${l2}$ ✓.)`
      };
    } else {
      const tab = `
        <table class="tableau-croise">
          <tr><th></th><th>${ctx.critB[0]}</th><th>${ctx.critB[1]}</th><th class="total">Total</th></tr>
          <tr><th>${ctx.critA[0]}</th><td>${a11}</td><td class="inconnu">?</td><td class="total">${l1}</td></tr>
          <tr><th>${ctx.critA[1]}</th><td class="inconnu">?</td><td class="inconnu">?</td><td class="total">${l2}</td></tr>
          <tr><th class="total">Total</th><td class="total">${c1}</td><td class="total">${c2}</td><td class="total">${total}</td></tr>
        </table>
      `;
      return {
        enonce: `Compléter toutes les cases manquantes du tableau ci-dessous (${ctx.sujet}).`,
        tableau: tab,
        corrige: `Ligne "${ctx.critA[0]}" : $${l1} - ${a11} = ${a12}$. Colonne "${ctx.critB[0]}" : $${c1} - ${a11} = ${a21}$. Pour la dernière case "${ctx.critA[1]} / ${ctx.critB[1]}" : par ligne $${l2} - ${a21} = ${a22}$, ou par colonne $${c2} - ${a12} = ${a22}$ (cohérent ✓).`
      };
    }
  },

  pc_tableau: (d) => {
    const contextes = [
      { sujet: 'élèves', critA: ['Garçons', 'Filles'], critB: ['Aiment maths', 'N\'aiment pas maths'] },
      { sujet: 'clients', critA: ['Hommes', 'Femmes'], critB: ['Satisfaits', 'Insatisfaits'] },
      { sujet: 'voyageurs', critA: ['Adultes', 'Enfants'], critB: ['Aller-retour', 'Aller simple'] }
    ];
    const ctx = pick(contextes);
    const a11 = rand(40, 90);
    const a12 = rand(15, 50);
    const a21 = rand(20, 60);
    const a22 = rand(15, 40);
    const l1 = a11 + a12, l2 = a21 + a22;
    const c1 = a11 + a21, c2 = a12 + a22;
    const total = l1 + l2;
    const tab = `
      <table class="tableau-croise">
        <tr><th></th><th>${ctx.critB[0]}</th><th>${ctx.critB[1]}</th><th class="total">Total</th></tr>
        <tr><th>${ctx.critA[0]}</th><td>${a11}</td><td>${a12}</td><td class="total">${l1}</td></tr>
        <tr><th>${ctx.critA[1]}</th><td>${a21}</td><td>${a22}</td><td class="total">${l2}</td></tr>
        <tr><th class="total">Total</th><td class="total">${c1}</td><td class="total">${c2}</td><td class="total">${total}</td></tr>
      </table>
    `;
    if (d === 1) {
      const proba = l1 / total;
      const probaAff = proba.toFixed(3).replace('.', '{,}');
      return {
        enonce: `Tableau croisé des ${ctx.sujet}. On choisit un individu au hasard. Notons $A$ : "l'individu est ${ctx.critA[0].toLowerCase()}". Calculer $P(A)$.`,
        tableau: tab,
        corrige: `$P(A) = \\dfrac{\\text{nb de } ${ctx.critA[0]}}{\\text{total}} = \\dfrac{${l1}}{${total}} \\approx ${probaAff}$.`
      };
    } else if (d === 2) {
      const proba = a11 / l1;
      const probaAff = proba.toFixed(3).replace('.', '{,}');
      return {
        enonce: `Tableau croisé des ${ctx.sujet}. On choisit un individu au hasard. Notons $A$ : "l'individu est ${ctx.critA[0].toLowerCase()}" et $B$ : "${ctx.critB[0].toLowerCase()}". Calculer $P_A(B)$.`,
        tableau: tab,
        corrige: `$P_A(B)$ est la probabilité d'être "${ctx.critB[0]}" sachant qu'on est "${ctx.critA[0]}". On se restreint donc aux $${l1}$ "${ctx.critA[0]}", parmi lesquels $${a11}$ sont aussi "${ctx.critB[0]}". $P_A(B) = \\dfrac{${a11}}{${l1}} \\approx ${probaAff}$.`
      };
    } else {
      const probaInter = a11 / total;
      const probaA = l1 / total;
      const probaCond = a11 / l1;
      const piAff = probaInter.toFixed(3).replace('.', '{,}');
      const paAff = probaA.toFixed(3).replace('.', '{,}');
      const pcAff = probaCond.toFixed(3).replace('.', '{,}');
      return {
        enonce: `Tableau croisé des ${ctx.sujet}. On choisit un individu au hasard. Soit $A$ : "${ctx.critA[0].toLowerCase()}" et $B$ : "${ctx.critB[0].toLowerCase()}". Calculer $P(A \\cap B)$ puis $P_A(B)$ par la formule $P_A(B) = \\dfrac{P(A \\cap B)}{P(A)}$.`,
        tableau: tab,
        corrige: `$P(A \\cap B) = \\dfrac{${a11}}{${total}} \\approx ${piAff}$ et $P(A) = \\dfrac{${l1}}{${total}} \\approx ${paAff}$. Donc $P_A(B) = \\dfrac{P(A \\cap B)}{P(A)} = \\dfrac{${a11}/${total}}{${l1}/${total}} = \\dfrac{${a11}}{${l1}} \\approx ${pcAff}$.`
      };
    }
  },

  pc_independance: (d) => {
    if (d === 1) {
      const N = 100;
      const p = pick([0.4, 0.5, 0.6]);
      const q = pick([0.3, 0.4, 0.5]);
      const a11 = Math.round(p * q * N);
      const a12 = Math.round(p * (1-q) * N);
      const a21 = Math.round((1-p) * q * N);
      const a22 = N - a11 - a12 - a21;
      const l1 = a11 + a12, l2 = a21 + a22;
      const c1 = a11 + a21, c2 = a12 + a22;
      const total = l1 + l2;
      const tab = `
        <table class="tableau-croise">
          <tr><th></th><th>B</th><th>non B</th><th class="total">Total</th></tr>
          <tr><th>A</th><td>${a11}</td><td>${a12}</td><td class="total">${l1}</td></tr>
          <tr><th>non A</th><td>${a21}</td><td>${a22}</td><td class="total">${l2}</td></tr>
          <tr><th class="total">Total</th><td class="total">${c1}</td><td class="total">${c2}</td><td class="total">${total}</td></tr>
        </table>
      `;
      const pA = (l1/total).toFixed(2).replace('.', '{,}');
      const pB = (c1/total).toFixed(2).replace('.', '{,}');
      const pAB = (a11/total).toFixed(2).replace('.', '{,}');
      const pAxpB = ((l1*c1)/(total*total)).toFixed(2).replace('.', '{,}');
      const independants = Math.abs(a11/total - (l1*c1)/(total*total)) < 0.005;
      return {
        enonce: `Tableau d'effectifs pour deux évènements $A$ et $B$. Les évènements $A$ et $B$ sont-ils indépendants ?`,
        tableau: tab,
        corrige: `$P(A) = ${pA}$, $P(B) = ${pB}$. $P(A) \\times P(B) = ${pAxpB}$. $P(A \\cap B) = \\dfrac{${a11}}{${total}} = ${pAB}$. ${independants ? 'On a $P(A) \\times P(B) = P(A \\cap B)$ : les évènements sont **indépendants**.' : 'On a $P(A) \\times P(B) \\neq P(A \\cap B)$ : les évènements ne sont **pas indépendants**.'}`
      };
    } else if (d === 2) {
      const a11 = rand(30, 60);
      const a12 = rand(15, 40);
      const a21 = rand(20, 50);
      const a22 = rand(40, 80);
      const l1 = a11 + a12, l2 = a21 + a22;
      const c1 = a11 + a21, c2 = a12 + a22;
      const total = l1 + l2;
      const tab = `
        <table class="tableau-croise">
          <tr><th></th><th>B</th><th>non B</th><th class="total">Total</th></tr>
          <tr><th>A</th><td>${a11}</td><td>${a12}</td><td class="total">${l1}</td></tr>
          <tr><th>non A</th><td>${a21}</td><td>${a22}</td><td class="total">${l2}</td></tr>
          <tr><th class="total">Total</th><td class="total">${c1}</td><td class="total">${c2}</td><td class="total">${total}</td></tr>
        </table>
      `;
      const pB = (c1/total).toFixed(3).replace('.', '{,}');
      const pBsA = (a11/l1).toFixed(3).replace('.', '{,}');
      return {
        enonce: `Tableau d'effectifs. Calculer $P(B)$ et $P_A(B)$. Les évènements sont-ils indépendants ?`,
        tableau: tab,
        corrige: `$P(B) = \\dfrac{${c1}}{${total}} \\approx ${pB}$ et $P_A(B) = \\dfrac{${a11}}{${l1}} \\approx ${pBsA}$. Comme $P_A(B) \\neq P(B)$, les évènements $A$ et $B$ ne sont **pas indépendants**.`
      };
    } else {
      const N = 200;
      const pA = pick([0.4, 0.5, 0.6]);
      const pB = pick([0.3, 0.4]);
      const a11 = Math.round(pA * pB * N);
      return {
        enonce: `Une population de $${N}$ individus est répartie selon deux caractères $A$ et $B$. On sait que $P(A) = ${pA.toString().replace('.', '{,}')}$ et $P(B) = ${pB.toString().replace('.', '{,}')}$. Quelle devrait être la valeur de $P(A \\cap B)$ pour que $A$ et $B$ soient indépendants ? Combien d'individus cela représente-t-il ?`,
        corrige: `Pour l'indépendance : $P(A \\cap B) = P(A) \\times P(B) = ${pA.toString().replace('.', '{,}')} \\times ${pB.toString().replace('.', '{,}')} = ${(pA*pB).toFixed(2).replace('.', '{,}')}$. Cela représente $P(A \\cap B) \\times ${N} = ${a11}$ individus.`
      };
    }
  },

  ar_2epreuves: (d) => {
    // Probabilités p (P(A)), q1 (P_A(B)), q2 (P_{nonA}(B))
    const p = pick([0.3, 0.4, 0.5, 0.6, 0.7]);
    const q1 = pick([0.2, 0.4, 0.6, 0.8]);
    const q2 = pick([0.3, 0.5, 0.7]);
    const pAff = p.toString().replace('.', '{,}');
    const q1Aff = q1.toString().replace('.', '{,}');
    const q2Aff = q2.toString().replace('.', '{,}');
    const npAff = (1-p).toFixed(1).replace('.', '{,}');
    const nq1Aff = (1-q1).toFixed(1).replace('.', '{,}');
    const nq2Aff = (1-q2).toFixed(1).replace('.', '{,}');
    // SVG : arbre à 2 branches puis 2 sous-branches
    // Layout : noeud départ à gauche, A et nonA au milieu, puis 4 feuilles
    const svg = `
      <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg" font-family="serif" font-size="11">
        <!-- Branches niveau 1 -->
        <line x1="20" y1="80" x2="100" y2="40" stroke="#1e3a5f" stroke-width="1.3"/>
        <line x1="20" y1="80" x2="100" y2="120" stroke="#1e3a5f" stroke-width="1.3"/>
        <!-- Labels niveau 1 -->
        <text x="50" y="55" fill="#1e3a5f">${pAff}</text>
        <text x="50" y="115" fill="#1e3a5f">${npAff}</text>
        <!-- Noeuds niveau 1 -->
        <text x="105" y="44" fill="#1e3a5f" font-weight="500">A</text>
        <text x="105" y="124" fill="#1e3a5f" font-weight="500">A̅</text>
        <!-- Branches niveau 2 (depuis A) -->
        <line x1="125" y1="40" x2="200" y2="20" stroke="#1e3a5f" stroke-width="1.3"/>
        <line x1="125" y1="40" x2="200" y2="60" stroke="#1e3a5f" stroke-width="1.3"/>
        <!-- Branches niveau 2 (depuis nonA) -->
        <line x1="125" y1="120" x2="200" y2="100" stroke="#1e3a5f" stroke-width="1.3"/>
        <line x1="125" y1="120" x2="200" y2="140" stroke="#1e3a5f" stroke-width="1.3"/>
        <!-- Labels niveau 2 -->
        <text x="155" y="25" fill="#1e3a5f">${q1Aff}</text>
        <text x="155" y="58" fill="#1e3a5f">${nq1Aff}</text>
        <text x="155" y="105" fill="#1e3a5f">${q2Aff}</text>
        <text x="155" y="138" fill="#1e3a5f">${nq2Aff}</text>
        <!-- Feuilles -->
        <text x="205" y="24" fill="#1e3a5f" font-weight="500">B</text>
        <text x="205" y="64" fill="#1e3a5f" font-weight="500">B̅</text>
        <text x="205" y="104" fill="#1e3a5f" font-weight="500">B</text>
        <text x="205" y="144" fill="#1e3a5f" font-weight="500">B̅</text>
      </svg>
    `;
    if (d === 1) {
      // Facile : lire une probabilité conditionnelle directement sur l'arbre
      const cible = pick(['A', 'B|A', 'B|nonA']);
      let question, reponse;
      if (cible === 'A') {
        question = `Lire $P(A)$ sur l'arbre.`;
        reponse = `On lit directement sur la branche menant à $A$ : $P(A) = ${pAff}$.`;
      } else if (cible === 'B|A') {
        question = `Lire $P_A(B)$ sur l'arbre.`;
        reponse = `On lit sur la branche partant de $A$ et menant à $B$ : $P_A(B) = ${q1Aff}$.`;
      } else {
        question = `Lire $P_{\\bar{A}}(B)$ sur l'arbre.`;
        reponse = `On lit sur la branche partant de $\\bar{A}$ et menant à $B$ : $P_{\\bar{A}}(B) = ${q2Aff}$.`;
      }
      return {
        enonce: `On considère l'arbre ci-contre. ${question}`,
        svg: svg,
        corrige: reponse
      };
    } else if (d === 2) {
      // Moyen : calculer P(A ∩ B) en multipliant le long du chemin
      const proba = p * q1;
      const probaAff = proba.toFixed(2).replace('.', '{,}');
      return {
        enonce: `D'après l'arbre ci-contre, calculer $P(A \\cap B)$.`,
        svg: svg,
        corrige: `On multiplie les probabilités le long du chemin $A \\to B$ : $P(A \\cap B) = P(A) \\times P_A(B) = ${pAff} \\times ${q1Aff} = ${probaAff}$.`
      };
    } else {
      // Difficile : formule des probabilités totales pour calculer P(B)
      const proba = p * q1 + (1-p) * q2;
      const probaAff = proba.toFixed(3).replace('.', '{,}');
      const t1 = (p * q1).toFixed(2).replace('.', '{,}');
      const t2 = ((1-p) * q2).toFixed(2).replace('.', '{,}');
      return {
        enonce: `D'après l'arbre ci-contre, calculer $P(B)$ à l'aide de la formule des probabilités totales.`,
        svg: svg,
        corrige: `$P(B) = P(A \\cap B) + P(\\bar{A} \\cap B) = ${pAff} \\times ${q1Aff} + ${npAff} \\times ${q2Aff} = ${t1} + ${t2} = ${probaAff}$.`
      };
    }
  },

  ar_bernoulli: (d) => {
    // Une épreuve de Bernoulli (succès / échec) répétée n fois indépendamment
    const p = pick([0.2, 0.3, 0.4, 0.5, 0.6, 0.7]);
    const pAff = p.toString().replace('.', '{,}');
    const qAff = (1-p).toFixed(1).replace('.', '{,}');
    // Contextes
    const contextes = [
      { epreuve: 'lance un dé équilibré', succes: 'obtenir un 6', pCanon: 1/6 },
      { epreuve: 'tire au but', succes: 'marquer', pCanon: null },
      { epreuve: 'tire une boule de l\'urne avec remise', succes: 'tirer une boule rouge', pCanon: null }
    ];
    const ctxBer = pick(contextes);
    if (d === 1) {
      // Facile : n = 2, calculer P(2 succès) = p²
      const n = 2;
      const proba = p * p;
      const probaAff = proba.toFixed(2).replace('.', '{,}');
      return {
        enonce: `On répète $2$ fois et de façon indépendante une même épreuve : à chaque essai, la probabilité de "succès" est $p = ${pAff}$. Calculer la probabilité d'obtenir **deux succès**.`,
        corrige: `Les deux épreuves étant indépendantes, on multiplie les probabilités : $P(2 \\text{ succès}) = p \\times p = ${pAff} \\times ${pAff} = ${probaAff}$.`
      };
    } else if (d === 2) {
      // Moyen : n = 3, calculer P(0 succès) = (1-p)³ ou P(≥1 succès) = 1 - (1-p)³
      const n = 3;
      const probaAucun = (1-p)**3;
      const probaAuMoinsUn = 1 - probaAucun;
      const aucunAff = probaAucun.toFixed(3).replace('.', '{,}');
      const aumoinsAff = probaAuMoinsUn.toFixed(3).replace('.', '{,}');
      return {
        enonce: `On répète $3$ fois de façon indépendante une épreuve. À chaque essai, la probabilité de succès est $p = ${pAff}$. Calculer la probabilité d'obtenir **au moins un succès**.`,
        corrige: `On utilise l'évènement contraire : $P(\\text{au moins 1 succès}) = 1 - P(\\text{0 succès})$. Or $P(\\text{0 succès}) = (1-p)^3 = ${qAff}^3 \\approx ${aucunAff}$. Donc $P(\\text{au moins 1 succès}) \\approx 1 - ${aucunAff} \\approx ${aumoinsAff}$.`
      };
    } else {
      // Difficile : n = 4, calculer P(exactement 2 succès)
      const n = 4;
      // C(4,2) = 6
      const proba = 6 * p*p * (1-p)*(1-p);
      const probaAff = proba.toFixed(3).replace('.', '{,}');
      const pp = (p*p).toFixed(2).replace('.', '{,}');
      const qq = ((1-p)*(1-p)).toFixed(2).replace('.', '{,}');
      return {
        enonce: `On répète $4$ fois de façon indépendante une épreuve. À chaque essai, la probabilité de succès est $p = ${pAff}$. Calculer la probabilité d'obtenir **exactement 2 succès**.`,
        corrige: `Il y a $\\binom{4}{2} = 6$ façons de placer les 2 succès parmi les 4 essais. Chacun de ces arrangements a une probabilité $p^2 \\times (1-p)^2 = ${pp} \\times ${qq}$. Donc $P(\\text{2 succès}) = 6 \\times ${pp} \\times ${qq} \\approx ${probaAff}$.`
      };
    }
  },

  va_loi: (d) => {
    if (d === 1) {
      const variantes = [
        () => ({
          enonce: `On lance un dé équilibré à 6 faces et on note $X$ le numéro obtenu. Établir la loi de probabilité de $X$.`,
          corrige: `$X$ peut prendre les valeurs $1, 2, 3, 4, 5, 6$, chacune avec la probabilité $\\dfrac{1}{6}$. La loi est uniforme.`
        }),
        () => {
          const N = pick([10, 20, 30]);
          const rouge = Math.floor(N * 0.4);
          const bleu = Math.floor(N * 0.35);
          const vert = N - rouge - bleu;
          return {
            enonce: `Une urne contient $${N}$ boules : $${rouge}$ rouges, $${bleu}$ bleues et $${vert}$ vertes. On tire une boule au hasard, $X$ vaut $1$ si elle est rouge, $2$ si elle est bleue, $3$ si elle est verte. Donner la loi de $X$.`,
            corrige: `$P(X=1) = \\dfrac{${rouge}}{${N}}$, $P(X=2) = \\dfrac{${bleu}}{${N}}$, $P(X=3) = \\dfrac{${vert}}{${N}}$. (Somme = $1$ ✓.)`
          };
        }
      ];
      return pick(variantes)();
    } else if (d === 2) {
      const x1 = rand(1, 3), x2 = rand(4, 6), x3 = rand(7, 10);
      const p1 = pick([0.2, 0.3, 0.4]);
      const p2 = pick([0.2, 0.3]);
      const p3 = 1 - p1 - p2;
      const p1Aff = p1.toString().replace('.', ',');
      const p2Aff = p2.toString().replace('.', ',');
      const p3Aff = p3.toFixed(1).replace('.', ',');
      const tab = `
        <table class="tableau-croise">
          <tr><th>$x_i$</th><td>${x1}</td><td>${x2}</td><td>${x3}</td></tr>
          <tr><th>$P(X=x_i)$</th><td>${p1Aff}</td><td>${p2Aff}</td><td class="inconnu">?</td></tr>
        </table>
      `;
      return {
        enonce: `La variable aléatoire $X$ peut prendre les valeurs $${x1}$, $${x2}$, $${x3}$. Déterminer la probabilité manquante.`,
        tableau: tab,
        corrige: `La somme des probabilités doit être $1$ : $P(X=${x3}) = 1 - ${p1.toString().replace('.', '{,}')} - ${p2.toString().replace('.', '{,}')} = ${p3.toFixed(1).replace('.', '{,}')}$.`
      };
    } else {
      const variantes = [
        () => ({
          enonce: `On lance un dé équilibré. Si le résultat est pair, on gagne $0$ €. Si le résultat est impair et inférieur à $5$, on gagne $2$ €. Si le résultat est $5$ ou $6$, on gagne $5$ €. Soit $X$ le gain. Établir la loi de $X$.`,
          corrige: `On regroupe : Pair = {2, 4, 6}, soit 3 issues sur 6 → $P(X = 0) = \\dfrac{3}{6} = \\dfrac{1}{2}$. Impair < 5 = {1, 3}, soit 2 issues → $P(X = 2) = \\dfrac{2}{6} = \\dfrac{1}{3}$. 5 ou 6 : attention 6 est déjà pair, donc on retient seulement 5 → $P(X = 5) = \\dfrac{1}{6}$. Vérification : $\\dfrac{1}{2} + \\dfrac{1}{3} + \\dfrac{1}{6} = 1$ ✓.`
        }),
        () => {
          const N = 5;
          const rouge = 3;
          const noir = N - rouge;
          return {
            enonce: `Une urne contient $${rouge}$ boules rouges et $${noir}$ boules noires. On tire deux boules simultanément. Soit $X$ le nombre de boules rouges tirées. Établir la loi de $X$.`,
            corrige: `Nombre total de tirages possibles : $\\binom{${N}}{2} = 10$. $X = 0$ : 2 boules noires tirées, $\\binom{${noir}}{2} = 1$ cas, $P(X = 0) = \\dfrac{1}{10}$. $X = 1$ : 1 rouge et 1 noire, $\\binom{${rouge}}{1} \\times \\binom{${noir}}{1} = ${rouge*noir}$ cas, $P(X = 1) = \\dfrac{${rouge*noir}}{10}$. $X = 2$ : 2 rouges, $\\binom{${rouge}}{2} = 3$ cas, $P(X = 2) = \\dfrac{3}{10}$. (Somme = $1$ ✓.)`
          };
        }
      ];
      return pick(variantes)();
    }
  },

  va_esperance: (d) => {
    if (d === 1) {
      const x1 = rand(1, 3), x2 = rand(4, 6), x3 = rand(7, 10);
      const p1 = 0.3, p2 = 0.5, p3 = 0.2;
      const E = x1*p1 + x2*p2 + x3*p3;
      const Eaff = E.toFixed(2).replace('.', '{,}');
      const tab = `
        <table class="tableau-croise">
          <tr><th>$x_i$</th><td>${x1}</td><td>${x2}</td><td>${x3}</td></tr>
          <tr><th>$P(X=x_i)$</th><td>0,3</td><td>0,5</td><td>0,2</td></tr>
        </table>
      `;
      return {
        enonce: `La variable aléatoire $X$ suit la loi suivante. Calculer l'espérance $E(X)$.`,
        tableau: tab,
        corrige: `$E(X) = ${x1} \\times 0{,}3 + ${x2} \\times 0{,}5 + ${x3} \\times 0{,}2 = ${(x1*p1).toFixed(2).replace('.', '{,}')} + ${(x2*p2).toFixed(2).replace('.', '{,}')} + ${(x3*p3).toFixed(2).replace('.', '{,}')} = ${Eaff}$.`
      };
    } else if (d === 2) {
      const variantes = [
        () => ({
          enonce: `Un jeu consiste à miser $2$ € puis lancer un dé. Si on obtient un nombre pair, on reçoit $4$ €. Sinon on ne reçoit rien. Soit $X$ le gain algébrique. Calculer l'espérance de $X$. Le jeu est-il équitable ?`,
          corrige: `Si pair : gain = $4 - 2 = 2$ € (proba $\\dfrac{1}{2}$). Si impair : gain = $0 - 2 = -2$ € (proba $\\dfrac{1}{2}$). $E(X) = 2 \\times \\dfrac{1}{2} + (-2) \\times \\dfrac{1}{2} = 1 - 1 = 0$. L'espérance est nulle : le jeu est **équitable**.`
        }),
        () => {
          const mise = pick([2, 3, 5]);
          const gainNet = 2 * mise;
          const E = gainNet * (1/3) + (-mise) * (2/3);
          const Eaff = E.toFixed(2).replace('.', '{,}');
          return {
            enonce: `Un jeu consiste à miser $${mise}$ €. Avec probabilité $\\dfrac{1}{3}$, on récupère $${3*mise}$ €. Sinon on ne récupère rien. Soit $X$ le gain algébrique. Calculer $E(X)$ et conclure.`,
            corrige: `Si on gagne : gain = $${3*mise} - ${mise} = ${gainNet}$ € (proba $\\dfrac{1}{3}$). Si on perd : gain = $-${mise}$ € (proba $\\dfrac{2}{3}$). $E(X) = ${gainNet} \\times \\dfrac{1}{3} + (-${mise}) \\times \\dfrac{2}{3} = \\dfrac{${gainNet} - ${2*mise}}{3} = ${Eaff}$. ${E === 0 ? 'Le jeu est équitable.' : E > 0 ? 'Le jeu est favorable au joueur.' : 'Le jeu est défavorable au joueur (espérance négative).'}`
          };
        }
      ];
      return pick(variantes)();
    } else {
      const variantes = [
        () => {
          const prime = pick([100, 200, 500]);
          const probaSinistre = pick([0.05, 0.1, 0.02]);
          const cout = pick([2000, 5000, 10000]);
          const EassurAff = (prime - probaSinistre*cout).toFixed(2).replace('.', '{,}');
          return {
            enonce: `Une compagnie d'assurance propose un contrat à $${prime}$ € par an. Avec une probabilité de $${probaSinistre.toString().replace('.', '{,}')}$, un sinistre survient et la compagnie verse $${cout}$ €. Soit $X$ le gain de l'assureur. Calculer $E(X)$ et interpréter.`,
            corrige: `Pas de sinistre (probabilité $${(1-probaSinistre).toString().replace('.', '{,}')}$) : gain = $+${prime}$. Sinistre (probabilité $${probaSinistre.toString().replace('.', '{,}')}$) : gain = $${prime - cout}$. $E(X) = ${prime} \\times ${(1-probaSinistre).toString().replace('.', '{,}')} + (${prime - cout}) \\times ${probaSinistre.toString().replace('.', '{,}')} = ${EassurAff}$ €. ${prime - probaSinistre*cout > 0 ? `L'espérance est positive : le contrat est rentable pour l'assureur en moyenne.` : `L'espérance est négative : le contrat est en moyenne défavorable à l'assureur.`}`
          };
        }
      ];
      return pick(variantes)();
    }
  },

  va_bernoulli: (d) => {
    const p = pick([0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]);
    const pAff = p.toString().replace('.', '{,}');
    const qAff = (1-p).toFixed(1).replace('.', '{,}');
    if (d === 1) {
      // Facile : reconnaître/identifier une situation de Bernoulli
      const variantes = [
        () => ({
          enonce: `Une variable aléatoire $X$ ne prend que les valeurs $0$ et $1$, avec $P(X = 1) = ${pAff}$. Comment s'appelle la loi de $X$ ? Donner $P(X = 0)$.`,
          corrige: `$X$ suit une **loi de Bernoulli** de paramètre $p = ${pAff}$. On a $P(X = 0) = 1 - ${pAff} = ${qAff}$.`
        }),
        () => {
          // Dé : succès si on obtient 6
          return {
            enonce: `On lance un dé équilibré à 6 faces. Soit $X$ la variable aléatoire qui vaut $1$ si on obtient un $6$ et $0$ sinon. Justifier que $X$ suit une loi de Bernoulli et donner son paramètre.`,
            corrige: `$X$ ne prend que les valeurs $0$ et $1$ : c'est une loi de Bernoulli. Son paramètre est $p = P(X = 1) = P(\\text{obtenir un 6}) = \\dfrac{1}{6}$.`
          };
        }
      ];
      return pick(variantes)();
    } else if (d === 2) {
      // Moyen : calculer l'espérance d'une loi de Bernoulli
      return {
        enonce: `$X$ suit une loi de Bernoulli de paramètre $p = ${pAff}$. Calculer $E(X)$.`,
        corrige: `$E(X) = 0 \\times P(X = 0) + 1 \\times P(X = 1) = 0 \\times ${qAff} + 1 \\times ${pAff} = ${pAff}$. (Propriété : pour une loi de Bernoulli de paramètre $p$, $E(X) = p$.)`
      };
    } else {
      // Difficile : application contextualisée
      const variantes = [
        () => {
          // Une machine produit des pièces, p% sont défectueuses, on tire 1 pièce, X=1 si défectueuse
          const ptaux = pick([0.05, 0.1, 0.15]);
          const ptauxAff = ptaux.toString().replace('.', '{,}');
          const pctAff = (ptaux*100).toString().replace('.', '{,}');
          return {
            enonce: `Une chaîne de production fabrique des pièces dont $${pctAff}\\,\\%$ sont défectueuses. On prélève une pièce au hasard et on définit $X = 1$ si elle est défectueuse, $X = 0$ sinon. Quelle loi suit $X$ ? Calculer $E(X)$ et interpréter.`,
            corrige: `$X$ suit une loi de Bernoulli de paramètre $p = ${ptauxAff}$. $E(X) = p = ${ptauxAff}$. Cela signifie que sur un grand nombre de pièces, en moyenne $${pctAff}\\,\\%$ sont défectueuses (ce qui correspond bien au taux annoncé).`
          };
        }
      ];
      return pick(variantes)();
    }
  },

});
