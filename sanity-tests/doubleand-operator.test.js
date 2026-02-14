
// doubleand-operator.test.js
// started Feb.14,2026
// GitHub Copilot
// for
// Rich W.


describe('&& operator with falsy and truthy values', () => {
    test('returns first falsy value (null)', () => {
        expect(null && 'right').toBe(null);
    });
    test('returns first falsy value (0)', () => {
        expect(0 && 'right').toBe(0);
    });
    test('returns first falsy value (empty string)', () => {
        expect('' && 'right').toBe('');
    });
    test('returns first falsy value (undefined)', () => {
        expect(undefined && 'right').toBe(undefined);
    });
    test('returns second value if first is truthy (number)', () => {
        expect(1 && 'right').toBe('right');
    });
    test('returns second value if first is truthy (non-empty string)', () => {
        expect('left' && 42).toBe(42);
    });
    test('returns second value if first is truthy (object)', () => {
        expect({} && 'truthy').toBe('truthy');
    });
    test('returns second value if first is truthy (string value)', () => {
        expect([1,2] && 'string value').toBe('string value');
    });
});

