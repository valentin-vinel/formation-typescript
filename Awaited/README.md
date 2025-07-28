If we have a type which is a wrapped type like Promise, how can we get the type which is inside the wrapped type?

For example: if we have `Promise<ExampleType>` how to get ExampleType?

```ts
type ExampleType = Promise<string>

type Result = MyAwaited<ExampleType> // string
```

[Exercice](https://github.com/type-challenges/type-challenges/blob/main/questions/00189-easy-awaited/README.md)