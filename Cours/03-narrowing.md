# Narrowing

Le Narrowing est le processus qui permet, via des conditions, de réduire les types possible.

```ts
function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    // Avec cette condition, typescript sait maintenant que padding est un nombre 
    return new Array(padding + 1).join(" ") + input;
  }
  // Ici il sait que c'est une chaine de caractères
  return padding + input;
}
```

Le **Narrowing** peut se faire grâce à plusieurs méthodes :
- typeof
- instanceof
- L'égalité entre 2 union type qui ont des types en commun
- L'opérateur in
- Certaines méthodes qui permettent de prédire le type : Array.isArray par exemple.