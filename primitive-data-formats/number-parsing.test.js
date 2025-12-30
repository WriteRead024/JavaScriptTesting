
// number-parsing.test.js
// Jest unit tests for Number.isFinite() and isNaN(parseFloat())
// to determine if data is integer or floating point number
// started Dec.29,2025
// GitHub Copilot
// for
// Rich W.

describe('Number.isFinite() and isNaN(parseFloat()) usage', () => {
	test('Number.isFinite() with various values', () => {
		expect(Number.isFinite(42)).toBe(true); // integer
		expect(Number.isFinite(3.14)).toBe(true); // float
		expect(Number.isFinite('42')).toBe(false); // string
		expect(Number.isFinite(NaN)).toBe(false);
		expect(Number.isFinite(Infinity)).toBe(false);
		expect(Number.isFinite(undefined)).toBe(false);
		expect(Number.isFinite(null)).toBe(false);
		expect(Number.isFinite({})).toBe(false);
		expect(Number.isFinite([])).toBe(false);
	});

	test('isNaN(parseFloat()) with various values', () => {
		expect(isNaN(parseFloat('42'))).toBe(false); // string integer
		expect(isNaN(parseFloat('3.14'))).toBe(false); // string float
		expect(isNaN(parseFloat('abc'))).toBe(true); // not a number
		expect(isNaN(parseFloat('42abc'))).toBe(false); // parses leading number
		expect(isNaN(parseFloat(''))).toBe(true); // empty string
		expect(isNaN(parseFloat(null))).toBe(true); // null
		expect(isNaN(parseFloat(undefined))).toBe(true); // undefined
		expect(isNaN(parseFloat(NaN))).toBe(true); // NaN
		expect(isNaN(parseFloat(42))).toBe(false); // number
		expect(isNaN(parseFloat(3.14))).toBe(false); // float
	});

	test('Detect integer vs float using parseFloat and Number.isInteger', () => {
		function isIntegerString(val) {
			const num = parseFloat(val);
			return !isNaN(num) && Number.isFinite(num) && Number.isInteger(num);
		}
		function isFloatString(val) {
			const num = parseFloat(val);
			return !isNaN(num) && Number.isFinite(num) && !Number.isInteger(num);
		}
		expect(isIntegerString('42')).toBe(true);
		expect(isIntegerString('3.14')).toBe(false);
		expect(isIntegerString('abc')).toBe(false);
		expect(isIntegerString('42abc')).toBe(true);
		expect(isIntegerString('')).toBe(false);
		expect(isIntegerString(null)).toBe(false);
		expect(isIntegerString(undefined)).toBe(false);
		expect(isIntegerString(NaN)).toBe(false);
		expect(isIntegerString(42)).toBe(true);
		expect(isIntegerString(3.14)).toBe(false);

		expect(isFloatString('42')).toBe(false);
		expect(isFloatString('3.14')).toBe(true);
		expect(isFloatString('abc')).toBe(false);
		expect(isFloatString('42abc')).toBe(false); // parses as integer
		expect(isFloatString('')).toBe(false);
		expect(isFloatString(null)).toBe(false);
		expect(isFloatString(undefined)).toBe(false);
		expect(isFloatString(NaN)).toBe(false);
		expect(isFloatString(42)).toBe(false);
		expect(isFloatString(3.14)).toBe(true);
	});

	test('Edge cases for parseFloat and isFinite', () => {
		expect(Number.isFinite(parseFloat('Infinity'))).toBe(false);
		expect(Number.isFinite(parseFloat('-Infinity'))).toBe(false);
		expect(Number.isFinite(parseFloat('NaN'))).toBe(false);
		expect(Number.isFinite(parseFloat('0x10'))).toBe(true); // hex string parsing stops at 'x'
		expect(Number.isFinite(parseFloat('0b10'))).toBe(true); // binary string parsing stops at 'b'
		expect(Number.isFinite(parseFloat('0o10'))).toBe(true); // octal string parssing stops at 'o'
	});
});
