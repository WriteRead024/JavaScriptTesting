
// not-a-number.test.js
// started 3/22/2024
// Rich W.
// with
// GitHub Copilot

test('NaN equals NaN is false', () => {
    expect(NaN == NaN).toBe(false);
});

test('NaN strictly equals NaN is false', () => {
    expect(NaN === NaN).toBe(false);
});

test('parseFloat("string") is NaN', () => {
    expect(parseFloat("string")).toBe(NaN);
});

test('parseInt("string") is NaN', () => {
    expect(parseInt("string")).toBe(NaN);
});

test('typeof NaN is number', () => {
    expect(typeof NaN).toBe('number');
});

test('isNaN(parseInt("string")) is true', () => {
    expect(isNaN(parseInt("string"))).toBe(true);
});

test('isNaN(Number.NaN) is true', () => {
    expect(isNaN(Number.NaN)).toBe(true);
});

test('isNaN(parseInt("string")) is true', () => {
    expect(isNaN(parseInt("string"))).toBe(true);
});

test('NaN is NaN', () => {
    expect(NaN).toBe(NaN);
});