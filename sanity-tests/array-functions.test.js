// array-functions.test.js
// started Dec.23,2025
// Rich W.
// with
// GitHub Copilot

describe('Array.prototype.reverse', () => {
	test('reverses the array in place', () => {
		const arr = [1, 2, 3];
		const result = arr.reverse();
		expect(result).toEqual([3, 2, 1]);
		expect(arr).toEqual([3, 2, 1]); // in-place
	});
});

describe('Array.prototype.shift', () => {
	test('removes and returns the first element', () => {
		const arr = [1, 2, 3];
		const shifted = arr.shift();
		expect(shifted).toBe(1);
		expect(arr).toEqual([2, 3]);
	});
	test('returns undefined for empty array', () => {
		const arr = [];
		expect(arr.shift()).toBeUndefined();
	});
});

describe('Array.prototype.slice', () => {
	test('returns a shallow copy of a portion of an array', () => {
		const arr = [1, 2, 3, 4];
		expect(arr.slice(1, 3)).toEqual([2, 3]);
		expect(arr.slice(2)).toEqual([3, 4]);
		expect(arr.slice()).toEqual([1, 2, 3, 4]);
	});
	test('does not modify the original array', () => {
		const arr = [1, 2, 3];
		arr.slice(1);
		expect(arr).toEqual([1, 2, 3]);
	});
});

describe('Array.prototype.some', () => {
	test('returns true if at least one element passes the test', () => {
		const arr = [1, 2, 3];
		expect(arr.some(x => x > 2)).toBe(true);
	});
	test('returns false if no elements pass the test', () => {
		const arr = [1, 2, 3];
		expect(arr.some(x => x > 5)).toBe(false);
	});
});

describe('Array.prototype.sort', () => {
	test('sorts the array in place (default, as strings)', () => {
		const arr = [10, 2, 1];
		arr.sort();
		expect(arr).toEqual([1, 10, 2]);
	});
	test('sorts the array with a compare function', () => {
		const arr = [10, 2, 1];
		arr.sort((a, b) => a - b);
		expect(arr).toEqual([1, 2, 10]);
	});
});

describe('Array.prototype.splice', () => {
	test('removes elements and returns them', () => {
		const arr = [1, 2, 3, 4];
		const removed = arr.splice(1, 2);
		expect(removed).toEqual([2, 3]);
		expect(arr).toEqual([1, 4]);
	});
	test('inserts elements at a given index', () => {
		const arr = [1, 4];
		arr.splice(1, 0, 2, 3);
		expect(arr).toEqual([1, 2, 3, 4]);
	});
});

describe('Array.prototype.unshift', () => {
	test('adds elements to the beginning and returns new length', () => {
		const arr = [3, 4];
		const len = arr.unshift(1, 2);
		expect(len).toBe(4);
		expect(arr).toEqual([1, 2, 3, 4]);
	});
	test('works with empty array', () => {
		const arr = [];
		arr.unshift('a');
		expect(arr).toEqual(['a']);
	});
});


