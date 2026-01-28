/**
 * =====================================================
 * THIS KEYWORD – INTERVIEW MASTER FILE
 * =====================================================
 *
 * Regular fn → dynamic this
 * Arrow fn → lexical this
 * Method call → object before dot
 * bind → permanent this
 * call/apply → temporary this
 * new → fresh this
 * 
 * "this" is NOT about where a function is written.
 * "this" is about HOW a function is CALLED.
 *
 * MOST IMPORTANT INTERVIEW LINE ⭐:
 * 👉 "this is determined at call-time, not write-time"
 */

/**
 * -----------------------------------------------------
 * 1. Global context
 * -----------------------------------------------------
 */

// Browser
console.log(this); // window (browser)

// Node.js
// console.log(this); // {} (module scope)

/**
 * INTERVIEW FACT:
 * Global `this` differs in browser vs Node.
 */

/**
 * -----------------------------------------------------
 * 2. this inside a regular function
 * -----------------------------------------------------
 */
function normalFunction() {
	console.log(this);
}

normalFunction();

/**
 * Browser: window
 * Strict mode: undefined
 */

"use strict";
function strictFn() {
	console.log(this);
}
strictFn(); // undefined

/**
 * INTERVIEW TRAP:
 * In strict mode, `this` is undefined in functions.
 */

/**
 * -----------------------------------------------------
 * 3. this inside an object method
 * -----------------------------------------------------
 */
const user = {
	name: "Akshay",
	greet() {
		console.log(this.name);
	}
};

user.greet(); // Akshay

/**
 * WHY?
 * user.greet() → this === user
 */

/**
 * -----------------------------------------------------
 * 4. Method borrowing (this changes!)
 * -----------------------------------------------------
 */
const anotherUser = { name: "Rahul" };

anotherUser.greet = user.greet;
anotherUser.greet(); // Rahul

/**
 * INTERVIEW FACT:
 * this depends on the CALLER object.
 */

/**
 * -----------------------------------------------------
 * 5. this lost when function is extracted ❌
 * -----------------------------------------------------
 */
const greetFn = user.greet;
greetFn(); // undefined (or window.name)

/**
 * WHY?
 * Function is called WITHOUT object reference.
 */

/**
 * -----------------------------------------------------
 * 6. Fixing this using bind()
 * -----------------------------------------------------
 */
const boundGreet = user.greet.bind(user);
boundGreet(); // Akshay

/**
 * INTERVIEW LINE:
 * bind returns a NEW function with fixed this.
 */

/**
 * -----------------------------------------------------
 * 7. call() and apply()
 * -----------------------------------------------------
 */
function sayHi(city) {
	console.log(this.name, city);
}

sayHi.call(user, "Bangalore");
sayHi.apply(user, ["Bangalore"]);

/**
 * call → arguments separately
 * apply → arguments as array
 */

/**
 * -----------------------------------------------------
 * 8. Arrow functions & this ⭐ VERY IMPORTANT
 * -----------------------------------------------------
 *
 * Arrow functions DO NOT have their own this.
 * They inherit this from lexical scope.
 */

const obj = {
	name: "Akshay",
	arrow: () => {
		console.log(this.name);
	},
	normal() {
		console.log(this.name);
	}
};

obj.arrow();  // undefined
obj.normal(); // Akshay

/**
 * INTERVIEW GOLD:
 * ❌ Never use arrow function as object method if you need this.
 */

/**
 * -----------------------------------------------------
 * 9. Arrow function inside method (GOOD use case)
 * -----------------------------------------------------
 */
const counter = {
	count: 0,
	increment() {
		setTimeout(() => {
			this.count++;
			console.log(this.count);
		}, 1000);
	}
};

counter.increment(); // 1

/**
 * WHY?
 * Arrow inherits this from increment()
 */

/**
 * -----------------------------------------------------
 * 10. this inside constructor function
 * ---**/