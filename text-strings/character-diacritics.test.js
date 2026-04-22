

// character-diacritics.test.js
// started 4/21/2026
// GitHub Copilot
// for
// Rich W.

describe('French character diacritics', () => {
    test('string equivalence with and without normalization', () => {
        const combined = 'e\u0301'; // 'e' + combining acute accent
        const precomposed = '\u00e9'; // 'é' (precomposed)

        // They look the same but are not strictly equal strings
        expect(combined).not.toBe(precomposed);
        expect(combined === precomposed).toBe(false);

        // Once normalized, they are equal
        expect(combined.normalize()).toBe(precomposed.normalize());
    });

    test('alphabetical sorting with localeCompare', () => {
        const words = ['côte', 'cote', 'coté', 'côté'];

        // Default JS sort uses UTF-16 code units
        const defaultSorted = [...words].sort();
        expect(defaultSorted).toEqual(['cote', 'coté', 'côte', 'côté']);

        // Locale-aware sort using French rules
        const frSorted = [...words].sort((a, b) => a.localeCompare(b, 'fr-FR'));
        // In French sorting, accents are evaluated right-to-left as a secondary difference
        expect(frSorted).toEqual(['cote', 'coté', 'côte', 'côté']);
    });

    test('RegEx matching diacritics with unicode flag', () => {
        const text = 'Le serveur affairé a servi le café.';

        // Without unicode flag, \w only matches ASCII [a-zA-Z0-9_]
        const wordsNoUnicode = text.match(/\w+/g);
        expect(wordsNoUnicode).toEqual(['Le', 'serveur', 'affair', 'a', 'servi', 'le', 'caf']); // Drops ç and é

        // Using Unicode property escapes (\p{L} matches any letter in any language) requires 'u' flag
        const wordsUnicode = text.match(/\p{L}+/gu);
        expect(wordsUnicode).toEqual(['Le', 'serveur', 'affairé', 'a', 'servi', 'le', 'café']);
    });

    test('String prototype and Locale functions (toUpperCase vs toLocaleUpperCase)', () => {
        const mixed = 'éléphant';

        // Standard toUpperCase works fine for most French characters
        expect(mixed.toUpperCase()).toBe('ÉLÉPHANT');

        const eszett = 'weiß';
        // However, some locales might have specific upper-casing rules.
        // German eszett uppercasing demonstrating Locale differences
        expect(eszett.toLocaleUpperCase('de-DE')).toBe('WEISS');

        // For French, it's pretty standard, but always safe to use toLocale for UI
        expect(mixed.toLocaleUpperCase('fr-FR')).toBe('ÉLÉPHANT');
    });

    test('Out-of-locale characters do not throw error', () => {

        const eszett = 'weiß';
        expect(eszett.toLocaleUpperCase('fr-FR')).toBe('WEISS');

    });

    test('Searching with diacritics', () => {
        const text = 'L\'Hôtel de Ville';

        // Exact match fails if missing accent
        expect(text.includes('Hotel')).toBe(false);

        // To do an accent-insensitive search, you can normalize to NFD and remove combining diacritical marks
        const removeAccents = (str) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

        expect(removeAccents(text).includes('Hotel')).toBe(true);
    });

    test('fromCharCode is strictly equal to fromCodePoint for French diacritics', () => {

        const chars = ['é', 'è', 'à', 'ç', 'â', 'ê', 'î', 'ô', 'û', 'ë', 'œ', '«', '»'];

        chars.forEach(char => {
            const codeUnit = char.charCodeAt(0);
            const codePoint = char.codePointAt(0);

            // For characters in the Basic Multilingual Plane (BMP) like these, 
            // the 16-bit code unit matches the Unicode code point.
            expect(codeUnit).toStrictEqual(codePoint);
            expect(String.fromCharCode(codeUnit)).toStrictEqual(String.fromCodePoint(codePoint));
        });
    });

    test('String.prototype.concat() works correctly with diacritic characters', () => {
        const prefix = 'C\'est ';
        const word = 'très';
        const suffix = ' bien';

        const combined = prefix.concat(word, suffix);
        expect(combined).toBe('C\'est très bien');
    });

    test('String.prototype.includes() matching and not matching diacritic characters', () => {
        const text = 'Voilà, le dîner est prêt.';

        // Matches normal 'e' character to 'e' in "le" as expected
        expect(text.includes('e')).toBe(true);

        // Matches exact diacritic characters and substrings
        expect(text.includes('à')).toBe(true);
        expect(text.includes('dîner')).toBe(true);
        expect(text.includes('prêt')).toBe(true);

        // Does NOT match the unaccented equivalents
        expect(text.includes('a')).toBe(false);
        expect(text.includes('diner')).toBe(false);
        expect(text.includes('pret')).toBe(false);

        // Does NOT match an unaccented character just because its accented version is there
        // (Note: 'Voilà' has an unaccented 'o' and unaccented 'i', but there is no unaccented 'a')
        expect(text.includes('Voila')).toBe(false);
    });

    test('String length differs for precomposed vs combined diacritics', () => {
        const precomposed = 'é'; // Extracted as a single Unicode character (\u00e9)
        const combined = 'e\u0301'; // Base letter 'e' + combining acute accent

        // Although they look identical, their JavaScript string lengths differ
        // because JS string length counts 16-bit code units, not visual glyphs.
        expect(precomposed.length).toBe(1);
        expect(combined.length).toBe(2);

        // Normalizing the combined string to NFC (precomposed) collapses the length
        expect(combined.normalize('NFC').length).toBe(1);
    });
});


