/**
 * =====================================================
 * MEMORY & GARBAGE COLLECTION (INTERVIEW)
 * =====================================================
 *
 * JavaScript uses AUTOMATIC memory management
 */

/**
 * -----------------------------------------------------
 * 1. Stack vs Heap
 * -----------------------------------------------------
 *
 * Stack → primitives, function calls
 * Heap  → objects, arrays, functions
 */

/**
 * -----------------------------------------------------
 * 2. Garbage Collection
 * -----------------------------------------------------
 *
 * JS removes objects that are unreachable
 */

let user = { name: "Akshay" };
user = null; // eligible for GC

/**
 * -----------------------------------------------------
 * 3. Closures & memory leak ❌
 * -----------------------------------------------------
 */
function heavy() {
	const big = new Array(1000000).fill("data");
	return function () {
		console.log(big.length);
	};
}

const fn = heavy();
// big stays in memory ❗

/**
 * -----------------------------------------------------
 * 4. DOM memory leak (browser)
 * -----------------------------------------------------
 */
// element.addEventListener("click", handler);
// element removed but handler not cleaned → leak

/**
 * -----------------------------------------------------
 * 5. Global variables are dangerous
 * -----------------------------------------------------
 */
var globalLeak = "I stay forever";

/**
 * -----------------------------------------------------
 * FINAL SUMMARY ⭐
 * -----------------------------------------------------
 *
 * - Unreachable objects are collected
 * - Closures can retain memory
 * - Clean event listeners
 * - Avoid globals
 */
