
// tautologies.test.js
// started 3/22/2024
// Rich W.


test('template', () => {
    const testName = expect.getState().currentTestName;
    expect(testName).toBe('template');
});

test('no parameter argument is no parameter argument', () => {
    expect().toBe();
});

test('true is true', () => {
    expect(true).toBe(true);
});

test('false is false', () => {
    expect(false).toBe(false);
});

test('1 is 1', () => {
    expect(1).toBe(1);
});

test('0 is 0', () => {
    expect(0).toBe(0);
});

test('-1 is -1', () => {
    expect(-1).toBe(-1);
});

test('null is null', () => {
    expect(null).toBe(null);
});

test('undefined is undefined', () => {
    expect(undefined).toBe(undefined);
});

test('string is string', () => {
    expect("string").toBe("string");
});

test('typeof string is string', () => {
    expect(typeof "string").toBe('string');
});