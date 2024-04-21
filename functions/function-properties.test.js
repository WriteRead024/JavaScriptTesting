// function-properties.test.js
// 4/21/2024
// Rich W.
// with
// GitHub Copilot

describe('Function objects', () => {
    test('can access their external properties', () => {
        let func = function() { return func.prop; };
        expect(func()).toBe(undefined);
        func.prop = 'value';
        expect(func()).toBe('value');
    });

    test('can access external properties from "call" method assigned "this" context', () => {
        let func = function() { return this.prop; };
        expect(func.call(func)).toBe(undefined);
        func.prop = 'value';
        expect(func.call(func)).toBe('value');
    });
});