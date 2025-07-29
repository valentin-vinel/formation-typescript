# Types utilitaires en TypeScript

TypeScript fournit des types utilitaires intégrés (built-in utility types) qui permettent de transformer, restreindre ou manipuler d'autres types existants de façon simple et puissante.

> ✅ **À retenir**
> - Les **types utilitaires** permettent de **transformer rapidement d’autres types**.
> - Très utilisés dans les **applications réelles**, surtout en **React**, **Angular**, ou dans les **APIs**.
> - Ils permettent d’éviter d’écrire du code répétitif ou des types manuellement.

## Partial<T>

Rend toutes les propriétés d’un type optionnelles.

```ts
type User = {
  name: string;
  age: number;
};

type PartialUser = Partial<User>;
// => { name?: string; age?: number }
```

## Required<T>

Rend toutes les propriétés d’un type obligatoires.

```ts
type User = {
  name?: string;
  age?: number;
};

type FullUser = Required<User>;
// => { name: string; age: number }
```

## Readonly<T>

Rend toutes les propriétés en lecture seule (non modifiables).

```ts
type User = {
  name: string;
  age: number;
};

type ReadonlyUser = Readonly<User>;
// => { readonly name: string; readonly age: number }
```

## Pick<T, K>

Crée un nouveau type à partir de certaines clés sélectionnées d’un type existant.

```ts
type User = {
  name: string;
  age: number;
  email: string;
};

type BasicInfo = Pick<User, "name" | "email">;
// => { name: string; email: string }
```

## Omit<T, K>

Crée un type en excluant certaines propriétés.

```ts
type PrivateInfo = Omit<User, "email">;
// => { name: string; age: number }
```

## Record<K, T>

Crée un type d’objet avec des clés dynamiques de type K et des valeurs de type T.

```ts
type Roles = "admin" | "user" | "guest";

const permissions: Record<Roles, boolean> = {
  admin: true,
  user: true,
  guest: false
};
```

## Exclude<T, U>

Exclut de T les membres assignables à U.

```ts
type Status = "success" | "error" | "loading";

type WithoutLoading = Exclude<Status, "loading">;
// => "success" | "error"
```

## Extract<T, U>

Garde dans T uniquement les membres assignables à U.

```ts
type Status = "success" | "error" | "loading";

type OnlySuccess = Extract<Status, "success" | "pending">;
// => "success"
```

> Ces types font partie des outils les plus puissants de TypeScript pour écrire du code plus propre, plus DRY et plus typé.