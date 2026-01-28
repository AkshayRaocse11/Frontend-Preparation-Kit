/**
 * =====================================================
 * IMPORTANT OBJECT METHODS – DEFINITIONS & USE CASES
 * =====================================================
 * Assign → Shallow Copy -> First Level
 * Freeze → Lock values - First Level
 * Seal → Lock shape
 * Keys/Values/Entries → Iterate
 * hasOwn → Safe check
 * Create → Prototype
 * Purpose:
 * - Interview preparation
 * - JavaScript fundamentals
 * - React immutability understanding
 *
 * NOTE:
 * All Object copy & freeze methods are SHALLOW unless stated.
 */

/**
 * -----------------------------------------------------
 * Base Object for Examples
 * -----------------------------------------------------
 */
const user = {
	name: "Akshay",
	age: 28,
	address: {
		city: "Bangalore"
	}
};

/**
 * =====================================================
 * Object.assign()
 * =====================================================
 *
 * DEFINITION:
 * Copies enumerable own properties from source objects
 * to a target object.
 *
 * TYPE:
 * Shallow Copy
 *
 * USE CASES:
 * - Clone an object (first level)
 * - Merge objects
 * - React state updates (carefully)
 *
 * UNKNOWN / INTERVIEW FACT:
 * - Modifies the TARGET object
 * - Nested objects share reference
 */
const assignCopy = Object.assign({}, user);

assignCopy.age = 29;
assignCopy.address.city = "Mangalore";

console.log("assignCopy:", assignCopy);
console.log("original user:", user);

/**
 * =====================================================
 * Object.freeze()
 * =====================================================
 *
 * DEFINITION:
 * Prevents modification of an object's properties.
 *
 * TYPE:
 * Shallow Freeze
 *
 * USE CASES:
 * - Protect configuration objects
 * - Prevent accidental mutation
 *
 * UNKNOWN / INTERVIEW FACT:
 * - Nested objects are NOT frozen
 * - Silent failure (error only in strict mode)
 */
const frozenUser = Object.freeze({
	name: "Akshay",
	address: { city: "Bangalore" }
});

frozenUser.name = "New"; // ❌ ignored
frozenUser.address.city = "Delhi"; // ✅ allowed

console.log("frozenUser:", frozenUser);

/**
 * =====================================================
 * Object.seal()
 * =====================================================
 *
 * DEFINITION:
 * Prevents adding or deleting properties,
 * but allows modifying existing ones.
 *
 * USE CASES:
 * - Lock object structure
 * - API response normalization
 *
 * UNKNOWN FACT:
 * - Values can still change
 */
const sealedUser = Object.seal({
	name: "Akshay",
	age: 28
});

sealedUser.age = 29; // ✅
sealedUser.city = "BLR"; // ❌
delete sealedUser.name; // ❌

console.log("sealedUser:", sealedUser);

/**
 * =====================================================
 * Object.keys()
 * =====================================================
 *
 * DEFINITION:
 * Returns array of object's own enumerable keys.
 *
 * USE CASES:
 * - Iteration
 * - Validation
 * - Form handling
 *
 * UNKNOWN FACT:
 * - Order is preserved (insertion order)
 */
console.log("keys:", Object.keys(user));

/**
 * =====================================================
 * Object.values()
 * =====================================================
 *
 * DEFINITION:
 * Returns array of values of own enumerable properties.
 *
 * USE CASES:
 * - Data transformation
 * - Validation
 */
console.log("values:", Object.values(user));

/**
 * =====================================================
 * Object.entries() ⭐ VERY IMPORTANT
 * =====================================================
 *
 * DEFINITION:
 * Returns array of [key, value] pairs.
 *
 * USE CASES:
 * - Looping objects
 * - Convert object → Map
 * - Rendering dynamic UI in React
 *
 * UNKNOWN FACT:
 * - Commonly used with Object.fromEntries()
 */
console.log("entries:", Object.entries(user));

Object.entries(user).forEach(([key, value]) => {
	console.log(key, value);
});

/**
 * =====================================================
 * Object.hasOwn() (Modern)
 * =====================================================
 *
 * DEFINITION:
 * Checks if property belongs directly to object.
 *
 * USE CASES:
 * - Safer property checks
 * - Avoid prototype pollution bugs
 *
 * UNKNOWN FACT:
 * - Safer than hasOwnProperty
 */
console.log(Object.hasOwn(user, "name")); // true
console.log(Object.hasOwn(user, "toString")); // false

/**
 * =====================================================
 * Object.create()
 * =====================================================
 *
 * DEFINITION:
 * Creates a new object using an existing object
 * as its prototype.
 *
 * USE CASES:
 * - Prototypal inheritance
 * - Memory-efficient shared methods
 *
 * UNKNOWN FACT:
 * - Used internally by JS inheritance model
 */
const baseUser = { role: "admin" };
const derivedUser = Object.create(baseUser);

derivedUser.name = "Akshay";

console.log("derivedUser.role:", derivedUser.role); // admin
console.log("hasOwn role:", derivedUser.hasOwnProperty("role")); // false

/**
 * =====================================================
 * FINAL INTERVIEW TAKEAWAYS ⭐
 * =====================================================
 *
 * 1. Object.assign → shallow copy
 * 2. Object.freeze → shallow immutability
 * 3. Object.seal → structure locked
 * 4. keys / values / entries → iteration
 * 5. hasOwn → safest property check
 * 6. Object.create → prototype chain
 *
 * GOLDEN RULE:
 * JavaScript objects are reference-based.
 */
