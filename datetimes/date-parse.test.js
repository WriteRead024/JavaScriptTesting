

// date-parse.test.js
// Mar.4,2026
// GitHub Copilot
// for
// Rich W.

describe('Date.parse() ISO 8601 parsing', () => {
	const dtprs = (s) => Date.parse(s);
	const utc = (y, m, d, hh = 0, mm = 0, ss = 0, msPart = 0) =>
		Date.UTC(y, m, d, hh, mm, ss, msPart);

	test('parses UTC instants with Z', () => {
		expect(dtprs('2026-03-04T00:00:00Z')).toBe(utc(2026, 2, 4));
		expect(dtprs('2026-03-04T12:34:56Z')).toBe(utc(2026, 2, 4, 12, 34, 56));
		expect(dtprs('2026-03-04T12:34:56.789Z')).toBe(utc(2026, 2, 4, 12, 34, 56, 789));
	});

	test('parses explicit numeric offsets', () => {
		const z = dtprs('2026-03-04T00:00:00Z');
		expect(dtprs('2026-03-04T00:00:00+00:00')).toBe(z);
		expect(dtprs('2026-03-04T01:00:00+01:00')).toBe(z);
		expect(dtprs('2026-03-04T19:30:00+05:30')).toBe(dtprs('2026-03-04T14:00:00Z'));
		expect(dtprs('2026-03-04T07:30:00-05:00')).toBe(dtprs('2026-03-04T12:30:00Z'));
	});

	test('parses date-only ISO 8601 as UTC', () => {
		expect(dtprs('2026-03-04')).toBe(utc(2026, 2, 4));
		expect(dtprs('1970-01-01')).toBe(utc(1970, 0, 1));
		// Leap day
		expect(dtprs('2024-02-29')).toBe(utc(2024, 1, 29));
	});

	test('accepts space instead of T separator', () => {
		expect(dtprs('2026-03-04 12:34:56Z')).toBe(1772627696000);
	});

	test('parses fractional seconds with varying precision', () => {
		expect(dtprs('2026-03-04T12:34:56.7Z')).toBe(utc(2026, 2, 4, 12, 34, 56, 700));
		expect(dtprs('2026-03-04T12:34:56.78Z')).toBe(utc(2026, 2, 4, 12, 34, 56, 780));
		expect(dtprs('2026-03-04T12:34:56.789Z')).toBe(utc(2026, 2, 4, 12, 34, 56, 789));
	});

	test('parses midnight boundary correctly', () => {
		expect(dtprs('2026-03-04T23:59:59Z')).toBe(utc(2026, 2, 4, 23, 59, 59));
		expect(dtprs('2026-03-05T00:00:00Z')).toBe(utc(2026, 2, 5));
	});

	test('rejects clearly invalid ISO 8601 strings', () => {
		expect(Number.isNaN(dtprs('2026-13-04T00:00:00Z'))).toBe(true);
		expect(Number.isNaN(dtprs('2026-00-04T00:00:00Z'))).toBe(true);
		expect(Number.isNaN(dtprs('2026-03-04T24:01:00Z'))).toBe(true);
		expect(Number.isNaN(dtprs('2026-03-04T12:60:00Z'))).toBe(true);
	});

    test('curiously accepts invalid ISO 8601 string for midnight Feb. 30, 2026', () => {
		expect(Number.isNaN(dtprs('2026-02-30T00:00:00Z'))).toBe(false);
        expect(new Date(dtprs('2026-02-30T00:00:00Z')).getUTCDate()).toBe(2);
    });

	test('handles timezone offset equivalence', () => {
		const z = dtprs('2026-03-04T12:00:00Z');
		const plus2 = dtprs('2026-03-04T14:00:00+02:00');
		const minus8 = dtprs('2026-03-04T04:00:00-08:00');
		expect(plus2).toBe(z);
		expect(minus8).toBe(z);
	});

});

