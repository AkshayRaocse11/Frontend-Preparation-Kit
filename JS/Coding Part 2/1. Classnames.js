/**
 * Conditionally joins CSS class names into a single space-separated string.
 *
 * HOW IT WORKS:
 * - Loops through each argument
 * - Checks its type and processes accordingly
 * - Builds a result string with spaces
 * - Trims and returns final string
 *
 * TYPE HANDLING:
 * ┌─────────────┬────────────────────────────────────────────┐
 * │ Type        │ What happens                               │
 * ├─────────────┼────────────────────────────────────────────┤
 * │ string      │ Appended directly to result                │
 * │ number      │ Appended if non-zero (0 is falsy)          │
 * │ object      │ Keys with truthy values are extracted       │
 * │ array       │ Spread and passed recursively to classNames │
 * │ null        │ Skipped (caught by !== null check)          │
 * │ undefined   │ Skipped (caught by !== undefined check)     │
 * │ false       │ Skipped (no condition matches)              │
 * └─────────────┴────────────────────────────────────────────┘
 *
 * FLOW:
 *
 * classNames('a', ['b', { c: true, d: false }])
 *
 * Step 1: 'a' → string → result = " a"
 * Step 2: ['b', {...}] → array → recursively call classNames('b', { c: true, d: false })
 *     Step 2a: 'b' → string → result = " b"
 *     Step 2b: { c: true, d: false }
 *              → object → loop entries
 *              → c is truthy → extractedKeys = ['c']
 *              → d is falsy  → skipped
 *              → recursively call classNames('c')
 *                  → 'c' → string → returns "c"
 *     → returns "b c"
 * → result = " a b c"
 * → trim() → "a b c"
 *
 * @param {...(any|Object|Array<any|Object|Array>)} args
 * @return {string}
 *
 * @example classNames('foo', 'bar')
 * // 'foo bar'
 *
 * @example classNames({ active: true, disabled: false })
 * // 'active'
 *
 * @example classNames('a', ['b', { c: true, d: false }])
 * // 'a b c'
 *
 * @example classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, '')
 * // 'bar 1'
 */
export default function classNames(...args) {
	let result = "";

	args.forEach((item) => {
		// String → directly append
		if (typeof item === "string") {
			result += " " + item;

			// Array → spread into recursive call
		} else if (Array.isArray(item)) {
			result += " " + classNames(...item);

			// Object (non-null, non-undefined) → extract truthy keys
		} else if (typeof item === "object" && item !== null && item !== undefined) {
			let extractedKeys = [];
			for (const [key, value] of Object.entries(item)) {
				if (value) {
					extractedKeys.push(key);
				}
			}
			result += "  " + classNames(...extractedKeys);

			// Non-zero number → append
		} else if (typeof item === "number" && item !== 0) {
			result += " " + item;
		}
	});

	// Remove extra leading/trailing spaces
	return result.trim();
}

classNames('foo', 'bar'); // 'foo bar'
classNames('foo', { bar: true }); // 'foo bar'
classNames({ 'foo-bar': true }); // 'foo-bar'
classNames({ 'foo-bar': false }); // ''
classNames({ foo: true }, { bar: true }); // 'foo bar'
classNames({ foo: true, bar: true }); // 'foo bar'
classNames({ foo: true, bar: false, qux: true }); // 'foo qux'
classNames('a', ['b', { c: true, d: false }]); // 'a b c'
classNames(
	'foo',
	{
		bar: true,
		duck: false,
	},
	'baz',
	{ quux: true },
); // 'foo bar baz quux'
