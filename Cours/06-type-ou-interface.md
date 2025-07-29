# Type ou interface en TypeScript

Si vous avez regardé un peu la documentation, vous avez du voir des exemples alterner entre les types et les interfaces. Même si dans beaucoup de cas les 2 peuvent être utilisés de manière interchangeable, il y a des différences qui vous feront choisir l'un ou l'autre.

> ✅ **À retenir**
> - *type* est plus **flexible** (unions, tuples, fonctions)
> - *interface* est plus **structurée** (objets, extensions)
> - Les deux permettent de **typer proprement** ton code

## Un type peut utiliser un type primaire

On peut avoir un type qui utilise des types de bases et des unions types.

```ts
type DateString = string
type Id = string | number
```

Ce n'est pas possible avec les interfaces, qui ne peuvent décrire que des objets.

## Une interface peut être fusionnée

Une interface peut être définie plusieurs fois et les déclarations seront alors fusionnées.

```ts
interface Point {
    x: number
}

interface Point {
    y: number
}

// Point aura maintenant la forme {x:number, y:number}
```

C'est impossible avec les types, qui eux ne peuvent pas être modifiés une fois déclarés.

## Une interface peut être implémentée par une classe

Lorsque l'on déclare une classe, il est possible d'indiquer que l'on implémente une interface de manière explicite.

```ts
class TwoDimensionalPoint implements Point {
    constructor (private x: number, private y: number) {}
}
```