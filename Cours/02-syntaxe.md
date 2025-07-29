# Syntaxe de base

Comme évoqué dans la présentation, TypeScript est un sur-ensemble de JavaScript qui ajoute le typage statique et des fonctionnalités avancées pour améliorer la robustesse et la lisibilité du code. Voici un aperçu des principales notions de syntaxe.

Nous revenons sur chaque syntaxe en détail dans les fiches correspondantes.

## Typage de base

```ts
let message: string = "Hello TypeScript";
let count: number = 42;
let isActive: boolean = true;
```

Le typage est optionnel mais permet d'anticiper les erreurs à la compilation.

## Types complexes

- Tableaux
```ts
let names: string[] = ["Alice", "Bob"];
let scores: Array<number> = [10, 20, 30];
```

- Tuples
```ts
let person: [string, number] = ["Alice", 30];
```

- Enum
```ts
enum Direction {
  Up,
  Down,
  Left,
  Right
}
let dir: Direction = Direction.Up;
```

- Type any / unknown
```ts
let anything: any = 42;       // à éviter, annule le typage
let value: unknown = "test";  // nécessite une vérification avant utilisation
```

- Union & Literal Types
```ts
let id: number | string;
id = 123;
id = "abc";

let role: "admin" | "user" = "admin";
```

## Fonctions

```ts
function greet(name: string): string {
  return `Hello, ${name}`;
}

function log(message: string): void {
  console.log(message);
}
```

## Interfaces et Types

```ts
interface User {
  name: string;
  age: number;
}

type Admin = {
  name: string;
  role: "admin";
};
```

## Classes

```ts
class Animal {
  constructor(public name: string) {}

  speak(): void {
    console.log(`${this.name} makes a noise.`);
  }
}

const dog = new Animal("Rex");
dog.speak();
```

## Fonctions génériques

```ts
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("hello");
```

## Narrowing

```ts
function process(value: string | number) {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value.toFixed(2);
}
```

## Optional chaining et nullish coalescing

```ts
let user = { name: "Alice", address: { city: "Paris" } };
console.log(user?.address?.city);       // "Paris"
console.log(user?.phone ?? "Pas de numéro"); // "Pas de numéro"
```

## Assertions de type

```ts
let value: unknown = "Hello";
let strLength: number = (value as string).length;
```

## Modules (import/export)

```ts
// math.ts
export function add(a: number, b: number): number {
  return a + b;
}

// main.ts
import { add } from "./math";
```