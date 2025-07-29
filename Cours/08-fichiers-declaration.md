# Fichiers de déclarations

Ces fichiers peuvent être générés à partir de votre code TypeScript pour aider ceux qui souhaiteraient utiliser votre librairie, et ils peuvent aussi être utilisés pour typer des éléments que TypeScript ne pourrait par connaître.

## Générer un fichier de déclaration

Pour générer un fichier de déclaration en même temps que votre code JavaScript, il suffit simplement d'activer l'option déclaration dans la configuration de votre compileur.

## Utiliser un fichier de déclaration

Si vous utilisez une variable globale injectée par un script dans votre page, vous pouvez créer un fichier de déclaration pour informer TypeScript de la présence de cet objet. Ce fichier peut être placé où vous le souhaitez et se terminera par l'extension .d.ts. On modifiera ensuite notre tsconfig.json pour lui faire charger ces fichiers.

```ts
{
    "include": [
        "src/types/**/*"
    ]
}
```

Pour google analytics, qui ajoute une variable globale ga, on pourra avoir un fichier de déclaration qui contiendra la définition suivante.

```ts
interface Window {
    ga: (eventName: string, options: {
        hitType: string,
        eventCategory?: string
    }) => void
}
```

On pourra aussi simplement déclarer la variable si l'on ne souhaite pas utiliser window.

```ts
declare var ga: (eventName: string, options: {
        hitType: string,
        eventCategory?: string
    }) => void
```

## Librairie npm

Dans le cas d'une librairie provenant d'npm, vous pouvez commencer par vérifier si un fichier de déclaration existe dans le projet DefinitelyTyped. Si c'est le cas vous pouvez l'installer directement et cela devrait être suffisant.

```shell
npm install --save-dev @types/react
```

Dans le cas où un fichier de déclaration n'existe pas, vous devrez créer votre propre fichier de déclaration.

```ts
declare module "scroll-to" {
    const scrollTo: (x: number, y: number, options: {
        ease?: string,
        duration?: number
    }) => void

    export default scrollTo
}
```