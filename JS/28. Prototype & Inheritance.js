/**
 * =====================================================
 * PROTOTYPE & INHERITANCE (INTERVIEW)
 * =====================================================
 *
 * JavaScript uses PROTOTYPAL inheritance
 * Objects inherit from other objects
 */

/**
 * -----------------------------------------------------
 * 1. Prototype basics
 * -----------------------------------------------------
 */
const obj = { name: "Akshay" };

console.log(obj.toString); // from Object.prototype

/**
 * INTERVIEW FACT:
 * Every object has an internal [[Prototype]]
 */

/**
 * -----------------------------------------------------
 * 2. __proto__ vs prototype
 * -----------------------------------------------------
 */
function Person(name) {
	this.name = name;
}

Person.prototype.greet = function () {
	console.log("Hello", this.name);
};

const p = new Person("Akshay");
p.greet();

/**
 * prototype → used by constructor
 * __proto__ → actual link in object
 */

/**
 * -----------------------------------------------------
 * 3. Prototype chain
 * -----------------------------------------------------
 */
console.log(p.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true

/**
 * -----------------------------------------------------
 * 4. Inheritance using Object.create
 * -----------------------------------------------------
 */
const base = {
	role: "admin"
};

const child = Object.create(base);
child.name = "User";

console.log(child.role); // admin

/**
 * -----------------------------------------------------
 * 5. Class syntax (syntactic sugar)
 * -----------------------------------------------------
 */
class Animal {
	speak() {
		console.log("Animal speaks");
	}
}

class Dog extends Animal {
	bark() {
		console.log("Dog barks");
	}
}

const d = new Dog();
d.speak();
d.bark();

/**
 * INTERVIEW FACT:
 * Classes still use prototypes internally.
 */

/**
 * -----------------------------------------------------
 * FINAL SUMMARY ⭐
 * -----------------------------------------------------
 *
 * - JS uses prototype-based inheritance
 * - Objects delegate to prototypes
 * - Classes are syntax sugar
 */
