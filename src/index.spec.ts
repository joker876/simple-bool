import { isBoolean, isDefined, isNull, isPrimitive, isString, isNumber, isInt, isFloat, isObject, isArray, isEmpty, isClassDeclaration, isInstanceOf, isPromise, isFunction, isRegExp, isDate, hasProp, evaluate, all, most, any, none, some, isAnyString } from './index.js';

describe('isDefined', () => {
    it('should be defined', () => {
        expect(isDefined).toBeTruthy();
        expect(isDefined).toBeInstanceOf(Function);
    });
    it('should return false when passed undefined or null', () => {
        [
            null,
            undefined,
        ].forEach(v => expect(isDefined(v)).toBeFalse());
    });
    it('should return true when passed anything else', () => {
        [
            true,
            false,
            1,
            0,
            -20,
            4.56,
            '',
            'foo',
            [],
            [null],
            ['abc', 9, undefined],
            {},
            { id: 4 },
            () => {},
            Math.min,
            Date,
            /^.c+$/g,
            Symbol('foo'),
            class {},
        ].forEach(v => expect(isDefined(v)).toBeTrue());
    });
});
describe('isNull', () => {
    it('should be defined', () => {
        expect(isNull).toBeTruthy();
        expect(isNull).toBeInstanceOf(Function);
    });
    it('should return true when passed null', () => {
        [
            null,
        ].forEach(v => expect(isNull(v)).toBeTrue());
    });
    it('should return false when passed anything else', () => {
        [
            undefined,
            true,
            false,
            1,
            0,
            -20,
            4.56,
            '',
            'foo',
            [],
            [null],
            ['abc', 9, undefined],
            {},
            { id: 4 },
            () => {},
            Math.min,
            Date,
            /^.c+$/g,
            Symbol('foo'),
            class {},
        ].forEach(v => expect(isNull(v)).toBeFalse());
    });
});
describe('isPrimitive', () => {
    it('should be defined', () => {
        expect(isPrimitive).toBeTruthy();
        expect(isPrimitive).toBeInstanceOf(Function);
    });
    it('should return true when passed a primitve value', () => {
        [
            null,
            undefined,
            true,
            false,
            1,
            0,
            -20,
            4.56,
            '',
            'foo',
            Symbol('foo'),
        ].forEach(v => expect(isPrimitive(v)).toBeTrue());
    });
    it('should return false when passed anything else', () => {
        [
            [],
            [null],
            ['abc', 9, undefined],
            {},
            { id: 4 },
            () => {},
            Math.min,
            Date,
            /^.c+$/g,
            class {},
        ].forEach(v => expect(isPrimitive(v)).toBeFalse());
    });
});
describe('isBoolean', () => {
    it('should be defined', () => {
        expect(isBoolean).toBeTruthy();
        expect(isBoolean).toBeInstanceOf(Function);
    });
    it('should return true when passed a boolean', () => {
        [
            true,
            false,
        ].forEach(v => expect(isBoolean(v)).toBeTrue());
    });
    it('should return false when passed anything else', () => {
        [
            null,
            undefined,
            1,
            0,
            -20,
            4.56,
            '',
            'foo',
            [],
            [null],
            ['abc', 9, undefined],
            {},
            { id: 4 },
            () => {},
            Math.min,
            Date,
            /^.c+$/g,
            Symbol('foo'),
            class {},
        ].forEach(v => expect(isBoolean(v)).toBeFalse());
    });
});
describe('isAnyString', () => {
    it('should be defined', () => {
        expect(isAnyString).toBeTruthy();
        expect(isAnyString).toBeInstanceOf(Function);
    });
    it('should return true when passed a string (including empty string)', () => {
        [
            'foo',
            '',
        ].forEach(v => expect(isAnyString(v)).toBeTrue());
    });
    it('should return false when passed anything else', () => {
        [
            null,
            undefined,
            true,
            false,
            1,
            0,
            -20,
            4.56,
            [],
            [null],
            ['abc', 9, undefined],
            {},
            { id: 4 },
            () => {},
            Math.min,
            Date,
            /^.c+$/g,
            Symbol('foo'),
            class {},
        ].forEach(v => expect(isString(v)).toBeFalse());
    });
});
describe('isString', () => {
    it('should be defined', () => {
        expect(isString).toBeTruthy();
        expect(isString).toBeInstanceOf(Function);
    });
    it('should return true when passed a string', () => {
        [
            'foo',
        ].forEach(v => expect(isString(v)).toBeTrue());
    });
    it('should return false when passed anything else (including empty string)', () => {
        [
            null,
            undefined,
            true,
            false,
            1,
            0,
            -20,
            4.56,
            '',
            [],
            [null],
            ['abc', 9, undefined],
            {},
            { id: 4 },
            () => {},
            Math.min,
            Date,
            /^.c+$/g,
            Symbol('foo'),
            class {},
        ].forEach(v => expect(isString(v)).toBeFalse());
    });
});
describe('isNumber', () => {
    it('should be defined', () => {
        expect(isNumber).toBeTruthy();
        expect(isNumber).toBeInstanceOf(Function);
    });
    it('should return true when passed a number', () => {
        [
            1,
            0,
            -20,
            4.56,
        ].forEach(v => expect(isNumber(v)).toBeTrue());
    });
    it('should return false when passed anything else', () => {
        [
            null,
            undefined,
            true,
            false,
            '',
            'foo',
            [],
            [null],
            ['abc', 9, undefined],
            {},
            { id: 4 },
            () => {},
            Math.min,
            Date,
            /^.c+$/g,
            Symbol('foo'),
            class {},
        ].forEach(v => expect(isNumber(v)).toBeFalse());
    });
});
describe('isInt', () => {
    it('should be defined', () => {
        expect(isInt).toBeTruthy();
        expect(isInt).toBeInstanceOf(Function);
    });
    it('should return true when passed an int', () => {
        [
            1,
            0,
            -20,
        ].forEach(v => expect(isInt(v)).toBeTrue());
    });
    it('should return false when passed anything else', () => {
        [
            null,
            undefined,
            true,
            false,
            4.56,
            '',
            'foo',
            [],
            [null],
            ['abc', 9, undefined],
            {},
            { id: 4 },
            () => {},
            Math.min,
            Date,
            /^.c+$/g,
            Symbol('foo'),
            class {},
        ].forEach(v => expect(isInt(v)).toBeFalse());
    });
});
describe('isFloat', () => {
    it('should be defined', () => {
        expect(isFloat).toBeTruthy();
        expect(isFloat).toBeInstanceOf(Function);
    });
    it('should return true when passed a floating-point number', () => {
        [
            4.56,
        ].forEach(v => expect(isFloat(v)).toBeTrue());
    });
    it('should return false when passed anything else', () => {
        [
            null,
            undefined,
            true,
            false,
            1,
            0,
            -20,
            '',
            'foo',
            [],
            [null],
            ['abc', 9, undefined],
            {},
            { id: 4 },
            () => {},
            Math.min,
            Date,
            /^.c+$/g,
            Symbol('foo'),
            class {},
        ].forEach(v => expect(isFloat(v)).toBeFalse());
    });
});
describe('isObject', () => {
    it('should be defined', () => {
        expect(isObject).toBeTruthy();
        expect(isObject).toBeInstanceOf(Function);
    });
    it('should return true when passed an object', () => {
        [
            [],
            [null],
            ['abc', 9, undefined],
            {},
            { id: 4 },
            /^.c+$/g, // this is an instance of RegExp
        ].forEach(v => expect(isObject(v)).toBeTrue());
    });
    it('should return false when passed anything else (including null)', () => {
        [
            null,
            undefined,
            true,
            false,
            1,
            0,
            -20,
            4.56,
            '',
            'foo',
            () => {},
            Math.min,
            Date,
            Symbol('foo'),
            class {},
        ].forEach(v => expect(isObject(v)).toBeFalse());
    });
});
describe('isArray', () => {
    it('should be defined', () => {
        expect(isArray).toBeTruthy();
        expect(isArray).toBeInstanceOf(Function);
    });
    it('should return true when passed an array', () => {
        [
            [],
            [null],
            ['abc', 9, undefined],
        ].forEach(v => expect(isArray(v)).toBeTrue());
    });
    it('should return false when passed anything else', () => {
        [
            null,
            undefined,
            true,
            false,
            1,
            0,
            -20,
            4.56,
            '',
            'foo',
            {},
            { id: 4 },
            () => {},
            Math.min,
            Date,
            /^.c+$/g,
            Symbol('foo'),
            class {},
        ].forEach(v => expect(isArray(v)).toBeFalse());
    });
});
describe('isEmpty', () => {
    it('should be defined', () => {
        expect(isEmpty).toBeTruthy();
        expect(isEmpty).toBeInstanceOf(Function);
    });
    it('should return true when passed an empty string, array, or object', () => {
        [
            '',
            [],
            {},
        ].forEach(v => expect(isEmpty(v)).toBeTrue());
    });
    it('should return false when passed anything else', () => {
        [
            'foo',
            [null],
            ['abc', 9, undefined],
            { id: 4 },
            /^.c+$/g,
        ].forEach(v => expect(isEmpty(v)).toBeFalse());
    });
});
describe('isClassDeclaration', () => {
    it('should be defined', () => {
        expect(isClassDeclaration).toBeTruthy();
        expect(isClassDeclaration).toBeInstanceOf(Function);
    });
    it('should return true when passed a class declaration', () => {
        [
            class {},
        ].forEach(v => expect(isClassDeclaration(v)).toBeTrue());
    });
    it('should return false when passed anything else', () => {
        [
            null,
            undefined,
            true,
            false,
            1,
            0,
            -20,
            4.56,
            '',
            'foo',
            [],
            [null],
            ['abc', 9, undefined],
            {},
            { id: 4 },
            () => {},
            Math.min,
            Date, //this should return false because it's somehow not treated as a class
            /^.c+$/g,
            Symbol('foo'),
        ].forEach(v => expect(isClassDeclaration(v)).toBeFalse());
    });
});
describe('isInstanceOf', () => {
    it('should be defined', () => {
        expect(isInstanceOf).toBeTruthy();
        expect(isInstanceOf).toBeInstanceOf(Function);
    });
    it('should return true when passed a constructed object an its parent class', () => {
        ([
            [ new Number('5'), Number ],
            [ () => {}, Function ],
            [ Math.min, Function ],
            [ /^.c+$/g, RegExp ],
        ] as [any,any][]).forEach(v => expect(isInstanceOf(v[0], v[1])).toBeTrue());
    });
    it('should return false when passed the wrong pair', () => {
        [
            null,
            undefined,
            true,
            false,
            1,
            0,
            -20,
            4.56,
            '',
            'foo',
            [],
            [null],
            ['abc', 9, undefined],
            {},
            { id: 4 },
            () => {},
            Math.min,
            Date,
            /^.c+$/g,
            Symbol('foo'),
            class {},
        ].forEach(v => expect(isInstanceOf(v, Promise)).toBeFalse());
    });
});
describe('isPromise', () => {
    it('should be defined', () => {
        expect(isPromise).toBeTruthy();
        expect(isPromise).toBeInstanceOf(Function);
    });
    it('should return true when passed a promise', () => {
        [
            new Promise(() => {}),
        ].forEach(v => expect(isPromise(v)).toBeTrue());
    });
    it('should return false when passed anything else', () => {
        [
            null,
            undefined,
            true,
            false,
            1,
            0,
            -20,
            4.56,
            '',
            'foo',
            [],
            [null],
            ['abc', 9, undefined],
            {},
            { id: 4 },
            () => {},
            Math.min,
            Date,
            /^.c+$/g,
            Symbol('foo'),
            class {},
        ].forEach(v => expect(isPromise(v)).toBeFalse());
    });
});
describe('isFunction', () => {
    it('should be defined', () => {
        expect(isFunction).toBeTruthy();
        expect(isFunction).toBeInstanceOf(Function);
    });
    it('should return true when passed a function', () => {
        [
            () => {},
            Math.min,
            Date,
            class {},
        ].forEach(v => expect(isFunction(v)).toBeTrue());
    });
    it('should return false when passed anything else', () => {
        [
            null,
            undefined,
            true,
            false,
            1,
            0,
            -20,
            4.56,
            '',
            'foo',
            [],
            [null],
            ['abc', 9, undefined],
            {},
            { id: 4 },
            /^.c+$/g,
            Symbol('foo'),
        ].forEach(v => expect(isFunction(v)).toBeFalse());
    });
});
describe('isRegExp', () => {
    it('should be defined', () => {
        expect(isRegExp).toBeTruthy();
        expect(isRegExp).toBeInstanceOf(Function);
    });
    it('should return true when passed any regular expression', () => {
        [
            /^.c+$/g,
            new RegExp('#[0-9a-f]{6}', 'im'),
        ].forEach(v => expect(isRegExp(v)).toBeTrue());
    });
    it('should return false when passed anything else', () => {
        [
            null,
            undefined,
            true,
            false,
            1,
            0,
            -20,
            4.56,
            '',
            'foo',
            [],
            [null],
            ['abc', 9, undefined],
            {},
            { id: 4 },
            () => {},
            Math.min,
            Date,
            Symbol('foo'),
            class {},
        ].forEach(v => expect(isRegExp(v)).toBeFalse());
    });
});
describe('isDate', () => {
    it('should be defined', () => {
        expect(isDate).toBeTruthy();
        expect(isDate).toBeInstanceOf(Function);
    });
    it('should return true when passed any valid date', () => {
        [
            null,
            true,
            false,
            1,
            0,
            -20,
            4.56,
            ['abc', 9, undefined], //this, somehow, forms a valid date ¯\_(ツ)_/¯
            new Date(),
            new Date(-1),
            new Date('2020-11-06'),
            new Date('1756-05-31T22:36:00.000Z'),
        ].forEach(v => expect(isDate(v)).toBeTrue());
    });
    it('should return false when passed anything else', () => {
        [
            undefined,
            '',
            'foo',
            [],
            [null],
            {},
            { id: 4 },
            () => {},
            Math.min,
            Date,
            /^.c+$/g,
            class {},
            new Date('an invalid date here'),
        ].forEach(v => expect(isDate(v)).toBeFalse());
    });
});
describe('hasProp', () => {
    it('should be defined', () => {
        expect(hasProp).toBeTruthy();
        expect(hasProp).toBeInstanceOf(Function);
    });
    it('should return true when passed an object and one of its property names', () => {
        ([
            [ { id: 4 }, 'id' ],
        ] as [any, string][]).forEach(v => expect(hasProp(v[0], v[1])).toBeTrue());
    });
    it("should return false when passed an object and a property name it doesn't have", () => {
        ([
            [{ id: 4 }, 'foo'],
            [/^.c+$/g, 'lasagne'],
        ] as [any, string][]).forEach(v => expect(hasProp(v[0], v[1])).toBeFalse());
    });
});
describe('evaluate', () => {
    it('should be defined', () => {
        expect(evaluate).toBeTruthy();
        expect(evaluate).toBeInstanceOf(Function);
    });
    it('should return true when passed a truthy value', () => {
        [
            true,
            1,
            -20,
            4.56,
            [null],
            ['abc', 9, undefined],
            { id: 4 },
            () => {},
            Math.min,
            Date,
            Symbol('foo'),
            'yes',
            'YEs',
            'y',
            'Y',
            '1',
            't',
            'T',
            'true',
            'TruE',
            'on',
            'oN',
            'sure',
            'sURe',
        ].forEach(v => expect(evaluate(v)).toBeTrue());
    });
    it('should return false when passed anything else', () => {
        [
            null,
            undefined,
            false,
            0,
            '',
            'foo',
            [],
            {},
        ].forEach(v => expect(evaluate(v)).toBeFalse());
    });
});
describe('all', () => {
    it('should be defined', () => {
        expect(all).toBeTruthy();
        expect(all).toBeInstanceOf(Function);
    });
    it('should return true when passed an array of defined values', () => {
        expect(all([
            true,
            false,
            1,
            0,
            -20,
            4.56,
            '',
            'foo',
        ], isDefined)).toBeTrue();
    });
    it('should return false when passed an array containing at least one undefined value', () => {
        expect(all([
            1,
            0,
            -20,
            4.56,
            '',
            null,
            'foo',
            [],
            [null],
            ['abc', 9, undefined],
            {},
            { id: 4 },
            () => {  },
            Math.min,
            Date,
            /^.c+$/g,
            Symbol('foo'),
            undefined,
        ], isDefined)).toBeFalse();
    });
});
describe('most', () => {
    it('should be defined', () => {
        expect(most).toBeTruthy();
        expect(most).toBeInstanceOf(Function);
    });
    it('should return true when passed an array of mostly defined values', () => {
        expect(most([
            true,
            false,
            undefined,
            1,
            0,
            -20,
            null,
            4.56,
            '',
            'foo',
        ], isDefined)).toBeTrue();
    });
    it('should return false when passed an array containing mostly undefined values', () => {
        expect(most([
            undefined,
            1,
            null,
            null,
            0,
            Date,
            undefined,
            null,
        ], isDefined)).toBeFalse();
    });
});
describe('any', () => {
    it('should be defined', () => {
        expect(any).toBeTruthy();
        expect(any).toBeInstanceOf(Function);
    });
    it('should return true when passed an array containing at least one defined value', () => {
        expect(any([
            undefined,
            1,
            undefined,
            null,
            undefined,
            null,
            'foo',
            undefined,
            undefined,
            undefined,
            null,
        ], isDefined)).toBeTrue();
    });
    it('should return false when passed an array containing only undefined values', () => {
        expect(any([
            undefined,
            null,
            null,
            undefined,
            null,
        ], isDefined)).toBeFalse();
    });
});
describe('none', () => {
    it('should be defined', () => {
        expect(none).toBeTruthy();
        expect(none).toBeInstanceOf(Function);
    });
    it('should return true when passed an array containing only undefined values', () => {
        expect(none([
            undefined,
            undefined,
            null,
            undefined,
            null,
            undefined,
            undefined,
            undefined,
            null,
        ], isDefined)).toBeTrue();
    });
    it('should return false when passed an array containing at least one defined values', () => {
        expect(none([
            undefined,
            null,
            Math.min,
            null,
            undefined,
            null,
        ], isDefined)).toBeFalse();
    });
});
describe('some', () => {
    it('should be defined', () => {
        expect(some).toBeTruthy();
        expect(some).toBeInstanceOf(Function);
    });
    it('should return true when passed an array containing at least 40% defined values', () => {
        expect(some([
            undefined,
            null,
            5,
            undefined,
            'foo',
            null,
            [],
            Math.min,
            class {},
        ], 0.4, isDefined)).toBeTrue();
    });
    it('should return true when passed an array containing at least 3 defined values', () => {
        expect(some([
            undefined,
            null,
            null,
            5,
            undefined,
            'foo',
            null,
            undefined,
            undefined,
            [],
            Math.min,
            null,
            undefined,
            undefined,
            undefined,
            undefined,
            null,
            null,
            null,
            undefined,
            undefined,
            undefined,
            null,
            undefined,
        ], 3, isDefined)).toBeTrue();
    });
});