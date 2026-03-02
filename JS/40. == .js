// Boolean → Number
// String → Number (in comparison)
// null only equals undefined
// + operator prefers string
// NaN is never equal

// Boolean vs Anything	Boolean → Number
// String vs Number	String → Number
// null vs undefined	true
// null vs Number	false
// undefined vs Number	false
// NaN vs anything	false

// Array → valueOf() (ignored)
// → toString()
// → becomes string
// → then normal primitive coercion rules apply
// object -> compare with references

//Object vs Object
// → Compare reference
// 
// Object vs Primitive
// → Convert object to primitive
// → Then compare

// ===============================
// PRIMITIVE COERCION RULES
// ===============================

// Boolean → Number
console.log(true == 1);          // true
console.log(false == '');        // true

// String → Number (in comparison)
console.log('5' == 5);           // true

// null only equals undefined
console.log(null == undefined);  // true
console.log(null == 0);          // false
console.log(undefined == 0);     // false

// NaN is never equal
console.log(NaN == NaN);         // false

// ===============================
// ARRAY COERCION
// ===============================

// Array → valueOf() ignored → toString() → String → Number (if needed)
console.log([] == 0);            // true   ([] → "" → 0)
console.log([1] == 1);           // true   ([1] → "1" → 1)
console.log([1,2] == "1,2");     // true   ([1,2] → "1,2")

// ===============================
// OBJECT COMPARISON
// ===============================

// Object vs Object → Reference comparison
console.log({} == {});           // false

const obj = {};
const ref = obj;
console.log(obj == ref);         // true

// ===============================
// + OPERATOR (Prefers String)
// ===============================

console.log(5 + '5');            // "55"
console.log([] + 1);             // "1"
console.log([1] + 1);            // "11"

// ===============================
// TRICKY ONE
// ===============================

console.log([] == ![]);          // true
// ![] → false
// false → 0
// [] → "" → 0
// 0 == 0 → true