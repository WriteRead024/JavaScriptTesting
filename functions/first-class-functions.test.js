// first-class-functions.test.js
// 4/20/2024
// 4/21/2024
// Rich W.
// with
// GitHub Copilot


function createMultiplier(multiplier) {
    return function(num) {
        return num * multiplier;
    }
}

describe('createMultiplier', () => {
    test('should return a function', () => {
        const result = createMultiplier(1);
        expect(typeof result).toBe('function');
    });

    test('should return a function that multiplies its argument by the original multiplier', () => {
        const multiplyByTwo = createMultiplier(2);
        expect(multiplyByTwo(5)).toBe(10);

        const multiplyByThree = createMultiplier(3);
        expect(multiplyByThree(5)).toBe(15);
    });
});