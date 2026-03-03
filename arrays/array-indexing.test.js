
// array-indexing.test.js
// started Mar.3,2026
// GitHub Copilot
// for
// Rich W.

describe('Array indexOf', () => {
    test('finds index of existing element', () => {
        const arr = [10, 20, 30, 40];
        expect(arr.indexOf(30)).toBe(2);
    });

    test('returns -1 for non-existing element', () => {
        const arr = [10, 20, 30, 40];
        expect(arr.indexOf(99)).toBe(-1);
    });

    test('finds first occurrence of duplicate', () => {
        const arr = [5, 10, 5, 20];
        expect(arr.indexOf(5)).toBe(0);
    });
});

describe('Array at', () => {
    test('returns element at positive index', () => {
        const arr = ['a', 'b', 'c', 'd'];
        expect(arr.at(2)).toBe('c');
    });

    test('returns element at negative index', () => {
        const arr = ['a', 'b', 'c', 'd'];
        expect(arr.at(-1)).toBe('d');
        expect(arr.at(-2)).toBe('c');
    });

    test('returns undefined for out-of-bounds index', () => {
        const arr = [1, 2, 3];
        expect(arr.at(10)).toBeUndefined();
        expect(arr.at(-10)).toBeUndefined();
    });
});

describe('Array at function unusual argument values', () => {
    test('index is 0 (first element)', () => {
        const arr = [100, 200, 300];
        expect(arr.at(0)).toBe(100);
    });

    test('index is NaN', () => {
        const arr = [1, 2, 3];
        expect(arr.at(NaN)).toBe(1); // NaN is converted to 0
    });

    test('index is null', () => {
        const arr = [1, 2, 3];
        expect(arr.at(null)).toBe(1); // null is converted to 0
    });

    test('index is undefined', () => {
        const arr = [1, 2, 3];
        expect(arr.at(undefined)).toBe(1); // undefined is converted to 0
    });

    test('index is a string number', () => {
        const arr = [1, 2, 3];
        expect(arr.at('2')).toBe(3); // '2' is converted to 2
    });

    test('index is a non-numeric string', () => {
        const arr = [1, 2, 3];
        expect(arr.at('foo')).toBe(1); // 'foo' is NaN, so treated as 0
    });

    test('index is a float', () => {
        const arr = [10, 20, 30, 40];
        expect(arr.at(2.7)).toBe(30); // 2.7 is truncated to 2
        expect(arr.at(-1.9)).toBe(40); // -1.9 is truncated to -1
    });

    test('empty array with any index', () => {
        const arr = [];
        expect(arr.at(0)).toBeUndefined();
        expect(arr.at(-1)).toBeUndefined();
        expect(arr.at(100)).toBeUndefined();
    });

    test('single-element array with various indices', () => {
        const arr = [42];
        expect(arr.at(0)).toBe(42);
        expect(arr.at(-1)).toBe(42);
        expect(arr.at(1)).toBeUndefined();
        expect(arr.at(-2)).toBeUndefined();
    });
});