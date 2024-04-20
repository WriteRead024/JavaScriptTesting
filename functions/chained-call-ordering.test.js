// falsy.truthiness.test.js
// 4/20/2024
// Rich W.
// with
// GitHub Copilot


class Chain {
    constructor() {
        this.order = [];
    }

    first() {
        this.order.push('first');
        return this;
    }

    second() {
        this.order.push('second');
        return this;
    }

    third() {
        this.order.push('third');
        return this;
    }
}

describe('Chain class', () => {
    let chain;

    beforeEach(() => {
        chain = new Chain();
    });

    test('methods should be called in the correct order', () => {
        chain.first().second().third();
        expect(chain.order).toEqual(['first', 'second', 'third']);
    });
});