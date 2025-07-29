Implement the built-in Parameters<T> generic without using it.

For example:

```ts
const foo = (arg1: string, arg2: number): void => {}

type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]
```

[Exercice](https://github.com/type-challenges/type-challenges/blob/main/questions/03312-easy-parameters/README.md)