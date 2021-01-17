# Learning Typescript.

[TypeScript](https://www.typescriptlang.org/) extends JavaScript by adding types.
TypeScript stands in an unusual relationship to JavaScript. TypeScript offers all of JavaScript’s features, and an additional layer on top of these: TypeScript’s type system.

## Installing typescript

Typescript can be installed using npm.

```bash
npm install -g typescript
```

### Types

These are the [**supported types**](https://www.typescriptlang.org/docs/handbook/basic-types.html) in typescript:

- Boolean
- String
- Number
- Array
- Tuple
- Enum
- Unknown
- Any
- Void
- Null and Undefined
- Never
- Object

Two different categories of types:

- primitive types
  - primitive types are number, string, boolean, void, null, symbol,undefined.
- object types
  - object types are functions, arrays, classes, objects.

`Type annotations` - Code added to tell typescript what type of value a variable will refer to.

`Type inference` - Typescript tries to figure out what type of value a variable refers to.

        Variable declaration            Variable Initialization
          const    color          =         'red';

> ### 📚 Note:
>
> If declaration and initialization are on the same line, Typescript will figure out {infer} the type of 'color' for us.

**Typed Arrays:**
Arrays where each element is some consistent type of value.

> ### 📚 Note:
>
> Best practice is that Empty arrays' `type` should be annotated.

**Tuples :**
Tuple types allow you to express an array with a fixed number of elements whose types are known, but need not be the same.

> Note: In realworld , tuples are not used very often.
