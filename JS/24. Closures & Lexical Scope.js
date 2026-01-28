/**
 * =====================================================
 * CLOSURES & LEXICAL SCOPE (INTERVIEW)
 * =====================================================
 * Lexical scope → where function is written
 * Closure → function + remembered variables
 * var → shared scope
 * let → block scope
 * 
 * These are CORE JavaScript concepts.
 * If you understand this file, you can handle
 * most JS interview questions confidently.
 */

/**
 * -----------------------------------------------------
 * 1. What is Lexical Scope?
 * -----------------------------------------------------
 *
 * DEFINITION:
 * Lexical scope means:
 * A function can access variables defined
 * in its own scope and its parent scope.
 *
 * Scope is decided at WRITE TIME, not run time.
 */

function parent() {
	const parentVar = "I am parent";

	function child() {
		console.log(parentVar); // accessible
	}

	child();
}

parent();

/**
 * INTERVIEW LINE:
 * "JavaScript uses lexical (static) scoping."
 */

/**
 * -----------------------------------------------------
 * 2. Scope Chain
 * -----------------------------------------------------
 */
const globalVar = "global";

function outer() {
	const outerVar = "outer";

	function inner() {
		const innerVar = "inner";
		console.log(globalVar, outerVar, innerVar);
	}

	inner();
}

outer();

/**
 * LOOKUP ORDER:
 * inner → outer → global
 */

/**
 * -----------------------------------------------------
 * 3. What is a Closure? ⭐ VERY IMPORTANT
 * -----------------------------------------------------
 *
 * DEFINITION:
 * A closure is created when a function
 * remembers variables from its lexical scope
 * even after the outer function has finished execution.
 */

function makeCounter() {
	let count = 0;

	return function () {
		count++;
		return count;
	};
}

const counter = makeCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

/**
 * WHY THIS WORKS?
 * - makeCounter() finished
 * - count is NOT destroyed
 * - inner function "closes over" count
 */

/**
 * -----------------------------------------------------
 * 4. Closure keeps data PRIVATE
 * -----------------------------------------------------
 */
function secret() {
	let password = "12345";

	return {
		getPassword() {
			return password;
		}
	};
}

const s = secret();

console.log(s.getPassword()); // 12345
console.log(s.password); // undefined

/**
 * INTERVIEW FACT:
 * Closures enable data encapsulation.
 */

/**
 * -----------------------------------------------------
 * 5. Multiple closures have independent memory
 * -----------------------------------------------------
 */
const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1()); // 1
console.log(counter1()); // 2

console.log(counter2()); // 1 ❗ separate memory

/**
 * -----------------------------------------------------
 * 6. Common Interview Trap (var in loop) ❌
 * -----------------------------------------------------
 */
for (var i = 0; i < 3; i++) {
	setTimeout(() => {
		console.log(i);
	}, 1000);
}

/**
 * OUTPUT:
 * 3
 * 3
 * 3
 *
 * WHY?
 * - var is function-scoped
 * - All callbacks share SAME i
 */

/**
 * -----------------------------------------------------
 * 7. Fix using let ✅
 * -----------------------------------------------------
 */
for (let i = 0; i < 3; i++) {
	setTimeout(() => {
		console.log(i);
	}, 1000);
}

/**
 * OUTPUT:
 * 0
 * 1
 * 2
 *
 * WHY?
 * - let creates a new block scope
 */

/**
 * -----------------------------------------------------
 * 8. Fix using Closure (Interview favorite)
 * -----------------------------------------------------
 */
for (var i = 0; i < 3; i++) {
	(function (j) {
		setTimeout(() => {
			console.log(j);
		}, 1000);
	})(i);
}

/**
 * OUTPUT:
 * 0
 * 1
 * 2
 */

/**
 * -----------------------------------------------------
 * 9. Closures and Memory (IMPORTANT)
 * -----------------------------------------------------
 *
 * Closures keep references alive.
 * Unused closures can cause memory leaks.
 */

function heavy() {
	const bigData = new Array(1000000).fill("data");

	return function () {
		console.log(bigData.length);
	};
}

const fn = heavy();
// bigData stays in memory as long as fn exists

/**
 * INTERVIEW FACT:
 * Closures are powerful but must be used carefully.
 */

/**
 * -----------------------------------------------------
 * 10. Closures in real-world (React example)
 * -----------------------------------------------------
 */
function createHandler(name) {
	return function () {
		console.log("Clicked:", name);
	};
}

const handleClick = createHandler("Button A");
handleClick(); // Clicked: Button A

/**
 * INTERVIEW FACT:
 * React hooks rely heavily on closures.
 */

/**
 * -----------------------------------------------------
 * FINAL INTERVIEW SUMMARY ⭐
 * -----------------------------------------------------
 *
 * - Lexical scope decides variable access
 * - Closure = function + remembered scope
 * - Closures keep variables alive
 * - let fixes most closure-in-loop issues
 * - Closures enable private data
 *
 * GOLDEN LINE:
 * "A closure is created when a function remembers
 * its lexical scope even after execution."
 */
