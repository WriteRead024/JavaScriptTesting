// lambda-functions.test.js
// started 4/21/2024
// Rich W.
// with
// GitHub Copilot

describe('Lambda functions', () => {
    test('should be able to have properties', () => {
        let lambda = () => { };
        lambda.prop = 'value';
        expect(lambda.prop).toBe('value');
    });

    test('should be able to access its own properties', () => {
        let lambda = () => lambda.prop;
        lambda.prop = 'value';
        expect(lambda()).toBe('value');
    });

    test('have call methods that do not work normally', () => {
        let lambda = () => "property " + this.prop;
        expect(typeof lambda.call).toBe('function');
        expect(lambda.prop).toBe(undefined);
        lambda.prop = "value";
        expect(lambda.prop).toBe('value');
        expect(lambda.call(/* no argument value passed to call */)).toBe('property undefined');
        expect(lambda.call(lambda)).toBe('property undefined'); // not "property value"
        expect(lambda.call(lambda)).not.toBe("property value");
        // regular function object would return "property value"
    });

    test('do not work normally with bind method', () => {
        let lambda = () => "property " + this.prop;
        expect(typeof lambda.call).toBe('function');
        expect(lambda.prop).toBe(undefined);
        lambda.prop = "value";
        lambda.bind(lambda);
        expect(lambda()).not.toBe("property value");
        expect(lambda()).toBe("property undefined");
    });

    test('cannot access own properties in the method', () => {
        let lambda = () => "property " + this.prop;;
        expect(lambda()).toBe('property undefined');
        lambda.prop = 'value';
        expect(lambda()).not.toBe('property value');
        expect(lambda()).toBe('property undefined');
    });
});