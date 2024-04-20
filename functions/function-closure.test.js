// function-closure.test.js
// 4/20/2024
// Rich W.
// with
// GitHub Copilot

function createCounter() {
    let count = 0;
    return function() {
        count += 1;
        return count;
    }
}

describe('createCounter', () => {
    test('should return a function that increments and returns a count', () => {
        const counter = createCounter();
        expect(counter()).toBe(1);
        expect(counter()).toBe(2);
        expect(counter()).toBe(3);
    });
});