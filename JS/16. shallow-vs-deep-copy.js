/**
 * ============================================
 * Shallow Copy vs Deep Copy in JavaScript
 * ============================================
 *
 * This file demonstrates:
 * 1. Shallow Copy using Spread Operator
 * 2. Shallow Copy using Object.assign
 * 3. Deep Copy using JSON.parse(JSON.stringify)
 * 4. Deep Copy using structuredClone
 *
 * Focus:
 * - Reference behavior
 * - Nested object mutation
 * - Limitations of each approach
 *
 * Important for:
 * - React state management
 * - Interview preparation
 * - Avoiding mutation bugs
 */

/**
 * --------------------------------------------
 * Original Object
 * --------------------------------------------
 * - Contains nested object
 * - Contains Date value
 * - Contains a function
 */
const obj = {
	name: "Akshay",
	age: 28,
	mobileNumber: 7010260744,
	nestedAddress: {
		city: "Bangalore",
		date: Date.now(),
		testing: function () {
			return "Akshay";
		}
	}
};

/**
 * --------------------------------------------
 * Deep Copy using JSON.stringify / JSON.parse
 * --------------------------------------------
 * ❌ Limitations:
 * - Functions are removed
 * - Dates become strings
 * - Not safe for complex objects
 */
const deepCopy = JSON.parse(JSON.stringify(obj));
deepCopy.nestedAddress.city = "Malur";

/**
 * testing function is LOST here
 * deepCopy.nestedAddress.testing === undefined
 */

/**
 * --------------------------------------------
 * Deep Copy using structuredClone (Modern)
 * --------------------------------------------
 * ✅ Handles:
 * - Nested objects
 * - Dates
 *
 * ❌ Does NOT support:
 * - Functions
 * - DOM nodes
 */
const structuredCloneObj = structuredClone(obj);

/**
 * --------------------------------------------
 * Shallow Copy using Spread Operator
 * --------------------------------------------
 * - Copies only first level
 * - Nested objects share reference
 */
const copyObj = { ...obj };

// Safe change (primitive)
copyObj.age = 29;

// ❌ Unsafe change (mutates original object)
copyObj.nestedAddress.city = "Mangalore";

/**
 * --------------------------------------------
 * Shallow Copy using Object.assign
 * --------------------------------------------
 * Same behavior as spread operator
 */
const copyObj2 = Object.assign({}, copyObj);

/**
 * --------------------------------------------
 * Console Logs for Observation
 * --------------------------------------------
 */
console.log("Shallow Copy (spread):", copyObj);
console.log("Shallow Copy (Object.assign):", copyObj2);
console.log("Deep Copy (structuredClone):", structuredCloneObj);

/**
 * Function check
 */
console.log(
	"Function in deepCopy:",
	deepCopy.nestedAddress.testing // undefined
);

console.log(
	"Function in original object:",
	obj.nestedAddress.testing() // "Akshay"
);

/**
 * --------------------------------------------
 * Key Takeaways
 * --------------------------------------------
 *
 * 1. Shallow copy shares nested references
 * 2. JSON deep copy loses functions & Dates
 * 3. structuredClone is safest for pure data
 * 4. React prefers IMMUTABLE updates, not deep cloning
 */
