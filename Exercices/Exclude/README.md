Implement the built-in `Exclude<T, U>`

> Exclude from `T` those types that are assignable to `U`

For example:

```ts
type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
```

[Exercice](https://github.com/type-challenges/type-challenges/blob/main/questions/00043-easy-exclude/README.md?plain=1)