
// doubleand-operator.test.js
// started Feb.14,2026
// added and clarified Feb.18,2026
// Rich W.
// with
// GitHub Copilot


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
    test('returns first falsy value (NaN)', () => {
        expect(NaN && 'right').toBe(NaN);
    });
    test('returns second value if first is truthy and second is falsy (null)', () => {
        expect(1 && null).toBe(null);
    });
    test('returns second value if first is truthy and second is falsy (0)', () => {
        expect(1 && 0).toBe(0);
    });
    test('returns second value if first is truthy and second is falsy (empty string)', () => {
        expect(1 && '').toBe('');
    });
    test('returns second value if first is truthy and second is falsy (undefined)', () => {
        expect(1 && undefined).toBe(undefined);
    });
    test('returns second value if first is truthy and second is falsy (NaN)', () => {
        expect(1 && NaN).toBe(NaN);
    });
    test('returns second value if both are truthy (number)', () => {
        expect(1 && 'right').toBe('right');
    });
    test('returns second value if both are truthy (non-empty string)', () => {
        expect('left' && 42).toBe(42);
    });
    test('returns second value if both are truthy (object)', () => {
        expect({} && 'truthy').toBe('truthy');
    });
    test('returns second value if both are truthy (string value)', () => {
        expect([1,2] && 'string value').toBe('string value');
    });
});

