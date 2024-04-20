// chained-generator.test.js
// 4/20/2024
// Rich W.
// with
// GitHub Copilot


class ChainGenerator {
    constructor() {
        this.order = [];
        this.generator = this.chainGenerator();
    }

    *chainGenerator() {
        yield 'first';
        yield 'second';
        yield 'third';
    }

    next() {
        const result = this.generator.next();
        if (!result.done) {
            this.order.push(result.value);
        }
        return this;
    }
}

describe('ChainGenerator class', () => {
    let chaingenerator;

    beforeEach(() => {
        chaingenerator = new ChainGenerator();
    });

    test('methods should be called in the correct order', () => {
        chaingenerator.next().next().next();
        expect(chaingenerator.order).toEqual(['first', 'second', 'third']);
    });
});