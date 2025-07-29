# Alias et Generics

## Alias

Comment il est possible d'éviter la répétition dans la déclaration de type via les **alias**.

Un **alias de type** permet de donner un nom à un type. Cela rend le code plus lisible et plus facile à maintenir.

Exemple simple:
```ts
type UserID = number;
let id: UserID = 101;
```

Alias avec objets :
```ts
type User = {
  name: string;
  age: number;
  email?: string; // Propriété optionnelle
};
```

Alias avec union :
```ts
type Status = "success" | "error" | "loading";
let current: Status = "success";
```

Les alias sont très utiles pour réutiliser un même type dans plusieurs endroits du code.

## Generics

Les **generics** permettent de créer des fonctions, types ou structures de données flexibles tout en conservant le typage.

Fonction générique :
```ts
function identity<T>(value: T): T {
  return value;
}

let a = identity("hello");  // T est string
let b = identity(123);      // T est number
```

Tableau générique:
```ts
function first<T>(arr: T[]): T {
  return arr[0];
}
```

Type générique:
```ts
type ApiResponse<T> = {
  data: T;
  error?: string;
};

const response: ApiResponse<string> = {
  data: "OK"
};
```

Contrainte sur T:
```ts
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

getLength("hello"); // OK
getLength([1, 2, 3]); // OK
```

Les génériques sont idéaux pour écrire du code **réutilisable et typé** sans perdre en précision.