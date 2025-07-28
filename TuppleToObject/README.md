Given an array, transform it into an object type and the key/value must be in the provided array.

For example:

```ts
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type result = TupleToObject<typeof tuple> // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
```

[Exercice](https://github.com/type-challenges/type-challenges/blob/main/questions/00011-easy-tuple-to-object/README.md?plain=1)