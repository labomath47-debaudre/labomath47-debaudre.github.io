/* LaboMath — Générateurs terminale spé
   62 générateurs, profils : terminale spé (hors annales)
   Fichier généré automatiquement par refactor.py.
   Étend window.LM_GEN (l'objet global agrégeant tous les générateurs). */

Object.assign(window.LM_GEN ??= {}, {

  ln_simplifier: (d) => {
    if (d === 1) {
      // Facile : ln d'une puissance de e, ou ln(a)+ln(b) calculable
      const variantes = [
        () => {
          const n = rand(2, 5);
          return {
            enonce: `Simplifier $\\ln(e^{${n}})$.`,
            corrige: `D'après la propriété $\\ln(e^x) = x$ pour tout $x \\in \\mathbb{R}$, on a $\\ln(e^{${n}}) = ${n}$.`
          };
        },
        () => {
          const n = rand(2, 4);
          return {
            enonce: `Simplifier $\\ln\\left(\\dfrac{1}{e^{${n}}}\\right)$.`,
            corrige: `$\\dfrac{1}{e^{${n}}} = e^{-${n}}$. Donc $\\ln\\left(\\dfrac{1}{e^{${n}}}\\right) = \\ln(e^{-${n}}) = -${n}$.`
          };
        },
        () => ({
          enonce: `Calculer $\\ln(1)$ et $\\ln(e)$.`,
          corrige: `$\\ln(1) = 0$ (car $e^0 = 1$) et $\\ln(e) = 1$ (car $e^1 = e$).`
        })
      ];
      return pick(variantes)();
    } else if (d === 2) {
      // Moyen : utiliser ln(ab) = ln(a) + ln(b), ln(a/b), ln(a^n)
      const variantes = [
        () => {
          const a = pick([2, 3, 5, 7]);
          const b = pick([3, 5, 7]);
          return {
            enonce: `Écrire $\\ln(${a*b})$ sous la forme $\\ln(${a}) + \\ln(?)$ (vérifier que $${a} \\times ${b} = ${a*b}$).`,
            corrige: `On a $${a*b} = ${a} \\times ${b}$. Donc $\\ln(${a*b}) = \\ln(${a} \\times ${b}) = \\ln(${a}) + \\ln(${b})$.`
          };
        },
        () => {
          const a = pick([2, 3, 5]);
          const n = pick([2, 3, 4]);
          return {
            enonce: `Écrire $\\ln(${a}^{${n}})$ en fonction de $\\ln(${a})$.`,
            corrige: `D'après la propriété $\\ln(a^n) = n\\ln(a)$, on a $\\ln(${a}^{${n}}) = ${n}\\ln(${a})$.`
          };
        },
        () => {
          const a = pick([2, 3, 5, 6]);
          const b = pick([2, 3, 5]);
          if (a === b) return null;
          return {
            enonce: `Écrire $\\ln\\left(\\dfrac{${a}}{${b}}\\right)$ en fonction de $\\ln(${a})$ et $\\ln(${b})$.`,
            corrige: `D'après la propriété $\\ln\\left(\\dfrac{a}{b}\\right) = \\ln(a) - \\ln(b)$, on a $\\ln\\left(\\dfrac{${a}}{${b}}\\right) = \\ln(${a}) - \\ln(${b})$.`
          };
        }
      ];
      let q = null;
      while (!q) q = pick(variantes)();
      return q;
    } else {
      // Difficile : combiner plusieurs règles
      const variantes = [
        () => {
          // ln(a^2 * b) = 2 ln(a) + ln(b)
          const a = pick([2, 3, 5]);
          const b = pick([2, 3, 5, 7]);
          if (a === b) return null;
          return {
            enonce: `Exprimer $\\ln(${a}^2 \\times ${b})$ en fonction de $\\ln(${a})$ et $\\ln(${b})$.`,
            corrige: `$\\ln(${a}^2 \\times ${b}) = \\ln(${a}^2) + \\ln(${b}) = 2\\ln(${a}) + \\ln(${b})$.`
          };
        },
        () => {
          // Calcul exact : ln(8) en fonction de ln(2)
          const base = pick([2, 3]);
          const n = pick([2, 3, 4]);
          return {
            enonce: `Exprimer $\\ln(${Math.pow(base, n)})$ en fonction de $\\ln(${base})$.`,
            corrige: `$${Math.pow(base, n)} = ${base}^{${n}}$. Donc $\\ln(${Math.pow(base, n)}) = \\ln(${base}^{${n}}) = ${n}\\ln(${base})$.`
          };
        },
        () => {
          // Combinaison : ln(a/b^2) = ln(a) - 2 ln(b)
          const a = pick([2, 3, 5]);
          const b = pick([2, 3, 5]);
          if (a === b) return null;
          return {
            enonce: `Exprimer $\\ln\\left(\\dfrac{${a}}{${b}^2}\\right)$ en fonction de $\\ln(${a})$ et $\\ln(${b})$.`,
            corrige: `$\\ln\\left(\\dfrac{${a}}{${b}^2}\\right) = \\ln(${a}) - \\ln(${b}^2) = \\ln(${a}) - 2\\ln(${b})$.`
          };
        }
      ];
      let q = null;
      while (!q) q = pick(variantes)();
      return q;
    }
  },

  ln_equation: (d) => {
    if (d === 1) {
      // Facile : ln(x) = k → x = e^k
      const k = pick([-2, -1, 0, 1, 2, 3]);
      return {
        enonce: `Résoudre dans $\\mathbb{R}$ l'équation $\\ln(x) = ${k}$.`,
        corrige: `La fonction $\\ln$ est définie sur $]0\\,;\\,+\\infty[$. L'équation $\\ln(x) = ${k}$ équivaut à $x = e^{${k}}$. La solution est $x = e^{${k}}$.`
      };
    } else if (d === 2) {
      // Moyen : ln(ax) = k ou ln(x+b) = k
      const variantes = [
        () => {
          const a = pick([2, 3, 4, 5]);
          const k = pick([0, 1, 2]);
          return {
            enonce: `Résoudre dans $\\mathbb{R}$ l'équation $\\ln(${a}x) = ${k}$.`,
            corrige: `Il faut $${a}x > 0$, soit $x > 0$. L'équation équivaut à $${a}x = e^{${k}}$, soit $x = \\dfrac{e^{${k}}}{${a}}$. Solution : $x = \\dfrac{e^{${k}}}{${a}}$.`
          };
        },
        () => {
          const b = pick([1, 2, 3, 5]);
          const k = pick([0, 1, 2]);
          return {
            enonce: `Résoudre dans $\\mathbb{R}$ l'équation $\\ln(x + ${b}) = ${k}$.`,
            corrige: `Il faut $x + ${b} > 0$, soit $x > -${b}$. L'équation équivaut à $x + ${b} = e^{${k}}$, soit $x = e^{${k}} - ${b}$. Solution : $x = e^{${k}} - ${b}$.`
          };
        }
      ];
      return pick(variantes)();
    } else {
      // Difficile : ln(x) = ln(a) - ln(b), ou équation avec changement
      const variantes = [
        () => {
          const a = pick([6, 8, 10, 12]);
          const b = pick([2, 3, 4]);
          if (a % b !== 0) return null;
          return {
            enonce: `Résoudre dans $\\mathbb{R}$ l'équation $\\ln(x) = \\ln(${a}) - \\ln(${b})$.`,
            corrige: `Il faut $x > 0$. $\\ln(${a}) - \\ln(${b}) = \\ln\\left(\\dfrac{${a}}{${b}}\\right) = \\ln(${a/b})$. Donc $\\ln(x) = \\ln(${a/b})$, soit $x = ${a/b}$.`
          };
        },
        () => {
          // ln(x^2) = k → x = ±e^(k/2), à filtrer si on veut x > 0
          const k = pick([2, 4, 6]);
          return {
            enonce: `Résoudre dans $]0\\,;\\,+\\infty[$ l'équation $\\ln(x^2) = ${k}$.`,
            corrige: `$\\ln(x^2) = 2\\ln(x)$ (car $x > 0$). L'équation devient $2\\ln(x) = ${k}$, soit $\\ln(x) = ${k/2}$, donc $x = e^{${k/2}}$.`
          };
        }
      ];
      let q = null;
      while (!q) q = pick(variantes)();
      return q;
    }
  },

  ln_inequation: (d) => {
    if (d === 1) {
      // Facile : ln(x) > k → x > e^k, ln(x) < k → 0 < x < e^k
      const k = pick([0, 1, 2]);
      const sens = pick(['>', '<']);
      if (sens === '>') {
        return {
          enonce: `Résoudre dans $\\mathbb{R}$ l'inéquation $\\ln(x) > ${k}$.`,
          corrige: `Il faut $x > 0$. La fonction $\\ln$ est strictement croissante, donc $\\ln(x) > ${k}$ équivaut à $x > e^{${k}}$. L'ensemble des solutions est $]e^{${k}}\\,;\\,+\\infty[$.`
        };
      } else {
        return {
          enonce: `Résoudre dans $\\mathbb{R}$ l'inéquation $\\ln(x) < ${k}$.`,
          corrige: `Il faut $x > 0$. La fonction $\\ln$ est strictement croissante, donc $\\ln(x) < ${k}$ équivaut à $x < e^{${k}}$. Combiné avec $x > 0$, l'ensemble des solutions est $]0\\,;\\,e^{${k}}[$.`
        };
      }
    } else if (d === 2) {
      // Moyen : ln(ax) < k, ln(x+b) > k
      const variantes = [
        () => {
          const a = pick([2, 3, 5]);
          const k = pick([0, 1, 2]);
          return {
            enonce: `Résoudre dans $\\mathbb{R}$ l'inéquation $\\ln(${a}x) \\leq ${k}$.`,
            corrige: `Il faut $${a}x > 0$, soit $x > 0$. L'inéquation équivaut à $${a}x \\leq e^{${k}}$, soit $x \\leq \\dfrac{e^{${k}}}{${a}}$. Solutions : $\\left]0\\,;\\,\\dfrac{e^{${k}}}{${a}}\\right]$.`
          };
        },
        () => {
          const b = pick([1, 2, 3]);
          const k = pick([0, 1, 2]);
          return {
            enonce: `Résoudre dans $\\mathbb{R}$ l'inéquation $\\ln(x - ${b}) \\geq ${k}$.`,
            corrige: `Il faut $x - ${b} > 0$, soit $x > ${b}$. L'inéquation équivaut à $x - ${b} \\geq e^{${k}}$, soit $x \\geq e^{${k}} + ${b}$. Solutions : $[e^{${k}} + ${b}\\,;\\,+\\infty[$.`
          };
        }
      ];
      return pick(variantes)();
    } else {
      // Difficile : comparer deux ln
      const variantes = [
        () => {
          const a = pick([2, 3, 5]);
          return {
            enonce: `Résoudre dans $\\mathbb{R}$ l'inéquation $\\ln(${a}x) > \\ln(x+1)$.`,
            corrige: `Conditions d'existence : $${a}x > 0$ et $x + 1 > 0$, soit $x > 0$. Comme $\\ln$ est strictement croissante, on peut écrire l'équivalence : $${a}x > x + 1$, soit $${a-1}x > 1$, donc $x > \\dfrac{1}{${a-1}}$. Solutions : $\\left]\\dfrac{1}{${a-1}}\\,;\\,+\\infty\\right[$.`
          };
        }
      ];
      return pick(variantes)();
    }
  },

  ln_limites: (d) => {
    if (d === 1) {
      // Facile : limites de référence
      const variantes = [
        () => ({
          enonce: `Donner $\\lim\\limits_{x \\to +\\infty} \\ln(x)$.`,
          corrige: `$\\lim\\limits_{x \\to +\\infty} \\ln(x) = +\\infty$ (limite de référence).`
        }),
        () => ({
          enonce: `Donner $\\lim\\limits_{x \\to 0^+} \\ln(x)$.`,
          corrige: `$\\lim\\limits_{x \\to 0^+} \\ln(x) = -\\infty$ (limite de référence).`
        }),
        () => ({
          enonce: `Donner $\\lim\\limits_{x \\to +\\infty} \\dfrac{\\ln(x)}{x}$.`,
          corrige: `Par croissance comparée : $\\lim\\limits_{x \\to +\\infty} \\dfrac{\\ln(x)}{x} = 0$.`
        })
      ];
      return pick(variantes)();
    } else if (d === 2) {
      // Moyen : limite de ln(x) + ax ou ln(x) - x
      const variantes = [
        () => {
          const a = pick([2, 3, 5]);
          return {
            enonce: `Déterminer $\\lim\\limits_{x \\to +\\infty} \\left(\\ln(x) + ${a}x\\right)$.`,
            corrige: `$\\lim\\limits_{x \\to +\\infty} \\ln(x) = +\\infty$ et $\\lim\\limits_{x \\to +\\infty} ${a}x = +\\infty$. Par somme : $\\lim\\limits_{x \\to +\\infty} \\left(\\ln(x) + ${a}x\\right) = +\\infty$.`
          };
        },
        () => {
          const n = pick([2, 3]);
          return {
            enonce: `Déterminer $\\lim\\limits_{x \\to +\\infty} \\dfrac{\\ln(x)}{x^{${n}}}$.`,
            corrige: `Par croissance comparée, $\\lim\\limits_{x \\to +\\infty} \\dfrac{\\ln(x)}{x} = 0$. Comme $\\dfrac{\\ln(x)}{x^{${n}}} = \\dfrac{\\ln(x)}{x} \\times \\dfrac{1}{x^{${n-1}}}$ et $\\lim\\limits_{x \\to +\\infty} \\dfrac{1}{x^{${n-1}}} = 0$, on a $\\lim\\limits_{x \\to +\\infty} \\dfrac{\\ln(x)}{x^{${n}}} = 0$.`
          };
        }
      ];
      return pick(variantes)();
    } else {
      // Difficile : forme indéterminée x ln(x) en 0+, ou x - ln(x)
      const variantes = [
        () => ({
          enonce: `Déterminer $\\lim\\limits_{x \\to 0^+} x\\ln(x)$.`,
          corrige: `Forme indéterminée $0 \\times (-\\infty)$. Par croissance comparée (à savoir) : $\\lim\\limits_{x \\to 0^+} x\\ln(x) = 0$.`
        }),
        () => ({
          enonce: `Déterminer $\\lim\\limits_{x \\to +\\infty} \\left(x - \\ln(x)\\right)$.`,
          corrige: `Forme indéterminée $+\\infty - \\infty$. On factorise par $x$ : $x - \\ln(x) = x\\left(1 - \\dfrac{\\ln(x)}{x}\\right)$. Par croissance comparée, $\\dfrac{\\ln(x)}{x} \\to 0$, donc le facteur tend vers $1 - 0 = 1$. Comme $x \\to +\\infty$, on obtient $\\lim\\limits_{x \\to +\\infty} (x - \\ln(x)) = +\\infty$.`
        }),
        () => {
          const a = pick([2, 3, 5]);
          return {
            enonce: `Déterminer $\\lim\\limits_{x \\to +\\infty} \\left(${a}x + \\ln(x)\\right)$.`,
            corrige: `$\\lim\\limits_{x \\to +\\infty} ${a}x = +\\infty$ et $\\lim\\limits_{x \\to +\\infty} \\ln(x) = +\\infty$. Par somme : $\\lim\\limits_{x \\to +\\infty} (${a}x + \\ln(x)) = +\\infty$.`
          };
        },
        () => ({
          enonce: `Déterminer $\\lim\\limits_{x \\to +\\infty} \\dfrac{\\ln(x)}{\\sqrt{x}}$.`,
          corrige: `On écrit $\\dfrac{\\ln(x)}{\\sqrt{x}} = \\dfrac{\\ln(x)}{x} \\times \\sqrt{x}$. Par croissance comparée, $\\dfrac{\\ln(x)}{x} \\to 0$. Plus précisément, $\\dfrac{\\ln(x)}{\\sqrt{x}} = 2 \\times \\dfrac{\\ln(\\sqrt{x}^2)}{(\\sqrt{x})^2} \\times \\sqrt{x}$... Plus simplement, on pose $u = \\sqrt{x}$ : quand $x \\to +\\infty$, $u \\to +\\infty$ et $\\dfrac{\\ln(x)}{\\sqrt{x}} = \\dfrac{2\\ln(u)}{u} \\to 0$ par croissance comparée.`
        }),
        () => ({
          enonce: `Déterminer $\\lim\\limits_{x \\to 0^+} \\left(\\ln(x) + \\dfrac{1}{x}\\right)$.`,
          corrige: `Quand $x \\to 0^+$ : $\\ln(x) \\to -\\infty$ et $\\dfrac{1}{x} \\to +\\infty$. Forme indéterminée $-\\infty + \\infty$. On factorise par $\\dfrac{1}{x}$ : $\\ln(x) + \\dfrac{1}{x} = \\dfrac{1}{x}\\left(x\\ln(x) + 1\\right)$. Par croissance comparée, $x\\ln(x) \\to 0$, donc le facteur tend vers $1$. Et $\\dfrac{1}{x} \\to +\\infty$. Donc la limite vaut $+\\infty$.`
        })
      ];
      return pick(variantes)();
    }
  },

  ln_derivee: (d) => {
    if (d === 1) {
      // Facile : dérivée de ln(x) ou ln(ax)
      const variantes = [
        () => ({
          enonce: `Soit $f(x) = \\ln(x)$ pour $x > 0$. Calculer $f'(x)$.`,
          corrige: `$f'(x) = \\dfrac{1}{x}$ (dérivée de référence sur $]0\\,;\\,+\\infty[$).`
        }),
        () => {
          const a = pick([2, 3, 5]);
          const b = pick([1, 2, 3]);
          return {
            enonce: `Soit $f(x) = \\ln(${a}x + ${b})$ définie pour $x > -\\dfrac{${b}}{${a}}$. Calculer $f'(x)$.`,
            corrige: `On a $f = \\ln(u)$ avec $u(x) = ${a}x + ${b}$, donc $u'(x) = ${a}$. Formule : $f'(x) = \\dfrac{u'(x)}{u(x)} = \\dfrac{${a}}{${a}x + ${b}}$.`
          };
        }
      ];
      return pick(variantes)();
    } else if (d === 2) {
      // Moyen : ln(x^2 + 1), ln(x^2 + ax + b)
      const variantes = [
        () => ({
          enonce: `Soit $f(x) = \\ln(x^2 + 1)$. Calculer $f'(x)$.`,
          corrige: `On a $u(x) = x^2 + 1 > 0$, donc $u'(x) = 2x$. $f'(x) = \\dfrac{u'(x)}{u(x)} = \\dfrac{2x}{x^2 + 1}$.`
        }),
        () => {
          const a = pick([2, 3, 4]);
          return {
            enonce: `Soit $f(x) = \\ln(${a}x^2 + 1)$. Calculer $f'(x)$.`,
            corrige: `$u(x) = ${a}x^2 + 1$ et $u'(x) = ${2*a}x$. $f'(x) = \\dfrac{${2*a}x}{${a}x^2 + 1}$.`
          };
        }
      ];
      return pick(variantes)();
    } else {
      // Difficile : produit avec ln, ou ln d'un produit
      const variantes = [
        () => ({
          enonce: `Soit $f(x) = x\\ln(x)$ pour $x > 0$. Calculer $f'(x)$.`,
          corrige: `On dérive avec la formule $(uv)' = u'v + uv'$, avec $u(x) = x$ et $v(x) = \\ln(x)$. $u'(x) = 1$, $v'(x) = \\dfrac{1}{x}$. $f'(x) = 1 \\times \\ln(x) + x \\times \\dfrac{1}{x} = \\ln(x) + 1$.`
        }),
        () => {
          const a = pick([2, 3]);
          return {
            enonce: `Soit $f(x) = (\\ln(x))^{${a}}$ pour $x > 0$. Calculer $f'(x)$.`,
            corrige: `$f(x) = u(x)^{${a}}$ avec $u(x) = \\ln(x)$, donc $u'(x) = \\dfrac{1}{x}$. Formule : $f'(x) = ${a}(u(x))^{${a-1}} \\times u'(x) = ${a}(\\ln(x))^{${a-1}} \\times \\dfrac{1}{x} = \\dfrac{${a}(\\ln(x))^{${a-1}}}{x}$.`
          };
        }
      ];
      return pick(variantes)();
    }
  },

  ln_eq_exp: (d) => {
    if (d === 1) {
      // Facile : e^x = k → x = ln(k)
      const k = pick([2, 3, 5, 7, 10]);
      return {
        enonce: `Résoudre dans $\\mathbb{R}$ l'équation $e^x = ${k}$.`,
        corrige: `En prenant le logarithme : $\\ln(e^x) = \\ln(${k})$, soit $x = \\ln(${k})$.`
      };
    } else if (d === 2) {
      // Moyen : e^(ax+b) = k
      const variantes = [
        () => {
          const a = pick([2, 3, 4]);
          const b = pick([1, 2, 3]);
          const k = pick([2, 5, 7]);
          return {
            enonce: `Résoudre dans $\\mathbb{R}$ l'équation $e^{${a}x + ${b}} = ${k}$.`,
            corrige: `En appliquant $\\ln$ : $${a}x + ${b} = \\ln(${k})$. D'où $x = \\dfrac{\\ln(${k}) - ${b}}{${a}}$.`
          };
        },
        () => {
          const k = pick([3, 5, 7]);
          return {
            enonce: `Résoudre dans $\\mathbb{R}$ l'équation $\\ln(x) = ${k}$ et donner une valeur approchée à $10^{-2}$ près (sans calculatrice : indiquer la forme exacte).`,
            corrige: `$\\ln(x) = ${k}$ avec $x > 0$ équivaut à $x = e^{${k}}$. C'est la forme exacte de la solution.`
          };
        }
      ];
      return pick(variantes)();
    } else {
      // Difficile : changement de variable, équation de type e^(2x) - 3 e^x + 2 = 0
      const variantes = [
        () => {
          return {
            enonce: `Résoudre dans $\\mathbb{R}$ l'équation $e^{2x} - 3e^x + 2 = 0$.`,
            corrige: `Posons $X = e^x$ avec $X > 0$. L'équation devient $X^2 - 3X + 2 = 0$. Discriminant : $\\Delta = 9 - 8 = 1$. Solutions : $X = \\dfrac{3 \\pm 1}{2}$, soit $X = 1$ ou $X = 2$. Donc $e^x = 1$ (soit $x = 0$) ou $e^x = 2$ (soit $x = \\ln(2)$). Les solutions sont $x = 0$ et $x = \\ln(2)$.`
          };
        },
        () => {
          return {
            enonce: `Résoudre dans $]0\\,;\\,+\\infty[$ l'équation $(\\ln(x))^2 - \\ln(x) - 2 = 0$.`,
            corrige: `Posons $X = \\ln(x)$. L'équation devient $X^2 - X - 2 = 0$. Discriminant : $\\Delta = 1 + 8 = 9$. Solutions : $X = \\dfrac{1 \\pm 3}{2}$, soit $X = -1$ ou $X = 2$. Donc $\\ln(x) = -1$ ($x = e^{-1} = \\dfrac{1}{e}$) ou $\\ln(x) = 2$ ($x = e^2$). Les solutions sont $x = \\dfrac{1}{e}$ et $x = e^2$.`
          };
        },
        () => ({
          enonce: `Résoudre dans $\\mathbb{R}$ l'équation $e^{2x} - 5e^x + 6 = 0$.`,
          corrige: `Posons $X = e^x > 0$. L'équation devient $X^2 - 5X + 6 = 0$. On factorise : $(X - 2)(X - 3) = 0$, donc $X = 2$ ou $X = 3$. Solutions en $x$ : $e^x = 2$ donne $x = \\ln(2)$, et $e^x = 3$ donne $x = \\ln(3)$. Solutions : $x = \\ln(2)$ et $x = \\ln(3)$.`
        }),
        () => ({
          enonce: `Résoudre dans $]0\\,;\\,+\\infty[$ l'équation $(\\ln(x))^2 - 3\\ln(x) = 0$.`,
          corrige: `On factorise : $\\ln(x) \\times (\\ln(x) - 3) = 0$. Donc $\\ln(x) = 0$ (soit $x = 1$) ou $\\ln(x) = 3$ (soit $x = e^3$). Solutions : $x = 1$ et $x = e^3$.`
        }),
        () => ({
          enonce: `Résoudre dans $\\mathbb{R}$ l'équation $\\ln(x + 2) + \\ln(x) = \\ln(3)$ (avec $x > 0$).`,
          corrige: `Condition d'existence : $x > 0$ (et $x + 2 > 0$ automatique). L'équation devient $\\ln(x(x + 2)) = \\ln(3)$, soit $x(x+2) = 3$, ou $x^2 + 2x - 3 = 0$. Discriminant $\\Delta = 4 + 12 = 16$. Solutions : $x = \\dfrac{-2 \\pm 4}{2}$, soit $x = 1$ ou $x = -3$. Seule $x = 1$ vérifie $x > 0$.`
        })
      ];
      return pick(variantes)();
    }
  },

  ex_simplifier: (d) => {
    if (d === 1) {
      // Facile : e^a * e^b, e^a / e^b
      const variantes = [
        () => {
          const a = rand(2, 5);
          const b = rand(1, 4);
          return {
            enonce: `Simplifier $e^{${a}} \\times e^{${b}}$.`,
            corrige: `Propriété : $e^a \\times e^b = e^{a+b}$. Donc $e^{${a}} \\times e^{${b}} = e^{${a+b}}$.`
          };
        },
        () => {
          const a = rand(3, 6);
          const b = rand(1, 2);
          return {
            enonce: `Simplifier $\\dfrac{e^{${a}}}{e^{${b}}}$.`,
            corrige: `Propriété : $\\dfrac{e^a}{e^b} = e^{a-b}$. Donc $\\dfrac{e^{${a}}}{e^{${b}}} = e^{${a-b}}$.`
          };
        },
        () => {
          const a = rand(2, 4);
          return {
            enonce: `Simplifier $e^{-${a}} \\times e^{${a}}$.`,
            corrige: `$e^{-${a}} \\times e^{${a}} = e^{-${a}+${a}} = e^0 = 1$.`
          };
        }
      ];
      return pick(variantes)();
    } else if (d === 2) {
      // Moyen : (e^a)^n
      const variantes = [
        () => {
          const a = rand(2, 4);
          const n = rand(2, 4);
          return {
            enonce: `Simplifier $(e^{${a}})^{${n}}$.`,
            corrige: `Propriété : $(e^a)^n = e^{a \\times n}$. Donc $(e^{${a}})^{${n}} = e^{${a*n}}$.`
          };
        },
        () => {
          const a = rand(2, 5);
          return {
            enonce: `Simplifier $\\dfrac{1}{e^{${a}}}$.`,
            corrige: `$\\dfrac{1}{e^{${a}}} = e^{-${a}}$.`
          };
        },
        () => {
          const a = rand(2, 4);
          const b = rand(1, 3);
          return {
            enonce: `Simplifier $e^{${a}x} \\times e^{${b}x}$.`,
            corrige: `$e^{${a}x} \\times e^{${b}x} = e^{${a}x + ${b}x} = e^{${a+b}x}$.`
          };
        }
      ];
      return pick(variantes)();
    } else {
      // Difficile : expressions plus complexes
      const variantes = [
        () => {
          const a = rand(2, 4);
          return {
            enonce: `Simplifier $\\dfrac{(e^{${a}x})^2}{e^x}$.`,
            corrige: `$(e^{${a}x})^2 = e^{${2*a}x}$. Donc $\\dfrac{e^{${2*a}x}}{e^x} = e^{${2*a}x - x} = e^{${2*a-1}x}$.`
          };
        },
        () => {
          const a = rand(2, 3);
          return {
            enonce: `Simplifier $\\left(\\dfrac{1}{e^x}\\right)^{${a}}$.`,
            corrige: `$\\left(\\dfrac{1}{e^x}\\right)^{${a}} = (e^{-x})^{${a}} = e^{-${a}x}$.`
          };
        }
      ];
      return pick(variantes)();
    }
  },

  ex_equation: (d) => {
    if (d === 1) {
      const k = pick([2, 3, 5, 7, 10]);
      return {
        enonce: `Résoudre dans $\\mathbb{R}$ l'équation $e^x = ${k}$.`,
        corrige: `On applique $\\ln$ aux deux membres : $\\ln(e^x) = \\ln(${k})$, soit $x = \\ln(${k})$.`
      };
    } else if (d === 2) {
      const variantes = [
        () => {
          const a = rand(2, 4);
          const k = pick([5, 7, 10]);
          return {
            enonce: `Résoudre dans $\\mathbb{R}$ l'équation $e^{${a}x} = ${k}$.`,
            corrige: `En appliquant $\\ln$ : $${a}x = \\ln(${k})$. D'où $x = \\dfrac{\\ln(${k})}{${a}}$.`
          };
        },
        () => {
          const a = rand(2, 4);
          const b = rand(1, 3);
          return {
            enonce: `Résoudre dans $\\mathbb{R}$ l'équation $e^{x + ${b}} = ${a}$.`,
            corrige: `$\\ln(e^{x + ${b}}) = \\ln(${a})$, soit $x + ${b} = \\ln(${a})$. D'où $x = \\ln(${a}) - ${b}$.`
          };
        }
      ];
      return pick(variantes)();
    } else {
      // Difficile : équations avec changement de variable
      const variantes = [
        () => {
          return {
            enonce: `Résoudre dans $\\mathbb{R}$ l'équation $e^{2x} = 5e^x$.`,
            corrige: `Comme $e^x \\neq 0$, on peut diviser : $e^{2x} / e^x = e^x = 5$. D'où $x = \\ln(5)$.`
          };
        },
        () => {
          const k = pick([2, 3, 5]);
          return {
            enonce: `Résoudre dans $\\mathbb{R}$ l'équation $e^x \\times e^{-2x} = ${k}$.`,
            corrige: `$e^x \\times e^{-2x} = e^{x-2x} = e^{-x}$. Donc $e^{-x} = ${k}$, d'où $-x = \\ln(${k})$, soit $x = -\\ln(${k})$.`
          };
        }
      ];
      return pick(variantes)();
    }
  },

  ex_inequation: (d) => {
    if (d === 1) {
      const k = pick([2, 3, 5, 10]);
      const sens = pick(['>', '<']);
      if (sens === '>') {
        return {
          enonce: `Résoudre dans $\\mathbb{R}$ l'inéquation $e^x > ${k}$.`,
          corrige: `La fonction exp est strictement croissante, donc $e^x > ${k}$ équivaut à $x > \\ln(${k})$. Solutions : $]\\ln(${k})\\,;\\,+\\infty[$.`
        };
      } else {
        return {
          enonce: `Résoudre dans $\\mathbb{R}$ l'inéquation $e^x < ${k}$.`,
          corrige: `La fonction exp est strictement croissante, donc $e^x < ${k}$ équivaut à $x < \\ln(${k})$. Solutions : $]-\\infty\\,;\\,\\ln(${k})[$.`
        };
      }
    } else if (d === 2) {
      const variantes = [
        () => {
          const a = rand(2, 4);
          const k = pick([5, 7, 10]);
          return {
            enonce: `Résoudre dans $\\mathbb{R}$ l'inéquation $e^{${a}x} \\leq ${k}$.`,
            corrige: `L'exponentielle est strictement croissante : $e^{${a}x} \\leq ${k}$ équivaut à $${a}x \\leq \\ln(${k})$, soit $x \\leq \\dfrac{\\ln(${k})}{${a}}$. Solutions : $\\left]-\\infty\\,;\\,\\dfrac{\\ln(${k})}{${a}}\\right]$.`
          };
        },
        () => {
          return {
            enonce: `Résoudre dans $\\mathbb{R}$ l'inéquation $e^x > e^2$.`,
            corrige: `Par stricte croissance de $\\exp$ : $e^x > e^2$ équivaut à $x > 2$. Solutions : $]2\\,;\\,+\\infty[$.`
          };
        }
      ];
      return pick(variantes)();
    } else {
      // Difficile : inéquation avec changement de variable
      const variantes = [
        () => ({
          enonce: `Résoudre dans $\\mathbb{R}$ l'inéquation $e^{2x} - 3e^x + 2 > 0$.`,
          corrige: `Posons $X = e^x$ avec $X > 0$. L'inéquation devient $X^2 - 3X + 2 > 0$, soit $(X - 1)(X - 2) > 0$. Tableau de signes : positif pour $X < 1$ ou $X > 2$. Donc $e^x < 1$ ou $e^x > 2$, c'est-à-dire $x < 0$ ou $x > \\ln(2)$. Solutions : $]-\\infty\\,;\\,0[ \\cup ]\\ln(2)\\,;\\,+\\infty[$.`
        }),
        () => ({
          enonce: `Résoudre dans $\\mathbb{R}$ l'inéquation $e^{2x} - 5e^x + 6 \\leq 0$.`,
          corrige: `Posons $X = e^x > 0$. L'inéquation devient $X^2 - 5X + 6 \\leq 0$, soit $(X - 2)(X - 3) \\leq 0$. C'est positif (négatif au sens large) pour $X \\in [2\\,;\\,3]$. Donc $2 \\leq e^x \\leq 3$, soit $\\ln(2) \\leq x \\leq \\ln(3)$. Solutions : $[\\ln(2)\\,;\\,\\ln(3)]$.`
        }),
        () => ({
          enonce: `Résoudre dans $\\mathbb{R}$ l'inéquation $e^x - 1 > 0$.`,
          corrige: `$e^x > 1 = e^0$. Par stricte croissance de l'exponentielle, $x > 0$. Solutions : $]0\\,;\\,+\\infty[$.`
        })
      ];
      return pick(variantes)();
    }
  },

  ex_limites: (d) => {
    if (d === 1) {
      const variantes = [
        () => ({
          enonce: `Donner $\\lim\\limits_{x \\to +\\infty} e^x$.`,
          corrige: `$\\lim\\limits_{x \\to +\\infty} e^x = +\\infty$ (limite de référence).`
        }),
        () => ({
          enonce: `Donner $\\lim\\limits_{x \\to -\\infty} e^x$.`,
          corrige: `$\\lim\\limits_{x \\to -\\infty} e^x = 0$ (limite de référence). On a $0^+$ : $e^x > 0$ pour tout $x$.`
        }),
        () => ({
          enonce: `Donner $\\lim\\limits_{x \\to +\\infty} \\dfrac{e^x}{x}$.`,
          corrige: `Par croissance comparée : $\\lim\\limits_{x \\to +\\infty} \\dfrac{e^x}{x} = +\\infty$ (l'exponentielle l'emporte sur la puissance).`
        })
      ];
      return pick(variantes)();
    } else if (d === 2) {
      const variantes = [
        () => {
          const n = pick([2, 3]);
          return {
            enonce: `Déterminer $\\lim\\limits_{x \\to +\\infty} \\dfrac{e^x}{x^{${n}}}$.`,
            corrige: `Par croissance comparée, $\\lim\\limits_{x \\to +\\infty} \\dfrac{e^x}{x^{${n}}} = +\\infty$.`
          };
        },
        () => ({
          enonce: `Déterminer $\\lim\\limits_{x \\to -\\infty} x \\cdot e^x$.`,
          corrige: `Forme indéterminée $(-\\infty) \\times 0$. Par croissance comparée (limite de référence) : $\\lim\\limits_{x \\to -\\infty} x \\cdot e^x = 0$.`
        })
      ];
      return pick(variantes)();
    } else {
      const variantes = [
        () => ({
          enonce: `Déterminer $\\lim\\limits_{x \\to +\\infty} \\left(e^x - x^2\\right)$.`,
          corrige: `Forme indéterminée $+\\infty - \\infty$. On factorise par $e^x$ : $e^x - x^2 = e^x\\left(1 - \\dfrac{x^2}{e^x}\\right)$. Par croissance comparée, $\\dfrac{x^2}{e^x} \\to 0$, donc le facteur tend vers $1$. Comme $e^x \\to +\\infty$, on a $\\lim\\limits_{x \\to +\\infty} (e^x - x^2) = +\\infty$.`
        }),
        () => ({
          enonce: `Déterminer $\\lim\\limits_{x \\to 0} \\dfrac{e^x - 1}{x}$.`,
          corrige: `C'est la limite du taux d'accroissement de $\\exp$ en 0 : $\\lim\\limits_{x \\to 0} \\dfrac{e^x - 1}{x} = e^{\\prime}(0) = e^0 = 1$.`
        }),
        () => ({
          enonce: `Déterminer $\\lim\\limits_{x \\to +\\infty} \\left(e^x - x^3\\right)$.`,
          corrige: `Forme indéterminée. On factorise par $e^x$ : $e^x - x^3 = e^x\\left(1 - \\dfrac{x^3}{e^x}\\right)$. Par croissance comparée, $\\dfrac{x^3}{e^x} \\to 0$. Le facteur tend vers 1, et $e^x \\to +\\infty$, donc la limite vaut $+\\infty$.`
        }),
        () => ({
          enonce: `Déterminer $\\lim\\limits_{x \\to -\\infty} (x + 1)e^x$.`,
          corrige: `Forme indéterminée $(-\\infty) \\times 0$. On développe : $(x + 1)e^x = xe^x + e^x$. Par croissance comparée, $xe^x \\to 0$, et $e^x \\to 0$. Par somme, $\\lim\\limits_{x \\to -\\infty}(x + 1)e^x = 0$.`
        }),
        () => {
          const a = pick([2, 3]);
          return {
            enonce: `Déterminer $\\lim\\limits_{x \\to +\\infty} \\dfrac{e^{${a}x}}{x^2}$.`,
            corrige: `$\\dfrac{e^{${a}x}}{x^2} = \\dfrac{(e^x)^{${a}}}{x^2}$. Par croissance comparée encore plus forte (l'exponentielle l'emporte) : $\\lim\\limits_{x \\to +\\infty} \\dfrac{e^{${a}x}}{x^2} = +\\infty$.`
          };
        }
      ];
      return pick(variantes)();
    }
  },

  ex_derivee: (d) => {
    if (d === 1) {
      const variantes = [
        () => ({
          enonce: `Soit $f(x) = e^x$. Calculer $f'(x)$.`,
          corrige: `$f'(x) = e^x$ (la fonction exp est sa propre dérivée).`
        }),
        () => {
          const a = pick([2, 3, 4, 5]);
          return {
            enonce: `Soit $f(x) = e^{${a}x}$. Calculer $f'(x)$.`,
            corrige: `On a $f = e^u$ avec $u(x) = ${a}x$, donc $u'(x) = ${a}$. Formule : $f'(x) = u'(x) e^{u(x)} = ${a}e^{${a}x}$.`
          };
        }
      ];
      return pick(variantes)();
    } else if (d === 2) {
      const variantes = [
        () => {
          const a = pick([2, 3]);
          const b = pick([1, 2, 3]);
          return {
            enonce: `Soit $f(x) = e^{${a}x + ${b}}$. Calculer $f'(x)$.`,
            corrige: `$u(x) = ${a}x + ${b}$, $u'(x) = ${a}$. $f'(x) = ${a}e^{${a}x + ${b}}$.`
          };
        },
        () => ({
          enonce: `Soit $f(x) = e^{x^2}$. Calculer $f'(x)$.`,
          corrige: `$u(x) = x^2$, $u'(x) = 2x$. $f'(x) = 2x \\cdot e^{x^2}$.`
        }),
        () => {
          const a = pick([2, 3]);
          return {
            enonce: `Soit $f(x) = e^{-${a}x}$. Calculer $f'(x)$.`,
            corrige: `$u(x) = -${a}x$, $u'(x) = -${a}$. $f'(x) = -${a}e^{-${a}x}$.`
          };
        }
      ];
      return pick(variantes)();
    } else {
      const variantes = [
        () => ({
          enonce: `Soit $f(x) = x \\cdot e^x$. Calculer $f'(x)$.`,
          corrige: `Formule du produit $(uv)' = u'v + uv'$ avec $u(x) = x$ et $v(x) = e^x$. $u' = 1$, $v' = e^x$. $f'(x) = 1 \\cdot e^x + x \\cdot e^x = e^x(1 + x) = (x + 1)e^x$.`
        }),
        () => {
          const a = pick([2, 3]);
          return {
            enonce: `Soit $f(x) = x^{${a}} \\cdot e^x$. Calculer $f'(x)$.`,
            corrige: `Formule du produit avec $u = x^{${a}}$, $v = e^x$. $u' = ${a}x^{${a-1}}$, $v' = e^x$. $f'(x) = ${a}x^{${a-1}} e^x + x^{${a}} e^x = x^{${a-1}}e^x(${a} + x)$.`
          };
        },
        () => ({
          enonce: `Soit $f(x) = \\dfrac{e^x}{x}$ pour $x \\neq 0$. Calculer $f'(x)$.`,
          corrige: `Formule du quotient $\\left(\\dfrac{u}{v}\\right)' = \\dfrac{u'v - uv'}{v^2}$ avec $u = e^x$, $v = x$. $u' = e^x$, $v' = 1$. $f'(x) = \\dfrac{e^x \\cdot x - e^x \\cdot 1}{x^2} = \\dfrac{(x - 1)e^x}{x^2}$.`
        })
      ];
      return pick(variantes)();
    }
  },

  cb_factorielle: (d) => {
    // Calculer factorielle (utilitaire local)
    const fact = (n) => {
      let r = 1;
      for (let i = 2; i <= n; i++) r *= i;
      return r;
    };
    if (d === 1) {
      // Facile : calculer n! pour n petit
      const n = rand(2, 6);
      return {
        enonce: `Calculer $${n}!$.`,
        corrige: `Par définition, $${n}! = ${Array.from({length: n}, (_, i) => n - i).join(' \\times ')} = ${fact(n)}$.`
      };
    } else if (d === 2) {
      // Moyen : simplifier des quotients de factorielles
      const variantes = [
        () => {
          const n = rand(5, 8);
          const k = rand(1, 2);
          // (n)! / (n-k)! = n × (n-1) × ... × (n-k+1)
          const facteurs = [];
          for (let i = 0; i < k; i++) facteurs.push(n - i);
          const produit = facteurs.reduce((a, b) => a * b, 1);
          return {
            enonce: `Simplifier et calculer $\\dfrac{${n}!}{${n-k}!}$.`,
            corrige: `$\\dfrac{${n}!}{${n-k}!} = ${facteurs.join(' \\times ')} = ${produit}$.`
          };
        },
        () => {
          const n = rand(4, 7);
          return {
            enonce: `Simplifier $\\dfrac{(n + 1)!}{n!}$.`,
            corrige: `$(n+1)! = (n+1) \\times n!$. Donc $\\dfrac{(n+1)!}{n!} = n + 1$.`
          };
        }
      ];
      return pick(variantes)();
    } else {
      // Difficile : simplification plus poussée
      const variantes = [
        () => ({
          enonce: `Simplifier $\\dfrac{n!}{(n - 2)!}$.`,
          corrige: `$n! = n \\times (n-1) \\times (n-2)!$. Donc $\\dfrac{n!}{(n-2)!} = n(n-1)$.`
        }),
        () => {
          const n = rand(6, 9);
          return {
            enonce: `Calculer $\\dfrac{${n}!}{${n-3}! \\times 3!}$.`,
            corrige: `$\\dfrac{${n}!}{${n-3}!} = ${n} \\times ${n-1} \\times ${n-2} = ${n*(n-1)*(n-2)}$. Et $3! = 6$. Donc $\\dfrac{${n}!}{${n-3}! \\times 3!} = \\dfrac{${n*(n-1)*(n-2)}}{6} = ${(n*(n-1)*(n-2))/6}$. (On reconnaît $\\binom{${n}}{3}$.)`
          };
        }
      ];
      return pick(variantes)();
    }
  },

  cb_kuplets: (d) => {
    if (d === 1) {
      // Facile : nombre de k-uplets avec répétition (n^k)
      const variantes = [
        () => {
          const n = pick([10, 26]); // chiffres ou lettres
          const k = pick([2, 3, 4]);
          const contexte = n === 10 ? 'chiffres' : 'lettres de l\'alphabet';
          return {
            enonce: `Combien de codes de $${k}$ ${n === 10 ? 'chiffres' : 'lettres'} peut-on former (avec répétition possible) ?`,
            corrige: `À chaque position, on a $${n}$ choix indépendants. Nombre total : $${n}^{${k}} = ${Math.pow(n, k)}$.`
          };
        }
      ];
      return pick(variantes)();
    } else if (d === 2) {
      // Moyen : k-uplets sans répétition (arrangement) ou permutations
      const variantes = [
        () => {
          const n = pick([5, 6, 7]);
          // n! permutations
          const fact = (m) => { let r=1; for(let i=2;i<=m;i++) r*=i; return r; };
          return {
            enonce: `De combien de façons peut-on ranger $${n}$ livres différents sur une étagère ?`,
            corrige: `On range les $${n}$ livres dans un ordre quelconque : c'est une **permutation**. Le nombre de façons est $${n}! = ${fact(n)}$.`
          };
        },
        () => {
          const n = pick([8, 10, 12]);
          const k = pick([2, 3]);
          // Arrangement A(n,k) = n × (n-1) × ... × (n-k+1)
          let arr = 1;
          for (let i = 0; i < k; i++) arr *= (n - i);
          return {
            enonce: `Dans une équipe de $${n}$ joueurs, on doit choisir un capitaine puis un vice-capitaine (deux personnes différentes). Combien y a-t-il de possibilités ?`,
            corrige: `On choisit d'abord le capitaine ($${n}$ choix), puis le vice-capitaine parmi les $${n-1}$ restants. Total : $${n} \\times ${n-1} = ${arr}$ possibilités. (C'est le nombre de $${k}$-arrangements.)`
          };
        }
      ];
      return pick(variantes)();
    } else {
      // Difficile : distinguer arrangement, combinaison, permutation dans un même contexte
      const variantes = [
        () => {
          const n = pick([12, 15, 20]);
          return {
            enonce: `Dans un club de $${n}$ membres, on doit former un bureau composé d'un président, d'un trésorier et d'un secrétaire (postes distincts, une personne par poste). Combien y a-t-il de bureaux possibles ?`,
            corrige: `On choisit successivement le président ($${n}$ choix), le trésorier ($${n-1}$ choix parmi les restants), le secrétaire ($${n-2}$ choix). Total : $${n} \\times ${n-1} \\times ${n-2} = ${n*(n-1)*(n-2)}$ bureaux. (C'est un 3-arrangement de $${n}$ éléments.)`
          };
        }
      ];
      return pick(variantes)();
    }
  },

  cb_binomial: (d) => {
    const binom = (n, k) => {
      if (k < 0 || k > n) return 0;
      if (k === 0 || k === n) return 1;
      let r = 1;
      for (let i = 0; i < k; i++) r = r * (n - i) / (i + 1);
      return Math.round(r);
    };
    if (d === 1) {
      // Facile : binomiaux particuliers ou petits
      const variantes = [
        () => ({
          enonce: `Calculer $\\binom{n}{0}$ et $\\binom{n}{n}$ pour tout entier naturel $n$.`,
          corrige: `$\\binom{n}{0} = 1$ (une seule façon de choisir 0 élément parmi $n$) et $\\binom{n}{n} = 1$ (une seule façon de choisir tous les éléments).`
        }),
        () => {
          const n = rand(3, 6);
          return {
            enonce: `Calculer $\\binom{${n}}{1}$.`,
            corrige: `$\\binom{${n}}{1} = ${n}$ (il y a $${n}$ façons de choisir 1 élément parmi $${n}$).`
          };
        },
        () => {
          const n = rand(3, 6);
          return {
            enonce: `Calculer $\\binom{${n}}{2}$.`,
            corrige: `Formule : $\\binom{n}{2} = \\dfrac{n(n-1)}{2}$. Donc $\\binom{${n}}{2} = \\dfrac{${n} \\times ${n-1}}{2} = ${binom(n, 2)}$.`
          };
        }
      ];
      return pick(variantes)();
    } else if (d === 2) {
      // Moyen : calcul direct
      const variantes = [
        () => {
          const n = pick([5, 6, 7, 8]);
          const k = pick([2, 3]);
          return {
            enonce: `Calculer $\\binom{${n}}{${k}}$.`,
            corrige: `Formule : $\\binom{n}{k} = \\dfrac{n!}{k!(n-k)!}$. $\\binom{${n}}{${k}} = \\dfrac{${n}!}{${k}!(${n-k})!} = ${binom(n, k)}$. (On peut aussi simplifier en gardant ${k} facteurs au numérateur : $\\dfrac{${n} \\times ${n-1}${k === 3 ? ` \\times ${n-2}` : ''}}{${k}!} = ${binom(n, k)}$.)`
          };
        },
        () => {
          const n = pick([10, 12, 15]);
          return {
            enonce: `Combien y a-t-il de façons de choisir $2$ personnes parmi $${n}$ ?`,
            corrige: `C'est le nombre de combinaisons : $\\binom{${n}}{2} = \\dfrac{${n} \\times ${n-1}}{2} = ${binom(n, 2)}$.`
          };
        }
      ];
      return pick(variantes)();
    } else {
      // Difficile : combinaisons dans un contexte plus riche
      const variantes = [
        () => {
          const n = pick([10, 12]);
          const k = pick([3, 4]);
          return {
            enonce: `Dans une classe de $${n}$ élèves, combien y a-t-il de façons de former un groupe de $${k}$ délégués (rôles non distingués) ?`,
            corrige: `Les délégués ont des rôles non distingués : c'est une **combinaison**. Nombre : $\\binom{${n}}{${k}} = ${binom(n, k)}$.`
          };
        },
        () => {
          return {
            enonce: `Démontrer que $\\binom{n}{k} = \\binom{n}{n - k}$ pour $0 \\leq k \\leq n$.`,
            corrige: `Par la formule : $\\binom{n}{n-k} = \\dfrac{n!}{(n-k)!(n - (n-k))!} = \\dfrac{n!}{(n-k)! \\cdot k!} = \\binom{n}{k}$. **Interprétation** : choisir $k$ éléments à garder revient à choisir $n-k$ éléments à exclure.`
          };
        }
      ];
      return pick(variantes)();
    }
  },

  cb_pascal: (d) => {
    const binom = (n, k) => {
      if (k < 0 || k > n) return 0;
      if (k === 0 || k === n) return 1;
      let r = 1;
      for (let i = 0; i < k; i++) r = r * (n - i) / (i + 1);
      return Math.round(r);
    };
    if (d === 1) {
      // Facile : lire le triangle de Pascal pour petites valeurs
      const variantes = [
        () => ({
          enonce: `Donner les valeurs de $\\binom{4}{0}, \\binom{4}{1}, \\binom{4}{2}, \\binom{4}{3}, \\binom{4}{4}$.`,
          corrige: `Ce sont les coefficients de la ligne $n = 4$ du triangle de Pascal : $1, 4, 6, 4, 1$. On vérifie : $\\binom{4}{0} = 1$, $\\binom{4}{1} = 4$, $\\binom{4}{2} = 6$, $\\binom{4}{3} = 4$, $\\binom{4}{4} = 1$.`
        }),
        () => ({
          enonce: `Donner les valeurs de $\\binom{3}{0}, \\binom{3}{1}, \\binom{3}{2}, \\binom{3}{3}$.`,
          corrige: `Coefficients de la ligne $n = 3$ du triangle de Pascal : $1, 3, 3, 1$.`
        }),
        () => ({
          enonce: `Écrire les 4 premières lignes ($n = 0, 1, 2, 3$) du triangle de Pascal.`,
          corrige: `Ligne 0 : $1$. Ligne 1 : $1, 1$. Ligne 2 : $1, 2, 1$. Ligne 3 : $1, 3, 3, 1$. (Chaque coefficient est la somme des deux au-dessus.)`
        }),
        () => ({
          enonce: `Énoncer la formule de Pascal liant $\\binom{n}{k}$ aux coefficients de la ligne précédente.`,
          corrige: `Pour $1 \\leq k \\leq n - 1$ : $\\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k}$. C'est cette formule qui permet de construire le triangle de Pascal ligne par ligne.`
        })
      ];
      return pick(variantes)();
    } else if (d === 2) {
      // Moyen : utiliser la relation de Pascal
      const variantes = [
        () => {
          const n = pick([5, 6, 7]);
          const k = pick([2, 3]);
          return {
            enonce: `Utiliser la formule de Pascal $\\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k}$ pour calculer $\\binom{${n}}{${k}}$ à partir de la ligne $n = ${n-1}$ du triangle de Pascal.`,
            corrige: `$\\binom{${n-1}}{${k-1}} = ${binom(n-1, k-1)}$ et $\\binom{${n-1}}{${k}} = ${binom(n-1, k)}$. Donc $\\binom{${n}}{${k}} = ${binom(n-1, k-1)} + ${binom(n-1, k)} = ${binom(n, k)}$.`
          };
        },
        () => {
          return {
            enonce: `Écrire la ligne $n = 5$ du triangle de Pascal.`,
            corrige: `Ligne 5 : $\\binom{5}{0}, \\binom{5}{1}, \\binom{5}{2}, \\binom{5}{3}, \\binom{5}{4}, \\binom{5}{5}$ = $1, 5, 10, 10, 5, 1$. (On obtient chaque coefficient en additionnant les deux au-dessus.)`
          };
        }
      ];
      return pick(variantes)();
    } else {
      // Difficile : démonstration ou somme d'une ligne
      const variantes = [
        () => ({
          enonce: `Donner la valeur de $\\binom{n}{0} + \\binom{n}{1} + \\binom{n}{2} + \\ldots + \\binom{n}{n}$ et la justifier.`,
          corrige: `Cette somme vaut $2^n$. Justification : par la formule du binôme de Newton, $(1+1)^n = \\sum_{k=0}^{n} \\binom{n}{k} 1^k 1^{n-k} = \\sum_{k=0}^{n} \\binom{n}{k}$. Donc la somme vaut $2^n$. **Interprétation** : c'est le nombre total de parties de $\\{1, 2, \\ldots, n\\}$.`
        }),
        () => {
          return {
            enonce: `À l'aide de la formule du binôme, développer $(x + 1)^4$.`,
            corrige: `$(x+1)^4 = \\sum_{k=0}^{4} \\binom{4}{k} x^k = \\binom{4}{0} + \\binom{4}{1}x + \\binom{4}{2}x^2 + \\binom{4}{3}x^3 + \\binom{4}{4}x^4 = 1 + 4x + 6x^2 + 4x^3 + x^4$.`
          };
        },
        () => ({
          enonce: `Développer $(x + 1)^5$ à l'aide de la formule du binôme.`,
          corrige: `$(x+1)^5 = \\binom{5}{0} + \\binom{5}{1}x + \\binom{5}{2}x^2 + \\binom{5}{3}x^3 + \\binom{5}{4}x^4 + \\binom{5}{5}x^5 = 1 + 5x + 10x^2 + 10x^3 + 5x^4 + x^5$. (On utilise la ligne 5 du triangle de Pascal : $1, 5, 10, 10, 5, 1$.)`
        }),
        () => ({
          enonce: `Démontrer que $\\binom{n}{k} = \\binom{n}{n - k}$ pour tout $0 \\leq k \\leq n$.`,
          corrige: `Par la formule : $\\binom{n}{n - k} = \\dfrac{n!}{(n-k)! \\cdot (n - (n - k))!} = \\dfrac{n!}{(n-k)! \\cdot k!} = \\binom{n}{k}$. **Interprétation** : choisir $k$ éléments à garder revient à choisir $n - k$ éléments à exclure parmi les $n$ éléments. C'est la **symétrie du triangle de Pascal**.`
        })
      ];
      return pick(variantes)();
    }
  },

  tsu_limite: (d) => {
    if (d === 1) {
      // Facile : limites de référence
      const variantes = [
        () => ({
          enonce: `Donner $\\lim\\limits_{n \\to +\\infty} \\dfrac{1}{n}$.`,
          corrige: `Limite de référence : $\\lim\\limits_{n \\to +\\infty} \\dfrac{1}{n} = 0$.`
        }),
        () => {
          const p = pick([2, 3]);
          return {
            enonce: `Donner $\\lim\\limits_{n \\to +\\infty} \\dfrac{1}{n^{${p}}}$.`,
            corrige: `Limite de référence : $\\lim\\limits_{n \\to +\\infty} \\dfrac{1}{n^{${p}}} = 0$ (car $n^{${p}} \\to +\\infty$).`
          };
        },
        () => ({
          enonce: `Donner $\\lim\\limits_{n \\to +\\infty} n^2$.`,
          corrige: `$\\lim\\limits_{n \\to +\\infty} n^2 = +\\infty$.`
        })
      ];
      return pick(variantes)();
    } else if (d === 2) {
      // Moyen : limites de combinaisons simples
      const variantes = [
        () => {
          const a = pick([2, 3, 5]);
          const b = pick([1, 2, 3]);
          return {
            enonce: `Soit $u_n = ${a}n + ${b}$. Déterminer $\\lim\\limits_{n \\to +\\infty} u_n$.`,
            corrige: `$\\lim\\limits_{n \\to +\\infty} ${a}n = +\\infty$ et $${b}$ est une constante. Par somme : $\\lim\\limits_{n \\to +\\infty} u_n = +\\infty$.`
          };
        },
        () => {
          const a = pick([2, 3, 5]);
          return {
            enonce: `Soit $u_n = ${a} + \\dfrac{1}{n}$. Déterminer $\\lim\\limits_{n \\to +\\infty} u_n$.`,
            corrige: `$\\lim\\limits_{n \\to +\\infty} \\dfrac{1}{n} = 0$. Par somme : $\\lim\\limits_{n \\to +\\infty} u_n = ${a} + 0 = ${a}$.`
          };
        }
      ];
      return pick(variantes)();
    } else {
      // Difficile : quotient avec degré dominant
      const variantes = [
        () => {
          const a = pick([2, 3, 5]);
          const b = pick([2, 3, 4]);
          return {
            enonce: `Déterminer $\\lim\\limits_{n \\to +\\infty} \\dfrac{${a}n + 1}{${b}n - 3}$.`,
            corrige: `Forme indéterminée $\\dfrac{+\\infty}{+\\infty}$. On factorise par le terme dominant : $\\dfrac{${a}n + 1}{${b}n - 3} = \\dfrac{n(${a} + \\frac{1}{n})}{n(${b} - \\frac{3}{n})} = \\dfrac{${a} + \\frac{1}{n}}{${b} - \\frac{3}{n}}$. Quand $n \\to +\\infty$, $\\frac{1}{n} \\to 0$ et $\\frac{3}{n} \\to 0$, donc la limite vaut $\\dfrac{${a}}{${b}}$.`
          };
        }
      ];
      return pick(variantes)();
    }
  },

  tsu_comparaison: (d) => {
    if (d === 1) {
      // Facile : théorème de comparaison simple
      const variantes = [
        () => ({
          enonce: `Soit $(u_n)$ telle que pour tout $n \\geq 1$, $-\\dfrac{1}{n} \\leq u_n \\leq \\dfrac{1}{n}$. Déterminer $\\lim\\limits_{n \\to +\\infty} u_n$.`,
          corrige: `$\\lim\\limits_{n \\to +\\infty} -\\dfrac{1}{n} = 0$ et $\\lim\\limits_{n \\to +\\infty} \\dfrac{1}{n} = 0$. D'après le **théorème des gendarmes**, $\\lim\\limits_{n \\to +\\infty} u_n = 0$.`
        }),
        () => ({
          enonce: `Énoncer le théorème des gendarmes (encadrement) pour les suites.`,
          corrige: `Soient $(u_n)$, $(v_n)$, $(w_n)$ trois suites telles qu'à partir d'un certain rang $n_0$, $u_n \\leq v_n \\leq w_n$. Si $\\lim u_n = \\lim w_n = \\ell$, alors $\\lim v_n = \\ell$.`
        }),
        () => ({
          enonce: `Énoncer le théorème de comparaison pour les suites tendant vers $+\\infty$.`,
          corrige: `Si $u_n \\leq v_n$ à partir d'un certain rang et $\\lim u_n = +\\infty$, alors $\\lim v_n = +\\infty$. (Une suite minorée par une suite tendant vers $+\\infty$ tend aussi vers $+\\infty$.)`
        })
      ];
      return pick(variantes)();
    } else if (d === 2) {
      // Moyen : minoration par une suite qui tend vers +∞
      const variantes = [
        () => {
          const a = pick([2, 3, 5]);
          return {
            enonce: `Soit $(u_n)$ telle que pour tout $n \\geq 1$, $u_n \\geq ${a}n$. Déterminer $\\lim\\limits_{n \\to +\\infty} u_n$.`,
            corrige: `$\\lim\\limits_{n \\to +\\infty} ${a}n = +\\infty$. D'après le **théorème de comparaison** (minoration par une suite tendant vers $+\\infty$), $\\lim\\limits_{n \\to +\\infty} u_n = +\\infty$.`
          };
        },
        () => ({
          enonce: `Soit $u_n = \\dfrac{\\sin(n)}{n}$ pour $n \\geq 1$. Déterminer $\\lim\\limits_{n \\to +\\infty} u_n$.`,
          corrige: `Pour tout $n \\geq 1$, $-1 \\leq \\sin(n) \\leq 1$, donc $-\\dfrac{1}{n} \\leq \\dfrac{\\sin(n)}{n} \\leq \\dfrac{1}{n}$. Par le **théorème des gendarmes**, $\\lim\\limits_{n \\to +\\infty} \\dfrac{\\sin(n)}{n} = 0$.`
        })
      ];
      return pick(variantes)();
    } else {
      // Difficile : comparaison avec démonstration plus poussée
      const variantes = [
        () => ({
          enonce: `Soit $(u_n)$ telle que pour tout $n \\in \\mathbb{N}$, $u_n \\leq -n^2 + 5$. Que peut-on dire de $\\lim\\limits_{n \\to +\\infty} u_n$ ?`,
          corrige: `$\\lim\\limits_{n \\to +\\infty} -n^2 + 5 = -\\infty$ (car $-n^2 \\to -\\infty$). D'après le **théorème de comparaison** (majoration par une suite tendant vers $-\\infty$), $\\lim\\limits_{n \\to +\\infty} u_n = -\\infty$.`
        }),
        () => ({
          enonce: `Soit $u_n = \\dfrac{\\cos(n)}{n^2 + 1}$. Déterminer $\\lim\\limits_{n \\to +\\infty} u_n$.`,
          corrige: `Pour tout $n$, $-1 \\leq \\cos(n) \\leq 1$, donc $-\\dfrac{1}{n^2 + 1} \\leq u_n \\leq \\dfrac{1}{n^2 + 1}$. Or $\\lim\\limits_{n \\to +\\infty} \\pm\\dfrac{1}{n^2 + 1} = 0$. Par le théorème des gendarmes, $\\lim u_n = 0$.`
        }),
        () => ({
          enonce: `Soit $u_n = n + (-1)^n$. Déterminer $\\lim\\limits_{n \\to +\\infty} u_n$.`,
          corrige: `Pour tout $n$, $-1 \\leq (-1)^n \\leq 1$, donc $n - 1 \\leq u_n \\leq n + 1$. Comme $\\lim (n - 1) = +\\infty$, par comparaison, $\\lim u_n = +\\infty$.`
        })
      ];
      return pick(variantes)();
    }
  },

  tsu_qn: (d) => {
    if (d === 1) {
      // Facile : limite de q^n pour q donné
      const variantes = [
        () => {
          const q = pick([0.5, 0.3, 0.8]);
          const qAff = q.toString().replace('.', '{,}');
          return {
            enonce: `Déterminer $\\lim\\limits_{n \\to +\\infty} (${qAff})^n$.`,
            corrige: `Comme $-1 < ${qAff} < 1$, on a $\\lim\\limits_{n \\to +\\infty} (${qAff})^n = 0$.`
          };
        },
        () => {
          const q = pick([2, 3, 5]);
          return {
            enonce: `Déterminer $\\lim\\limits_{n \\to +\\infty} ${q}^n$.`,
            corrige: `Comme $${q} > 1$, on a $\\lim\\limits_{n \\to +\\infty} ${q}^n = +\\infty$.`
          };
        }
      ];
      return pick(variantes)();
    } else if (d === 2) {
      // Moyen : combinaison avec q^n
      const variantes = [
        () => {
          const q = pick([0.5, 0.4, 0.7]);
          const qAff = q.toString().replace('.', '{,}');
          const a = pick([2, 3, 5]);
          return {
            enonce: `Soit $u_n = ${a} \\times (${qAff})^n$. Déterminer $\\lim\\limits_{n \\to +\\infty} u_n$.`,
            corrige: `$\\lim\\limits_{n \\to +\\infty} (${qAff})^n = 0$ (car $|${qAff}| < 1$). Par produit : $\\lim\\limits_{n \\to +\\infty} u_n = ${a} \\times 0 = 0$.`
          };
        },
        () => {
          const a = pick([2, 3]);
          const q = pick([0.5, 0.6]);
          const qAff = q.toString().replace('.', '{,}');
          return {
            enonce: `Soit $u_n = ${a} - (${qAff})^n$. Déterminer $\\lim\\limits_{n \\to +\\infty} u_n$.`,
            corrige: `$(${qAff})^n \\to 0$. Par somme : $\\lim\\limits_{n \\to +\\infty} u_n = ${a} - 0 = ${a}$.`
          };
        }
      ];
      return pick(variantes)();
    } else {
      // Difficile : application à une suite géométrique avec somme
      const variantes = [
        () => ({
          enonce: `Soit $(u_n)$ la suite géométrique de premier terme $u_0 = 1$ et de raison $q = \\dfrac{1}{2}$. Déterminer $\\lim\\limits_{n \\to +\\infty} S_n$ où $S_n = u_0 + u_1 + \\ldots + u_n$.`,
          corrige: `Formule de la somme géométrique : $S_n = u_0 \\times \\dfrac{1 - q^{n+1}}{1 - q} = \\dfrac{1 - (\\frac{1}{2})^{n+1}}{1 - \\frac{1}{2}} = 2\\left(1 - \\left(\\dfrac{1}{2}\\right)^{n+1}\\right)$. Comme $|q| < 1$, $\\left(\\dfrac{1}{2}\\right)^{n+1} \\to 0$. Donc $\\lim\\limits_{n \\to +\\infty} S_n = 2(1 - 0) = 2$.`
        }),
        () => ({
          enonce: `Soit $(u_n)$ la suite géométrique de premier terme $u_0 = 4$ et de raison $q = \\dfrac{1}{3}$. Déterminer $\\lim\\limits_{n \\to +\\infty} S_n$ où $S_n = u_0 + u_1 + \\ldots + u_n$.`,
          corrige: `$S_n = 4 \\times \\dfrac{1 - (\\frac{1}{3})^{n+1}}{1 - \\frac{1}{3}} = 4 \\times \\dfrac{3}{2} \\times \\left(1 - \\left(\\dfrac{1}{3}\\right)^{n+1}\\right) = 6\\left(1 - \\left(\\dfrac{1}{3}\\right)^{n+1}\\right)$. Comme $\\left(\\dfrac{1}{3}\\right)^{n+1} \\to 0$, $\\lim S_n = 6$.`
        }),
        () => ({
          enonce: `Soit $(u_n)$ la suite définie par $u_n = 3 \\times 0{,}8^n + 5$ pour $n \\geq 0$. Déterminer $\\lim\\limits_{n \\to +\\infty} u_n$.`,
          corrige: `$0{,}8^n \\to 0$ car $|0{,}8| < 1$. Donc $\\lim\\limits_{n \\to +\\infty} u_n = 3 \\times 0 + 5 = 5$.`
        }),
        () => ({
          enonce: `Soit $q$ un réel tel que $|q| < 1$. Démontrer que $\\lim\\limits_{n \\to +\\infty} q^n = 0$ à partir du résultat sur les suites géométriques.`,
          corrige: `Si $q = 0$, c'est immédiat : $q^n = 0$ pour $n \\geq 1$. Si $0 < |q| < 1$, on peut écrire $|q| = \\dfrac{1}{1 + h}$ avec $h > 0$. Par inégalité de Bernoulli, $(1 + h)^n \\geq 1 + nh$, donc $|q|^n \\leq \\dfrac{1}{1 + nh} \\to 0$. Par le théorème des gendarmes, $|q^n| \\to 0$, donc $q^n \\to 0$.`
        })
      ];
      return pick(variantes)();
    }
  },

  tsu_recurrente: (d) => {
    if (d === 1) {
      // Facile : calculer les premiers termes
      const a = pick([2, 3]);
      const b = pick([1, 2]);
      const u0 = pick([1, 2]);
      const u1 = a * u0 + b;
      const u2 = a * u1 + b;
      return {
        enonce: `Soit $(u_n)$ définie par $u_0 = ${u0}$ et $u_{n+1} = ${a}u_n + ${b}$. Calculer $u_1$ et $u_2$.`,
        corrige: `$u_1 = ${a} \\times u_0 + ${b} = ${a} \\times ${u0} + ${b} = ${u1}$. $u_2 = ${a} \\times u_1 + ${b} = ${a} \\times ${u1} + ${b} = ${u2}$.`
      };
    } else if (d === 2) {
      // Moyen : conjecturer la limite à partir des premiers termes
      const variantes = [
        () => ({
          enonce: `Soit $(u_n)$ définie par $u_0 = 0$ et $u_{n+1} = 0{,}5 \\, u_n + 1$. Calculer $u_1$, $u_2$, $u_3$ et conjecturer la limite.`,
          corrige: `$u_1 = 1$, $u_2 = 0{,}5 \\times 1 + 1 = 1{,}5$, $u_3 = 0{,}5 \\times 1{,}5 + 1 = 1{,}75$. La suite semble croissante et tend vers $2$. **Conjecture** : $\\lim\\limits_{n \\to +\\infty} u_n = 2$.`
        }),
        () => ({
          enonce: `Soit $(u_n)$ définie par $u_0 = 10$ et $u_{n+1} = 0{,}8 \\, u_n + 1$. Calculer $u_1$, $u_2$, $u_3$ et conjecturer la limite.`,
          corrige: `$u_1 = 0{,}8 \\times 10 + 1 = 9$. $u_2 = 0{,}8 \\times 9 + 1 = 8{,}2$. $u_3 = 0{,}8 \\times 8{,}2 + 1 = 7{,}56$. La suite semble décroissante et tendre vers $5$ (car $5 = 0{,}8 \\times 5 + 1$). **Conjecture** : $\\lim u_n = 5$.`
        }),
        () => ({
          enonce: `Soit $(u_n)$ définie par $u_0 = 1$ et $u_{n+1} = \\sqrt{u_n + 2}$. Calculer $u_1$, $u_2$ (à $10^{-2}$ près) et conjecturer la limite.`,
          corrige: `$u_1 = \\sqrt{3} \\approx 1{,}73$. $u_2 = \\sqrt{1{,}73 + 2} = \\sqrt{3{,}73} \\approx 1{,}93$. La suite semble croissante et tend vers $2$ (car $2 = \\sqrt{2 + 2} = \\sqrt{4}$). **Conjecture** : $\\lim u_n = 2$.`
        })
      ];
      return pick(variantes)();
    } else {
      // Difficile : calcul du point fixe pour la limite éventuelle
      const variantes = [
        () => ({
          enonce: `Soit $(u_n)$ définie par $u_0 = 0$ et $u_{n+1} = 0{,}5 \\, u_n + 1$. On admet que $(u_n)$ converge. Déterminer sa limite $\\ell$.`,
          corrige: `Si $(u_n)$ converge vers $\\ell$, alors $u_{n+1} \\to \\ell$ et $u_n \\to \\ell$. Par passage à la limite dans la relation $u_{n+1} = 0{,}5 u_n + 1$ : $\\ell = 0{,}5 \\ell + 1$, soit $0{,}5 \\ell = 1$, donc $\\ell = 2$.`
        }),
        () => ({
          enonce: `Soit $(u_n)$ définie par $u_0 = 10$ et $u_{n+1} = 0{,}8 u_n + 1$. On admet que $(u_n)$ converge. Déterminer sa limite $\\ell$.`,
          corrige: `Par passage à la limite dans $u_{n+1} = 0{,}8 u_n + 1$ : $\\ell = 0{,}8 \\ell + 1$, soit $0{,}2 \\ell = 1$, donc $\\ell = 5$.`
        }),
        () => {
          const a = pick([0.3, 0.4, 0.6]);
          const aDot = a.toString().replace('.', '{,}');
          const b = pick([2, 3, 5]);
          const ell = b / (1 - a);
          const ellAff = Number.isInteger(ell) ? `${ell}` : ell.toFixed(2).replace('.', '{,}');
          return {
            enonce: `Soit $(u_n)$ définie par $u_0 = 0$ et $u_{n+1} = ${aDot} u_n + ${b}$. Sachant que $(u_n)$ converge, déterminer sa limite.`,
            corrige: `Par passage à la limite : $\\ell = ${aDot} \\ell + ${b}$, soit $(1 - ${aDot}) \\ell = ${b}$, donc $\\ell = \\dfrac{${b}}{1 - ${aDot}} = ${ellAff}$.`
          };
        }
      ];
      return pick(variantes)();
    }
  },

  tsu_croiss_comp: (d) => {
    if (d === 1) {
      const variantes = [
        () => ({
          enonce: `Déterminer $\\lim\\limits_{n \\to +\\infty} \\dfrac{n}{e^n}$.`,
          corrige: `Par croissance comparée, l'exponentielle l'emporte sur la puissance : $\\lim\\limits_{n \\to +\\infty} \\dfrac{n}{e^n} = 0$.`
        }),
        () => ({
          enonce: `Énoncer le principe des croissances comparées (exponentielle vs puissance, ln vs puissance).`,
          corrige: `**Croissances comparées** : (1) en $+\\infty$, l'exponentielle l'emporte sur toute puissance : $\\lim \\dfrac{e^n}{n^p} = +\\infty$ pour tout $p \\geq 0$, ou de façon équivalente $\\lim \\dfrac{n^p}{e^n} = 0$. (2) toute puissance l'emporte sur le logarithme : $\\lim \\dfrac{\\ln(n)}{n^p} = 0$ pour tout $p > 0$.`
        }),
        () => ({
          enonce: `Déterminer $\\lim\\limits_{n \\to +\\infty} \\dfrac{\\ln(n)}{n}$.`,
          corrige: `Par croissance comparée, $\\lim\\limits_{n \\to +\\infty} \\dfrac{\\ln(n)}{n} = 0$ (la puissance l'emporte sur le logarithme).`
        }),
        () => ({
          enonce: `Donner $\\lim\\limits_{n \\to +\\infty} \\dfrac{e^n}{n}$.`,
          corrige: `Par croissance comparée, $\\lim\\limits_{n \\to +\\infty} \\dfrac{e^n}{n} = +\\infty$ (l'exponentielle l'emporte sur la puissance $n$).`
        })
      ];
      return pick(variantes)();
    } else if (d === 2) {
      const variantes = [
        () => {
          const p = pick([2, 3]);
          return {
            enonce: `Déterminer $\\lim\\limits_{n \\to +\\infty} \\dfrac{n^{${p}}}{e^n}$.`,
            corrige: `Par croissance comparée, $\\lim\\limits_{n \\to +\\infty} \\dfrac{n^{${p}}}{e^n} = 0$ (l'exponentielle l'emporte sur toute puissance).`
          };
        },
        () => ({
          enonce: `Déterminer $\\lim\\limits_{n \\to +\\infty} \\dfrac{\\ln(n)}{n}$.`,
          corrige: `Par croissance comparée, $\\lim\\limits_{n \\to +\\infty} \\dfrac{\\ln(n)}{n} = 0$ (la puissance l'emporte sur le logarithme).`
        })
      ];
      return pick(variantes)();
    } else {
      const variantes = [
        () => ({
          enonce: `Déterminer $\\lim\\limits_{n \\to +\\infty} \\dfrac{e^n}{n^3}$.`,
          corrige: `Par croissance comparée, $\\lim\\limits_{n \\to +\\infty} \\dfrac{e^n}{n^3} = +\\infty$ (l'exponentielle l'emporte largement sur toute puissance polynomiale).`
        }),
        () => {
          const p = pick([2, 3, 4]);
          return {
            enonce: `Déterminer $\\lim\\limits_{n \\to +\\infty} \\dfrac{n^{${p}} \\ln(n)}{e^n}$.`,
            corrige: `On peut écrire $\\dfrac{n^{${p}} \\ln(n)}{e^n} = \\dfrac{n^{${p+1}}}{e^n} \\times \\dfrac{\\ln(n)}{n}$. Le premier facteur tend vers 0 (croissance comparée), le second aussi (croissance comparée). Par produit : la limite vaut $0$.`
          };
        },
        () => ({
          enonce: `Déterminer $\\lim\\limits_{n \\to +\\infty} \\left(\\ln(n) - n\\right)$.`,
          corrige: `Forme indéterminée $+\\infty - \\infty$. On factorise par $n$ : $\\ln(n) - n = n\\left(\\dfrac{\\ln(n)}{n} - 1\\right)$. Par croissance comparée, $\\dfrac{\\ln(n)}{n} \\to 0$, donc le facteur tend vers $-1$. Comme $n \\to +\\infty$, on obtient $-\\infty$.`
        })
      ];
      return pick(variantes)();
    }
  },

  lim_infini: (d) => {
    if (d === 1) {
      // Facile : limites de référence
      const variantes = [
        () => ({
          enonce: `Donner $\\lim\\limits_{x \\to +\\infty} x^2$.`,
          corrige: `$\\lim\\limits_{x \\to +\\infty} x^2 = +\\infty$.`
        }),
        () => ({
          enonce: `Donner $\\lim\\limits_{x \\to +\\infty} \\dfrac{1}{x}$.`,
          corrige: `$\\lim\\limits_{x \\to +\\infty} \\dfrac{1}{x} = 0^+$ (positif car $x > 0$).`
        }),
        () => ({
          enonce: `Donner $\\lim\\limits_{x \\to -\\infty} x^3$.`,
          corrige: `$\\lim\\limits_{x \\to -\\infty} x^3 = -\\infty$ (puissance impaire).`
        })
      ];
      return pick(variantes)();
    } else if (d === 2) {
      // Moyen : polynômes (terme dominant)
      const variantes = [
        () => {
          const a = pick([2, 3, 5]);
          const b = pick([-3, -1, 1, 3]);
          const bAff = b >= 0 ? `+ ${b}` : `- ${-b}`;
          return {
            enonce: `Déterminer $\\lim\\limits_{x \\to +\\infty} \\left(${a}x^2 ${bAff}x\\right)$.`,
            corrige: `Le terme dominant est $${a}x^2$. Comme $${a} > 0$, $\\lim\\limits_{x \\to +\\infty} ${a}x^2 = +\\infty$. Par règle du terme dominant : $\\lim\\limits_{x \\to +\\infty} (${a}x^2 ${bAff}x) = +\\infty$.`
          };
        },
        () => {
          const a = pick([2, 3]);
          return {
            enonce: `Déterminer $\\lim\\limits_{x \\to -\\infty} \\left(-${a}x^3\\right)$.`,
            corrige: `$\\lim\\limits_{x \\to -\\infty} x^3 = -\\infty$, donc $-${a}x^3 \\to +\\infty$. $\\lim\\limits_{x \\to -\\infty} (-${a}x^3) = +\\infty$.`
          };
        }
      ];
      return pick(variantes)();
    } else {
      // Difficile : quotient de polynômes
      const a = pick([2, 3, 5]);
      const b = pick([2, 3, 4]);
      return {
        enonce: `Déterminer $\\lim\\limits_{x \\to +\\infty} \\dfrac{${a}x^2 + x}{${b}x^2 - 1}$.`,
        corrige: `Forme indéterminée $\\dfrac{+\\infty}{+\\infty}$. On factorise par $x^2$ : $\\dfrac{${a}x^2 + x}{${b}x^2 - 1} = \\dfrac{x^2(${a} + \\frac{1}{x})}{x^2(${b} - \\frac{1}{x^2})} = \\dfrac{${a} + \\frac{1}{x}}{${b} - \\frac{1}{x^2}}$. Quand $x \\to +\\infty$, $\\frac{1}{x} \\to 0$ et $\\frac{1}{x^2} \\to 0$. La limite vaut $\\dfrac{${a}}{${b}}$.`
      };
    }
  },

  lim_point: (d) => {
    if (d === 1) {
      // Facile : limite en un point où la fonction est définie (calcul direct)
      const variantes = [
        () => {
          const a = pick([2, 3, 5]);
          return {
            enonce: `Déterminer $\\lim\\limits_{x \\to 2} (x^2 + ${a})$.`,
            corrige: `La fonction $x \\mapsto x^2 + ${a}$ est continue, donc $\\lim\\limits_{x \\to 2} (x^2 + ${a}) = 2^2 + ${a} = ${4 + a}$.`
          };
        },
        () => ({
          enonce: `Déterminer $\\lim\\limits_{x \\to 0} e^x$.`,
          corrige: `La fonction exponentielle est continue en 0, donc $\\lim\\limits_{x \\to 0} e^x = e^0 = 1$.`
        })
      ];
      return pick(variantes)();
    } else if (d === 2) {
      // Moyen : limite en 0 de 1/x ou 1/x^2 (avec signe)
      const variantes = [
        () => ({
          enonce: `Déterminer $\\lim\\limits_{x \\to 0^+} \\dfrac{1}{x}$.`,
          corrige: `Quand $x \\to 0$ avec $x > 0$, on a $x > 0$ très petit, donc $\\dfrac{1}{x}$ devient très grand positif. $\\lim\\limits_{x \\to 0^+} \\dfrac{1}{x} = +\\infty$.`
        }),
        () => ({
          enonce: `Déterminer $\\lim\\limits_{x \\to 0^-} \\dfrac{1}{x}$.`,
          corrige: `Quand $x \\to 0$ avec $x < 0$, $\\dfrac{1}{x}$ est négatif et devient très grand en valeur absolue. $\\lim\\limits_{x \\to 0^-} \\dfrac{1}{x} = -\\infty$.`
        }),
        () => ({
          enonce: `Déterminer $\\lim\\limits_{x \\to 0} \\dfrac{1}{x^2}$.`,
          corrige: `$x^2 > 0$ pour $x \\neq 0$, et $x^2 \\to 0^+$ quand $x \\to 0$. Donc $\\dfrac{1}{x^2} \\to +\\infty$. $\\lim\\limits_{x \\to 0} \\dfrac{1}{x^2} = +\\infty$.`
        })
      ];
      return pick(variantes)();
    } else {
      // Difficile : limite quand le dénominateur s'annule à droite/gauche
      const a = pick([2, 3]);
      return {
        enonce: `Déterminer $\\lim\\limits_{x \\to ${a}^+} \\dfrac{1}{x - ${a}}$ et $\\lim\\limits_{x \\to ${a}^-} \\dfrac{1}{x - ${a}}$.`,
        corrige: `Pour $x \\to ${a}^+$ : $x - ${a} \\to 0^+$ (positif), donc $\\dfrac{1}{x - ${a}} \\to +\\infty$. Pour $x \\to ${a}^-$ : $x - ${a} \\to 0^-$ (négatif), donc $\\dfrac{1}{x - ${a}} \\to -\\infty$. La fonction admet une **asymptote verticale** d'équation $x = ${a}$.`
      };
    }
  },

  lim_fi: (d) => {
    if (d === 1) {
      // Facile : reconnaître une FI
      return {
        enonce: reformule([
          `Citer les 4 formes indéterminées classiques en analyse.`,
          `Quelles sont les 4 formes indéterminées qu'on rencontre lors du calcul de limites ?`,
          `Énumérer les 4 cas de "formes indéterminées" pour les limites de fonctions.`,
          `Donner les 4 formes indéterminées et préciser pour chacune une technique de levée typique.`
        ]),
        corrige: `Les 4 formes indéterminées sont : "zéro sur zéro" ($\\frac{0}{0}$), "infini sur infini" ($\\frac{\\infty}{\\infty}$), "infini moins infini" ($\\infty - \\infty$) et "zéro fois infini" ($0 \\times \\infty$). **Techniques de levée** : factorisation par le terme dominant, mise au même dénominateur, croissance comparée, conjugué, taux d'accroissement.`
      };
    } else if (d === 2) {
      // Moyen : FI de type ∞ - ∞ avec polynômes
      const variantes = [
        () => {
          const a = pick([2, 3]);
          return {
            enonce: `Déterminer $\\lim\\limits_{x \\to +\\infty} \\left(x^2 - ${a}x\\right)$.`,
            corrige: `Forme indéterminée $+\\infty - \\infty$. On factorise par $x^2$ : $x^2 - ${a}x = x^2\\left(1 - \\dfrac{${a}}{x}\\right)$. Quand $x \\to +\\infty$, $\\dfrac{${a}}{x} \\to 0$, donc le facteur tend vers $1$. Comme $x^2 \\to +\\infty$, $\\lim\\limits_{x \\to +\\infty} (x^2 - ${a}x) = +\\infty$.`
          };
        }
      ];
      return pick(variantes)();
    } else {
      // Difficile : FI résolue par croissance comparée
      const variantes = [
        () => ({
          enonce: `Déterminer $\\lim\\limits_{x \\to +\\infty} \\dfrac{e^x}{x^2 + 1}$.`,
          corrige: `Forme indéterminée $\\dfrac{+\\infty}{+\\infty}$. On peut factoriser au dénominateur, mais le plus simple est d'utiliser la croissance comparée : $\\dfrac{e^x}{x^2 + 1} = \\dfrac{e^x}{x^2} \\times \\dfrac{1}{1 + 1/x^2}$. Par croissance comparée, $\\dfrac{e^x}{x^2} \\to +\\infty$ et $\\dfrac{1}{1 + 1/x^2} \\to 1$. Donc $\\lim = +\\infty$.`
        }),
        () => ({
          enonce: `Déterminer $\\lim\\limits_{x \\to +\\infty} \\left(\\sqrt{x^2 + x} - x\\right)$.`,
          corrige: `Forme indéterminée $+\\infty - \\infty$. On utilise la quantité conjuguée : $\\sqrt{x^2 + x} - x = \\dfrac{(\\sqrt{x^2 + x} - x)(\\sqrt{x^2 + x} + x)}{\\sqrt{x^2 + x} + x} = \\dfrac{x^2 + x - x^2}{\\sqrt{x^2 + x} + x} = \\dfrac{x}{\\sqrt{x^2 + x} + x}$. Pour $x > 0$, on factorise par $x$ : $= \\dfrac{x}{x(\\sqrt{1 + 1/x} + 1)} = \\dfrac{1}{\\sqrt{1 + 1/x} + 1}$. Quand $x \\to +\\infty$, $1/x \\to 0$, donc la limite vaut $\\dfrac{1}{\\sqrt{1} + 1} = \\dfrac{1}{2}$.`
        })
      ];
      return pick(variantes)();
    }
  },

  lim_asymptote: (d) => {
    if (d === 1) {
      // Facile : asymptote horizontale, lecture
      const variantes = [
        () => {
          const a = pick([2, 3, 5]);
          return {
            enonce: `Une fonction $f$ vérifie $\\lim\\limits_{x \\to +\\infty} f(x) = ${a}$. Que peut-on dire géométriquement de la courbe de $f$ ?`,
            corrige: `La courbe de $f$ admet une **asymptote horizontale** d'équation $y = ${a}$ en $+\\infty$.`
          };
        },
        () => {
          const a = pick([1, 2, 4]);
          return {
            enonce: `Une fonction $f$ vérifie $\\lim\\limits_{x \\to ${a}^+} f(x) = +\\infty$. Que peut-on dire géométriquement de la courbe de $f$ ?`,
            corrige: `La courbe de $f$ admet une **asymptote verticale** d'équation $x = ${a}$ (la courbe "monte vers $+\\infty$" en s'approchant de la droite $x = ${a}$ par la droite).`
          };
        },
        () => ({
          enonce: `Énoncer la définition d'une asymptote horizontale à la courbe d'une fonction $f$.`,
          corrige: `La courbe de $f$ admet la droite d'équation $y = \\ell$ comme **asymptote horizontale** en $+\\infty$ (resp. $-\\infty$) si $\\lim\\limits_{x \\to +\\infty} f(x) = \\ell$ (resp. $\\lim\\limits_{x \\to -\\infty} f(x) = \\ell$).`
        }),
        () => ({
          enonce: `Énoncer la définition d'une asymptote verticale à la courbe d'une fonction $f$.`,
          corrige: `La courbe de $f$ admet la droite d'équation $x = a$ comme **asymptote verticale** si $\\lim\\limits_{x \\to a^+} f(x) = \\pm\\infty$ ou $\\lim\\limits_{x \\to a^-} f(x) = \\pm\\infty$.`
        })
      ];
      return pick(variantes)();
    } else if (d === 2) {
      const variantes = [
        () => {
          const a = pick([2, 3]);
          return {
            enonce: `Soit $f(x) = \\dfrac{${a}x + 1}{x}$ pour $x \\neq 0$. Déterminer les éventuelles asymptotes de la courbe de $f$.`,
            corrige: `$f(x) = \\dfrac{${a}x + 1}{x} = ${a} + \\dfrac{1}{x}$. Quand $x \\to \\pm\\infty$, $\\dfrac{1}{x} \\to 0$, donc $f(x) \\to ${a}$. **Asymptote horizontale** d'équation $y = ${a}$. Quand $x \\to 0^+$ (resp. $0^-$), $\\dfrac{1}{x} \\to +\\infty$ (resp. $-\\infty$). **Asymptote verticale** d'équation $x = 0$.`
          };
        }
      ];
      return pick(variantes)();
    } else {
      const variantes = [
        () => ({
          enonce: `Soit $f(x) = \\dfrac{x^2 + 1}{x - 1}$ pour $x \\neq 1$. Déterminer la limite en $1$ à gauche et à droite, et conclure sur l'éventuelle asymptote verticale.`,
          corrige: `Le numérateur $x^2 + 1 \\to 1^2 + 1 = 2 > 0$ quand $x \\to 1$. Le dénominateur $x - 1$ : pour $x \\to 1^+$, $x - 1 \\to 0^+$ et $f(x) \\to +\\infty$. Pour $x \\to 1^-$, $x - 1 \\to 0^-$ et $f(x) \\to -\\infty$. La droite d'équation $x = 1$ est **asymptote verticale**.`
        }),
        () => ({
          enonce: `Soit $f(x) = \\dfrac{2x - 3}{x + 1}$. Déterminer les asymptotes horizontales et verticales de la courbe de $f$.`,
          corrige: `**Asymptote horizontale** : $\\lim\\limits_{x \\to \\pm\\infty} \\dfrac{2x - 3}{x + 1} = \\lim \\dfrac{x(2 - 3/x)}{x(1 + 1/x)} = 2$. Donc $y = 2$ est asymptote horizontale. **Asymptote verticale** : en $x = -1$, le numérateur vaut $-5 \\neq 0$ et le dénominateur s'annule. Pour $x \\to -1^+$, dénom $\\to 0^+$, $f \\to -\\infty$. Pour $x \\to -1^-$, dénom $\\to 0^-$, $f \\to +\\infty$. Donc $x = -1$ est asymptote verticale.`
        }),
        () => ({
          enonce: `Soit $f(x) = \\dfrac{3x^2}{x^2 + 1}$. Déterminer la (ou les) asymptote(s) horizontale(s) de la courbe.`,
          corrige: `$\\lim\\limits_{x \\to \\pm\\infty} \\dfrac{3x^2}{x^2 + 1}$ : on factorise par $x^2$ au numérateur et au dénominateur : $\\dfrac{3}{1 + 1/x^2} \\to 3$. Donc $y = 3$ est **asymptote horizontale** en $\\pm\\infty$. (Pas d'asymptote verticale car $x^2 + 1 > 0$ partout.)`
        })
      ];
      return pick(variantes)();
    }
  },

  dc_composee: (d) => {
    if (d === 1) {
      // Facile : dérivée de (ax+b)^n
      const a = pick([2, 3, 4]);
      const b = pick([1, 2, 3]);
      const n = pick([2, 3]);
      return {
        enonce: `Soit $f(x) = (${a}x + ${b})^{${n}}$. Calculer $f'(x)$.`,
        corrige: `On pose $u(x) = ${a}x + ${b}$, donc $u'(x) = ${a}$. La formule de la composée donne $(u^{${n}})' = ${n}u^{${n-1}} \\times u'$. Donc $f'(x) = ${n} \\times (${a}x + ${b})^{${n-1}} \\times ${a} = ${n*a}(${a}x + ${b})^{${n-1}}$.`
      };
    } else if (d === 2) {
      // Moyen : (e^(ax+b))', ln(x^2+1), √(x²+1)
      const variantes = [
        () => {
          const a = pick([2, 3]);
          const b = pick([1, 2, 3]);
          return {
            enonce: `Soit $f(x) = e^{${a}x^2 + ${b}}$. Calculer $f'(x)$.`,
            corrige: `Posons $u(x) = ${a}x^2 + ${b}$, donc $u'(x) = ${2*a}x$. Formule : $(e^u)' = u' e^u$. Donc $f'(x) = ${2*a}x \\cdot e^{${a}x^2 + ${b}}$.`
          };
        },
        () => ({
          enonce: `Soit $f(x) = \\sqrt{x^2 + 1}$. Calculer $f'(x)$.`,
          corrige: `On pose $u(x) = x^2 + 1$, donc $u'(x) = 2x$. La dérivée de $\\sqrt{u}$ est $\\dfrac{u'}{2\\sqrt{u}}$. Donc $f'(x) = \\dfrac{2x}{2\\sqrt{x^2 + 1}} = \\dfrac{x}{\\sqrt{x^2 + 1}}$.`
        })
      ];
      return pick(variantes)();
    } else {
      const variantes = [
        () => {
          const a = pick([2, 3]);
          return {
            enonce: `Soit $f(x) = \\ln(x^2 + ${a})$ et $g(x) = e^{f(x)}$. Calculer $g'(x)$ en utilisant les dérivées composées.`,
            corrige: `$f'(x) = \\dfrac{2x}{x^2 + ${a}}$. Par dérivée composée, $g'(x) = f'(x) e^{f(x)} = \\dfrac{2x}{x^2 + ${a}} \\times e^{\\ln(x^2 + ${a})} = \\dfrac{2x}{x^2 + ${a}} \\times (x^2 + ${a}) = 2x$. (En effet, $g(x) = e^{\\ln(x^2 + ${a})} = x^2 + ${a}$, on retrouve directement $g'(x) = 2x$.)`
          };
        },
        () => ({
          enonce: `Soit $f(x) = \\sqrt{1 + x^2}$. Calculer $f'(x)$.`,
          corrige: `On pose $u(x) = 1 + x^2$, $u'(x) = 2x$. $f(x) = \\sqrt{u(x)} = u(x)^{1/2}$. Par composée : $f'(x) = \\dfrac{u'(x)}{2\\sqrt{u(x)}} = \\dfrac{2x}{2\\sqrt{1 + x^2}} = \\dfrac{x}{\\sqrt{1 + x^2}}$.`
        }),
        () => ({
          enonce: `Soit $f(x) = e^{\\sin(x)}$. Calculer $f'(x)$.`,
          corrige: `On pose $u(x) = \\sin(x)$, $u'(x) = \\cos(x)$. $f(x) = e^{u(x)}$. Par composée : $f'(x) = u'(x) e^{u(x)} = \\cos(x) \\, e^{\\sin(x)}$.`
        }),
        () => ({
          enonce: `Soit $f(x) = \\ln(\\cos(x))$ pour $x \\in \\left]-\\dfrac{\\pi}{2}\\,;\\,\\dfrac{\\pi}{2}\\right[$. Calculer $f'(x)$.`,
          corrige: `On pose $u(x) = \\cos(x)$, $u'(x) = -\\sin(x)$. $f(x) = \\ln(u(x))$. Par composée : $f'(x) = \\dfrac{u'(x)}{u(x)} = \\dfrac{-\\sin(x)}{\\cos(x)} = -\\tan(x)$.`
        })
      ];
      return pick(variantes)();
    }
  },

  dc_seconde: (d) => {
    if (d === 1) {
      // Facile : dériver deux fois un polynôme
      const a = pick([2, 3, 4]);
      const b = pick([1, 2, 3]);
      return {
        enonce: `Soit $f(x) = ${a}x^3 + ${b}x^2 - 1$. Calculer $f'(x)$ puis $f''(x)$.`,
        corrige: `$f'(x) = ${3*a}x^2 + ${2*b}x$. $f''(x) = ${6*a}x + ${2*b}$.`
      };
    } else if (d === 2) {
      const variantes = [
        () => ({
          enonce: `Soit $f(x) = e^{2x}$. Calculer $f'(x)$ et $f''(x)$.`,
          corrige: `$f'(x) = 2e^{2x}$. $f''(x) = 2 \\times 2e^{2x} = 4e^{2x}$.`
        }),
        () => ({
          enonce: `Soit $f(x) = \\ln(x)$ pour $x > 0$. Calculer $f'(x)$ et $f''(x)$.`,
          corrige: `$f'(x) = \\dfrac{1}{x} = x^{-1}$. $f''(x) = -x^{-2} = -\\dfrac{1}{x^2}$.`
        }),
        () => {
          const a = pick([2, 3, 4]);
          return {
            enonce: `Soit $f(x) = e^{-${a}x}$. Calculer $f'(x)$ et $f''(x)$.`,
            corrige: `$f'(x) = -${a}e^{-${a}x}$. $f''(x) = (-${a})^2 e^{-${a}x} = ${a*a}e^{-${a}x}$.`
          };
        },
        () => {
          const a = pick([3, 4, 5]);
          return {
            enonce: `Soit $f(x) = x^{${a}}$ pour $x \\in \\mathbb{R}$. Calculer $f'(x)$ et $f''(x)$.`,
            corrige: `$f'(x) = ${a}x^{${a-1}}$. $f''(x) = ${a*(a-1)}x^{${a-2}}$.`
          };
        }
      ];
      return pick(variantes)();
    } else {
      const variantes = [
        () => ({
          enonce: `Soit $f(x) = x \\cdot e^x$. Calculer $f''(x)$.`,
          corrige: `Calcul de $f'$ : $f'(x) = 1 \\cdot e^x + x \\cdot e^x = (1 + x)e^x$. Calcul de $f''$ avec à nouveau la formule du produit, $u(x) = 1 + x$ et $v(x) = e^x$ : $f''(x) = 1 \\cdot e^x + (1 + x) \\cdot e^x = (2 + x)e^x$.`
        }),
        () => ({
          enonce: `Soit $f(x) = x \\cdot \\ln(x)$ pour $x > 0$. Calculer $f''(x)$.`,
          corrige: `$f'(x) = \\ln(x) + x \\times \\dfrac{1}{x} = \\ln(x) + 1$. $f''(x) = \\dfrac{1}{x}$.`
        }),
        () => ({
          enonce: `Soit $f(x) = x^2 \\, e^x$. Calculer $f'(x)$ et $f''(x)$.`,
          corrige: `Avec la formule du produit : $f'(x) = 2x \\, e^x + x^2 \\, e^x = (x^2 + 2x)e^x$. Puis $f''(x)$ avec $u = x^2 + 2x$ et $v = e^x$ : $f''(x) = (2x + 2)e^x + (x^2 + 2x)e^x = (x^2 + 4x + 2)e^x$.`
        })
      ];
      return pick(variantes)();
    }
  },

  dc_convexite: (d) => {
    if (d === 1) {
      return {
        enonce: reformule([
          `Comment déterminer si une fonction $f$ est convexe sur un intervalle $I$ à partir de sa dérivée seconde ?`,
          `Énoncer le critère de convexité d'une fonction $f$ à l'aide de sa dérivée seconde.`,
          `Quel est le lien entre le signe de $f''$ et la convexité/concavité de $f$ ?`,
          `Définir la convexité (et la concavité) d'une fonction à partir de $f''$.`
        ]),
        corrige: `Une fonction $f$ est **convexe** sur $I$ si et seulement si $f''(x) \\geq 0$ pour tout $x \\in I$. Elle est **concave** si $f''(x) \\leq 0$ sur $I$. (Géométriquement : convexe = "tournée vers le haut", concave = "tournée vers le bas".)`
      };
    } else if (d === 2) {
      const variantes = [
        () => ({
          enonce: `Étudier la convexité de $f(x) = x^2$ sur $\\mathbb{R}$.`,
          corrige: `$f'(x) = 2x$, $f''(x) = 2 > 0$ pour tout $x$. Donc $f$ est **convexe** sur $\\mathbb{R}$.`
        }),
        () => ({
          enonce: `Étudier la convexité de $f(x) = e^x$ sur $\\mathbb{R}$.`,
          corrige: `$f'(x) = e^x$, $f''(x) = e^x > 0$ pour tout $x \\in \\mathbb{R}$. Donc $f$ est **convexe** sur $\\mathbb{R}$.`
        }),
        () => ({
          enonce: `Étudier la convexité de $f(x) = \\ln(x)$ sur $]0\\,;\\,+\\infty[$.`,
          corrige: `$f'(x) = \\dfrac{1}{x}$, $f''(x) = -\\dfrac{1}{x^2} < 0$ sur $]0\\,;\\,+\\infty[$. Donc $f$ est **concave** sur $]0\\,;\\,+\\infty[$.`
        })
      ];
      return pick(variantes)();
    } else {
      const variantes = [
        () => ({
          enonce: `Étudier la convexité de $f(x) = x^3$ sur $\\mathbb{R}$.`,
          corrige: `$f'(x) = 3x^2$, $f''(x) = 6x$. Signe de $f''$ : $f''(x) < 0$ pour $x < 0$ et $f''(x) > 0$ pour $x > 0$. Donc $f$ est **concave** sur $]-\\infty\\,;\\,0]$ et **convexe** sur $[0\\,;\\,+\\infty[$. Le point $(0\\,;\\,0)$ est un **point d'inflexion**.`
        }),
        () => ({
          enonce: `Étudier la convexité de $f(x) = x^2 \\ln(x)$ sur $]0\\,;\\,+\\infty[$.`,
          corrige: `$f'(x) = 2x \\ln(x) + x^2 \\times \\dfrac{1}{x} = 2x\\ln(x) + x$. $f''(x) = 2\\ln(x) + 2x \\times \\dfrac{1}{x} + 1 = 2\\ln(x) + 3$. $f''(x) = 0$ pour $\\ln(x) = -\\dfrac{3}{2}$, soit $x = e^{-3/2}$. Sur $]0\\,;\\,e^{-3/2}[$ : $f''(x) < 0$ donc $f$ **concave** ; sur $]e^{-3/2}\\,;\\,+\\infty[$ : $f''(x) > 0$ donc $f$ **convexe**.`
        }),
        () => ({
          enonce: `Étudier la convexité de $f(x) = e^{-x^2}$ sur $\\mathbb{R}$.`,
          corrige: `$f'(x) = -2x \\, e^{-x^2}$. $f''(x) = -2e^{-x^2} - 2x(-2x)e^{-x^2} = (-2 + 4x^2)e^{-x^2} = 2(2x^2 - 1)e^{-x^2}$. Comme $e^{-x^2} > 0$, le signe de $f''$ est celui de $2x^2 - 1$, qui s'annule en $\\pm \\dfrac{1}{\\sqrt{2}}$. $f$ est **convexe** sur $\\left]-\\infty\\,;\\,-\\dfrac{1}{\\sqrt{2}}\\right]$ et sur $\\left[\\dfrac{1}{\\sqrt{2}}\\,;\\,+\\infty\\right[$, et **concave** sur $\\left[-\\dfrac{1}{\\sqrt{2}}\\,;\\,\\dfrac{1}{\\sqrt{2}}\\right]$. Deux points d'inflexion.`
        })
      ];
      return pick(variantes)();
    }
  },

  dc_inflexion: (d) => {
    if (d === 1) {
      return {
        enonce: reformule([
          `Qu'est-ce qu'un point d'inflexion d'une courbe ?`,
          `Définir un point d'inflexion à partir du comportement de la convexité.`,
          `Comment caractérise-t-on un point d'inflexion à l'aide de $f''$ ?`,
          `Énoncer la condition (nécessaire et suffisante) pour qu'un point $(a\\,;\\,f(a))$ soit un point d'inflexion.`
        ]),
        corrige: `Un **point d'inflexion** est un point de la courbe où celle-ci **change de convexité** (passe de convexe à concave ou inversement). En ce point, $f''$ s'annule **et change de signe**. (Attention : $f''(a) = 0$ ne suffit pas, il faut aussi le changement de signe.)`
      };
    } else if (d === 2) {
      const variantes = [
        () => ({
          enonce: `Soit $f(x) = x^3 - 3x$. Déterminer le(s) point(s) d'inflexion de la courbe de $f$.`,
          corrige: `$f'(x) = 3x^2 - 3$, $f''(x) = 6x$. $f''(x) = 0$ pour $x = 0$, et $f''$ change de signe en 0 (négatif à gauche, positif à droite). Le point $(0\\,;\\,f(0)) = (0\\,;\\,0)$ est un **point d'inflexion**.`
        }),
        () => ({
          enonce: `Soit $f(x) = x^3 + 3x^2$. Déterminer le(s) point(s) d'inflexion de la courbe de $f$.`,
          corrige: `$f'(x) = 3x^2 + 6x$, $f''(x) = 6x + 6 = 6(x + 1)$. $f''(x) = 0$ pour $x = -1$, avec changement de signe. $f(-1) = -1 + 3 = 2$. Point d'inflexion : $(-1\\,;\\,2)$.`
        }),
        () => ({
          enonce: `Soit $f(x) = x^3 - 6x^2 + 5$. Déterminer le(s) point(s) d'inflexion de la courbe de $f$.`,
          corrige: `$f'(x) = 3x^2 - 12x$, $f''(x) = 6x - 12 = 6(x - 2)$. $f''(x) = 0$ pour $x = 2$, avec changement de signe. $f(2) = 8 - 24 + 5 = -11$. Point d'inflexion : $(2\\,;\\,-11)$.`
        })
      ];
      return pick(variantes)();
    } else {
      const variantes = [
        () => ({
          enonce: `Soit $f(x) = x^4 - 6x^2$. Déterminer les points d'inflexion de la courbe de $f$.`,
          corrige: `$f'(x) = 4x^3 - 12x$, $f''(x) = 12x^2 - 12 = 12(x^2 - 1) = 12(x-1)(x+1)$. $f''(x) = 0$ pour $x = -1$ ou $x = 1$, et $f''$ change de signe en ces points. Calcul : $f(-1) = 1 - 6 = -5$ et $f(1) = -5$. Les points d'inflexion sont $(-1\\,;\\,-5)$ et $(1\\,;\\,-5)$.`
        }),
        () => ({
          enonce: `Soit $f(x) = x^4 - 4x^3 + 6x^2$. Déterminer les points d'inflexion de la courbe de $f$.`,
          corrige: `$f'(x) = 4x^3 - 12x^2 + 12x$, $f''(x) = 12x^2 - 24x + 12 = 12(x^2 - 2x + 1) = 12(x - 1)^2$. $f''(x) = 0$ pour $x = 1$, mais $f''$ est **positive de part et d'autre** (carré), donc **pas de changement de signe** : il n'y a **pas de point d'inflexion**.`
        }),
        () => ({
          enonce: `Soit $f(x) = x \\, e^{-x}$. Déterminer le(s) point(s) d'inflexion de la courbe de $f$.`,
          corrige: `$f'(x) = e^{-x} - x e^{-x} = (1 - x)e^{-x}$. $f''(x) = -e^{-x} - (1-x)e^{-x} = (x - 2)e^{-x}$. $f''(x) = 0$ pour $x = 2$, avec changement de signe. $f(2) = 2e^{-2} \\approx 0{,}27$. Point d'inflexion : $(2\\,;\\,2e^{-2})$.`
        })
      ];
      return pick(variantes)();
    }
  },

  bi_proba: (d) => {
    const binom = (n, k) => {
      if (k < 0 || k > n) return 0;
      if (k === 0 || k === n) return 1;
      let r = 1;
      for (let i = 0; i < k; i++) r = r * (n - i) / (i + 1);
      return Math.round(r);
    };
    if (d === 1) {
      // Facile : rappel de la formule, ou cas particulier P(X=0) ou P(X=n)
      const variantes = [
        () => ({
          enonce: `Énoncer la formule générale de $P(X = k)$ quand $X$ suit une loi binomiale $\\mathcal{B}(n\\,;\\,p)$.`,
          corrige: `$P(X = k) = \\binom{n}{k} p^k (1 - p)^{n - k}$ pour $0 \\leq k \\leq n$.`
        }),
        () => {
          const n = pick([5, 8, 10]);
          const p = pick([0.3, 0.5]);
          const pAff = p.toString().replace('.', '{,}');
          const proba = Math.pow(1 - p, n);
          const probaAff = proba.toFixed(4).replace('.', '{,}');
          return {
            enonce: `$X$ suit la loi binomiale $\\mathcal{B}(${n}\\,;\\,${pAff})$. Calculer $P(X = 0)$.`,
            corrige: `$P(X = 0) = \\binom{${n}}{0} p^0 (1-p)^{${n}} = (1 - ${pAff})^{${n}} = ${(1-p).toString().replace('.', '{,}')}^{${n}} \\approx ${probaAff}$.`
          };
        }
      ];
      return pick(variantes)();
    } else if (d === 2) {
      // Moyen : calcul de P(X = k) avec k au milieu
      const n = pick([4, 5, 6]);
      const p = pick([0.3, 0.4, 0.5, 0.6]);
      const k = pick([1, 2]);
      if (k > n) return ctx_bi(d); // sécurité, ne devrait pas arriver
      const pAff = p.toString().replace('.', '{,}');
      const proba = binom(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);
      const probaAff = proba.toFixed(4).replace('.', '{,}');
      return {
        enonce: `$X$ suit la loi binomiale $\\mathcal{B}(${n}\\,;\\,${pAff})$. Calculer $P(X = ${k})$.`,
        corrige: `$P(X = ${k}) = \\binom{${n}}{${k}} \\times (${pAff})^{${k}} \\times (1 - ${pAff})^{${n - k}} = ${binom(n, k)} \\times (${pAff})^{${k}} \\times (${(1-p).toString().replace('.', '{,}')})^{${n - k}} \\approx ${probaAff}$.`
      };
    } else {
      // Difficile : contexte concret
      const variantes = [
        () => ({
          enonce: `Une urne contient 4 boules rouges et 6 boules noires. On effectue 5 tirages successifs avec remise. Soit $X$ le nombre de boules rouges obtenues. Calculer $P(X = 2)$.`,
          corrige: `$X$ suit la loi binomiale $\\mathcal{B}(5\\,;\\,0{,}4)$ (5 tirages, probabilité de "rouge" = $\\frac{4}{10} = 0{,}4$). $P(X = 2) = \\binom{5}{2} \\times 0{,}4^2 \\times 0{,}6^3 = 10 \\times 0{,}16 \\times 0{,}216 = 0{,}3456$.`
        }),
        () => ({
          enonce: `Un QCM contient 6 questions, chacune avec 4 réponses possibles dont une seule juste. Un élève répond au hasard à chaque question. Soit $X$ le nombre de bonnes réponses. Calculer $P(X = 3)$.`,
          corrige: `$X$ suit $\\mathcal{B}(6\\,;\\,0{,}25)$. $P(X = 3) = \\binom{6}{3} \\times 0{,}25^3 \\times 0{,}75^3 = 20 \\times 0{,}015625 \\times 0{,}421875 \\approx 0{,}132$.`
        }),
        () => ({
          enonce: `Une pièce truquée tombe sur "pile" avec probabilité $0{,}3$. On lance la pièce 8 fois. Calculer la probabilité d'obtenir exactement 4 piles.`,
          corrige: `Soit $X$ le nombre de piles obtenus. $X$ suit $\\mathcal{B}(8\\,;\\,0{,}3)$. $P(X = 4) = \\binom{8}{4} \\times 0{,}3^4 \\times 0{,}7^4 = 70 \\times 0{,}0081 \\times 0{,}2401 \\approx 0{,}136$.`
        }),
        () => ({
          enonce: `Dans un sondage, $40\\,\\%$ des personnes interrogées déclarent préférer le produit A. On interroge un échantillon de 10 personnes. Soit $X$ le nombre de personnes préférant A. Calculer $P(X = 5)$.`,
          corrige: `$X$ suit $\\mathcal{B}(10\\,;\\,0{,}4)$. $P(X = 5) = \\binom{10}{5} \\times 0{,}4^5 \\times 0{,}6^5 = 252 \\times 0{,}01024 \\times 0{,}07776 \\approx 0{,}201$.`
        })
      ];
      return pick(variantes)();
    }
  },

  bi_esperance: (d) => {
    if (d === 1) {
      return {
        enonce: reformule([
          `Donner les formules de l'espérance et de la variance d'une variable aléatoire $X$ suivant la loi binomiale $\\mathcal{B}(n\\,;\\,p)$.`,
          `Soit $X \\sim \\mathcal{B}(n\\,;\\,p)$. Quelles sont les formules donnant $E(X)$ et $V(X)$ ?`,
          `Énoncer les formules de l'espérance, de la variance et de l'écart-type pour une loi binomiale de paramètres $n$ et $p$.`,
          `Comment calcule-t-on l'espérance et la variance d'une loi binomiale $\\mathcal{B}(n\\,;\\,p)$ ?`
        ]),
        corrige: `$E(X) = np$ et $V(X) = np(1 - p)$. L'écart-type vaut $\\sigma(X) = \\sqrt{np(1-p)}$.`
      };
    } else if (d === 2) {
      const n = pick([10, 20, 50]);
      const p = pick([0.2, 0.3, 0.5]);
      const pAff = p.toString().replace('.', '{,}');
      const E = n * p;
      const V = n * p * (1 - p);
      const Eaff = Number.isInteger(E) ? `${E}` : E.toString().replace('.', '{,}');
      const Vaff = V.toString().replace('.', '{,}');
      return {
        enonce: `$X$ suit la loi binomiale $\\mathcal{B}(${n}\\,;\\,${pAff})$. Calculer $E(X)$ et $V(X)$.`,
        corrige: `$E(X) = n \\times p = ${n} \\times ${pAff} = ${Eaff}$. $V(X) = np(1-p) = ${n} \\times ${pAff} \\times ${(1-p).toString().replace('.', '{,}')} = ${Vaff}$.`
      };
    } else {
      const variantes = [
        () => ({
          enonce: `Dans un sondage, on interroge 200 personnes au hasard. La probabilité qu'une personne vote pour le candidat A est de $0{,}45$. Soit $X$ le nombre de personnes votant pour A. Donner la loi de $X$, son espérance, et interpréter.`,
          corrige: `Les 200 réponses sont indépendantes (sondage au hasard), avec probabilité de succès $0{,}45$ à chaque fois. Donc $X$ suit $\\mathcal{B}(200\\,;\\,0{,}45)$. $E(X) = 200 \\times 0{,}45 = 90$. **Interprétation** : en moyenne, on s'attend à environ 90 personnes votant pour A sur 200 interrogées.`
        }),
        () => ({
          enonce: `Une usine produit des composants électroniques. La probabilité qu'un composant soit défectueux est de $0{,}02$. On prélève au hasard un lot de 500 composants. Soit $X$ le nombre de composants défectueux. Calculer $E(X)$ et $\\sigma(X)$.`,
          corrige: `$X$ suit $\\mathcal{B}(500\\,;\\,0{,}02)$. $E(X) = 500 \\times 0{,}02 = 10$. $V(X) = 500 \\times 0{,}02 \\times 0{,}98 = 9{,}8$. $\\sigma(X) = \\sqrt{9{,}8} \\approx 3{,}13$.`
        }),
        () => ({
          enonce: `Un joueur de basket réussit $70\\,\\%$ de ses lancers francs. Il en tente 25 dans un match. Soit $X$ le nombre de lancers réussis. Calculer son espérance et sa variance.`,
          corrige: `$X$ suit $\\mathcal{B}(25\\,;\\,0{,}7)$. $E(X) = 25 \\times 0{,}7 = 17{,}5$. $V(X) = 25 \\times 0{,}7 \\times 0{,}3 = 5{,}25$.`
        })
      ];
      return pick(variantes)();
    }
  },

  bi_proba_cumulee: (d) => {
    if (d === 1) {
      return {
        enonce: reformule([
          `Pour calculer $P(X \\leq k)$ avec $X$ suivant $\\mathcal{B}(n\\,;\\,p)$, quelle commande utiliser sur calculatrice ?`,
          `Comment utilise-t-on la calculatrice pour calculer $P(X \\leq k)$ quand $X \\sim \\mathcal{B}(n\\,;\\,p)$ ?`,
          `Décrire la fonction de la calculatrice qui donne $P(X \\leq k)$ pour une loi binomiale.`
        ]),
        corrige: `Sur calculatrice (TI ou Casio), on utilise la fonction **binomFRép** (ou **binomCDF**) : $P(X \\leq k) = \\text{binomFR\\acute{e}p}(n, p, k)$. Par exemple, pour $\\mathcal{B}(10\\,;\\,0{,}3)$ et $k = 4$ : $P(X \\leq 4) = \\text{binomFR\\acute{e}p}(10, 0{,}3, 4)$.`
      };
    } else if (d === 2) {
      const variantes = [
        () => ({
          enonce: `$X$ suit la loi binomiale $\\mathcal{B}(10\\,;\\,0{,}3)$. À l'aide de la calculatrice, on trouve $P(X \\leq 4) \\approx 0{,}850$. En déduire $P(X > 4)$.`,
          corrige: `Par l'événement contraire : $P(X > 4) = 1 - P(X \\leq 4) \\approx 1 - 0{,}850 = 0{,}150$.`
        }),
        () => ({
          enonce: `$X$ suit $\\mathcal{B}(20\\,;\\,0{,}5)$. On donne $P(X \\leq 8) \\approx 0{,}252$ et $P(X \\leq 12) \\approx 0{,}868$. Calculer $P(9 \\leq X \\leq 12)$.`,
          corrige: `$P(9 \\leq X \\leq 12) = P(X \\leq 12) - P(X \\leq 8) \\approx 0{,}868 - 0{,}252 = 0{,}616$.`
        })
      ];
      return pick(variantes)();
    } else {
      const variantes = [
        () => ({
          enonce: `Une usine produit des pièces dont $5\\,\\%$ sont défectueuses. On prélève au hasard un lot de 50 pièces. Soit $X$ le nombre de pièces défectueuses. À l'aide d'une calculatrice, on obtient $P(X \\leq 2) \\approx 0{,}541$. En déduire la probabilité qu'il y ait **au moins 3 pièces défectueuses** dans le lot.`,
          corrige: `$X$ suit $\\mathcal{B}(50\\,;\\,0{,}05)$. L'événement "au moins 3 pièces défectueuses" est $\\{X \\geq 3\\}$, le contraire de $\\{X \\leq 2\\}$. Donc $P(X \\geq 3) = 1 - P(X \\leq 2) \\approx 1 - 0{,}541 = 0{,}459$.`
        }),
        () => ({
          enonce: `Un test médical a une sensibilité de $90\\,\\%$. Sur 30 personnes testées, soit $X$ le nombre de résultats positifs. À la calculatrice, on obtient $P(X \\leq 25) \\approx 0{,}431$. Calculer la probabilité d'obtenir **au moins 26 résultats positifs**.`,
          corrige: `$X$ suit $\\mathcal{B}(30\\,;\\,0{,}9)$. "Au moins 26 positifs" = $\\{X \\geq 26\\}$, contraire de $\\{X \\leq 25\\}$. $P(X \\geq 26) = 1 - P(X \\leq 25) \\approx 1 - 0{,}431 = 0{,}569$.`
        }),
        () => ({
          enonce: `Dans une classe de 25 élèves, chaque élève a indépendamment une probabilité $0{,}6$ d'avoir fait ses devoirs. Soit $X$ le nombre d'élèves qui l'ont fait. À la calculatrice, $P(X \\leq 10) \\approx 0{,}034$ et $P(X \\leq 20) \\approx 0{,}991$. Calculer $P(11 \\leq X \\leq 20)$.`,
          corrige: `$X$ suit $\\mathcal{B}(25\\,;\\,0{,}6)$. $P(11 \\leq X \\leq 20) = P(X \\leq 20) - P(X \\leq 10) \\approx 0{,}991 - 0{,}034 = 0{,}957$.`
        })
      ];
      return pick(variantes)();
    }
  },

  bi_application: (d) => {
    if (d === 1) {
      return {
        enonce: reformule([
          `Lors d'une expérience aléatoire, on répète $n$ fois de manière indépendante une même épreuve de Bernoulli de paramètre $p$. Comment appelle-t-on la loi de la variable aléatoire $X$ qui compte le nombre de succès ?`,
          `Définir la loi binomiale en partant d'un schéma de Bernoulli.`,
          `On effectue $n$ épreuves de Bernoulli indépendantes et identiques de paramètre $p$. Quelle est la loi du nombre de succès $X$ ?`,
          `Quelles sont les trois conditions pour qu'une variable aléatoire $X$ suive une loi binomiale de paramètres $n$ et $p$ ?`
        ]),
        corrige: `$X$ suit la **loi binomiale de paramètres $n$ et $p$**, notée $\\mathcal{B}(n\\,;\\,p)$. Les trois conditions sont : (1) **répétition** d'une même épreuve de Bernoulli ; (2) les épreuves sont **indépendantes** ; (3) on compte le **nombre de succès**.`
      };
    } else if (d === 2) {
      const variantes = [
        () => ({
          enonce: `On lance 10 fois un dé équilibré. Soit $X$ le nombre de "6" obtenus. Justifier que $X$ suit une loi binomiale et donner ses paramètres.`,
          corrige: `Chaque lancer est une épreuve de Bernoulli (succès : "obtenir un 6", probabilité $\\frac{1}{6}$ ; échec : "ne pas obtenir 6", probabilité $\\frac{5}{6}$). Les 10 lancers sont indépendants. Donc $X$ suit $\\mathcal{B}(10\\,;\\,\\frac{1}{6})$.`
        }),
        () => ({
          enonce: `Un QCM contient 20 questions, chacune avec 4 propositions dont une seule juste. Un élève répond au hasard à toutes les questions. Soit $X$ le nombre de bonnes réponses. Donner la loi de $X$, puis $E(X)$.`,
          corrige: `Chaque réponse est une Bernoulli (succès = "bonne réponse", probabilité $\\frac{1}{4} = 0{,}25$). Les réponses sont indépendantes. $X$ suit $\\mathcal{B}(20\\,;\\,0{,}25)$. Espérance : $E(X) = 20 \\times 0{,}25 = 5$. En moyenne, l'élève répondra correctement à 5 questions sur 20.`
        })
      ];
      return pick(variantes)();
    } else {
      const variantes = [
        () => ({
          enonce: `Une compagnie aérienne sait que statistiquement $3\\,\\%$ des passagers ne se présentent pas à l'embarquement. Elle vend 250 billets pour un vol de 245 places. Soit $X$ le nombre de passagers ne se présentant pas. Quelle est la probabilité qu'au moins 5 passagers ne se présentent pas (donc que tout le monde puisse embarquer) ? (On donne $P(X \\leq 4) \\approx 0{,}248$.)`,
          corrige: `On suppose les comportements indépendants. $X$ suit $\\mathcal{B}(250\\,;\\,0{,}03)$. L'événement souhaité est $\\{X \\geq 5\\}$, le contraire de $\\{X \\leq 4\\}$. $P(X \\geq 5) = 1 - P(X \\leq 4) \\approx 1 - 0{,}248 = 0{,}752$. Donc dans environ $75\\,\\%$ des cas, tous les passagers présents pourront embarquer.`
        }),
        () => ({
          enonce: `Dans une usine, $4\\,\\%$ des pièces produites sont défectueuses. Un contrôle vérifie un échantillon de 80 pièces. Soit $X$ le nombre de pièces défectueuses dans l'échantillon. À la calculatrice, $P(X \\geq 5) \\approx 0{,}238$. Le lot est rejeté si l'on trouve au moins 5 pièces défectueuses. Quelle est la probabilité que le lot soit rejeté ?`,
          corrige: `On suppose les pièces indépendantes. $X$ suit $\\mathcal{B}(80\\,;\\,0{,}04)$. La probabilité de rejet est $P(X \\geq 5) \\approx 0{,}238$, soit environ $24\\,\\%$.`
        }),
        () => ({
          enonce: `Un vaccin a une efficacité de $85\\,\\%$ (la probabilité qu'une personne vaccinée soit protégée). On vaccine 100 personnes. Soit $X$ le nombre de personnes effectivement protégées. Donner la loi de $X$, $E(X)$ et l'écart-type $\\sigma(X)$.`,
          corrige: `Les protections sont indépendantes (modèle simplifié). $X$ suit $\\mathcal{B}(100\\,;\\,0{,}85)$. $E(X) = 100 \\times 0{,}85 = 85$. $V(X) = 100 \\times 0{,}85 \\times 0{,}15 = 12{,}75$. $\\sigma(X) = \\sqrt{12{,}75} \\approx 3{,}57$.`
        })
      ];
      return pick(variantes)();
    }
  },

  pr_usuelles: (d) => {
    if (d === 1) {
      const variantes = [
        () => {
          const a = pick([2, 3, 5]);
          return {
            enonce: `Donner une primitive de $f(x) = ${a}$ sur $\\mathbb{R}$.`,
            corrige: `Une primitive de la fonction constante $f(x) = ${a}$ est $F(x) = ${a}x$ (la primitive est unique à une constante près).`
          };
        },
        () => ({
          enonce: `Donner une primitive de $f(x) = x$ sur $\\mathbb{R}$.`,
          corrige: `Une primitive de $f(x) = x$ est $F(x) = \\dfrac{x^2}{2}$.`
        }),
        () => ({
          enonce: `Donner une primitive de $f(x) = e^x$ sur $\\mathbb{R}$.`,
          corrige: `Une primitive de $f(x) = e^x$ est $F(x) = e^x$ (la fonction exponentielle est sa propre primitive).`
        }),
        () => ({
          enonce: `Donner une primitive de $f(x) = \\dfrac{1}{x}$ sur $]0\\,;\\,+\\infty[$.`,
          corrige: `Une primitive de $f(x) = \\dfrac{1}{x}$ sur $]0\\,;\\,+\\infty[$ est $F(x) = \\ln(x)$.`
        })
      ];
      return pick(variantes)();
    } else if (d === 2) {
      const variantes = [
        () => {
          const a = pick([2, 3, 4]);
          const b = pick([1, 2, 3]);
          return {
            enonce: `Donner une primitive de $f(x) = ${a}x + ${b}$ sur $\\mathbb{R}$.`,
            corrige: `Par linéarité, $F(x) = ${a} \\times \\dfrac{x^2}{2} + ${b}x = \\dfrac{${a}}{2}x^2 + ${b}x$.`
          };
        },
        () => {
          const n = pick([2, 3, 4]);
          return {
            enonce: `Donner une primitive de $f(x) = x^{${n}}$ sur $\\mathbb{R}$.`,
            corrige: `Une primitive de $x^n$ est $\\dfrac{x^{n+1}}{n+1}$. Ici, $F(x) = \\dfrac{x^{${n+1}}}{${n+1}}$.`
          };
        },
        () => {
          const a = pick([2, 3, 5]);
          return {
            enonce: `Donner une primitive de $f(x) = ${a}e^x$ sur $\\mathbb{R}$.`,
            corrige: `Par linéarité, $F(x) = ${a}e^x$.`
          };
        }
      ];
      return pick(variantes)();
    } else {
      const variantes = [
        () => {
          const a = pick([2, 3]);
          const b = pick([1, 2, 3]);
          const c = pick([1, 2]);
          return {
            enonce: `Donner une primitive de $f(x) = ${a}x^2 - ${b}x + ${c}$ sur $\\mathbb{R}$.`,
            corrige: `Par linéarité : $F(x) = ${a} \\times \\dfrac{x^3}{3} - ${b} \\times \\dfrac{x^2}{2} + ${c}x = \\dfrac{${a}}{3}x^3 - \\dfrac{${b}}{2}x^2 + ${c}x$.`
          };
        },
        () => ({
          enonce: `Déterminer la primitive $F$ de $f(x) = 3x^2$ telle que $F(1) = 5$.`,
          corrige: `Les primitives de $f$ sont $F(x) = x^3 + C$ (où $C$ est une constante). On veut $F(1) = 5$ : $1^3 + C = 5$, soit $C = 4$. Donc $F(x) = x^3 + 4$.`
        })
      ];
      return pick(variantes)();
    }
  },

  pr_uprime_un: (d) => {
    if (d === 1) {
      const variantes = [
        () => ({
          enonce: `Quelle est la formule de la primitive de $u'(x) \\times u(x)^n$ avec $n \\neq -1$ ?`,
          corrige: `Une primitive de $u' u^n$ est $\\dfrac{u^{n+1}}{n+1}$. (C'est l'analogue de "primitive de $x^n$ vaut $\\dfrac{x^{n+1}}{n+1}$", mais appliquée à $u(x)$.)`
        }),
        () => ({
          enonce: `Donner une primitive de $f(x) = 2x \\cdot (x^2 + 1)^3$ sur $\\mathbb{R}$.`,
          corrige: `Posons $u(x) = x^2 + 1$, alors $u'(x) = 2x$. On reconnaît $f = u' u^3$. Une primitive est $F = \\dfrac{u^4}{4} = \\dfrac{(x^2 + 1)^4}{4}$.`
        })
      ];
      return pick(variantes)();
    } else if (d === 2) {
      const variantes = [
        () => {
          const n = pick([2, 3, 4]);
          return {
            enonce: `Donner une primitive de $f(x) = 2x(x^2 + 1)^{${n}}$ sur $\\mathbb{R}$.`,
            corrige: `On pose $u(x) = x^2 + 1$, $u'(x) = 2x$. On reconnaît $f = u' u^{${n}}$. Donc $F(x) = \\dfrac{u^{${n+1}}}{${n+1}} = \\dfrac{(x^2 + 1)^{${n+1}}}{${n+1}}$.`
          };
        },
        () => {
          const a = pick([2, 3, 4]);
          return {
            enonce: `Donner une primitive de $f(x) = ${a}(${a}x + 1)^3$ sur $\\mathbb{R}$.`,
            corrige: `On pose $u(x) = ${a}x + 1$, $u'(x) = ${a}$. On reconnaît $f = u' u^3$. Donc $F(x) = \\dfrac{u^4}{4} = \\dfrac{(${a}x + 1)^4}{4}$.`
          };
        }
      ];
      return pick(variantes)();
    } else {
      const variantes = [
        () => ({
          enonce: `Donner une primitive de $f(x) = (2x + 3)^4$ sur $\\mathbb{R}$.`,
          corrige: `Posons $u(x) = 2x + 3$, $u'(x) = 2$. Pour faire apparaître $u'$, on écrit : $f(x) = \\dfrac{1}{2} \\times 2 \\times (2x + 3)^4 = \\dfrac{1}{2} u' u^4$. Une primitive est $F(x) = \\dfrac{1}{2} \\times \\dfrac{u^5}{5} = \\dfrac{(2x + 3)^5}{10}$.`
        }),
        () => ({
          enonce: `Donner une primitive de $f(x) = (3x - 1)^5$ sur $\\mathbb{R}$.`,
          corrige: `Posons $u(x) = 3x - 1$, $u'(x) = 3$. On écrit $f(x) = \\dfrac{1}{3} \\times 3 \\times (3x - 1)^5 = \\dfrac{1}{3} u' u^5$. Primitive : $F(x) = \\dfrac{1}{3} \\times \\dfrac{u^6}{6} = \\dfrac{(3x - 1)^6}{18}$.`
        }),
        () => ({
          enonce: `Donner une primitive de $f(x) = x(x^2 - 1)^4$ sur $\\mathbb{R}$.`,
          corrige: `Posons $u(x) = x^2 - 1$, $u'(x) = 2x$. On écrit $f(x) = \\dfrac{1}{2} \\times 2x \\times (x^2 - 1)^4 = \\dfrac{1}{2} u' u^4$. Primitive : $F(x) = \\dfrac{1}{2} \\times \\dfrac{u^5}{5} = \\dfrac{(x^2 - 1)^5}{10}$.`
        })
      ];
      return pick(variantes)();
    }
  },

  pr_uprime_eu: (d) => {
    if (d === 1) {
      return {
        enonce: reformule([
          `Quelle est la formule de la primitive de $u'(x) \\, e^{u(x)}$ ?`,
          `Donner une primitive de la fonction $u' \\, e^u$ (où $u$ est dérivable).`,
          `Comment trouver une primitive de la forme $u'(x) \\, e^{u(x)}$ ?`,
          `Quelle est la forme générale d'une primitive de $u'(x) \\, e^{u(x)}$ ?`
        ]),
        corrige: `Une primitive de $u' e^u$ est $e^u$. (En effet, la dérivée de $e^{u(x)}$ est $u'(x) \\, e^{u(x)}$ par dérivée composée.)`
      };
    } else if (d === 2) {
      const variantes = [
        () => {
          const a = pick([2, 3, 5]);
          return {
            enonce: `Donner une primitive de $f(x) = ${a} e^{${a}x}$ sur $\\mathbb{R}$.`,
            corrige: `Posons $u(x) = ${a}x$, $u'(x) = ${a}$. On reconnaît $f = u' e^u$, donc $F(x) = e^u = e^{${a}x}$.`
          };
        },
        () => ({
          enonce: `Donner une primitive de $f(x) = 2x \\, e^{x^2}$ sur $\\mathbb{R}$.`,
          corrige: `Posons $u(x) = x^2$, $u'(x) = 2x$. On reconnaît $f = u' e^u$, donc $F(x) = e^u = e^{x^2}$.`
        })
      ];
      return pick(variantes)();
    } else {
      const variantes = [
        () => {
          const a = pick([2, 3]);
          return {
            enonce: `Donner une primitive de $f(x) = e^{${a}x + 1}$ sur $\\mathbb{R}$.`,
            corrige: `On pose $u(x) = ${a}x + 1$, $u'(x) = ${a}$. Pour faire apparaître $u'$ : $f(x) = \\dfrac{1}{${a}} \\times ${a} \\, e^{${a}x + 1}$. Une primitive est $F(x) = \\dfrac{1}{${a}} e^{${a}x + 1}$.`
          };
        },
        () => ({
          enonce: `Donner une primitive de $f(x) = x \\, e^{x^2}$ sur $\\mathbb{R}$.`,
          corrige: `On pose $u(x) = x^2$, $u'(x) = 2x$. On écrit $f(x) = \\dfrac{1}{2} \\times 2x \\, e^{x^2} = \\dfrac{1}{2} u' e^u$. Donc $F(x) = \\dfrac{1}{2} e^{x^2}$.`
        })
      ];
      return pick(variantes)();
    }
  },

  pr_uprime_sur_u: (d) => {
    if (d === 1) {
      return {
        enonce: reformule([
          `Quelle est la formule de la primitive de $\\dfrac{u'(x)}{u(x)}$ (avec $u(x) > 0$) ?`,
          `Donner une primitive de $\\dfrac{u'}{u}$ quand $u > 0$.`,
          `Quelle est la forme d'une primitive de $\\dfrac{u'(x)}{u(x)}$ sur un intervalle où $u(x) > 0$ ?`,
          `Comment intégrer une fonction de la forme $\\dfrac{u'}{u}$ ?`
        ]),
        corrige: `Une primitive de $\\dfrac{u'}{u}$ est $\\ln(u)$ (à condition que $u > 0$). En effet, la dérivée de $\\ln(u(x))$ est $\\dfrac{u'(x)}{u(x)}$ par dérivée composée.`
      };
    } else if (d === 2) {
      const variantes = [
        () => ({
          enonce: `Donner une primitive de $f(x) = \\dfrac{2x}{x^2 + 1}$ sur $\\mathbb{R}$.`,
          corrige: `On pose $u(x) = x^2 + 1 > 0$, $u'(x) = 2x$. On reconnaît $f = \\dfrac{u'}{u}$, donc $F(x) = \\ln(u) = \\ln(x^2 + 1)$.`
        }),
        () => {
          const a = pick([2, 3, 4]);
          return {
            enonce: `Donner une primitive de $f(x) = \\dfrac{${a}}{${a}x + 1}$ sur l'intervalle $\\left]-\\dfrac{1}{${a}}\\,;\\,+\\infty\\right[$.`,
            corrige: `On pose $u(x) = ${a}x + 1 > 0$ sur l'intervalle, $u'(x) = ${a}$. On reconnaît $\\dfrac{u'}{u}$, donc $F(x) = \\ln(${a}x + 1)$.`
          };
        }
      ];
      return pick(variantes)();
    } else {
      const variantes = [
        () => ({
          enonce: `Donner une primitive de $f(x) = \\dfrac{x}{x^2 + 1}$ sur $\\mathbb{R}$.`,
          corrige: `Posons $u(x) = x^2 + 1 > 0$, $u'(x) = 2x$. On écrit $f(x) = \\dfrac{1}{2} \\times \\dfrac{2x}{x^2 + 1} = \\dfrac{1}{2} \\times \\dfrac{u'}{u}$. Donc $F(x) = \\dfrac{1}{2}\\ln(x^2 + 1)$.`
        }),
        () => ({
          enonce: `Donner une primitive de $f(x) = \\dfrac{x}{x^2 + 4}$ sur $\\mathbb{R}$.`,
          corrige: `Posons $u(x) = x^2 + 4 > 0$, $u'(x) = 2x$. On écrit $f(x) = \\dfrac{1}{2} \\times \\dfrac{2x}{x^2 + 4} = \\dfrac{1}{2} \\times \\dfrac{u'}{u}$. Donc $F(x) = \\dfrac{1}{2}\\ln(x^2 + 4)$.`
        }),
        () => ({
          enonce: `Donner une primitive de $f(x) = \\dfrac{e^x}{e^x + 1}$ sur $\\mathbb{R}$.`,
          corrige: `Posons $u(x) = e^x + 1 > 0$, $u'(x) = e^x$. On reconnaît $f = \\dfrac{u'}{u}$. Donc $F(x) = \\ln(e^x + 1)$.`
        })
      ];
      return pick(variantes)();
    }
  },

  ed_yp_ay: (d) => {
    if (d === 1) {
      return {
        enonce: reformule([
          `Donner la forme générale des solutions de l'équation différentielle $y' = ay$ (où $a$ est une constante réelle).`,
          `Soit $a \\in \\mathbb{R}$. Quelles sont les solutions de l'équation différentielle $y' = ay$ sur $\\mathbb{R}$ ?`,
          `Énoncer le théorème donnant les solutions de l'équation $y' = ay$ (où $a$ est un réel).`,
          `Quelles fonctions $y$ sont solutions de $y' = ay$ ? Justifier en revenant à la dérivée de $e^{ax}$.`
        ]),
        corrige: `Les solutions sont les fonctions $y(x) = K e^{ax}$ où $K \\in \\mathbb{R}$ est une constante. En effet, $(K e^{ax})' = aK e^{ax} = a \\times y$, donc $y' = ay$ est bien vérifiée.`
      };
    } else if (d === 2) {
      const variantes = [
        () => {
          const a = pick([2, 3, 5]);
          return {
            enonce: `Résoudre l'équation différentielle $y' = ${a}y$.`,
            corrige: `Forme $y' = ay$ avec $a = ${a}$. Les solutions sont $y(x) = K e^{${a}x}$ où $K \\in \\mathbb{R}$.`
          };
        },
        () => {
          const a = pick([2, 3, 5]);
          return {
            enonce: `Résoudre l'équation différentielle $y' = -${a}y$.`,
            corrige: `Forme $y' = ay$ avec $a = -${a}$. Les solutions sont $y(x) = K e^{-${a}x}$ où $K \\in \\mathbb{R}$.`
          };
        }
      ];
      return pick(variantes)();
    } else {
      const variantes = [
        () => {
          const taux = pick([3, 4, 5, 6]);
          const tauxAff = `0{,}0${taux}`;
          const K0 = pick([1000, 2000, 5000]);
          return {
            enonce: `Un capital placé à intérêts continus avec un taux annuel de $${taux}\\,\\%$ vérifie $C'(t) = ${tauxAff} \\, C(t)$ où $t$ est en années. Si le capital initial est $C(0) = ${K0}$ €, donner $C(t)$ pour tout $t \\geq 0$.`,
            corrige: `Solutions générales : $C(t) = K e^{${tauxAff} t}$. Condition initiale : $C(0) = K = ${K0}$. Donc $C(t) = ${K0} \\, e^{${tauxAff} t}$.`
          };
        },
        () => {
          const N0 = pick([100, 500, 1000]);
          return {
            enonce: `Une culture de bactéries croît avec un taux de $20\\,\\%$ par heure : $N'(t) = 0{,}2 \\, N(t)$. La population initiale est $N(0) = ${N0}$. Donner $N(t)$.`,
            corrige: `Solutions de $N' = 0{,}2 N$ : $N(t) = K e^{0{,}2 t}$. Avec $N(0) = K = ${N0}$, on obtient $N(t) = ${N0} \\, e^{0{,}2 t}$.`
          };
        },
        () => ({
          enonce: `Une substance radioactive a une masse $m(t)$ vérifiant $m'(t) = -0{,}1 m(t)$ (en kg/an). La masse initiale est de $5$ kg. Donner $m(t)$ pour $t \\geq 0$.`,
          corrige: `Solutions de $m' = -0{,}1 m$ : $m(t) = K e^{-0{,}1 t}$. Avec $m(0) = K = 5$, on obtient $m(t) = 5 \\, e^{-0{,}1 t}$. La masse **décroît** vers 0 (désintégration), ce qui est physiquement attendu.`
        })
      ];
      return pick(variantes)();
    }
  },

  ed_yp_ayb: (d) => {
    if (d === 1) {
      return {
        enonce: reformule([
          `Donner la forme générale des solutions de l'équation différentielle $y' = ay + b$ (avec $a \\neq 0$).`,
          `Quelles sont les solutions de l'équation différentielle $y' = ay + b$ (où $a \\neq 0$ et $b$ sont des réels) ?`,
          `Énoncer la forme générale des solutions de $y' = ay + b$.`
        ]),
        corrige: `Les solutions sont $y(x) = K e^{ax} - \\dfrac{b}{a}$ où $K \\in \\mathbb{R}$. On reconnaît la somme d'une solution particulière constante $y_p = -\\dfrac{b}{a}$ et de la solution générale de l'équation homogène $y' = ay$.`
      };
    } else if (d === 2) {
      const variantes = [
        () => {
          const a = pick([2, 3, 5]);
          const b = pick([2, 4, 6]);
          return {
            enonce: `Résoudre l'équation différentielle $y' = ${a}y + ${b}$.`,
            corrige: `Forme $y' = ay + b$ avec $a = ${a}$ et $b = ${b}$. Solution particulière constante : $y_p = -\\dfrac{${b}}{${a}}$. Solutions générales : $y(x) = K e^{${a}x} - \\dfrac{${b}}{${a}}$ où $K \\in \\mathbb{R}$.`
          };
        },
        () => {
          const a = pick([-2, -3]);
          const b = pick([4, 6, 10]);
          return {
            enonce: `Résoudre l'équation différentielle $y' = ${a}y + ${b}$.`,
            corrige: `Forme $y' = ay + b$ avec $a = ${a}$ et $b = ${b}$. Solution particulière constante : $y_p = -\\dfrac{${b}}{${a}} = ${-b/a}$. Solutions générales : $y(x) = K e^{${a}x} + ${-b/a}$ où $K \\in \\mathbb{R}$.`
          };
        }
      ];
      return pick(variantes)();
    } else {
      const variantes = [
        () => ({
          enonce: `La température $T(t)$ (en °C) d'un café qui refroidit dans une pièce à $20$°C vérifie $T'(t) = -0{,}1(T(t) - 20)$. Résoudre cette équation différentielle.`,
          corrige: `On développe : $T'(t) = -0{,}1 T(t) + 2$. Forme $T' = aT + b$ avec $a = -0{,}1$ et $b = 2$. Solution particulière : $T_p = -\\dfrac{2}{-0{,}1} = 20$. Solutions générales : $T(t) = K e^{-0{,}1 t} + 20$. **Interprétation** : la température tend vers $20$°C quand $t \\to +\\infty$ (température ambiante), comme attendu physiquement.`
        }),
        () => ({
          enonce: `Un médicament injecté dans le sang a une concentration $C(t)$ (en mg/L) qui vérifie $C'(t) = -0{,}2 C(t) + 5$. Résoudre cette équation différentielle.`,
          corrige: `Forme $C' = aC + b$ avec $a = -0{,}2$ et $b = 5$. Solution particulière constante : $C_p = -\\dfrac{5}{-0{,}2} = 25$ mg/L. Solutions générales : $C(t) = K e^{-0{,}2 t} + 25$. **Interprétation** : la concentration tend vers $25$ mg/L (équilibre), reflétant l'équilibre entre apport et élimination.`
        }),
        () => ({
          enonce: `Un réservoir d'eau se vide en libérant de l'eau de façon proportionnelle à son volume, mais avec une alimentation constante : $V'(t) = -0{,}5 V(t) + 100$ (V en litres). Résoudre cette équation.`,
          corrige: `Forme $V' = aV + b$ avec $a = -0{,}5$ et $b = 100$. Solution particulière : $V_p = -\\dfrac{100}{-0{,}5} = 200$ litres. Solutions générales : $V(t) = K e^{-0{,}5 t} + 200$. Le volume tend vers $200$ L (équilibre entre fuite et alimentation).`
        })
      ];
      return pick(variantes)();
    }
  },

  ed_cauchy: (d) => {
    if (d === 1) {
      const a = pick([2, 3]);
      const y0 = pick([1, 2, 5]);
      return {
        enonce: `Résoudre l'équation $y' = ${a}y$ avec la condition initiale $y(0) = ${y0}$.`,
        corrige: `Solutions générales : $y(x) = K e^{${a}x}$. Condition $y(0) = K = ${y0}$. Donc $y(x) = ${y0} e^{${a}x}$.`
      };
    } else if (d === 2) {
      const variantes = [
        () => {
          const a = pick([-2, -3]);
          const y0 = pick([3, 5]);
          return {
            enonce: `Résoudre $y' = ${a}y$ avec $y(0) = ${y0}$, puis donner $\\lim\\limits_{x \\to +\\infty} y(x)$.`,
            corrige: `Solutions : $y(x) = K e^{${a}x}$. $y(0) = K = ${y0}$, donc $y(x) = ${y0} e^{${a}x}$. Comme $${a} < 0$, $e^{${a}x} \\to 0$ quand $x \\to +\\infty$. Donc $\\lim\\limits_{x \\to +\\infty} y(x) = 0$.`
          };
        },
        () => {
          const a = pick([2, 3]);
          const b = pick([4, 6]);
          const y0 = pick([0, 1]);
          return {
            enonce: `Résoudre $y' = ${a}y + ${b}$ avec $y(0) = ${y0}$.`,
            corrige: `Solutions générales : $y(x) = K e^{${a}x} - \\dfrac{${b}}{${a}}$. $y(0) = K - \\dfrac{${b}}{${a}} = ${y0}$, donc $K = ${y0} + \\dfrac{${b}}{${a}} = \\dfrac{${y0*a + b}}{${a}}$. Solution : $y(x) = \\dfrac{${y0*a + b}}{${a}} e^{${a}x} - \\dfrac{${b}}{${a}}$.`
          };
        }
      ];
      return pick(variantes)();
    } else {
      const variantes = [
        () => ({
          enonce: `Une population de bactéries croît selon $N'(t) = 0{,}3 \\, N(t)$ avec $N(0) = 1000$ (où $t$ est en heures). Au bout de combien de temps la population atteindra-t-elle $5000$ bactéries ?`,
          corrige: `Solutions de $N' = 0{,}3 N$ : $N(t) = K e^{0{,}3 t}$. Condition $N(0) = K = 1000$, donc $N(t) = 1000 \\, e^{0{,}3 t}$. On cherche $t$ tel que $N(t) = 5000$ : $1000 e^{0{,}3 t} = 5000$, soit $e^{0{,}3 t} = 5$, donc $0{,}3 t = \\ln(5)$ et $t = \\dfrac{\\ln(5)}{0{,}3} \\approx 5{,}36$ heures.`
        }),
        () => ({
          enonce: `Un capital placé à intérêts continus $4\\,\\%$ vérifie $C'(t) = 0{,}04 C(t)$ avec $C(0) = 2000$ €. Au bout de combien d'années le capital aura-t-il doublé ?`,
          corrige: `$C(t) = 2000 e^{0{,}04 t}$. On veut $C(t) = 4000$, soit $e^{0{,}04 t} = 2$, donc $t = \\dfrac{\\ln(2)}{0{,}04} \\approx 17{,}3$ ans.`
        }),
        () => ({
          enonce: `Un médicament injecté à $C(0) = 100$ mg/L est éliminé selon $C'(t) = -0{,}2 C(t)$ (t en heures). Au bout de combien d'heures la concentration sera-t-elle divisée par 10 ?`,
          corrige: `$C(t) = 100 e^{-0{,}2 t}$. On veut $C(t) = 10$, soit $e^{-0{,}2 t} = 0{,}1$, donc $-0{,}2 t = \\ln(0{,}1) = -\\ln(10)$, et $t = \\dfrac{\\ln(10)}{0{,}2} \\approx 11{,}5$ h.`
        }),
        () => ({
          enonce: `Un café à $90$°C refroidit dans une pièce à $20$°C selon $T'(t) = -0{,}05(T(t) - 20)$. Quelle est la température au bout de 30 minutes ? On utilisera la solution générale $T(t) = K e^{-0{,}05 t} + 20$.`,
          corrige: `Condition $T(0) = 90 = K + 20$, donc $K = 70$. Solution : $T(t) = 70 e^{-0{,}05 t} + 20$. À $t = 30$ : $T(30) = 70 e^{-1{,}5} + 20 \\approx 70 \\times 0{,}223 + 20 \\approx 35{,}6$°C.`
        })
      ];
      return pick(variantes)();
    }
  },

  in_calcul: (d) => {
    if (d === 1) {
      const variantes = [
        () => {
          const a = pick([1, 2, 3]);
          const b = pick([4, 5, 6]);
          return {
            enonce: `Calculer $\\displaystyle\\int_{${a}}^{${b}} 1 \\, dx$.`,
            corrige: `Une primitive de 1 est $x$. $\\displaystyle\\int_{${a}}^{${b}} 1 \\, dx = [x]_{${a}}^{${b}} = ${b} - ${a} = ${b-a}$.`
          };
        },
        () => {
          const a = pick([0, 1, 2]);
          const b = pick([3, 4, 5]);
          return {
            enonce: `Calculer $\\displaystyle\\int_{${a}}^{${b}} x \\, dx$.`,
            corrige: `Une primitive de $x$ est $\\dfrac{x^2}{2}$. $\\displaystyle\\int_{${a}}^{${b}} x \\, dx = \\left[\\dfrac{x^2}{2}\\right]_{${a}}^{${b}} = \\dfrac{${b}^2}{2} - \\dfrac{${a}^2}{2} = \\dfrac{${b*b - a*a}}{2} = ${(b*b - a*a)/2}$.`
          };
        }
      ];
      return pick(variantes)();
    } else if (d === 2) {
      const variantes = [
        () => {
          const a = pick([0, 1]);
          const b = pick([2, 3]);
          return {
            enonce: `Calculer $\\displaystyle\\int_{${a}}^{${b}} (2x + 1) \\, dx$.`,
            corrige: `Une primitive de $2x + 1$ est $x^2 + x$. $\\displaystyle\\int_{${a}}^{${b}} (2x + 1) \\, dx = [x^2 + x]_{${a}}^{${b}} = (${b}^2 + ${b}) - (${a}^2 + ${a}) = ${b*b + b - a*a - a}$.`
          };
        },
        () => {
          const b = pick([1, 2]);
          return {
            enonce: `Calculer $\\displaystyle\\int_{0}^{${b}} e^x \\, dx$.`,
            corrige: `Une primitive de $e^x$ est $e^x$. $\\displaystyle\\int_{0}^{${b}} e^x \\, dx = [e^x]_{0}^{${b}} = e^{${b}} - e^0 = e^{${b}} - 1$.`
          };
        },
        () => {
          return {
            enonce: `Calculer $\\displaystyle\\int_{1}^{e} \\dfrac{1}{x} \\, dx$.`,
            corrige: `Une primitive de $\\dfrac{1}{x}$ sur $]0\\,;\\,+\\infty[$ est $\\ln(x)$. $\\displaystyle\\int_{1}^{e} \\dfrac{1}{x} \\, dx = [\\ln(x)]_{1}^{e} = \\ln(e) - \\ln(1) = 1 - 0 = 1$.`
          };
        }
      ];
      return pick(variantes)();
    } else {
      const variantes = [
        () => ({
          enonce: `Calculer $\\displaystyle\\int_{0}^{1} \\dfrac{2x}{x^2 + 1} \\, dx$.`,
          corrige: `Posons $u(x) = x^2 + 1 > 0$, $u'(x) = 2x$. On reconnaît $\\dfrac{u'}{u}$, donc une primitive est $\\ln(u) = \\ln(x^2 + 1)$. $\\displaystyle\\int_{0}^{1} \\dfrac{2x}{x^2 + 1} \\, dx = [\\ln(x^2 + 1)]_{0}^{1} = \\ln(2) - \\ln(1) = \\ln(2)$.`
        }),
        () => ({
          enonce: `Calculer $\\displaystyle\\int_{0}^{1} x \\, e^{x^2} \\, dx$.`,
          corrige: `Posons $u(x) = x^2$, $u'(x) = 2x$. On écrit $x \\, e^{x^2} = \\dfrac{1}{2} \\times 2x \\, e^{x^2} = \\dfrac{1}{2} u' e^u$. Primitive : $\\dfrac{1}{2} e^{x^2}$. Intégrale : $\\left[\\dfrac{1}{2} e^{x^2}\\right]_{0}^{1} = \\dfrac{1}{2}(e - 1)$.`
        }),
        () => ({
          enonce: `Calculer $\\displaystyle\\int_{0}^{1} (2x + 1)(x^2 + x)^3 \\, dx$.`,
          corrige: `Posons $u(x) = x^2 + x$, $u'(x) = 2x + 1$. On reconnaît $u'(x) \\times u(x)^3$. Primitive : $\\dfrac{u^4}{4} = \\dfrac{(x^2 + x)^4}{4}$. Intégrale : $\\left[\\dfrac{(x^2 + x)^4}{4}\\right]_0^1 = \\dfrac{2^4}{4} - 0 = 4$.`
        }),
        () => ({
          enonce: `Calculer $\\displaystyle\\int_{1}^{2} \\dfrac{1}{x \\ln(x) + x} \\, dx$.`,
          corrige: `On factorise au dénominateur : $x\\ln(x) + x = x(\\ln(x) + 1)$. Posons $u(x) = \\ln(x) + 1$, alors $u'(x) = \\dfrac{1}{x}$, donc $\\dfrac{1}{x(\\ln(x) + 1)} = \\dfrac{u'(x)}{u(x)}$. Primitive : $\\ln|u| = \\ln(\\ln(x) + 1)$ (positif sur $[1\\,;\\,2]$). Intégrale : $\\ln(\\ln(2) + 1) - \\ln(0 + 1) = \\ln(\\ln(2) + 1)$.`
        })
      ];
      return pick(variantes)();
    }
  },

  in_proprietes: (d) => {
    if (d === 1) {
      const variantes = [
        () => ({
          enonce: `Énoncer la propriété de linéarité de l'intégrale.`,
          corrige: `Pour toutes fonctions $f$, $g$ continues sur $[a\\,;\\,b]$ et tous réels $\\alpha$, $\\beta$ : $\\displaystyle\\int_{a}^{b} (\\alpha f + \\beta g) \\, dx = \\alpha \\int_{a}^{b} f \\, dx + \\beta \\int_{a}^{b} g \\, dx$.`
        }),
        () => ({
          enonce: `Énoncer la relation de Chasles pour les intégrales.`,
          corrige: `Pour tous réels $a$, $b$, $c$ et $f$ continue sur l'intervalle contenant ces trois points : $\\displaystyle\\int_{a}^{b} f \\, dx + \\int_{b}^{c} f \\, dx = \\int_{a}^{c} f \\, dx$.`
        })
      ];
      return pick(variantes)();
    } else if (d === 2) {
      const variantes = [
        () => ({
          enonce: `On donne $\\displaystyle\\int_{0}^{2} f(x) \\, dx = 5$ et $\\displaystyle\\int_{2}^{5} f(x) \\, dx = 7$. Calculer $\\displaystyle\\int_{0}^{5} f(x) \\, dx$.`,
          corrige: `Par la relation de Chasles : $\\displaystyle\\int_{0}^{5} f(x) \\, dx = \\int_{0}^{2} f(x) \\, dx + \\int_{2}^{5} f(x) \\, dx = 5 + 7 = 12$.`
        }),
        () => ({
          enonce: `On donne $\\displaystyle\\int_{0}^{3} f(x) \\, dx = 4$ et $\\displaystyle\\int_{0}^{3} g(x) \\, dx = -1$. Calculer $\\displaystyle\\int_{0}^{3} (2f(x) - 3g(x)) \\, dx$.`,
          corrige: `Par linéarité : $\\displaystyle\\int_{0}^{3} (2f - 3g) \\, dx = 2 \\int_{0}^{3} f \\, dx - 3 \\int_{0}^{3} g \\, dx = 2 \\times 4 - 3 \\times (-1) = 8 + 3 = 11$.`
        })
      ];
      return pick(variantes)();
    } else {
      const variantes = [
        () => ({
          enonce: `Soit $f$ continue sur $[-2\\,;\\,5]$ telle que $\\displaystyle\\int_{-2}^{0} f \\, dx = 3$, $\\displaystyle\\int_{0}^{3} f \\, dx = -2$ et $\\displaystyle\\int_{3}^{5} f \\, dx = 4$. Calculer $\\displaystyle\\int_{-2}^{5} f \\, dx$, puis $\\displaystyle\\int_{5}^{-2} f \\, dx$.`,
          corrige: `Par Chasles : $\\displaystyle\\int_{-2}^{5} f = \\int_{-2}^{0} f + \\int_{0}^{3} f + \\int_{3}^{5} f = 3 + (-2) + 4 = 5$. Par la propriété d'orientation, $\\displaystyle\\int_{5}^{-2} f = -\\int_{-2}^{5} f = -5$.`
        }),
        () => ({
          enonce: `Soit $f$ continue sur $[0\\,;\\,4]$ telle que $\\displaystyle\\int_{0}^{2} f \\, dx = 6$ et $\\displaystyle\\int_{0}^{4} f \\, dx = 10$. Calculer $\\displaystyle\\int_{2}^{4} f \\, dx$ puis $\\displaystyle\\int_{4}^{2} f \\, dx$.`,
          corrige: `Par Chasles : $\\int_0^4 f = \\int_0^2 f + \\int_2^4 f$, donc $\\int_2^4 f = 10 - 6 = 4$. Par orientation : $\\int_4^2 f = -\\int_2^4 f = -4$.`
        }),
        () => ({
          enonce: `Soit $f$ continue sur $[0\\,;\\,3]$ avec $\\int_0^3 f = 12$. Calculer la valeur moyenne de $f$ sur $[0\\,;\\,3]$.`,
          corrige: `La valeur moyenne de $f$ sur $[a\\,;\\,b]$ est $\\mu = \\dfrac{1}{b - a} \\int_a^b f(x) \\, dx$. Ici : $\\mu = \\dfrac{1}{3 - 0} \\times 12 = 4$.`
        })
      ];
      return pick(variantes)();
    }
  },

  in_aire: (d) => {
    if (d === 1) {
      return {
        enonce: reformule([
          `Si $f$ est continue et positive sur $[a\\,;\\,b]$, que représente géométriquement $\\displaystyle\\int_{a}^{b} f(x) \\, dx$ ?`,
          `Donner l'interprétation géométrique de $\\displaystyle\\int_{a}^{b} f(x) \\, dx$ quand $f \\geq 0$ sur $[a\\,;\\,b]$.`,
          `Que représente l'intégrale d'une fonction continue et positive en termes d'aire ?`,
          `Énoncer le lien entre intégrale et aire sous la courbe.`
        ]),
        corrige: `$\\displaystyle\\int_{a}^{b} f(x) \\, dx$ représente l'**aire** (en unités d'aire) du domaine compris entre la courbe de $f$, l'axe des abscisses, et les droites verticales d'équations $x = a$ et $x = b$.`
      };
    } else if (d === 2) {
      const variantes = [
        () => {
          const b = pick([2, 3, 4]);
          return {
            enonce: `Calculer l'aire (en unités d'aire) du domaine délimité par la courbe de $f(x) = x^2$, l'axe des abscisses et les droites $x = 0$ et $x = ${b}$.`,
            corrige: `$f$ est positive sur $[0\\,;\\,${b}]$. Aire = $\\displaystyle\\int_{0}^{${b}} x^2 \\, dx = \\left[\\dfrac{x^3}{3}\\right]_{0}^{${b}} = \\dfrac{${b}^3}{3} - 0 = \\dfrac{${b*b*b}}{3}$ u.a.`
          };
        },
        () => {
          return {
            enonce: `Calculer l'aire (en unités d'aire) du domaine compris entre la courbe de $f(x) = e^x$, l'axe des abscisses et les droites $x = 0$ et $x = 1$.`,
            corrige: `$f$ est positive. Aire = $\\displaystyle\\int_{0}^{1} e^x \\, dx = [e^x]_{0}^{1} = e - 1 \\approx 1{,}72$ u.a.`
          };
        }
      ];
      return pick(variantes)();
    } else {
      const variantes = [
        () => ({
          enonce: `Calculer l'aire du domaine délimité par les courbes de $f(x) = x^2$ et $g(x) = x$ sur l'intervalle $[0\\,;\\,1]$.`,
          corrige: `Sur $[0\\,;\\,1]$, on compare : $g(x) - f(x) = x - x^2 = x(1 - x) \\geq 0$, donc la courbe de $g$ est au-dessus de celle de $f$. Aire = $\\displaystyle\\int_{0}^{1} (g(x) - f(x)) \\, dx = \\int_{0}^{1} (x - x^2) \\, dx = \\left[\\dfrac{x^2}{2} - \\dfrac{x^3}{3}\\right]_{0}^{1} = \\dfrac{1}{2} - \\dfrac{1}{3} = \\dfrac{1}{6}$ u.a.`
        }),
        () => ({
          enonce: `Calculer l'aire du domaine délimité par les courbes de $f(x) = x^2$ et $g(x) = 2x$ sur l'intervalle $[0\\,;\\,2]$.`,
          corrige: `Sur $[0\\,;\\,2]$, $g(x) - f(x) = 2x - x^2 = x(2 - x) \\geq 0$. Aire = $\\displaystyle\\int_{0}^{2} (2x - x^2) \\, dx = \\left[x^2 - \\dfrac{x^3}{3}\\right]_{0}^{2} = (4 - \\dfrac{8}{3}) - 0 = \\dfrac{12 - 8}{3} = \\dfrac{4}{3}$ u.a.`
        }),
        () => ({
          enonce: `Calculer l'aire entre les courbes de $f(x) = x^2$ et $g(x) = x^3$ sur $[0\\,;\\,1]$.`,
          corrige: `Sur $[0\\,;\\,1]$, on a $f(x) - g(x) = x^2 - x^3 = x^2(1 - x) \\geq 0$, donc $f$ est au-dessus de $g$. Aire = $\\displaystyle\\int_{0}^{1} (x^2 - x^3) \\, dx = \\left[\\dfrac{x^3}{3} - \\dfrac{x^4}{4}\\right]_{0}^{1} = \\dfrac{1}{3} - \\dfrac{1}{4} = \\dfrac{1}{12}$ u.a.`
        })
      ];
      return pick(variantes)();
    }
  },

  in_ipp: (d) => {
    if (d === 1) {
      return {
        enonce: reformule([
          `Énoncer la formule d'intégration par parties.`,
          `Donner la formule d'intégration par parties (IPP) pour $\\displaystyle\\int_a^b u'(x) v(x) \\, dx$.`,
          `Quelle formule utilise-t-on pour intégrer un produit comme $\\int x e^x \\, dx$ ?`,
          `Énoncer la formule d'intégration par parties et préciser les hypothèses sur $u$ et $v$.`
        ]),
        corrige: `Pour $u$ et $v$ deux fonctions dérivables sur $[a\\,;\\,b]$, à dérivées continues : $\\displaystyle\\int_{a}^{b} u'(x) v(x) \\, dx = [u(x) v(x)]_{a}^{b} - \\int_{a}^{b} u(x) v'(x) \\, dx$.`
      };
    } else if (d === 2) {
      const variantes = [
        () => ({
          enonce: `Calculer $\\displaystyle\\int_{0}^{1} x \\, e^x \\, dx$ par intégration par parties.`,
          corrige: `On pose $u'(x) = e^x$ et $v(x) = x$, donc $u(x) = e^x$ et $v'(x) = 1$. IPP : $\\displaystyle\\int_{0}^{1} x \\, e^x \\, dx = [x e^x]_{0}^{1} - \\int_{0}^{1} e^x \\, dx = (1 \\cdot e - 0) - [e^x]_{0}^{1} = e - (e - 1) = 1$.`
        }),
        () => ({
          enonce: `Calculer $\\displaystyle\\int_{0}^{1} x \\, e^{-x} \\, dx$ par intégration par parties.`,
          corrige: `On pose $u'(x) = e^{-x}$ et $v(x) = x$, donc $u(x) = -e^{-x}$ et $v'(x) = 1$. IPP : $\\displaystyle\\int_{0}^{1} x \\, e^{-x} \\, dx = [-x e^{-x}]_{0}^{1} - \\int_{0}^{1} (-e^{-x}) \\, dx = -e^{-1} + [-e^{-x}]_{0}^{1} = -e^{-1} + (-e^{-1} + 1) = 1 - 2e^{-1}$.`
        }),
        () => ({
          enonce: `Calculer $\\displaystyle\\int_{0}^{1} (x + 1) e^x \\, dx$ par intégration par parties.`,
          corrige: `On pose $u'(x) = e^x$, $v(x) = x + 1$, donc $u(x) = e^x$, $v'(x) = 1$. IPP : $\\int_0^1 (x+1)e^x \\, dx = [(x+1)e^x]_0^1 - \\int_0^1 e^x \\, dx = 2e - 1 - (e - 1) = e$.`
        })
      ];
      return pick(variantes)();
    } else {
      const variantes = [
        () => ({
          enonce: `Calculer $\\displaystyle\\int_{1}^{e} \\ln(x) \\, dx$ par intégration par parties.`,
          corrige: `On pose $u'(x) = 1$ et $v(x) = \\ln(x)$, donc $u(x) = x$ et $v'(x) = \\dfrac{1}{x}$. IPP : $\\displaystyle\\int_{1}^{e} \\ln(x) \\, dx = [x \\ln(x)]_{1}^{e} - \\int_{1}^{e} x \\times \\dfrac{1}{x} \\, dx = (e \\cdot 1 - 1 \\cdot 0) - \\int_{1}^{e} 1 \\, dx = e - (e - 1) = 1$.`
        }),
        () => ({
          enonce: `Calculer $\\displaystyle\\int_{1}^{e} x \\ln(x) \\, dx$ par intégration par parties.`,
          corrige: `On pose $u'(x) = x$ et $v(x) = \\ln(x)$, donc $u(x) = \\dfrac{x^2}{2}$ et $v'(x) = \\dfrac{1}{x}$. IPP : $\\int_1^e x\\ln(x) \\, dx = \\left[\\dfrac{x^2}{2}\\ln(x)\\right]_1^e - \\int_1^e \\dfrac{x^2}{2} \\times \\dfrac{1}{x} \\, dx = \\dfrac{e^2}{2} - \\dfrac{1}{2}\\int_1^e x \\, dx = \\dfrac{e^2}{2} - \\dfrac{1}{2}\\left[\\dfrac{x^2}{2}\\right]_1^e = \\dfrac{e^2}{2} - \\dfrac{e^2 - 1}{4} = \\dfrac{e^2 + 1}{4}$.`
        }),
        () => ({
          enonce: `Calculer $\\displaystyle\\int_{0}^{1} x^2 e^x \\, dx$ par deux intégrations par parties successives.`,
          corrige: `**1re IPP** avec $u'(x) = e^x$, $v(x) = x^2$ : $\\int_0^1 x^2 e^x \\, dx = [x^2 e^x]_0^1 - \\int_0^1 2x e^x \\, dx = e - 2\\int_0^1 x e^x \\, dx$. **2e IPP** sur $\\int_0^1 x e^x \\, dx$ : avec $u'(x) = e^x$, $v(x) = x$ : $\\int_0^1 x e^x \\, dx = [xe^x]_0^1 - \\int_0^1 e^x dx = e - (e - 1) = 1$. Donc : $\\int_0^1 x^2 e^x \\, dx = e - 2 \\times 1 = e - 2$.`
        }),
        () => ({
          enonce: `Calculer $\\displaystyle\\int_{0}^{\\pi} x \\sin(x) \\, dx$ par intégration par parties.`,
          corrige: `On pose $u'(x) = \\sin(x)$, $v(x) = x$, donc $u(x) = -\\cos(x)$, $v'(x) = 1$. IPP : $\\int_0^\\pi x \\sin(x) \\, dx = [-x \\cos(x)]_0^\\pi + \\int_0^\\pi \\cos(x) \\, dx = -\\pi \\cos(\\pi) + 0 + [\\sin(x)]_0^\\pi = \\pi + 0 = \\pi$.`
        })
      ];
      return pick(variantes)();
    }
  },

  co_continuite: (d) => {
    if (d === 1) {
      return {
        enonce: reformule([
          `Donner la définition de la continuité d'une fonction $f$ en un point $a$ de son domaine.`,
          `Quand dit-on qu'une fonction $f$ est continue en un point $a$ ?`,
          `Définir la continuité d'une fonction en un point $a$ à l'aide d'une limite.`,
          `Énoncer la condition pour que $f$ soit continue en $a$ (en utilisant la limite).`
        ]),
        corrige: `$f$ est continue en $a$ si $\\lim\\limits_{x \\to a} f(x) = f(a)$, autrement dit la limite existe et vaut $f(a)$. Une fonction est continue sur un intervalle si elle est continue en chaque point de l'intervalle.`
      };
    } else if (d === 2) {
      const variantes = [
        () => ({
          enonce: `Les fonctions polynômes sont-elles continues sur $\\mathbb{R}$ ? Justifier.`,
          corrige: `**Oui** : les fonctions polynômes sont continues sur $\\mathbb{R}$. C'est un résultat du cours (les fonctions $x \\mapsto x^n$ sont continues, et la somme et le produit de fonctions continues le sont aussi).`
        }),
        () => ({
          enonce: `Soit $f$ définie par $f(x) = \\dfrac{x^2 - 4}{x - 2}$ pour $x \\neq 2$. Peut-on prolonger $f$ par continuité en $2$ ? Si oui, quelle valeur donner à $f(2)$ ?`,
          corrige: `Pour $x \\neq 2$ : $f(x) = \\dfrac{(x-2)(x+2)}{x - 2} = x + 2$. Donc $\\lim\\limits_{x \\to 2} f(x) = 4$. On peut prolonger $f$ par continuité en posant $f(2) = 4$.`
        }),
        () => ({
          enonce: `Soit $f$ définie par $f(x) = \\dfrac{x^2 - 9}{x - 3}$ pour $x \\neq 3$. Peut-on prolonger $f$ par continuité en $3$ ?`,
          corrige: `Pour $x \\neq 3$ : $f(x) = \\dfrac{(x-3)(x+3)}{x-3} = x + 3$. Donc $\\lim\\limits_{x \\to 3} f(x) = 6$. Oui, on prolonge par continuité en posant $f(3) = 6$.`
        })
      ];
      return pick(variantes)();
    } else {
      const variantes = [
        () => ({
          enonce: `Soit $f$ définie par $f(x) = \\dfrac{e^x - 1}{x}$ pour $x \\neq 0$. Peut-on prolonger $f$ par continuité en $0$ ?`,
          corrige: `On reconnaît la limite du taux d'accroissement de $\\exp$ en 0 : $\\lim\\limits_{x \\to 0} \\dfrac{e^x - 1}{x} = \\exp'(0) = e^0 = 1$. On peut donc prolonger $f$ par continuité en $0$ en posant $f(0) = 1$.`
        }),
        () => ({
          enonce: `Soit $f$ définie par $f(x) = \\dfrac{\\ln(1 + x)}{x}$ pour $x \\neq 0$, $x > -1$. Peut-on prolonger $f$ par continuité en $0$ ?`,
          corrige: `Posons $g(x) = \\ln(1 + x)$. Alors $g(0) = 0$ et $g'(x) = \\dfrac{1}{1+x}$, donc $g'(0) = 1$. La limite $\\lim\\limits_{x \\to 0} \\dfrac{\\ln(1+x)}{x} = \\lim\\limits_{x \\to 0} \\dfrac{g(x) - g(0)}{x - 0} = g'(0) = 1$. On prolonge par continuité avec $f(0) = 1$.`
        }),
        () => ({
          enonce: `Soit $f$ définie sur $\\mathbb{R}$ par $f(x) = \\begin{cases} x^2 + 1 & \\text{si } x \\leq 1 \\\\ ax + b & \\text{si } x > 1 \\end{cases}$. Déterminer $a$ et $b$ pour que $f$ soit continue et dérivable en $1$.`,
          corrige: `**Continuité en 1** : on doit avoir $\\lim_{x \\to 1^-} f(x) = \\lim_{x \\to 1^+} f(x) = f(1)$, soit $2 = a + b$. **Dérivabilité en 1** : les dérivées à gauche et à droite doivent coïncider. À gauche, $f'(x) = 2x$, donc $f'_g(1) = 2$. À droite, $f'(x) = a$. Donc $a = 2$, d'où $b = 0$.`
        })
      ];
      return pick(variantes)();
    }
  },

  co_tvi: (d) => {
    if (d === 1) {
      return {
        enonce: reformule([
          `Énoncer le théorème des valeurs intermédiaires (TVI).`,
          `Énoncer le théorème des valeurs intermédiaires : préciser les hypothèses sur $f$ et la conclusion sur l'existence d'un antécédent.`,
          `Quel théorème permet de garantir l'existence d'une solution à l'équation $f(x) = k$ lorsque $f$ est continue ?`,
          `Énoncer le théorème qui permet de montrer qu'une équation $f(x) = k$ a au moins une solution sur $[a\\,;\\,b]$.`
        ]),
        corrige: `**TVI** : Soit $f$ une fonction continue sur $[a\\,;\\,b]$. Pour tout réel $k$ compris entre $f(a)$ et $f(b)$, il existe au moins un réel $c \\in [a\\,;\\,b]$ tel que $f(c) = k$.`
      };
    } else if (d === 2) {
      const variantes = [
        () => ({
          enonce: `Soit $f(x) = x^3 + x - 5$. Montrer que l'équation $f(x) = 0$ admet au moins une solution sur $[1\\,;\\,2]$.`,
          corrige: `$f$ est continue sur $\\mathbb{R}$ comme polynôme, donc sur $[1\\,;\\,2]$. $f(1) = 1 + 1 - 5 = -3 < 0$ et $f(2) = 8 + 2 - 5 = 5 > 0$. Comme $0$ est compris entre $f(1)$ et $f(2)$, le **TVI** garantit l'existence d'un $c \\in [1\\,;\\,2]$ tel que $f(c) = 0$.`
        }),
        () => ({
          enonce: `Soit $f(x) = x^3 - 3x + 1$. Montrer que l'équation $f(x) = 0$ admet au moins une solution sur $[0\\,;\\,1]$.`,
          corrige: `$f$ continue sur $[0\\,;\\,1]$. $f(0) = 1 > 0$ et $f(1) = 1 - 3 + 1 = -1 < 0$. Par TVI, $0$ étant entre $f(0)$ et $f(1)$, il existe $c \\in [0\\,;\\,1]$ tel que $f(c) = 0$.`
        }),
        () => ({
          enonce: `Montrer que l'équation $\\ln(x) = 2 - x$ admet au moins une solution sur $[1\\,;\\,e^2]$.`,
          corrige: `Posons $f(x) = \\ln(x) - 2 + x$, continue sur $]0\\,;\\,+\\infty[$. $f(1) = 0 - 2 + 1 = -1 < 0$. $f(e^2) = 2 - 2 + e^2 = e^2 > 0$. Par TVI, il existe $c \\in [1\\,;\\,e^2]$ tel que $f(c) = 0$, soit $\\ln(c) = 2 - c$.`
        })
      ];
      return pick(variantes)();
    } else {
      return {
        enonce: reformule([
          `Soit $f(x) = e^x - x - 2$. Justifier que l'équation $f(x) = 0$ a au moins une solution sur $\\mathbb{R}$.`,
          `Soit $f(x) = e^x - x - 2$. Démontrer, à l'aide du TVI, que l'équation $f(x) = 0$ a au moins une solution.`,
          `Justifier qu'il existe au moins une solution réelle à l'équation $e^x = x + 2$.`
        ]),
        corrige: `Posons $f(x) = e^x - x - 2$. $f$ est continue sur $\\mathbb{R}$ (somme de fonctions continues). $f(0) = 1 - 0 - 2 = -1 < 0$. $f(2) = e^2 - 2 - 2 = e^2 - 4 \\approx 7{,}39 - 4 = 3{,}39 > 0$. Comme $0$ est compris entre $f(0)$ et $f(2)$ et que $f$ est continue sur $[0\\,;\\,2]$, le **TVI** garantit l'existence d'au moins une solution dans $[0\\,;\\,2]$, donc dans $\\mathbb{R}$.`
      };
    }
  },

  co_tvi_corollaire: (d) => {
    if (d === 1) {
      return {
        enonce: reformule([
          `Énoncer le corollaire du TVI (concernant l'unicité de la solution).`,
          `Énoncer le corollaire du TVI (cas d'une fonction continue strictement monotone).`,
          `Quel théorème permet de prouver l'**unicité** d'une solution à $f(x) = k$ ?`,
          `Énoncer le théorème qui combine TVI et stricte monotonie pour garantir une unique solution.`
        ]),
        corrige: `**Corollaire du TVI** : Si $f$ est continue **et strictement monotone** sur $[a\\,;\\,b]$, alors pour tout $k$ entre $f(a)$ et $f(b)$, l'équation $f(x) = k$ admet une **unique** solution dans $[a\\,;\\,b]$.`
      };
    } else if (d === 2) {
      const variantes = [
        () => ({
          enonce: `Soit $f(x) = x^3 + x - 5$. Montrer que l'équation $f(x) = 0$ admet une **unique** solution sur $[1\\,;\\,2]$.`,
          corrige: `$f$ est continue sur $[1\\,;\\,2]$ (polynôme). $f'(x) = 3x^2 + 1 > 0$ pour tout $x$, donc $f$ est **strictement croissante**. $f(1) = -3 < 0 < 5 = f(2)$, $0$ est entre $f(1)$ et $f(2)$. Par le **corollaire du TVI**, l'équation $f(x) = 0$ admet une **unique** solution dans $[1\\,;\\,2]$.`
        }),
        () => ({
          enonce: `Soit $f(x) = x^3 + 2x - 1$. Montrer que l'équation $f(x) = 0$ admet une **unique** solution sur $\\mathbb{R}$.`,
          corrige: `$f$ continue sur $\\mathbb{R}$. $f'(x) = 3x^2 + 2 > 0$ pour tout $x$, donc $f$ est strictement croissante. $\\lim_{-\\infty} f = -\\infty$ et $\\lim_{+\\infty} f = +\\infty$. $0$ est compris entre ces deux limites, donc par le corollaire du TVI étendu à $\\mathbb{R}$, l'équation $f(x) = 0$ admet une **unique** solution.`
        }),
        () => ({
          enonce: `Soit $f(x) = e^x + x$. Montrer que l'équation $f(x) = 5$ admet une **unique** solution sur $\\mathbb{R}$.`,
          corrige: `$f$ continue sur $\\mathbb{R}$. $f'(x) = e^x + 1 > 0$, donc $f$ strictement croissante. Limites : $\\lim_{-\\infty} f = -\\infty$ et $\\lim_{+\\infty} f = +\\infty$. Comme $5$ est dans cet intervalle, par le corollaire du TVI, il existe une **unique** solution.`
        })
      ];
      return pick(variantes)();
    } else {
      const variantes = [
        () => ({
          enonce: `Soit $f(x) = e^x - x - 2$ étudiée sur $\\mathbb{R}$. Montrer que $f(x) = 0$ admet exactement deux solutions sur $\\mathbb{R}$.`,
          corrige: `$f'(x) = e^x - 1$. Signe : $f'(x) < 0$ pour $x < 0$, $f'(x) > 0$ pour $x > 0$. Donc $f$ est strictement décroissante sur $]-\\infty\\,;\\,0]$, strictement croissante sur $[0\\,;\\,+\\infty[$, avec un minimum en $0$ : $f(0) = -1 < 0$. Limites : $f(x) \\to +\\infty$ en $\\pm\\infty$. Sur $]-\\infty\\,;\\,0]$ : $f$ continue strictement décroissante, varie de $+\\infty$ à $-1$, donc passe par $0$ exactement une fois (corollaire du TVI). Sur $[0\\,;\\,+\\infty[$ : $f$ continue strictement croissante, varie de $-1$ à $+\\infty$, passe par $0$ exactement une fois. Au total : **2 solutions**.`
        }),
        () => ({
          enonce: `Soit $f(x) = x^2 - 4\\ln(x)$ sur $]0\\,;\\,+\\infty[$. Montrer que $f$ s'annule sur $]0\\,;\\,+\\infty[$ en exactement deux points.`,
          corrige: `$f'(x) = 2x - \\dfrac{4}{x} = \\dfrac{2x^2 - 4}{x} = \\dfrac{2(x^2 - 2)}{x}$. Sur $]0\\,;\\,+\\infty[$, $f'(x) = 0$ pour $x = \\sqrt{2}$. $f$ décroît sur $]0\\,;\\,\\sqrt{2}]$ puis croît. Minimum en $\\sqrt{2}$ : $f(\\sqrt{2}) = 2 - 4 \\times \\dfrac{\\ln(2)}{2} = 2 - 2\\ln(2) \\approx 0{,}61 > 0$. Donc $f > 0$ partout : **0 solution**. (Note : pour avoir 2 solutions, il aurait fallu $f(\\sqrt{2}) < 0$.)`
        })
      ];
      return pick(variantes)();
    }
  },

  tr_valeurs: (d) => {
    if (d === 1) {
      const variantes = [
        () => ({
          enonce: `Donner $\\cos(0)$ et $\\sin(0)$.`,
          corrige: `$\\cos(0) = 1$ et $\\sin(0) = 0$.`
        }),
        () => ({
          enonce: `Donner $\\cos\\left(\\dfrac{\\pi}{2}\\right)$ et $\\sin\\left(\\dfrac{\\pi}{2}\\right)$.`,
          corrige: `$\\cos\\left(\\dfrac{\\pi}{2}\\right) = 0$ et $\\sin\\left(\\dfrac{\\pi}{2}\\right) = 1$.`
        }),
        () => ({
          enonce: `Donner $\\cos(\\pi)$ et $\\sin(\\pi)$.`,
          corrige: `$\\cos(\\pi) = -1$ et $\\sin(\\pi) = 0$.`
        })
      ];
      return pick(variantes)();
    } else if (d === 2) {
      const variantes = [
        () => ({
          enonce: `Donner $\\cos\\left(\\dfrac{\\pi}{3}\\right)$ et $\\sin\\left(\\dfrac{\\pi}{3}\\right)$.`,
          corrige: `$\\cos\\left(\\dfrac{\\pi}{3}\\right) = \\dfrac{1}{2}$ et $\\sin\\left(\\dfrac{\\pi}{3}\\right) = \\dfrac{\\sqrt{3}}{2}$.`
        }),
        () => ({
          enonce: `Donner $\\cos\\left(\\dfrac{\\pi}{4}\\right)$ et $\\sin\\left(\\dfrac{\\pi}{4}\\right)$.`,
          corrige: `$\\cos\\left(\\dfrac{\\pi}{4}\\right) = \\sin\\left(\\dfrac{\\pi}{4}\\right) = \\dfrac{\\sqrt{2}}{2}$.`
        }),
        () => ({
          enonce: `Donner $\\cos\\left(\\dfrac{\\pi}{6}\\right)$ et $\\sin\\left(\\dfrac{\\pi}{6}\\right)$.`,
          corrige: `$\\cos\\left(\\dfrac{\\pi}{6}\\right) = \\dfrac{\\sqrt{3}}{2}$ et $\\sin\\left(\\dfrac{\\pi}{6}\\right) = \\dfrac{1}{2}$.`
        })
      ];
      return pick(variantes)();
    } else {
      const variantes = [
        () => ({
          enonce: `Calculer $\\cos\\left(\\dfrac{2\\pi}{3}\\right)$ et $\\sin\\left(\\dfrac{2\\pi}{3}\\right)$.`,
          corrige: `$\\dfrac{2\\pi}{3} = \\pi - \\dfrac{\\pi}{3}$. Donc $\\cos\\left(\\dfrac{2\\pi}{3}\\right) = -\\cos\\left(\\dfrac{\\pi}{3}\\right) = -\\dfrac{1}{2}$ et $\\sin\\left(\\dfrac{2\\pi}{3}\\right) = \\sin\\left(\\dfrac{\\pi}{3}\\right) = \\dfrac{\\sqrt{3}}{2}$.`
        }),
        () => ({
          enonce: `Calculer $\\cos\\left(-\\dfrac{\\pi}{4}\\right)$ et $\\sin\\left(-\\dfrac{\\pi}{4}\\right)$.`,
          corrige: `$\\cos$ est paire : $\\cos\\left(-\\dfrac{\\pi}{4}\\right) = \\cos\\left(\\dfrac{\\pi}{4}\\right) = \\dfrac{\\sqrt{2}}{2}$. $\\sin$ est impaire : $\\sin\\left(-\\dfrac{\\pi}{4}\\right) = -\\sin\\left(\\dfrac{\\pi}{4}\\right) = -\\dfrac{\\sqrt{2}}{2}$.`
        })
      ];
      return pick(variantes)();
    }
  },

  tr_equations: (d) => {
    if (d === 1) {
      const variantes = [
        () => ({
          enonce: `Résoudre dans $\\mathbb{R}$ l'équation $\\cos(x) = 0$.`,
          corrige: `Les solutions sont $x = \\dfrac{\\pi}{2} + k\\pi$ avec $k \\in \\mathbb{Z}$. (Toutes les valeurs où $\\cos$ s'annule sur l'axe des $x$.)`
        }),
        () => ({
          enonce: `Résoudre dans $\\mathbb{R}$ l'équation $\\sin(x) = 0$.`,
          corrige: `Les solutions sont $x = k\\pi$ avec $k \\in \\mathbb{Z}$.`
        }),
        () => ({
          enonce: `Résoudre dans $\\mathbb{R}$ l'équation $\\cos(x) = 1$.`,
          corrige: `$\\cos(x) = 1$ uniquement pour $x = 0$ (modulo $2\\pi$). Solutions : $x = 2k\\pi$ avec $k \\in \\mathbb{Z}$.`
        }),
        () => ({
          enonce: `Résoudre dans $\\mathbb{R}$ l'équation $\\sin(x) = 1$.`,
          corrige: `$\\sin(x) = 1$ pour $x = \\dfrac{\\pi}{2}$ (modulo $2\\pi$). Solutions : $x = \\dfrac{\\pi}{2} + 2k\\pi$ avec $k \\in \\mathbb{Z}$.`
        })
      ];
      return pick(variantes)();
    } else if (d === 2) {
      const variantes = [
        () => ({
          enonce: `Résoudre dans $\\mathbb{R}$ l'équation $\\cos(x) = \\dfrac{1}{2}$.`,
          corrige: `$\\cos\\left(\\dfrac{\\pi}{3}\\right) = \\dfrac{1}{2}$. Par symétrie, $\\cos$ vaut aussi $\\dfrac{1}{2}$ pour $-\\dfrac{\\pi}{3}$. Donc les solutions sont $x = \\pm\\dfrac{\\pi}{3} + 2k\\pi$ avec $k \\in \\mathbb{Z}$.`
        }),
        () => ({
          enonce: `Résoudre dans $\\mathbb{R}$ l'équation $\\sin(x) = \\dfrac{1}{2}$.`,
          corrige: `$\\sin\\left(\\dfrac{\\pi}{6}\\right) = \\dfrac{1}{2}$. L'autre angle avec ce sinus est $\\pi - \\dfrac{\\pi}{6} = \\dfrac{5\\pi}{6}$. Solutions : $x = \\dfrac{\\pi}{6} + 2k\\pi$ ou $x = \\dfrac{5\\pi}{6} + 2k\\pi$ avec $k \\in \\mathbb{Z}$.`
        }),
        () => ({
          enonce: `Résoudre dans $\\mathbb{R}$ l'équation $\\cos(x) = \\dfrac{\\sqrt{2}}{2}$.`,
          corrige: `$\\cos\\left(\\dfrac{\\pi}{4}\\right) = \\dfrac{\\sqrt{2}}{2}$. Solutions : $x = \\pm\\dfrac{\\pi}{4} + 2k\\pi$ avec $k \\in \\mathbb{Z}$.`
        }),
        () => ({
          enonce: `Résoudre dans $\\mathbb{R}$ l'équation $\\sin(x) = \\dfrac{\\sqrt{3}}{2}$.`,
          corrige: `$\\sin\\left(\\dfrac{\\pi}{3}\\right) = \\dfrac{\\sqrt{3}}{2}$. L'autre angle est $\\pi - \\dfrac{\\pi}{3} = \\dfrac{2\\pi}{3}$. Solutions : $x = \\dfrac{\\pi}{3} + 2k\\pi$ ou $x = \\dfrac{2\\pi}{3} + 2k\\pi$ avec $k \\in \\mathbb{Z}$.`
        })
      ];
      return pick(variantes)();
    } else {
      const variantes = [
        () => ({
          enonce: `Résoudre dans $[0\\,;\\,2\\pi]$ l'équation $2\\cos(x) - 1 = 0$.`,
          corrige: `L'équation équivaut à $\\cos(x) = \\dfrac{1}{2}$. Sur $[0\\,;\\,2\\pi]$, les solutions sont $x = \\dfrac{\\pi}{3}$ et $x = -\\dfrac{\\pi}{3} + 2\\pi = \\dfrac{5\\pi}{3}$. Deux solutions dans l'intervalle : $\\dfrac{\\pi}{3}$ et $\\dfrac{5\\pi}{3}$.`
        }),
        () => ({
          enonce: `Résoudre dans $[0\\,;\\,2\\pi]$ l'équation $2\\sin(x) - \\sqrt{3} = 0$.`,
          corrige: `L'équation équivaut à $\\sin(x) = \\dfrac{\\sqrt{3}}{2}$. Sur $[0\\,;\\,2\\pi]$, les solutions sont $x = \\dfrac{\\pi}{3}$ et $x = \\dfrac{2\\pi}{3}$.`
        }),
        () => ({
          enonce: `Résoudre dans $[-\\pi\\,;\\,\\pi]$ l'équation $\\cos(2x) = 0$.`,
          corrige: `$\\cos(2x) = 0 \\Leftrightarrow 2x = \\dfrac{\\pi}{2} + k\\pi$, soit $x = \\dfrac{\\pi}{4} + k\\dfrac{\\pi}{2}$ avec $k \\in \\mathbb{Z}$. Sur $[-\\pi\\,;\\,\\pi]$, les solutions sont $x \\in \\left\\{-\\dfrac{3\\pi}{4}, -\\dfrac{\\pi}{4}, \\dfrac{\\pi}{4}, \\dfrac{3\\pi}{4}\\right\\}$.`
        })
      ];
      return pick(variantes)();
    }
  },

  tr_derivees: (d) => {
    if (d === 1) {
      return {
        enonce: reformule([
          `Donner les dérivées de $\\sin(x)$ et $\\cos(x)$.`,
          `Quelle est la dérivée de la fonction sinus ? Et celle de la fonction cosinus ?`,
          `Énoncer les formules de dérivation des fonctions sinus et cosinus.`,
          `Soit $f(x) = \\sin(x)$ et $g(x) = \\cos(x)$. Calculer $f'(x)$ et $g'(x)$.`
        ]),
        corrige: `$\\sin'(x) = \\cos(x)$ et $\\cos'(x) = -\\sin(x)$.`
      };
    } else if (d === 2) {
      const variantes = [
        () => {
          const a = pick([2, 3, 5]);
          return {
            enonce: `Soit $f(x) = \\sin(${a}x)$. Calculer $f'(x)$.`,
            corrige: `Par dérivée composée, avec $u(x) = ${a}x$ et $u'(x) = ${a}$ : $f'(x) = u'(x) \\cos(u(x)) = ${a}\\cos(${a}x)$.`
          };
        },
        () => {
          const a = pick([2, 3, 4]);
          const b = pick([1, 2]);
          return {
            enonce: `Soit $f(x) = \\cos(${a}x + ${b})$. Calculer $f'(x)$.`,
            corrige: `Avec $u(x) = ${a}x + ${b}$ et $u'(x) = ${a}$, on a $\\cos(u)' = -u' \\sin(u)$, donc $f'(x) = -${a}\\sin(${a}x + ${b})$.`
          };
        }
      ];
      return pick(variantes)();
    } else {
      const variantes = [
        () => ({
          enonce: `Soit $f(x) = x \\sin(x)$. Calculer $f'(x)$.`,
          corrige: `Formule du produit avec $u(x) = x$ et $v(x) = \\sin(x)$. $u'(x) = 1$, $v'(x) = \\cos(x)$. $f'(x) = 1 \\times \\sin(x) + x \\times \\cos(x) = \\sin(x) + x\\cos(x)$.`
        }),
        () => ({
          enonce: `Soit $f(x) = x^2 \\cos(x)$. Calculer $f'(x)$.`,
          corrige: `Formule du produit avec $u(x) = x^2$ et $v(x) = \\cos(x)$. $u'(x) = 2x$, $v'(x) = -\\sin(x)$. $f'(x) = 2x \\cos(x) + x^2 \\times (-\\sin(x)) = 2x\\cos(x) - x^2\\sin(x)$.`
        }),
        () => ({
          enonce: `Soit $f(x) = e^x \\sin(x)$. Calculer $f'(x)$.`,
          corrige: `Formule du produit avec $u(x) = e^x$ et $v(x) = \\sin(x)$. $u'(x) = e^x$, $v'(x) = \\cos(x)$. $f'(x) = e^x \\sin(x) + e^x \\cos(x) = e^x(\\sin(x) + \\cos(x))$.`
        }),
        () => ({
          enonce: `Soit $f(x) = \\sin^2(x)$ (c'est-à-dire $(\\sin x)^2$). Calculer $f'(x)$.`,
          corrige: `Formule de la composée : $f = u^2$ avec $u(x) = \\sin(x)$. $f'(x) = 2 u'(x) u(x) = 2\\cos(x) \\sin(x) = \\sin(2x)$.`
        })
      ];
      return pick(variantes)();
    }
  },

  tr_periodicite: (d) => {
    if (d === 1) {
      const variantes = [
        () => ({
          enonce: `Quelle est la période de la fonction sinus ? Et celle de la fonction cosinus ?`,
          corrige: `Les fonctions $\\sin$ et $\\cos$ sont $2\\pi$-périodiques : pour tout $x$, $\\sin(x + 2\\pi) = \\sin(x)$ et $\\cos(x + 2\\pi) = \\cos(x)$.`
        }),
        () => ({
          enonce: `La fonction cosinus est-elle paire ou impaire ? Et la fonction sinus ?`,
          corrige: `$\\cos$ est **paire** : $\\cos(-x) = \\cos(x)$. $\\sin$ est **impaire** : $\\sin(-x) = -\\sin(x)$.`
        }),
        () => ({
          enonce: `Énoncer les propriétés de périodicité et de parité des fonctions sinus et cosinus.`,
          corrige: `**Périodicité** : $\\sin$ et $\\cos$ sont $2\\pi$-périodiques. **Parité** : $\\cos$ est paire ($\\cos(-x) = \\cos(x)$), $\\sin$ est impaire ($\\sin(-x) = -\\sin(x)$).`
        }),
        () => ({
          enonce: `Donner $\\sin(x + 2\\pi)$ et $\\cos(x + 2\\pi)$ pour tout réel $x$.`,
          corrige: `$\\sin(x + 2\\pi) = \\sin(x)$ et $\\cos(x + 2\\pi) = \\cos(x)$ ($2\\pi$-périodicité).`
        })
      ];
      return pick(variantes)();
    } else if (d === 2) {
      const variantes = [
        () => {
          const a = pick([2, 3, 4]);
          return {
            enonce: `Quelle est la période de $f(x) = \\sin(${a}x)$ ?`,
            corrige: `Si $\\sin$ est $2\\pi$-périodique, alors $\\sin(${a}x)$ a pour période $T$ telle que $${a}(x + T) - ${a}x = 2\\pi$, soit $T = \\dfrac{2\\pi}{${a}}$. **Période : $\\dfrac{2\\pi}{${a}}$**.`
          };
        }
      ];
      return pick(variantes)();
    } else {
      const variantes = [
        () => ({
          enonce: `Soit $f(x) = \\sin(x) + \\cos(x)$. Étudier la parité de $f$. La fonction est-elle paire, impaire, ou ni l'un ni l'autre ?`,
          corrige: `$f(-x) = \\sin(-x) + \\cos(-x) = -\\sin(x) + \\cos(x)$. Si $f$ était paire, on aurait $f(-x) = f(x)$, soit $-\\sin(x) + \\cos(x) = \\sin(x) + \\cos(x)$, donc $\\sin(x) = 0$ (faux pour tout $x$). De même $f$ n'est pas impaire. La fonction $f$ n'est **ni paire ni impaire**.`
        }),
        () => ({
          enonce: `Soit $f(x) = \\sin(x) \\cos(x)$. Étudier la parité de $f$.`,
          corrige: `$f(-x) = \\sin(-x)\\cos(-x) = (-\\sin(x)) \\cdot \\cos(x) = -\\sin(x)\\cos(x) = -f(x)$. La fonction $f$ est donc **impaire**. (On peut aussi remarquer que $f(x) = \\dfrac{1}{2}\\sin(2x)$, et que $\\sin$ est impaire.)`
        }),
        () => ({
          enonce: `Soit $f(x) = \\cos^2(x)$. Étudier la parité et la périodicité de $f$.`,
          corrige: `**Parité** : $f(-x) = (\\cos(-x))^2 = (\\cos(x))^2 = f(x)$ : $f$ est **paire**. **Périodicité** : $f$ est $\\pi$-périodique car $\\cos(x + \\pi) = -\\cos(x)$, et donc $f(x + \\pi) = \\cos^2(x + \\pi) = (-\\cos(x))^2 = \\cos^2(x) = f(x)$. (On peut aussi écrire $f(x) = \\dfrac{1 + \\cos(2x)}{2}$.)`
        })
      ];
      return pick(variantes)();
    }
  },

  va_lineaire: (d) => {
    if (d === 1) {
      return {
        enonce: reformule([
          `Soient $a$ et $b$ deux réels, et $X$ une variable aléatoire d'espérance $E(X)$ et de variance $V(X)$. Donner $E(aX + b)$ et $V(aX + b)$.`,
          `Énoncer les formules de l'espérance et de la variance de $aX + b$ (où $a$ et $b$ sont des constantes réelles).`,
          `Comment se transforment $E(X)$ et $V(X)$ quand on passe à $Y = aX + b$ ?`
        ]),
        corrige: `$E(aX + b) = aE(X) + b$ (linéarité). $V(aX + b) = a^2 V(X)$ (la translation par $b$ n'affecte pas la variance, et la multiplication par $a$ multiplie la variance par $a^2$).`
      };
    } else if (d === 2) {
      const variantes = [
        () => {
          const EX = pick([3, 5, 8]);
          const VX = pick([2, 4, 9]);
          const a = pick([2, 3]);
          const b = pick([1, 4, 7]);
          return {
            enonce: `On donne $E(X) = ${EX}$ et $V(X) = ${VX}$. Calculer $E(${a}X + ${b})$ et $V(${a}X + ${b})$.`,
            corrige: `$E(${a}X + ${b}) = ${a} \\times ${EX} + ${b} = ${a*EX + b}$. $V(${a}X + ${b}) = ${a}^2 \\times ${VX} = ${a*a*VX}$.`
          };
        }
      ];
      return pick(variantes)();
    } else {
      const variantes = [
        () => ({
          enonce: `Un jeu consiste à miser 5 € puis à tirer un dé. On gagne $10 X$ euros où $X$ est le résultat du dé (donc $E(X) = 3{,}5$, $V(X) = \\dfrac{35}{12}$). Soit $Y$ le gain algébrique du joueur. Donner l'expression de $Y$ en fonction de $X$, puis calculer $E(Y)$ et $V(Y)$.`,
          corrige: `Le joueur mise 5 € puis reçoit $10X$ €. Donc $Y = 10X - 5$. $E(Y) = 10 E(X) - 5 = 10 \\times 3{,}5 - 5 = 30$. Le jeu est donc **favorable au joueur** en moyenne. $V(Y) = 10^2 V(X) = 100 \\times \\dfrac{35}{12} = \\dfrac{3500}{12} = \\dfrac{875}{3}$.`
        }),
        () => ({
          enonce: `Une variable aléatoire $X$ vérifie $E(X) = 10$ et $V(X) = 4$. On définit $Z = \\dfrac{X - 10}{2}$. Calculer $E(Z)$ et $V(Z)$. Comment s'appelle $Z$ ?`,
          corrige: `$Z = \\dfrac{1}{2}X - 5$. $E(Z) = \\dfrac{1}{2} \\times 10 - 5 = 0$. $V(Z) = \\left(\\dfrac{1}{2}\\right)^2 \\times 4 = 1$. **$Z$ est la variable aléatoire centrée réduite** associée à $X$ : elle a une espérance nulle et un écart-type valant 1.`
        }),
        () => ({
          enonce: `Le poids $P$ (en kg) d'un colis suit une loi d'espérance $E(P) = 20$ et de variance $V(P) = 9$. Le coût de transport est $C = 3 P + 2$ (en €). Calculer l'espérance et la variance du coût.`,
          corrige: `$E(C) = 3 E(P) + 2 = 3 \\times 20 + 2 = 62$ €. $V(C) = 3^2 \\times V(P) = 9 \\times 9 = 81$, soit un écart-type de $\\sqrt{81} = 9$ €.`
        })
      ];
      return pick(variantes)();
    }
  },

  va_somme: (d) => {
    if (d === 1) {
      return {
        enonce: reformule([
          `Soient $X$ et $Y$ deux variables aléatoires. Donner $E(X + Y)$. Sous quelle condition supplémentaire a-t-on $V(X + Y) = V(X) + V(Y)$ ?`,
          `Énoncer les propriétés de l'espérance et de la variance pour une somme de deux variables aléatoires.`,
          `Quelles sont les formules pour $E(X + Y)$ et $V(X + Y)$ ? Préciser les hypothèses nécessaires.`
        ]),
        corrige: `$E(X + Y) = E(X) + E(Y)$ **toujours** (linéarité de l'espérance). $V(X + Y) = V(X) + V(Y)$ **lorsque $X$ et $Y$ sont indépendantes**.`
      };
    } else if (d === 2) {
      const variantes = [
        () => ({
          enonce: `On lance deux dés équilibrés, et on note $X$ et $Y$ les résultats. Calculer $E(X + Y)$ et $V(X + Y)$ sachant que $E(X) = E(Y) = 3{,}5$ et $V(X) = V(Y) = \\dfrac{35}{12}$.`,
          corrige: `$E(X + Y) = 3{,}5 + 3{,}5 = 7$. Les lancers étant indépendants, $V(X + Y) = V(X) + V(Y) = \\dfrac{35}{12} + \\dfrac{35}{12} = \\dfrac{70}{12} = \\dfrac{35}{6}$.`
        }),
        () => ({
          enonce: `Trois Bernoulli indépendantes $X_1, X_2, X_3$ de paramètre $p = 0{,}4$ chacune. Soit $S = X_1 + X_2 + X_3$. Calculer $E(S)$ et $V(S)$.`,
          corrige: `Chaque $X_i$ a $E(X_i) = p = 0{,}4$ et $V(X_i) = p(1-p) = 0{,}4 \\times 0{,}6 = 0{,}24$. Par linéarité : $E(S) = 3 \\times 0{,}4 = 1{,}2$. Par indépendance : $V(S) = 3 \\times 0{,}24 = 0{,}72$. (On reconnaît que $S$ suit $\\mathcal{B}(3\\,;\\,0{,}4)$, ce qui confirme les formules $np$ et $np(1-p)$.)`
        })
      ];
      return pick(variantes)();
    } else {
      const variantes = [
        () => ({
          enonce: `Soient $X_1, X_2, \\ldots, X_n$ des variables aléatoires indépendantes et de même loi, avec espérance $\\mu$ et variance $\\sigma^2$. On note $S_n = X_1 + X_2 + \\ldots + X_n$. Donner $E(S_n)$ et $V(S_n)$.`,
          corrige: `Par linéarité : $E(S_n) = E(X_1) + \\ldots + E(X_n) = n\\mu$. Par indépendance : $V(S_n) = V(X_1) + \\ldots + V(X_n) = n\\sigma^2$. (Conséquence : l'écart-type de $S_n$ vaut $\\sigma\\sqrt{n}$, ce qui justifie l'intérêt de "moyenner" pour réduire la variance.)`
        }),
        () => ({
          enonce: `Soient $X_1, \\ldots, X_n$ iid d'espérance $\\mu$ et variance $\\sigma^2$. On considère la **moyenne empirique** $\\bar{X}_n = \\dfrac{X_1 + \\ldots + X_n}{n}$. Calculer $E(\\bar{X}_n)$ et $V(\\bar{X}_n)$.`,
          corrige: `$\\bar{X}_n = \\dfrac{1}{n} S_n$ où $S_n = X_1 + \\ldots + X_n$. $E(\\bar{X}_n) = \\dfrac{1}{n} \\times n\\mu = \\mu$. $V(\\bar{X}_n) = \\dfrac{1}{n^2} \\times n\\sigma^2 = \\dfrac{\\sigma^2}{n}$. L'écart-type vaut $\\dfrac{\\sigma}{\\sqrt{n}}$ : **il tend vers 0 quand $n \\to +\\infty$**. C'est la loi des grands nombres en action.`
        })
      ];
      return pick(variantes)();
    }
  },

  va_lgn: (d) => {
    if (d === 1) {
      return {
        enonce: reformule([
          `Énoncer la loi des grands nombres (forme intuitive).`,
          `Énoncer la loi des grands nombres : que peut-on dire de la moyenne empirique de variables aléatoires iid quand $n$ devient grand ?`,
          `Quel théorème justifie qu'on puisse estimer une probabilité par une fréquence observée ?`,
          `Énoncer la loi des grands nombres et donner une interprétation pratique.`
        ]),
        corrige: `**Loi des grands nombres** : si on répète un grand nombre de fois et de façon indépendante une même expérience aléatoire, la moyenne empirique des résultats observés se rapproche de l'espérance théorique. Formellement : si $X_1, \\ldots, X_n$ sont i.i.d. d'espérance $\\mu$, alors la moyenne $\\bar{X}_n = \\dfrac{X_1 + \\ldots + X_n}{n}$ converge "en probabilité" vers $\\mu$ quand $n \\to +\\infty$.`
      };
    } else if (d === 2) {
      const variantes = [
        () => ({
          enonce: `On lance un dé équilibré $n$ fois et on note $\\bar{X}_n$ la moyenne des résultats obtenus. Que dit la loi des grands nombres au sujet de $\\bar{X}_n$ quand $n$ est grand ?`,
          corrige: `L'espérance d'un lancer est $E(X) = \\dfrac{1+2+3+4+5+6}{6} = 3{,}5$. Par la **loi des grands nombres**, $\\bar{X}_n$ se rapproche de $3{,}5$ quand $n \\to +\\infty$. Concrètement, si on lance 1 million de fois un dé et qu'on fait la moyenne, on obtient une valeur très proche de 3,5.`
        }),
        () => ({
          enonce: `On répète $n$ fois une épreuve de Bernoulli de paramètre $p = 0{,}25$ et on calcule la fréquence de succès $f_n$. Que prédit la loi des grands nombres sur $f_n$ ?`,
          corrige: `La fréquence empirique $f_n$ est la moyenne des $n$ Bernoulli (chacune valant 0 ou 1). L'espérance d'une Bernoulli est $p = 0{,}25$. Par la **loi des grands nombres**, $f_n \\to 0{,}25$ quand $n \\to +\\infty$. La fréquence observée se rapproche de la probabilité théorique.`
        }),
        () => ({
          enonce: `Une roulette équilibrée à 5 secteurs (numérotés 1 à 5) est lancée $n$ fois. Soit $\\bar{X}_n$ la moyenne des résultats. Vers quelle valeur tend $\\bar{X}_n$ quand $n \\to +\\infty$ ?`,
          corrige: `Espérance d'un tirage : $E(X) = \\dfrac{1+2+3+4+5}{5} = 3$. Par la loi des grands nombres, $\\bar{X}_n \\to 3$.`
        })
      ];
      return pick(variantes)();
    } else {
      const variantes = [
        () => ({
          enonce: `Un programme Python simule $N = 10\\,000$ lancers d'une pièce truquée (probabilité de pile : $p = 0{,}3$) et calcule la fréquence de "pile". Quelle valeur peut-on attendre, et pourquoi ?`,
          corrige: `Chaque lancer est une Bernoulli de paramètre $p = 0{,}3$, d'espérance $p = 0{,}3$. Par la **loi des grands nombres**, la moyenne empirique des $N$ Bernoulli (c'est-à-dire la fréquence de pile) tend vers l'espérance $0{,}3$ quand $N$ devient grand. On peut donc attendre une fréquence très proche de $0{,}3$. **Application** : c'est ainsi qu'on peut **estimer** une probabilité inconnue par simulation.`
        }),
        () => ({
          enonce: `On veut estimer la probabilité $p$ qu'un dé truqué donne un "6". On effectue 1000 lancers et on obtient 245 "6". Estimer $p$ et justifier en vous appuyant sur la loi des grands nombres.`,
          corrige: `Estimation : $\\hat{p} = \\dfrac{245}{1000} = 0{,}245$. Justification : par la loi des grands nombres, la fréquence empirique $f_n = \\dfrac{\\text{nombre de 6}}{n}$ converge vers la probabilité théorique $p$ quand $n \\to +\\infty$. Avec $n = 1000$ (grand), $\\hat{p}$ donne une bonne estimation de $p$.`
        }),
        () => ({
          enonce: `Pourquoi la loi des grands nombres ne dit-elle pas que la fréquence empirique **égale** la probabilité théorique pour $n$ grand ?`,
          corrige: `La loi des grands nombres dit que $f_n$ se "rapproche" de $p$ au sens "en probabilité" : pour tout écart $\\varepsilon > 0$, $P(|f_n - p| > \\varepsilon)$ tend vers 0. Mais $f_n$ reste une variable aléatoire qui peut prendre des valeurs légèrement différentes de $p$. Par exemple, sur 1000 lancers d'une pièce équilibrée, on peut obtenir 503 piles : $f_n = 0{,}503 \\neq 0{,}5$, et c'est attendu (fluctuations).`
        })
      ];
      return pick(variantes)();
    }
  },

  ge_coords: (d) => {
    if (d === 1) {
      const xA = rand(-3, 3), yA = rand(-3, 3), zA = rand(-3, 3);
      const xB = rand(-3, 3), yB = rand(-3, 3), zB = rand(-3, 3);
      return {
        enonce: `On considère les points $A(${xA}\\,;\\,${yA}\\,;\\,${zA})$ et $B(${xB}\\,;\\,${yB}\\,;\\,${zB})$ dans l'espace. Calculer les coordonnées du vecteur $\\overrightarrow{AB}$.`,
        corrige: `$\\overrightarrow{AB}\\left(x_B - x_A\\,;\\,y_B - y_A\\,;\\,z_B - z_A\\right)$. Donc $\\overrightarrow{AB}(${xB - xA}\\,;\\,${yB - yA}\\,;\\,${zB - zA})$.`
      };
    } else if (d === 2) {
      const variantes = [
        () => {
          const xA = rand(-2, 4), yA = rand(-2, 4), zA = rand(-2, 4);
          const xB = rand(-2, 4), yB = rand(-2, 4), zB = rand(-2, 4);
          return {
            enonce: `Calculer les coordonnées du milieu $I$ du segment $[AB]$ avec $A(${xA}\\,;\\,${yA}\\,;\\,${zA})$ et $B(${xB}\\,;\\,${yB}\\,;\\,${zB})$.`,
            corrige: `Formule : $I\\left(\\dfrac{x_A + x_B}{2}\\,;\\,\\dfrac{y_A + y_B}{2}\\,;\\,\\dfrac{z_A + z_B}{2}\\right)$. Calcul : $I\\left(\\dfrac{${xA + xB}}{2}\\,;\\,\\dfrac{${yA + yB}}{2}\\,;\\,\\dfrac{${zA + zB}}{2}\\right) = I\\left(${(xA+xB)/2}\\,;\\,${(yA+yB)/2}\\,;\\,${(zA+zB)/2}\\right)$.`
          };
        },
        () => {
          const xA = rand(-3, 3), yA = rand(-3, 3), zA = rand(-3, 3);
          const a = rand(-3, 3), b = rand(-3, 3), c = rand(-3, 3);
          return {
            enonce: `Soit $A(${xA}\\,;\\,${yA}\\,;\\,${zA})$ et $\\vec{u}(${a}\\,;\\,${b}\\,;\\,${c})$. Déterminer les coordonnées du point $B$ tel que $\\overrightarrow{AB} = \\vec{u}$.`,
            corrige: `On a $\\overrightarrow{AB} = \\vec{u}$, donc $B - A = \\vec{u}$, soit $B = A + \\vec{u}$ : $B(${xA + a}\\,;\\,${yA + b}\\,;\\,${zA + c})$.`
          };
        }
      ];
      return pick(variantes)();
    } else {
      const xA = rand(-2, 2), yA = rand(-2, 2), zA = rand(-2, 2);
      const xB = rand(-2, 2), yB = rand(-2, 2), zB = rand(-2, 2);
      const xC = rand(-2, 2), yC = rand(-2, 2), zC = rand(-2, 2);
      // Centre de gravité de ABC
      return {
        enonce: `Soit $A(${xA}\\,;\\,${yA}\\,;\\,${zA})$, $B(${xB}\\,;\\,${yB}\\,;\\,${zB})$ et $C(${xC}\\,;\\,${yC}\\,;\\,${zC})$. Calculer les coordonnées du centre de gravité $G$ du triangle $ABC$.`,
        corrige: `Le centre de gravité est $G\\left(\\dfrac{x_A + x_B + x_C}{3}\\,;\\,\\dfrac{y_A + y_B + y_C}{3}\\,;\\,\\dfrac{z_A + z_B + z_C}{3}\\right)$. Donc $G\\left(\\dfrac{${xA + xB + xC}}{3}\\,;\\,\\dfrac{${yA + yB + yC}}{3}\\,;\\,\\dfrac{${zA + zB + zC}}{3}\\right)$.`
      };
    }
  },

  ge_norme: (d) => {
    if (d === 1) {
      // Facile : norme d'un vecteur simple
      const variantes = [
        () => {
          // Vecteur avec norme entière simple : (3, 4, 0), (1, 2, 2), etc.
          const u = pick([
            { c: [3, 4, 0], n: 5 },
            { c: [1, 2, 2], n: 3 },
            { c: [2, 0, 0], n: 2 },
            { c: [0, 3, 4], n: 5 },
            { c: [2, 2, 1], n: 3 }
          ]);
          return {
            enonce: `Calculer la norme du vecteur $\\vec{u}(${u.c[0]}\\,;\\,${u.c[1]}\\,;\\,${u.c[2]})$.`,
            corrige: `$\\|\\vec{u}\\| = \\sqrt{x^2 + y^2 + z^2} = \\sqrt{${u.c[0]}^2 + ${u.c[1]}^2 + ${u.c[2]}^2} = \\sqrt{${u.c[0]*u.c[0] + u.c[1]*u.c[1] + u.c[2]*u.c[2]}} = ${u.n}$.`
          };
        }
      ];
      return pick(variantes)();
    } else if (d === 2) {
      // Moyen : distance entre deux points
      const variantes = [
        () => {
          // Choisir A, B pour que AB ait une norme entière simple
          const cas = pick([
            { A: [0, 0, 0], B: [3, 4, 0], d: 5 },
            { A: [1, 1, 1], B: [4, 5, 1], d: 5 },
            { A: [-1, 0, 2], B: [1, 2, 4], d: 'sqrt12' },
            { A: [0, 0, 0], B: [2, 2, 1], d: 3 }
          ]);
          const dx = cas.B[0] - cas.A[0];
          const dy = cas.B[1] - cas.A[1];
          const dz = cas.B[2] - cas.A[2];
          const carre = dx*dx + dy*dy + dz*dz;
          const racine = Math.sqrt(carre);
          const racineAff = Number.isInteger(racine) ? `${racine}` : `\\sqrt{${carre}}`;
          return {
            enonce: `Calculer la distance $AB$ avec $A(${cas.A[0]}\\,;\\,${cas.A[1]}\\,;\\,${cas.A[2]})$ et $B(${cas.B[0]}\\,;\\,${cas.B[1]}\\,;\\,${cas.B[2]})$.`,
            corrige: `$AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2} = \\sqrt{${dx}^2 + ${dy}^2 + ${dz}^2} = \\sqrt{${carre}} = ${racineAff}$.`
          };
        }
      ];
      return pick(variantes)();
    } else {
      // Difficile : triangle isocèle, équilatéral, rectangle
      const variantes = [
        () => ({
          enonce: `Soient $A(1\\,;\\,0\\,;\\,0)$, $B(0\\,;\\,1\\,;\\,0)$ et $C(0\\,;\\,0\\,;\\,1)$. Montrer que le triangle $ABC$ est équilatéral.`,
          corrige: `$AB = \\sqrt{(-1)^2 + 1^2 + 0^2} = \\sqrt{2}$. $BC = \\sqrt{0^2 + (-1)^2 + 1^2} = \\sqrt{2}$. $CA = \\sqrt{1^2 + 0^2 + (-1)^2} = \\sqrt{2}$. Les trois côtés ont la même longueur $\\sqrt{2}$, donc $ABC$ est **équilatéral**.`
        }),
        () => ({
          enonce: `Soient $A(2\\,;\\,0\\,;\\,0)$, $B(0\\,;\\,2\\,;\\,0)$ et $C(1\\,;\\,1\\,;\\,2)$. Le triangle $ABC$ est-il isocèle ?`,
          corrige: `$AB = \\sqrt{4 + 4 + 0} = \\sqrt{8} = 2\\sqrt{2}$. $BC = \\sqrt{1 + 1 + 4} = \\sqrt{6}$. $CA = \\sqrt{1 + 1 + 4} = \\sqrt{6}$. On a $BC = CA = \\sqrt{6}$, donc le triangle est **isocèle en $C$**.`
        }),
        () => ({
          enonce: `Soient $A(1\\,;\\,2\\,;\\,3)$, $B(3\\,;\\,2\\,;\\,1)$ et $O(0\\,;\\,0\\,;\\,0)$. Calculer $OA$, $OB$, $AB$. Le triangle $OAB$ est-il isocèle ?`,
          corrige: `$OA = \\sqrt{1 + 4 + 9} = \\sqrt{14}$. $OB = \\sqrt{9 + 4 + 1} = \\sqrt{14}$. $AB = \\sqrt{4 + 0 + 4} = \\sqrt{8} = 2\\sqrt{2}$. Comme $OA = OB$, le triangle est **isocèle en $O$**.`
        })
      ];
      return pick(variantes)();
    }
  },

  ge_colineaires: (d) => {
    if (d === 1) {
      return {
        enonce: `À quelle condition deux vecteurs $\\vec{u}(a\\,;\\,b\\,;\\,c)$ et $\\vec{v}(a'\\,;\\,b'\\,;\\,c')$ sont-ils colinéaires ?`,
        corrige: `Les vecteurs $\\vec{u}$ et $\\vec{v}$ sont **colinéaires** si et seulement s'il existe un réel $k$ tel que $\\vec{v} = k\\vec{u}$, c'est-à-dire $a' = ka$, $b' = kb$, $c' = kc$. Pratiquement : on vérifie si les coordonnées sont proportionnelles (avec le même rapport).`
      };
    } else if (d === 2) {
      const variantes = [
        () => {
          // Vecteurs colinéaires : k = 2 ou 3
          const k = pick([2, 3]);
          const a = pick([1, 2]);
          const b = pick([1, 2, 3]);
          const c = pick([1, 2]);
          return {
            enonce: `Les vecteurs $\\vec{u}(${a}\\,;\\,${b}\\,;\\,${c})$ et $\\vec{v}(${a*k}\\,;\\,${b*k}\\,;\\,${c*k})$ sont-ils colinéaires ? Justifier.`,
            corrige: `On observe que $${a*k} = ${k} \\times ${a}$, $${b*k} = ${k} \\times ${b}$, $${c*k} = ${k} \\times ${c}$. Donc $\\vec{v} = ${k}\\vec{u}$ : les vecteurs sont **colinéaires** (avec coefficient $${k}$).`
          };
        },
        () => {
          // Vecteurs NON colinéaires
          return {
            enonce: `Les vecteurs $\\vec{u}(1\\,;\\,2\\,;\\,3)$ et $\\vec{v}(2\\,;\\,4\\,;\\,5)$ sont-ils colinéaires ?`,
            corrige: `Si $\\vec{v} = k\\vec{u}$, alors $2 = k$ (1re coord), $4 = 2k$ donc $k = 2$ (2e coord), mais $5 \\neq 2 \\times 3 = 6$ (3e coord). Les coordonnées **ne sont pas proportionnelles**, donc les vecteurs ne sont **pas colinéaires**.`
          };
        }
      ];
      return pick(variantes)();
    } else {
      return {
        enonce: `Trois points $A(1\\,;\\,2\\,;\\,3)$, $B(2\\,;\\,4\\,;\\,5)$ et $C(4\\,;\\,8\\,;\\,9)$ sont-ils alignés ?`,
        corrige: `Trois points sont alignés si et seulement si les vecteurs $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$ sont colinéaires. $\\overrightarrow{AB}(1\\,;\\,2\\,;\\,2)$ et $\\overrightarrow{AC}(3\\,;\\,6\\,;\\,6)$. On a $3 = 3 \\times 1$, $6 = 3 \\times 2$, $6 = 3 \\times 2$ : $\\overrightarrow{AC} = 3 \\overrightarrow{AB}$. Les vecteurs sont colinéaires, donc les points $A$, $B$, $C$ sont **alignés**.`
      };
    }
  },

  ge_parametrique: (d) => {
    if (d === 1) {
      return {
        enonce: `Donner la forme générale d'une représentation paramétrique d'une droite $d$ passant par $A(x_A\\,;\\,y_A\\,;\\,z_A)$ et dirigée par $\\vec{u}(a\\,;\\,b\\,;\\,c)$.`,
        corrige: `$d : \\begin{cases} x = x_A + ta \\\\ y = y_A + tb \\\\ z = z_A + tc \\end{cases}$ avec $t \\in \\mathbb{R}$. ($t$ est le paramètre : à chaque valeur de $t$ correspond un point de la droite.)`
      };
    } else if (d === 2) {
      const variantes = [
        () => {
          const xA = rand(-2, 3), yA = rand(-2, 3), zA = rand(-2, 3);
          const a = randNonZero(-3, 3), b = randNonZero(-3, 3), c = randNonZero(-3, 3);
          return {
            enonce: `Donner une représentation paramétrique de la droite passant par $A(${xA}\\,;\\,${yA}\\,;\\,${zA})$ et dirigée par $\\vec{u}(${a}\\,;\\,${b}\\,;\\,${c})$.`,
            corrige: `$\\begin{cases} x = ${xA} ${signe(a)}t \\\\ y = ${yA} ${signe(b)}t \\\\ z = ${zA} ${signe(c)}t \\end{cases}$ avec $t \\in \\mathbb{R}$.`
          };
        },
        () => {
          // Paramétrique d'une droite (AB)
          const xA = rand(-2, 2), yA = rand(-2, 2), zA = rand(-2, 2);
          const xB = rand(-2, 3), yB = rand(-2, 3), zB = rand(-2, 3);
          if (xA === xB && yA === yB && zA === zB) return null;
          const a = xB - xA, b = yB - yA, c = zB - zA;
          return {
            enonce: `Donner une représentation paramétrique de la droite $(AB)$ avec $A(${xA}\\,;\\,${yA}\\,;\\,${zA})$ et $B(${xB}\\,;\\,${yB}\\,;\\,${zB})$.`,
            corrige: `Vecteur directeur : $\\overrightarrow{AB}(${a}\\,;\\,${b}\\,;\\,${c})$. Représentation paramétrique de $(AB)$ : $\\begin{cases} x = ${xA} ${signe(a)}t \\\\ y = ${yA} ${signe(b)}t \\\\ z = ${zA} ${signe(c)}t \\end{cases}$ avec $t \\in \\mathbb{R}$.`
          };
        }
      ];
      let q = null;
      while (!q) q = pick(variantes)();
      return q;
    } else {
      // Difficile : déterminer si un point appartient à une droite
      return {
        enonce: `Soit la droite $d$ de représentation paramétrique $\\begin{cases} x = 1 + 2t \\\\ y = -1 + t \\\\ z = 3 - t \\end{cases}$. Le point $M(5\\,;\\,1\\,;\\,1)$ appartient-il à $d$ ?`,
        corrige: `On cherche $t$ tel que $\\begin{cases} 1 + 2t = 5 \\\\ -1 + t = 1 \\\\ 3 - t = 1 \\end{cases}$. Première équation : $t = 2$. Deuxième : $t = 2$ ✓. Troisième : $t = 2$ ✓. Les trois valeurs de $t$ coïncident, donc $M$ **appartient** à $d$ (pour $t = 2$).`
      };
    }
  },

  ge_cart_plan: (d) => {
    if (d === 1) {
      return {
        enonce: `Quelle est la forme générale de l'équation cartésienne d'un plan dans l'espace ?`,
        corrige: `Un plan a pour équation cartésienne $ax + by + cz + d = 0$ où $(a\\,;\\,b\\,;\\,c)$ est un **vecteur normal** au plan, et $d$ est un réel. (Le vecteur $\\vec{n}(a\\,;\\,b\\,;\\,c)$ caractérise l'orientation du plan.)`
      };
    } else if (d === 2) {
      const variantes = [
        () => {
          const a = randNonZero(-3, 3);
          const b = randNonZero(-3, 3);
          const c = randNonZero(-3, 3);
          const x0 = rand(-2, 3), y0 = rand(-2, 3), z0 = rand(-2, 3);
          const d = -(a*x0 + b*y0 + c*z0);
          const aTerme = a < 0 ? `-${-a}` : `${a}`;
          return {
            enonce: `Donner une équation cartésienne du plan passant par $A(${x0}\\,;\\,${y0}\\,;\\,${z0})$ et de vecteur normal $\\vec{n}(${a}\\,;\\,${b}\\,;\\,${c})$.`,
            corrige: `Le plan a pour équation $${aTerme}x ${signe(b)}y ${signe(c)}z + d = 0$. Comme $A$ appartient au plan, on remplace $x, y, z$ par les coordonnées de $A$ : $(${a}) \\times (${x0}) ${signe(b)} \\times (${y0}) ${signe(c)} \\times (${z0}) + d = 0$, soit $${a*x0 + b*y0 + c*z0} + d = 0$, d'où $d = ${d}$. Équation : $${aTerme}x ${signe(b)}y ${signe(c)}z ${signe(d)} = 0$.`
          };
        }
      ];
      return pick(variantes)();
    } else {
      // Difficile : équations particulières (plans de coordonnées, plans parallèles)
      const variantes = [
        () => ({
          enonce: `Donner une équation cartésienne du plan $(xOy)$ (plan horizontal contenant les axes $x$ et $y$).`,
          corrige: `Le plan $(xOy)$ correspond à $z = 0$. Vecteur normal : $\\vec{k}(0\\,;\\,0\\,;\\,1)$. **Équation cartésienne : $z = 0$**.`
        }),
        () => ({
          enonce: `Un plan $P$ a pour équation $2x - 3y + z + 5 = 0$. Donner un vecteur normal et déterminer si $A(1\\,;\\,1\\,;\\,-4)$ appartient à $P$.`,
          corrige: `Vecteur normal : $\\vec{n}(2\\,;\\,-3\\,;\\,1)$. Test pour $A$ : $2 \\times 1 - 3 \\times 1 + (-4) + 5 = 2 - 3 - 4 + 5 = 0$ ✓. Donc $A$ **appartient** à $P$.`
        })
      ];
      return pick(variantes)();
    }
  },

  or_pscalaire: (d) => {
    if (d === 1) {
      return {
        enonce: `Donner la formule du produit scalaire de deux vecteurs $\\vec{u}(a\\,;\\,b\\,;\\,c)$ et $\\vec{v}(a'\\,;\\,b'\\,;\\,c')$ dans l'espace.`,
        corrige: `$\\vec{u} \\cdot \\vec{v} = aa' + bb' + cc'$. (Somme des produits des coordonnées correspondantes.)`
      };
    } else if (d === 2) {
      const a = rand(-3, 3), b = rand(-3, 3), c = rand(-3, 3);
      const a2 = rand(-3, 3), b2 = rand(-3, 3), c2 = rand(-3, 3);
      const ps = a*a2 + b*b2 + c*c2;
      return {
        enonce: `Calculer $\\vec{u} \\cdot \\vec{v}$ avec $\\vec{u}(${a}\\,;\\,${b}\\,;\\,${c})$ et $\\vec{v}(${a2}\\,;\\,${b2}\\,;\\,${c2})$.`,
        corrige: `$\\vec{u} \\cdot \\vec{v} = (${a}) \\times (${a2}) + (${b}) \\times (${b2}) + (${c}) \\times (${c2}) = ${a*a2} ${signe(b*b2)} ${signe(c*c2)} = ${ps}$.`
      };
    } else {
      // Difficile : application du produit scalaire (angle, cosinus)
      const variantes = [
        () => ({
          enonce: `Soient $\\vec{u}(1\\,;\\,2\\,;\\,2)$ et $\\vec{v}(3\\,;\\,0\\,;\\,4)$. Calculer $\\vec{u} \\cdot \\vec{v}$, $\\|\\vec{u}\\|$, $\\|\\vec{v}\\|$ et en déduire $\\cos(\\widehat{\\vec{u}\\,;\\,\\vec{v}})$.`,
          corrige: `$\\vec{u} \\cdot \\vec{v} = 1 \\times 3 + 2 \\times 0 + 2 \\times 4 = 3 + 0 + 8 = 11$. $\\|\\vec{u}\\| = \\sqrt{1 + 4 + 4} = \\sqrt{9} = 3$. $\\|\\vec{v}\\| = \\sqrt{9 + 0 + 16} = \\sqrt{25} = 5$. Formule : $\\vec{u} \\cdot \\vec{v} = \\|\\vec{u}\\| \\times \\|\\vec{v}\\| \\times \\cos\\theta$, donc $\\cos\\theta = \\dfrac{\\vec{u} \\cdot \\vec{v}}{\\|\\vec{u}\\| \\times \\|\\vec{v}\\|} = \\dfrac{11}{3 \\times 5} = \\dfrac{11}{15}$.`
        }),
        () => ({
          enonce: `Soient $\\vec{u}(2\\,;\\,1\\,;\\,2)$ et $\\vec{v}(0\\,;\\,3\\,;\\,4)$. Calculer $\\vec{u} \\cdot \\vec{v}$, $\\|\\vec{u}\\|$, $\\|\\vec{v}\\|$, et en déduire $\\cos(\\widehat{\\vec{u}\\,;\\,\\vec{v}})$.`,
          corrige: `$\\vec{u} \\cdot \\vec{v} = 0 + 3 + 8 = 11$. $\\|\\vec{u}\\| = \\sqrt{4 + 1 + 4} = 3$. $\\|\\vec{v}\\| = \\sqrt{0 + 9 + 16} = 5$. $\\cos\\theta = \\dfrac{11}{15}$.`
        }),
        () => ({
          enonce: `Soient $A(1\\,;\\,0\\,;\\,1)$, $B(2\\,;\\,1\\,;\\,3)$ et $C(0\\,;\\,2\\,;\\,1)$. Calculer $\\overrightarrow{AB} \\cdot \\overrightarrow{AC}$ et en déduire si l'angle $\\widehat{BAC}$ est aigu, droit, ou obtus.`,
          corrige: `$\\overrightarrow{AB}(1\\,;\\,1\\,;\\,2)$ et $\\overrightarrow{AC}(-1\\,;\\,2\\,;\\,0)$. $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = -1 + 2 + 0 = 1 > 0$. Le produit scalaire est strictement positif, donc l'angle $\\widehat{BAC}$ est **aigu** ($< 90°$). (Si nul → angle droit ; si négatif → angle obtus.)`
        })
      ];
      return pick(variantes)();
    }
  },

  or_orthogonal: (d) => {
    if (d === 1) {
      return {
        enonce: `À quelle condition deux vecteurs $\\vec{u}$ et $\\vec{v}$ sont-ils orthogonaux ?`,
        corrige: `$\\vec{u}$ et $\\vec{v}$ sont **orthogonaux** si et seulement si $\\vec{u} \\cdot \\vec{v} = 0$. (Le produit scalaire est nul.)`
      };
    } else if (d === 2) {
      const variantes = [
        () => {
          // Cas orthogonal : (1, 2, -1) et (1, 0, 1) → 1 + 0 - 1 = 0
          const cas = pick([
            { u: [1, 2, -1], v: [1, 0, 1], ps: 0 },
            { u: [2, 1, 3], v: [1, -2, 0], ps: 0 },
            { u: [1, 1, 1], v: [1, -2, 1], ps: 0 }
          ]);
          const p1 = cas.u[0]*cas.v[0];
          const p2 = cas.u[1]*cas.v[1];
          const p3 = cas.u[2]*cas.v[2];
          return {
            enonce: `Les vecteurs $\\vec{u}(${cas.u.join('\\,;\\,')})$ et $\\vec{v}(${cas.v.join('\\,;\\,')})$ sont-ils orthogonaux ?`,
            corrige: `$\\vec{u} \\cdot \\vec{v} = (${cas.u[0]}) \\times (${cas.v[0]}) + (${cas.u[1]}) \\times (${cas.v[1]}) + (${cas.u[2]}) \\times (${cas.v[2]}) = ${p1} ${signe(p2)} ${signe(p3)} = 0$. Le produit scalaire est nul, donc $\\vec{u}$ et $\\vec{v}$ sont **orthogonaux**.`
          };
        },
        () => {
          // Cas NON orthogonal
          return {
            enonce: `Les vecteurs $\\vec{u}(1\\,;\\,2\\,;\\,3)$ et $\\vec{v}(2\\,;\\,1\\,;\\,1)$ sont-ils orthogonaux ?`,
            corrige: `$\\vec{u} \\cdot \\vec{v} = 1 \\times 2 + 2 \\times 1 + 3 \\times 1 = 2 + 2 + 3 = 7 \\neq 0$. Les vecteurs ne sont **pas orthogonaux**.`
          };
        }
      ];
      return pick(variantes)();
    } else {
      // Difficile : déterminer un paramètre pour avoir orthogonalité
      return {
        enonce: `Soient $\\vec{u}(2\\,;\\,a\\,;\\,1)$ et $\\vec{v}(1\\,;\\,-1\\,;\\,3)$. Déterminer la valeur de $a$ pour que $\\vec{u}$ et $\\vec{v}$ soient orthogonaux.`,
        corrige: `On veut $\\vec{u} \\cdot \\vec{v} = 0$, soit $2 \\times 1 + a \\times (-1) + 1 \\times 3 = 0$. Donc $2 - a + 3 = 0$, soit $a = 5$.`
      };
    }
  },

  or_normal: (d) => {
    if (d === 1) {
      return {
        enonce: `Si un plan $P$ a pour équation cartésienne $ax + by + cz + d = 0$, quel est un vecteur normal à ce plan ?`,
        corrige: `Le vecteur $\\vec{n}(a\\,;\\,b\\,;\\,c)$ est un **vecteur normal** au plan $P$ (il est perpendiculaire à tout vecteur du plan).`
      };
    } else if (d === 2) {
      const variantes = [
        () => {
          const a = randNonZero(-3, 3), b = randNonZero(-3, 3), c = randNonZero(-3, 3);
          const d = rand(-5, 5);
          const aTerme = a < 0 ? `-${-a}` : `${a}`;
          return {
            enonce: `Donner un vecteur normal au plan d'équation $${aTerme}x ${signe(b)}y ${signe(c)}z ${signe(d)} = 0$.`,
            corrige: `Le vecteur normal est $\\vec{n}(${a}\\,;\\,${b}\\,;\\,${c})$ (coefficients de $x$, $y$, $z$).`
          };
        },
        () => {
          // Trouver un vecteur normal à un plan donné par 3 points (ou 2 vecteurs)
          return {
            enonce: `Un plan $P$ contient les vecteurs $\\vec{u}(1\\,;\\,0\\,;\\,1)$ et $\\vec{v}(0\\,;\\,1\\,;\\,1)$. Vérifier que $\\vec{n}(1\\,;\\,1\\,;\\,-1)$ est un vecteur normal à $P$.`,
            corrige: `Un vecteur est normal à $P$ s'il est orthogonal à $\\vec{u}$ et $\\vec{v}$. $\\vec{n} \\cdot \\vec{u} = 1 \\times 1 + 1 \\times 0 + (-1) \\times 1 = 0$ ✓. $\\vec{n} \\cdot \\vec{v} = 1 \\times 0 + 1 \\times 1 + (-1) \\times 1 = 0$ ✓. Donc $\\vec{n}$ est bien **normal au plan**.`
          };
        }
      ];
      return pick(variantes)();
    } else {
      return {
        enonce: `Déterminer une équation cartésienne du plan passant par $A(1\\,;\\,2\\,;\\,-1)$ et orthogonal à la droite $d$ passant par $B(0\\,;\\,1\\,;\\,2)$ et de vecteur directeur $\\vec{u}(2\\,;\\,1\\,;\\,-3)$.`,
        corrige: `Le plan cherché est orthogonal à $d$, donc admet $\\vec{u}(2\\,;\\,1\\,;\\,-3)$ comme **vecteur normal**. Son équation est de la forme $2x + y - 3z + d = 0$. Comme $A$ appartient au plan : $2 \\times 1 + 2 - 3 \\times (-1) + d = 0$, soit $2 + 2 + 3 + d = 0$, d'où $d = -7$. Équation : $2x + y - 3z - 7 = 0$.`
      };
    }
  },

  or_distance: (d) => {
    if (d === 1) {
      return {
        enonce: `Donner la formule de la distance d'un point $M(x_0\\,;\\,y_0\\,;\\,z_0)$ à un plan d'équation $ax + by + cz + d = 0$.`,
        corrige: `$\\text{dist}(M, P) = \\dfrac{|ax_0 + by_0 + cz_0 + d|}{\\sqrt{a^2 + b^2 + c^2}}$.`
      };
    } else if (d === 2) {
      // Cas calculable : a²+b²+c² entier "rond"
      const variantes = [
        () => {
          // P : 2x + y + 2z - 5 = 0 ; M(1, 1, 1)
          // dist = |2+1+2-5| / sqrt(4+1+4) = 0/3 = 0
          // Choisir un cas non trivial : P : x + 2y + 2z - 6 = 0, M(0, 0, 0)
          // dist = |-6| / sqrt(1+4+4) = 6/3 = 2
          return {
            enonce: `Calculer la distance du point $M(0\\,;\\,0\\,;\\,0)$ au plan d'équation $x + 2y + 2z - 6 = 0$.`,
            corrige: `Formule : $\\text{dist}(M, P) = \\dfrac{|1 \\times 0 + 2 \\times 0 + 2 \\times 0 - 6|}{\\sqrt{1^2 + 2^2 + 2^2}} = \\dfrac{|-6|}{\\sqrt{9}} = \\dfrac{6}{3} = 2$.`
          };
        },
        () => {
          // P : 3x - 4z + 5 = 0 ; M(1, 0, 0) ; dist = |3+5|/5 = 8/5
          return {
            enonce: `Calculer la distance du point $A(1\\,;\\,2\\,;\\,0)$ au plan d'équation $3x + 4y - 5 = 0$ (plan vertical, $\\vec{n}(3\\,;\\,4\\,;\\,0)$).`,
            corrige: `$\\text{dist}(A, P) = \\dfrac{|3 \\times 1 + 4 \\times 2 + 0 \\times 0 - 5|}{\\sqrt{3^2 + 4^2 + 0^2}} = \\dfrac{|3 + 8 - 5|}{\\sqrt{25}} = \\dfrac{6}{5}$.`
          };
        }
      ];
      return pick(variantes)();
    } else {
      const variantes = [
        () => ({
          enonce: `Soit le plan $P$ d'équation $x + 2y - 2z + 3 = 0$. Calculer la distance de l'origine $O$ à $P$, puis trouver le projeté orthogonal $H$ de $O$ sur $P$.`,
          corrige: `**Distance** : $\\text{dist}(O, P) = \\dfrac{|0 + 0 - 0 + 3|}{\\sqrt{1 + 4 + 4}} = \\dfrac{3}{\\sqrt{9}} = \\dfrac{3}{3} = 1$. **Projeté orthogonal** : $H$ se trouve sur la droite passant par $O$ et de vecteur directeur $\\vec{n}(1\\,;\\,2\\,;\\,-2)$ (vecteur normal à $P$). Représentation paramétrique : $H(t\\,;\\,2t\\,;\\,-2t)$. $H$ appartient à $P$ : $t + 2(2t) - 2(-2t) + 3 = 0$, soit $9t + 3 = 0$, donc $t = -\\dfrac{1}{3}$. Donc $H\\left(-\\dfrac{1}{3}\\,;\\,-\\dfrac{2}{3}\\,;\\,\\dfrac{2}{3}\\right)$.`
        }),
        () => ({
          enonce: `Soit le plan $P$ d'équation $2x - y + 2z - 6 = 0$ et le point $A(3\\,;\\,1\\,;\\,2)$. Calculer la distance de $A$ à $P$ et déterminer le projeté orthogonal $H$ de $A$ sur $P$.`,
          corrige: `**Distance** : $\\text{dist}(A, P) = \\dfrac{|2(3) - 1 + 2(2) - 6|}{\\sqrt{4 + 1 + 4}} = \\dfrac{|6 - 1 + 4 - 6|}{3} = \\dfrac{3}{3} = 1$. **Projeté** : droite passant par $A$ de vecteur directeur $\\vec{n}(2\\,;\\,-1\\,;\\,2)$ : $H(3 + 2t\\,;\\,1 - t\\,;\\,2 + 2t)$. $H \\in P$ : $2(3+2t) - (1-t) + 2(2+2t) - 6 = 0 \\Rightarrow 6 + 4t - 1 + t + 4 + 4t - 6 = 0 \\Rightarrow 9t + 3 = 0 \\Rightarrow t = -\\dfrac{1}{3}$. Donc $H\\left(\\dfrac{7}{3}\\,;\\,\\dfrac{4}{3}\\,;\\,\\dfrac{4}{3}\\right)$.`
        }),
        () => ({
          enonce: `Soit le plan $P : 2x + y + 2z = 9$ et la sphère $S$ de centre $\\Omega(1\\,;\\,1\\,;\\,1)$ et de rayon $r = 2$. Le plan $P$ et la sphère $S$ sont-ils sécants ?`,
          corrige: `On calcule la distance de $\\Omega$ à $P$ : $\\text{dist}(\\Omega, P) = \\dfrac{|2(1) + 1 + 2(1) - 9|}{\\sqrt{4 + 1 + 4}} = \\dfrac{|5 - 9|}{3} = \\dfrac{4}{3}$. Comme $\\dfrac{4}{3} < 2 = r$, le plan **coupe** la sphère (intersection = cercle).`
        })
      ];
      return pick(variantes)();
    }
  },

});
