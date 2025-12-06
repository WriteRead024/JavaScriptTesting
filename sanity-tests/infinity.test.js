
// infinity.test.js
// started 12/6/2025
// Rich W.
// with
// GitHub Copilot



test('POSITIVE_INFINITY is greater than 2 is true', () => {
    expect(Number.POSITIVE_INFINITY > 2).toBe(true);
});

test('POSITIVE_INFINITY is less than 2 is false', () => {
    expect(Number.POSITIVE_INFINITY < 2).toBe(false);
});


// Copilot tests below

test('POSITIVE_INFINITY is greater than NEGATIVE_INFINITY', () => {
    expect(Number.POSITIVE_INFINITY > Number.NEGATIVE_INFINITY).toBe(true);
});

test('NEGATIVE_INFINITY is less than POSITIVE_INFINITY', () => {
    expect(Number.NEGATIVE_INFINITY < Number.POSITIVE_INFINITY).toBe(true);
});

test('NEGATIVE_INFINITY is less than any finite number', () => {
    expect(Number.NEGATIVE_INFINITY < -1e308).toBe(true);
    expect(Number.NEGATIVE_INFINITY < 0).toBe(true);
    expect(Number.NEGATIVE_INFINITY < 1e308).toBe(true);
});

test('POSITIVE_INFINITY is greater than any finite number', () => {
    expect(Number.POSITIVE_INFINITY > 1e308).toBe(true);
    expect(Number.POSITIVE_INFINITY > 0).toBe(true);
    expect(Number.POSITIVE_INFINITY > -1e308).toBe(true);
});

test('POSITIVE_INFINITY equals itself', () => {
    expect(Number.POSITIVE_INFINITY === Number.POSITIVE_INFINITY).toBe(true);
});

test('NEGATIVE_INFINITY equals itself', () => {
    expect(Number.NEGATIVE_INFINITY === Number.NEGATIVE_INFINITY).toBe(true);
});

test('POSITIVE_INFINITY is not finite', () => {
    expect(Number.isFinite(Number.POSITIVE_INFINITY)).toBe(false);
});

test('NEGATIVE_INFINITY is not finite', () => {
    expect(Number.isFinite(Number.NEGATIVE_INFINITY)).toBe(false);
});


