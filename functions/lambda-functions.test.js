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

    test('should be able to access its own properties in the method', () => {
        let lambda = function() { return "property " + this.prop; };
        expect(lambda.call(lambda)).toBe('property undefined');
        lambda.prop = 'value';
        expect(lambda.call(lambda)).toBe('property value');
    });
});