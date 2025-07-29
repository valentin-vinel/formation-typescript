# Qu'est ce que le TypeScript

Pour commencer on peut se demander ce qu'est TypeScript et à quoi il peut servir.

TypeScript est un **superset du javascript** (du code JavaScript valide est du code TypeScript valide) où on aura la possibilité de **spécifier les type attendus** lorsque l'on va créer des fonctions ou des variables.

Ensuite, TypeScript c'est aussi un outil qui va être capable de passer en revue le code écrit et qui va pouvoir vérifier s'il y a des incohérences de types.

Maintenant on peut se demander pourquoi utiliser TypeScript alors que vous êtes peut être déjà satisfait avec Javascript. Qu'est ce que va apporter TypeScript...

# Les avantages du TypeScript

**Moins d'erreurs**

TypeScript va vous permettre de **limiter les erreurs** dans votre code et notamment un type d'erreur que l'on rencontre trop souvent souvent.

```ts
Uncaught TypeError: Cannot read properties of undefined (reading 'toLowerCase')
```

Ce type d'erreurs arrive parce que vous avez peut-être fait une erreur de frappe ou parce que vous avez une erreur de logique et une fonction reçoit un paramètre qui n'est pas celui attendu. Le problème est que cette erreur se déclenche assez tard dans notre code et il faut souvent remonter la pile d'appel pour comprendre l'origine. 
Avec le TypeScript, si un paramètre n'a pas la bonne forme on sera informé du problème assez tôt et on pourra même corriger l'erreur avant qu'elle ne se produise.

L'autre situation est une incohérence de type.

```ts
resultat.innerText = 'Le prix TTC est : ' + ((amount.value + addons.value) * 1.2).toFixed(2)
```

Ici, on a oublié que la valeur d'un champs est de type string et l'addition va en fait être une concaténation. TypeScript renverra une erreur dans cette situation en vous indiquant qu'une multiplication entre une chaîne de caractères et un nombre n'est pas possible.

# Une meilleur documentation

Du code écrit en TypeScript permettra aussi d'avoir **une meilleure auto-complétion et une meilleure documentation** (à travers le typage on saura quel type de paramètre est attendu par les fonctions). Cette documentation des types sera d'ailleurs beaucoup plus exhaustive que ce qu'il est possible de faire avec JSDoc.

Il est d'ailleurs intéressant de noter que votre éditeur utilise probablement les fichiers de définitions TypeScript pour offrir l'auto-complétion sur les librairies de base.

# Une cible unique

Un autre avantage est que l'on peut facilement cibler une version spécifique de TypeScript et lui demander d'exporter le code pour n'importe quelle version de JavaScript (depuis ES3 jusqu'à ESNext). Il peut alors remplacer des outils comme Babel (à condition d'ajouter les polyfills si vous utilisez des objets spéciaux).

# Les inconvénients

Comme toute technologie, son utilisation implique aussi quelques inconvénients.

## Un outil en plus

Cela semble évident mais TypeScript va représenter un outil supplémentaire entre votre code et le navigateur / serveur. Vous ne pourrez plus directement coller une fonction dans votre navigateur pour la tester par exemple et vous allez devoir trouver des adapters TypeScript pour les outils que vous avez l'habitude d'utiliser (par exemple pour les tests unitaires). Cependant, dans le pire des cas vous pourrez toujours convertir votre code en JavaScript pour le faire fonctionner avec l'outil de votre choix.

## L'écosystème JavaScript

Pour que TypeScript fonctionne pleinement il a besoin de connaitre le type de tous les éléments. Ce qui peut poser un problème lorsque l'on choisit d'utiliser une librairie qui n'est écrite qu'en JavaScript. Il faudra donc être plus attentif aux librairies que l'on va choisir et si possible chercher des librairies qui disposent de fichiers de types (un petit logo apparait maintenant sur npmjs pour nous informer de la présence d'un fichier de déclaration).

Aussi, le projet Definitely Typed, offre de nombreux fichiers de déclaration pour certains paquets npm.

## Attention au code dynamique

Ce problème est un peu particulier car il est le fruit du principe même de TypeScript. Les types étant statiques, ils se marient difficilement avec un code trop dynamique et il faudra parfois repenser sa manière d'écrire. Il faudra, dans la mesure du possible, essayer de s'adapter à la contrainte plutôt que de créer des méthodes trop dynamiques qui sont difficile à typer. Malgré tout, vous le verrez dans cette formation, le système de typage est assez flexible pour s'adapter à beaucoup de situations.

## Lisibilité du code

Enfin, le dernier problème réside dans le mélange entre le code et les types. Parfois ce mélange peut rendre le code moins lisible.

```ts
function push<T, U>(items: readonly T[], item: U): (T | U)[] {
    return [...items, item]
}
```

On aura la possibilité de créer des alias pour mitiger ce problème. Bien que cette pratique est rare, vous pouvez aussi déplacer les types dans les commentaires si vous le souhaitez pas les mélanger à votre code.

# Adopter TypeScript

Avec tout ça, on peut se poser la question sur l'utilisation du TypeScript. Au final, c'est à vous de voir si vous jugez que l'intérêt des avantages est supérieur aux inconvénients.

Cependant, si vous n'êtes pas fan de TypeScript dans sa globalité, vous pouvez l'utiliser avec différents niveaux d'implication.

- Vous pouvez continuer à écrire du JavaScript et utiliser TypeScript pour vérifier votre code pour des erreurs simples (variables non définies). Si vous avez de la documentation JSDoc, il peut l'utiliser pour vérifier certaines correspondances.
- Vous pouvez juste l'utiliser pour créer un fichier de déclaration pour votre librairie pour simplifier son utilisation.
- Ou l'adopter complètement en écrivant votre code directement en TypeScript.

Dans tous les cas, vous pouvez suivre cette formation pour découvrir plus en profondeur TypeScript pour vous faire votre propre opinion.