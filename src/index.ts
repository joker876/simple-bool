/**
```typescript
isDefined(value: any): boolean
```
Returns `false` if the value is `undefined` or `null`. Otherwise returns `true`.
 */
export function isDefined(value: any): value is Defined {
  return value !== undefined && value !== null;
}
type Defined = {} | { [key: PropertyKey]: any };

/**
```typescript
isNull(value: any): boolean
```
Returns `true` if the value is `null`. Otherwise returns `false`.
 */
export function isNull(value: any): value is null {
  return value === null;
}

/**
```typescript
isPrimitive(value: any): boolean
```
Returns `true` if the value is of any of those types: `number` , `string` , `boolean` , `null` , `undefined` , `symbol` or `bigint`.

Otherwise returns `false`.
 */
export function isPrimitive(value: any): value is Primitive {
  return (
    typeof value == 'number' ||
    typeof value == 'string' ||
    typeof value == 'boolean' ||
    typeof value == 'symbol' ||
    typeof value == 'bigint' ||
    value === undefined ||
    value === null
  );
}
export type Primitive = number | string | boolean | undefined | null | symbol | bigint;

/**
```typescript
isBoolean(value: any): boolean
```
Returns `true` if the value is `true` or `false`. Otherwise returns `false`.
 */
export function isBoolean(value: any): value is boolean {
  return typeof value == 'boolean';
}
/**
```typescript
isString(value: any): boolean
```
Returns `true` if the value is of type `string`. Otherwise returns `false`.
 */
export function isAnyString(value: any): value is string {
  return typeof value == 'string';
}
/**
```typescript
isString(value: any): boolean
```
Returns `true` if the value is of type `string`, and is not an empty string. Otherwise returns `false`.
 */
export function isString(value: any): value is string {
  return typeof value == 'string' && value.length > 0;
}
/**
```typescript
isNumber(value: any): boolean
```
Returns `true` if the value is of type `number`, and is not a `NaN`. Otherwise returns `false`.
 */
export function isNumber(value: any): value is number {
  return typeof value == 'number' && !isNaN(value);
}
/**
```typescript
isInt(value: any): boolean
```
Returns `true` if the value is a number, and it **doesn't** have any decimal places. Otherwise returns `false`.
 */
export function isInt(value: any): value is number {
  return isNumber(value) && value % 1 == 0;
}
/**
```typescript
isFloat(value: any): boolean
```
Returns `true` if the value is a number, and it **does** have some decimal places. Otherwise returns `false`.
 */
export function isFloat(value: any): value is number {
  return isNumber(value) && value % 1 != 0;
}
/**
```typescript
isObject(value: any): boolean
```
Returns `true` if the value is of type `object`, and [is defined](#isdefined). Otherwise returns `false`.
 */
export function isObject(value: any): value is AnyObject {
  return typeof value == 'object' && isDefined(value);
}
export type AnyObject = { [key: PropertyKey]: any };
/**
```typescript
isArray(value: any): boolean
```
Returns `true` if the value is an array. Otherwise returns `false`.
 */
export function isArray<T>(value: any): value is T[] {
  return Array.isArray(value);
}
/**
```typescript
isEmpty(value: object | string): boolean
```
Returns `true` if:
* the value is a string, and its length is greater than 0,
* the value is an array, and it has at least 1 item,
* the value is an object, and it has at least 1 key.

Otherwise returns `false`.
 */
export function isEmpty(value: object | string): value is '' | [] | { [key: PropertyKey]: undefined } {
  if (typeof value == 'string' || Array.isArray(value)) return value.length == 0;
  if (value.constructor.name !== 'Object') return false;
  return Object.keys(value).length == 0;
}
/**

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
 */
export function isClassDeclaration(value: any): boolean {
  return typeof value === 'function' && /^\s*class\s+/.test(value.toString());
}
/**
```typescript
isInstanceOf(value: any, cls: Function): boolean
```
Returns `true` if the value is an instance of the class *cls*. Otherwise returns `false`.
 */
export function isInstanceOf<T extends Function>(value: any, cls: T): value is T {
  return value instanceof cls;
}
/**
```typescript
isPromise(value: any): boolean
```
Returns `true` if the value is a Promise. Otherwise returns `false`.
 */
export function isPromise<T>(value: any): value is Promise<T> {
  return value instanceof Promise;
}
/**
```typescript
isFunction(value: any): boolean
```
Returns `true` if the value [is an instance of](#isinctanceof) Function. Otherwise returns `false`.

All standard functions, arrow functions, classes, constructors, etc. count towards being a Function.
 */
export function isFunction(value: any): value is Function {
  return value instanceof Function;
}
/**
```typescript
isRegExp(value: any): boolean
```
Returns `true` if the value is a regular expression. Otherwise returns `false`.
 */
export function isRegExp(value: any): value is RegExp {
  return value instanceof RegExp;
}
/**
```typescript
isDate(value: any): boolean
```
Returns `true` if the value is [is an instance of](#isinctanceof) Date, or can be parsed into a valid Date. Otherwise returns `false`.

All numbers return `true` when passed into `isDate`.
 */
export function isDate(value: any): value is Date {
  return !isNaN(new Date(value).valueOf());
}
/**
```typescript
hasProp(value: any, property: PropertyKey): boolean
```
Returns `true` if the value is an object which has a certain property *property*. Otherwise returns `false`.
 */
export function hasProp(object: object, property: PropertyKey): boolean {
  if (isArray(object)) return false;
  return object.hasOwnProperty(property);
}

const BOOLISH_STRING_REGEX = /(y(es)?|1|t(rue)?|on|sure)/i;
/**
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
 */
export function evaluate(value: any): boolean {
  if (isBoolean(value)) return value;
  if (isNumber(value)) return value != 0;
  if (isObject(value)) return !isEmpty(value);
  if (isString(value)) return BOOLISH_STRING_REGEX.test(value);
  return Boolean(value);
}
/**
```typescript
all<T>(array: T[], fn: (value: T) => boolean = Boolean): boolean
```
Firstly, it flattens the given *array*.

For each item in *array*, it calls *fn* and passes the item.

It counts the times *fn* returns either `true` or `false`.

At the end, it returns `true` only if *fn* returned `true` for all items. Otherwise returns `false`.
 */
export function all<T>(array: T[], fn: (value: T) => boolean = Boolean): boolean {
  array = flatten(array);
  for (const el of array) {
    if (!fn(el)) return false;
  }
  return true;
}
/**
```typescript
most<T>(array: T[], fn: (value: T) => boolean = Boolean): boolean
```
Firstly, it flattens the given *array*.

For each item in *array*, it calls *fn* and passes the item.

It counts the times *fn* returns either `true` or `false`.

At the end, it returns `true` only if *fn* returned `true` for at least 50% of all items. Otherwise returns `false`.
 */
export function most<T>(array: T[], fn: (value: T) => boolean = Boolean): boolean {
  array = flatten(array);
  let count = 0;
  for (const el of array) {
    if (fn(el)) count++;
  }
  return count >= array.length / 2;
}
/**
```typescript
any<T>(array: T[], fn: (value: T) => boolean = Boolean): boolean
```
Firstly, it flattens the given *array*.

For each item in *array*, it calls *fn* and passes the item.

It counts the times *fn* returns either `true` or `false`.

At the end, it returns `true` if *fn* returned `true` for at least 1 item. Otherwise returns `false`.
 */
export function any<T>(array: T[], fn: (value: T) => boolean = Boolean): boolean {
  array = flatten(array);
  for (const el of array) {
    if (fn(el)) return true;
  }
  return false;
}
/**
```typescript
none<T>(array: T[], fn: (value: T) => boolean = Boolean): boolean
```
Firstly, it flattens the given *array*.

For each item in *array*, it calls *fn* and passes the item.

It counts the times *fn* returns either `true` or `false`.

At the end, it returns `true` only if *fn* returned `false` for all items. Otherwise returns `false`.
 */
export function none<T>(array: T[], fn: (value: T) => boolean = Boolean): boolean {
  array = flatten(array);
  for (const el of array) {
    if (fn(el)) return false;
  }
  return true;
}
/**
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
 */
export function some<T>(array: T[], threshold: number, fn: (value: T) => boolean = Boolean): boolean {
  array = flatten(array);
  if (threshold < 1 && isFloat(threshold)) threshold *= array.length;
  let count = 0;
  for (const el of array) {
    if (fn(el)) count++;
  }
  return count >= threshold;
}

function flatten(arr: any[]): any[] {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}
