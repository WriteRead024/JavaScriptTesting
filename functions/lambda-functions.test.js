// lambda-functions.test.js
// started 4/21/2024
// Rich W.
// with
// GitHub Copilot

describe('Lambda functions', () => {
    test('should be able to have properties', () => {
        let lambda = () => {};
        lambda.prop = 'value';
        expect(lambda.prop).toBe('value');
    });

    test('should be able to access its own properties', () => {
        let lambda = () => lambda.prop;
        lambda.prop = 'value';
        expect(lambda()).toBe('value');
    });

    test('have call methods that work normally', () => {
        let lambda = () => { return "property " + this.prop; };
        expect(typeof lambda.call).toBe('function');
        lambda.prop = 'value';
        expect(lambda.call()).toBe('property undefined');
    });

    test('cannot access own properties in the method', () => {
        let lambda = function() { return "property " + this.prop; };
        expect(lambda()).toBe('property undefined');
        lambda.prop = 'value';
        expect(lambda()).not.toBe('property value');
        expect(lambda()).toBe('property undefined');
    });
});