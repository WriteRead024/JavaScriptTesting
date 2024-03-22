
// falsy.truthiness.test.js
// started 3/22/2024
// Rich W.
// with
// GitHub Copilot

test('null is falsy', () => {
    expect(null).toBeFalsy();
});

test('undefined is falsy', () => {
    expect(undefined).toBeFalsy();
});

test('0 is falsy', () => {
    expect(0).toBeFalsy();
});

test('NaN is falsy', () => {
    expect(NaN).toBeFalsy();
});

test('empty string is falsy', () => {
    expect('').toBeFalsy();
});

test('false is falsy', () => {
    expect(false).toBeFalsy();
});

test('empty object is not falsy', () => {
    expect({}).not.toBeFalsy();
});

test('empty array is not falsy', () => {
    expect([]).not.toBeFalsy();
});

test('empty function is not falsy', () => {
    expect(() => {}).not.toBeFalsy();
});

test('empty class is not falsy', () => {
    expect(class {}).not.toBeFalsy();
});

test('expecting about an empty object attribute throws', () => {
    expect(() => { expect({}.attr).not.toBeFalsy() }).toThrow();
});