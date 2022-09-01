

export function isDefined(value: any): boolean {
    return value !== undefined && value !== null;
}

export function isNull(value: any): boolean {
    return value === null;
}

export function isBoolean(value: any): boolean {
    return typeof value == 'boolean';
}

export function isString(value: any): boolean {
    return typeof value == 'string' && value.length > 0;
}

export function isNumber(value: any): boolean {
    return typeof value == 'number' && !isNaN(value);
}

export function isInt(value: any): boolean {
    return isNumber(value) && value % 1 == 0;
}

export function isFloat(value: any): boolean {
    return isNumber(value) && value % 1 != 0;
}

export function isObject(value: any): boolean {
    return typeof value == 'object' && isDefined(value);
}

export function isArray(value: any): boolean {
    return Array.isArray(value);
}

export function isEmpty(value: object | string): boolean {
    if (typeof value == 'string' || Array.isArray(value)) return value.length > 0;
    return Object.keys(value).length > 0;
}

export function isClassDeclaration(value: any): boolean {
    return typeof value === 'function' && /^\s*class\s+/.test(value.toString());
}

export function isInstanceOf(value: any, cls: Function): boolean {
    return value instanceof cls;
}

export function isPromise(value: any): boolean {
    return value instanceof Promise;
}

export function isFunction(value: any): boolean {
    return value instanceof Function;
}

export function isRegExp(value: any): boolean {
    return value instanceof RegExp;
}

export function isDate(value: any): boolean {
    return value instanceof Date || !isNaN(new Date(value).valueOf());
}

export function hasProp(object: object, property: PropertyKey): boolean {
    if (isArray(object)) return false;
    return object.hasOwnProperty(property);
}

const BOOLISH_STRING_REGEX = /(y(es)?|1|t(rue)?|on|sure)/i
export function evaluate(value: any): boolean {
    if (isBoolean(value)) return value;
    if (isNumber(value)) return value != 0;
    if (isObject(value)) return !isEmpty(value);
    if (isString(value)) return BOOLISH_STRING_REGEX.test(value);
    return Boolean(value);
}

export function all<T>(array: T[], fn: (value: T) => boolean = Boolean): boolean {
    array = flatten(array);
    for (const el of array) {
        if (!fn(el)) return false;
    }
    return true;
}
export function most<T>(array: T[], fn: (value: T) => boolean = Boolean): boolean {
    array = flatten(array);
    let count = 0;
    for (const el of array) {
        if (fn(el)) count++;
    }
    return count >= array.length / 2;
}
export function any<T>(array: T[], fn: (value: T) => boolean = Boolean): boolean {
    array = flatten(array);
    for (const el of array) {
        if (fn(el)) return true;
    }
    return false;
}
export function none<T>(array: T[], fn: (value: T) => boolean = Boolean): boolean {
    array = flatten(array);
    for (const el of array) {
        if (fn(el)) return false;
    }
    return true;
}
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