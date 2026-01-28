/**
 * =====================================================
 * PLAIN JAVASCRIPT OBJECT – TRICKS & TIPS (INTERVIEW)
 * =====================================================
 *
 * Focus:
 * - Lesser-known behaviors
 * - Common interview traps
 * - Practical usage
 */

/**
 * -----------------------------------------------------
 * 1. Objects are compared by REFERENCE
 * -----------------------------------------------------
 */
const a = { x: 1 };
const b = { x: 1 };

console.log(a === b); // false
console.log(a.x === b.x); // true

/**
 * TIP:
 * Objects with same structure are NOT equal.
 */

/**
 * -----------------------------------------------------
 * 2. Shallow copy tricks
 * -----------------------------------------------------
 */
const user = { name: "Akshay", address: { city: "BLR" } };
const copy = { ...user };

copy.address.city = "Delhi";
console.log(user.address.city); // Delhi ❗

/**
 * TIP:
 * Spread & Object.assign are SHALLOW.
 */

/**
 * -----------------------------------------------------
 * 3. Safely check property existence
 * -----------------------------------------------------
 */
console.log("name" in user); // true (checks prototype too)
console.log(Object.hasOwn(user, "name")); // true (OWN only)

/**
 * TIP:
 * Prefer Object.hasOwn() in interviews.
 */

/**
 * -----------------------------------------------------
 * 4. Delete property (mutates object)
 * -----------------------------------------------------
 */
delete user.name;
console.log(user);

/**
 * TIP:
 * delete changes object shape (can hurt performance).
 */

/**
 * -----------------------------------------------------
 * 5. Dynamic property names
 * -----------------------------------------------------
 */
const key = "role";
const obj = {
	[key]: "admin"
};

console.log(obj.role); // admin

/**
 * -----------------------------------------------------
 * 6. Object.entries → most powerful iterator
 * -----------------------------------------------------
 */
const person = { name: "Akshay", age: 28 };

Object.entries(person).forEach(([k, v]) => {
	console.log(k, v);
});

/**
 * TIP:
 * Commonly used in React for rendering lists.
 */

/**
 * -----------------------------------------------------
 * 7. Convert array to object
 * -----------------------------------------------------
 */
const arr = ["a", "b", "c"];
const result = Object.fromEntries(
	arr.map((v, i) => [v, i])
);

console.log(result); // { a:0, b:1, c:2 }

/**
 * -----------------------------------------------------
 * 8. Freeze is SHALLOW
 * -----------------------------------------------------
 */
const frozen = Object.freeze({
	a: 1,
	nested: { b: 2 }
});

frozen.nested.b = 10; // allowed
console.log(frozen.nested.b); // 10

/**
 * TIP:
 * Freeze protects only first level.
 */

/**
 * -----------------------------------------------------
 * 9. Seal vs Freeze
 * -----------------------------------------------------
 */
const sealed = Object.seal({ a: 1 });

sealed.a = 2; // allowed
sealed.b = 3; // not allowed

/**
 * -----------------------------------------------------
 * 10. Avoid storing functions inside objects (React)
 * -----------------------------------------------------
 */
const badState = {
	count: 0,
	increment() {} // ❌ avoid in state
};

/**
 * TIP:
 * Keep functions OUTSIDE data objects.
 */

/**
 * -----------------------------------------------------
 * 11. Object.create() for prototype sharing
 * -----------------------------------------------------
 */
const base = { role: "admin" };
const child = Object.create(base);

console.log(child.role); // admin
console.log(child.hasOwnProperty("role")); // false

/**
 * -----------------------------------------------------
 * 12. Object keys order (interview fact)
 * -----------------------------------------------------
 */
const orderTest = {
	2: "two",
	1: "one",
	a: "A",
	b: "B"
};

console.log(Object.keys(orderTest));
// ["1","2","a","b"]

/**
 * TIP:
 * Numeric keys come first (sorted).
 */

/**
 * =====================================================
 * FINAL GOLDEN RULES ⭐
 * =====================================================
 *
 * - Objects are reference-based
 * - Copy only what you change
 * - Shallow copy is default
 * - Freeze & seal are shallow
 * - Prefer Object.entries & hasOwn
 */
