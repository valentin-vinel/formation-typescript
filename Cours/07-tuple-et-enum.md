# Tuples et Enum en TypeScript

> ✅ **À retenir**
> - Les **tuples** permettent de **typer chaque position d’un tableau fixe**
> - Les **enum** servent à **nommer des valeurs constantes de manière claire**
> - Tous deux **améliorent la lisibilité et la sécurité du code**

## Tuples

Une tuple est un tableau typé et ordonné, avec un nombre fixe d’éléments dont chaque position a un type spécifique.

**Exemple:**
```ts
let user: [string, number];
user = ["Alice", 30]; // OK
// user = [30, "Alice"]; // ❌ Erreur
```

Contrairement à un tableau classique, chaque position dans une tuple a un type défini.

**Accès aux valeurs:**
```ts
console.log(user[0].toUpperCase()); // "ALICE"
console.log(user[1].toFixed(2));    // "30.00"
```

**Tuples avec labels (optionnel, utile pour la lisibilité):**
```ts
type Point = [x: number, y: number];
const coord: Point = [10, 20];
```

## Enum

Les énumérations (enum) permettent de nommer des ensembles de valeurs constantes.

**Enum numérique :**
```ts
enum Direction {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right  // 3
}

let dir: Direction = Direction.Left;
console.log(dir); // 2
```

Par défaut, les valeurs sont des nombres commençant à 0.

**Enum personnalisé:**
```ts
enum Status {
  Success = 200,
  NotFound = 404,
  ServerError = 500
}
```

**Enum en chaîne (string enums):**
```ts
enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

let role: Role = Role.Admin;
console.log(role); // "ADMIN"
```