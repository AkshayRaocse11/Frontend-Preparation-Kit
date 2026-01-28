/**
 * =====================================================
 * ASYNC / AWAIT – TRICKS, METHODS & INTERVIEW TRAPS
 * =====================================================
 *
 * Async/Await is syntactic sugar over Promises.
 * It makes asynchronous code look synchronous.
 *
 * IMPORTANT:
 * async/await does NOT make code synchronous.
 */

/**
 * -----------------------------------------------------
 * 1. What is async?
 * -----------------------------------------------------
 *
 * DEFINITION:
 * An async function ALWAYS returns a Promise.
 */

async function simpleAsync() {
	return "Hello";
}

console.log(simpleAsync()); // Promise { <fulfilled>: "Hello" }

/**
 * INTERVIEW FACT:
 * Even returning a value → wrapped in Promise.resolve()
 */

/**
 * -----------------------------------------------------
 * 2. await keyword
 * -----------------------------------------------------
 *
 * await:
 * - Pauses execution INSIDE async function
 * - Waits for Promise to resolve or reject
 */

async function exampleAwait() {
	const value = await Promise.resolve(10);
	console.log(value); // 10
}

exampleAwait();

/**
 * -----------------------------------------------------
 * 3. Error handling with try / catch
 * -----------------------------------------------------
 */
async function errorHandling() {
	try {
		await Promise.reject("Something went wrong");
	} catch (error) {
		console.log(error); // Something went wrong
	}
}

errorHandling();

/**
 * INTERVIEW TIP:
 * try/catch ONLY works with await.
 */

/**
 * -----------------------------------------------------
 * 4. async/await vs then/catch
 * -----------------------------------------------------
 */

// then/catch
Promise.resolve(5).then(res => console.log(res));

// async/await
(async function () {
	const res = await Promise.resolve(5);
	console.log(res);
})();

/**
 * INTERVIEW LINE:
 * async/await is just cleaner syntax for Promises.
 */

/**
 * -----------------------------------------------------
 * 5. Sequential vs Parallel execution (VERY IMPORTANT)
 * -----------------------------------------------------
 */

// ❌ Sequential (slow)
async function sequential() {
	const a = await Promise.resolve(1);
	const b = await Promise.resolve(2);
	return a + b;
}

// ✅ Parallel (fast)
async function parallel() {
	const [a, b] = await Promise.all([
		Promise.resolve(1),
		Promise.resolve(2)
	]);
	return a + b;
}

parallel().then(console.log); // 3

/**
 * INTERVIEW TRAP:
 * Using await one after another causes slow execution.
 */

/**
 * -----------------------------------------------------
 * 6. await inside loop (COMMON TRAP)
 * -----------------------------------------------------
 */

// ❌ Bad (runs sequentially)
async function badLoop() {
	for (let i = 1; i <= 3; i++) {
		await Promise.resolve(i);
	}
}

// ✅ Good (parallel)
async function goodLoop() {
	const promises = [1, 2, 3].map(n => Promise.resolve(n));
	await Promise.all(promises);
}

/**
 * -----------------------------------------------------
 * 7. async functions run synchronously until await
 * -----------------------------------------------------
 */
async function syncPart() {
	console.log("Before await");

	await Promise.resolve();

	console.log("After await");
}

syncPart();

/**
 * Output:
 * Before await
 * After await
 */

/**
 * INTERVIEW FACT:
 * Code before await runs synchronously.
 */

/**
 * -----------------------------------------------------
 * 8. await with non-Promise values
 * -----------------------------------------------------
 */
async function nonPromise() {
	const value = await 100;
	console.log(value); // 100
}

nonPromise();

/**
 * INTERVIEW FACT:
 * await wraps non-promises in Promise.resolve().
 */

/**
 * -----------------------------------------------------
 * 9. Forgetting await (BUG)
 * -----------------------------------------------------
 */
async function missingAwait() {
	const data = Promise.resolve("Data");
	console.log(data); // Promise ❌
}

missingAwait();

/**
 * -----------------------------------------------------
 * 10. async function error without try/catch
 * -----------------------------------------------------
 */
async function unhandledError() {
	throw new Error("Crash");
}

unhandledError().catch(err => console.log(err.message));

/**
 * INTERVIEW TIP:
 * Unhandled errors become rejected promises.
 */

/**
 * -----------------------------------------------------
 * 11. Top-level await (modern JS)
 * -----------------------------------------------------
 *
 * Allowed in ES modules (.mjs / type="module")
 */

// const data = await fetch(url); // ✅ in modules

/**
 * -----------------------------------------------------
 * FINAL GOLDEN RULES ⭐
 * -----------------------------------------------------
 *
 * - async always returns a Promise
 * - await pauses only inside async function
 * - try/catch works with await
 * - Use Promise.all for parallel execution
 * - await in loops is a performance trap
 * - async/await does NOT block the event loop
 */
