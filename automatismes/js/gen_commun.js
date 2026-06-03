/* LaboMath — Générateurs communs à tous les profils
   18 générateurs, profils : seconde, 1re STMG, 1re STI2D, terminale spé
   Fichier généré automatiquement par refactor.py.
   Étend window.LM_GEN (l'objet global agrégeant tous les générateurs). */

Object.assign(window.LM_GEN ??= {}, {

  py_calcul: (d) => {
    if (d === 1) {
      const variantes = [
        () => {
          const a = rand(2, 9); const b = rand(2, 9);
          return {
            enonce: `Que va afficher ce programme Python ?`,
            code: `print(${a} + ${b})`,
            corrige: `Le programme affiche : <code>${a + b}</code>.`
          };
        },
        () => {
          const a = rand(2, 9); const b = rand(2, 9);
          return {
            enonce: `Que va afficher ce programme Python ?`,
            code: `print(${a} * ${b})`,
            corrige: `Le programme affiche : <code>${a * b}</code>.`
          };
        },
        () => {
          const a = rand(2, 5);
          const n = rand(2, 4);
          return {
            enonce: `Que va afficher ce programme Python ?`,
            code: `print(${a}**${n})`,
            corrige: `<code>${a}**${n}</code> calcule $${a}^${n}$. Le programme affiche : <code>${Math.pow(a, n)}</code>.`
          };
        }
      ];
      return pick(variantes)();
    } else if (d === 2) {
      const variantes = [
        () => {
          const a = rand(10, 30); const b = rand(2, 7);
          return {
            enonce: `Que va afficher ce programme Python ? Rappel : <code>//</code> est la division entière.`,
            code: `print(${a} // ${b})`,
            corrige: `<code>${a} // ${b}</code> donne le quotient de la division euclidienne de ${a} par ${b}, soit <code>${Math.floor(a/b)}</code>.`
          };
        },
        () => {
          const a = rand(10, 30); const b = rand(2, 7);
          return {
            enonce: `Que va afficher ce programme Python ? Rappel : <code>%</code> donne le reste de la division.`,
            code: `print(${a} % ${b})`,
            corrige: `<code>${a} % ${b}</code> donne le reste de la division euclidienne de ${a} par ${b}, soit <code>${a % b}</code>.`
          };
        },
        () => {
          const a = rand(2, 6); const b = rand(2, 6); const c = rand(2, 6);
          return {
            enonce: `Que va afficher ce programme Python ?`,
            code: `print(${a} + ${b} * ${c})`,
            corrige: `Python respecte les priorités : multiplication avant addition. <code>${b} * ${c} = ${b*c}</code>, puis <code>${a} + ${b*c} = ${a + b*c}</code>. Le programme affiche : <code>${a + b*c}</code>.`
          };
        }
      ];
      return pick(variantes)();
    } else {
      const variantes = [
        () => {
          const a = rand(2, 5); const b = rand(2, 5); const c = rand(2, 5);
          return {
            enonce: `Que va afficher ce programme Python ?`,
            code: `print((${a} + ${b}) ** 2 - ${c})`,
            corrige: `Calcul pas à pas : <code>(${a} + ${b}) = ${a+b}</code>, puis <code>${a+b}**2 = ${(a+b)*(a+b)}</code>, puis <code>${(a+b)*(a+b)} - ${c} = ${(a+b)*(a+b) - c}</code>. Le programme affiche : <code>${(a+b)*(a+b) - c}</code>.`
          };
        },
        () => {
          const a = rand(20, 50); const b = rand(2, 6);
          return {
            enonce: `Que va afficher ce programme Python ?`,
            code: `print(${a} // ${b} + ${a} % ${b})`,
            corrige: `<code>${a} // ${b} = ${Math.floor(a/b)}</code> (quotient) et <code>${a} % ${b} = ${a % b}</code> (reste). Somme : <code>${Math.floor(a/b) + a % b}</code>.`
          };
        },
        () => {
          const a = rand(2, 5); const b = rand(2, 5);
          return {
            enonce: `Que va afficher ce programme Python ?`,
            code: `print(${a}**${b} - ${a}*${b})`,
            corrige: `<code>${a}**${b} = ${Math.pow(a, b)}</code> (puissance) et <code>${a}*${b} = ${a*b}</code> (produit). Différence : <code>${Math.pow(a,b) - a*b}</code>.`
          };
        }
      ];
      return pick(variantes)();
    }
  },

  py_var: (d) => {
    if (d === 1) {
      const variantes = [
        () => {
          const a = rand(2, 10);
          return {
            enonce: `Que va afficher ce programme Python ?`,
            code: `x = ${a}\nprint(x)`,
            corrige: `La variable <code>x</code> reçoit la valeur ${a}, puis <code>print(x)</code> affiche : <code>${a}</code>.`
          };
        },
        () => {
          const a = rand(2, 10); const b = rand(2, 10);
          return {
            enonce: `Que va afficher ce programme Python ?`,
            code: `x = ${a}\ny = ${b}\nprint(x + y)`,
            corrige: `<code>x = ${a}</code> et <code>y = ${b}</code>. Donc <code>x + y = ${a + b}</code>. Le programme affiche : <code>${a + b}</code>.`
          };
        }
      ];
      return pick(variantes)();
    } else if (d === 2) {
      const variantes = [
        () => {
          const a = rand(2, 8);
          return {
            enonce: `Que va afficher ce programme Python ?`,
            code: `x = ${a}\nx = x + 1\nx = x * 2\nprint(x)`,
            corrige: `Étape par étape : <code>x = ${a}</code>, puis <code>x = ${a} + 1 = ${a+1}</code>, puis <code>x = ${a+1} * 2 = ${(a+1)*2}</code>. Affichage : <code>${(a+1)*2}</code>.`
          };
        },
        () => {
          const a = rand(3, 9);
          return {
            enonce: `Que va afficher ce programme Python ?`,
            code: `n = ${a}\nn = n ** 2\nprint(n)`,
            corrige: `<code>n = ${a}</code>, puis <code>n = n**2 = ${a*a}</code>. Affichage : <code>${a*a}</code>.`
          };
        },
        () => {
          const a = rand(5, 15);
          return {
            enonce: `Que va afficher ce programme Python ?`,
            code: `x = ${a}\ny = x - 3\nx = y + 2\nprint(x, y)`,
            corrige: `<code>x = ${a}</code>, <code>y = ${a} - 3 = ${a-3}</code>, <code>x = ${a-3} + 2 = ${a-1}</code>. Affichage : <code>${a-1} ${a-3}</code>.`
          };
        }
      ];
      return pick(variantes)();
    } else {
      const variantes = [
        () => {
          const a = rand(2, 8); const b = rand(2, 8);
          return {
            enonce: `Que va afficher ce programme Python ?`,
            code: `a = ${a}\nb = ${b}\na = a + b\nb = a - b\na = a - b\nprint(a, b)`,
            corrige: `C'est un échange de variables. Initialement <code>a = ${a}</code>, <code>b = ${b}</code>. Après <code>a = a+b</code> : <code>a = ${a+b}</code>. Après <code>b = a-b</code> : <code>b = ${a+b - b} = ${a}</code>. Après <code>a = a-b</code> : <code>a = ${a+b - a} = ${b}</code>. Affichage : <code>${b} ${a}</code>.`
          };
        },
        () => {
          const a = rand(3, 7);
          return {
            enonce: `Que va afficher ce programme Python ?`,
            code: `x = ${a}\ny = 2 * x + 1\nz = x * y\nprint(z)`,
            corrige: `<code>x = ${a}</code>, <code>y = 2*${a} + 1 = ${2*a + 1}</code>, <code>z = ${a} * ${2*a + 1} = ${a*(2*a+1)}</code>. Affichage : <code>${a*(2*a+1)}</code>.`
          };
        }
      ];
      return pick(variantes)();
    }
  },

  py_fonction: (d) => {
    if (d === 1) {
      const variantes = [
        () => {
          const a = randNonZero(2, 5); const b = randNonZero(-5, 5);
          const x = rand(2, 5);
          const r = a*x + b;
          const sB = b >= 0 ? `+ ${b}` : `- ${-b}`;
          return {
            enonce: `Que va afficher ce programme Python ?`,
            code: `def f(x):\n    return ${a}*x ${sB}\n\nprint(f(${x}))`,
            corrige: `On appelle <code>f(${x})</code> qui calcule <code>${a}*${x} ${sB} = ${a*x} ${sB} = ${r}</code>. Affichage : <code>${r}</code>.`
          };
        },
        () => {
          const a = rand(2, 5);
          const x = rand(2, 5);
          return {
            enonce: `Que va afficher ce programme Python ?`,
            code: `def carre(x):\n    return x * x\n\nprint(carre(${x}))`,
            corrige: `<code>carre(${x}) = ${x} * ${x} = ${x*x}</code>. Affichage : <code>${x*x}</code>.`
          };
        }
      ];
      return pick(variantes)();
    } else if (d === 2) {
      const variantes = [
        () => {
          const a = rand(2, 7); const b = rand(2, 7);
          return {
            enonce: `Que va afficher ce programme Python ?`,
            code: `def somme(a, b):\n    return a + b\n\nprint(somme(${a}, ${b}))`,
            corrige: `<code>somme(${a}, ${b}) = ${a} + ${b} = ${a+b}</code>. Affichage : <code>${a+b}</code>.`
          };
        },
        () => {
          const x = rand(2, 5); const y = rand(2, 5);
          return {
            enonce: `Que va afficher ce programme Python ?`,
            code: `def calcul(x, y):\n    return x**2 + y**2\n\nprint(calcul(${x}, ${y}))`,
            corrige: `<code>calcul(${x}, ${y}) = ${x}² + ${y}² = ${x*x} + ${y*y} = ${x*x + y*y}</code>. Affichage : <code>${x*x + y*y}</code>.`
          };
        },
        () => {
          const a = rand(2, 5);
          const x = rand(2, 4);
          return {
            enonce: `Que va afficher ce programme Python ?`,
            code: `def f(x):\n    return ${a}*x + 1\n\nprint(f(f(${x})))`,
            corrige: `Calcul interne d'abord : <code>f(${x}) = ${a}*${x} + 1 = ${a*x + 1}</code>. Puis <code>f(${a*x+1}) = ${a}*${a*x+1} + 1 = ${a*(a*x+1) + 1}</code>. Affichage : <code>${a*(a*x+1) + 1}</code>.`
          };
        },
        () => {
          // Exercice à trous : compléter une fonction affine f(x) = ax + b
          const a = pick([2, 3, 5]);
          const b = pick([1, 2, 3, 4]);
          const x = rand(2, 5);
          const y = a * x + b;
          return {
            enonce: `Compléter le programme Python ci-dessous pour qu'il définisse la fonction $f(x) = ${a}x + ${b}$ et affiche $f(${x})$. Indiquer dans l'ordre la valeur (ou l'expression) à mettre dans chaque trou.`,
            code: `def f(___):\n    return ___\n\nprint(f(___))`,
            corrige: `1<sup>er</sup> trou : <code>x</code> (paramètre de la fonction). 2<sup>e</sup> trou : <code>${a}*x + ${b}</code> (expression de $f(x)$). 3<sup>e</sup> trou : <code>${x}</code> (valeur à laquelle on évalue $f$). Le programme affichera $f(${x}) = ${a} \\times ${x} + ${b} = ${y}$.`
          };
        }
      ];
      return pick(variantes)();
    } else {
      const variantes = [
        () => {
          const a = rand(3, 6);
          const b = rand(2, 5);
          const r = a*a*a + b;
          return {
            enonce: `Que va afficher ce programme Python ?`,
            code: `def f(x):\n    y = x**3\n    y = y + ${b}\n    return y\n\nprint(f(${a}))`,
            corrige: `<code>f(${a})</code> : <code>y = ${a}**3 = ${a*a*a}</code>, puis <code>y = ${a*a*a} + ${b} = ${r}</code>. Affichage : <code>${r}</code>.`
          };
        },
        () => {
          const a = rand(2, 5);
          return {
            enonce: `Que va afficher ce programme Python ?`,
            code: `def double(x):\n    return 2 * x\n\ndef triple(x):\n    return 3 * x\n\nprint(double(triple(${a})))`,
            corrige: `<code>triple(${a}) = ${3*a}</code>, puis <code>double(${3*a}) = ${6*a}</code>. Affichage : <code>${6*a}</code>.`
          };
        }
      ];
      return pick(variantes)();
    }
  },

  py_if: (d) => {
    if (d === 1) {
      const variantes = [
        () => {
          const x = rand(1, 9);
          return {
            enonce: `Que va afficher ce programme Python ?`,
            code: `x = ${x}\nif x > 5:\n    print("grand")\nelse:\n    print("petit")`,
            corrige: `<code>x = ${x}</code>. Est-ce que ${x} > 5 ? ${x > 5 ? 'Oui' : 'Non'}. Le programme affiche : <code>${x > 5 ? 'grand' : 'petit'}</code>.`
          };
        },
        () => {
          const x = rand(-5, 5);
          return {
            enonce: `Que va afficher ce programme Python ?`,
            code: `x = ${x}\nif x >= 0:\n    print("positif")\nelse:\n    print("négatif")`,
            corrige: `<code>x = ${x}</code>. Est-ce que ${x} ≥ 0 ? ${x >= 0 ? 'Oui' : 'Non'}. Affichage : <code>${x >= 0 ? 'positif' : 'négatif'}</code>.`
          };
        }
      ];
      return pick(variantes)();
    } else if (d === 2) {
      const variantes = [
        () => {
          const x = rand(0, 20);
          let resultat;
          if (x < 5) resultat = 'petit';
          else if (x < 15) resultat = 'moyen';
          else resultat = 'grand';
          return {
            enonce: `Que va afficher ce programme Python ?`,
            code: `x = ${x}\nif x < 5:\n    print("petit")\nelif x < 15:\n    print("moyen")\nelse:\n    print("grand")`,
            corrige: `<code>x = ${x}</code>. Test ${x} < 5 ? ${x < 5 ? 'Oui' : 'Non'}. ${x < 5 ? `Affichage : <code>petit</code>.` : (x < 15 ? `Test ${x} < 15 ? Oui. Affichage : <code>moyen</code>.` : `Tests faux. Affichage : <code>grand</code>.`)}`
          };
        },
        () => {
          const a = rand(-5, 5); const b = rand(-5, 5);
          const cond = (a > 0 && b > 0);
          return {
            enonce: `Que va afficher ce programme Python ?`,
            code: `a = ${a}\nb = ${b}\nif a > 0 and b > 0:\n    print("deux positifs")\nelse:\n    print("pas deux positifs")`,
            corrige: `<code>a = ${a}</code>, <code>b = ${b}</code>. Condition <code>${a} > 0 and ${b} > 0</code> : ${a>0 ? 'a>0 vrai' : 'a>0 faux'}, ${b>0 ? 'b>0 vrai' : 'b>0 faux'}, donc <code>${cond ? 'True' : 'False'}</code>. Affichage : <code>${cond ? 'deux positifs' : 'pas deux positifs'}</code>.`
          };
        },
        () => {
          // Exercice à trous : afficher "pair" ou "impair"
          return {
            enonce: `Compléter le programme Python ci-dessous pour qu'il affiche <code>"pair"</code> si <code>x</code> est pair et <code>"impair"</code> sinon. Indiquer dans l'ordre la valeur (ou l'expression) à mettre dans chaque trou.`,
            code: `x = 17\nif x % ___ == ___:\n    print(___)\nelse:\n    print("impair")`,
            corrige: `1<sup>er</sup> trou : <code>2</code> (on prend le reste par 2). 2<sup>e</sup> trou : <code>0</code> (un nombre est pair quand son reste par 2 est nul). 3<sup>e</sup> trou : <code>"pair"</code> (avec les guillemets, c'est une chaîne de caractères). Avec <code>x = 17</code>, le reste vaut $1$, donc le programme affiche <code>impair</code>.`
          };
        }
      ];
      return pick(variantes)();
    } else {
      const variantes = [
        () => {
          const x = randNonZero(-10, 10);
          let r;
          if (x > 0) r = x;
          else r = -x;
          return {
            enonce: `Que va afficher ce programme Python ?`,
            code: `def abs(x):\n    if x >= 0:\n        return x\n    else:\n        return -x\n\nprint(abs(${x}))`,
            corrige: `<code>abs(${x})</code> : ${x} ≥ 0 ? ${x >= 0 ? 'Oui, retourne ' + x : 'Non, retourne -(' + x + ') = ' + (-x)}. Affichage : <code>${r}</code>.`
          };
        },
        () => {
          const x = randNonZero(-10, 10);
          let r;
          if (x > 0) r = 1;
          else if (x < 0) r = -1;
          else r = 0;
          return {
            enonce: `Que va afficher ce programme Python ?`,
            code: `def signe(x):\n    if x > 0:\n        return 1\n    elif x < 0:\n        return -1\n    else:\n        return 0\n\nprint(signe(${x}))`,
            corrige: `<code>signe(${x})</code> : ${x} > 0 ? ${x > 0 ? 'Oui' : 'Non'}. ${x > 0 ? `Retourne 1.` : (x < 0 ? `${x} < 0 ? Oui. Retourne -1.` : `Sinon retourne 0.`)} Affichage : <code>${r}</code>.`
          };
        }
      ];
      return pick(variantes)();
    }
  },

  py_for: (d) => {
    if (d === 1) {
      const variantes = [
        () => {
          const n = rand(3, 6);
          const valeurs = Array.from({length: n}, (_, i) => i).join(', ');
          return {
            enonce: `Que va afficher ce programme Python ?`,
            code: `for i in range(${n}):\n    print(i)`,
            corrige: `<code>range(${n})</code> parcourt les entiers <code>0, 1, ..., ${n-1}</code>. Le programme affiche, ligne par ligne : <code>${valeurs.replace(/, /g, '<br>')}</code>.`
          };
        },
        () => {
          const n = rand(3, 6);
          return {
            enonce: `Combien de fois ce programme va-t-il afficher "bonjour" ?`,
            code: `for i in range(${n}):\n    print("bonjour")`,
            corrige: `La boucle s'exécute <code>${n}</code> fois (pour i = 0, 1, ..., ${n-1}). "bonjour" est affiché ${n} fois.`
          };
        }
      ];
      return pick(variantes)();
    } else if (d === 2) {
      const variantes = [
        () => {
          const n = rand(3, 6);
          let somme = 0;
          for (let i = 0; i < n; i++) somme += i;
          return {
            enonce: `Que va afficher ce programme Python ?`,
            code: `s = 0\nfor i in range(${n}):\n    s = s + i\nprint(s)`,
            corrige: `La variable <code>s</code> accumule les valeurs de <code>i</code> : 0+1+...+${n-1} = ${somme}. Affichage : <code>${somme}</code>.`
          };
        },
        () => {
          const n = rand(3, 5);
          let prod = 1;
          for (let i = 1; i <= n; i++) prod *= i;
          return {
            enonce: `Que va afficher ce programme Python ?`,
            code: `p = 1\nfor i in range(1, ${n+1}):\n    p = p * i\nprint(p)`,
            corrige: `Calcule la factorielle de ${n} : 1×2×...×${n} = ${prod}. Affichage : <code>${prod}</code>.`
          };
        },
        () => {
          // Exercice à trous : afficher les entiers de 1 à n
          const n = pick([5, 8, 10]);
          return {
            enonce: `Compléter le programme Python ci-dessous pour qu'il affiche les entiers de $1$ à $${n}$ (inclus), un par ligne. Indiquer dans l'ordre la valeur à mettre dans chaque trou.`,
            code: `for i in range(___, ___):\n    print(___)`,
            corrige: `1<sup>er</sup> trou : <code>1</code> (on commence à 1). 2<sup>e</sup> trou : <code>${n + 1}</code> (range exclut la borne supérieure, donc on met $${n + 1}$ pour aller jusqu'à $${n}$ inclus). 3<sup>e</sup> trou : <code>i</code> (on affiche la variable de boucle).`
          };
        }
      ];
      return pick(variantes)();
    } else {
      const variantes = [
        () => {
          const n = rand(3, 5);
          let s = 0;
          for (let i = 0; i < n; i++) s += i*i;
          return {
            enonce: `Que va afficher ce programme Python ?`,
            code: `s = 0\nfor i in range(${n}):\n    s = s + i**2\nprint(s)`,
            corrige: `On accumule les carrés : 0² + 1² + ... + ${n-1}² = ${Array.from({length:n},(_,i)=>i*i).join(' + ')} = ${s}. Affichage : <code>${s}</code>.`
          };
        },
        () => {
          const n = rand(2, 4); const m = rand(2, 4);
          return {
            enonce: `Combien de fois "*" sera-t-il affiché par ce programme ?`,
            code: `for i in range(${n}):\n    for j in range(${m}):\n        print("*")`,
            corrige: `Pour chacune des ${n} valeurs de i, la boucle interne s'exécute ${m} fois. Total : ${n} × ${m} = <code>${n*m}</code> affichages.`
          };
        },
        () => {
          const n = rand(3, 6);
          let cpt = 0;
          for (let i = 0; i < n; i++) if (i % 2 === 0) cpt++;
          return {
            enonce: `Que va afficher ce programme Python ?`,
            code: `c = 0\nfor i in range(${n}):\n    if i % 2 == 0:\n        c = c + 1\nprint(c)`,
            corrige: `On compte les valeurs paires de i entre 0 et ${n-1}. Ce sont : ${Array.from({length:n},(_,i)=>i).filter(i=>i%2===0).join(', ')}. Soit ${cpt} valeurs. Affichage : <code>${cpt}</code>.`
          };
        }
      ];
      return pick(variantes)();
    }
  },

  py_while: (d) => {
    if (d === 1) {
      const variantes = [
        () => {
          const fin = rand(3, 6);
          return {
            enonce: `Combien de fois ce programme va-t-il afficher la valeur de x ?`,
            code: `x = 0\nwhile x < ${fin}:\n    print(x)\n    x = x + 1`,
            corrige: `<code>x</code> prend les valeurs 0, 1, 2, ..., ${fin-1} (tant que x < ${fin}). Soit ${fin} affichages.`
          };
        },
        () => {
          const debut = rand(5, 10);
          return {
            enonce: `Que va afficher ce programme Python à la fin ?`,
            code: `x = ${debut}\nwhile x > 0:\n    x = x - 1\nprint(x)`,
            corrige: `On décrémente <code>x</code> tant que <code>x > 0</code>. La boucle s'arrête quand <code>x = 0</code>. Affichage final : <code>0</code>.`
          };
        }
      ];
      return pick(variantes)();
    } else if (d === 2) {
      const variantes = [
        () => {
          const fin = pick([20, 50, 100]);
          let x = 1, cpt = 0;
          while (x < fin) { x *= 2; cpt++; }
          return {
            enonce: `Que va afficher ce programme Python ?`,
            code: `x = 1\nn = 0\nwhile x < ${fin}:\n    x = x * 2\n    n = n + 1\nprint(n)`,
            corrige: `On double <code>x</code> tant que <code>x < ${fin}</code>. Valeurs successives : ${Array.from({length:cpt+1},(_,i)=>Math.pow(2,i)).join(', ')}. Il faut ${cpt} doublements pour dépasser ${fin}. Affichage : <code>${cpt}</code>.`
          };
        },
        () => {
          const debut = pick([16, 32, 64]);
          let x = debut, cpt = 0;
          while (x > 1) { x = Math.floor(x / 2); cpt++; }
          return {
            enonce: `Que va afficher ce programme Python ?`,
            code: `x = ${debut}\nn = 0\nwhile x > 1:\n    x = x // 2\n    n = n + 1\nprint(n)`,
            corrige: `On divise <code>x</code> par 2 (division entière) tant que <code>x > 1</code>. Valeurs successives : ${[debut].concat(Array.from({length:cpt},(_,i)=>Math.floor(debut/Math.pow(2,i+1)))).join(', ')}. Il faut ${cpt} divisions pour atteindre 1. Affichage : <code>${cpt}</code>.`
          };
        },
        () => {
          // Exercice à trous : compter avant qu'un compteur atteigne un seuil
          const seuil = pick([10, 20, 50]);
          return {
            enonce: `Compléter le programme Python ci-dessous pour qu'il affiche le plus petit entier $n$ tel que $1 + 2 + \\ldots + n \\geq ${seuil}$. Indiquer dans l'ordre la valeur (ou l'expression) à mettre dans chaque trou.`,
            code: `s = ___\nn = ___\nwhile s < ${seuil}:\n    n = n + 1\n    s = s + ___\nprint(n)`,
            corrige: `1<sup>er</sup> trou : <code>0</code> (la somme commence à 0). 2<sup>e</sup> trou : <code>0</code> (le compteur commence à 0 — il sera incrémenté en début de boucle). 3<sup>e</sup> trou : <code>n</code> (à chaque tour on ajoute le nouvel entier $n$ à la somme).`
          };
        }
      ];
      return pick(variantes)();
    } else {
      const variantes = [
        () => {
          const cible = pick([10, 20, 50]);
          let s = 0, n = 0;
          while (s < cible) { n++; s += n; }
          return {
            enonce: `Que va afficher ce programme Python ?`,
            code: `s = 0\nn = 0\nwhile s < ${cible}:\n    n = n + 1\n    s = s + n\nprint(n)`,
            corrige: `On accumule les entiers 1, 2, 3, ... jusqu'à ce que la somme dépasse ${cible}. Pour n = ${n}, s = 1+2+...+${n} = ${s}. C'est la première fois que s ≥ ${cible}. Affichage : <code>${n}</code>.`
          };
        },
        () => {
          const cible = pick([100, 200, 500]);
          let a = 1, b = 1, cpt = 0;
          while (b < cible) { const tmp = a + b; a = b; b = tmp; cpt++; }
          return {
            enonce: `Que va afficher ce programme Python ?`,
            code: `a = 1\nb = 1\nn = 0\nwhile b < ${cible}:\n    a, b = b, a + b\n    n = n + 1\nprint(n)`,
            corrige: `C'est la suite de Fibonacci : 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ... La boucle s'arrête quand b ≥ ${cible}. Affichage : <code>${cpt}</code>.`
          };
        }
      ];
      return pick(variantes)();
    }
  },

  py_listes: (d) => {
    if (d === 1) {
      // Facile : créer une liste et accéder à un élément
      const variantes = [
        () => {
          const a = rand(2, 9), b = rand(2, 9), c = rand(2, 9), d2 = rand(2, 9);
          const idx = rand(0, 3);
          const liste = [a, b, c, d2];
          return {
            enonce: `Que va afficher ce programme Python ?`,
            code: `L = [${a}, ${b}, ${c}, ${d2}]\nprint(L[${idx}])`,
            corrige: `On accède au $${idx + 1}^{\\text{e}}$ élément de la liste (index ${idx}). Le programme affiche : <code>${liste[idx]}</code>.`
          };
        },
        () => {
          const a = rand(2, 9), b = rand(2, 9), c = rand(2, 9);
          return {
            enonce: `Que va afficher ce programme Python ?`,
            code: `L = [${a}, ${b}, ${c}]\nprint(len(L))`,
            corrige: `<code>len(L)</code> donne le nombre d'éléments de la liste, soit $3$. Le programme affiche : <code>3</code>.`
          };
        }
      ];
      return pick(variantes)();
    } else if (d === 2) {
      // Moyen : modifier un élément, append
      const variantes = [
        () => {
          const a = rand(2, 9), b = rand(2, 9), c = rand(2, 9);
          const nouveau = rand(10, 20);
          const liste = [a, b, c];
          liste[1] = nouveau;
          return {
            enonce: `Que va afficher ce programme Python ?`,
            code: `L = [${a}, ${b}, ${c}]\nL[1] = ${nouveau}\nprint(L)`,
            corrige: `On remplace l'élément d'index 1 (initialement $${b}$) par $${nouveau}$. La nouvelle liste est : <code>[${liste.join(', ')}]</code>.`
          };
        },
        () => {
          const a = rand(2, 9), b = rand(2, 9), c = rand(2, 9);
          const nouveau = rand(10, 20);
          return {
            enonce: `Que va afficher ce programme Python ?`,
            code: `L = [${a}, ${b}, ${c}]\nL.append(${nouveau})\nprint(L)`,
            corrige: `<code>.append(${nouveau})</code> ajoute $${nouveau}$ à la fin de la liste. Le programme affiche : <code>[${a}, ${b}, ${c}, ${nouveau}]</code>.`
          };
        }
      ];
      return pick(variantes)();
    } else {
      // Difficile : combinaisons (somme de deux éléments, dernier élément avec -1)
      const variantes = [
        () => {
          const a = rand(2, 9), b = rand(2, 9), c = rand(2, 9), d2 = rand(2, 9);
          const i1 = rand(0, 3), i2 = rand(0, 3);
          const liste = [a, b, c, d2];
          const somme = liste[i1] + liste[i2];
          return {
            enonce: `Que va afficher ce programme Python ?`,
            code: `L = [${a}, ${b}, ${c}, ${d2}]\nprint(L[${i1}] + L[${i2}])`,
            corrige: `$L[${i1}] = ${liste[i1]}$ et $L[${i2}] = ${liste[i2]}$. Le programme calcule $${liste[i1]} + ${liste[i2]} = ${somme}$ et affiche : <code>${somme}</code>.`
          };
        },
        () => {
          const a = rand(2, 9), b = rand(2, 9), c = rand(2, 9), d2 = rand(2, 9);
          return {
            enonce: `Que va afficher ce programme Python ?`,
            code: `L = [${a}, ${b}, ${c}, ${d2}]\nprint(L[-1])`,
            corrige: `<code>L[-1]</code> donne le dernier élément de la liste : $${d2}$. Le programme affiche : <code>${d2}</code>.`
          };
        }
      ];
      return pick(variantes)();
    }
  },

  py_listes_iter: (d) => {
    if (d === 1) {
      // Facile : afficher tous les éléments
      const a = rand(2, 6), b = rand(2, 6), c = rand(2, 6);
      return {
        enonce: `Que va afficher ce programme Python ?`,
        code: `L = [${a}, ${b}, ${c}]\nfor x in L:\n    print(x)`,
        corrige: `La boucle parcourt chaque élément de <code>L</code> et l'affiche. Le programme affiche :<br><code>${a}<br>${b}<br>${c}</code>.`
      };
    } else if (d === 2) {
      // Moyen : calcul sur chaque élément (carré, double…)
      const variantes = [
        () => {
          const a = rand(2, 6), b = rand(2, 6), c = rand(2, 6);
          return {
            enonce: `Que va afficher ce programme Python ?`,
            code: `L = [${a}, ${b}, ${c}]\nfor x in L:\n    print(2 * x)`,
            corrige: `Pour chaque élément $x$ de la liste, on affiche $2x$. Le programme affiche :<br><code>${2*a}<br>${2*b}<br>${2*c}</code>.`
          };
        },
        () => {
          const a = rand(2, 5), b = rand(2, 5), c = rand(2, 5);
          return {
            enonce: `Que va afficher ce programme Python ?`,
            code: `L = [${a}, ${b}, ${c}]\nfor x in L:\n    print(x ** 2)`,
            corrige: `Pour chaque élément $x$, on affiche son carré $x^2$. Le programme affiche :<br><code>${a*a}<br>${b*b}<br>${c*c}</code>.`
          };
        }
      ];
      return pick(variantes)();
    } else {
      // Difficile : avec condition (afficher seulement les éléments pairs/positifs)
      const variantes = [
        () => {
          const a = rand(1, 10), b = rand(1, 10), c = rand(1, 10), d2 = rand(1, 10);
          const liste = [a, b, c, d2];
          const pairs = liste.filter(x => x % 2 === 0);
          return {
            enonce: `Que va afficher ce programme Python ?`,
            code: `L = [${a}, ${b}, ${c}, ${d2}]\nfor x in L:\n    if x % 2 == 0:\n        print(x)`,
            corrige: `On parcourt la liste et on n'affiche que les nombres pairs (ceux dont le reste par 2 vaut 0). Ici, les pairs sont : ${pairs.length > 0 ? pairs.join(', ') : 'aucun'}.<br>Le programme affiche : <code>${pairs.join('<br>') || '(rien)'}</code>.`
          };
        },
        () => {
          const a = randNonZero(-5, 5), b = randNonZero(-5, 5), c = randNonZero(-5, 5);
          const liste = [a, b, c];
          const positifs = liste.filter(x => x > 0);
          return {
            enonce: `Que va afficher ce programme Python ?`,
            code: `L = [${a}, ${b}, ${c}]\nfor x in L:\n    if x > 0:\n        print(x)`,
            corrige: `On affiche les éléments strictement positifs. Ici : ${positifs.length > 0 ? positifs.join(', ') : 'aucun'}.<br>Le programme affiche : <code>${positifs.join('<br>') || '(rien)'}</code>.`
          };
        }
      ];
      return pick(variantes)();
    }
  },

  py_accumulateur: (d) => {
    if (d === 1) {
      // Facile : somme d'une liste avec un accumulateur explicite
      const variantes = [
        () => {
          const a = rand(2, 6), b = rand(2, 6), c = rand(2, 6);
          const somme = a + b + c;
          return {
            enonce: `Que va afficher ce programme Python ?`,
            code: `L = [${a}, ${b}, ${c}]\ns = 0\nfor x in L:\n    s = s + x\nprint(s)`,
            corrige: `On utilise un accumulateur <code>s</code> initialisé à 0. À chaque tour, on ajoute l'élément courant à <code>s</code>. Final : $s = ${a} + ${b} + ${c} = ${somme}$. Le programme affiche : <code>${somme}</code>.`
          };
        },
        () => {
          const n = rand(3, 6);
          let somme = 0;
          for (let i = 1; i <= n; i++) somme += i;
          return {
            enonce: `Que va afficher ce programme Python ?`,
            code: `s = 0\nfor i in range(1, ${n + 1}):\n    s = s + i\nprint(s)`,
            corrige: `On accumule dans <code>s</code> les entiers de 1 à $${n}$ : $s = 1 + 2 + \\ldots + ${n} = ${somme}$. Le programme affiche : <code>${somme}</code>.`
          };
        }
      ];
      return pick(variantes)();
    } else if (d === 2) {
      // Moyen : produit, somme conditionnelle, ou exercice à trous
      const variantes = [
        () => {
          const a = rand(2, 4), b = rand(2, 4), c = rand(2, 4);
          const produit = a * b * c;
          return {
            enonce: `Que va afficher ce programme Python ?`,
            code: `L = [${a}, ${b}, ${c}]\np = 1\nfor x in L:\n    p = p * x\nprint(p)`,
            corrige: `Accumulateur produit, initialisé à 1. On multiplie successivement : $p = 1 \\times ${a} \\times ${b} \\times ${c} = ${produit}$. Le programme affiche : <code>${produit}</code>.`
          };
        },
        () => {
          const n = rand(4, 6);
          let somme = 0;
          for (let i = 1; i <= n; i++) somme += i*i;
          return {
            enonce: `Que va afficher ce programme Python ?`,
            code: `s = 0\nfor i in range(1, ${n + 1}):\n    s = s + i ** 2\nprint(s)`,
            corrige: `On accumule les carrés des entiers de 1 à $${n}$ : $s = 1 + 4 + 9 + \\ldots = ${somme}$. Le programme affiche : <code>${somme}</code>.`
          };
        },
        () => {
          // Exercice à trous : compléter une somme classique
          const n = pick([10, 20, 50, 100]);
          let somme = 0;
          for (let i = 1; i <= n; i++) somme += i;
          return {
            enonce: `Compléter le programme Python ci-dessous pour qu'il calcule et affiche la somme des entiers de $1$ à $${n}$. Indiquer dans l'ordre la valeur (ou l'expression) à mettre dans chaque trou.`,
            code: `s = ___\nfor i in range(1, ___):\n    s = s + ___\nprint(___)`,
            corrige: `1<sup>er</sup> trou : <code>0</code> (initialisation de l'accumulateur). 2<sup>e</sup> trou : <code>${n + 1}</code> (range va jusqu'à la valeur — 1 incluse). 3<sup>e</sup> trou : <code>i</code> (on ajoute l'entier courant à la somme). 4<sup>e</sup> trou : <code>s</code> (on affiche le résultat). Le programme affichera alors : <code>${somme}</code>.`
          };
        }
      ];
      return pick(variantes)();
    } else {
      // Difficile : moyenne, ou écrire un script complet
      const variantes = [
        () => {
          const a = rand(10, 20), b = rand(10, 20), c = rand(10, 20), d2 = rand(10, 20);
          const moyenne = (a + b + c + d2) / 4;
          const moyAff = Number.isInteger(moyenne) ? `${moyenne}` : moyenne.toFixed(2).replace('.', '{,}');
          return {
            enonce: `Que va afficher ce programme Python ?`,
            code: `L = [${a}, ${b}, ${c}, ${d2}]\ns = 0\nfor x in L:\n    s = s + x\nprint(s / len(L))`,
            corrige: `On calcule la somme puis on divise par le nombre d'éléments (4) pour obtenir la moyenne. $s = ${a + b + c + d2}$, moyenne = $\\dfrac{${a + b + c + d2}}{4} = ${moyAff}$. Le programme affiche : <code>${(a + b + c + d2) / 4}</code>.`
          };
        },
        () => {
          return {
            enonce: `Écrire un programme Python qui calcule et affiche la somme des entiers de 1 à 100 en utilisant un accumulateur.`,
            corrige: `<code>s = 0<br>for i in range(1, 101):<br>&nbsp;&nbsp;&nbsp;&nbsp;s = s + i<br>print(s)</code><br>Le programme affiche : <code>5050</code> (somme des entiers de 1 à 100).`
          };
        }
      ];
      return pick(variantes)();
    }
  },

  py_compteur: (d) => {
    if (d === 1) {
      // Facile : compter les éléments d'une liste
      const variantes = [
        () => {
          const a = rand(1, 10), b = rand(1, 10), c = rand(1, 10), d2 = rand(1, 10), e = rand(1, 10);
          const liste = [a, b, c, d2, e];
          return {
            enonce: `Que va afficher ce programme Python ?`,
            code: `L = [${a}, ${b}, ${c}, ${d2}, ${e}]\nn = 0\nfor x in L:\n    n = n + 1\nprint(n)`,
            corrige: `Le compteur <code>n</code> est incrémenté de 1 à chaque tour de boucle. La liste a 5 éléments. Le programme affiche : <code>5</code>.`
          };
        }
      ];
      return pick(variantes)();
    } else if (d === 2) {
      // Moyen : compter les éléments qui vérifient une condition, ou exercice à trous
      const variantes = [
        () => {
          const liste = [rand(1, 10), rand(1, 10), rand(1, 10), rand(1, 10), rand(1, 10), rand(1, 10)];
          const seuil = 5;
          const nb = liste.filter(x => x > seuil).length;
          return {
            enonce: `Que va afficher ce programme Python ?`,
            code: `L = [${liste.join(', ')}]\nn = 0\nfor x in L:\n    if x > ${seuil}:\n        n = n + 1\nprint(n)`,
            corrige: `On compte les éléments strictement supérieurs à $${seuil}$. Dans la liste, ce sont : ${liste.filter(x => x > seuil).join(', ') || 'aucun'}, soit $${nb}$ élément(s). Le programme affiche : <code>${nb}</code>.`
          };
        },
        () => {
          const liste = [rand(1, 20), rand(1, 20), rand(1, 20), rand(1, 20), rand(1, 20)];
          const pairs = liste.filter(x => x % 2 === 0).length;
          return {
            enonce: `Que va afficher ce programme Python ?`,
            code: `L = [${liste.join(', ')}]\nn = 0\nfor x in L:\n    if x % 2 == 0:\n        n = n + 1\nprint(n)`,
            corrige: `On compte les nombres pairs de la liste. Pairs : ${liste.filter(x => x % 2 === 0).join(', ') || 'aucun'}, soit $${pairs}$ élément(s). Le programme affiche : <code>${pairs}</code>.`
          };
        },
        () => {
          // Exercice à trous : compter les multiples de 3 entre 1 et N
          const N = pick([30, 50, 100]);
          const nb = Math.floor(N / 3);
          return {
            enonce: `Compléter le programme Python ci-dessous pour qu'il compte et affiche combien d'entiers entre $1$ et $${N}$ sont des multiples de $3$. Indiquer dans l'ordre la valeur (ou l'expression) à mettre dans chaque trou.`,
            code: `n = ___\nfor i in range(1, ___):\n    if i % 3 == ___:\n        n = n + 1\nprint(___)`,
            corrige: `1<sup>er</sup> trou : <code>0</code> (initialisation du compteur). 2<sup>e</sup> trou : <code>${N + 1}</code> (pour aller jusqu'à $${N}$ inclus). 3<sup>e</sup> trou : <code>0</code> (un multiple de 3 a un reste nul par 3). 4<sup>e</sup> trou : <code>n</code> (on affiche le compteur). Le programme affichera : <code>${nb}</code>.`
          };
        }
      ];
      return pick(variantes)();
    } else {
      // Difficile : écrire un programme compteur
      return {
        enonce: `Écrire un programme Python qui compte combien d'entiers entre 1 et 100 sont divisibles par 7.`,
        corrige: `<code>n = 0<br>for i in range(1, 101):<br>&nbsp;&nbsp;&nbsp;&nbsp;if i % 7 == 0:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;n = n + 1<br>print(n)</code><br>Les multiples de 7 entre 1 et 100 sont : 7, 14, 21, …, 98. Il y en a 14. Le programme affiche : <code>14</code>.`
      };
    }
  },

  py_bernoulli: (d) => {
    if (d === 1) {
      // Facile : reconnaître une simulation simple (random.random() ou randint)
      const variantes = [
        () => ({
          enonce: `Le programme suivant simule une épreuve. Quelle est la probabilité de "succès" (c'est-à-dire <code>x == 1</code>) ?`,
          code: `from random import randint\nx = randint(1, 6)\nif x == 1:\n    print("succès")\nelse:\n    print("échec")`,
          corrige: `<code>randint(1, 6)</code> renvoie un entier aléatoire entre 1 et 6 inclus, avec équiprobabilité. La probabilité que $x = 1$ est donc $\\dfrac{1}{6}$.`
        }),
        () => ({
          enonce: `Le programme suivant simule une épreuve. Quelle est la probabilité de "succès" ?`,
          code: `from random import random\nif random() < 0.3:\n    print("succès")\nelse:\n    print("échec")`,
          corrige: `<code>random()</code> renvoie un nombre aléatoire entre 0 et 1 (uniformément). La probabilité que <code>random() &lt; 0,3</code> est donc $0{,}3$.`
        })
      ];
      return pick(variantes)();
    } else if (d === 2) {
      // Moyen : écrire une fonction Bernoulli, ou exercice à trous
      const variantes = [
        () => {
          const p = pick([0.3, 0.5, 0.7]);
          const pAff = p.toString().replace('.', ',');
          return {
            enonce: `Écrire une fonction Python <code>bernoulli()</code> qui simule une épreuve de Bernoulli de paramètre $p = ${pAff}$ (renvoie 1 en cas de succès, 0 sinon).`,
            corrige: `<code>from random import random<br>def bernoulli():<br>&nbsp;&nbsp;&nbsp;&nbsp;if random() &lt; ${p}:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return 1<br>&nbsp;&nbsp;&nbsp;&nbsp;else:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return 0</code><br>Comme <code>random()</code> renvoie une valeur uniforme dans $[0\\,;\\,1[$, la probabilité que <code>random() &lt; ${pAff}</code> vaut $${p.toString().replace('.', '{,}')}$.`
          };
        },
        () => {
          // Exercice à trous : simulation de Bernoulli
          const p = pick([0.4, 0.5, 0.6, 0.8]);
          const pAff = p.toString().replace('.', ',');
          return {
            enonce: `Le programme ci-dessous doit simuler une épreuve de Bernoulli de paramètre $p = ${pAff}$ et afficher "succès" ou "échec". Compléter les trous dans l'ordre.`,
            code: `from random import random\nif random() ___ ${p}:\n    print(___)\nelse:\n    print("échec")`,
            corrige: `1<sup>er</sup> trou : <code>&lt;</code> (la condition $random() &lt; ${pAff}$ est vraie avec probabilité $${p.toString().replace('.', '{,}')}$, ce qui correspond bien au paramètre demandé). 2<sup>e</sup> trou : <code>"succès"</code> (ne pas oublier les guillemets, c'est une chaîne de caractères).`
          };
        }
      ];
      return pick(variantes)();
    } else {
      // Difficile : lecture d'un programme + interprétation
      return {
        enonce: `Le programme suivant simule plusieurs fois une même épreuve de Bernoulli et compte les succès. Que représente la valeur affichée, et à quoi sert-elle ?`,
        code: `from random import random\nN = 1000\np = 0.3\nsucces = 0\nfor i in range(N):\n    if random() < p:\n        succes = succes + 1\nprint(succes / N)`,
        corrige: `Le programme simule $N = 1000$ épreuves de Bernoulli de paramètre $p = 0{,}3$, compte les succès, et affiche la **fréquence** de succès observée (succès / N). D'après la loi des grands nombres, cette fréquence est proche de la probabilité théorique $p = 0{,}3$. Le programme sert donc à **estimer** ou **vérifier** la probabilité de succès par simulation.`
      };
    }
  },

  py_repetition: (d) => {
    if (d === 1) {
      // Facile : reconnaître une simulation de répétition
      return {
        enonce: `Que fait le programme Python suivant ?`,
        code: `from random import randint\ns = 0\nfor i in range(4):\n    x = randint(1, 6)\n    if x == 6:\n        s = s + 1\nprint(s)`,
        corrige: `Le programme simule $4$ lancers d'un dé à 6 faces. À chaque lancer, si on obtient un 6, on incrémente <code>s</code>. <code>s</code> compte le **nombre de 6 obtenus** sur les 4 lancers. Le programme affiche cette valeur (entre 0 et 4).`
      };
    } else if (d === 2) {
      // Moyen : écrire un programme qui simule n répétitions et compte les succès
      const variantes = [
        () => {
          const n = pick([3, 4, 5]);
          return {
            enonce: `Écrire un programme Python qui simule $${n}$ tirages au sort indépendants avec probabilité de succès $0{,}5$ et qui affiche le nombre de succès.`,
            corrige: `<code>from random import random<br>n = ${n}<br>succes = 0<br>for i in range(n):<br>&nbsp;&nbsp;&nbsp;&nbsp;if random() &lt; 0.5:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;succes = succes + 1<br>print(succes)</code><br>Le programme répète $${n}$ fois une épreuve de Bernoulli de paramètre $0{,}5$ et affiche le nombre total de succès.`
          };
        },
        () => {
          // Exercice à trous : simulation de n épreuves de Bernoulli
          const n = pick([5, 10, 20]);
          const p = pick([0.3, 0.5, 0.6]);
          const pAff = p.toString().replace('.', ',');
          return {
            enonce: `Le programme ci-dessous doit simuler $${n}$ épreuves de Bernoulli de paramètre $p = ${pAff}$ et afficher le nombre de succès obtenus. Compléter les trous dans l'ordre.`,
            code: `from random import random\nsucces = ___\nfor i in range(___):\n    if random() ___ ${p}:\n        succes = succes + ___\nprint(succes)`,
            corrige: `1<sup>er</sup> trou : <code>0</code> (initialisation du compteur de succès). 2<sup>e</sup> trou : <code>${n}</code> (nombre d'épreuves à simuler). 3<sup>e</sup> trou : <code>&lt;</code> (condition de succès avec probabilité $${p.toString().replace('.', '{,}')}$). 4<sup>e</sup> trou : <code>1</code> (on incrémente le compteur de 1 à chaque succès).`
          };
        }
      ];
      return pick(variantes)();
    } else {
      // Difficile : programme complet + interprétation (estimer P(X ≥ k))
      return {
        enonce: `Le programme Python suivant simule 1000 fois la répétition de 4 épreuves de Bernoulli indépendantes (paramètre $0{,}5$), et compte combien de fois on obtient **au moins 2 succès**. Que représente la valeur affichée ?`,
        code: `from random import random\nN = 1000\nau_moins_2 = 0\nfor j in range(N):\n    succes = 0\n    for i in range(4):\n        if random() < 0.5:\n            succes = succes + 1\n    if succes >= 2:\n        au_moins_2 = au_moins_2 + 1\nprint(au_moins_2 / N)`,
        corrige: `La valeur affichée est une **fréquence** : la proportion de simulations (sur 1000) pour lesquelles on a obtenu au moins 2 succès sur 4 essais. D'après la loi des grands nombres, cette fréquence est proche de la **probabilité théorique** d'obtenir au moins 2 succès, soit $P(X \\geq 2)$ où $X$ compte les succès. Cette probabilité vaut $\\dfrac{11}{16} \\approx 0{,}6875$.`
      };
    }
  },

  py_suite_rec: (d) => {
    if (d === 1) {
      // Facile : lecture d'un programme qui calcule un terme
      const a = pick([2, 3]);
      const b = pick([1, 2]);
      const u0 = pick([1, 2]);
      const n = pick([3, 4, 5]);
      // Calcul u_n
      let u = u0;
      const trace = [u];
      for (let i = 0; i < n; i++) { u = a * u + b; trace.push(u); }
      return {
        enonce: `Que va afficher ce programme Python ?`,
        code: `u = ${u0}\nfor i in range(${n}):\n    u = ${a} * u + ${b}\nprint(u)`,
        corrige: `Le programme calcule les termes successifs de la suite définie par $u_0 = ${u0}$ et $u_{n+1} = ${a} u_n + ${b}$. Valeurs successives : ${trace.map((v, i) => `u_${i} = ${v}`).join(', ')}. Affichage : <code>${trace[n]}</code>.`
      };
    } else if (d === 2) {
      // Moyen : texte à trous
      return {
        enonce: `Compléter le programme Python pour qu'il calcule $u_{10}$ de la suite définie par $u_0 = 1$ et $u_{n+1} = 0{,}5 \\, u_n + 1$. Indiquer dans l'ordre la valeur (ou l'expression) à mettre dans chaque trou.`,
        code: `u = ___\nfor i in range(___):\n    u = ___\nprint(u)`,
        corrige: `1<sup>er</sup> trou : <code>1</code> (valeur initiale $u_0 = 1$). 2<sup>e</sup> trou : <code>10</code> (on itère 10 fois pour passer de $u_0$ à $u_{10}$). 3<sup>e</sup> trou : <code>0.5 * u + 1</code> (formule de récurrence ; attention au point décimal en Python).`
      };
    } else {
      // Difficile : écrire un programme qui retourne u_n
      const a = pick([2, 3]);
      const b = pick([1, 2, 3]);
      const u0 = pick([0, 1, 2]);
      return {
        enonce: `Soit $(u_n)$ la suite définie par $u_0 = ${u0}$ et $u_{n+1} = ${a} u_n + ${b}$ pour tout $n \\geq 0$. Écrire une fonction Python <code>terme(n)</code> qui retourne $u_n$.`,
        corrige: `<pre>def terme(n):
    u = ${u0}
    for i in range(n):
        u = ${a} * u + ${b}
    return u</pre>L'idée : on initialise $u$ à $u_0$, puis on applique $n$ fois la relation de récurrence pour obtenir $u_n$. **Exemple** : <code>terme(0)</code> retourne ${u0} (la boucle ne s'exécute pas), <code>terme(1)</code> retourne ${a * u0 + b} (= u_1).`
      };
    }
  },

  py_seuil: (d) => {
    if (d === 1) {
      // Facile : lecture d'un programme classique de recherche de seuil
      const cas = pick([
        { q: '1.5', qAff: '1{,}5', S: 100, u0: 1 },
        { q: '1.2', qAff: '1{,}2', S: 50, u0: 1 },
        { q: '2', qAff: '2', S: 1000, u0: 1 },
        { q: '1.1', qAff: '1{,}1', S: 200, u0: 5 }
      ]);
      return {
        enonce: `Que représente la valeur affichée par ce programme Python ? (On suppose que la suite $(u_n)$ définie par $u_0 = ${cas.u0}$ et $u_{n+1} = ${cas.qAff} \\, u_n$ tend vers $+\\infty$.)`,
        code: `u = ${cas.u0}\nn = 0\nwhile u < ${cas.S}:\n    u = ${cas.q} * u\n    n = n + 1\nprint(n)`,
        corrige: `Le programme cherche le **plus petit entier $n$** tel que $u_n \\geq ${cas.S}$. La boucle <code>while</code> continue tant que $u_n < ${cas.S}$ ; à chaque tour on incrémente $n$ et on calcule $u_{n+1}$. Donc la valeur affichée est le **seuil** : le plus petit $n$ tel que $u_n \\geq ${cas.S}$.`
      };
    } else if (d === 2) {
      // Moyen : programme à trous
      const cas = pick([
        { u0: 5, S: 1000, q: 2, qAff: '2' },
        { u0: 1, S: 100, q: 3, qAff: '3' },
        { u0: 2, S: 500, q: 4, qAff: '4' },
        { u0: 10, S: 10000, q: 5, qAff: '5' }
      ]);
      return {
        enonce: `Compléter le programme qui détermine le plus petit entier $n$ tel que $u_n \\geq ${cas.S}$, où $(u_n)$ est définie par $u_0 = ${cas.u0}$ et $u_{n+1} = ${cas.qAff} u_n$. Indiquer dans l'ordre la valeur (ou l'expression) à mettre dans chaque trou.`,
        code: `u = ___\nn = ___\nwhile u < ___:\n    u = ___\n    n = n + 1\nprint(n)`,
        corrige: `1<sup>er</sup> trou : <code>${cas.u0}</code> (valeur initiale $u_0 = ${cas.u0}$). 2<sup>e</sup> trou : <code>0</code> (compteur initialisé à 0). 3<sup>e</sup> trou : <code>${cas.S}</code> (le seuil à atteindre). 4<sup>e</sup> trou : <code>${cas.q} * u</code> (relation de récurrence).`
      };
    } else {
      // Difficile : écrire une fonction qui retourne le seuil
      const cas = pick([
        { u0: 1, q: '1.2', b: 1, descr: '$u_0 = 1$ et $u_{n+1} = 1{,}2 \\, u_n + 1$', qDot: '1.2', bDot: '1' },
        { u0: 0, q: '0.5', b: 1, descr: '$u_0 = 0$ et $u_{n+1} = 0{,}5 \\, u_n + 1$', qDot: '0.5', bDot: '1' },
        { u0: 2, q: '1.5', b: 0, descr: '$u_0 = 2$ et $u_{n+1} = 1{,}5 \\, u_n$ (géométrique)', qDot: '1.5', bDot: '0' }
      ]);
      const codeRec = cas.bDot === '0' ? `${cas.qDot} * u` : `${cas.qDot} * u + ${cas.bDot}`;
      return {
        enonce: `Soit $(u_n)$ définie par ${cas.descr}. Écrire une fonction Python <code>seuil(S)</code> qui retourne le plus petit entier $n$ tel que $u_n \\geq S$.`,
        corrige: `<pre>def seuil(S):
    u = ${cas.u0}
    n = 0
    while u < S:
        u = ${codeRec}
        n = n + 1
    return n</pre>**Idée** : initialiser $u$ et $n$, puis itérer tant que la condition n'est pas atteinte ; chaque tour de boucle fait avancer la suite d'un rang. Quand la boucle s'arrête, $u \\geq S$ et $n$ contient le rang correspondant.`
      };
    }
  },

  py_somme_suite: (d) => {
    if (d === 1) {
      // Facile : lecture d'un programme qui calcule une somme
      const n = pick([4, 5, 6]);
      // S = 0 + 1 + 2 + ... + n-1 = n(n-1)/2
      const somme = n * (n - 1) / 2;
      return {
        enonce: `Que va afficher ce programme Python ?`,
        code: `S = 0\nfor k in range(${n}):\n    S = S + k\nprint(S)`,
        corrige: `Le programme calcule $S = 0 + 1 + 2 + \\ldots + ${n - 1}$. La somme des entiers de 0 à $n-1$ vaut $\\dfrac{n(n-1)}{2}$. Pour $n = ${n}$ : $S = \\dfrac{${n} \\times ${n-1}}{2} = ${somme}$. Affichage : <code>${somme}</code>.`
      };
    } else if (d === 2) {
      // Moyen : à trous, calcul de S_n pour une suite arithmétique
      return {
        enonce: `Compléter le programme qui calcule $S = u_0 + u_1 + \\ldots + u_{10}$ pour la suite définie par $u_0 = 2$ et $u_{n+1} = u_n + 3$. Indiquer dans l'ordre la valeur (ou l'expression) à mettre dans chaque trou.`,
        code: `u = ___\nS = ___\nfor i in range(___):\n    S = S + u\n    u = ___\nprint(S)`,
        corrige: `1<sup>er</sup> trou : <code>2</code> (valeur initiale $u_0$). 2<sup>e</sup> trou : <code>0</code> (accumulateur de la somme initialisé à 0). 3<sup>e</sup> trou : <code>11</code> (on somme de $u_0$ à $u_{10}$, soit 11 termes). 4<sup>e</sup> trou : <code>u + 3</code> (relation de récurrence pour passer à $u_{n+1}$).`
      };
    } else {
      // Difficile : écrire une fonction qui retourne la somme
      return {
        enonce: `Soit $(u_n)$ la suite géométrique de premier terme $u_0 = 1$ et de raison $q = 0{,}5$. Écrire une fonction Python <code>somme(n)</code> qui retourne $S_n = u_0 + u_1 + \\ldots + u_n$.`,
        corrige: `<pre>def somme(n):
    u = 1
    S = 0
    for i in range(n + 1):
        S = S + u
        u = 0.5 * u
    return S</pre>**Idée** : on cumule les valeurs successives de la suite dans <code>S</code>, et on fait progresser la suite avec <code>u = 0.5 * u</code>. **Attention** : on veut sommer de $u_0$ à $u_n$ inclus, soit $n+1$ termes. Pour vérifier : $S_n \\to 2$ quand $n \\to +\\infty$ (somme géométrique).`
      };
    }
  },

  py_dichotomie: (d) => {
    if (d === 1) {
      const cas = pick([
        { f: 'x**2 - 2', a: 1, b: 2, sol: '\\sqrt{2} \\approx 1{,}414', descrSol: '$\\sqrt{2}$', descrEq: '$x^2 = 2$' },
        { f: 'x**3 - 5', a: 1, b: 2, sol: '\\sqrt[3]{5} \\approx 1{,}710', descrSol: '$\\sqrt[3]{5}$', descrEq: '$x^3 = 5$' },
        { f: 'x**2 - 3', a: 1, b: 2, sol: '\\sqrt{3} \\approx 1{,}732', descrSol: '$\\sqrt{3}$', descrEq: '$x^2 = 3$' }
      ]);
      return {
        enonce: `Que cherche à faire ce programme Python ?`,
        code: `def f(x):\n    return ${cas.f}\n\na = ${cas.a}\nb = ${cas.b}\nfor i in range(10):\n    m = (a + b) / 2\n    if f(a) * f(m) < 0:\n        b = m\n    else:\n        a = m\nprint((a + b) / 2)`,
        corrige: `Ce programme cherche une valeur **approchée d'une racine** de la fonction $f(x) = ${cas.f.replace(/\*\*/g, '^').replace(/\*/g, '')}$ sur l'intervalle $[${cas.a}\\,;\\,${cas.b}]$, par la **méthode de dichotomie**. À chaque tour, on divise l'intervalle en deux : si $f(a)$ et $f(m)$ sont de signes opposés, la racine est dans $[a\\,;\\,m]$ ; sinon, dans $[m\\,;\\,b]$. Au bout de 10 itérations, le programme affiche une approximation de la solution de ${cas.descrEq}, c'est-à-dire ${cas.descrSol} : $${cas.sol}$.`
      };
    } else if (d === 2) {
      const cas = pick([
        { f: 'x**2 - 2', a: 1, b: 2 },
        { f: 'x**3 - 5', a: 1, b: 2 },
        { f: 'x**2 + x - 5', a: 1, b: 3 }
      ]);
      return {
        enonce: `Compléter le programme de dichotomie qui cherche une racine de $f$ sur $[a;b]$ (on suppose $f$ continue et $f(a) \\times f(b) < 0$), avec une précision de $10^{-3}$. Indiquer dans l'ordre la valeur (ou l'expression) à mettre dans chaque trou.`,
        code: `def f(x):\n    return ${cas.f}\n\na = ${cas.a}\nb = ${cas.b}\nwhile b - a > ___:\n    m = ___\n    if f(a) * f(m) < ___:\n        b = m\n    else:\n        a = m\nprint((a + b) / 2)`,
        corrige: `1<sup>er</sup> trou : <code>0.001</code> (précision $10^{-3}$ ; on continue tant que l'intervalle est plus grand que la précision). 2<sup>e</sup> trou : <code>(a + b) / 2</code> (milieu de l'intervalle). 3<sup>e</sup> trou : <code>0</code> (on teste si les signes sont opposés, condition $f(a) \\times f(m) < 0$).`
      };
    } else {
      return {
        enonce: `Écrire une fonction Python <code>dichotomie(f, a, b, precision)</code> qui retourne une valeur approchée d'une racine de $f$ sur $[a\\,;\\,b]$ avec la précision demandée. On suppose que $f$ est continue et que $f(a) \\times f(b) < 0$.`,
        corrige: `<pre>def dichotomie(f, a, b, precision):
    while b - a > precision:
        m = (a + b) / 2
        if f(a) * f(m) < 0:
            b = m
        else:
            a = m
    return (a + b) / 2</pre>**Idée** : on divise l'intervalle par 2 à chaque tour. Le signe de $f(a) \\times f(m)$ indique dans quelle moitié se trouve la racine (théorème des valeurs intermédiaires). On retourne le milieu de l'intervalle final, qui approche la racine à <code>precision</code> près.`
      };
    }
  },

  py_rectangles: (d) => {
    if (d === 1) {
      const cas = pick([
        { f: 'x**2', fDescr: 'x^2', a: 0, b: 1, valEx: '\\dfrac{1}{3} \\approx 0{,}333' },
        { f: 'x**3', fDescr: 'x^3', a: 0, b: 1, valEx: '\\dfrac{1}{4} = 0{,}25' },
        { f: 'x**2', fDescr: 'x^2', a: 0, b: 2, valEx: '\\dfrac{8}{3} \\approx 2{,}667' },
        { f: '2*x + 1', fDescr: '2x + 1', a: 0, b: 1, valEx: '2' }
      ]);
      return {
        enonce: `Que calcule (approximativement) ce programme Python ?`,
        code: `def f(x):\n    return ${cas.f}\n\na = ${cas.a}\nb = ${cas.b}\nn = 100\ndx = (b - a) / n\nS = 0\nfor i in range(n):\n    S = S + f(a + i * dx) * dx\nprint(S)`,
        corrige: `Le programme calcule une **valeur approchée** de l'intégrale $\\displaystyle\\int_{${cas.a}}^{${cas.b}} ${cas.fDescr} \\, dx$ par la **méthode des rectangles** (à gauche). On découpe $[${cas.a}\\,;\\,${cas.b}]$ en $n = 100$ petits intervalles de largeur $dx$ et on somme les aires des rectangles de hauteur $f(a + i \\cdot dx)$. La valeur exacte est $${cas.valEx}$, le programme affichera une valeur très proche.`
      };
    } else if (d === 2) {
      const cas = pick([
        { f: 'exp(x)', fDescr: 'e^x', a: 0, b: 2, valEx: 'e^2 - 1 \\approx 6{,}389', imp: 'from math import exp\n\n' },
        { f: '1 / x', fDescr: '\\dfrac{1}{x}', a: 1, b: 2, valEx: '\\ln(2) \\approx 0{,}693', imp: '' },
        { f: 'x**2 + 1', fDescr: 'x^2 + 1', a: 0, b: 3, valEx: '12', imp: '' }
      ]);
      return {
        enonce: `Compléter le programme qui approche $\\displaystyle\\int_{${cas.a}}^{${cas.b}} ${cas.fDescr} \\, dx$ par la méthode des rectangles (à gauche), avec $n = 1000$ subdivisions. Indiquer dans l'ordre la valeur (ou l'expression) à mettre dans chaque trou.`,
        code: `${cas.imp}def f(x):\n    return ___\n\na = ${cas.a}\nb = ___\nn = 1000\ndx = (b - a) / n\nS = ___\nfor i in range(n):\n    S = S + f(a + i * dx) * dx\nprint(S)`,
        corrige: `1<sup>er</sup> trou : <code>${cas.f}</code> (la fonction à intégrer). 2<sup>e</sup> trou : <code>${cas.b}</code> (borne supérieure de l'intégrale). 3<sup>e</sup> trou : <code>0</code> (accumulateur de la somme initialisé à 0). **Vérification** : la valeur exacte est $${cas.valEx}$.`
      };
    } else {
      return {
        enonce: `Écrire une fonction Python <code>integrale(f, a, b, n)</code> qui retourne une valeur approchée de $\\displaystyle\\int_{a}^{b} f(x) \\, dx$ par la méthode des rectangles à gauche, avec $n$ subdivisions.`,
        corrige: `<pre>def integrale(f, a, b, n):
    dx = (b - a) / n
    S = 0
    for i in range(n):
        S = S + f(a + i * dx) * dx
    return S</pre>**Idée** : on découpe $[a\\,;\\,b]$ en $n$ intervalles de largeur $dx = \\dfrac{b-a}{n}$. L'aire du $i$-ième rectangle (à gauche) est $f(a + i \\cdot dx) \\times dx$. On somme ces aires pour approcher l'intégrale. Plus $n$ est grand, plus l'approximation est précise.`
      };
    }
  },

  py_marche: (d) => {
    if (d === 1) {
      const n = pick([50, 100, 200, 500]);
      return {
        enonce: `Que simule ce programme Python ?`,
        code: `from random import random\nposition = 0\nfor i in range(${n}):\n    if random() < 0.5:\n        position = position + 1\n    else:\n        position = position - 1\nprint(position)`,
        corrige: `Le programme simule une **marche aléatoire** en dimension 1 sur ${n} pas. À chaque pas, on avance d'une unité vers la droite (avec probabilité $0{,}5$) ou vers la gauche (avec probabilité $0{,}5$). La valeur affichée est la **position finale** après ${n} pas, qui est aléatoire. En moyenne, elle vaut 0, mais peut fluctuer autour de cette valeur (l'écart-type est de l'ordre de $\\sqrt{${n}}$).`
      };
    } else if (d === 2) {
      const cas = pick([
        { n: 50, p: '0.6', pAff: '0{,}6', qAff: '0{,}4' },
        { n: 100, p: '0.55', pAff: '0{,}55', qAff: '0{,}45' },
        { n: 200, p: '0.5', pAff: '0{,}5', qAff: '0{,}5' },
        { n: 30, p: '0.7', pAff: '0{,}7', qAff: '0{,}3' }
      ]);
      return {
        enonce: `Compléter le programme qui simule une marche aléatoire de $n = ${cas.n}$ pas où à chaque étape on avance de $+1$ avec probabilité $${cas.pAff}$, et de $-1$ avec probabilité $${cas.qAff}$. Indiquer dans l'ordre la valeur (ou l'expression) à mettre dans chaque trou.`,
        code: `from random import random\nposition = ___\nfor i in range(___):\n    if random() < ___:\n        position = position + 1\n    else:\n        position = position - 1\nprint(position)`,
        corrige: `1<sup>er</sup> trou : <code>0</code> (position de départ, l'origine). 2<sup>e</sup> trou : <code>${cas.n}</code> (nombre de pas). 3<sup>e</sup> trou : <code>${cas.p}</code> (probabilité de "+1" ; <code>random()</code> renvoie un réel dans $[0\\,;\\,1[$, on a donc bien <code>random() < ${cas.p}</code> avec probabilité $${cas.pAff}$).`
      };
    } else {
      return {
        enonce: `Écrire une fonction Python <code>marche(n)</code> qui simule une marche aléatoire de $n$ pas (à chaque pas : $+1$ ou $-1$ avec probabilité $0{,}5$ chacun) et retourne la position finale. Puis écrire une fonction <code>moyenne_distance(n, N)</code> qui répète $N$ fois cette marche et retourne la **moyenne** des positions finales (en valeur absolue).`,
        corrige: `<pre>from random import random

def marche(n):
    position = 0
    for i in range(n):
        if random() < 0.5:
            position = position + 1
        else:
            position = position - 1
    return position

def moyenne_distance(n, N):
    total = 0
    for j in range(N):
        total = total + abs(marche(n))
    return total / N</pre>**Idée** : on simule $N$ marches indépendantes et on calcule la moyenne des distances à l'origine. Théoriquement, cette moyenne croît comme $\\sqrt{n}$ : c'est un résultat classique en probabilités. <code>abs()</code> est la fonction valeur absolue de Python.`
      };
    }
  },

});
