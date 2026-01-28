/**
 * =====================================================
 * EVENT LOOP – MICROTASK vs MACROTASK (INTERVIEW)
 * =====================================================
 *
 * The Event Loop decides:
 * - WHEN async code runs
 * - WHAT runs first
 * - HOW JavaScript stays non-blocking
 *
 * JavaScript is:
 * - Single-threaded
 * - Non-blocking (thanks to Event Loop)
 */

/**
 * -----------------------------------------------------
 * 1. What is the Event Loop?
 * -----------------------------------------------------
 *
 * DEFINITION:
 * The Event Loop continuously checks:
 * - Call Stack
 * - Microtask Queue
 * - Macrotask Queue
 *
 * And decides what to execute next.
 */

/**
 * -----------------------------------------------------
 * 2. Main Components (INTERVIEW MUST)
 * -----------------------------------------------------
 *
 * 1. Call Stack        → synchronous code
 * 2. Microtask Queue   → Promise.then, catch, finally
 * 3. Macrotask Queue   → setTimeout, setInterval, DOM events
 */

/**
 * -----------------------------------------------------
 * 3. Execution Priority (VERY IMPORTANT)
 * -----------------------------------------------------
 *
 * Order:
 * 1️⃣ Call Stack
 * 2️⃣ Microtask Queue (ALL tasks)
 * 3️⃣ Macrotask Queue (ONE task)
 *
 * Microtasks ALWAYS run before Macrotasks.
 */

/**
 * -----------------------------------------------------
 * 4. Simple example
 * -----------------------------------------------------
 */
console.log("Start");

setTimeout(() => {
	console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {
	console.log("Promise");
});

console.log("End");

/**
 * OUTPUT:
 * Start
 * End
 * Promise
 * setTimeout
 */

/**
 * WHY?
 * - Synchronous code first
 * - Promise → Microtask
 * - setTimeout → Macrotask
 */

/**
 * -----------------------------------------------------
 * 5. Microtask queue example
 * -----------------------------------------------------
 */
Promise.resolve()
	.then(() => console.log("Microtask 1"))
	.then(() => console.log("Microtask 2"));

/**
 * OUTPUT:
 * Microtask 1
 * Microtask 2
 *
 * NOTE:
 * All microtasks are executed before moving to macrotasks.
 */

/**
 * -----------------------------------------------------
 * 6. Macrotask queue example
 * -----------------------------------------------------
 */
setTimeout(() => console.log("Macrotask 1"), 0);
setTimeout(() => console.log("Macrotask 2"), 0);

/**
 * OUTPUT (order preserved):
 * Macrotask 1
 * Macrotask 2
 */

/**
 * -----------------------------------------------------
 * 7. setTimeout(0) is NOT immediate ❌
 * -----------------------------------------------------
 */
console.log("A");

setTimeout(() => console.log("B"), 0);

console.log("C");

/**
 * OUTPUT:
 * A
 * C
 * B
 *
 * INTERVIEW FACT:
 * setTimeout(0) runs AFTER microtasks.
 */

/**
 * -----------------------------------------------------
 * 8. Promise inside setTimeout
 * -----------------------------------------------------
 */
setTimeout(() => {
	console.log("Timeout start");

	Promise.resolve().then(() => {
		console.log("Promise inside timeout");
	});

	console.log("Timeout end");
}, 0);

/**
 * OUTPUT:
 * Timeout start
 * Timeout end
 * Promise inside timeout
 */

/**
 * WHY?
 * - setTimeout callback → macrotask
 * - Promise inside → microtask (runs before next macrotask)
 */

/**
 * -----------------------------------------------------
 * 9. async / await and Event Loop
 * -----------------------------------------------------
 */
async function asyncExample() {
	console.log("Async start");

	await Promise.resolve();

	console.log("Async after await");
}

console.log("Script start");
asyncExample();
console.log("Script end");

/**
 * OUTPUT:
 * Script start
 * Async start
 * Script end
 * Async after await
 */

/**
 * INTERVIEW FACT:
 * await puts remaining code into Microtask Queue.
 */

/**
 * -----------------------------------------------------
 * 10. Infinite microtask trap ❌
 * -----------------------------------------------------
 */
function infiniteMicrotask() {
	Promise.resolve().then(infiniteMicrotask);
}

// infiniteMicrotask(); // ❌ blocks macrotasks

/**
 * INTERVIEW FACT:
 * Too many microtasks can starve macrotasks.
 */

/**
 * -----------------------------------------------------
 * FINAL INTERVIEW SUMMARY ⭐
 * -----------------------------------------------------
 *
 * - JS executes sync code first
 * - Microtasks run BEFORE macrotasks
 * - Promises → Microtask queue
 * - setTimeout → Macrotask queue
 * - async/await uses microtasks
 * - setTimeout(0) is NOT immediate
 *
 * GOLDEN RULE:
 * "Clear microtasks completely before macrotasks"
 */
