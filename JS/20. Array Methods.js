/**
 * =====================================================
 * PLAIN JAVASCRIPT ARRAYS – TRICKS & TIPS (INTERVIEW)
 * =====================================================
 * map → change
 * filter → remove
 * reduce → combine
 * slice → safe
 * splice → danger
 * sort → mutates
 * 
 * Focus:
 * - Reference behavior
 * - Common array methods
 * - Mutation vs immutability
 * - Interview traps
 */

/**
 * -----------------------------------------------------
 * 1. Arrays are OBJECTS (Reference types)
 * -----------------------------------------------------
 */
const a = [1, 2, 3];
const b = [1, 2, 3];

console.log(a === b); // false

const c = a;
console.log(a === c); // true

/**
 * TIP:
 * Arrays are compared by reference, not by value.
 */

/**
 * -----------------------------------------------------
 * 2. Shallow copy of arrays
 * -----------------------------------------------------
 */
const arr = [{ x: 1 }, { x: 2 }];
const copy = [...arr];

copy[0].x = 100;
console.log(arr[0].x); // 100 ❗

/**
 * TIP:
 * Spread creates a shallow copy.
 */

/**
 * -----------------------------------------------------
 * 3. map() → transform array (MOST IMPORTANT)
 * -----------------------------------------------------
 */
const nums = [1, 2, 3];

const doubled = nums.map(n => n * 2);
console.log(doubled); // [2, 4, 6]

/**
 * TIP:
 * map returns a NEW array (non-mutating)
 */

/**
 * -----------------------------------------------------
 * 4. filter() → remove items
 * -----------------------------------------------------
 */
const evens = nums.filter(n => n % 2 === 0);
console.log(evens); // [2]

/**
 * -----------------------------------------------------
 * 5. reduce() → accumulate to single value
 * -----------------------------------------------------
 */
const sum = nums.reduce((acc, cur) => acc + cur, 0);
console.log(sum); // 6

/**
 * INTERVIEW FACT:
 * reduce can replace map + filter if needed.
 */

/**
 * -----------------------------------------------------
 * 6. find() vs filter()
 * -----------------------------------------------------
 */
const users = [{ id: 1 }, { id: 2 }];

console.log(users.find(u => u.id === 2)); // { id: 2 }
console.log(users.filter(u => u.id === 2)); // [{ id: 2 }]

/**
 * TIP:
 * find → single item
 * filter → array
 */

/**
 * -----------------------------------------------------
 * 7. push / pop / shift / unshift (MUTATING)
 * -----------------------------------------------------
 */
const m = [1, 2];

m.push(3);     // add end
m.pop();       // remove end
m.shift();     // remove start
m.unshift(0);  // add start

console.log(m);

/**
 * INTERVIEW TRAP:
 * These mutate the original array ❗
 */

/**
 * -----------------------------------------------------
 * 8. slice() vs splice()
 * -----------------------------------------------------
 * slice(start, end)
 *
 * Returns a new array
 *
 * Does NOT change the original array
 *
 * end is NOT included
 * 
 * splice() — mutating (dangerous if not careful)
 *
 * splice(start, deleteCount)
 *
 * CHANGES the original array
 *
 * Removes items from the array itself
 *
 * Returns the removed items
 */
const s = [1, 2, 3, 4];

const result = s.slice(1, 3);

console.log(result); // [2, 3]
console.log(s);      // [1, 2, 3, 4] ✅ unchanged

s.splice(1, 2);
console.log(s); // [1, 4]

/**
 * TIP:
 * slice → non-mutating
 * splice → mutating
 */

/**
 * -----------------------------------------------------
 * 9. sort() mutates array
 * -----------------------------------------------------
 */
const nums2 = [10, 2, 5];

nums2.sort((a, b) => a - b);
console.log(nums2); // [2, 5, 10]

/**
 * INTERVIEW FACT:
 * sort MUTATES the array.
 */

/**
 * -----------------------------------------------------
 * 10. includes() vs indexOf()
 * -----------------------------------------------------
 */
const arr2 = [1, 2, 3];

console.log(arr2.includes(2)); // true
console.log(arr2.indexOf(2));  // 1

/**
 * TIP:
 * includes is cleaner and supports NaN.
 */

/**
 * -----------------------------------------------------
 * 11. flat()
 * -----------------------------------------------------
 */
const nested = [1, [2, [3]]];

console.log(nested.flat(2)); // [1, 2, 3]

/**
 * -----------------------------------------------------
 * 12. Array.isArray()
 * -----------------------------------------------------
 */
console.log(Array.isArray([])); // true
console.log(Array.isArray({})); // false

/**
 * INTERVIEW MUST:
 * typeof [] === "object"
 */

/**
 * -----------------------------------------------------
 * 13. Destructuring
 * -----------------------------------------------------
 */
const [first, second] = [10, 20];
console.log(first, second); // 10 20

/**
 * -----------------------------------------------------
 * FINAL GOLDEN RULES ⭐
 * -----------------------------------------------------
 *
 * - Arrays are reference types
 * - Spread is shallow
 * - map / filter / reduce do NOT mutate
 * - push / pop / splice / sort DO mutate
 * - Prefer immutability (especially in React)
 */
