// simple-generator.test.js
// 4/21/2024
// Rich W.
// with
// GitHub Copilot

function* idGenerator() {
    let id = 1;
    while (id <= 3) {
        yield id++;
    }
}

describe('idGenerator', () => {
    test('should generate a sequence of IDs', () => {
        const generator = idGenerator();
        expect(generator.next().value).toBe(1);
        expect(generator.next().value).toBe(2);
        expect(generator.next().value).toBe(3);
    });

    test('should be done after three next calls', () => {
        const generator = idGenerator();
        generator.next();
        generator.next();
        expect(generator.next().done).toBe(false);
        expect(generator.next().done).toBe(true);
    });

    test('typeof generator should be function', () => {
        expect(typeof idGenerator).toBe('function');
    });
});
