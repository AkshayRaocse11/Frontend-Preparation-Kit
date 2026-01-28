/**
 * =====================================================
 * HOISTING & TEMPORAL DEAD ZONE (TDZ)
 * =====================================================
 *
 * Hoisting = moving declarations to the top of scope
 * TDZ = time where variables exist but cannot be accessed
 */

/**
 * -----------------------------------------------------
 * 1. Hoisting with var
 * -----------------------------------------------------
 */
console.log(a); // undefined
var a = 10;

/**
 * INTERVIEW FACT:
 * var is hoisted and initialized with undefined
 */

/**
 * -----------------------------------------------------
 * 2. Hoisting with let / const ❌
 * -----------------------------------------------------
 */
console.log(b); // ReferenceError
let b = 20;

/**
 * WHY?
 * b is in Temporal Dead Zone
 */

/**
 * -----------------------------------------------------
 * 3. Temporal Dead Zone (TDZ)
 * -----------------------------------------------------
 *
 * TDZ = time between entering scope and declaration
 */
{
	// TDZ starts
	// console.log(c); ❌ ReferenceError
	let c = 30;
	console.log(c); // 30
}

/**
 * -----------------------------------------------------
 * 4. const must be initialized
 * -----------------------------------------------------
 */
// const x; ❌ SyntaxError
const x = 5;

/**
 * -----------------------------------------------------
 * 5. Function declarations are fully hoisted
 * -----------------------------------------------------
 */
sayHello();

function sayHello() {
	console.log("Hello");
}

/**
 * -----------------------------------------------------
 * 6. Function expressions are NOT hoisted
 * -----------------------------------------------------
 */
// sayHi(); ❌ TypeError
const sayHi = function () {
	console.log("Hi");
};

/**
 * -----------------------------------------------------
 * FINAL INTERVIEW SUMMARY ⭐
 * -----------------------------------------------------
 *
 * - var → hoisted, undefined
 * - let/const → hoisted but in TDZ
 * - TDZ prevents early access
 * - Function declarations fully hoisted
 */
