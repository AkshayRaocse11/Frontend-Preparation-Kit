// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// https://leetcode.com/problems/valid-anagram/description/
// var isAnagram = function(s, t) {
// 	if(s.length !== t.length) return false;
// 	s= s.split("").sort();
// 	t =t.split("").sort();
//
// 	for (var i = 0; i < s.length; i++)
// 		if (s[i] !== t[i])
// 			return false;
// 	return true;
// };

/**
 * Check if two strings are anagrams.
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
	// If lengths differ, they can't be anagrams
	if (s.length !== t.length) return false;

	// Frequency map: character -> count
	const count = {};

	// 1) Count each character in s
	for (const ch of s) {
		// If ch not seen before, (count[ch] || 0) is 0, then +1
		count[ch] = (count[ch] || 0) + 1;
	}

	// 2) Subtract counts using characters from t
	for (const ch of t) {
		// If ch is not in count, or already used up (0),
		// then t has an extra or mismatched character
		// for example already char become 0 that means anagram , suppose if same charcater comes again
		// that count is not mainated so we may see the value as 0 or negative or undefined then we return fales
		if (!count[ch]) return false;

		// Use one occurrence of ch
		count[ch]--;
	}

	// If we got here, all counts matched and went down to 0
	return true;
};