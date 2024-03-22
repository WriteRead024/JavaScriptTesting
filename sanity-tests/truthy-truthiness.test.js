
// truthy.truthiness.test.js
// started 3/22/2024
// Rich W.
// with
// GitHub Copilot

test('null is not truthy', () => {
    expect(null).not.toBeTruthy();
});

test('undefined is not falsy', () => {
    expect(undefined).not.toBeTruthy();
});

test('1 is truthy', () => {
    expect(1).toBeTruthy();
});

test('Number.EPSILON is truthy', () => {
    expect(Number.EPSILON).toBeTruthy();
});

test('Infinity is truthy', () => {
    expect(Infinity).toBeTruthy();
});

test('blank space string is truthy', () => {
    expect(' ').toBeTruthy();
});

test('true is truthy', () => {
    expect(true).toBeTruthy();
});

test('empty object is truthy', () => {
    expect({}).toBeTruthy();
});

test('empty array is truthy', () => {
    expect([]).toBeTruthy();
});

test('empty function is truthy', () => {
    expect(() => {}).toBeTruthy();
});

test('empty class is truthy', () => {
    expect(class {}).toBeTruthy();
});

