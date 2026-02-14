
// array-functions.test.js
// started Dec.23,2025
// addition Feb.14,2026
// Rich W.
// with
// GitHub Copilot

describe('Array.forEach()', () => {
	test('does not assign function return to original array data', () => {
		const arr = ["a", "b", "c"];
		arr.forEach((arrval) => arrval + "fE");
		//expect(arr).toEqual(["afE", "bfE", "cfE"]); //no
		expect(arr).toEqual(["a", "b", "c"]);
	});
	test('can assign new values to original array data by index', () => {
		const arr = ["a", "b", "c"];
		arr.forEach((arrval, index) => arr[index] = arrval + "fE");
		expect(arr).toEqual(["afE", "bfE", "cfE"]);
	});
});

describe('Array.map()', () => {
	test("assigns called function's return value to new array data", () => {
		const arr = ["a", "b", "c"];
		const resultarr = arr.map((arrval) => arrval + "fE");
		expect(arr).toEqual(["a", "b", "c"]);
		expect(resultarr).toEqual(["afE", "bfE", "cfE"]);
	});
});

describe('Array.push() with spread syntax', () => {
	test('adds second array elements to first array and does not change second array', () => {
		const arr_one = [1, 2, 3];
		const arr_two = [4, 5, 6];
		arr_one.push(...arr_two.slice(1));
		expect(arr_one).toEqual([1, 2, 3, 5, 6]); // correctly missing 4
		expect(arr_two).toEqual([4, 5, 6]); // unchanged
	});
});

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
	test('super-simple example', () => {
		const arr = [1, 2, 3, 4];
		const removed = arr.splice(0, 1);
		expect(removed).toEqual([1]);
		expect(arr).toEqual([2, 3, 4]);
	});
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

describe('Array.prototype.reduce', () => {
	test('sums all elements in the array', () => {
		const arr = [1, 2, 3, 4];
		const sum = arr.reduce((acc, val) => acc + val, 0);
		expect(sum).toBe(10);
	});

	test('works without initial value (uses first element as accumulator)', () => {
		const arr = [5, 6, 7];
		const result = arr.reduce((acc, val) => acc * val);
		expect(result).toBe(210); // 5 * 6 * 7
	});

	test('throws on empty array without initial value', () => {
		const arr = [];
		expect(() => arr.reduce((acc, val) => acc + val)).toThrow();
	});

	test('can be used to access nested object properties from a path string', () => {
		const obj = { a: { b: { c: 3 } } };
		const path = "a.b.c";
		const value = path.split(".").reduce((acc, part) => acc && acc[part], obj);
		// double-and operator ('&&') returns last value if all are truthy
		expect(value).toBe(3);
	});

	test('does not throw an error and returns undefined when used to access nested object properties from a path string', () => {
		const obj = { a: { b: { c: 3 } } };
		const path = "a.b.c.d";
		const value = path.split(".").reduce((acc, part) => acc && acc[part], obj);
		expect(value).toBeUndefined();
	});
});

