# simple-bool

A simple set of functions that return a boolean.

## Highlights
* Supports TypeScript!
* Supports Node and browser
* Includes full JSDoc documentation
* Very lightweight!

## Installation
### NodeJS
```
npm install simple-bool --save
```

### Browser
Import the script:
```html
<script src="https://joker876.github.io/simple-bool/simple-bool.min.js">
```
And import the functions from a global object:
```js
SimpleBool.isDefined();
// or
const { isDefined, isNumber, ... } = SimpleBool;
```

## Usage

```typescript
import * from 'simple-bool';
// or
import { /* function names here */ } from 'simple-bool';
```

### Available functions
#### isDefined
```typescript
isDefined(value: any): boolean
```
Returns `false` if the value is `undefined` or `null`. Otherwise returns `true`.

#### isNull
```typescript
isNull(value: any): boolean
```
Returns `true` if the value is `null`. Otherwise returns `false`.

#### isBoolean
```typescript
isBoolean(value: any): boolean
```
Returns `true` if the value is `true` or `false`. Otherwise returns `false`.

#### isAnyString
```typescript
isAnyString(value: any): boolean
```
Returns `true` if the value is of type `string`. Otherwise returns `false`.

#### isString
```typescript
isString(value: any): boolean
```
Returns `true` if the value is of type `string`, and is not an empty string. Otherwise returns `false`.

#### isNumber
```typescript
isNumber(value: any): boolean
```
Returns `true` if the value is of type `number`, and is not a `NaN`. Otherwise returns `false`.

#### isInt
```typescript
isInt(value: any): boolean
```
Returns `true` if the value [is a number](#isnumber), and it **doesn't** have any decimal places. Otherwise returns `false`.

#### isFloat
```typescript
isFloat(value: any): boolean
```
Returns `true` if the value [is a number](#isnumber), and it **does** have some decimal places. Otherwise returns `false`.

#### isObject
```typescript
isObject(value: any): boolean
```
Returns `true` if the value is of type `object`, and [is defined](#isdefined). Otherwise returns `false`.

#### isArray
```typescript
isArray(value: any): boolean
```
Returns `true` if the value is an array. Otherwise returns `false`.

#### isEmpty
```typescript
isEmpty(value: object | string): boolean
```
Returns `true` if:
* the value is a string, and its length is greater than 0,
* the value is an array, and it has at least 1 item,
* the value is an object, and it has at least 1 key.

Otherwise returns `false`.

#### isClassDeclaration
```typescript
isClassDeclaration(value: any): boolean
```
Returns `true` if the value is a class declaration. Otherwise returns `false`. All native classes will return `false`.

Example:
```typescript
class Example {
    constructor() {}
}

isClassDeclaration(Example); // -> true
isClassDeclaration(RegExp);  // -> false
```

#### isInstanceOf
```typescript
isInstanceOf(value: any, cls: Function): boolean
```
Returns `true` if the value is an instance of the class *cls*. Otherwise returns `false`.

#### isPromise
```typescript
isPromise(value: any): boolean
```
Returns `true` if the value is a Promise. Otherwise returns `false`.

#### isFunction
```typescript
isFunction(value: any): boolean
```
Returns `true` if the value [is an instance of](#isinctanceof) Function. Otherwise returns `false`.

All standard functions, arrow functions, classes, constructors, etc. count towards being a Function.

#### isRegExp
```typescript
isRegExp(value: any): boolean
```
Returns `true` if the value is a regular expression. Otherwise returns `false`.

#### isDate
```typescript
isDate(value: any): boolean
```
Returns `true` if the value is [is an instance of](#isinctanceof) Date, or can be parsed into a valid Date. Otherwise returns `false`.

All numbers return `true` when passed into `isDate`.

#### hasProp
```typescript
hasProp(value: any, property: PropertyKey): boolean
```
Returns `true` if the value is an object which has a certain property *property*. Otherwise returns `false`.

#### evaluate
```typescript
evaluate(value: any): boolean
```
Returns `true` if:
* the value is equal to `true`,
* the value is a number, and is not 0,
* the value is an array, and it has at least 1 item,
* the value is an object, and it has at least 1 key,
* the value is any of those strings: (case insensitive)
  ```typescript
  'yes', 'y', '1', 't', 'true', 'on', 'sure'
  ```

Otherwise returns `Boolean(value)`.

#### all
```typescript
all<T>(array: T[], fn: (value: T) => boolean = Boolean): boolean
```
Firstly, it flattens the given *array*.

For each item in *array*, it calls *fn* and passes the item.

It counts the times *fn* returns either `true` or `false`.

At the end, it returns `true` only if *fn* returned `true` for all items. Otherwise returns `false`.

#### most
```typescript
most<T>(array: T[], fn: (value: T) => boolean = Boolean): boolean
```
Firstly, it flattens the given *array*.

For each item in *array*, it calls *fn* and passes the item.

It counts the times *fn* returns either `true` or `false`.

At the end, it returns `true` only if *fn* returned `true` for at least 50% of all items. Otherwise returns `false`.

#### any
```typescript
any<T>(array: T[], fn: (value: T) => boolean = Boolean): boolean
```
Firstly, it flattens the given *array*.

For each item in *array*, it calls *fn* and passes the item.

It counts the times *fn* returns either `true` or `false`.

At the end, it returns `true` if *fn* returned `true` for at least 1 item. Otherwise returns `false`.

#### none
```typescript
none<T>(array: T[], fn: (value: T) => boolean = Boolean): boolean
```
Firstly, it flattens the given *array*.

For each item in *array*, it calls *fn* and passes the item.

It counts the times *fn* returns either `true` or `false`.

At the end, it returns `true` only if *fn* returned `false` for all items. Otherwise returns `false`.

#### some
```typescript
some<T>(array: T[], threshold: number, fn: (value: T) => boolean = Boolean): boolean
```
Firstly, it flattens the given *array*.

For each item in *array*, it calls *fn* and passes the item.

It counts the times *fn* returns either `true` or `false`.

At the end, it compares these amounts to the threshold:
* if the threshold is less than or equal to 0, it always returns `true`,
* if the threshold is between 0 and 1 (non-inclusive), it is treated as a percetage, and it returns `true` only if *fn* returned `true` at least that many percent of all executions,
* if the threshold is greater than or equal to 1, it returns `true` only if *fn* returned `true` at least that many times.

In all other cases, it returns `false`.