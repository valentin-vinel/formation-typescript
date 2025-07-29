# Les classes en TypeScript

TypeScript propose une syntaxe orientée objet similaire à JavaScript (ES6+), mais avec le typage statique en plus. Les classes permettent d’organiser le code en objets réutilisables.

## Déclaration d'une classe

```ts
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`Bonjour, je m'appelle ${this.name}`);
  }
}

const user = new Person("Alice", 30);
user.greet();
```

## Modificateurs d'accès

- ***public*** (par défaut) → accessible partout
- ***private*** → accessible uniquement dans la classe
- ***protected*** → accessible dans la classe et ses sous-classes

```ts
class Car {
  public brand: string;
  private speed: number = 0;

  constructor(brand: string) {
    this.brand = brand;
  }

  accelerate(): void {
    this.speed += 10;
    console.log(`Vitesse : ${this.speed}`);
  }
}
```

## Paramètres dans le constructeur

On peut déclarer et initialiser les propritétés directement dans le constructeur:

```ts
class Animal {
  constructor(public name: string, private type: string) {}

  info(): string {
    return `${this.name} est un ${this.type}`;
  }
}
```

## Héritage (extends)

```ts
class Animal {
  constructor(public name: string) {}

  speak(): void {
    console.log(`${this.name} fait un bruit.`);
  }
}

class Dog extends Animal {
  bark(): void {
    console.log(`${this.name} aboie.`);
  }
}

const rex = new Dog("Rex");
rex.speak();
rex.bark();
```

## Classes abstraites

Une classe abstraite sert de modèle. On ne peut pas l'instancier directement.

```ts
abstract class Shape {
  constructor(public color: string) {}

  abstract area(): number;
}

class Square extends Shape {
  constructor(color: string, public size: number) {
    super(color);
  }

  area(): number {
    return this.size * this.size;
  }
}
```

## Propriétés statiques

Les propriétés ou méthodes *static* appartiennent à la classe et non aux instances.

```ts
class MathUtil {
  static PI = 3.14;

  static square(x: number): number {
    return x * x;
  }
}

console.log(MathUtil.PI);
console.log(MathUtil.square(5));
```

> Les classes en TypeScript permettent de structurer son code en suivant un modèle objet tout en bénéficiant de la sécurité du typage. C’est une base solide pour les projets complexes, notamment avec Angular.