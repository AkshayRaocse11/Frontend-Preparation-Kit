/**
 * =====================================================
 * CALL / APPLY / BIND – DEEP SCENARIOS (INTERVIEW)
 * =====================================================
 * call → now, args separate
 * apply → now, args array
 * bind → later, fixed this
 * bind ≠ arrow functions
 * 
 * Purpose:
 * - Control `this`
 * - Function borrowing
 * - Fix lost context
 *
 * INTERVIEW GOLD LINE ⭐:
 * call/apply/bind are used to EXPLICITLY set `this`.
 */

/**
 * -----------------------------------------------------
 * 1. call(), apply(), bind() – BASIC DIFFERENCE
 * -----------------------------------------------------
 *
 * call  → invoke immediately, arguments separately
 * apply → invoke immediately, arguments as array
 * bind  → returns NEW function, does NOT invoke immediately
 */

function greet(city, country) {
	console.log(this.name, city, country);
}

const user = { name: "Akshay" };

greet.call(user, "Bangalore", "India");
greet.apply(user, ["Bangalore", "India"]);

const boundGreet = greet.bind(user);
boundGreet("Bangalore", "India");

/**
 * -----------------------------------------------------
 * 2. Function borrowing (VERY COMMON)
 * -----------------------------------------------------
 */
const user1 = {
	name: "Akshay"
};

const user2 = {
	name: "Rahul"
};

function sayName() {
	console.log(this.name);
}

sayName.call(user1); // Akshay
sayName.call(user2); // Rahul

/**
 * INTERVIEW FACT:
 * Methods can be reused across objects.
 */

/**
 * -----------------------------------------------------
 * 3. Lost `this` problem (CLASSIC TRAP)
 * -----------------------------------------------------
 */
const person = {
	name: "Akshay",
	greet() {
		console.log(this.name);
	}
};

const greetFn = person.greet;
greetFn(); // undefined ❌

/**
 * FIX using bind
 */
const fixedGreet = person.greet.bind(person);
fixedGreet(); // Akshay

/**
 * -----------------------------------------------------
 * 4. setTimeout + this (REAL-WORLD BUG)
 * -----------------------------------------------------
 */
const timer = {
	seconds: 0,
	start() {
		setTimeout(function () {
			console.log(this.seconds); // undefined ❌
		}, 1000);
	}
};

timer.start();

/**
 * FIX using bind
 */
const timerFixed = {
	seconds: 0,
	start() {
		setTimeout(function () {
			console.log(this.seconds);
		}.bind(this), 1000);
	}
};

timerFixed.start();

/**
 * -----------------------------------------------------
 * 5. bind creates PERMANENT this
 * -----------------------------------------------------
 */
function show() {
	console.log(this.name);
}

const obj1 = { name: "One" };
const obj2 = { name: "Two" };

const bound = show.bind(obj1);
bound.call(obj2); // One ❗ (cannot be changed)

/**
 * INTERVIEW FACT:
 * bind can*
**/