// iife-function.test.js
// 4/20/2024
// Rich W.
// with
// GitHub Copilot

const result = (function(a, b) {
    return a + b;
})(3, 4); // This IIFE adds 3 and 4

describe('IIFE', () => {
    test('should correctly add two numbers', () => {
        expect(result).toBe(7);
    });
});