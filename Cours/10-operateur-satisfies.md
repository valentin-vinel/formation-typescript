# Opérateur satisfies

L'opérateur satisfies ajouté dans la version 4.9 de TypeScript permet de s'assurer qu'une expression corresponde à un type, tout en conservant un type spécifique à l'expression.

Prenons un exemple concret pour mieux comprendre la situation.

```ts
type Colors = Record<string, [number, number, number] | string>

function demo (c: Colors) {}
```

On crée une variable qui correspond à la signature et on essaie de l'envoyer à la fonction

```ts
const colors = {
  blue: [0, 0, 255],
  red: '#FF0000',
  green:  [0, 255, 0]
}

demo(colors) // Erreur, le type inféré pour "colors" ne correspond pas à "Colors"
```

Le problème est que TypeScript va inférer un type pour cette variable qui ne correspond pas à notre définition et il renverra une erreur. La solution utilisée jusqu'à maintenant était de forcer le type via un as ou en définissant le type de la variable.

```ts
const colors = {
  blue: [0, 0, 255],
  red: '#FF0000',
  green:  [0, 255, 0]
} as Colors

demo(colors) // Ok
```

Cela corrige notre problème mais en entraine un autre. On perd la spécificité de notre variable

```ts
const colors = {
  blue: [0, 0, 255],
  red: '#FF0000',
  green:  [0, 255, 0]
} as Colors

colors.red.toLowerCase() // Property toLowerCase() does not exists on [number, number, number]
```

Notre variable ayant pris le type de Colors, les valeurs sont pour TypeScript de type string | [number, number, number] ce qui ne correspond pas à ce que l'on écrit et c'est là que satisfies intervient !

```ts
const colors = {
  blue: [0, 0, 255],
  red: '#FF0000',
  green:  [0, 255, 0]
} satisfies Colors

colors.red.toLowerCase() // Ok
demo(colors) // Ok
```

Gràce à cette instruction plutôt que de convertir le type de colors en Colors TypeScript va inférer un type qui correspond au type demandé tout en gardant la spécificité de notre variable. En interne, le type inféré pour colors sera le suivant :

```ts
type _ = {
    blue: [number, number, number],
    red: string,
    green: [number, number, number]
}
```

On correspond bien à Colors tout en gardant une définition qui correspond à la valeur de notre variable.

## Quand utiliser as ?

Avec ce nouvel opérateur on peut se demander si as a encore un intérêt. Selon moi as reste intéréssant pour typer un tableau avant son remplissage par exemple.

```ts
const a = [] satisfies string[] // Renvoie un type never[] dans la version 4.9 de TS
const a = [] as string[] // Renvoie bien string[]
const a:string[] = []    // Equivalent au as 
``` 

Mais aussi pour un objet vide que l'on voudrait initialiser comme Record<string, ????>

```ts
type Colors = Record<string, [number, number, number] | string>

const a = {} satisfies Colors 
a.red = '#FF0000' // Property "red" does not exists on type {}

const b = {} as Colors 
b.red = '#FF0000' // Ok
``` 