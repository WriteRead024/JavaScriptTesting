
// not-a-number.test.js
// started 3/22/2024
// additons 2/18/2026
// Rich W.
// with
// GitHub Copilot

test('NaN equals NaN is false', () => {
    expect(NaN == NaN).toBe(false);
});

test('NaN strictly equals NaN is false', () => {
    expect(NaN === NaN).toBe(false);
});

test('parseInt("string") is NaN', () => {
    expect(parseInt("string")).toBe(NaN);
});

test('parseFloat("string") is NaN', () => {
    expect(parseFloat("string")).toBe(NaN);
});

test('parseInt("123") is number', () => {
    expect(parseInt("123")).toBe(123);
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

test('isNaN(parseInt("123")) is false', () => {
    expect(isNaN(parseInt("123"))).toBe(false);
});

test('NaN is NaN', () => {
    expect(NaN).toBe(NaN);
});